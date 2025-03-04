// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
 const headquarters = 42;
 return Math.abs(distance - headquarters);
}

function  distanceFromHqInFeet(Feet) {
  const blocksInFeet = 264;
  return distanceFromHqInBlocks(Feet) * blocksInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; // Each block is 264 feet long
    return Math.abs(endBlock - startBlock) * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distance = Math.abs(endBlock - startBlock) * feetPerBlock;

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}
