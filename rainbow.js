console.log("hello world")
let input = document.getElementById("my-input")
let element = document.getElementById("name")
console.log(element)
let angle = 0
let shouldrainbow = true
function onframe(){
    angle += 1
   let String = "hsl("+angle+"deg, 100%, 50%)"
   if(shouldrainbow){
    element.style.backgroundColor = String
   }
    requestAnimationFrame(onframe)
}
function startrainbow(){
    shouldrainbow = true
}
function onbuttonclick(event){
console.log(input.value)
shouldrainbow = false;
element.innerHTML = input.value
setTimeout(startrainbow, 1000)
}

