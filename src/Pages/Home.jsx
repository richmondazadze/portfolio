import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const StatusBadge = memo(() => (
  <div
    className="inline-block animate-float lg:mx-0"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Richmond (Kofi)
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Azadze
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      <button className="group relative w-[160px]">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
        <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
          <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
          <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
              {text}
            </span>
            <Icon
              className={`w-4 h-4 text-gray-200 ${
                text === "Contact"
                  ? "group-hover:translate-x-1"
                  : "group-hover:rotate-45"
              } transform transition-all duration-300 z-10`}
            />
          </span>
        </div>
      </button>
    </a>
  );
});

const SocialLink = memo(({ icon: Icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Software Engineer", "Full Stack Developer", "AI Engineer"];
const TECH_STACK = [
  "Python",
  "React",
  "Node.js",
  "Firebase",
  "Next.js",
  "Tailwind",
];
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/richmond-azadze",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/richmondazadze",
    icon: Github,
  },
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  // Lottie configuration
  const lottieOptions = {
    src: "/animation.json",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[5rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 md:flex-row">
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
          {/* Left Column */}
          <div
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0 pl-0 sm:pl-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="space-y-4 sm:space-y-6">
              <StatusBadge />
              <MainTitle />

              {/* Typing Effect */}
              <div
                className="h-8 flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Passionate about crafting innovative digital solutions through
                clean code and cutting-edge technologies. Specializing in
                full-stack development and AI integration.
              </p>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap gap-3 justify-start"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {TECH_STACK.map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row gap-3 w-full justify-start"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <CTAButton
                  href="#Portofolio"
                  text="Projects"
                  icon={ExternalLink}
                />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>

              {/* Social Links */}
              <div
                className="hidden sm:flex gap-4 justify-start"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Lottie Animation */}
          <div
            className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <DotLottieReact
              src="https://lottie.host/037efa26-0728-4864-ac22-93c8e8193104/WxjGcWFB8v.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
