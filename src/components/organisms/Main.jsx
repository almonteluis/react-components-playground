import Hero from "@/components/molecules/Hero";
import About from "@/components/molecules/About";
import Projects from "@/components/molecules/Projects";
import Experiences from "@/components/organisms/Experiences";
export default function Main() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10 md:mt-10">
        <Hero />
        <About />
        <Projects />
        <Experiences />
      </main>
    </>
  );
}
