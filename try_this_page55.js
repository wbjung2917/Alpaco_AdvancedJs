const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = () => {
  if (this.widx === undefined) {
    this.widx = -1;
  }
  this.widx += 1;
  if (this.widx >= weeks.length) this.widx = 0;
  return `${weeks[this.widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 10) clearInterval(intl);
}, 1000);
