const fs = require('fs');
const argv = require('yargs').argv;

const entries = argv.entries;
const fileName = argv.output;;
const stream = fs.createWriteStream(fileName);

const createListing = () => {
  const imageUrls = [];

  const getRandomPhotoCount = () => {
    return Math.floor(Math.random() * (21) + 1);
  }

  const numberOfPhotos = getRandomPhotoCount();

  const selectRandomPhoto = () => {
    return Math.floor(Math.random() * (293) + 1);
  }

  let imageCount = 0;

  while (imageCount < numberOfPhotos) {
    const imageId = selectRandomPhoto();
    imageUrls.push(`"https://src-carousel.s3.us-east-2.amazonaws.com/image${imageId}.jpg"`);
    imageCount++;

    if (imageUrls.length === 30) {
      console.log('random photo selection error');
      break;
    }
  }

  return `${imageUrls}\n`;
}

const writeListings = (writeStream, encoding, done) => {
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

// stream.write('utf-8');

writeListings(stream, 'utf-8', () => {
  stream.end;
})