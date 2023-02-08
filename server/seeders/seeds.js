const db = require('../config/connection');
const { User, Appt, Services } = require('../models');
const serviceSeeds = require ('./serviceSeeds.json')

db.once('open', async () => {
  try {
    await Services.deleteMany({});
    
    await Services.create(serviceSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);

});

