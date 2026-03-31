import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getProjects } from "@/api/getProjects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            React Learning Journey
          </h1>
          <p className="text-[#f5f4ef]/60 mb-8">
            Projects I&apos;ve built while learning React
          </p>

          <div className="grid gap-4">
            {getProjects.map((project) => (
              <Link
                key={project.path}
                href={project.path}
                className="block p-6 bg-[#f5f4ef]/5 rounded-lg border border-[#f5f4ef]/10 hover:border-[#bfff00]/30 hover:bg-[#f5f4ef]/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{project.emoji}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-[#f5f4ef] mb-1">
                      {project.name}
                    </h2>
                    <p className="text-[#f5f4ef]/60">{project.description}</p>
                  </div>
                  <div className="text-[#bfff00]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-[#f5f4ef]/40">
            More projects coming soon!
          </p>
        </div>
      </main>
    </div>
  );
}
