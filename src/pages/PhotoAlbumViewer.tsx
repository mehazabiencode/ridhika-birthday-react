import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import pic9 from "../assets/9.jpg";
import pic10 from "../assets/10.jpg";
import pic11 from "../assets/11.jpg";
import pic12 from "../assets/12.jpg";
import pic13 from "../assets/13.jpg";
import pic14 from "../assets/14.jpg";
import pic15 from "../assets/15.jpg";
import pic16 from "../assets/16.jpg";
import pic17 from "../assets/17.jpg";
import pic18 from "../assets/18.jpg";
import pic19 from "../assets/19.jpg";
import pic20 from "../assets/20.jpg";
import pic21 from "../assets/21.jpg";
import pic22 from "../assets/22.jpg";
import pic23 from "../assets/23.jpg";
import pic24 from "../assets/24.jpg";
import pic25 from "../assets/25.jpg";

const PhotoAlbumViewer = () => {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sample personalized photos - replace with actual photos
  const photos = [
    { id: 1, url: pic1, caption: "🌸 Cherishing blossoms of sweet memories" },
    { id: 2, url: pic2, caption: "🌊 Waves of joy and laughter" },
    { id: 3, url: pic3, caption: "🐶 Furry friend spreading birthday cheer" },
    { id: 4, url: pic4, caption: "🎂 Celebrating love and happiness together" },
    { id: 5, url: pic5, caption: "🌅 Sunset moments full of peace" },
    { id: 6, url: pic6, caption: "🌟 Shine bright with endless dreams" },
    { id: 7, url: pic7, caption: "🎉 Party vibes and happy faces" },
    { id: 8, url: pic8, caption: "🍃 Fresh breeze, peaceful heart moments" },
    { id: 9, url: pic9, caption: "🕌 Blessings and prayers for you" },
    { id: 10, url: pic10, caption: "🌈 Colors of joy fill life" },
    { id: 11, url: pic11, caption: "💫 Magical nights under bright stars" },
    { id: 12, url: pic12, caption: "🎁 Smiles wrapped like little gifts" },
    { id: 13, url: pic13, caption: "🍂 Autumn leaves, cozy golden days" },
    { id: 14, url: pic14, caption: "🚴‍♀️ Adventures making heartbeats alive" },
    { id: 15, url: pic15, caption: "☀️ Sunshine brings warmth and hope" },
    { id: 16, url: pic16, caption: "🎶 Music notes dancing with soul" },
    {
      id: 17,
      url: pic17,
      caption: "🌻 Blooming flowers, endless happiness here",
    },
    { id: 18, url: pic18, caption: "📸 Snapshots of love and laughter" },
    { id: 19, url: pic19, caption: "🏞️ Nature’s embrace feels like magic" },
    { id: 20, url: pic20, caption: "🌌 Midnight skies whispering calm dreams" },
    { id: 21, url: pic21, caption: "💐 Fragrant blooms spreading pure joy" },
    { id: 22, url: pic22, caption: "🍭 Sweet smiles sweeter than candy" },
    { id: 23, url: pic23, caption: "✈️ Journeys filled with endless memories" },
    { id: 24, url: pic24, caption: "🔥 Warmth of hearts, glowing forever" },
    { id: 25, url: pic25, caption: "❤️ Love shining brighter every day" },
  ];

  useEffect(() => {
    if (isAlbumOpen) {
      const interval = setInterval(() => {
        // Loop back to the first photo after reaching the end
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAlbumOpen, photos.length]);

  const handleAlbumClick = () => {
    if (!isAlbumOpen) {
      setIsAlbumOpen(true);
    }
  };

  const handlePhotoClick = () => {
    // Manually advance to the next photo, looping back to start if at the end
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${10 + i * 10}%`,
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

      <div className="relative z-10 w-full max-w-4xl h-full flex flex-col items-center justify-center">
        {!isAlbumOpen ? (
          // Album Cover
          <motion.div
            className="relative cursor-pointer w-full max-w-md"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleAlbumClick}
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-2xl p-8 border-4 border-gold-500 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/20"></div>

              <div className="text-center py-12">
                <motion.h2
                  className="text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Memories
                </motion.h2>
                <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                <motion.p
                  className="text-white/90 text-lg mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  A collection of precious moments
                </motion.p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-6xl mb-6"
                >
                  📸
                </motion.div>
                <motion.p
                  className="text-white/80 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Click to open
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          // Photo Viewer
          <div className="w-full h-full flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex}
                className="relative w-full h-full max-w-4xl max-h-[70vh] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.7 }}
                onClick={handlePhotoClick}
              >
                <div className="relative w-full aspect-square max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                  <img
                    src={photos[currentPhotoIndex].url}
                    alt={`Memory ${photos[currentPhotoIndex].id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <motion.p
                      className="text-white text-xl font-medium text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {photos[currentPhotoIndex].caption}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoAlbumViewer;
