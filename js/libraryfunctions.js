function print(text){
    console.log(text);
}


function getSumProduct(num1, num2){
    var sum = num1 + num2;
    var product = num1 * num2;
    return sum + product;
}

function getDate(){
    var currentDate = new Date();
    return currentDate;
}

function sortArray(array){
    
    var sortedArray = array.sort(function(a, b){return a-b});
    return sortedArray;
}

function findMean(array){
    var array2 = (sortArray(array));
    var sum = 0
    for (var i = 0; i < array2.length; i++) {
        var sum = array2[i]+sum;
    }
    var results = sum/(array2.length);
    return results;
}

function findMedian(array){
    var array2 = (sortArray(array));
    var index = (array2.length/2);
    var index2 = Math.floor(index);
    var results = 0;
        if (array.length % 2 == 0){
            console.log(array2);
            console.log(index2);
             results = (array2[index2]+ array2[index2-1])/2;
             console.log('even');
        }else {
             results = array2[index2];
             console.log("odd");
        }
        
   return results;
    return array2[index2];
}

function findMode(){
    
}

module.exports = { // to name the functions and give it a tag to be called as a library from another script
    print,
    getSumProduct : getSumProduct,
    getDate: getDate,
    sortArray,
    findMean,
    findMedian
    
    
}
