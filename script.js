function updatedTime() {
  const nowTime = new Date();
  let getH =
    nowTime.getHours() < 10 ? "0" + nowTime.getHours() : nowTime.getHours();
  let getM =
    nowTime.getMinutes() < 10 ? "0" + nowTime.getMinutes : nowTime.getMinutes();
  let getS =
    nowTime.getSeconds() < 10
      ? "0" + nowTime.getSeconds()
      : nowTime.getSeconds();
  let AmPM = getH >= 12 ? "PM" : "AM";
  // let getH12 = getH > 12 ? getH - 12 : getH;
  if(nowTime.getHours() > 12){
    getH = nowTime.setHours() -12;
  }else if(nowTime.getHours() === 0){ //this is night 12 Am
    getH =  12
  }else{
    getH = nowTime.setHours()
  }
  console.log(getH);
  document.getElementById("H").innerHTML = getH;
  document.getElementById("M").innerHTML = getM;
  document.getElementById("S").innerHTML = `${getS}. ${AmPM}`;
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let nowDate = nowTime.getDate();
  let dayMonthDate =
    dayName[nowTime.getDay()] +
    ", " +
    monthName[nowTime.getMonth()] +
    ", " +
    nowDate;
    document.getElementById("date").innerHTML = dayMonthDate;
}

setInterval(updatedTime, 1000);
