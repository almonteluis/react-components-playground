export default function About() {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">About</h2>
      <div className="prose max-w-full text-balance font-sans text-muted-foreground dark:prose-invert">
        <p>
          I'm passionate about building innovative AI solutions and finding
          security vulnerabilities. I've
          {/*            */}
          <a
            href="/#bugbounty"
            className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
          >
            discovered 8 security vulnerabilities in Google Chrome, earned over
            $23,000 in rewards and ranked in Google's top-100 security
            researchers
          </a>
          . I'm currently focused on developing{" "}
          <a
            href="/#projects"
            className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
          >
            JsonGPT, an AI-powered API that provides structured JSON outputs
          </a>
          , and have also{" "}
          <a
            href="/#hackathons"
            className="underline dark:text-white text-black dark:hover:text-white/90 hover:text-gray-700"
          >
            participated in Google AI hackathons
          </a>
          .
        </p>
      </div>
    </section>
  );
}
