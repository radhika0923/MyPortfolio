import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <span id="about" className="absolute -top-24" aria-hidden="true" />
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-32 pb-16 sm:pb-20 md:pt-28 md:pb-24 px-4 sm:px-6 md:px-20 lg:px-24 xl:px-32"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col gap-3 md:gap-4">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-6 text-base md:text-xl text-slate-500 dark:text-zinc-400",
                      "cursor-default font-medium uppercase tracking-[0.08em]"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[2px] text-transparent text-slate-800 text-left",
                          "font-black text-[clamp(3.8rem,17vw,9.2rem)] tracking-[-0.05em] leading-[0.84]",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-6 text-xl md:text-3xl lg:text-4xl text-slate-600 dark:text-zinc-300",
                      "cursor-default font-semibold font-display leading-tight max-w-3xl"
                    )}
                  >
                    From Passion to Impact.
                  </p>
                </BlurIn>
                <BlurIn delay={1.35}>
                  <p
                    className={cn(
                      "md:self-start mt-5 max-w-2xl text-base md:text-lg lg:text-xl text-slate-600 dark:text-zinc-400",
                      "cursor-default leading-relaxed"
                    )}
                  >
                    As a software developer, I am dedicated to turning my ideas into solutions and collaborating with others to constantly learn, evolve, and push my own boundaries.
                  </p>
                </BlurIn>
              </div>
              <div className="mt-10 md:mt-12 flex flex-col gap-4 w-fit">
                <a
                  href="/assets/8cgpa%20ums.pdf"
                  download="Radhika-Resume.pdf"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </a>
                <div className="md:self-start flex flex-wrap gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2 flex-wrap">
                    <Link
                      href={config.social.leetcode}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiLeetcode size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
