import React from 'react'
import {  FaMicrophone , FaYoutube } from "react-icons/fa";
const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate video editor crafting compelling visual stories
            </h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in video editing, I edit anything
              with story worth telling. From social media clips to full-length
              documentaries, I bring a unique perspective to every project.
            </p>

            <p className="text-muted-foreground">
              Clean, professional edits, fast delivery.
              A creative partner 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaYoutube className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> video editing</h4>
                  <p className="text-muted-foreground">
                    Creating engaging and impactful content that resonates with
                    audiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaMicrophone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> additional service voice over</h4>
                  <p className="text-muted-foreground">
                    Providing professional voice-over services for various
                    media projects.
                  </p>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe