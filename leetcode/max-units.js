var maximumUnits = function(boxTypes, truckSize) {
    // Sort box types by units per box in descending order
    boxTypes.sort((a, b) => b[1] - a[1]);
 
    let total = 0;
 
    for (let [boxes, unitsPerBox] of boxTypes) {
        const count = Math.min(truckSize, boxes); // take as many as you can
        total += count * unitsPerBox;
        truckSize -= count;
 
        if (truckSize === 0) break; // no space left
    }
 
    return total;
};