import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, GraduationCap, Trophy } from "lucide-react";
import Image from "next/image";

const ACHIEVEMENTS = [
  {
    icon: Brain,
    title: "Patent Filed",
    content: (
      <>
        <span className="font-semibold text-foreground">Patent Filed</span> for an
        AI-powered smart wheelchair system with intelligent navigation,
        obstacle detection, and automated patient transfer to improve mobility
        and healthcare efficiency.
      </>
    ),
  },
  {
    icon: Code2,
    title: "200+ LeetCode Problems",
    content: (
      <>
        Solved <span className="font-semibold text-foreground">200+</span>
        Data Structures and Algorithms problems on LeetCode, demonstrating
        strong problem-solving skills and consistency in coding.
      </>
    ),
  },
  {
    icon: Trophy,
    title: "Walmart Hackathon",
    content: (
      <>
        Participated in a Walmart Hackathon, contributing to building a
        real-world solution in a fast-paced, team-based environment.
      </>
    ),
  },
] as const;

const EDUCATION = [
  {
    institute: "Lovely Professional University, Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    scoreLabel: "CGPA",
    score: "8.01",
    timeline: "Aug 2023 - Present",
  },
  {
    institute: "Shri Mahavir Jain Model Sr. Sec. School, Phagwara, Punjab",
    degree: "Intermediate",
    scoreLabel: "Percentage",
    score: "96.2%",
    timeline: "Apr 2020 - Mar 2022",
  },
  {
    institute: "Shri Mahavir Jain Model Sr. Sec. School, Phagwara, Punjab",
    degree: "Matriculation",
    scoreLabel: "Percentage",
    score: "95%",
    timeline: "Apr 2019 - Mar 2020",
  },
] as const;

const CERTIFICATES = [
  {
    title: "Google Analytics",
    issuer: "Skillshop",
    label: "Certificate",
    timeline: "Sep 2025",
    image: "/assets/Google%20Analytics%20certificate.png",
  },
  {
    title: "Oracle Cloud Database Services Certified Professional",
    issuer: "Oracle",
    label: "Certificate",
    timeline: "Aug 2025",
    image: "/assets/Orcale%20Cloud%20based%20dataservices.png",
  },
  {
    title: "Oracle Cloud Infrastructure - AI Foundations Associate",
    issuer: "Oracle",
    label: "Certificate",
    timeline: "Aug 2025",
    image: "/assets/Orcale%20cloud%20Ai%20associate%20foundation.png",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    label: "Certificate",
    timeline: "Apr 2025",
    image: "/assets/NPTEL.png",
  },
] as const;

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[120vh] py-24 md:py-28 z-10"
    >
      <span id="achievements" className="absolute -top-24" aria-hidden="true" />
      <span id="education" className="absolute -top-24" aria-hidden="true" />
      <span id="certificates" className="absolute -top-24" aria-hidden="true" />
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <section className="mt-10 md:mt-14 border border-border/60 rounded-2xl p-6 md:p-9 bg-card/30">
          <SectionHeader
            id="achievements-list"
            title="Achievements"
            desc="Key milestones that reflect consistency, innovation, and impact."
            className="mb-10 md:mb-12"
          />

          <ul className="grid gap-5 md:gap-6">
            {ACHIEVEMENTS.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.li
                  key={achievement.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-30px" }}
                >
                  <Card
                    className={cn(
                      "border-border/80 bg-card/80 backdrop-blur-sm",
                      "transition-all duration-300",
                      "hover:-translate-y-0.5 hover:shadow-md hover:border-primary/25"
                    )}
                  >
                    <CardContent className="p-5 md:p-7">
                      <div className="flex items-start gap-4 md:gap-5">
                        <div className="mt-1 shrink-0 rounded-xl border border-border/70 bg-secondary/40 p-2.5 md:p-3">
                          <Icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                        </div>
                        <div className="space-y-2.5 md:space-y-3">
                          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {achievement.title}
                          </h3>
                          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                            {achievement.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              );
            })}
          </ul>
        </section>

        <section className="mt-16 md:mt-20 border border-border/60 rounded-2xl p-6 md:p-9 bg-card/30">
          <SectionHeader
            id="education-list"
            title="Education"
            desc="Academic foundation shaping my engineering mindset."
            className="mb-8 md:mb-10"
          />

          <ul className="grid gap-4 md:gap-5">
            {EDUCATION.map((item, index) => (
              <motion.li
                key={`${item.institute}-${item.degree}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <Card
                  className={cn(
                    "border-border/80 bg-card/80 backdrop-blur-sm",
                    "transition-all duration-300",
                    "hover:-translate-y-0.5 hover:shadow-md hover:border-primary/25"
                  )}
                >
                  <CardHeader className="pb-2 md:pb-3">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="mt-1 shrink-0 rounded-xl border border-border/70 bg-secondary/40 p-2.5 md:p-3">
                        <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg md:text-2xl font-semibold tracking-tight leading-tight">
                          {item.degree}
                        </CardTitle>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.institute}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-base md:text-lg">
                      <p className="text-muted-foreground">
                        {item.scoreLabel}: <span className="font-semibold text-foreground">{item.score}</span>
                      </p>
                      <p className="text-muted-foreground">{item.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mt-16 md:mt-20 border border-border/60 rounded-2xl p-6 md:p-9 bg-card/30">
          <SectionHeader
            id="certificates-list"
            title="Certificates"
            desc="Validated credentials supporting my technical foundation."
            className="mb-8 md:mb-10"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {CERTIFICATES.map((certificate, index) => (
              <motion.li
                key={certificate.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <Card
                  className={cn(
                    "h-full overflow-hidden border-border/80 bg-card/80 backdrop-blur-sm",
                    "transition-all duration-300",
                    "hover:-translate-y-0.5 hover:shadow-md hover:border-primary/25"
                  )}
                >
                  <div className="relative h-44 md:h-48 w-full bg-secondary/40">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base md:text-lg leading-snug">
                      {certificate.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm md:text-base text-muted-foreground">
                      {certificate.issuer} | {certificate.label}
                    </p>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">
                      {certificate.timeline}
                    </p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
