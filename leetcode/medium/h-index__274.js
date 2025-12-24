/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);


    for(let i=0;i<citations.length;i++){
        const paperWithAtleastThisManyCitations=citations.length-i;
        if(citations[i]>=paperWithAtleastThisManyCitations)return paperWithAtleastThisManyCitations
    }

    return 0;
};