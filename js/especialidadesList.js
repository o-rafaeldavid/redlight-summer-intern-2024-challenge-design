const ulEspecialidades = especialidades.querySelector(":scope > ul")

const especialidades_list = [
    ["Um Prato de", "Nome Fixe 0", "prato-unknown.png", "informação muito gira sobre o Um Prato de Nome Fixe 0"],
    ["Francesinha", "Encabrada", "francesinha-prato.png", "informação muito gira sobre a Francesinha Encabrada"],
    ["Um Prato de", "Nome Fixe 1", "prato-unknown.png", "informação muito gira sobre o Um Prato de Nome Fixe 1"],
    ["Um Prato de", "Nome Fixe 2", "prato-unknown.png", "informação muito gira sobre o Um Prato de Nome Fixe 2"],
    ["Um Prato de", "Nome Fixe 3", "prato-unknown.png", "informação muito gira sobre o Um Prato de Nome Fixe 3"]
]

const mid = parseInt(especialidades_list.length * 0.5)

especialidades_list.forEach((especialidade, index) => {
    const li = document.createElement("li")
    li.classList.add("overflow-visible")
    li.classList.add("infoElement")
    li.classList.add((index > 2) ? "two" : "three")
    if(index == 0 || index == 2) li.classList.add("marginTop")

        const div = document.createElement("div")
        div.classList.add("overflow-visible")
        
            const section = document.createElement("section")
            section.classList.add("svgSection")
            section.classList.add(`especialidades-especialidades_abstract_${parseInt(Math.random() * 3)}`)
            section.classList.add(`laranja${(Math.random() < 0.5) ? "-amarelo" : ""}`)

            const img = document.createElement("img")
            img.setAttribute("alt", "")
            img.setAttribute("src", `./assets/imgs/especialidades/${especialidade[2]}`)

        div.appendChild(section)
        div.appendChild(img)

        div.addEventListener("mouseenter", (e) => { showInfo(e.currentTarget, especialidade[3]) })
        
        const h3 = document.createElement("h3")
        h3.classList.add("centerText")
        h3.innerHTML = especialidade[0] + "<br>" + especialidade[1]

    li.appendChild(div)
    li.appendChild(h3)

    ////

    ulEspecialidades.appendChild(li)
})