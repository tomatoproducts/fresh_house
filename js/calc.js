<script>
    function calcStandart() {
    var square = document.getElementById("square-standart");
    var result = document.getElementById("result-standart");

    var price = 0;
    if (parseInt(square.value) <=60) {
      price +=2000;
    }
    if (parseInt(square.value) <70) {
      if (parseInt(square.value) >=60) {
        price +=2400;
      }
    }
    if (parseInt(square.value) <80) {
      if (parseInt(square.value) >=70) {
        price +=2800;
      }
    }
    if (parseInt(square.value) <90) {
      if (parseInt(square.value) >=80) {
        price +=3200;
      }
    }
    if (parseInt(square.value) <100) {
      if (parseInt(square.value) >=90) {
        price +=3600;
      }
    }

  result.innerHTML = price;
}

function calcGeneral() {
    var square = document.getElementById("square-general");
    var resultGeneral = document.getElementById("result-general");

    var price = 0;
    if (parseInt(square.value) <=60) {
      price +=2000;
    }
    if (parseInt(square.value) <70) {
      if (parseInt(square.value) >=60) {
        price +=2400;
      }
    }
    if (parseInt(square.value) <80) {
      if (parseInt(square.value) >=70) {
        price +=2800;
      }
    }
    if (parseInt(square.value) <90) {
      if (parseInt(square.value) >=80) {
        price +=3200;
      }
    }
    if (parseInt(square.value) <100) {
      if (parseInt(square.value) >=90) {
        price +=3600;
      }
    }

  resultGeneral.innerHTML = price;
}

function calcExpress() {
    var square = document.getElementById("square-express");
    var resultExpress = document.getElementById("result-express");

    var price = 0;
    if (parseInt(square.value) <=60) {
      price +=2000;
    }
    if (parseInt(square.value) <70) {
      if (parseInt(square.value) >=60) {
        price +=2400;
      }
    }
    if (parseInt(square.value) <80) {
      if (parseInt(square.value) >=70) {
        price +=2800;
      }
    }
    if (parseInt(square.value) <90) {
      if (parseInt(square.value) >=80) {
        price +=3200;
      }
    }
    if (parseInt(square.value) <100) {
      if (parseInt(square.value) >=90) {
        price +=3600;
      }
    }

  resultExpress.innerHTML = price;
}

function calcRemont() {
    var square = document.getElementById("square-remont");
    var resultRemont = document.getElementById("result-remont");

    var price = 0;
    if (parseInt(square.value) <=60) {
      price +=2000;
    }
    if (parseInt(square.value) <70) {
      if (parseInt(square.value) >=60) {
        price +=2400;
      }
    }
    if (parseInt(square.value) <80) {
      if (parseInt(square.value) >=70) {
        price +=2800;
      }
    }
    if (parseInt(square.value) <90) {
      if (parseInt(square.value) >=80) {
        price +=3200;
      }
    }
    if (parseInt(square.value) <100) {
      if (parseInt(square.value) >=90) {
        price +=3600;
      }
    }

  resultRemont.innerHTML = price;
}
</script>
