function Ej1(params) {
  alert("Para ver el ejercicio funcionando presiona F12 y ve a consola.")
  let arr = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]
  for (let index = 0; index < arr.length; index++) {
    console.group(arr[index]);
    console.groupEnd;
  }
}
let Ej2 = () => {
  let arr = [];
  let stopFor = false;
  for (let index = 0; stopFor == false; index++) {
    let txt = prompt("Ingresa nombres de ciudades. para terminar pulse cancelar o ingresa 0.")
    if (txt == null || txt == 0) {
      stopFor = true;
      document.write(`♦♦♦♦♦La longitud de tu Array es ${arr.length}.<br>`)
      document.write(`♦♦♦♦♦Estado actual del array: ${arr.join(" - ")} <br>`)
      document.write(`♦♦♦♦♦Imprimiendo el primer item: ${arr[0]} <br>`)
      document.write(`♦♦♦♦♦Imprimiendo el tercer item: ${arr[2]} <br>`)
      document.write(`♦♦♦♦♦Imprimiendo el ultimo item: ${arr[arr.length - 1]} <br>`)
      arr.push("París")
      document.write(`♦♦♦♦♦Estado actual del array: ${arr.join(" - ")} <br>`)
      document.write(`♦♦♦♦♦Imprimiendo el segundo item: ${arr[1]} <br>`)
      arr.slice(1,1,"Barcelona")
      document.write(`♦♦♦♦♦Estado actual del array: ${arr.join(" - ")}<br>`)
      
    } else {
      arr.push(txt)
    }
    console.log(arr)
  }
}
let Ej3 = () => {
  let diceShots1 = []
  let diceShots2 = []
  let getRandom = () => {
    return Math.round(Math.random() * 6);
  } 
  for (let index = 0; index <= 50; index++) {
    diceShots1.push(getRandom())
    diceShots2.push(getRandom())
  }
  document.write(`Resultados del dado numero 1: ${diceShots1.join("♠")} <br>`)
  document.write(`Resultados del dado numero 2: ${diceShots2.join("♦")}<br>`)
  document.write(" Parece que hay menos caracteres en el dado numero 2, se debe al caracter separador. en consola dejo impreso los arrays.")
  console.log(diceShots1,diceShots2)
}
let Ej4 = () => {
  let numb = parseInt(prompt("Ingresa un numero y averigua si es par o impar."))
  if (!isNaN(numb)) {
    if (numb %2 == 0) {
      alert(`El numero ${numb} es par.`)
    } else {
      alert(`El numero ${numb} es impar.`)
    }
  } else {
    alert("Solo puedes ingresar numeros.")
  }
}
let Ej5 = () => {
  let txt = prompt("Ingresa una cadena de texto.");
  let arr = txt;
  let mys = 0;
  let min = 0;
  let letter ;
  for (let i = 0; i < arr.length; i++) {
    letter = arr.charAt(i)
    if (letter == letter.toUpperCase()) {
      mys++
    } else if (letter == letter.toLowerCase()) {
      min++
    }
  }
  console.log(min)
  console.log(mys)
  alert(`El texto ingresado tiene ${mys} mayúsculas y ${min} minùsculas.`)
  
}
let Ej6 = (lado) => {
  let sideA = parseInt(document.getElementById("imp6").value);
  let sideB = parseInt(document.getElementById("imp6b").value);
  if (sideA !== sideB && !isNaN(sideA) && !isNaN(sideB)) {
    let perimeter = 2*(sideA + sideB)
    alert(`El perimetro del rectangulo es de: ${perimeter} CM.`)
  } else {
    alert("No puedes ingresar dos medidas iguales. eso seria un cuadrado. Tampoco ingresar letras.")
  }
}
let Ej7 = () => {
  let imput = parseInt(document.getElementById("imp7").value);
  if (imput <= 10 && imput !== Number) {
    for (let i = 0; i < 10; i++) {
      document.write(`${imput} x ${[i +1]} =  `)
      document.write(`${imput*(i+1)}<br>`);
    }
  } else {
    alert("Solo puedes ingresar un numero del 1 al 10. Tampoco puede ingresar letras.")
  }
}