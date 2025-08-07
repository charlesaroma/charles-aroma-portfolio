import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateOrbs();

    const handleResize = () => {
      generateStars();
      generateOrbs();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const isCrossStar = Math.random() > 0.7;
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        isCrossStar,
        color: Math.random() > 0.8 ? "text-primary" : "text-white",
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 1;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 20 + 80, // Start from right side (80-100%)
        y: Math.random() * 30,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 4 + 5,
        color: Math.random() > 0.5 ? "from-white via-primary/60 to-transparent" : "from-blue-300 via-cyan-200 to-transparent",
        opacity: Math.random() * 0.3 + 0.2,
      });
    }

    setMeteors(newMeteors);
  };

  const generateOrbs = () => {
    const numberOfOrbs = Math.floor(
      (window.innerWidth * window.innerHeight) / 80000
    );

    const newOrbs = [];

    for (let i = 0; i < numberOfOrbs; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.1 + 0.05,
        animationDuration: Math.random() * 8 + 6,
        color: Math.random() > 0.5 ? "from-primary/20 to-transparent" : "from-blue-400/20 to-transparent",
      });
    }

    setOrbs(newOrbs);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} animate-pulse-subtle`}
          style={{
            width: orb.size + "px",
            height: orb.size + "px",
            left: orb.x + "%",
            top: orb.y + "%",
            opacity: orb.opacity,
            animationDuration: orb.animationDuration + "s",
            filter: "blur(1px)",
          }}
        />
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-pulse-subtle ${star.color}`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            transform: star.isCrossStar ? "rotate(45deg)" : "none",
          }}
        >
          {star.isCrossStar && (
            <div
              className="absolute inset-0 bg-current"
              style={{
                width: "100%",
                height: "2px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </div>
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            position: "absolute",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
            opacity: meteor.opacity,
            pointerEvents: "none",
            zIndex: 1,
            transform: "rotate(-45deg)",
          }}
          className="meteor animate-meteor"
        >
          {/* Star head - just the bright circular part */}
          <div
            className="rounded-full"
            style={{
              width: meteor.size * 8 + "px",
              height: meteor.size * 8 + "px",
              background: "radial-gradient(circle, #fff 60%, #facc15 100%)",
              boxShadow: "0 0 16px 4px #fff7b2, 0 0 32px 8px #facc15",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 2,
            }}
          />
        </div>
      ))}
    </div>
  );
};
