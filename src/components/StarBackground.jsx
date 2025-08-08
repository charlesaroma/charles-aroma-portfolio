import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  /* State Management */
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  /* Initialize Background Elements */
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Generate Stars Function */
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

  /* Generate Meteors Function */
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
        color: Math.random() > 0.5 ? "from-emerald-300 via-teal-200 to-transparent" : "from-cyan-300 via-teal-100 to-transparent",
        opacity: Math.random() * 0.3 + 0.2,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Stars */}
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

      {/* Background Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`meteor animate-meteor`}
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            opacity: meteor.opacity,
            background: `linear-gradient(to right, ${meteor.color})`,
          }}
        />
      ))}
    </div>
  );
};
