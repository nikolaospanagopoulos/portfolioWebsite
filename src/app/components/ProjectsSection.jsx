"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "C Compiler",
    description:
      "A C compiler for a subset of the C programming language. Focusing on performance and efficiency, it's designed to be lightweight, fast, and reliable. Constantly under improvement, this project reflects my commitment to refining and enhancing its capabilities.",
    image: "/images/projects/compiler.png",
    tag: ["All", "OS"],
    gitUrl: "https://github.com/nikolaospanagopoulos/panagoCompiler",
  },
  {
    id: 2,
    title: "Kernel",
    description:
      "A 32bit kernel with a custom bootloader, developed using x86 (nasm) assembly and the C programming language. It includes a custom file system implementation, a heap memory manager and multitasking.",
    image: "/images/projects/kernel.png",
    tag: ["All", "OS"],
    gitUrl: "https://github.com/nikolaospanagopoulos/kernel",
  },
  {
    id: 3,
    title: "Text Editor",
    description:
      "High-performance text editor inspired by Vim, crafted meticulously in C++. Designed for speed and efficiency, it operates seamlessly across multiple modes including Normal, Input, and Command. Through continuous enhancements, it embodies my dedication to creating robust, user-centric software solutions.",
    image: "/images/projects/text-editor.png",
    tag: ["All", "OS"],
    gitUrl: "https://github.com/nikolaospanagopoulos/Panavim",
  },
  {
    id: 4,
    title: "Search Engine",
    description:
      "Fully Dockerized PHP-based search engine with advanced features like telemetry and image search. The project is built using PHP 8.2, MySQL, and Apache, all containerized for easy deployment and scalability. This search engine efficiently handles text queries, with telemetry for tracking user interactions to optimize search results",
    image: "/images/projects/search_engine.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nikolaospanagopoulos/searchEngine",
  },
  {
    id: 5,
    title: "In Memory Key Value Store",
    description:
      "A multi-threaded, in-memory key-value store inspired by Redis using C++. The server handles concurrent client connections with a custom thread pool, ensuring efficient task processing. The key-value store is implemented with a custom-built hash map (UnorderedMap) that supports dynamic resizing and thread-safe operations with shared_mutex. I implemented several basic commands such as SET, GET, DEL, EXISTS, and more, making the server capable of handling common Redis-like operations.",
    image: "/images/projects/redis.png",
    tag: ["All", "Web", "OS"],
    gitUrl: "https://github.com/nikolaospanagopoulos/keyValueStore",
  },
  {
    id: 6,
    title: "Process Monitor",
    description:
      "This high-performance Linux process monitor provides real-time tracking of system processes. It displays key metrics such as PID, CPU usage, memory consumption, and process states dynamically.",
    image: "/images/projects/process_monitor.jpg",
    tag: ["All", "OS"],
    gitUrl: "https://github.com/nikolaospanagopoulos/c_process_monitor",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="OS"
          isSelected={tag === "OS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
