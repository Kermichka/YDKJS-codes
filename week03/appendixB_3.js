function toggle(...values) {
    let currIndex = 0;
    return function printCurrentWord(){
        if(currIndex===values.length){
            currIndex =0;
        }
        console.log(values[currIndex]);
        currIndex++;
    }   
    
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");
hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
