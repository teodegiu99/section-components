import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

export const TakeoverLinks = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <nav className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-neutral-950 py-12 text-neutral-100">
      <div
        onMouseLeave={() => setActive(null)}
        className="relative z-20 flex flex-col items-center mix-blend-difference"
      >
        <Logo />
        {LINKS.map((l) => {
          return (
            <AnimatedLink
              setActive={setActive}
              active={active}
              href={l.href}
              id={l.id}
              key={l.id}
            >
              {l.text}
            </AnimatedLink>
          );
        })}
      </div>

      {LINKS.map((l) => {
        return (
          <LinkImage active={active} imgSrc={l.imgSrc} id={l.id} key={l.id} />
        );
      })}

      <UnderlayTransition active={active} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-4 scale-75 fill-neutral-100 md:scale-100"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const UnderlayTransition = ({ active }: { active: number | null }) => {
  const [underlayScope, animateUnderlay] = useAnimate();

  useEffect(() => {
    if (active) {
      animateUnderlay(
        underlayScope.current,
        {
          top: ["100%", "0%", "0%"],
          bottom: ["0%", "0%", "100%"],
        },
        { duration: 1.5, ease: "easeInOut" }
      );
    }
  }, [active]);

  return (
    <div
      ref={underlayScope}
      className="absolute bottom-0 left-0 right-0 top-full z-10 bg-neutral-300"
    />
  );
};

const AnimatedLink = ({
  children,
  href,
  setActive,
  active,
  id,
}: {
  children: string;
  href: string;
  setActive: Dispatch<SetStateAction<number | null>>;
  active: number | null;
  id: number;
}) => {
  return (
    <motion.a
      onMouseEnter={() => {
        setActive(id);
      }}
      href={href}
      animate={active === id || active === null ? "active" : "inactive"}
      variants={{
        active: {
          opacity: 1,
        },
        inactive: {
          opacity: 0.25,
        },
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
        staggerChildren: 0.075,
      }}
      whileHover="hovered"
      className="flex overflow-hidden py-2 text-5xl font-thin uppercase md:text-6xl lg:text-8xl"
    >
      {children.split("").map((ch, idx) => {
        return (
          <motion.span
            className="block"
            initial={false}
            variants={{
              hovered: {
                y: ["0%", "-110%", "110%", "0%"],
                opacity: [1, 0, 0, 1],
              },
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            key={idx}
          >
            {ch}
          </motion.span>
        );
      })}
    </motion.a>
  );
};

const LinkImage = ({
  imgSrc,
  active,
  id,
}: {
  imgSrc: string;
  active: number | null;
  id: number;
}) => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={active === id ? "active" : "inactive"}
      variants={{
        active: {
          opacity: 0.25,
        },
        inactive: {
          opacity: 0,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5,
      }}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
        opacity: 0,
      }}
    />
  );
};

const LINKS = [
  {
    href: "#",
    text: "Art",
    imgSrc: "/Assets/links/1.jpeg",
    id: 1,
  },
  {
    href: "#",
    text: "Design",
    imgSrc: "/Assets/links/2.jpeg",
    id: 2,
  },
  {
    href: "#",
    text: "Photos",
    imgSrc: "/Assets/links/3.jpeg",
    id: 3,
  },
  {
    href: "#",
    text: "Contact",
    imgSrc: "/Assets/links/4.jpeg",
    id: 4,
  },
];