// -- JavaScript Problems Potourri

// --setAlarm

//Write a function named setAlarm
function setAlarm(employed, vacationing) { //2 arguments employed and vacationing
    if(employed && !vacationing){; //employed && !vacationing return true. we need to set an alarm
        return true;
    }else { //else false, we do not need to set an alarm
        return false;
    }
}


console.log(setAlarm(true, true)) // will return false. both employed and vacationing are true
console.log(setAlarm(false, false)) // will return false. not employed so no alarm is needed
console.log(setAlarm(false, true)) // will return false. not employed so no alarm is needed AND vactioning
console.log(setAlarm(true, false)) // will return true. employed and not vacationing