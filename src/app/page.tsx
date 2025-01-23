import Link from "next/link";

export default function Home() {
  const projects = [
    {
      name: "Counter",
      path: "/counter",
      description:
        "A simple counter with increment, decrement, and reset functionality",
      emoji: "🔢",
    },
    {
      name: "Character Counter",
      path: "/characterCounter",
      description: "Track character count with limits and visual feedback",
      emoji: "📝",
    },
    {
      name: "Theme Switcher",
      path: "/themeSwitcher",
      description:
        "Toggle between light and dark themes with smooth transitions",
      emoji: "🌓",
    },
    {
      name: "Job Card",
      path: "/job",
      description:
        "Interactive job posting card with dynamic status updates, time-based features, and application tracking",
      emoji: "💼",
    },
    {
      name: "Music Album Card",
      path: "/album",
      description:
        "Dynamic music album showcase with tracklist, sales badges, and award display",
      emoji: "🎶",
    },
    {
      name: "Show Card",
      path: "/show",
      description:
        "TV show/movie display card with ratings, cast info, and streaming availability",
      emoji: "🎬",
    },
    {
      name: "Shopping List",
      path: "/shopping",
      description:
        "Interactive shopping list with add/remove functionality and item counter",
      emoji: "🛒",
    },
    {
      name: "React Quiz App",
      path: "projects/react/useState/quiz",
      description:
        "Interactive quiz application testing React knowledge with multiple-choice questions",
      emoji: "📝",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          React Learning Journey
          <span className="block text-lg font-normal text-gray-600 mt-2">
            Projects I{`'`}ve built while learning React
          </span>
        </h1>

        <div className="grid gap-4">
          {projects.map((project) => (
            <Link
              key={project.path}
              href={project.path}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{project.emoji}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {project.name}
                  </h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="text-blue-500">
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

        <p className="mt-8 text-center text-gray-600">
          More projects coming soon! 🚀
        </p>
      </div>
    </div>
  );
}
