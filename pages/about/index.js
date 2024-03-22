import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import { SiNextdotjs, SiAdobephotoshop } from "react-icons/si";

const aboutData = [
  {
    id: 1,
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <FaNodeJs key="node" />,
          <FaPython key="python" />,
          <FaPhp key="php" />,
          <FaLaravel key="laravel" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    id: 2,
    title: "awards",
    info: [
      {
        title: "Backend Developer - Hackernoon",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    id: 3,
    title: "experience",
    info: [
      {
        title: "Node Js Developer - AR TechWorld",
        stage: "2020 - 2024",
      },
      {
        title: "UX/UI Designer - Clarigo infotehc",
        stage: "2020 - 2024",
      },
      {
        title: "Web Developer - ESP SoftTech",
        stage: "2020 - 2024",
      },
      {
        title: "Intern - Universal",
        stage: "2018 - 2019",
      },
    ],
  },
  {
    id: 4,
    title: "credentials",
    info: [
      {
        title: "Web Development - Universal, LA, CA",
        stage: "2017",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2015",
      },
      {
        title: "Certified Graphic Designer",
        stage: "2016",
      },
    ],
  },
];
// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen bg-gray-900 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar img */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hiddle xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Magnificent
            <span className="text-accent"> designs</span> are born from
            captivating stories.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            4 years back, I started freelancing as a developer. Since then, I have
            worked remotely for agencies, consulted with startups, and teamed up
            on digital products for businesses and customers.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-10"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, infoIndex) => (
              <div
                key={infoIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                {/* icons */}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
