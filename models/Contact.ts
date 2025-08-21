import mongoose, { Document } from 'mongoose';

// Define TypeScript interface for Contact
export interface IContact extends Document {
  fullName: string;
  email: string;
  projectType?: string;
  priority?: string;
  implementationTimeframe?: string;
  projectScale?: string;
  projectScope: string;
  createdAt: Date;
  service?: string;
  message?: string;
  status?: 'new' | 'in-progress' | 'completed';
}

// Define the Contact schema
const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  projectType: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    required: false,
  },
  implementationTimeframe: {
    type: String,
    required: false,
  },
  projectScale: {
    type: String,
    required: false,
  },
  projectScope: {
    type: String,
    required: [true, 'Project details are required'],
    maxlength: [1000, 'Project details cannot exceed 1000 characters'],
  },
  service: {
    type: String,
    required: false,
    enum: [
      'Web Development',
      'Mobile App Development',
      'E-commerce Solutions',
      'SaaS Development',
      'UI/UX Design',
      'Digital Marketing',
      'QA & Testing',
      'Consultation',
      'Other'
    ]
  },
  message: {
    type: String,
    required: false,
    trim: true,
    maxLength: [1000, 'Message cannot exceed 1000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'completed'],
    default: 'new'
  }
}, {
  timestamps: true
});

// Create indexes
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

// Export the Contact model
const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
