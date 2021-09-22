function testSum(){
    var expected = 7
    var actual = sum(5, 2)

    if (actual != expected) {
        console.log("It's broken..")
    } else {
        console.log("It works!")
    }
}

function sum(num1, num2) {
    return num1 + num2;
}