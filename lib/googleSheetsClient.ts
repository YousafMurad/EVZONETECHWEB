import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

/**
 * Get an authenticated Google Sheets document instance
 */
export async function getSpreadsheet(sheetId: string) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Google Sheets credentials not found in environment variables');
    }

    // Fix private key format - ensure it has proper PEM formatting
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    // Handle different private key formats that might be in the env var
    if (!privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }
    
    console.log('Google Sheets: Creating auth with email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    
    // Create JWT client for authentication
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create document with auth - using v4 constructor method with both arguments
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    
    // Load document properties
    await doc.loadInfo();
    
    return doc;
  } catch (error) {
    console.error('Error accessing Google Sheet:', error);
    throw new Error('Failed to access Google Sheet');
  }
}

/**
 * Ensure a sheet exists with the required headers
 */
export async function getOrCreateSheet(doc: GoogleSpreadsheet, sheetTitle: string, headers: string[]) {
  let sheet = doc.sheetsByTitle[sheetTitle];
  
  if (!sheet) {
    sheet = await doc.addSheet({ 
      title: sheetTitle, 
      headerValues: headers 
    });
    console.log(`Created new sheet: ${sheetTitle}`);
  }
  
  return sheet;
}

/**
 * Add a new contact form submission to Google Sheets
 */
export async function addContactSubmission(data: {
  fullName: string;
  email: string;
  projectType: string;
  priority: string;
  projectScope: string;
}) {
  try {
    // Check if GOOGLE_SHEET_ID exists
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error('GOOGLE_SHEET_ID not found in environment variables');
      return { success: false, error: 'Missing Google Sheet ID configuration' };
    }
    
    const doc = await getSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    const sheet = await getOrCreateSheet(
      doc, 
      'Contact Submissions',
      ['Timestamp', 'Full Name', 'Email', 'Project Type', 'Priority', 'Project Details']
    );
    
    // Add the row with data
    await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Full Name': data.fullName,
      'Email': data.email,
      'Project Type': data.projectType,
      'Priority': data.priority,
      'Project Details': data.projectScope
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding contact submission:', error);
    return { success: false, error: 'Failed to add submission to Google Sheets' };
  }
}

/**
 * Check if an email already exists in the newsletter subscriptions
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    // Check if GOOGLE_SHEET_ID exists
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error('GOOGLE_SHEET_ID not found in environment variables');
      throw new Error('Missing Google Sheet ID configuration');
    }
    
    const doc = await getSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    // Get the newsletter sheet, don't create if it doesn't exist
    const sheetTitle = 'Newsletter Subscriptions';
    let sheet = doc.sheetsByTitle[sheetTitle];
    
    if (!sheet) {
      // If sheet doesn't exist, no subscriptions exist yet
      return false;
    }
    
    // Load all rows to check for the email
    const rows = await sheet.getRows();
    
    // Check if any row has this email
    return rows.some(row => {
      const rowEmail = row.get('Email');
      return rowEmail && rowEmail.toLowerCase() === email.toLowerCase();
    });
    
  } catch (error) {
    console.error('Error checking if email exists:', error);
    // In case of error, assume email doesn't exist to avoid blocking legitimate subscriptions
    return false;
  }
}

/**
 * Add a new newsletter subscription to Google Sheets
 */
export async function addNewsletterSubscription(email: string) {
  try {
    // Check if GOOGLE_SHEET_ID exists
    if (!process.env.GOOGLE_SHEET_ID) {
      console.error('GOOGLE_SHEET_ID not found in environment variables');
      return { success: false, error: 'Missing Google Sheet ID configuration' };
    }
    
    // Check if email already exists
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      return { success: false, error: 'This email is already subscribed to our newsletter' };
    }
    
    const doc = await getSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    const sheet = await getOrCreateSheet(
      doc, 
      'Newsletter Subscriptions',
      ['Timestamp', 'Email', 'Source']
    );
    
    // Add the row with data
    await sheet.addRow({
      'Timestamp': new Date().toISOString(),
      'Email': email,
      'Source': 'Website Newsletter Form'
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding newsletter subscription:', error);
    return { success: false, error: 'Failed to add subscription to Google Sheets' };
  }
}


