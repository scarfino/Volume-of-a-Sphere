//calculate the volume of a sphere in cubic centimeters(default diameter 2x12)
const volumeOfSphere = diameter => (2/12) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
