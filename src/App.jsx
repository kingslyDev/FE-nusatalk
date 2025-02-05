import React, { useState, useEffect } from 'react';
import { PhoneIcon, Sun, Moon } from 'lucide-react';
import Logo from './assets/logo.png';

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  // Update tema saat darkMode berubah
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setPhoneNumber(input);

    setIsValidNumber(input.length >= 10 && input.length <= 15);
  };

  const handleContinueLogin = () => {
    if (isValidNumber) {
      console.log('Attempting to login with:', phoneNumber);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Tombol toggle dark mode */}
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition duration-300">
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
      </button>

      {/* Left Side - Background ungu hanya di sebelah kanan */}
      <div className="md:flex-1 bg-gradient-to-b from-[#626FEA] to-[#1D245F] rounded-r-[10px] flex items-center justify-center p-6">
        <div className="text-center w-full mt-10 md:mt-20">
          {' '}
          {/* Menambahkan margin top untuk menaikkan logo */}
          <img src={Logo} alt="NusaTalk Logo" className="mx-auto w-2/3 md:w-1/2 h-auto max-h-[200px] md:max-h-[300px] object-contain" />
        </div>
      </div>

      {/* Right Side */}
      <div className="md:flex-1 bg-white dark:bg-gray-800 p-6 md:p-8 flex flex-col justify-center min-h-screen gap-6 transition-colors duration-300">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-md font-bold mb-6 text-center text-gray-800 dark:text-white">Input Your Phone Number</h2>

          {/* Phone number input */}
          <div className="mb-6 w-full flex flex-col items-center">
            <div className="relative">
              <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="none">
                    <path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <input type="tel" className="tabular-nums" required placeholder="Phone" pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
              </label>
              <p className="validator-hint">Must be 10 digits</p>
            </div>
          </div>

          {/* Continue button */}
          <button onClick={handleContinueLogin} disabled={!isValidNumber} className="btn btn-dash btn-primary w-full py-3 -mt-5">
            Continue & Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
