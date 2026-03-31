"use client";
import ShowCard from "@/components/Shows/ShowCard";
import Navigation from "@/components/Navigation";
import showData from "@/components/Shows/showData";
import "@/components/Shows/show.css";

export default function Shows() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Shows</h1>
          <div className="shows-container">
            {showData.map((show) => {
              return <ShowCard key={show.id} {...show} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
