import AlbumCard from "@/components/Album/AlbumCard";
import data from "@/components/Album/albumData";
import Navigation from "@/components/Navigation";
import "@/components/Album/Album.css";

export default function Album() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Album</h1>
          <div className="albums-container">
            {data.map((album) => {
              return <AlbumCard key={album.id} {...album} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
