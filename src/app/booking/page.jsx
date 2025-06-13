'use client'
import { useState } from 'react'
import BookingSteps from '@/components/customer/BookingSteps'
import BarberSelection from '@/components/customer/BarberSelection'
import DateTimeSelection from '@/components/customer/DateTimeSelection'
import SeatSelection from '@/components/customer/SeatSelection'
import BookingSummary from '@/components/customer/BookingSummary'

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState(null)
  const [selectedDateTime, setSelectedDateTime] = useState(null)
  const [selectedSeat, setSelectedSeat] = useState(null)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Your Appointment</h1>
          
          <BookingSteps currentStep={step} />
          
          <div className="mt-8">
            {step === 1 && (
              <BarberSelection 
                onSelect={setSelectedBarber} 
                selected={selectedBarber} 
                onNext={nextStep} 
              />
            )}
            
            {step === 2 && (
              <DateTimeSelection 
                onSelect={setSelectedDateTime} 
                selected={selectedDateTime} 
                onNext={nextStep} 
                onBack={prevStep} 
              />
            )}
            
            {step === 3 && (
              <SeatSelection 
                onSelect={setSelectedSeat} 
                selected={selectedSeat} 
                onNext={nextStep} 
                onBack={prevStep} 
              />
            )}
            
            {step === 4 && (
              <BookingSummary 
                barber={selectedBarber} 
                dateTime={selectedDateTime} 
                seat={selectedSeat} 
                onBack={prevStep} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}