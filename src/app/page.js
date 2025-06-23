// // // import StatsCards from "@/components/admin/StatsCards";
// // // import RecentBookings from "@/components/admin/RecentBookings";
// // // import BarbersAvailability from "@/components/admin/BarbersAvailability";
// // // import SeatsStatus from "@/components/admin/SeatsStatus";
// // // // import CalendarView from '@/components/admin/CalendarView'

// // // export default function AdminDashboard() {
// // //   return (
// // //     <div className="space-y-6">
// // //       <div className="flex justify-between items-center">
// // //         <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
// // //         <div className="flex space-x-3">
// // //           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
// // //             Generate Report
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <StatsCards />

// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
// // //           {/* <CalendarView /> */}
// // //         </div>
// // //         <div className="bg-white p-6 rounded-xl shadow">
// // //           <BarbersAvailability />
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         <div className="bg-white p-6 rounded-xl shadow">
// // //           <RecentBookings />
// // //         </div>
// // //         <div className="bg-white p-6 rounded-xl shadow">
// // //           <SeatsStatus />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import { Star, Phone, MapPin, Clock, Scissors, Award, Users, Calendar } from 'lucide-react';

// // export default function BarberShopLandingPage() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [activeSection, setActiveSection] = useState('home');

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const services = [
// //     { name: 'Classic Haircut', price: '$35', description: 'Traditional scissor cut with styling' },
// //     { name: 'Beard Trim', price: '$25', description: 'Professional beard shaping and grooming' },
// //     { name: 'Hot Towel Shave', price: '$45', description: 'Luxurious traditional straight razor shave' },
// //     { name: 'Hair Wash & Style', price: '$20', description: 'Deep cleanse with premium products' },
// //     { name: 'Mustache Trim', price: '$15', description: 'Precision mustache grooming' },
// //     { name: 'Full Service', price: '$65', description: 'Complete haircut, wash, and styling package' }
// //   ];

// //   const testimonials = [
// //     { name: 'Marcus Johnson', rating: 5, text: 'Best barber shop in the city! The attention to detail is incredible.' },
// //     { name: 'David Chen', rating: 5, text: 'Professional service and great atmosphere. Highly recommended!' },
// //     { name: 'Robert Williams', rating: 5, text: 'Been coming here for years. Consistent quality every time.' }
// //   ];

// //   const barbers = [
// //     { name: 'Tony Rodriguez', experience: '12 years', specialty: 'Classic Cuts & Fades' },
// //     { name: 'Mike Thompson', experience: '8 years', specialty: 'Beard Styling & Shaves' },
// //     { name: 'Alex Carter', experience: '10 years', specialty: 'Modern Styles & Color' }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white">
// //       {/* Navigation */}
// //       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //         isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
// //       }`}>
// //         <div className="container mx-auto px-6 flex justify-between items-center">
// //           <div className="text-2xl font-bold text-amber-400">
// //             Elite Barber Studio
// //           </div>
// //           <div className="hidden md:flex space-x-8">
// //             {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
// //               <a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 className="hover:text-amber-400 transition-colors duration-300 font-medium"
// //               >
// //                 {item}
// //               </a>
// //             ))}
// //           </div>
// //           <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
// //             Book Now
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>
// //        <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] animate-pulse">
// // </div>

        
// //          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
// //         <div className="mb-8">
// //              <Scissors className="w-16 h-16 mx-auto text-amber-400 mb-4 animate-bounce" />
// //            </div>
// //            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
// //              Elite Cuts
// //            </h1>
// //            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
// //              Where tradition meets modern style. Experience the finest grooming in the city.
// //            </p>
// //            <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <a href="/user">
// // <button  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
// //                Book Appointment
// //              </button>
// //             </a>
             
// //              <a href='#services'>
// //                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
// //                View Services
// //              </button>

// //              </a>
            
// //            </div>
// //          </div>
 
// //       </section>

  
// //       <section id="services" className="py-20 bg-gray-800">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Our Services</h2>
// //             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
// //               Premium grooming services tailored to perfection
// //             </p>
// //           </div>
          
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gray-900 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700"
// //               >
// //                 <div className="flex justify-between items-start mb-4">
// //                   <h3 className="text-xl font-bold text-amber-400">{service.name}</h3>
// //                   <span className="text-2xl font-bold text-white">{service.price}</span>
// //                 </div>
// //                 <p className="text-gray-300 leading-relaxed">{service.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
// //         <div className="container mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">
// //             <div>
// //               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-400">
// //                 Crafting Excellence Since 2010
// //               </h2>
// //               <p className="text-lg text-gray-300 mb-6 leading-relaxed">
// //                 Elite Barber Studio has been the cornerstone of men's grooming in our community for over a decade. 
// //                 We combine traditional barbering techniques with modern styling to deliver an unparalleled experience.
// //               </p>
// //               <p className="text-lg text-gray-300 mb-8 leading-relaxed">
// //                 Our master barbers are dedicated craftsmen who take pride in every cut, every shave, and every detail 
// //                 that makes you look and feel your absolute best.
// //               </p>
              
// //               <div className="grid grid-cols-3 gap-8 mb-8">
// //                 <div className="text-center">
// //                   <div className="flex justify-center mb-2">
// //                     <Users className="w-8 h-8 text-amber-400" />
// //                   </div>
// //                   <div className="text-2xl font-bold text-white">5000+</div>
// //                   <div className="text-gray-400">Happy Clients</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="flex justify-center mb-2">
// //                     <Award className="w-8 h-8 text-amber-400" />
// //                   </div>
// //                   <div className="text-2xl font-bold text-white">13</div>
// //                   <div className="text-gray-400">Years Experience</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <div className="flex justify-center mb-2">
// //                     <Star className="w-8 h-8 text-amber-400" />
// //                   </div>
// //                   <div className="text-2xl font-bold text-white">4.9</div>
// //                   <div className="text-gray-400">Rating</div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="relative">
// //               <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-8 rounded-2xl">
// //                 <h3 className="text-2xl font-bold text-black mb-6">Meet Our Master Barbers</h3>
// //                 <div className="space-y-4">
// //                   {barbers.map((barber, index) => (
// //                     <div key={index} className="bg-black/20 p-4 rounded-lg">
// //                       <h4 className="font-bold text-black">{barber.name}</h4>
// //                       <p className="text-gray-800">{barber.experience} • {barber.specialty}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Gallery Section */}
// //       <section id="gallery" className="py-20 bg-gray-800">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Our Work</h2>
// //             <p className="text-xl text-gray-300">
// //               Precision cuts that speak for themselves
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //             {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
// //               <div
// //                 key={item}
// //                 className="aspect-square bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center group cursor-pointer"
// //               >
// //                 <Scissors className="w-12 h-12 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-20 bg-gradient-to-br from-black to-gray-900">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">What Our Clients Say</h2>
// //             <p className="text-xl text-gray-300">
// //               Don't just take our word for it
// //             </p>
// //           </div>
          
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {testimonials.map((testimonial, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300"
// //               >
// //                 <div className="flex mb-4">
// //                   {[...Array(testimonial.rating)].map((_, i) => (
// //                     <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
// //                   ))}
// //                 </div>
// //                 <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
// //                 <div className="font-bold text-amber-400">{testimonial.name}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section id="contact" className="py-20 bg-gray-900">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Visit Our Shop</h2>
// //             <p className="text-xl text-gray-300">
// //               Ready for your next great cut?
// //             </p>
// //           </div>
          
// //           <div className="grid lg:grid-cols-2 gap-16">
// //             <div>
// //               <div className="space-y-8">
// //                 <div className="flex items-center space-x-4">
// //                   <MapPin className="w-8 h-8 text-amber-400 flex-shrink-0" />
// //                   <div>
// //                     <h3 className="text-xl font-bold mb-2">Location</h3>
// //                     <p className="text-gray-300">123 Main Street, Downtown<br />New York, NY 10001</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-center space-x-4">
// //                   <Phone className="w-8 h-8 text-amber-400 flex-shrink-0" />
// //                   <div>
// //                     <h3 className="text-xl font-bold mb-2">Phone</h3>
// //                     <p className="text-gray-300">(555) 123-4567</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-center space-x-4">
// //                   <Clock className="w-8 h-8 text-amber-400 flex-shrink-0" />
// //                   <div>
// //                     <h3 className="text-xl font-bold mb-2">Hours</h3>
// //                     <div className="text-gray-300">
// //                       <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
// //                       <p>Saturday: 8:00 AM - 6:00 PM</p>
// //                       <p>Sunday: 10:00 AM - 4:00 PM</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
// //               <h3 className="text-2xl font-bold mb-6 text-amber-400">Book Your Appointment</h3>
// //               <div className="space-y-6">
// //                 <div>
// //                   <input
// //                     type="text"
// //                     placeholder="Your Name"
// //                     className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-amber-400 focus:outline-none text-white"
// //                   />
// //                 </div>
// //                 <div>
// //                   <input
// //                     type="email"
// //                     placeholder="Your Email"
// //                     className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-amber-400 focus:outline-none text-white"
// //                   />
// //                 </div>
// //                 <div>
// //                   <input
// //                     type="tel"
// //                     placeholder="Your Phone"
// //                     className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-amber-400 focus:outline-none text-white"
// //                   />
// //                 </div>
// //                 <div>
// //                   <select className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-amber-400 focus:outline-none text-white">
// //                     <option>Select Service</option>
// //                     {services.map((service, index) => (
// //                       <option key={index} value={service.name}>{service.name}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <textarea
// //                     placeholder="Special Requests"
// //                     rows="4"
// //                     className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-amber-400 focus:outline-none text-white resize-none"
// //                   ></textarea>
// //                 </div>
// //                 <button
// //                   onClick={() => alert('Booking functionality would be implemented here!')}
// //                   className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
// //                 >
// //                   Book Appointment
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-black py-12">
// //         <div className="container mx-auto px-6">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             <div>
// //               <h3 className="text-2xl font-bold text-amber-400 mb-4">Elite Barber Studio</h3>
// //               <p className="text-gray-400 mb-4">
// //                 Your destination for premium men's grooming and traditional barbering services.
// //               </p>
// //               <div className="flex space-x-4">
// //                 {['Facebook', 'Instagram', 'Twitter'].map((social) => (
// //                   <div key={social} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 cursor-pointer">
// //                     <span className="text-xs">{social[0]}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
            
// //             <div>
// //               <h4 className="font-bold text-white mb-4">Services</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>Haircuts</li>
// //                 <li>Beard Trimming</li>
// //                 <li>Hot Towel Shaves</li>
// //                 <li>Hair Styling</li>
// //               </ul>
// //             </div>
            
// //             <div>
// //               <h4 className="font-bold text-white mb-4">Quick Links</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
// //                 <li><a href="#services" className="hover:text-amber-400 transition-colors">Our Services</a></li>
// //                 <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
// //                 <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
// //               </ul>
// //             </div>
            
// //             <div>
// //               <h4 className="font-bold text-white mb-4">Contact Info</h4>
// //               <div className="space-y-2 text-gray-400">
// //                 <p>123 Main Street</p>
// //                 <p>New York, NY 10001</p>
// //                 <p>(555) 123-4567</p>
// //                 <p>info@elitebarber.com</p>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
// //             <p>&copy; 2025 Elite Barber Studio. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Star, Phone, MapPin, Clock, Scissors, Award, Users, Calendar, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export default function BarberShopLandingPage() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     { name: 'Classic Haircut', price: '$35', description: 'Traditional scissor cut with styling', icon: <Scissors className="w-6 h-6" /> },
//     { name: 'Beard Trim', price: '$25', description: 'Professional beard shaping and grooming', icon: <Scissors className="w-6 h-6" /> },
//     { name: 'Hot Towel Shave', price: '$45', description: 'Luxurious traditional straight razor shave', icon: <Scissors className="w-6 h-6" /> },
//     { name: 'Hair Wash & Style', price: '$20', description: 'Deep cleanse with premium products', icon: <Scissors className="w-6 h-6" /> },
//     { name: 'Mustache Trim', price: '$15', description: 'Precision mustache grooming', icon: <Scissors className="w-6 h-6" /> },
//     { name: 'Full Service', price: '$65', description: 'Complete haircut, wash, and styling package', icon: <Scissors className="w-6 h-6" /> }
//   ];

//   const testimonials = [
//     { name: 'Marcus Johnson', rating: 5, text: 'Best barber shop in the city! The attention to detail is incredible.', avatar: 'MJ' },
//     { name: 'David Chen', rating: 5, text: 'Professional service and great atmosphere. Highly recommended!', avatar: 'DC' },
//     { name: 'Robert Williams', rating: 5, text: 'Been coming here for years. Consistent quality every time.', avatar: 'RW' }
//   ];

//   const barbers = [
//     { name: 'Tony Rodriguez', experience: '12 years', specialty: 'Classic Cuts & Fades', image: '/barber1.jpg' },
//     { name: 'Mike Thompson', experience: '8 years', specialty: 'Beard Styling & Shaves', image: '/barber2.jpg' },
//     { name: 'Alex Carter', experience: '10 years', specialty: 'Modern Styles & Color', image: '/barber3.jpg' }
//   ];

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   const slideInFromLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   const slideInFromRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 }
//   };

//   return (
//     <div className="min-h-screen bg-amber-50 text-gray-800">
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//       }`}>
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <div className="text-2xl font-bold text-amber-700">
//             Elite Barber Studio
//           </div>
          
//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden p-2 rounded-md text-amber-700 focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
          
//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8">
//             {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="hover:text-amber-600 transition-colors duration-300 font-medium relative group"
//               >
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>
          
//           <button className="hidden md:block bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-200">
//             Book Now
//           </button>
//         </div>
        
//         {/* Mobile menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white shadow-lg"
//             >
//               <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
//                 {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="hover:text-amber-600 transition-colors duration-300 font-medium py-2 border-b border-amber-100"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//                 <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-full text-white transition-all duration-300">
//                   Book Now
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-[url('/barber-pattern.svg')] bg-repeat opacity-30"></div>
//         </div>
        
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mb-8"
//           >
//             <Scissors className="w-16 h-16 mx-auto text-amber-600 mb-4" />
//           </motion.div>
          
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent"
//           >
//             Elite Cuts
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed"
//           >
//             Where tradition meets modern style. Experience the finest grooming in the city.
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <a href="/user">
//               <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-amber-200">
//                 Book Appointment
//               </button>
//             </a>
            
//             <a href='#services'>
//               <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg">
//                 View Services
//               </button>
//             </a>
//           </motion.div>
//         </div>
        
//         <motion.div 
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           <a href="#services" className="text-amber-600">
//             <ChevronRight className="w-8 h-8 transform rotate-90" />
//           </a>
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={container}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 text-amber-600">
//               Our Services
//             </motion.h2>
//             <motion.p variants={item} className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Premium grooming services tailored to perfection
//             </motion.p>
//           </motion.div>
          
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ y: -10 }}
//                 className="bg-amber-50 p-8 rounded-xl hover:bg-white transition-all duration-300 transform hover:shadow-xl border border-amber-100"
//               >
//                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-100 text-amber-600 mx-auto">
//                   {service.icon}
//                 </div>
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
//                   <span className="text-xl font-bold text-amber-600">{service.price}</span>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={slideInFromLeft}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-700">
//                 Crafting Excellence Since 2010
//               </h2>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 Elite Barber Studio has been the cornerstone of men's grooming in our community for over a decade. 
//                 We combine traditional barbering techniques with modern styling to deliver an unparalleled experience.
//               </p>
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 Our master barbers are dedicated craftsmen who take pride in every cut, every shave, and every detail 
//                 that makes you look and feel your absolute best.
//               </p>
              
//               <div className="grid grid-cols-3 gap-8 mb-8">
//                 <div className="text-center bg-white p-4 rounded-lg shadow-sm">
//                   <div className="flex justify-center mb-2">
//                     <Users className="w-8 h-8 text-amber-600" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-800">5000+</div>
//                   <div className="text-gray-600">Happy Clients</div>
//                 </div>
//                 <div className="text-center bg-white p-4 rounded-lg shadow-sm">
//                   <div className="flex justify-center mb-2">
//                     <Award className="w-8 h-8 text-amber-600" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-800">13</div>
//                   <div className="text-gray-600">Years Experience</div>
//                 </div>
//                 <div className="text-center bg-white p-4 rounded-lg shadow-sm">
//                   <div className="flex justify-center mb-2">
//                     <Star className="w-8 h-8 text-amber-600 fill-current" />
//                   </div>
//                   <div className="text-2xl font-bold text-gray-800">4.9</div>
//                   <div className="text-gray-600">Rating</div>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={slideInFromRight}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <h3 className="text-2xl font-bold text-amber-700 mb-6">Meet Our Master Barbers</h3>
//                 <div className="space-y-6">
//                   {barbers.map((barber, index) => (
//                     <div key={index} className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl">
//                           {barber.avatar || barber.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-800">{barber.name}</h4>
//                         <p className="text-gray-600 text-sm">{barber.experience} • {barber.specialty}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={container}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 text-amber-600">
//               Our Work
//             </motion.h2>
//             <motion.p variants={item} className="text-xl text-gray-600">
//               Precision cuts that speak for themselves
//             </motion.p>
//           </motion.div>
          
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={container}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//           >
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.05 }}
//                 className="aspect-square bg-amber-50 rounded-xl overflow-hidden group relative"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <Scissors className="w-12 h-12 text-white" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={container}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 text-amber-600">
//               What Our Clients Say
//             </motion.h2>
//             <motion.p variants={item} className="text-xl text-gray-600">
//               Don't just take our word for it
//             </motion.p>
//           </motion.div>
          
//           <div className="max-w-4xl mx-auto relative h-64">
//             <AnimatePresence mode="wait">
//               {testimonials.map((testimonial, index) => (
//                 activeTestimonial === index && (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-white p-8 rounded-xl shadow-md absolute inset-0 flex flex-col justify-center"
//                   >
//                     <div className="flex mb-4">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
//                       ))}
//                     </div>
//                     <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold mr-4">
//                         {testimonial.avatar}
//                       </div>
//                       <div className="font-bold text-amber-700">{testimonial.name}</div>
//                     </div>
//                   </motion.div>
//                 )
//               ))}
//             </AnimatePresence>
            
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-amber-600' : 'bg-amber-200'}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={container}
//             className="text-center mb-16"
//           >
//             <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 text-amber-600">
//               Visit Our Shop
//             </motion.h2>
//             <motion.p variants={item} className="text-xl text-gray-600">
//               Ready for your next great cut?
//             </motion.p>
//           </motion.div>
          
//           <div className="grid lg:grid-cols-2 gap-16">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={slideInFromLeft}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="space-y-8">
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//                       <MapPin className="w-6 h-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-800">Location</h3>
//                     <p className="text-gray-600">123 Main Street, Downtown<br />New York, NY 10001</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//                       <Phone className="w-6 h-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
//                     <p className="text-gray-600">(555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//                       <Clock className="w-6 h-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2 text-gray-800">Hours</h3>
//                     <div className="text-gray-600">
//                       <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
//                       <p>Saturday: 8:00 AM - 6:00 PM</p>
//                       <p>Sunday: 10:00 AM - 4:00 PM</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={slideInFromRight}
//               transition={{ duration: 0.6 }}
//               className="bg-amber-50 p-8 rounded-xl border border-amber-100 shadow-sm"
//             >
//               <h3 className="text-2xl font-bold mb-6 text-amber-700">Book Your Appointment</h3>
//               <div className="space-y-6">
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="tel"
//                     placeholder="Your Phone"
//                     className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <select className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700">
//                     <option>Select Service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service.name}>{service.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <textarea
//                     placeholder="Special Requests"
//                     rows="4"
//                     className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 resize-none placeholder-gray-400"
//                   ></textarea>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 py-4 rounded-lg font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Book Appointment
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-amber-800 text-amber-100 py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Elite Barber Studio</h3>
//               <p className="mb-4">
//                 Your destination for premium men's grooming and traditional barbering services.
//               </p>
//               <div className="flex space-x-4">
//                 {['Facebook', 'Instagram', 'Twitter'].map((social) => (
//                   <motion.div 
//                     key={social}
//                     whileHover={{ y: -3 }}
//                     className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300 cursor-pointer"
//                   >
//                     <span className="text-xs text-white">{social[0]}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-white mb-4">Services</h4>
//               <ul className="space-y-2">
//                 {services.slice(0, 4).map((service, index) => (
//                   <li key={index}>
//                     <a href="#services" className="hover:text-white transition-colors duration-300">
//                       {service.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-white mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 {['About', 'Services', 'Gallery', 'Contact'].map((item, index) => (
//                   <li key={index}>
//                     <a 
//                       href={`#${item.toLowerCase()}`} 
//                       className="hover:text-white transition-colors duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-white mb-4">Contact Info</h4>
//               <div className="space-y-2">
//                 <p>123 Main Street</p>
//                 <p>New York, NY 10001</p>
//                 <p>(555) 123-4567</p>
//                 <p>info@elitebarber.com</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-amber-700 mt-12 pt-8 text-center">
//             <p>&copy; 2025 Elite Barber Studio. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';
import { 
  Scissors, Shave, Razor, Comb, Brush, Mirror, Spray, HotTowel, 
  Star, Phone, MapPin, Clock, Award, Users, Calendar, ChevronRight, Instagram, Facebook, Twitter, Youtube
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BarberShopLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
const Razor = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4v16M4 4l3 3M4 4l3-3M20 4v16M20 4l-3 3M20 4l-3-3M12 5v14M12 5l-4 4M12 5l4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Shave = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 2v4M5 12h14M12 22v-4M3 12h1m16 0h1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Comb = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4v16M4 4h4m0 0v16m0-16h4m0 0v16m0-16h4m0 0v16m0-16h4m0 0v16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Brush = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M20 10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5m16 0v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9m16 0H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Mirror = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 22v-4m0-14V2M5 12H3m18 0h-2M12 7a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Spray = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v6m0-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HotTowel = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4h16v16H4V4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12h16M12 4v16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data with new icons
  const services = [
    { name: 'Classic Haircut', price: '$35', description: 'Traditional scissor cut with styling', icon: <Scissors className="w-6 h-6" /> },
    { name: 'Beard Sculpting', price: '$25', description: 'Professional beard shaping and grooming', icon: <Razor className="w-6 h-6" /> },
    { name: 'Hot Towel Shave', price: '$45', description: 'Luxurious traditional straight razor shave', icon: <HotTowel className="w-6 h-6" /> },
    { name: 'Hair Treatment', price: '$40', description: 'Deep cleanse with premium products', icon: <Spray className="w-6 h-6" /> },
    { name: 'Styling Session', price: '$30', description: 'Professional hair styling and finishing', icon: <Comb className="w-6 h-6" /> },
    { name: 'Full Grooming', price: '$75', description: 'Complete haircut, shave, and styling', icon: <Brush className="w-6 h-6" /> }
  ];

  const testimonials = [
    { 
      name: 'Marcus Johnson', 
      rating: 5, 
      text: 'The attention to detail here is unmatched. My haircut always looks sharp for weeks!', 
      avatar: 'MJ' 
    },
    { 
      name: 'David Chen', 
      rating: 5, 
      text: 'More than just a haircut - it\'s an experience. The hot towel shave is heavenly.', 
      avatar: 'DC' 
    },
    { 
      name: 'Robert Williams', 
      rating: 5, 
      text: 'Been a loyal customer for 5 years. Consistent excellence every single visit.', 
      avatar: 'RW' 
    }
  ];

  const barbers = [
    { 
      name: 'Tony Rodriguez', 
      experience: '12 years', 
      specialty: 'Classic Cuts & Fades',
      quote: 'Precision is my passion',
      icon: <Scissors className="w-5 h-5" />
    },
    { 
      name: 'Mike Thompson', 
      experience: '8 years', 
      specialty: 'Beard Styling & Shaves',
      quote: 'Every beard tells a story',
      icon: <Razor className="w-5 h-5" />
    },
    { 
      name: 'Alex Carter', 
      experience: '10 years', 
      specialty: 'Modern Styles & Color',
      quote: 'Style is a way to say who you are',
      icon: <Comb className="w-5 h-5" />
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-amber-600/20 pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isMenuOpen ? 2 : 1
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-amber-700 flex items-center gap-2"
          >
            <Scissors className="w-6 h-6" />
            <span>EliteBarber</span>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-md text-amber-700 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 relative transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`absolute h-0.5 w-full bg-amber-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-90 top-1/2' : 'top-1'}`}></span>
              <span className={`absolute h-0.5 w-full bg-amber-700 rounded-full top-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute h-0.5 w-full bg-amber-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-90 top-1/2' : 'bottom-1'}`}></span>
            </div>
          </motion.button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Barbers', 'Gallery', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="relative group text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-2 rounded-full text-white transition-all shadow-lg hover:shadow-amber-200/50"
          >
            Book Now
          </motion.button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-8"
            >
              {['Home', 'Services', 'Barbers', 'Gallery', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-3 rounded-full text-white text-lg font-medium mt-6 shadow-lg"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-[url('/barber-pattern.svg')] bg-repeat opacity-10"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-amber-50/70"></div>
        
        {/* Floating barber tools */}
        <motion.div 
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 text-amber-600/30"
        >
          <Scissors className="w-16 h-16" />
        </motion.div>
        
        <motion.div 
          animate={{
            y: [10, -10, 10],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/5 text-amber-600/20"
        >
          <Razor className="w-20 h-20" />
        </motion.div>
        
        <motion.div 
          animate={{
            y: [0, 20, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/4 text-amber-600/15"
        >
          <Comb className="w-24 h-24" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block p-4 rounded-full bg-amber-100/50 backdrop-blur-sm">
              <Scissors className="w-12 h-12 mx-auto text-amber-600" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent leading-tight"
          >
            Precision Cuts <br/> & Classic Styles
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto"
          >
            Where traditional barbering meets contemporary style. Experience the art of grooming.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/booking"
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl shadow-amber-200/50"
            >
              Book Appointment
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='#services'
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <a href="#services" className="text-amber-600">
            <ChevronRight className="w-8 h-8 transform rotate-90 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-100/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={textVariant} className="inline-block mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                Our Services
              </span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Premium Grooming Experiences
            </motion.h2>
            <motion.p variants={textVariant} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is crafted with precision and care using the finest products and techniques.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                whileHover={{ y: -10 }}
                className="bg-amber-50 p-8 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md border border-amber-100/50 relative overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 text-amber-200/20 group-hover:text-amber-200/30 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 mx-auto shadow-inner">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{service.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
        {/* Floating barber tools */}
        <motion.div 
          animate={{
            rotate: 360,
            x: [0, 20, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/6 text-amber-600/10"
        >
          <Shave className="w-24 h-24" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={textVariant} className="inline-block mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                Meet The Team
              </span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Master Barbers
            </motion.h2>
            <motion.p variants={textVariant} className="text-lg text-gray-700 max-w-2xl mx-auto">
              Skilled artisans dedicated to the craft of men's grooming.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {barbers.map((barber, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideRight : slideLeft}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {barber.icon}
                </div>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-700 font-bold text-2xl mb-4 shadow-inner">
                    {barber.avatar || barber.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{barber.name}</h3>
                  <p className="text-amber-600">{barber.experience} Experience</p>
                </div>
                <div className="text-center mb-6">
                  <p className="text-gray-700 italic">"{barber.quote}"</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                    {barber.icon}
                    <span className="ml-2">{barber.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={textVariant} className="inline-block mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                Our Work
              </span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Craftsmanship Gallery
            </motion.h2>
            <motion.p variants={textVariant} className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the precision and artistry in every cut we deliver.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                className="aspect-square bg-amber-50 rounded-xl overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white"
                  >
                    <Mirror className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={textVariant} className="inline-block mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                Testimonials
              </span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Client Experiences
            </motion.h2>
            <motion.p variants={textVariant} className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear what our clients say about their grooming experience.
            </motion.p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative h-80">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                activeTestimonial === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg md:text-xl">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">Regular Client</div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-amber-600' : 'bg-amber-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={textVariant} className="inline-block mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-medium">
                Visit Us
              </span>
            </motion.div>
            <motion.h2 variants={textVariant} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Book Your Appointment
            </motion.h2>
            <motion.p variants={textVariant} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready for your premium grooming experience?
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Location</h3>
                    <p className="text-gray-600">123 Main Street, Downtown<br />New York, NY 10001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Hours</h3>
                    <div className="text-gray-600">
                      <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.8 }}
              className="bg-amber-50 p-8 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 text-amber-200/30">
                <Scissors className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-amber-700 relative z-10">Book Your Appointment</h3>
              <div className="space-y-6 relative z-10">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400 shadow-sm"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400 shadow-sm"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 placeholder-gray-400 shadow-sm"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <select className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 shadow-sm appearance-none">
                    <option>Select Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>{service.name}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea
                    placeholder="Special Requests"
                    rows="4"
                    className="w-full p-4 rounded-lg bg-white border border-amber-200 focus:border-amber-400 focus:outline-none text-gray-700 resize-none placeholder-gray-400 shadow-sm"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 py-4 rounded-lg font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-800/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-amber-700/20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Scissors className="w-6 h-6" />
                <span>EliteBarber</span>
              </h3>
              <p className="mb-6">
                Crafting exceptional grooming experiences since 2010. Precision cuts, classic styles, modern techniques.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
                  { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
                  { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
                  { icon: <Youtube className="w-5 h-5" />, name: 'YouTube' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-full bg-amber-800/50 hover:bg-amber-700 flex items-center justify-center text-amber-100 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {[
              {
                title: "Services",
                links: services.slice(0, 4).map(service => service.name)
              },
              {
                title: "Quick Links",
                links: ['About', 'Barbers', 'Gallery', 'Contact']
              },
              {
                title: "Contact",
                links: [
                  '123 Main Street, NY',
                  '(555) 123-4567',
                  'hello@elitebarber.com',
                  'Mon-Sun: 9AM-8PM'
                ]
              }
            ].map((column, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href={colIndex === 1 ? `#${link.toLowerCase()}` : '#'}
                        className="hover:text-white transition-colors duration-300 flex items-start"
                      >
                        <ChevronRight className="w-4 h-4 mt-1 mr-1 text-amber-500 flex-shrink-0" />
                        <span>{link}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200/80"
          >
            <p>&copy; {new Date().getFullYear()} Elite Barber Studio. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}