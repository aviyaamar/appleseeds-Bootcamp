var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];


    const libaryBool = (arr) =>{
        let readBook = arr.filter(book =>(book.readingStatus === true))
        return readBook;
    };

    console.log(libaryBool(library));