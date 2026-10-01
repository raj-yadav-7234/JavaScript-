function add(...numbers) {
    let total = 0
    for(let number of numbers){
        total = total+number;
    }
    console.log(total);
}

add(10, 20, 30);
add(5, 10, 15, 20);