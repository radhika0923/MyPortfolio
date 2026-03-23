const config = {
  title: "Radhika | Software Developer",
  description: {
    long: "Explore the portfolio of Radhika, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Radhika, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Radhika",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Radhika",
  email: "radhikakamal2004@gmail.com",
  phone: "+91 7837855426",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "radhika0923",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
   
    leetcode: "https://leetcode.com/u/radheya04/",
    linkedin: "https://www.linkedin.com/in/radhika0409/",
    
    github: "https://github.com/radhika0923",
  },
};
export { config };
