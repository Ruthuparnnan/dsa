var countGoodRectangles = function(rectangles) {
    let maxLength =0;
    let count =0;

    for(let [l,w] of rectangles){
        const squareSide = Math.min(l,w);

        if(squareSide > maxLength){
            count =1;
            maxLength = squareSide;
        }else if(squareSide === maxLength){
            count++
        }
    }

    return count;
};