const leapYears = function(year) {
    //divisible by 4 and 400 but not 100
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    } else if (year % 4 != 0) {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
