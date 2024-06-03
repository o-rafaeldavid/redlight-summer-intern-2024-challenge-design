const ulCozinha = document.querySelector("#cozinha > ul")

const cozinha = [
    ["Nome", "Chef A", "cheff1.png", "informação muito gira sobre a Chef A"],
    ["Nome", "Chef B", "cheff1.png", "informação muito gira sobre a Chef B"],
    ["Nome", "Chef C", "cheff1.png", "informação muito gira sobre a Chef C"]
]

cozinha.forEach(coz => {
    const li = document.createElement("li")
    li.classList.add("overflow-visible")
    li.classList.add("infoElement")

        const div = document.createElement("div")

            const img = document.createElement("img")
            img.setAttribute("alt", "")
            img.setAttribute("src", `./assets/imgs/cozinha/${coz[2]}`)
            img.classList.add("laranja")
            
            const section = document.createElement("section")
            section.classList.add("svgSection")
            section.classList.add(`cozinha-cozinha_abstract_${parseInt(Math.random() * 2)}`)
            section.classList.add("overflow-visible")

            div.appendChild(img)
            div.appendChild(section)

        div.addEventListener("mouseenter", (e) => { showInfo(e.currentTarget, coz[3]) })
        
        const h3 = document.createElement("h3")
        h3.classList.add("centerText")
        h3.innerHTML = coz[0] + " " + coz[1]

    li.appendChild(div)
    li.appendChild(h3)
    ////

    ulCozinha.appendChild(li)
})