"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "ShelfSense",
    description:
      "AI-powered inventory optimization system focused on expiry prediction, retailer scoring, and smart stock redistribution.",
    link: "https://github.com/Suraj-singh04/ShelfSense",
    cover: "/assets/Shelfsense.png",
  },
  {
    id: 2,
    name: "Allergy Assistant",
    description:
      "AI health chatbot with Gemini API, symptom logging, and environmental data support for personalized allergy guidance.",
    link: "https://ayushsingh-01-github-io.vercel.app/#chat",
    repo: "https://github.com/ayushsingh-01/Food_Allergy",
    cover: "/assets/Allergy bot .png",
  },
  {
    id: 3,
    name: "UniExplorer",
    description:
      "Smart college discovery platform with filtering, side-by-side comparison, and recommendation logic for best-fit college choices.",
    link: "https://uniexplorer-pi.vercel.app/",
    repo: "https://github.com/radhika0923/Uniexplorer",
    cover: "/assets/uniexplorer.png",
  },
  {
    id: 4,
    name: "Event Management System",
    description:
      "Full stack web app for event booking with admin vendor management, authentication, and booking tracking.",
    link: "https://github.com/ayuhi1/Event_Management_website",
    cover: "/assets/Event management.png",
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20 text-zinc-300 h-full pb-10">
        <h1 className="text-3xl sm:text-4xl mt-24 sm:mt-[100px] mb-8 sm:mb-12">Projects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {PROJECTS.map((project) => (
            <li
              className="w-full max-w-[340px] min-h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Image
                  src={project.cover}
                  alt={`${project.name} cover`}
                  className="w-full h-[200px] rounded-md bg-zinc-900 object-cover"
                  width={300}
                  height={200}
                />
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-lg sm:text-xl leading-tight">{project.name}</h2>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="underline text-zinc-200"
                  >
                    Visit
                  </Link>
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener"
                      className="underline text-zinc-400"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
