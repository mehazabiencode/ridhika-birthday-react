import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/4.jpg";
import pic2 from "../assets/16.jpg";
import pic3 from "../assets/14.jpg";
import pic4 from "../assets/15.jpg";
import pic5 from "../assets/22.jpg";
import pic6 from "../assets/23.jpg";

const BirthdayGiftPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const photos = [
    {
      id: 1,
      url: pic1,
      caption: "A beautiful memory from last year",
    },
    {
      id: 2,
      url: pic2,
      caption: "That amazing trip we took together",
    },
    {
      id: 3,
      url: pic3,
      caption: "Your furry friend wishing you happy birthday!",
    },
    {
      id: 4,
      url: pic4,
      caption: "Celebrating another wonderful year",
    },
    {
      id: 5,
      url: pic5,
      caption: "Your special moments captured forever",
    },
    {
      id: 6,
      url: pic6,
      caption: "The beginning of a new chapter",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextClick = () => {
    navigate("/album");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${10 + i * 15}%`,
            top: `${Math.random() * 20 + 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {["🎈", "🎉", "🎁", "✨"][i % 4]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Header */}
        {!isOpen && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Happy Birthday!
            </h1>
            <p className="text-xl text-purple-200">A special gift awaits you</p>
          </motion.div>
        )}

        {!isOpen ? (
          // Closed Gift Box
          <motion.div
            className="relative cursor-pointer"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              className="w-64 h-64 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-2xl flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute top-0 w-full h-12 bg-red-600 rounded-t-lg"></div>
              <div className="absolute top-12 w-12 h-2 bg-red-400 rounded-r-lg"></div>
              <span className="text-6xl">🎁</span>
            </motion.div>
            <motion.p
              className="text-white text-center mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Click to open your gift
            </motion.p>
          </motion.div>
        ) : (
          // Opened Gift - Personalized Photo Album
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              {/* Album Title */}
              <motion.h2
                className="text-3xl font-bold text-white text-center mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Personalized Photo Album
              </motion.h2>

              <motion.p
                className="text-purple-200 text-center mb-8 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Memories captured forever
              </motion.p>

              {/* Photo Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, staggerChildren: 0.1 }}
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="relative group overflow-hidden rounded-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={photo.url}
                      alt={`Memory ${photo.id}`}
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Final Message */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <p className="text-white text-lg italic">
                  "The best things in life are the people we love, the places
                  we've been, and the memories we've made along the way."
                </p>
                {showNextButton && (
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    onClick={handleNextClick}
                    className="mt-8 px-6 py-3 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    Next →
                  </motion.button>
                )}
              </motion.div>
              {/* Next button */}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BirthdayGiftPage;
