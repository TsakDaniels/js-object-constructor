function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

     this.getIfIsRead = function () {
        if (this.isRead == true) {
            return "is read";
        } 
        else {
            return "not read yet";
        }
    }


    this.info = function () {
        return this.title + this.author+ this.pages + this.getIfIsRead();
    }
}

const book1 = new Book("Pride and Prejudice,", "by Austen Jane,", "352 pages,", false)
const book2 = new Book("Lord of the Flies,", "by Golding William,", "304 pages,", true)
const book3 = new Book("The Art of War,", "by Tzu Sun,", "112 pages,", false)
const book4 = new Book("Macbeth,", "by William Shakespeare,", "128 pages,", true)


console.log(book1.info());
console.log(book2.info());
console.log(book3.info());
console.log(book4.info());

document.getElementById("book1").innerHTML = (book1.info());
document.getElementById("book2").innerHTML = (book2.info());
document.getElementById("book3").innerHTML = (book3.info());
document.getElementById("book4").innerHTML = (book4.info());





 
