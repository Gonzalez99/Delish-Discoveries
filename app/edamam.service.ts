const axios = require('axios');

const appId = 'f47e4390';
const apiKey = 'c51a54bd0a3f56867605636ba22a847e';

const searchQuery = 'chicken';

axios
  .get('https://api.edamam.com/search', {
    params: {
      q: searchQuery,
      app_id: appId,
      app_key: apiKey,
    },
  })
  .then((response) => {
    // Process the recipe search response
    const recipes = response.data.hits;
    // Handle the retrieved recipes in your app
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error('Error fetching recipes:', error);
  });
