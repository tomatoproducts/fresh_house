  squareStand = document.getElementById("square-standart");
  squareGen = document.getElementById("square-general");
  squareEx = document.getElementById("square-express");
  squareRem = document.getElementById("square-remont");


var result = document.getElementById("result-standart");
var resultGeneral = document.getElementById("result-general");
var resultExpress = document.getElementById("result-express");
var resultRemont = document.getElementById("result-remont");
var furniture = document.getElementById("furniture");
var price = 0;
    function calcStandart() {


    var price = 0;

    if (parseInt(squareStand.value) <60) {
      price +=2000;
    }
    if (parseInt(squareStand.value) <70) {
      if (parseInt(squareStand.value) >=60) {
        price +=2400;
      }
    }
    if (parseInt(squareStand.value) <80) {
      if (parseInt(squareStand.value) >=70) {
        price +=2800;
      }
    }
    if (parseInt(squareStand.value) <90) {
      if (parseInt(squareStand.value) >=80) {
        price +=3200;
      }
    }
    if (parseInt(squareStand.value) <100) {
      if (parseInt(squareStand.value) >=90) {
        price +=3600;
      }
    }
    if (parseInt(squareStand.value) <110) {
      if (parseInt(squareStand.value) >=100) {
        price +=4000;
      }
    }
    if (parseInt(squareStand.value) >=110) {
      price = parseInt(squareStand.value) * 45;
    }

  result.innerHTML = price;
};
function calcGeneral() {
    var resultGeneral = document.getElementById("result-general");

    var price = 0;
    if (parseInt(squareGen.value) ==0) {
      price +=0;
    }
    if (parseInt(squareGen.value) <60) {
      price +=3500;
    }
    if (parseInt(squareGen.value) <70) {
      if (parseInt(squareGen.value) >=60) {
        price +=4200;
      }
    }
    if (parseInt(squareGen.value) <80) {
      if (parseInt(squareGen.value) >=70) {
        price +=4900;
      }
    }
    if (parseInt(squareGen.value) <90) {
      if (parseInt(squareGen.value) >=80) {
        price +=5600;
      }
    }
    if (parseInt(squareGen.value) <100) {
      if (parseInt(squareGen.value) >=90) {
        price +=6300;
      }
    }
    if (parseInt(squareGen.value) >=100) {
      price = parseInt(squareGen.value) * 75;
    }

  resultGeneral.innerHTML = price;
};
function calcExpress() {


    var price = 0;
    if (parseInt(squareEx.value) <60) {
      price +=1500;
    }
    if (parseInt(squareEx.value) <70) {
      if (parseInt(squareEx.value) >=60) {
        price +=1800;
      }
    }
    if (parseInt(squareEx.value) <80) {
      if (parseInt(squareEx.value) >=70) {
        price +=2100;
      }
    }
    if (parseInt(squareEx.value) <90) {
      if (parseInt(squareEx.value) >=80) {
        price +=2400;
      }
    }
    if (parseInt(squareEx.value) <100) {
      if (parseInt(squareEx.value) >=90) {
        price +=2700;
      }
    }
    if (parseInt(squareEx.value) <110) {
      if (parseInt(squareEx.value) >=100) {
        price +=3000;
      }
    }
    if (parseInt(squareEx.value) >=110) {
      price = parseInt(squareEx.value) * 35;
    }

  resultExpress.innerHTML = price;
};


function calcRemont() {

    var price = 0;

    if (parseInt(squareRem.value) <40) {
        price +=5300;

    }
    if (parseInt(squareRem.value) <50) {
      if (parseInt(squareRem.value) >=40) {
        price +=6250;
      }
    }
    if (parseInt(squareRem.value) <60) {
      if (parseInt(squareRem.value) >=50) {
        price +=7100;
      }
    }
    if (parseInt(squareRem.value) <70) {
      if (parseInt(squareRem.value) >=60) {
        price +=7500;
      }
    }
    if (parseInt(squareRem.value) <80) {
      if (parseInt(squareRem.value) >=70) {
        price +=7950;
      }
    }
    if (parseInt(squareRem.value) <90) {
      if (parseInt(squareRem.value) >=80) {
        price +=8250;
      }
    }
    if (parseInt(squareRem.value) <100) {
      if (parseInt(squareRem.value) >=90) {
        price +=8500;
      }
    }
    if (parseInt(squareRem.value) >=100) {
      price = parseInt(squareRem.value) * 85;
    }


  resultRemont.innerHTML = price;

};

