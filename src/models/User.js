import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String,},
  role:{type:String , default:"Barber"}

}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', userSchema)
