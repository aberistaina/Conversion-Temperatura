
let boton = document.getElementById("boton")


function cambiarTemperatura(temperatura) {
    return new Promise((resolve, reject) => {
          
      setTimeout(() => {
        if (temperatura != "") {
          let temperaturaC = (5 / 9) * (temperatura - 32);
          resolve(temperaturaC);
        } else {
          reject("La temperatura es inválida");
        }
      }, 3000);
    });
  }
  

let mostrarDatos = async () =>{
    loading.classList.remove("d-none")
    boton.disabled = true
    let temperatura = document.getElementById("floatingInput").value;
    let tablero = document.getElementById("aqui")
    try{
        let temperaturaCambiada = await cambiarTemperatura(temperatura);
        loading.classList.add("d-none")
        boton.disabled = false
        if(temperaturaCambiada == 0){
            tablero.innerText = `${temperaturaCambiada} Cº`
        }else{
            tablero.innerText = `${temperaturaCambiada.toFixed(2)} Cº`
        }
    }catch(error){
        tablero.innerText = error
    } 

}

boton.addEventListener("click", mostrarDatos)