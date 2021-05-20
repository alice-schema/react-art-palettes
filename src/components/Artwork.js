import { useState, useEffect } from "react";
import { getArtwork, assembleArtworkURL } from "../utils/apiHandler";
import Palette from "./Palette";

const Artwork = ({ artwork_id }) => {
  const [url, setURL] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    getArtwork(artwork_id).then(artwork => {
      setURL(assembleArtworkURL(artwork));
      setInfo(artwork.data);
    })
  }, [artwork_id]);

  return (
    <div className="artwork-container">
      {url && <Palette url={url}></Palette>}
      <div className="image-container">
        <img className="artwork" src={url} alt="" />
        <div className='artwork-info'>
          <h3>{info.title}</h3>
          <h4>{info.artist_display}</h4>
    </div>
      </div>
    </div>
  );
};

export default Artwork;