// function nofurniture() {

//   price = resultRemont.innerHTML;
// var discount = price/100 * 20;
//   if(furniture.checked == true) {
//   resultRemont.innerHTML = price - discount;
//   }
// }

// Дополнительные услуги
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");
var result7 = document.getElementById("result7");
var result8 = document.getElementById("result8");
var result9 = document.getElementById("result9");
var result10 = document.getElementById("result10");
var result11 = document.getElementById("result11");
var result12 = document.getElementById("result12");
var result13 = document.getElementById("result13");
var result14 = document.getElementById("result14");
var result15 = document.getElementById("result15");

var value = 0;

var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;
var result5 = 0;
var result6 = 0;
var result7 = 0;
var result8 = 0;
var result9 = 0;
var result10 = 0;
var result11 = 0;
var result12 = 0;
var result13 = 0;
var result14 = 0;
var result15 = 0;

freezer.innerHTML =0;
oven.innerHTML =0;
microwave.innerHTML =0;
dishes.innerHTML =0;
balkon.innerHTML =0;
curtain.innerHTML =0;
blind.innerHTML =0;
mosquit.innerHTML =0;
wardrobe.innerHTML =0;
locker.innerHTML =0;
wash.innerHTML =0;
iron.innerHTML =0;
windows.innerHTML =0;
lamp.innerHTML =0;
addtime.innerHTML =0;


// первая строка
function countPlus1(){
  if (freezer.innerHTML <=5) {
    // result1.innerHTML = value;
    value = 400;
    freezer.innerHTML++;

    result1 = freezer.innerHTML*1 * value;
  }
}
function countMinus1(){
  // result1.innerHTML = value;
  value = 400;
  if (freezer.innerHTML >0) {
    freezer.innerHTML--;
  }
  result1 = freezer.innerHTML*1 * value;
}
function countPlus2(){
  if (oven.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 400;
    oven.innerHTML++;

    result2 = oven.innerHTML*1 * value;
  }
}
function countMinus2(){
  // result2.innerHTML = value;
  value = 400;
  if (oven.innerHTML >0) {
    oven.innerHTML--;
  }
  result2 = oven.innerHTML*1 * value;
}
function countPlus3(){
  if (microwave.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 400;
    microwave.innerHTML++;

    result3 = microwave.innerHTML*1 * value;
  }
}
function countMinus3(){
  // result2.innerHTML = value;
  value = 400;
  if (microwave.innerHTML >0) {
    microwave.innerHTML--;
  }
  result3 = microwave.innerHTML*1 * value;
}

var a =0;
var b =0;
function countPlus4(){
  if (dishes.innerHTML <=3) {
    // result2.innerHTML = value;
    value = 300;

    a +=30;
    b ++;
    dishes.innerHTML=a/60;

    // dishes.innerHTML++;

    result4= b*1 * value;
  }
}

function countMinus4(){
  // result2.innerHTML = value;
  value = 300;
  if (dishes.innerHTML >0) {
    a -=30;
    b --;
    dishes.innerHTML=a/60;
  }
  result4 = b*1 * value;
}

// ВТОРАЯ СТРОКА
function countPlus5(){
  if (balkon.innerHTML <=5) {
    // result1.innerHTML = value;
    value = 600;
    balkon.innerHTML++;

    result5 = balkon.innerHTML*1 * value;
  }
}
function countMinus5(){
  // result1.innerHTML = value;
  value = 600;
  if (balkon.innerHTML >0) {
    balkon.innerHTML--;
  }
  result5 = balkon.innerHTML*1 * value;
}
function countPlus6(){
  if (curtain.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 300;
    curtain.innerHTML++;

    result6 = curtain.innerHTML*1 * value;
  }
}
function countMinus6(){
  // result2.innerHTML = value;
  value = 300;
  if (curtain.innerHTML >0) {
    curtain.innerHTML--;
  }
  result6 = curtain.innerHTML*1 * value;
}
function countPlus7(){
  if (blind.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 100;
    blind.innerHTML++;

    result7 = blind.innerHTML*1 * value;
  }
}
function countMinus7(){
  // result2.innerHTML = value;
  value = 100;
  if (blind.innerHTML >0) {
    blind.innerHTML--;
  }
  result7 = blind.innerHTML*1 * value;
}
function countPlus8(){
  if (mosquit.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 70;
    mosquit.innerHTML++;

    result8 = mosquit.innerHTML*1 * value;
  }
}
function countMinus8(){
  // result2.innerHTML = value;
  value = 70;
  if (mosquit.innerHTML >0) {
    mosquit.innerHTML--;
  }
  result8 = mosquit.innerHTML*1 * value;
}

