//  1- call back 

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("hello brother", dataId);
        if(getNextData){
            getNextData();
        }

},2000)
}
getData(1,()=>{
    getData(2, () => {
        getData(3, () => {
getData(4);
        })

    });
});

//console.log("vidhi");

//promise

// let promise=  new Promise ((resolve,reject)=>{
//     console.log("i am a promise");
//     reject("success");

// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");
//             if (getNextData) {
//                 getNextData();
                
//             }

            


//         }, 8000)
//     })
// }

// getData(123);

// const getPromise= ()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("sucess")

//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("pyar kiya to nibhana")
// })


//promsie chain
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("i ");
//             resolve("success")
//         }, 2000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("love");
//             resolve("success")
//         }, 2000)
//     });
// }

// function asyncFunc3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("you ");
//             resolve("success")
//         }, 2000)
//     });
// }

// console.log("featching data1...");
// asyncFunc1().then(()=>{
//     console.log("featcing data 2....");
//     let p2=asyncFunc2();
//     p2.then(()=>{
//         console.log("featcing data 3....");

//         let p3=asyncFunc3();
//         p3.then(()=>{

//         })

//     })
// })


// function hello(){
//     console.log("hello ")
// }