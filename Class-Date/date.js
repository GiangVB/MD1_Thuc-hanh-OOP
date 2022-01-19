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
    this.toString = function () {
        if (this.day < 10 && this.month < 10){
            return "0" + this.day + "/0" + this.month + "/" + this.year;
        }
        else {
            if (this.day >= 10 && this.month < 10){
                return this.day + "/0" +this.month + "/" + this.year;
            }
            else {
                if (this.day < 10 && this.month >= 10){
                    return "0" + this.day + "/" +this.month + "/" + this.year;
                }
                else {
                    return this.day + "/" +this.month + "/" + this.year;
                }
            }
        }
    };
};

let date = new MyDate(2, 2, 2007);

date.setDate(5,10,2020);

alert(date.toString());
