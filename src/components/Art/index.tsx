import dynamic from "next/dynamic";
const Sparkes = dynamic(() => import("./Sparkles"), { ssr: false });

const Art = () => {
  return (
    <div className="relative h-64 mt-16">
      <Sparkes>
        <div className="h-16"></div>
      </Sparkes>
      {/* <span className="bg-green-300 left-12 art-blob"></span> */}
      {/* <span className="bg-indigo-400 animation-delay-2000 art-blob right-36"></span> */}
      <span className="bg-red-400 animation-delay-2000 art-blob right-36"></span>
      <span className="bg-blue-300 animation-delay-3000 art-blob right-52"></span>
      {/* <span className="bg-red-300 animation-delay-3000 art-blob right-52"></span> */}
      {/* <span className="bg-yellow-300 animation-delay-4000 art-blob right-44"></span> */}
      <span className="bg-green-300 animation-delay-5000 art-blob right-28"></span>
    </div>
  );
};

export default Art;
