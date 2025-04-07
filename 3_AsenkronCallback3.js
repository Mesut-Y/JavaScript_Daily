//http istekleri  timeout ile http istekleri simüle edilmiştir.

const users = [
    { userId : 5, post : "A Post 1" },
    { userId : 5, post : "A Post 2" },
    { userId : 5, post : "A Post 3" },
    { userId : 6, post : "B Post 1" },
    { userId : 7, post : "C Post 1" }
];

function getUserId(callback){
    setTimeout(() => {
        //Servisten cevap alınması simüle edildi.
        //return 5;
        let id = 5;
        callback(id);
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId);  //getUserId metodu 1000ms işlemini tamamlamadı.
    //Restapi isteği simüle edildi.
    setTimeout((user) => {
        users.forEach((user) => {
            if(user.userId === userId){
                console.log(user.post);
            }
        });
    }, 500);
}

// let userId = getUserId(); //1000 ms
// getPostByUserId(userId); //500 ms

getUserId((getPostByUserId));
