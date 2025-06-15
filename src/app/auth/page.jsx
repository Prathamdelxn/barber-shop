'use client'

import React, { useState, useEffect } from 'react'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Droplets, Zap, Heart, Star } from 'lucide-react'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
export default function SignInPage() {
    const router=useRouter();
    const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState([])


  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { x, y, id: Date.now() }
    setRipples(prev => [...prev, newRipple])
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData)
//   }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Login failed');
    }

    console.log('Login successful:', data);

    // Optional: Store token in localStorage (or cookies)
     login(data.token,data.user);

    // Redirect or show success message
    router.push('/admin');  // if using next/router
  } catch (err) {
    console.error('Login error:', err.message);
    alert(err.message); // or show a toast message
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: `translate(-50%, -50%)`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Water drops */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <Droplets className="text-blue-400/30 hover:text-blue-300/50 transition-colors duration-300" size={20 + Math.random() * 20} />
        </div>
      ))}

      {/* Icon effects */}
      <div className="absolute top-20 left-20 animate-pulse">
        <Zap className="text-yellow-400/40" size={40} />
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Heart className="text-pink-400/40" size={35} />
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse" style={{ animationDelay: '2s' }}>
        <Star className="text-purple-400/40" size={30} />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden" onClick={createRipple}>
          {ripples.map(ripple => (
            <div
              key={ripple.id}
              className="absolute rounded-full bg-white/20 pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: '20px',
                height: '20px',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 1s ease-out forwards'
              }}
            />
          ))}

          {/* Header */}
          <div className="relative p-8 pb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4 shadow-lg">
                <User className="text-white" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-white/70">Sign in to continue your journey</p>
            </div>
          </div>

          {/* Sign-in Form */}
          <div className="p-8 pt-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-white/40 group-focus-within:text-blue-400 transition-colors" size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:bg-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="text-white/40 group-focus-within:text-blue-400 transition-colors" size={20} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:bg-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Sign In</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-10px) rotate(90deg); }
        }
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
