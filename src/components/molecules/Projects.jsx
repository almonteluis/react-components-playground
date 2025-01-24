import Image from "next/image";
import { PortfolioProjects } from "@/api/getPortfolioProjects";
export default function Projects() {
  return (
    <>
      <h1>Projects component</h1>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Projects
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I build projects from 0 to 1, turning ideas into reality. Take a
                look at some of my favorite projects below.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {PortfolioProjects.map((project, i) => (
              <div
                key={i}
                className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
              >
                <a className="block cursor-pointer" href="https://jsongpt.com">
                  <Image
                    alt="JsonGPT"
                    loading="lazy"
                    width="500"
                    height="300"
                    decoding="async"
                    className="h-40 w-full overflow-hidden object-cover object-top"
                    style={{ color: "transparent" }}
                    src="/api/placeholder/500/300"
                  />
                </a>
                <div className="flex flex-col px-2">
                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight mt-1 text-base">
                      {project.title}
                    </h3>
                    <time className="font-sans text-xs">{project.period}</time>
                    <div className="hidden font-sans text-xs underline print:visible"></div>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&>*]:!leading-tight">
                      <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert [&amp;>*]:!leading-tight">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                  <div class="mt-2 flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
