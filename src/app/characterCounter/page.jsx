import CharacterCounter from "@/components/organisms/CharacterCounter";
import Navigation from "@/components/Navigation";

export default function CharacterCounterPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Character Counter</h1>
          <CharacterCounter />
        </div>
      </main>
    </div>
  );
}
