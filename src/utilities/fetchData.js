export const getNasaPhoto = async () => {
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
    const nasaData = await res.json();
    return nasaData;
  } catch (err) {
    console.error(err);
  }
}

export const getNasaPhotoFromDay = async date => {
  console.log('get date',date);
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);
    const nasaData = await res.json();
    return nasaData;
  } catch (err) {
    console.error(err);
  }
}