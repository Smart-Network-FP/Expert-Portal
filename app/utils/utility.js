export const GENERATE_RANDOM_ID = () => {
  const [, id] = Math.random()
    .toString()
    .split('.');

  return id;
};

// Wed Apr 05 2023 11:07:34 GMT+0100 (West Africa Standard Time)
export const GET_DATE = (d, current = false) => {
  if (current === true) {
    const today = new Date().toString().split(' ');
    const [, month, , year] = today;
    return `${month}, ${year}`;
  }
  const date = d.toString().split(' ');
  const [, month, , year] = date;
  return `${month}, ${year}`;
};
