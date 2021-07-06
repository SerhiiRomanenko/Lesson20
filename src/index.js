//GENERAL REDUCTIONS
const ARRAY_LENGTH = 10;
const COMPARISON_NUMBER_1 = 9;
const COMPARISON_NUMBER_2 = 0.9;
const ROUND_TO_ONE = 1;
const DOES_NOT_EXIST = -1;

// MARKS
const ZERO = 0;
const SEVEN = 7;
const NINE = 9;
const TEN = 10;

//BIRTH_YEARS
const BIRTH_YEAR_1991 = 1991;
const BIRTH_YEAR_1993 = 1993;
const BIRTH_YEAR_1996 = 1996;

//DESICION
const Student = function (name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;

    this.getAge = function () {
        return new Date().getFullYear() - birthYear;
    };

    this.arrayWithVisits = [];
    this.arrayWithVisits.length = ARRAY_LENGTH;
    this.arrayWithMarks = [];
    this.arrayWithMarks.length = ARRAY_LENGTH;

    this.getAverageMark = function () {
        let total;
        try {
            total = this.arrayWithMarks.reduce((accumulator, currentValue) => accumulator + currentValue);
        } catch (error) {
            throw new Error('too few marks');
        }
        return (total / this.arrayWithMarks.length).toFixed(ROUND_TO_ONE);
    };

    this.present = function () {
        const indexOfEmptyElem = this.arrayWithVisits.findIndex(item => item === undefined);
        if (indexOfEmptyElem !== DOES_NOT_EXIST) {
            this.arrayWithVisits[indexOfEmptyElem] = true;
        } else if (indexOfEmptyElem === DOES_NOT_EXIST) {
            throw new Error('no more than 10');
        }
        return this.arrayWithVisits;
    };

    this.abscent = function () {
        const indexOfEmptyElem = this.arrayWithVisits.findIndex(item => item === undefined);
        if (indexOfEmptyElem !== DOES_NOT_EXIST) {
            this.arrayWithVisits[indexOfEmptyElem] = false;
        } else if (indexOfEmptyElem === DOES_NOT_EXIST) {
            throw new Error('no more than 10');
        }
        return this.arrayWithVisits;
    };

    this.mark = function (num) {
        const indexOfEmptyElem = this.arrayWithMarks.findIndex(item => item === undefined);
        if (num < ZERO || num > TEN || typeof num !== 'number') {
            throw new Error('you should put mark from 0 to 10');
        } else if (indexOfEmptyElem !== DOES_NOT_EXIST) {
            this.arrayWithMarks[indexOfEmptyElem] = num;
        } else if (indexOfEmptyElem === DOES_NOT_EXIST) {
            throw new Error('no more than 10');
        }
        return this.arrayWithMarks;
    };

    this.summary = function () {
        let visits = ZERO;
        this.arrayWithVisits.forEach(elem => {
            if (elem === true) {
                visits++;
            }
            return visits;
        });
        const averageVisits = visits / this.arrayWithVisits.length;
        if (this.getAverageMark() >= COMPARISON_NUMBER_1 && averageVisits >= COMPARISON_NUMBER_2) {
            return 'Ути какой молодчинка!';
        } else if (this.getAverageMark() < COMPARISON_NUMBER_1 && averageVisits < COMPARISON_NUMBER_2) {
            return 'Редиска!';
        } else {
            return 'Норм, но можно лучше';
        }
    };
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
oleh.mark(SEVEN);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(TEN);
oleh.mark(NINE);
ivan.mark(NINE);
petro.mark(NINE);
// console.log('average mark of Oleh is: ', oleh.getAverageMark());
// console.log('summary: ', oleh.summary());
// console.log(oleh);
// console.log(ivan);
// console.log(ivan.getAge());
