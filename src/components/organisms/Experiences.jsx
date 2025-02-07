import { getExperiences } from "@/api/getExperiences";
import Image from "next/image";
import GithubIcon from "@/components/atoms/GithubIcon";
export default function Experiences() {
  return (
    <section id="experiences">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Bug Bounty
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experiences
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I actively participate in bug bounty programs to help make the
              internet more secure. Below is a list of vulnerabilities found by
              me.
            </p>
          </div>
        </div>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {getExperiences.experience.map((experience, i) => (
            <div key={i}>
              {console.log(experience)}
              <li className="relative ml-10 py-4">
                <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <Image
                      className="aspect-square h-full w-full object-contain"
                      alt="System environment variables leak"
                      src="/google.png"
                      width={40}
                      height={40}
                    />
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-muted-foreground">
                    {experience.period}
                  </time>
                  <h2 className="font-semibold leading-none">
                    {experience.title}
                  </h2>
                  <span className="prose dark:prose-invert text-sm text-muted-foreground">
                    {experience.achievements}
                  </span>
                </div>
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                  <a
                    target="_blank"
                    rel="noopener nofollow"
                    href="https://github.com/Puliczek/CVE-2022-0337-PoC-Google-Chrome-Microsoft-Edge-Opera"
                  >
                    <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2">
                      <GithubIcon />
                      Write-up
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener nofollow"
                    href="https://chromereleases.googleblog.com/2022/01/stable-channel-update-for-desktop.html"
                  ></a>
                  <div
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-auto"
                    title="Reward amount"
                  >
                    Reward: $ 10,000
                  </div>
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80">
                    HIGH
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
