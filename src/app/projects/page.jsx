import Link from "next/link";
import { getProducts } from "@/api/getProjects";

export default function Projects() {
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
          {getProducts.map((project) => (
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
