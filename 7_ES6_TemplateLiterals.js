const func1 = (firstName, secondName) => {
    console.log("Eski Yöntem => İsim: " + firstName + " Soyisim: " + secondName);
    console.log(`Template Literal => İsim: ${firstName} Soyisim: ${secondName}`);
    console.log(`Template Literal2 => 
        İsim: ${firstName} 
        Soyisim: ${secondName}`);
}

console.log(func1("Tuna", "Tan"));


function getUserById(userId) {
    //fetch(`http://localhost:8080/users/${userId}`)
    console.log(`http://localhost:8080/users/${userId}`);
}

getUserById(42);