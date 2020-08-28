/*
FIELDS
Location id (auto increment)
Image URL (from s3)
Image order (auto increment for # of images per location id)
*/

const fs = require('fs')
const argv = require('yargs').argv

const lines = argv.lines || 1000000
const fileName = argv.output || 'data.csv'
const writeStream = fs.createWriteStream(fileName)

const createEntry = () => {
  const imageUrl = NULL;
  const imageOrder = NULL;

  return `${imageUrl},${imageOrder}\n`
}

const writeEntries = (createEntry, encoding, done) => {
  let i = entries;

  function writing() {
    let canWrite = true
    do {
      i--
      // check if i === 0 so we would write and call 'done'
      // else write and continue looping
    } while (i > 0 && canWrite) {
      if (i > 0 && !canWrite) {
        // our buffer for stream filled and need to wait for drain
        // write some more once it drains
        writeStream.once('drain', writing);
      }
    }
  }
  writing();
}