import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "shelfsense",
    category: "AI Inventory Optimization",
    title: "ShelfSense",
    src: "/assets/Shelfsense.png",
    screenshots: ["Shelfsense.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://github.com/Suraj-singh04/ShelfSense",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ShelfSense is an AI-powered inventory optimization system that helps
            reduce product wastage by predicting expiry and improving stock
            distribution across retailers.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">
            Traditional inventory systems do not handle expiry-based losses and
            smart redistribution, which leads to unsold products and financial
            leakage.
          </p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">
            Built an expiry prediction workflow, a retailer scoring algorithm,
            and AI-driven redistribution recommendations with a real-time admin
            dashboard.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Reduced inventory wastage and improved decision-making through
            intelligent automation.
          </p>
        </div>
      );
    },
  },
  {
    id: "allergy-assistant",
    category: "AI Health Chatbot",
    title: "Allergy Assistant",
    src: "/assets/Allergy bot .png",
    screenshots: ["Allergy bot .png"],
    live: "https://ayushsingh-01-github-io.vercel.app/#chat",
    github: "https://github.com/ayushsingh-01/Food_Allergy",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Allergy Assistant is an AI-powered chatbot that provides instant
            guidance, symptom tracking, and personalized recommendations for
            people managing allergies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">
            People with allergies often lack instant support, environmental
            awareness, and personalized health insights when symptoms appear.
          </p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">
            Built a domain-specific AI chatbot with Gemini API, integrated
            pollen/environmental data, and added symptom logging with secure
            authentication flows.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Enabled users to make informed health decisions with fast,
            personalized support.
          </p>
        </div>
      );
    },
  },
  {
    id: "uniexplorer",
    category: "Smart College Discovery",
    title: "UniExplorer",
    src: "/assets/uniexplorer.png",
    screenshots: ["uniexplorer.png"],
    live: "https://uniexplorer-pi.vercel.app/",
    github: "https://github.com/radhika0923/Uniexplorer",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            UniExplorer is a smart college discovery platform that helps
            students explore and compare colleges using practical decision
            filters.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">
            Students struggle to choose colleges because data is scattered,
            filtering is limited, and comparison tools are often missing.
          </p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">
            Built a centralized platform with advanced filters for fees,
            location, and courses, plus a side-by-side comparison feature and
            recommendation logic.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Simplified the college selection process with structured,
            user-friendly discovery and comparison.
          </p>
        </div>
      );
    },
  },
  {
    id: "event-management-system",
    category: "Full Stack Web Application",
    title: "Event Management System",
    src: "/assets/Event management.png",
    screenshots: ["Event management.png"],
    live: "https://github.com/ayuhi1/Event_Management_website",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Event Management System is a full stack web application for booking
            events while giving admins full control over vendors, bookings, and
            event operations.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Problem</TypographyH3>
          <p className="font-mono mb-2">
            Event planning is often fragmented and time-consuming without a
            centralized platform for bookings and vendor operations.
          </p>
          <TypographyH3 className="my-4 mt-8">Solution</TypographyH3>
          <p className="font-mono mb-2">
            Developed an end-to-end booking system with authentication, vendor
            management, booking tracking, and a structured relational database.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Streamlined event planning and improved efficiency through digital,
            centralized management.
          </p>
        </div>
      );
    },
  },
];
export default projects;
