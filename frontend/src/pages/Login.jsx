import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    console.log(`OTP sent to: ${phone}`);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    const fullOtp = otp.join('');
    console.log(`OTP verified: ${fullOtp}`);
    navigate('/user');
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] flex items-center justify-center p-4 text-white">
      <div className="bg-[#1a0000]/80 backdrop-blur-sm border border-[#ff0000]/20 rounded-xl p-8 w-full max-w-md">
        {!isOtpSent ? (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center mb-2">Enter Your Mobile Number</h1>
            <div className="space-y-1">
              <label className="text-[#ff9999] text-sm">Enter Mobile Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333] focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4444] hover:to-[#dd0000] text-white py-3 rounded-lg font-medium transition-all"
            >
              NEXT
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Verification Code</h2>
            <p className="text-[#ff9999] text-center">
              Please enter verification code sent to {phone}
            </p>
            
            <div className="flex justify-center space-x-3">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                  className="w-16 h-16 bg-[#2a0000] border border-[#ff0000]/30 text-center text-2xl rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                />
              ))}
            </div>
            
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4444] hover:to-[#dd0000] text-white py-3 rounded-lg font-medium transition-all"
            >
              VERIFY
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