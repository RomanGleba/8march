/* ALWAYS START PAGE FROM TOP */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"
}

window.onload = () => {
    window.scrollTo(0,0)
}


/* ELEMENTS */

const envelope = document.getElementById("envelope")
const letter = document.querySelector(".letter")
const typing = document.getElementById("typing")
const music = document.getElementById("music")


/* TEXT */

const text = `
Дорога мамо 🤗!
Вітаємо тебе з 8 Березня.

Дякуємо тобі за любов,
турботу і підтримку.

Пробач що іноді нервуємо тебе 🙏

Бажаємо здоров’я,
радості і багато щасливих моментів в житті .

З любов'ю
Рома, Давид і Йосип ❤️
`


/* TYPING EFFECT */

let index = 0

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index)

        index++

        setTimeout(typeWriter,40)

    }else{

        confetti()

    }

}


/* ENVELOPE CLICK */

envelope.addEventListener("click",()=>{

    /* start music */

    if(music){
        music.play().catch(()=>{})
    }

    /* open envelope */

    envelope.classList.add("open")

    /* show letter */

    setTimeout(()=>{

        letter.classList.add("show")

        /* scroll to letter */

        window.scrollTo({
            top:document.body.scrollHeight,
            behavior:"smooth"
        })

        typeWriter()

    },800)

})


/* FALLING FLOWERS */

function createFlower(){

    const flower=document.createElement("div")

    flower.classList.add("flower")

    flower.innerHTML="🌸"

    flower.style.left=Math.random()*100+"vw"

    flower.style.animationDuration=5+Math.random()*4+"s"

    document.body.appendChild(flower)

    setTimeout(()=>{
        flower.remove()
    },9000)

}

setInterval(createFlower,500)


/* CONFETTI */

function confetti(){

    for(let i=0;i<40;i++){

        const el=document.createElement("div")

        el.classList.add("confetti")

        el.style.left=Math.random()*100+"vw"

        el.style.background=
            ["red","yellow","blue","green","pink"][Math.floor(Math.random()*5)]

        el.style.animationDuration=3+Math.random()*3+"s"

        document.body.appendChild(el)

        setTimeout(()=>el.remove(),6000)

    }

}