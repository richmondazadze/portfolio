import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/richmond-azadze",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@richmondazadze",
    icon: Github,
    url: "https://github.com/richmondazadze",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const [github] = socialLinks.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                   bg-gray-800/30 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                           group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* GitHub Row */}
        <div className="grid grid-cols-1 gap-4">
          <a
            key={github.name}
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl 
                     bg-gray-800/30 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                           bg-gradient-to-r ${github.gradient}`}
            />

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                             group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: github.color }}
              />
              <div className="relative p-2 rounded-lg">
                <github.icon
                  className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: github.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {github.displayName}
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {github.subText}
              </span>
            </div>

            <ExternalLink
              className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                   opacity-0 group-hover:opacity-100 transition-all duration-300
                                   transform group-hover:translate-x-0 -translate-x-2"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
