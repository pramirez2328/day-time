function day(){

  let par = document.getElementById('date');
  let d = new Date();

 // if (d.getHours() > 12) {
 //    var a = (d.getHours()- 12);
 //  return par.innerHTML = a;
 //  }
  return par.innerHTML = d;
}

 setInterval(day, 1000);
