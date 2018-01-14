<script>
function count() {
var square = document.getElementById('square').value;
var price;
var result;

  if(square <= 40 && square <= 50){
    price == 2000;
    document.getElementById('result').innerHTML = price;
    console.log(price);
}
}

var btn = document.querySelector(".calc__btn");
btn.addEventListener("click",count());


//  var square = document.getElementById('square').value;
//  var price;
//  var result;

// if(square <= 40 && square <= 50){
//     price == 2000;
//     document.getElementById('result').innerHTML = price;
//     console.log(price);
// }
// if(square >=60 && square <=70){
//     price == 2400;
//     document.getElementById('result').innerHTML = price;
//     console.log(price);
// }

</script>
