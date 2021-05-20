import axios from "axios";

const artwork_endpoint = "https://api.artic.edu/api/v1/artworks"
const default_image_config = "full/843,/0/default.jpg";
const image_limit = 3;

const callEndpoint = async endpoint => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await axios.get(endpoint, config);
  return response.data;
};

// Main ARTWORK object with several fields
// https://api.artic.edu/docs/#collections-2
export const getArtwork = (id) => {
  const url = `${artwork_endpoint}/${id}`;
  return callEndpoint(url);
};

export const getArtworkIDs = async (searchTerm) => {
  const details = 'query[term][medium_display]=oil'
  const search_endpoint = `${artwork_endpoint}/search/?q=${searchTerm}&size=${image_limit}&${details}`
  const res = await callEndpoint(search_endpoint);
  return res.data.map((img => img.id));
};

// https://api.artic.edu/docs/#iiif-image-api
export const assembleArtworkURL = artwork => {
  const image_id = artwork.data.image_id;
  const image_api = artwork.config.iiif_url;
  const url = `${image_api}/${image_id}/${default_image_config}`;
  return url;
};