let book1 = {
    name: 'bla bla', 
    author:'Amit Segal', 
    year:2021
};

let book2 ={
    name:'the life', 
    author:'hanoch daom', 
    year:2020
};

let bookUtils = {
     getFirstPublished (book1, book2){
      return  book1.year < book2.year ? book1: book2;

    },
    setNewEdition(book, edition){
        book.lastEdition = edition;
    }, 
    setLanguage(book, language){
        book.language = language;
    }, 
    setTranslation(book, language, translator){
        book.translet = {language: language, transletion:translator};

    }, 
    setPublisher(book, name, location){
        book.namedPublicer = {name: name, location:location};
    },
    isSamePublisher(book1, book2)
    {
        if(book1.namedPublicer.name === book2.namedPublicer.name&&
            book1.namedPublicer.location===book2.namedPublicer.location){
                return true;

            }
            else{
                return false;
            }
    }
    
};



console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils.setNewEdition(book1, 2023));
console.log(book1);
console.log(bookUtils.setLanguage(book1, 'hebrow'));
console.log(book1);
console.log(bookUtils.setTranslation(book1, 'hebrow', 'english'));
console.log(book1);
console.log(bookUtils.setPublisher(book1, 'amit segal', 'Tel-Aviv'));
console.log(book1);