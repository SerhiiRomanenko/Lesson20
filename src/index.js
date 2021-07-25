//GENERAL REDUCTIONS
const ARRAY_LENGTH = 10;
const COMPARISON_NUMBER_1 = 9;
const COMPARISON_NUMBER_2 = 0.9;
const ROUND_TO_ONE = 1;
const DOES_NOT_EXIST = -1;

// MARKS
const ZERO = 0;
const NINE = 9;
const TEN = 10;

//BIRTH_YEARS
const BIRTH_YEAR_1991 = 1991;
const BIRTH_YEAR_1993 = 1993;
const BIRTH_YEAR_1996 = 1996;

// *************************  ESSENCE

const Student = function (name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;

    this.arrayWithVisits = new Array(ARRAY_LENGTH);
    this.arrayWithMarks = new Array(ARRAY_LENGTH);
};

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
};

// *************************  PROTOTYPE

Student.prototype.getAverageMark = function () {
    let sum = 0;
    for (const item of this.arrayWithMarks) {
        if (item !== undefined) {
            sum++;
        }
    }
    const total = this.arrayWithMarks.reduce((accumulator, currentValue) => accumulator + currentValue);
    return (total / sum).toFixed(ROUND_TO_ONE);
};

Student.prototype.present = function () {
    const indexOfEmptyElem = this.arrayWithVisits.findIndex(item => item === undefined);
    if (indexOfEmptyElem !== DOES_NOT_EXIST) {
        this.arrayWithVisits[indexOfEmptyElem] = true;
    }
    return this.arrayWithVisits;
};

Student.prototype.abscent = function () {
    const indexOfEmptyElem = this.arrayWithVisits.findIndex(item => item === undefined);
    if (indexOfEmptyElem !== DOES_NOT_EXIST) {
        this.arrayWithVisits[indexOfEmptyElem] = false;
    }
    return this.arrayWithVisits;
};

Student.prototype.mark = function (num) {
    const indexOfEmptyElem = this.arrayWithMarks.findIndex(item => item === undefined);
    if (num < ZERO || num > TEN || typeof num !== 'number') {
        throw new Error('you should put mark from 0 to 10');
    } else if (indexOfEmptyElem !== DOES_NOT_EXIST) {
        this.arrayWithMarks[indexOfEmptyElem] = num;
    }
    return this.arrayWithMarks;
};

Student.prototype.summary = function () {
    let visits = ZERO;
    let sum = 0;
    for (const item of this.arrayWithVisits) {
        if (item !== undefined) {
            sum++;
        }
    }
    this.arrayWithVisits.forEach(elem => {
        if (elem === true) {
            visits++;
        }
        return visits;
    });

    const averageVisits = visits / sum;
    if (this.getAverageMark() >= COMPARISON_NUMBER_1 && averageVisits >= COMPARISON_NUMBER_2) {
        return 'Ути какой молодчинка!';
    } else if (this.getAverageMark() < COMPARISON_NUMBER_1 && averageVisits < COMPARISON_NUMBER_2) {
        return 'Редиска!';
    } else {
        return 'Норм, но можно лучше';
    }
};

const ivan = new Student('Ivan', 'Andreev', BIRTH_YEAR_1991);
const oleh = new Student('Oleh', 'Borisov', BIRTH_YEAR_1993);
const petro = new Student('Petro', 'Alexeev', BIRTH_YEAR_1996);

oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.present();
oleh.abscent();
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(NINE);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(NINE);
oleh.mark(NINE);
oleh.mark(TEN); // не запишется
ivan.mark(NINE);
ivan.mark(NINE);
petro.mark(NINE);
// console.log('average mark of Oleh is: ', oleh.getAverageMark());
// console.log('summary: ', oleh.summary());
// console.log(oleh);
// console.log(ivan);
// console.log(ivan.getAge());
