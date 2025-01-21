"use client";
import ShowCard from "@/components/Shows/ShowCard";
import showData from "@/components/Shows/showData";
import "@/components/Shows/show.css";
export default function Shows() {
  return (
    <>
      <div className="shows-container ">
        {showData.map((show) => {
          return <ShowCard key={show.id} {...show} />;
        })}
      </div>
    </>
  );
}
