import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
  name: {type: String},
  experience: {type: Number,},
  phone:{type:Number },
  email:{type:String},
  speciality:{type:String},
  isActive:{type:Boolean , default:true},

}, { timestamps: true })

export default mongoose.models.Staff || mongoose.model('Staff', staffSchema)
