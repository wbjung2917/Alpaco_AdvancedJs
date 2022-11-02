const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = () => {
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
};

let cnt = 0;
const nextWeek = getNextWeek();
const intl = setInterval(() => {
  console.log("call", cnt, nextWeek());
  if ((cnt += 1) === 10) clearInterval(intl);
}, 1000);
