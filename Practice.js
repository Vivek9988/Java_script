document.querySelector(".btn").addEventListener('click', () => {
    let vivek = parseInt(document.querySelector(".counter").innerHTML)
    document.querySelector(".counter").innerHTML = vivek + 1;
})


// const vivek= new Promise((resolve,reject)=>{
//        setTimeout(() => {
//            console.log("hello");
//            resolve()
//        }, 2000)
//    });


// async function hello(){
//     await vivek();
//     await vivek();


// }

// hello();

// console.log("hi")




