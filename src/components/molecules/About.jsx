export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            About
          </div>
          <h2 className="text-3xl font-bold tracking-tighter pb-3 sm:text-5xl">
            About Me
          </h2>
        </div>
      </div>

      <div className="prose max-w-full text-balance font-sans text-muted-foreground dark:prose-invert">
        <p>
          From dismantling PCs as a curious kid to architecting high-performance
          web applications, my path in technology has always been driven by a
          desire to build and understand. What started with an HTML class in
          college has evolved into a nine-year journey as a Senior Frontend
          Engineer, specializing in creating performant, user-centric web
          applications.
        </p>{" "}
        <br />
        <p>
          I thrive on transforming designs into elegant code, using atomic
          design principles to build scalable component systems that have
          improved conversion rates by 40% and page load times by 65%. My
          expertise spans React, TypeScript, and Next.js, with a particular
          focus on performance optimization and accessible user interfaces.
        </p>{" "}
        <br />
        <p>
          When I'm not crafting pixel-perfect experiences, I'm sharing insights
          and learning from the developer community on dev.to, constantly
          pushing the boundaries of what's possible in frontend development.
        </p>
      </div>
    </section>
  );
}
