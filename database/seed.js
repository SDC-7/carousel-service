const fs = require('fs');
const argv = require('yargs').argv;

const entries = argv.entries;
const fileName = argv.output;
const stream = fs.createWriteStream(fileName);

let locationId = 0;

const createListing = () => {
  let imageUrls = '';

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
    // imageUrls += `"https://src-carousel.s3.us-east-2.amazonaws.com/image${imageId}.jpg", `;

    if (imageCount < numberOfPhotos -1) {
      imageUrls += `""https://src-carousel.s3.us-east-2.amazonaws.com/image${imageId}.jpeg"", `;
    } else {
      imageUrls += `""https://src-carousel.s3.us-east-2.amazonaws.com/image${imageId}.jpeg""`;
    }

    imageCount++;

    if (imageUrls.length === 30) {
      console.log('random photo selection error');
      break;
    }
  }

  locationId++;
  return `${locationId},"{${imageUrls}}"\n`;
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

stream.write('location_id,image_urls\n','utf-8');

writeListings(stream, 'utf-8', () => {
  stream.end;
})