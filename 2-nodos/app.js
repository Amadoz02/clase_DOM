let padre=document.querySelector(".container");


let node=document.createElement("h2")
node.textContent="Titulo de segundo nivel";
let texto=document.createTextNode("palabra para el nodeo de texto");
padre.appendChild( node);
padre.append(texto);

let lista = document.querySelector("#list")
console.log(lista);

let html=document.createElement("li");
let css=document.createElement("li");
let js=document.createElement("li");

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

html.textContent="HTML";
css.textContent="CSS";
js.textContent="JS";

lista.append(html,css,js);


let carta= document.querySelector(".card");
let titulo=document.createElement("h2")
titulo.textContent="Titulo de la card";
// carta.append(titulo)

//agregar primero en el nodo
// carta.insertBefore(titulo, lista);


//agregar nodo adyasente 
let beforebegin=document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent="antes de la lista";



let afterbegin=document.createElement("li");
afterbegin.classList.add("item");
afterbegin.textContent="inicio de la lista";

let beforeend=document.createElement("li");
beforeend.classList.add("item");
beforeend.textContent="ultimo de la lista";

let afterend=document.createElement("li");
afterend.classList.add("item", "before");
afterend.textContent="despues de la lista";


lista.insertAdjacentElement("beforebegin", beforebegin);
lista.insertAdjacentElement("afterend", afterend);
lista.insertAdjacentElement("beforeend", beforeend);

carta.insertBefore(afterbegin, lista)



//dias de la semana 
let card_dia= document.querySelectorAll("#dias");
const dias=[
    {
        id:1,
        name:"lunes",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:2,
        name:"Martes",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:3,
        name:"Miercoles",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:4,
        name:"Jueves",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:5,
        name:"Viernes",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:6,
        name:"Sabado",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    },
    {
        id:7,
        name:"Domingo",
        img:"https://picsum.photos/640/360",
        parrafo:"lorem ipsum",

    }
]
dias.map((dia)=>{
    
    let cards=document.querySelector(".cards")
    let card=document.createElement("div")
    let card_header=document.createElement("div")
    let card_titulo=document.createElement("h2")
    let card_body=document.createElement("div")
    let card_img=document.createElement("img")
    let card_parrafo=document.createElement("p")

    cards.append(card);
    card.append(card_header)
    card.append(card_body)
    card_header.append(card_titulo)
    card_body.append(card_img)
    card_body.append(card_parrafo)

    card.classList.add("card")
    card_header.classList.add("card__header")
    card_titulo.classList.add("card__title")
    card_body.classList.add("card__body")
    card_img.classList.add("card__img")
    card_parrafo.classList.add("card__paragraph")

    card_titulo.textContent=dia.name;
    card_img.src=dia.img;
    card_parrafo.textContent=dia.parrafo;
},0)
