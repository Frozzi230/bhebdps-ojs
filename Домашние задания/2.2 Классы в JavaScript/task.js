class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    fix() {
        this.state = this.state + 25; 
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }

    findBookBy(property, value) {
        const foundBook = this.books.find(book => book[property] === value);
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        
        if (index !== -1) {
            const bookToGive = this.books.splice(index, 1)[0];
            return bookToGive;
        }
        
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }
        
        const subjectMarks = this.marks[subject];
        const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
        return sum / subjectMarks.length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }

        let totalSum = 0;
        let totalCount = 0;
        for (let subject of subjects) {
            const marks = this.marks[subject];
            totalSum += marks.reduce((acc, mark) => acc + mark, 0);
            totalCount += marks.length;
        }

        return totalSum / totalCount;
    }
}