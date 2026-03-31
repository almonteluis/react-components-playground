import Link from "next/link";
import Navigation from "@/components/Navigation";

interface Route {
  path: string;
  label: string;
  description?: string;
}

const routes: Route[] = [
  { path: "/", label: "Home", description: "Portfolio homepage" },
  { path: "/album", label: "Album", description: "Photo album showcase" },
  {
    path: "/characterCounter",
    label: "Character Counter",
    description: "Text analysis tool",
  },
  { path: "/counter", label: "Counter", description: "Interactive counter" },
  { path: "/job", label: "Job Board", description: "Job listings display" },
  {
    path: "/projects",
    label: "Projects",
    description: "Project showcase",
  },
  {
    path: "/projects/greatfrontend/challenges/profileCard",
    label: "Profile Card",
    description: "Frontend challenge - Profile card component",
  },
  {
    path: "/projects/react/useRef/01-focus",
    label: "useRef Focus",
    description: "React useRef - Input focus demo",
  },
  {
    path: "/projects/react/useRef/02-timer",
    label: "useRef Timer",
    description: "React useRef - Timer demo",
  },
  {
    path: "/projects/react/useState/quiz",
    label: "Quiz",
    description: "React useState - Quiz app",
  },
  {
    path: "/shopping",
    label: "Shopping",
    description: "Shopping interface",
  },
  { path: "/show", label: "Shows", description: "TV shows listing" },
  {
    path: "/themeSwitcher",
    label: "Theme Switcher",
    description: "Dark/light mode toggle",
  },
];

export default function RoutesPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Site Routes</h1>
          <p className="text-[#f5f4ef]/60 mb-8">
            All available pages in this application
          </p>

          <div className="grid gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="block p-6 bg-[#f5f4ef]/5 rounded-lg border border-[#f5f4ef]/10 hover:border-[#bfff00]/30 hover:bg-[#f5f4ef]/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-[#bfff00] transition-colors">
                      {route.label}
                    </h2>
                    {route.description && (
                      <p className="text-[#f5f4ef]/60 mt-1 text-sm">
                        {route.description}
                      </p>
                    )}
                  </div>
                  <span className="text-[#f5f4ef]/40 text-sm font-mono bg-[#080808] px-3 py-1 rounded border border-[#f5f4ef]/10">
                    {route.path}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-[#bfff00] hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
