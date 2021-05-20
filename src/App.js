import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import Artwork from "./components/Artwork";
import "./styles/App.css";
import { useState, useEffect } from 'react';
import { getArtworkIDs } from './utils/apiHandler';

// !anonymous users are throttled to 60 requests per minute

function App() {
  const [keyword, setKeyword] = useState("field");
  const [images, setImages] = useState([]);

  useEffect(() => {
    getArtworkIDs(keyword).then(imageIDs => setImages(imageIDs))
  }, [keyword]);

  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    if (!searchTerm) {
        alert("Empty input. Please add a search term.")
        return;
    }
    setKeyword(searchTerm);
  }

  return (
    <div className="App">
      <Header currentSearch={keyword}></Header>
      <Searchbox initialSearch={keyword} handleSubmit={handleSubmit}></Searchbox>
      <div className="image-grid">
        {images.map(id => {
          return <Artwork className="artwork" key={id} artwork_id={id}></Artwork>;
        })}
      </div>
    </div>
  );
}

export default App;