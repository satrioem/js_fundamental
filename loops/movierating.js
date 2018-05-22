const moviedata = [
  {
    title: "Shrek 4",
    Duration: "1H 30M",
    Category: "Animation, Comdedy",
    Rating: 4
  },
  {
    title: "Blackpanther",
    Duration: "1H 35M",
    Category: "Action, Comdedy",
    Rating: 3
  },
  {
    title: "Avenger",
    Duration: "1H 90M",
    Category: "Animation, Action",
    Rating: 5
  }
];
moviedata.map((datafilm,index) => {
const dataresult = `${datafilm.title}`
let stars = "";
for (let a = 0; a < moviedata.Rating; a++) {
    stars+='*'
}
console.log(`${dataresult} ${stars}`)
});
