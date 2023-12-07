export const setCookie = (name, value, daysToLive) => {
  // Encode value in order to escape semicolons, commas, and whitespace
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

  if (daysToLive) {
    // Set the max-age attribute to number of days
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    cookie += `max-age=${date.toUTCString()};`;
  }

  document.cookie = cookie;
};

export const getCookie = name => {
  const cookieArr = document.cookie.split(';');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
};
