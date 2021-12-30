class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []

    }

    get title() {
        return this._title
    }

    get isCheckedOut() {
        return this._isCheckedOut
    }

    get ratings() {
        return this._ratings
    }

    set isCheckedOut(check) {
        this._isCheckedOut = check
    }

    toggleCheckOutStatus(check) {
        if (check === false) {
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false
        }
    }

    getAverageRating() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue
        let averageRating = this._ratings.reduce(reducer) / this._ratings.length
        return averageRating
    }
    addRating(rating) {
        this._ratings.push(rating)
    }
}

class Book extends Media {

    constructor(author, title, pages) {
        super(title)
        this._author = author
        this._pages = pages
        this._isCheckedOut = false
        this._ratings = []
    }

    get author() {
        return this._name
    }

    get title() {
        return this._title
    }

    get pages() {
        return this._pages
    }

    get ratings() {
        return this._ratings
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = true;
    }

    addRating(rating) {
        this.ratings.push(rating)
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
historyOfEverything.getAverageRating()
console.log(historyOfEverything.getAverageRating())

class Movie extends Media {

    constructor(director, title, runtime) {
        super(title)
        this._director = director;
        this._runtime = runtime
        this._ratings = [];
        this._isCheckedOut = false
    }

    get director() {
        return this._director
    }

    get title() {
        return this._title
    }

    get runtime() {
        return this._runtime
    }

    get ratings() {
        return this._ratings
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = true;
    }

    getAverageRating(rating) {
        rating = Math.floor(Math.random() / 6);
        return this.ratings.push(rating)
    }

    addRating(rating) {
        this.ratings.push(rating)
    }
}

class Cds extends Media {
    constructor(artist, title) {
        super(title)
        this._artist = artist;
        this._ratings = [];
        this._songs = [title]
    }

    get artist() {
        return this._artist
    }

    get title() {
        return this._title
    }

    get ratings() {
        return this._ratings
    }

    get songs() {
        return this._songs
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = true;
    }

    getAverageRating(rating) {
        rating = Math.floor(Math.random() / 6);
        this.ratings.push(rating)
    }

    addRating(rating) {
        this.ratings.push(rating)
    }
}

const speed = new Movie('Jan de Bont', 'Speed', 116)

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())







