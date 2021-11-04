const { loadShowsData } = require('../../models/shows.model');

async function httpLoadShowsData(req, res) {
  return res.status(200).json(await loadShowsData());
}

module.exports = {
  httpLoadShowsData,
};
