import mongoose from 'mongoose';

interface INewsletter extends mongoose.Document {
  email: string;
  subscribedAt: Date;
  status: 'active' | 'unsubscribed';
  preferences?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    topics: string[];
  };
}

const NewsletterSchema = new mongoose.Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed'],
    default: 'active'
  },
  preferences: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
      default: 'weekly'
    },
    topics: [{
      type: String,
      enum: ['technology', 'web-development', 'mobile-apps', 'design', 'business']
    }]
  }
}, {
  timestamps: true
});

// Create indexes
NewsletterSchema.index({ email: 1 }, { unique: true });
NewsletterSchema.index({ subscribedAt: -1 });
NewsletterSchema.index({ status: 1 });

export default mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);
