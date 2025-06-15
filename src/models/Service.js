import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
  name: {type: String},
  category: {type: String,},
  price:{type:Number}

}, { timestamps: true })

export default mongoose.models.Service || mongoose.model('Service', serviceSchema)
