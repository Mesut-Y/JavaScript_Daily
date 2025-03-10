const d = new Date();

console.log("getDate: ", d.getDate()); //1-31 Ayın günü
console.log("getDay: ", d.getDay()); //0-6 Haftanın günü

console.log("tarihin tamamı: ",d.toString()); //tarihin uzun versiyonu
console.log("getTime: ", d.getTime()); //tarihi number olarak döner
console.log("toLocaleDateString ", d.toLocaleDateString());
console.log("toLocalTimeString ", d.toLocaleTimeString());
console.log("getFullYear: ", d.getFullYear()); //
/*
getHours()          Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	    Returns the minutes (from 0-59)
getMonth()	        Returns the month (from 0-11)
getSeconds()	    Returns the seconds (from 0-59)
*/

/*
setDate()	    Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	    Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	    Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	    Sets a date to a specified number of milliseconds after/before January 1, 1970
*/