"use client";

import { memo } from "react";

const About = memo(function About() {
  const technologies = [
    { name: "React/Next.js", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "Python", level: 88 },
    { name: "Cloud Platforms", level: 85 },
    { name: "Database Design", level: 90 }
  ];

  const achievements = [
    {
      year: "2024",
      title: "50+ Applications Delivered",
      description: "Successfully delivered custom applications across various industries"
    },
    {
      year: "2023",
      title: "Enterprise Partnerships",
      description: "Established partnerships with major enterprise clients"
    },
    {
      year: "2022",
      title: "Cloud Migration Specialist",
      description: "Became certified in major cloud platforms and migration strategies"
    },
    {
      year: "2021",
      title: "Founded Xenostech Studio",
      description: "Started our journey to transform businesses through technology"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-[#13bfb5]">Xenostech Studio</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of software engineers and business consultants dedicated to 
              bridging the gap between innovative technology and real-world business solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower businesses of all sizes by creating custom applications that 
              streamline operations, enhance productivity, and drive growth. We believe that every 
              business is unique, and our solutions reflect that philosophy.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Expertise</h3>
              {technologies.map((tech, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{tech.name}</span>
                    <span className="text-gray-500">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-800"></div>
              
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#13bfb5] text-white rounded-full font-bold z-10">
                    {achievement.year.slice(-2)}
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#13bfb5] mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#13bfb5] mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#13bfb5] mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#13bfb5] mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
