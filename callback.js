// Task6//

var i;
var j;
 
var getbiggest = function() {
	someArr = [2, 3, 5, 6, 9];
	var big = 0;

	for (i = 0; i < someArr.length; i++) {
		if (big < someArr[i]) {
			big = someArr[i];
		}
	}
	return big;
}

var getlowest = function() {
	someArr = [2, 3, 5, 6, 9];
	var low = someArr[0];

	for (i = 0; i < someArr.length; i++) {
		if (low > someArr[i]) {
			low = someArr[i];
		}
	}
	return low;
}

var result = function(biggest, lowest) {
	biggest();
	lowest();

	console.log(biggest() * lowest())
}

result(getbiggest, getlowest);

// Task7//


    var findUnqiue = function (arr){
     
    var order = [];
    var unique = [];
    
    var position = 0;
    var max = arr[0];
    var min = arr[0];
    var a = false;

    for (var e = 0; e<arr.length; e++){
        if(max<arr[e]){
            max=arr[e];
        }
    }

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if(arr[j]!=false){
                if(min>arr[j]){
                    min=arr[j];
                    position=j;
                }
            }
        }
        order[i] = min; 
        arr[position]=false;
        min=max;
    }
     
    for (var i=0; i<order.length; i++){
        if (order[i]!=order[i-1] && order[i]!=order[i+1]){
            unique[i]=order[i];
        }
    }

  console.log(unique);
  return unique;
}

    
    function deleteBiggest (arr) {

        var newArr = [];

        for(var i=0; i<arr.length; i++){
            newArr[i]=arr[i-1];
        }
        return newArr;
    }
    
    function finalProduct (arr, deleteBiggest){

        var a = findUnqiue(arr);
        var b = deleteBiggest(a);
        console.log(b);
    }

    finalProduct([15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64], deleteBiggest);
