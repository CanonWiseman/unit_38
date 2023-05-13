

function timeWord(timeString){

    let hours = timeString.substr(0, 2);
    let minutes = timeString.substr(3, 4);
    let timeOfDay;
    let minuteRetrun;
    let timeReturn;

    const hoursWords = {
        0: "twelve",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven"
    }

    const minutesWords = {
        "0": "oh",
        "00": "o'clock",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty"
    }

    if(hours == "00"){
        timeReturn = "midnight";
        return timeReturn;
    }
    else if(hours == "12" && minutes == "00"){
        timeReturn = "noon";
        return timeReturn;
    }

    hours = parseInt(hours);
    if(hours >= 12){
        timeOfDay = "pm";
        hours = hours - 12
    }
    else{
        timeOfDay = "am";
    }
    

    hours = hoursWords[Math.abs(hours)];

    if(parseInt(minutes) >= 20 || parseInt(minutes) < 10){
        if(parseInt(minutes[0]) + parseInt(minutes[1]) == parseInt(minutes[0])){
            minuteRetrun = minutesWords[minutes] 
        }
        else{
            let minutesTens = minutes[0] * 10;
            let minutesOnes = minutes[1];
            minuteRetrun = minutesWords[minutesTens] + " " + minutesWords[minutesOnes];
        }
    }
    else{
        minuteRetrun = minutesWords[minutes];
    }
    
    timeReturn = hours +" " + minuteRetrun + " " + timeOfDay;
    return timeReturn;
}

module.exports = timeWord;
