import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/21.jpg";
import pic4 from "../assets/6.jpg";

// 🎉 Customize here
const NAME = "Ridhika Roy";
const TAGLINE = "Enjoy Your Life !!!";
const SENDER = "From your friends";
const MEDIA = [
  "https://images.unsplash.com/photo-1562967005-a3c85514d3e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1631857455684-a54a2f03665f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
];

const BDAY_PICS = [pic1, pic2, pic3, pic4];

const WISHES = [
  "Stay Awesome 🎂",
  "Shine Bright ✨",
  "Lots of Love ❤️",
  "Party Time 🎉",
];

const MUSIC_SRC =
  "https://artlist.io/royalty-free-music/song/happy-birthday-youre-one-year-oldie/61235";

export default function App() {
  const [index, setIndex] = useState(0);
  const [wishIndex, setWishIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-advance media every 3s
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MEDIA.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle wishes every 4s
    const interval = setInterval(() => {
      setWishIndex((prev) => (prev + 1) % WISHES.length);
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.8 } });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Music autoplay workaround
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current
        .play()
        .then(() => {
          let vol = 0;
          const fade = setInterval(() => {
            if (audioRef.current && vol < 1) {
              vol += 0.1;
              audioRef.current.volume = vol;
            } else {
              clearInterval(fade);
            }
          }, 200);
        })
        .catch(() => {});
    }

    // Confetti burst
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

    // Show button after 5s
    setTimeout(() => setShowButton(true), 5000);
  }, []);

  // Define the fixed positions for each image

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
      const handleResize = () =>
        setSize([window.innerWidth, window.innerHeight]);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  // Responsive position styles using vw/vh for better adaptability
  const positionStyles = [
    {
      top: `${height < 600 ? 15 : 20}vh`,
      left: "50%",
      transform: "translateX(-50%)",
    }, // Top center
    {
      bottom: `${height < 600 ? 15 : 20}vh`,
      left: "50%",
      transform: "translateX(-50%)",
    }, // Bottom center
    {
      top: "50%",
      left: `${width < 640 ? 5 : 10}vw`,
      transform: "translateY(-50%)",
    }, // Left side
    {
      top: "50%",
      right: `${width < 640 ? 5 : 10}vw`,
      transform: "translateY(-50%)",
    }, // Right side
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center font-[Inter]">
      {/* 🎬 Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {MEDIA[index].endsWith(".mp4") ? (
          <video
            src={MEDIA[index]}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={MEDIA[index]}
            alt="Birthday Media"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 🌈 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

      {/* 🎊 Central Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4 py-4 md:px-6 md:py-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg animate-pulse">
          🎉 Happy Birthday {NAME}!
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-white/90">{TAGLINE}</p>
        <p className="mt-2 text-lg md:text-xl text-white/70">— {SENDER}</p>

        {/* ✨ Rotating Wishes */}
        <motion.p
          key={wishIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-2xl font-bold text-yellow-300 drop-shadow-md"
        >
          {WISHES[wishIndex]}
        </motion.p>
      </motion.div>

      {/* 🖼 Floating Birthday Pics */}
      {BDAY_PICS.map((pic, i) => (
        <motion.img
          key={i}
          src={pic}
          alt="Birthday Pic"
          className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full shadow-lg border-2 border-white object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.5 }}
          style={positionStyles[i]}
        />
      ))}

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={() => navigate("/gift")}
          className="absolute right-5 bottom-5 -translate-y-1/2 px-4 py-2 text-base md:text-lg bg-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          🎁 Please Click Here
        </motion.button>
      )}

      {/* 🎵 Background music */}
      <audio ref={audioRef} src={MUSIC_SRC} loop autoPlay />
    </div>
  );
}
