import { z } from 'zod';

/**
 * Validate an email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Contact form schema
export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is too short').max(100, 'Full name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Project type is required'),
  priority: z.string().min(1, 'Priority is required'),
  projectScope: z.string().min(10, 'Project details are too short').max(1000, 'Project details are too long')
    .transform(val => val.replace(/<\/?[^>]+(>|$)/g, '')), // Basic sanitization
  recaptchaToken: z.string().min(1, 'reCAPTCHA verification is required')
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  recaptchaToken: z.string().min(1, 'reCAPTCHA verification is required')
});

/**
 * Validate form data against schema
 */
export function validateForm(data: any, schema: any): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  for (const field in schema) {
    const rules = schema[field];
    const value = data[field];
    
    // Check required fields
    if (rules.required && (!value || value.trim() === '')) {
      errors[field] = rules.errorMessage || `${field} is required`;
      continue;
    }
    
    // Skip validation if field is not required and empty
    if (!rules.required && (!value || value.trim() === '')) {
      continue;
    }
    
    // Validate string length
    if (typeof value === 'string') {
      if (rules.minLength && value.length < rules.minLength) {
        errors[field] = rules.errorMessage || `${field} must be at least ${rules.minLength} characters`;
      }
      
      if (rules.maxLength && value.length > rules.maxLength) {
        errors[field] = rules.errorMessage || `${field} must be no more than ${rules.maxLength} characters`;
      }
    }
    
    // Custom validation function
    if (rules.validate && !rules.validate(value)) {
      errors[field] = rules.errorMessage || `${field} is invalid`;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