// ТРЕТЬЯ СТРОКА

function countPlus9(){
  if (wardrobe.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 300;
    wardrobe.innerHTML++;

    result9 = wardrobe.innerHTML*1 * value;
  }
}
function countMinus9(){
  // result2.innerHTML = value;
  value = 300;
  if (wardrobe.innerHTML >0) {
    wardrobe.innerHTML--;
  }
  result9 = wardrobe.innerHTML*1 * value;
}
function countPlus10(){
  if (locker.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 400;
    locker.innerHTML++;

    result10 = locker.innerHTML*1 * value;
  }
}
function countMinus10(){
  // result2.innerHTML = value;
  value = 400;
  if (locker.innerHTML >0) {
    locker.innerHTML--;
  }
  result10 = locker.innerHTML*1 * value;
}
function countPlus11(){
  if (wash.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 100;
    wash.innerHTML++;

    result11 = wash.innerHTML*1 * value;
  }
}
function countMinus11(){
  // result2.innerHTML = value;
  value = 100;
  if (wash.innerHTML >0) {
    wash.innerHTML--;
  }
  result11 = wash.innerHTML*1 * value;
}
a12 = 0;
b12 = 0;
function countPlus12(){
  if (iron.innerHTML <=3) {
    // result2.innerHTML = value;
    value = 300;
    a12 +=30;
    b12 ++;
    iron.innerHTML=a12/60;

    result12 = b12*1 * value;
  }
}
function countMinus12(){
  // result2.innerHTML = value;
  value = 300;
  if (iron.innerHTML >0) {
    a12 -=30;
    b12 --;
    iron.innerHTML=a12/60;
  }
  result12 = b12*1 * value;
}

// ЧЕТВЕРТАЯ СТРОКА

function countPlus13(){
  if (windows.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 450;
    windows.innerHTML++;

    result13 = windows.innerHTML*1 * value;
  }
}
function countMinus13(){
  // result2.innerHTML = value;
  value = 450;
  if (windows.innerHTML >0) {
    windows.innerHTML--;
  }
  result13 = windows.innerHTML*1 * value;
}
function countPlus14(){
  if (lamp.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 500;
    lamp.innerHTML++;

    result14 = lamp.innerHTML*1 * value;
  }
}
function countMinus14(){
  // result2.innerHTML = value;
  value = 500;
  if (lamp.innerHTML >0) {
    lamp.innerHTML--;
  }
  result14 = lamp.innerHTML*1 * value;
}
function countPlus15(){
  if (addtime.innerHTML <=5) {
    // result2.innerHTML = value;
    value = 600;
    addtime.innerHTML++;

    result15 = addtime.innerHTML*1 * value;
  }
}
function countMinus15(){
  // result2.innerHTML = value;
  value = 600;
  if (addtime.innerHTML >0) {
    addtime.innerHTML--;
  }
  result15 = addtime.innerHTML*1 * value;
}
var btn1 = document.getElementById("btns-01");
var btn2 = document.getElementById("btns-02");
var btn3 = document.getElementById("btns-03");
var btn4 = document.getElementById("btns-04");

function resultDopTotal() {
  var resultDopTotal = document.getElementById("resultDopTotal");
  resultDopTotal.innerHTML = parseInt(result1)*1 + parseInt(result2)*1 + parseInt(result3)*1 + parseInt(result4)*1 + parseInt(result5)*1 + parseInt(result6)*1 + parseInt(result7)*1 + parseInt(result8)*1 + parseInt(result9)*1 + parseInt(result10)*1 + parseInt(result11)*1 + parseInt(result12)*1 + parseInt(result13)*1 + parseInt(result14)*1 + parseInt(result15)*1;
  console.log(parseInt(freezer.innerHTML) + ' холодильник');
  console.log(parseInt(oven.innerHTML) + ' духовка');
  console.log(parseInt(microwave.innerHTML) + ' микроволновка');
}

