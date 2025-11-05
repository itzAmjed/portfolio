import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Socialmedia from './Socialmedia';
import {useAppContext} from '../context.jsx/context.jsx'

const ProjectsSection = () => {
  const {showSocialMedia, setShowSocialMedia} = useAppContext();
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
           <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://drive.google.com/drive/u/0/folders/11v_X_-zA2yLFFQLHurYVJaxAfIz1QPKG"
          >
            Check My Google Drive <FaArrowRight size={16} />
          </a>
        </div> <div className="text-center mt-12">
          <button
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            onClick={() => setShowSocialMedia(true)}
          >
            Get my social media <FaArrowRight size={16} />
          </button>
          {showSocialMedia && <Socialmedia />}

        </div>



        </div>
      </div>
    </section>
  );
};

export default ProjectsSection