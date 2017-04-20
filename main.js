var start = document.querySelector('#start')
 var stop = document.querySelector('.stop')
 var reset = document.querySelector('#reset')
 var hour = document.querySelector('#hour')
 var minute = document.querySelector('#minute')
 var second = document.querySelector('#second')
 
 start.addEventListener('click', function(){
 start.style.display='none'
 stop.style.display='block'
 console.log(typeof minute.value)
 console.log(minute.value)
 console.log(hour.value)
 var total=parseInt(hour.value,10)*3600+parseInt(minute.value,10)*60+parseInt(second.value,10)
console.log(total)
 var id = setInterval(function(){
  if(total <= 0){
      clearInterval(id)
      total=1
    }
    total -= 1
   function pad(input, length, padding)
{
  while((input = input.toString()).length + (padding = padding.toString()).length < length)
  {
    padding += padding;
  }
  return padding.substr(0, length - input.length) + input;
}
    hour1 = pad(Math.floor(total/3600),2,0)
    minute1 =pad(Math.floor((total%3600)/60),2,0)
    second1 = pad((total%3600)%60,2,0)   
    hour.value=hour1
    minute.value=minute1
    second.value=second1
    console.log(total)
    hour.readOnly='readonly'
    minute.readOnly='readonly'
    second.readOnly='readonly' 
   },1000)

  stop.addEventListener('click', function(){
  start.style.display='block'
  stop.style.display='none'
  hour.removeAttribute('readOnly')
  minute.removeAttribute('readOnly')
  second.removeAttribute('readOnly')
  clearInterval(id)
  })

 reset.addEventListener('click', function(){
  stop.style.display='none'
  start.style.display='block'
  clearInterval(id)
  hour.value='00'
  minute.value='00'
  second.value='00'
  hour.removeAttribute('readOnly')
  minute.removeAttribute('readOnly')
  second.removeAttribute('readOnly')
  })})
  

 var hourvalue = document.querySelector('#hour')
 var minute = document.querySelector('#minute')
 var secondvalue = document.querySelector('#second')