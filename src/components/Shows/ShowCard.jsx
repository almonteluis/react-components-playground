/* eslint-disable react/prop-types */
export default function ShowCard(props) {
  return (
    <div className="show-card">
      <div className="poster-container">
        <img className="show-poster" src={props.poster.src} alt="show poster" />
        {props.hasHDContent && <div className="quality-badge">HD</div>}
      </div>

      <div className="content">
        <div className="header">
          <h2 className="title">{props.title}</h2>
          <div className="metadata">
            <span>{props.releaseYear}</span>
            <span>{props.type}</span>
            <span>{props.seasons}</span>
          </div>
        </div>

        <div className="ratings">
          {props.rating.imdb && (
            <div className="rating">
              <span className="rating-score">{props.rating.imdb}</span>
              <span className="rating-source">IMDb</span>
            </div>
          )}
          {props.rating.rottenTomatoes && (
            <div className="rating">
              <span className="rating-score">
                {props.rating.rottenTomatoes}%
              </span>
              <span className="rating-source">Rotten Tomatoes</span>
            </div>
          )}
        </div>

        <div className="genre-list">
          {props.genre.map((g, i) => (
            <span key={i} className="genre-tag">
              {g}
            </span>
          ))}
        </div>

        <p className="description">{props.description}</p>

        <div className="cast">
          <div className="cast-label">Starring</div>
          <div className="cast-list">
            {props.mainCast.map((cast, i) => (
              <div key={i}>{cast}</div>
            ))}
          </div>
        </div>

        <div className="streaming-platforms">
          {props.streamingOn.map((stream, i) => (
            <span key={i} className="platform">
              {stream}
            </span>
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
    </div>
  );
}
