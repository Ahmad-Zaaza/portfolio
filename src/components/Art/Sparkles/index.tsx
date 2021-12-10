import { useRandomInterval } from "@/hooks/useRandomInterval";
import { generateSparkle, range } from "@/utils/helpers";
import { useState } from "react";
import Sparkle from "./Sparkle";

const Sparkes: React.FC<{ color?: string }> = ({
  children,
  color = "#FFC700"
}) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(2).map(() => generateSparkle(color));
  });
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    150,
    500
  );
  return (
    <span className="relative inline-block w-full">
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-[1] font-bold">{children}</strong>
    </span>
  );
};

export default Sparkes;
