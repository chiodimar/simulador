const gramosIngresados = document.getElementById("gramos-ingresados");
const precioCosto = document.getElementById("precioCosto");
const precioFinal = document.getElementById("precioFinal");
const precioMayor = document.getElementById("precioMayor");
const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", calcular);

function calcular(e){
    e.preventDefault();
    const valor = parseInt(gramosIngresados.value);
    let calcularCosto = valor * 1.4;
    let calcularMayor = valor * 4.8;
    let calcularFinal = valor * 8;

    precioCosto.innerHTML = `$ ${calcularCosto}`
    precioMayor.innerHTML = `$ ${calcularMayor}`
    precioFinal.innerHTML = `$ ${calcularFinal}`
    
}  



/* const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcularTodo);
function calcularTodo(e){
    e.preventDefault();
    
} */