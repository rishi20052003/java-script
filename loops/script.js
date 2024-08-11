console.log("I am learning loops");
let i = 0;

// For loop
for (let i = 0; i <=10; i++) {
    console.log(i);
}

// For in loop

let obj = {
    name: "Rishi",
    Role: "developer"
}

for (const key in obj) {
           console.log(obj);
    }

    // For of loop

    for (const element of "Rishi") {
        console.log(element);
        
    }

    //While loop

    let a = 0;
    while (a<10) {
        console.log(a);
        a++;
    }

    // Do While loop
      let b = 0;
    do {
        console.log(b);
        b++;
    } while (b<5);