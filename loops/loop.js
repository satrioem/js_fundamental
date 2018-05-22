//Iteration of looping
/*
const cars = ["toyota", "Mitsubishi", "Honda"];

//MAP
cars.map((datamobil, manuq) => {
  const nama = "yogie";
  const datahasil = datamobil + "is" + nama;
  const dataresul = `${datamobil} is ${nama}'s car`;
  console.log(datahasil);
  console.log(dataresul);
});

//FOR
for (let a = 0; a < 6; a++) {
  console.log(`${cars[a]} is a great car`);
}
*/
const info = [
  {
    Brand: "Suzuki",
    Type: "Ertiga",
    Year: 2017,
    Category: "MPV"
  },
  {
    Brand: "Mitsubishi",
    Type: "Mirage",
    Year: 2015,
    Category: "Hatchback"
  },
  {
    Brand: "Honda",
    Type: "Jazz",
    Year: 2016,
    Category: "Hatchback"
  },
  {
    Brand: "Land Rover",
    Type: "Range Rover",
    Year: 2017,
    Category: "SUV"
  }
];

//FOR
for (let a = 0; a < info.length; a++) {
  console.log(`${info[a].Category}`);
}
/*

//MAP
info.map((datavehicle, manuq) => {
  const dataresult = `${datavehicle.Category}`;
  console.log(dataresult);
});
*/
