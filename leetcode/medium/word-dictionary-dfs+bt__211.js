
var WordDictionary = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
   let node = this.root;

   for(let ch of word){
     if(!node[ch])node[ch]={};
     node=node[ch]
   }

   node.isEnd=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(i,node){
        if(i === word.length){
            return node.isEnd === true;
        }

        const ch = word[i];

        if(ch !== '.'){
            if(!node[ch])return false;
            return dfs(i+1,node[ch])
        }

        for(let key in node){
            if(key !== 'isEnd' && dfs(i+1,node[key]))return true;
        }

        return false;
    }

    return dfs(0,this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */