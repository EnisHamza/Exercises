const toDo = {
  id: 1,
  title: "BSc",
  people: ["Enis", "Albin", "Riad"],
  done: false,
};
console.log(toDo);
console.log(toDo.done);
console.log(toDo.people);
console.log(toDo.people[2]);
console.log(Object.keys(toDo));
console.log(Object.values(toDo));

//Complicated Data
const restaurant = [
  {
    name: "Viktoria",
    cuisine: "French",
    rating: 4,
    address: {
      first_line: "Lombard Street",
      second_line: "London",
      postcode: "40000",
      contact: [49687533, 43928456],
    },
  },
  {
    name: "Ujevara",
    cuisine: "Indian",
    rating: 5,
    address: {
      first_line: "Zhabar",
      second_line: "Mitrovica",
      postcode: "40000",
      contact: [49876543, 43675665],
    },
  },
];

//1. Get Ujevara cuisine
console.log(restaurant[1].cuisine);

//2. Get Viktoria postcode
console.log(restaurant[0].address.postcode);

//3. Get both restaurant names
restaurant.forEach((restaurants) => console.log(restaurants.name));

//4. Get Viktoria first line of their address
console.log(restaurant[0].address.first_line);

//5. Get Ujevara first line of their address
console.log(restaurant[1].address.first_line);

//6. Get Ujevara second contact number
console.log(restaurant[1].address.contact[1]);

//Timing Events
//setTimeout() && setInterval()
function alertMe() {
  console.log("beep beep");
}
//setTimeout(alerMe, 5000);
//setInterval(alertMe, 1000);

let timerId;
timerId = setInterval(alertMe, 1000);
function stopTimer() {
  clearInterval(timerId);
}
document.addEventListener("click", stopTimer);

//setTimeout Exercise
const titleElement = document.querySelector("h1");
function showTitle() {
  titleElement.innerText = "Boo";
}
setTimeout(showTitle, 1000);
//document.addEventListener("click", () => setTimeout(showTitle, 1000));
