const URL = "https://cat-fact.herokuapp.com/facts";

let promise =fetch (URL);
console.log(promise);
// const factPara = document.querySelector("#fact");



// const getFacts = async () => {
//     console.log("getting the data..");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();

//     factPara.innerText = data[2].text;

// }

//  getFacts();

