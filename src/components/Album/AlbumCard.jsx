/* eslint-disable react/prop-types */
export default function AlbumCard(props) {
  return (
    <div className="album-card">
      <div className="album-cover">
        <img className="w-full" src={props.cover.src} alt={props.cover.alt} />
        {/* Add platinum badge here conditionally */}
        {props.totalSales.indexOf("million") > -1 && (
          <div className="album-overlay">
            <span className="sales">{props.totalSales}</span>
          </div>
        )}
      </div>

      <div className="album-info">
        <div className="album-header">
          <h2 className="album-title">{props.title}</h2>
          <span className="release-year">{props.releaseYear}</span>
        </div>

        <div className="artist-info">
          <span className="artist">{props.artist}</span>
          <span className="genre">{props.genre}</span>
          <span className="label">{props.label}</span>
        </div>

        <p className="album-description">{props.description}</p>

        <div className="tracklist">
          <h3>Tracklist</h3>
          <ul className="tracks">
            {props.tracklist.map((track, i) => (
              <li key={i} className="track">
                <span className="track-title">{track.title}</span>
                <span className="track-duration">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="awards">
          <h3>Awards</h3>
          <ul className="awards-list">
            {props.awards.map((award, i) => (
              <li key={i} className="award">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
