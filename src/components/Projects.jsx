import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      thumbnail:
        "https://cdn.dribbble.com/users/4065092/screenshots/19512469/media/76baf85763ff72f2d12a0c9f80d6e6a7.png?compress=1&resize=768x576&vertical=top",
      title: "Travel Blog Platform",
      desc: "Created a dynamic travel blog platform for passionate travelers to share their experiences, photos, and travel tips. Implemented features like user profiles, interactive maps, and commenting system to foster community engagement and inspire wanderlust.",
    },
    {
      id: 2,
      thumbnail:
        "https://cdn.dribbble.com/userupload/3930920/file/original-0cbded3e56f3bdbe675571fb1b57a08a.jpg?compress=1&resize=1024x768",
      title: "E-commerce Furniture Store",
      desc: "Created a dynamic travel blog platform for passionate travelers to share their experiences, photos, and travel tips. Implemented features like user profiles, interactive maps, and commenting system to foster community engagement and inspire wanderlust.",
    },
    {
      id: 3,
      thumbnail:
        "https://cdn.dribbble.com/userupload/3909904/file/original-e0be894f395f2e4e5d461bf67086c930.png?compress=1&resize=1024x768",
      title: "Live Games Streaming App",
      desc: "Created a dynamic travel blog platform for passionate travelers to share their experiences, photos, and travel tips. Implemented features like user profiles, interactive maps, and commenting system to foster community engagement and inspire wanderlust.",
    },
  ];
  return (
    <div id="projects" className="w-full px-5 md:px-20 mb-[140px]">
      <h3 className="font-semibold text-2xl mb-4">My Projects</h3>
      {/* Project cards container */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
