function toggle (...values) {
  let currIndex = 0;
  return function printCurrentWord () {
    console.log(values[currIndex % values.length]);
    currIndex++;
  };
}

const hello = toggle('hello');
const onOff = toggle('on', 'off');
const speed = toggle('slow', 'medium', 'fast');

hello(); // "hello"
hello(); // "hello"

onOff(); // "on"
onOff(); // "off"
onOff(); // "on"
onOff();

speed(); // "slow"
speed(); // "medium"
speed(); // "fast"
speed(); // "slow"
