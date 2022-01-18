let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day  = day;
    }
    this.setMonth = function (month) {
        this.month  = month;
    }
    this.setYear = function (year) {
        this.year  = year;
    }
    this.setDate = function (day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toStr = function () {
        let date = [this.day,this.month,this.year];
        return date.toString()
    };
};

let date = new MyDate(2, 2, 2007);

date.setDate(10,10,2020);

let day = date.getDay();

let month = date.getMonth()

let year = date.getYear();

alert(day + "/" + month + "/" + year);