function order() {
  var summa;
  if (btn1.checked == true) {
    summa =  btn1.value + ", площадь- " + parseInt(squareStand.value)+ " м2" + ", " + ("холодильник " + parseInt(freezer.innerHTML) + " шт") + ", " + ("духовка " + parseInt(oven.innerHTML) + " шт") + ", " + ("микроволновка " + parseInt(microwave.innerHTML) + " шт") + ", " + ("посуда " + parseInt(dishes.innerHTML) + " ч.") + ", " + ("балкон " + parseInt(balkon.innerHTML) + " шт") + ", " + ("шторы " + parseInt(curtain.innerHTML) + " шт") + ", " + ("жалюзи " + parseInt(blind.innerHTML) + " шт") + ", " + ("москит.сетка " + parseInt(mosquit.innerHTML) + " шт") + ", " + ("гардероб " + parseInt(wardrobe.innerHTML) + " шт") + ", " + ("кух.шкафы " + parseInt(locker.innerHTML) + " шт") + ", " + ("стирка " + parseInt(wash.innerHTML) + " шт") + ", " + ("глажка " + parseInt(iron.innerHTML) + " ч.") + ", " + ("окна " + parseInt(windows.innerHTML) + " шт") + ", " + ("люстры хрустал. " + parseInt(lamp.innerHTML) + " шт") + ", " + ("доп.время " + parseInt(addtime.innerHTML) + " ч.");
  }
  if (btn2.checked == true) {
    summa =  btn2.value + ", площадь- " + parseInt(squareGen.value)+ " м2" + ", " + ("холодильник " + parseInt(freezer.innerHTML) + " шт") + ", " + ("духовка " + parseInt(oven.innerHTML) + " шт") + ", " + ("микроволновка " + parseInt(microwave.innerHTML) + " шт") + ", " + ("посуда " + parseInt(dishes.innerHTML) + " ч.") + ", " + ("балкон " + parseInt(balkon.innerHTML) + " шт") + ", " + ("шторы " + parseInt(curtain.innerHTML) + " шт") + ", " + ("жалюзи " + parseInt(blind.innerHTML) + " шт") + ", " + ("москит.сетка " + parseInt(mosquit.innerHTML) + " шт") + ", " + ("гардероб " + parseInt(wardrobe.innerHTML) + " шт") + ", " + ("кух.шкафы " + parseInt(locker.innerHTML) + " шт") + ", " + ("стирка " + parseInt(wash.innerHTML) + " шт") + ", " + ("глажка " + parseInt(iron.innerHTML) + " ч.") + ", " + ("окна " + parseInt(windows.innerHTML) + " шт") + ", " + ("люстры хрустал. " + parseInt(lamp.innerHTML) + " шт") + ", " + ("доп.время " + parseInt(addtime.innerHTML) + " ч.");
  }
  if (btn3.checked == true) {
    summa =  btn3.value + ", площадь- " + parseInt(squareEx.value)+ " м2" + ", " + ("холодильник " + parseInt(freezer.innerHTML) + " шт") + ", " + ("духовка " + parseInt(oven.innerHTML) + " шт") + ", " + ("микроволновка " + parseInt(microwave.innerHTML) + " шт") + ", " + ("посуда " + parseInt(dishes.innerHTML) + " ч.") + ", " + ("балкон " + parseInt(balkon.innerHTML) + " шт") + ", " + ("шторы " + parseInt(curtain.innerHTML) + " шт") + ", " + ("жалюзи " + parseInt(blind.innerHTML) + " шт") + ", " + ("москит.сетка " + parseInt(mosquit.innerHTML) + " шт") + ", " + ("гардероб " + parseInt(wardrobe.innerHTML) + " шт") + ", " + ("кух.шкафы " + parseInt(locker.innerHTML) + " шт") + ", " + ("стирка " + parseInt(wash.innerHTML) + " шт") + ", " + ("глажка " + parseInt(iron.innerHTML) + " ч.") + ", " + ("окна " + parseInt(windows.innerHTML) + " шт") + ", " + ("люстры хрустал. " + parseInt(lamp.innerHTML) + " шт") + ", " + ("доп.время " + parseInt(addtime.innerHTML) + " ч.");
  }
  if (btn4.checked == true) {
    summa =  btn4.value + ", площадь- " + parseInt(squareRem.value)+ " м2" + ", " + ("холодильник " + parseInt(freezer.innerHTML) + " шт") + ", " + ("духовка " + parseInt(oven.innerHTML) + " шт") + ", " + ("микроволновка " + parseInt(microwave.innerHTML) + " шт") + ", " + ("посуда " + parseInt(dishes.innerHTML) + " ч.") + ", " + ("балкон " + parseInt(balkon.innerHTML) + " шт") + ", " + ("шторы " + parseInt(curtain.innerHTML) + " шт") + ", " + ("жалюзи " + parseInt(blind.innerHTML) + " шт") + ", " + ("москит.сетка " + parseInt(mosquit.innerHTML) + " шт") + ", " + ("гардероб " + parseInt(wardrobe.innerHTML) + " шт") + ", " + ("кух.шкафы " + parseInt(locker.innerHTML) + " шт") + ", " + ("стирка " + parseInt(wash.innerHTML) + " шт") + ", " + ("глажка " + parseInt(iron.innerHTML) + " ч.") + ", " + ("окна " + parseInt(windows.innerHTML) + " шт") + ", " + ("люстры хрустал. " + parseInt(lamp.innerHTML) + " шт") + ", " + ("доп.время " + parseInt(addtime.innerHTML) + " ч.");
  }


  document.getElementById('summa').innerHTML = summa;
}


