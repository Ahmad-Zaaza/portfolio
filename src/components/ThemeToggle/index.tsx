import { useSpring, useTrail, animated } from "@react-spring/web";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const svgSpring = useSpring({
    transform: isDark ? "rotate(40deg)" : "rotate(90deg)",
    immediate: false
  });
  const maskSpring = useSpring({
    cx: isDark ? 10 : 25,
    cy: isDark ? 2 : 0,
    config: {
      mass: 3.1,
      friction: 21
    },
    immediate: false
  });
  const sunMoonSpring = useSpring({
    r: isDark ? 8 : 5,
    immediate: false
  });
  const sunDotAngles = [0, 60, 120, 180, 240, 300];
  const sunDotTrail = useTrail(sunDotAngles.length, {
    transform: isDark ? 0 : 1,
    transformOrigin: "center center",
    immediate: isDark,
    config: {
      tension: 210,
      friction: 20
    }
  });
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  if (!theme) return null;
  return (
    <button
      onClick={toggleTheme}
      className="opacity-70 ml-auto relative rounded w-10 h-8 flex items-center justify-center transition-opacity duration-200 md:hover:opacity-100"
    >
      <animated.svg
        className="relative overflow-visible fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        style={svgSpring}
      >
        <mask id={`moon-mask-main-nav`}>
          <rect x="0" y="0" width="18" height="18" fill="#FFF" />
          <animated.circle {...maskSpring} r="8" fill="black" />
        </mask>
        <animated.circle
          cx="9"
          cy="9"
          mask={`url(#moon-mask-main-nav)`}
          {...sunMoonSpring}
        />
        {/* Sun dots */}
        <g>
          {sunDotTrail.map(({ transform, ...props }, index) => {
            const angle = sunDotAngles[index];
            const centerX = 9;
            const centerY = 9;

            const angleInRads = (angle / 180) * Math.PI;

            const c = 8; // hypothenuse
            const a = centerX + c * Math.cos(angleInRads);
            const b = centerY + c * Math.sin(angleInRads);

            return (
              <animated.circle
                key={angle}
                cx={a}
                cy={b}
                r={1.5}
                style={{
                  ...props,
                  transform: transform.interpolate(t => `scale(${t})`)
                }}
              />
            );
          })}
        </g>
      </animated.svg>
    </button>
  );
};

export default ThemeToggle;
