import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiDollarSign } from "react-icons/fi";
import { SiApple } from "react-icons/si";

export const ImageTrailHero = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

      ]}
    >
      <section className="h-[700px] bg-slate-200">
        <NavBar />
        <Copy />
        <WatermarkWrapper />
      </section>
    </MouseImageTrail>
  );
};

const NavBar = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-[9999]">
      <div className="bg-slate-900 text-center">
        <p className="flex items-center justify-center gap-1 py-0.5 text-sm font-medium uppercase text-slate-100">
          <FiDollarSign className="text-indigo-300" />
          <span>20% off through December</span>
          <FiDollarSign className="text-indigo-300" />
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
        {/* Temp logo from logoipsum */}
        <div className="w-[40px] h-[40px]">
                <h1 className="text-2xl font-black text-white">M<span className="text-[#8d4bf6]">.</span>
                </h1>
            </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995, rotate: "3.5deg" }}
          className="flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-indigo-600"
        >
          <SiApple />
          <span>Download</span>
        </motion.button>
      </div>
    </nav>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-slate-900 md:text-8xl">
            The Pros Train with <span className="text-indigo-500">Plates</span>
          </h1>
          <p className="max-w-xl text-slate-700 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            optio quam voluptates accusantium unde labore maiores delectus
            tempora velit cum.
          </p>
        </div>
        <FiArrowDownCircle className="hidden text-8xl text-slate-500 md:block" />
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};