function resultTotal() {
  var resultDopTotal = document.getElementById("resultDopTotal");
  resultDopTotal.innerHTML = parseInt(result1)*1 + parseInt(result2)*1 + parseInt(result3)*1 + parseInt(result4)*1 + parseInt(result5)*1 + parseInt(result6)*1 + parseInt(result7)*1 + parseInt(result8)*1 + parseInt(result9)*1 + parseInt(result10)*1 + parseInt(result11)*1 + parseInt(result12)*1 + parseInt(result13)*1 + parseInt(result14)*1 + parseInt(result15)*1;

  var resultTotal = document.getElementById("resultTotal");

  // resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(result.innerHTML);
  if(btn1.checked == true) {
    resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(result.innerHTML);
  }

  if(btn2.checked == true) {
    resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultGeneral.innerHTML);
  }
  if(btn3.checked == true) {
    resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultExpress.innerHTML);
  }
  if(btn4.checked == true) {
    resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultRemont.innerHTML);
  }
}

resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultGeneral.innerHTML);
resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultExpress.innerHTML);
resultTotal.innerHTML = parseInt(resultDopTotal.innerHTML) + parseInt(resultRemont.innerHTML);

plus1.addEventListener("click", countPlus1);
minus1.addEventListener("click", countMinus1);
plus2.addEventListener("click", countPlus2);
minus2.addEventListener("click", countMinus2);
plus3.addEventListener("click", countPlus3);
minus3.addEventListener("click", countMinus3);
plus4.addEventListener("click", countPlus4);
minus4.addEventListener("click", countMinus4);

plus5.addEventListener("click", countPlus5);
minus5.addEventListener("click", countMinus5);
plus6.addEventListener("click", countPlus6);
minus6.addEventListener("click", countMinus6);
plus7.addEventListener("click", countPlus7);
minus7.addEventListener("click", countMinus7);
plus8.addEventListener("click", countPlus8);
minus8.addEventListener("click", countMinus8);

plus9.addEventListener("click", countPlus9);
minus9.addEventListener("click", countMinus9);
plus10.addEventListener("click", countPlus10);
minus10.addEventListener("click", countMinus10);
plus11.addEventListener("click", countPlus11);
minus11.addEventListener("click", countMinus11);
plus12.addEventListener("click", countPlus12);
minus12.addEventListener("click", countMinus12);

plus13.addEventListener("click", countPlus13);
minus13.addEventListener("click", countMinus13);
plus14.addEventListener("click", countPlus14);
minus14.addEventListener("click", countMinus14);
plus15.addEventListener("click", countPlus15);
minus15.addEventListener("click", countMinus15);
resultTotalBtn.addEventListener("click", resultTotal);
resultTotalBtn.addEventListener("click", order);
