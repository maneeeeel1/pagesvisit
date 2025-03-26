const contador = document.getElementById("contadorVisitas");
const reset = document.getElementById("btnReestablecer");


//cada vez que se recarga la pagina, ++ en contador.
//hay que hacer que el contador se mantenga siempre = localstorage.
//hay que hacer addEventListener("click") =>{ vuelve a 0}.

function pagina() {
    let visitas =localStorage.getItem("contador");
    if(!visitas){
        visitas=0;
    }else{
        visitas=parseFloat(visitas)
    }

    visitas++;
    localStorage.setItem("contador", visitas);

    contador.textContent=visitas;

    reset.addEventListener("click", () => {
        localStorage.setItem("contador", 0)
        contador.textContent=0;
    })
}

pagina()



