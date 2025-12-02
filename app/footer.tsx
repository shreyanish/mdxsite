"use client"
import { useState, useEffect } from "react";

const Footer = () => {
  const links = [
    { name: "x/twitter", url: "https://x.com/fluxonr" },
    { name: "linkedin", url: "https://www.linkedin.com/in/shreyanish" },
  ];

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="max-w-[60ch] mx-auto w-full mt-12 text-center">
      <div className="flex justify-between">
        <div className="flex space-x-4 tracking-tight">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target= "_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        <span className="font-mono text-gray-400 dark:text-gray-500 text-xs">
        {currentTime}
        </span>
      </div>

    </footer>
  );
}

export default Footer;