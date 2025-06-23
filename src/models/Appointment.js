import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  barber: {type: String},
  services: [{type: String,}],
  totalPrice:{type:Number},
  time:{type:String},
   date:{type:String},
   customer:{
    address:{type:String},
    name:{type:String},
    phone:{type:String},
   }
   ,
   status:{type:String , default:"pending"}
  

}, { timestamps: true })

export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema)
