import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

type FestivalConfig = {
  message: string;
  colors: string[];
  particleCount: number;
  spread: number;
  startVelocity: number;
  gradient: string;
  isFestival: boolean;
};

const businessQuotes = [
  "📈 Strong partnerships build stronger businesses",
  "🤝 Trust and quality are the foundation of growth",
  "🚀 Delivering value beyond expectations",
  "🌍 Connecting industries with reliable solutions",
  "💼 Excellence in trading and services worldwide",
  "⚙️ Innovation drives sustainable business success",
];

const BANNER_HEIGHT = 40; // px (matches py-2)

const FestivalAnimator: React.FC = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const year = today.getFullYear();

  const [visible, setVisible] = useState(true);

  const isIndia =
    Intl.DateTimeFormat().resolvedOptions().timeZone.includes("Asia");

  let config: FestivalConfig | null = null;

  /* 🎉 New Year */
  if (month === 1 && date === 1) {
    config = {
      message: `🎆 Happy New Year ${year}!`,
      colors: ["#FFD700", "#00FFFF", "#FF00FF", "#FFFFFF"],
      particleCount: 12,
      spread: 360,
      startVelocity: 45,
      gradient: "from-purple-600 via-pink-500 to-yellow-400",
      isFestival: true,
    };
  }

  /* 🌾 Sankranti */
  else if (isIndia && month === 1 && date >= 13 && date <= 16) {
    config = {
      message: "🌾 Happy Sankranti 🪁",
      colors: ["#22c55e", "#eab308", "#38bdf8"],
      particleCount: 6,
      spread: 80,
      startVelocity: 35,
      gradient: "from-yellow-400 via-green-500 to-sky-400",
      isFestival: true,
    };
  }

  /* 🪔 Diwali */
  else if (isIndia && (month === 10 || month === 11)) {
    config = {
      message: "🪔 Happy Diwali ✨",
      colors: ["#ff9800", "#ffd700", "#ff5722"],
      particleCount: 5,
      spread: 70,
      startVelocity: 20,
      gradient: "from-orange-500 via-yellow-400 to-amber-600",
      isFestival: true,
    };
  }

  /* 🎄 Christmas */
  else if (month === 12 && date >= 24 && date <= 26) {
    config = {
      message: "🎄 Merry Christmas ❄",
      colors: ["#ffffff", "#22c55e", "#ef4444"],
      particleCount: 4,
      spread: 60,
      startVelocity: 10,
      gradient: "from-green-600 via-red-500 to-emerald-600",
      isFestival: true,
    };
  }

  /* 📊 Normal day → Business quote */
  else {
    const randomQuote =
      businessQuotes[Math.floor(Math.random() * businessQuotes.length)];

    config = {
      message: randomQuote,
      colors: [],
      particleCount: 0,
      spread: 0,
      startVelocity: 0,
      gradient: "from-slate-800 via-slate-700 to-slate-900",
      isFestival: false,
    };
  }

  /* 🎯 Handle body spacing (FIXES WHITE SPACE ISSUE) */
  useEffect(() => {
    if (visible) {
      document.body.style.paddingTop = `${BANNER_HEIGHT}px`;
    } else {
      document.body.style.paddingTop = "0px";
    }

    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, [visible]);

  /* 🎉 Confetti only for festivals */
  useEffect(() => {
    if (!config || !visible || !config.isFestival) return;

    const interval = setInterval(() => {
      confetti({
        particleCount: config.particleCount,
        spread: config.spread,
        startVelocity: config.startVelocity,
        colors: config.colors,
        gravity: 0.6,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.4,
        },
      });
    }, 900);

    return () => clearInterval(interval);
  }, [config, visible]);

  if (!config || !visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50
      bg-gradient-to-r ${config.gradient}
      animate-gradient
      text-white text-center py-2 px-4
      shadow-lg flex items-center justify-center`}
    >
      <span className="font-semibold tracking-wide">
        {config.message}
      </span>

      {/* ❌ Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-white/90 hover:text-white text-lg"
        aria-label="Close banner"
      >
        ✕
      </button>
    </div>
  );
};

export default FestivalAnimator;
