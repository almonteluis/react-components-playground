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
              <li className="relative ml-10 py-4">
                <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <Image
                      className="aspect-square h-full w-full object-contain"
                      alt="System environment variables leak"
                      src={experience.image}
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
                  <ul className="prose dark:prose-invert text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
