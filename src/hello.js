frase = ""

function hello (frase = "World") {

    if (typeof frase != "string") {
        frase = "World";
    }

    return "Hello, " +  frase  + "!";
}


console.log(hello());