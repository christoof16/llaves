const contenedor = document.querySelector(".contenedor");
document.querySelector(".send-button");

function crearLlave(nombre,modelo,precio){
       imagen = "<img class='llave-img' src=https://i.pinimg.com/474x/f1/44/20/f14420ceac18ebba905d0bd13419f019.jpg>";
       nombre = `<h2>${nombre}</h2>`;
       modelo = `<h3 id=${modelo}> ${modelo} </h3>`;
       precio = `<p>precio: <b>$ ${precio}</b> </p>`;
    return [imagen,nombre,modelo,precio];
}

// contenedor.innerHTML+=llave[0]+llave[1]+llave[2]+llave[3];
// contenedor.innerHTML+=llave[0]+llave[1]+llave[2]+llave[3];

const changeHidden = (number)=>{
document.querySelector(".key-data").value = number;
}

let fragmento = document.createDocumentFragment();

for(let i=1; i<=20; i++){

    let Modelorandom = Math.round(Math.random()*10000);
    let Preciorandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${Modelorandom}`,` ${Preciorandom}`);

    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
     changeHidden(Modelorandom)
    });
    div.tabIndex=i;
    div.classList.add(`item${i}`,`flex-item`);
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);