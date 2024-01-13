function hello (frase = "word") {

    if (typeof frase != "string") {
        frase = "word";
    }
}
return "Hello. " +  frase  + "!";