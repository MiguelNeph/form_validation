const valueforA = document.getElementById('valueA');
const valueforB = document.getElementById('valueB');
const form = document.getElementById('form-deposit');

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (valueforB > valueforA) {

    alert("Número B é maior que Numero A");

} 

else{

    alert("Número B não é maior Numero A");

}
    }) 

