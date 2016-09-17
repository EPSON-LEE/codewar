//扩展 Array中的原生函数
Array.prototype.square = function(){
    return this.map(function(){ return n*n; });
}
Array.prototype.cube = function(){
    return this.map(function () {return n*n*n;});
}
Array.prototype.average = function(){
    return this.sum/this.length;
}
Array.prototype.sum = function(){
    return this.reduce(function(a,b){return a+b;});
}
Array.prototype.even = function(){
   return this.filter(function(a){ return 0 == a%2 });
}
Array.prototype.odd = function(){
    return this.filter(function(a){ 0 != a%2});
}

//实现 round ceil floor
Math.round = function(number) {
    var mod  = number%1 >= 0.5?1:0;
    return number = number-number%1+mod;
};
Math.ceil = function(number){
    var mod = number%1 > 0? 1:0;
    return number = number-number%1+mod;
}
Math.floor = function(number){
    var mod = number%1 > 0?0:1;
    return number = number-number%1+mod;
}

//找到一行数字最大的数字
function solution(digits) {
    var max = digits[0],max,max2;
    var array = [];
    var array2 = new Array();
    var array3 = [];

    for (var i = 1; i < digits.length-5; i++) {
        if (max <= digits[i]) {
            max = digits[i];
            array.push(i);
        }
    }

    for (var j = 0; j < array.length; j++) {
        array2[j] = new Array();
        for (var k = 0; k < 5; k++) {
            array2[j].push(digits[array[j]+k]);
        }
        console.log(array2);
    }

    for(var k = 0; k < array2.length; k++){
        array3.push(array2[k].join(""));
    }
    max2 = array3[0];
    for(var m = 0; m<array3.length; m++){
        if(array3[m] > max2){
            max2 = array3[m];
        }
    }
    console.log(max2)
    return max2;
}

//RGB to 十六进制
function rgb(r, g, b){
    // complete this function
    return toHex(r) + toHex(g) + toHex(b);
}
function toHex(N) {
    if (N==null) return "00";
    N=parseInt(N); if (N==0 || isNaN(N)) return "00";
    N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
    return "0123456789ABCDEF".charAt((N-N%16)/16) + "0123456789ABCDEF".charAt(N%16);
}

function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ((Number(d).toString(16))).slice(-2).toUpperCase()
}
console.log(rgb(16,139,255));

//pageIndex
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(this.pageCount() <= pageIndex || pageIndex < 0) {
        return -1;
    }
    if(pageIndex >= 0 && pageIndex < this.pageCount()-1){
        return this.itemsPerPage;
    }
    if(this.pageCount()-1 == pageIndex)
    {
        return this.collection.length%this.itemsPerPage;
    }

}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if(itemIndex < 0 || itemIndex > this.itemCount() || this.collection.length == 0){
        return -1;
    }else{
        if(itemIndex == 0){
            return 0;
        }
        return Math.ceil(itemIndex/this.itemsPerPage)-1;
    }
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1