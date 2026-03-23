import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 lg:px-16">
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-slate-300/60 via-white/10 to-slate-500/30 blur-lg" />
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
            <Image
              src="/assets/Radhikap.png"
              alt="Radhika portrait"
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-7 md:space-y-8">
          <p className="uppercase tracking-[0.18em] text-sm font-semibold text-muted-foreground">
            Biography
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-0.04em]">
            From Passion to Impact
          </h1>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Hi, I&apos;m Radhika, an experienced software developer with a passion for creating beautiful, functional and user-centered digital experiences. With a solution-centered mind and optimistic attitude, I am always looking for new and innovative ways to bring my visions to life.
            </p>

            <p>
              I believe that design is about more than just making things look pretty, it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.
            </p>

            <p>
              Whether I&apos;m working on a website, mobile app or any other digital product, I bring strong commitment to excellence and user-centric thinking to every project I work on. With growing expertise in DSA, I am evolving everyday to be better version of myself than yesterday.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
