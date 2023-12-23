let x;
let d= new Date();

x= d.toString();
x= d.getTime();
x= d.valueOf()
x= d.getFullYear()

x= d.getMonth()
x= d.getDate()
x=d.getDay()
x=d.getMinutes()

x=Intl.DateTimeFormat('en-UK').format(d)
x=d.toLocaleString('default',{month:'short'})

console.log(x)