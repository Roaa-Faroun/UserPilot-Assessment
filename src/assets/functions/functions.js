let getPhoneNum = (number) => {
  let num = number
    .split("")
    .filter((el) => Number.isInteger(parseInt(el)))
    .join("");
  num = `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, 10)}`;

  return num;
};

const getDate = (d) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(d);
  let regDate = `${
    month[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return regDate;
};
const getTime = (d) => {
  const date = new Date(d);
  let time = date.getHours() <= 12 ? "AM" : "PM";
  let regTime = `${
    date.getHours() <= 12 ? date.getHours() : date.getHours() - 12
  }:${date.getMinutes()} ${time}`;
  return regTime;
};

export { getPhoneNum, getDate, getTime };
