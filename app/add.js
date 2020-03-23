
exports.addTogether = function(myArr){
    //(typeof myArr !== 'number')
     if(Array.isArray(myArr) === false || isNaN(myArr)) {
        return 'Numbers must be an array of numbers'; 
         }else{
            return myArr.reduce((sum, value) => {
                return sum + value;
            })
         }
}
