import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaRupeeSign, FaCheck, FaTimes } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, time: '09:00 AM', available: true },
    { id: 2, time: '10:00 AM', available: true },
    { id: 3, time: '11:00 AM', available: false },
    { id: 4, time: '02:00 PM', available: true },
    { id: 5, time: '03:00 PM', available: true },
    { id: 6, time: '04:00 PM', available: false },
    { id: 7, time: '05:00 PM', available: true },
    { id: 8, time: '06:00 PM', available: true },
    { id: 9, time: '07:00 PM', available: true },
    { id: 10, time: '08:00 PM', available: false },
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [sessionType, setSessionType] = useState('basic');
  const [duration, setDuration] = useState(60);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const sessionTypes = [
    { id: 'basic', name: 'Basic Session', duration: 60, price: 500 },
    { id: 'advanced', name: 'Advanced Session', duration: 90, price: 750 },
    { id: 'intensive', name: 'Intensive Session', duration: 120, price: 1000 }
  ];

  const handleSlotSelect = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert(`Booking request submitted for ${date.toDateString()} at ${selectedSlot?.time}!`);
    console.log({
      date: date,
      time: selectedSlot,
      sessionType,
      duration,
      formData
    });
  };

  const currentSession = sessionTypes.find(s => s.id === sessionType);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Book a Session</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Schedule a personalized tutoring session with Mithilesh Sir
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Session Details</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Session Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sessionTypes.map((type) => (
                      <div 
                        key={type.id}
                        className={`glass-card p-4 rounded-lg cursor-pointer border-2 ${
                          sessionType === type.id 
                            ? 'border-neon-blue bg-glass' 
                            : 'border-glass-border'
                        }`}
                        onClick={() => setSessionType(type.id)}
                      >
                        <h4 className="font-semibold">{type.name}</h4>
                        <p className="text-gray-400 text-sm">{type.duration} mins</p>
                        <p className="text-neon-blue flex items-center mt-2">
                          <FaRupeeSign className="mr-1" />{type.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Session Duration</label>
                  <div className="flex space-x-4">
                    {[60, 90, 120].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        className={`glass-button px-4 py-2 rounded-lg ${
                          duration === mins ? 'border-neon-blue' : ''
                        }`}
                        onClick={() => setDuration(mins)}
                      >
                        {mins} mins
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Your Information</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="glass-input w-full"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="glass-input w-full"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="glass-input w-full mt-4"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-400 mb-2">Special Requests</label>
                  <textarea
                    name="message"
                    placeholder="Any specific topics you want to cover..."
                    className="glass-input w-full h-24"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={!selectedSlot}
                >
                  Book Session
                </button>
              </form>
            </div>
          </motion.div>

          {/* Calendar and Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Select Date & Time</h3>
              
              <div className="mb-8">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="glass-effect rounded-xl p-4 w-full"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <FaClock className="mr-2 text-neon-blue" /> Available Time Slots
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      className={`glass-button py-3 rounded-lg flex items-center justify-center ${
                        selectedSlot?.id === slot.id
                          ? 'border-neon-blue text-neon-blue'
                          : slot.available
                          ? 'hover:border-neon-blue'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                      disabled={!slot.available}
                    >
                      {slot.available ? (
                        <span>{slot.time}</span>
                      ) : (
                        <span className="flex items-center">
                          <FaTimes className="mr-2" /> {slot.time}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {selectedSlot && (
                <motion.div 
                  className="glass-card p-4 rounded-lg border border-neon-blue"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center mb-2">
                    <FaCheck className="text-green-400 mr-2" />
                    <h4 className="font-semibold">Session Confirmed</h4>
                  </div>
                  <p className="text-gray-300">
                    {date.toDateString()} at {selectedSlot.time} • {duration} mins
                  </p>
                  <p className="text-neon-blue font-semibold mt-2">
                    <FaRupeeSign className="inline mr-1" />{currentSession.price}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;