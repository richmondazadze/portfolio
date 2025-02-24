import React from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Github } from "lucide-react";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <Link
            to="/#Portofolio"
            className="text-purple-500 hover:text-purple-400 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] py-12 px-4 md:px-[10%]">
      <nav className="max-w-6xl mx-auto mb-8">
        <Link
          to="/#Portofolio"
          className="inline-flex items-center gap-2 px-4 py-2 text-purple-500 hover:text-purple-400 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            {project.Title}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            {project.Description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900/50 rounded-xl p-4 backdrop-blur-sm border border-white/10">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={project.Img}
                  alt={project.Title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.Features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
                  >
                    <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.TechStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Project Links
              </h2>
              <div className="space-y-3">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white w-full justify-center"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white w-full justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/richmondazadze"
            className="hover:underline"
          >
            <strong>richmondazadze</strong>
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
    </div>
    
  );
};

export default ProjectDetails;
