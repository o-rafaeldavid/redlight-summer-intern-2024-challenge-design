document.addEventListener("DOMContentLoaded", () => {
    const loadSVG = (svgPath, callback) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', svgPath, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const svg = xhr.responseXML.documentElement
                    let scripts = svg.getElementsByTagName('script')
                    while(scripts.length > 0){
                        svg.removeChild(scripts[0])
                    }
                    ///
                    callback(xhr.responseXML.documentElement)
                } else {
                    console.error(`Falha ao carregar o SVG localizado em "${svgPath}": ${xhr.status} | ${xhr.statusText}`)
                    if(xhr.status === 0) console.info("\nAbre a página pelo menos em localhost (127.0.0.1) porque faz-se o carregamento de SVGs por XMLHttpRequest\n ")
                    throw new Error(`Falha ao carregar o SVG localizado em "${svgPath}": ${xhr.status} | ${xhr.statusText}`)
                }
            }
        }
        xhr.send();
    }

    document.querySelectorAll("section.svgSection").forEach(svgSection => {
        const loadString = svgSection.classList.value
                            .split(" ")[1]
                            .split("-")
                            .join("/") + ".svg"
        
        loadSVG(`../assets/imgs/${loadString}`, svg => svgSection.appendChild(svg))
    })
})