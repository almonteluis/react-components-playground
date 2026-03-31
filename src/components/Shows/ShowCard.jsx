/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "../atoms/Card";
import { Badge } from "../atoms/Badge";
import { Tag } from "../atoms/Tag";
import { Rating } from "../atoms/Rating";

export default function ShowCard(props) {
  return (
    <Card className="show-card">
      <div className="poster-container relative">
        <img
          className="show-poster w-full rounded-lg"
          src={props.poster.src}
          alt="show poster"
        />
        {props.hasHDContent && (
          <Badge text="HD" variant="info" className="absolute top-2 right-2" />
        )}
      </div>

      <div className="content mt-4">
        <div className="header">
          <h2 className="title text-xl font-bold">{props.title}</h2>
          <div className="metadata flex gap-2 mt-2">
            <Tag text={props.releaseYear} />
            <Tag text={props.type} />
            <Tag text={props.seasons} />
          </div>
        </div>

        <div className="ratings flex gap-4 mt-4">
          {props.rating.imdb && (
            <Rating score={props.rating.imdb} source="IMDb" showSource />
          )}
          {props.rating.rottenTomatoes && (
            <Rating
              score={props.rating.rottenTomatoes}
              maxScore={100}
              source="Rotten Tomatoes"
              showSource
            />
          )}
        </div>

        <div className="genre-list flex flex-wrap gap-2 mt-4">
          {props.genre.map((g, i) => (
            <Tag key={i} text={g} />
          ))}
        </div>

        <p className="description mt-4 text-gray-600">{props.description}</p>

        <div className="cast mt-4">
          <div className="cast-label text-sm text-gray-500">Starring</div>
          <div className="cast-list flex flex-wrap gap-2 mt-2">
            {props.mainCast.map((cast, i) => (
              <Tag key={i} text={cast} />
            ))}
          </div>
        </div>

        <div className="streaming-platforms flex flex-wrap gap-2 mt-4">
          {props.streamingOn.map((stream, i) => (
            <Badge key={i} text={stream} variant="primary" />
          ))}
        </div>

        <div className="awards">
          <div className="awards-label">Awards</div>
          <ul className="awards-list">
            {props.awards.map((award, i) => (
              <li key={i} className="award-item">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
