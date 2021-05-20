const Header = ({ currentSearch }) => {
    return (
    <>
      <h1>Art Palettes</h1>
      <p>Get inspiration for your color palettes based on oil paintings.  
        Search for any keyword to list three artworks and their approximate color palettes.
        Currently paintings are shown for the '{currentSearch.toUpperCase()}' keyword.
        <br />
        <br />
        Artworks from <a
          href="https://api.artic.edu/docs/"
          target="_blank"
          rel="noreferrer"
        >Art Institute of Chicago API</a>
        <br />
        Colors extracted by <a
          href="https://www.npmjs.com/package/color.js"
          target="_blank"
          rel="noreferrer"
          >color.js</a>
      </p>
    </>)
};

export default Header;