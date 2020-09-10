CREATE DATABASE carousel;

\c carousel;

DROP TABLE IF EXISTS images;

CREATE TABLE images (location_id integer NOT NULL, image_urls text []);

CREATE UNIQUE INDEX location_index ON images (location_id);

// COPY images (location_id, image_urls) FROM '/Users/meredithmyers/Desktop/hackreactor/carousel-service/server/testListingImageData.csv' CSV HEADER DELIMITER ',';
COPY images (location_id, image_urls) FROM 'server/listingImageData.csv' CSV HEADER DELIMITER ',';