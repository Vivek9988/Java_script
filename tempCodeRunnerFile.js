function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess");
            if (getNextData) {
                getNextData();
            }

        }, 8000)
    })
}

getData(123);