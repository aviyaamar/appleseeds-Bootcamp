let book = {
    name: 'politic',
    author: 'Amit segal',
    location: 'Tel-Aviv',
}

 swapKeyValue = (book)=>{
    let newBook = {};
    for(key in book)
        newBook[book[key]] = key;

    return newBook;
}

console.log(swapKeyValue(book));