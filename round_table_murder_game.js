var num_ppl = prompt("enter the number of people you want to play in round table murder game");
num_ppl = validate_number(num_ppl);
var num_arr = [];
for(i=0; i < num_ppl; i++){
  num_arr[i] = i+1;
}
i=0;
while(num_arr.length !== 1){
  if(num_arr[i+1] === null || num_arr[i+1] == undefined || num_arr[i+1] == '' ){
    i = 0;
    num_arr[i] = '';
  }else{
    num_arr[i+1] = '';
    i = i+1;
  }

  num_arr = cleanArray(num_arr);
  if(num_arr[i] === null || num_arr[i] == undefined || num_arr[i] == ''){
    i=0;
  }
}
// console.log(num_arr);
var last_man_alive = num_arr[0];
alert('The last Man alive is the number '+last_man_alive);

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

function validate_number(input_num){
  while(isNaN(input_num) || input_num == '' || input_num % 1 !== 0){
    alert("Please enter a whole number");
    var input_num = parseFloat(prompt("enter a number"));
  }
  return input_num;
}
