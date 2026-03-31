"use client";

import React from "react";
import { Card } from "../atoms/Card";
import { Badge } from "../atoms/Badge";
import { Tag } from "../atoms/Tag";
import { Section } from "../atoms/Section";
import { ImageWithOverlay } from "../atoms/ImageWithOverlay";

export default function AlbumCard(props) {
  const {
    title,
    artist,
    releaseYear,
    cover,
    genre,
    label,
    tracklist,
    awards,
    totalSales,
    description,
  } = props;

  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <Card className="album-card">
      <ImageWithOverlay
        src={cover.src}
        alt={cover.alt}
        onClick={handleToggle}
        overlay={
          <Badge
            text={totalSales}
            variant="primary"
            className="absolute top-2 right-2"
          />
        }
      />

      <div className={`album-details-wrapper ${toggle ? "open" : ""}`}>
        <div className="album-details-content">
          <Section>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2 className="text-xl text-gray-600">{artist}</h2>

            <div className="flex flex-wrap gap-2 mt-3">
              <Tag text={genre} />
              <Tag text={label} />
              <Tag text={releaseYear} />
            </div>
          </Section>

          <Section>
            <p className="text-gray-600">{description}</p>
          </Section>

          <Section title="Tracklist">
            <ol className="space-y-2">
              {tracklist.map((track, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{track.title}</span>
                  <span className="text-gray-500">{track.duration}</span>
                </li>
              ))}
            </ol>
          </Section>

          {awards.length > 0 && (
            <Section title="Awards">
              <ul className="space-y-1">
                {awards.map((award, i) => (
                  <li key={i} className="text-gray-700">
                    {award}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <div className="swatch-strip flex gap-2 mt-6">
            <span
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "#f5f4eb" }}
            />
            <span
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "#f2f2f2" }}
            />
            <span
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "#f6f5ec" }}
            />
            <span
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: "#fdfcf3" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
