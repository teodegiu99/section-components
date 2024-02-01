import { motion } from "framer-motion";
import { FiArrowRight, FiGitPullRequest, FiArrowUpRight } from "react-icons/fi";

const CardWrapper = () => {
  return (
    <div className="p-8 bg-slate-950 text-white">
      <div className="w-full max-w-lg">
        <ThreeDHoverScreenCard />
      </div>
    </div>
  );
};

const ThreeDHoverScreenCard = () => {
  return (
    <motion.div whileHover="hovered" className="cursor-pointer">
      <ScreenMock />
      <CardCopy />
    </motion.div>
  );
};

const ScreenMock = () => {
  return (
    // Light Gradient Background
    <motion.div
      variants={{
        hovered: {
          rotateY: "15deg",
          rotateX: "2.5deg",
          x: -10,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: 0.35,
      }}
      className="w-full h-80 rounded-2xl p-4 bg-gradient-to-br from-violet-300 to-indigo-300"
    >
      {/* Browser Screen */}
      <div
        style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        className="w-full h-full bg-slate-900 rounded-xl shadow-lg p-2 relative"
      >
        {/* Browser Buttons */}
        <div className="flex gap-1 mt-1 relative">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        {/* Browser Mockup */}
        <div
          style={{
            transformStyle: "preserve-3d",
          }}
          className="p-2 rounded-md absolute top-8 bottom-2 left-2 right-2 bg-slate-800 grid gap-4 grid-cols-6 grid-rows-6"
        >
          <div
            style={{ transform: "translateZ(40px)" }}
            className="rounded-lg w-full col-span-6 row-span-1 bg-slate-700"
          />
          <div
            style={{ transform: "translateZ(20px)" }}
            className="rounded-lg w-full col-span-1 row-span-5 bg-slate-700"
          />
          <div
            style={{ transform: "translateZ(80px)" }}
            className="rounded-lg w-full col-span-3 row-span-5 bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"
          >
            <FiGitPullRequest className="text-7xl" />
          </div>
          <div
            style={{ transform: "translateZ(120px)" }}
            className="rounded-lg w-full col-span-2 row-span-5 bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center"
          >
            <FiArrowUpRight className="text-7xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CardCopy = () => {
  return (
    <div className="flex items-center mt-6">
      <motion.div
        variants={{
          hovered: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          x: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <FiArrowRight className="text-2xl mr-4" />
      </motion.div>
      <motion.div
        variants={{
          hovered: {
            x: 0,
          },
        }}
        style={{
          x: -40,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <h4 className="text-2xl font-bold mb-1">
          Increase developer productivity
        </h4>
        <span className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          debitis nam cumque?
        </span>
      </motion.div>
    </div>
  );
};

export default CardWrapper;