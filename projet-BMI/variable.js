document.getElementById("btn").addEventListener("click", function () {
    let nbr1 = document.getElementById("input1").value;
    let nbr2 = document.getElementById("input2").value;
    let result = nbr1 / (nbr2 * nbr2);
    document.getElementById("result-nbr").innerHTML = result;
    let bmi = 'خطأ في الادخال ';
    if (nbr1 <= 0 || nbr2 <= 0) {
        bmi = `خطأ في الادخال `;
    }
    else if (result < 18) {
        bmi = `نحيف`;

    }
    else if (result < 24.9) {
        bmi =`وزن مثالي`;

    }
    else if (result < 29.9) {
        bmi = `وزن زائد`;

    }
    else if (result < 34.9) {
        bmi = `سمنة درجة أولى`;

    }
    else if (result < 34.9) {
        bmi = `سمنة درجة تانية`;

    }
    else  {
        bmi = `سمنة خطيرة `;

    }
    document.getElementById("result-ecri").innerHTML= bmi ;
})