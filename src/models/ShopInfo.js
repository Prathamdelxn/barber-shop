import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  shopName: { type: String },
  shopLogo: { type: String },
  contactPhone:{type:String},
  contactEmail:{type:String},
  socialMedia: [
    {
      platform: { type: String },
      url: { type: String },
    },
  ],
  address: { type: String },

  businessHours: {
    monday: {
      open: { type: String },
      close: { type: String },
    },
    tuesday: {
      open: { type: String },
      close: { type: String },
    },
    wednesday: {
      open: { type: String },
      close: { type: String },
    },
    thursday: {
      open: { type: String },
      close: { type: String },
    },
    friday: {
      open: { type: String },
      close: { type: String },
    },
    saturday: {
      open: { type: String },
      close: { type: String },
    },
    sunday: {
      open: { type: String },
      close: { type: String },
    },
  },
}, { timestamps: true });

export default mongoose.models.Shop || mongoose.model('Shop', shopSchema);
