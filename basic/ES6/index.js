import {PI, getCircumference, getArea, getVolume} from './mathUtils.js'

console.log(PI);
const circumFerence = getCircumference(10);
const area = getArea(10);
const volume  = getVolume(10);

console.log(`${circumFerence.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);