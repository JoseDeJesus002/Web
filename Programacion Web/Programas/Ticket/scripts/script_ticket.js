

function total()
{
var precio = document.getElementById("Precio").value;
var cantidad = document.getElementById("Cantidad").value;
var precio2 = document.getElementById("Precio2").value;
var cantidad2 = document.getElementById("Cantidad2").value;
var precio3 = document.getElementById("Precio3").value;
var cantidad3 = document.getElementById("Cantidad3").value;
var precio4 = document.getElementById("Precio4").value;
var cantidad4 = document.getElementById("Cantidad4").value;
var precio5 = document.getElementById("Precio5").value;
var cantidad5 = document.getElementById("Cantidad5").value;
var precio6 = document.getElementById("Precio6").value;
var cantidad6 = document.getElementById("Cantidad6").value;
var precio7 = document.getElementById("Precio7").value;
var cantidad7 = document.getElementById("Cantidad7").value;
var precio8 = document.getElementById("Precio8").value;
var cantidad8 = document.getElementById("Cantidad8").value;
var precio9 = document.getElementById("Precio9").value;
var cantidad9 = document.getElementById("Cantidad9").value;
var precio10 = document.getElementById("Precio10").value;
var cantidad10 = document.getElementById("Cantidad10").value;
var iva = .16;

	let subtotal = (precio * parseInt(cantidad))+(precio2 * parseInt(cantidad2))+(precio3 * parseInt(cantidad3))+(precio4 * parseInt(cantidad4))+(precio5 * parseInt(cantidad5))+(precio6 * parseInt(cantidad6))+(precio7 * parseInt(cantidad7))+(precio8 * parseInt(cantidad8))+(precio9 * parseInt(cantidad9))+(precio10 * parseInt(cantidad10));

	document.getElementById("Subtotal").innerHTML = "El subtotal es: " + subtotal;
	document.getElementById("IVA").innerHTML = "El IVA es: " + iva;  	

	let sub = iva * subtotal;
	let total = sub + subtotal;
	document.getElementById("Total").innerHTML = "El Total es: " + total;
	}