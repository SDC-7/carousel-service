/*
FIELDS
Location id
Image URL (from s3)
Image order (auto increment for # of images per location id)
*/

const fs = require('fs');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const fileName = argv.output || 'listingImageData.csv';
const stream = fs.createWriteStream(fileName);

const createListing = () => {
  const locationId = NULL;
  const imageUrl = NULL;
  const imageOrder = NULL;

  return `${locationId},${imageUrl},${imageOrder}\n`;
}

const writeListings = (createListing, encoding, done) => {
  let i = entries;

  function writing() {
    let canWrite = true;
    do {
      i--;
      let listing = createListing();
      if (i === 0) {
        writeStream.write(listing, encoding, done);
      } else {
        writeStream.write(listing, encoding);
      }
    } while (i > 0 && canWrite) {
      if (i > 0 && !canWrite) {
        writeStream.once('drain', writing);
      }
    }
  }
  writing();
}

stream.write(`locationId, imageUrl, imageOrder\n`, 'utf-8');

writeListings(stream, 'utf-8', () => {
  stream.end;
})