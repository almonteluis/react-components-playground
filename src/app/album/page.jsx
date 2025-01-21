import AlbumCard from "@/components/Album/AlbumCard";
import data from "@/components/Album/albumData";
import "@/components/Album/Album.css";
export default function Album() {
  return (
    <div className="albums-container">
      {data.map((album) => {
        return <AlbumCard key={album.id} {...album} />;
      })}
    </div>
  );
}