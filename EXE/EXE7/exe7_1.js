const Book = {
    name : 'politic', 
    author: 'Amit Segal', 
    year : 2021, 
    publish: 'yediot book'
}

const printBook = (Book) =>
{
    return `the Book '${Book.name}' was written by ${Book.author} in the year ${Book.year}`
}

console.log(printBook(Book));