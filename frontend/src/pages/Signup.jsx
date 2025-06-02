import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    otp: ['', '', '', '']
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      
      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSendOtp = () => {
    console.log('OTP sent to:', formData.phone);
    setStep(2);
  };

  const handleVerify = () => {
    console.log('User registered:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] flex items-center justify-center p-4 text-white">
      <div className="bg-[#1a0000]/80 backdrop-blur-sm border border-[#ff0000]/20 rounded-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-[#ff3333] text-[#1a0000] font-bold text-xl px-3 py-2 rounded">
            V2 Saloon
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Create Account</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[#ff9999] text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                />
              </div>
              
              <div>
                <label className="block text-[#ff9999] text-sm mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                />
              </div>
            </div>

            <button
              onClick={handleSendOtp}
              className="w-full bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4444] hover:to-[#dd0000] text-white py-3 rounded-lg font-medium transition-all"
            >
              Send OTP
            </button>

            <p className="text-[#ff9999] text-center text-sm">
              Already have an account? <Link to="/login" className="text-[#ff6666] font-medium">Login</Link>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
            <p className="text-[#ff9999] text-center">
              Sent to {formData.phone}
            </p>
            
            <div className="flex justify-center space-x-3">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={formData.otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                  className="w-16 h-16 bg-[#2a0000] border border-[#ff0000]/30 text-center text-2xl rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                />
              ))}
            </div>
            
            <button
              onClick={handleVerify}
              className="w-full bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4444] hover:to-[#dd0000] text-white py-3 rounded-lg font-medium transition-all"
            >
              Verify & Create Account
            </button>
            
            <p className="text-[#ff9999] text-center text-sm">
              Didn't receive code? <button className="text-[#ff6666] font-medium">Resend</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}