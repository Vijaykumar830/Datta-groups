import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

type FestivalConfig = {
  message: string;
  colors: string[];
  particleCount: number;
  spread: number;
  startVelocity: number;
  gradient: string;
};

const FestivalAnimator: React.FC = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const year = today.getFullYear();

  const [visible, setVisible] = useState(true);

  const isIndia =
    Intl.DateTimeFormat().resolvedOptions().timeZone.includes("Asia");

  let festival: FestivalConfig | null = null;

  // 🎉 New Year
  if (month === 1 && date === 1) {
    festival = {
      message: `🎆 Happy New Year ${year}!`,
      colors: ["#FFD700", "#00FFFF", "#FF00FF", "#FFFFFF"],
      particleCount: 12,
      spread: 360,
      startVelocity: 45,
      gradient: "from-purple-600 via-pink-500 to-yellow-400",
    };
  }

  // 🌾 Sankranti
  else if (isIndia && month === 1 && date >= 14 && date <= 16) {
    festival = {
      message: "🌾 Happy Sankranti 🪁",
      colors: ["#22c55e", "#eab308", "#38bdf8"],
      particleCount: 6,
      spread: 80,
      startVelocity: 35,
      gradient: "from-yellow-400 via-green-500 to-sky-400",
    };
  }

  // 🪔 Diwali
  else if (isIndia && (month === 10 || month === 11)) {
    festival = {
      message: "🪔 Happy Diwali ✨",
      colors: ["#ff9800", "#ffd700", "#ff5722"],
      particleCount: 5,
      spread: 70,
      startVelocity: 20,
      gradient: "from-orange-500 via-yellow-400 to-amber-600",
    };
  }

  // 🎄 Christmas
  else if (month === 12 && date >= 24 && date <= 26) {
    festival = {
      message: "🎄 Merry Christmas ❄",
      colors: ["#ffffff", "#22c55e", "#ef4444"],
      particleCount: 4,
      spread: 60,
      startVelocity: 10,
      gradient: "from-green-600 via-red-500 to-emerald-600",
    };
  }

  useEffect(() => {
    if (!festival || !visible) return;

    const interval = setInterval(() => {
      confetti({
        particleCount: festival!.particleCount,
        spread: festival!.spread,
        startVelocity: festival!.startVelocity,
        colors: festival!.colors,
        gravity: 0.6,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.4,
        },
      });
    }, 900);

    return () => clearInterval(interval);
  }, [festival, visible]);

  if (!festival || !visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50
      bg-gradient-to-r ${festival.gradient}
      animate-gradient
      text-white text-center py-2 px-4
      shadow-lg flex items-center justify-center`}
    >
      <span className="font-semibold tracking-wide">
        {festival.message}
      </span>

      {/* ❌ Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-white/90 hover:text-white text-lg"
        aria-label="Close festival banner"
      >
        ✕
      </button>
    </div>
  );
};

export default FestivalAnimator;
