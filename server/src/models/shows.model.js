const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const axios = require('axios');

const storagePath = path.join(__dirname, '..', '..', 'data', 'openTheatreShows.json');

const intervalTimerinMs = Math.floor(5 * 60 * 1000);

/**
 * Scrape Showes Data
 * @return {Shows Data}
 */
async function fetschShowsData() {
  try {
    const response = await axios.get('https://officiallondontheatre.com/wp-json/shows/all-open');
    return response.data;
  } catch (error) {
    console.error('Error retrieving theatre shows data', error);
  }
}

/**
 * Store shows data. Write shows to JSON file
 */
async function storeShowsData() {
  const shows_data = await fetschShowsData();
  try {
    await writeFile(storagePath, JSON.stringify(shows_data));
    console.log('Open theatre shows JSON file created!');
  } catch (error) {
    console.error(error);
  }
}

/**
 * Load Shows Data already Stored
 * @return {storedShows}
 */
async function loadShowsData() {
  try {
    const data = await readFile(storagePath);
    const storedShows = JSON.parse(data.toString());
    return storedShows;
  } catch (e) {
    console.log('Error loading stored theatre shows data:', e);
  }
}

/**
 * Set Interval of 5 mins to fetch and store shows data
 */
setInterval(() => {
  const timeNow = new Date();
  console.log(`Shows have been updated at ${timeNow}`);
  storeShowsData();
}, intervalTimerinMs);

module.exports = {
  storeShowsData,
  loadShowsData,
};
