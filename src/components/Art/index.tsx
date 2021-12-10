import Sparkes from "./Sparkles";

const Art = () => {
  return (
    <div className="h-64 relative mt-16">
      <Sparkes>
        <div className="h-16"></div>
      </Sparkes>
      <span className="left-12  art-blob bg-green-300"></span>
      <span className="animation-delay-2000 art-blob  right-36  bg-indigo-400"></span>
      <span className="animation-delay-3000 art-blob  right-52 bg-blue-300"></span>
      {/* <span className="animation-delay-3000 art-blob  right-52 bg-red-300"></span> */}
      <span className="animation-delay-4000 art-blob  right-44 bg-yellow-300"></span>
      <span className="animation-delay-5000 art-blob  right-28 bg-green-300"></span>
    </div>
  );
};

export default Art;
