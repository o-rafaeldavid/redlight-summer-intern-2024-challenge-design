function mapear (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const threshold = [];

for(let i = 0; i < 1; i += 1 / 50){
    threshold.push(i);
}

const viewportObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if(entry.intersectionRatio > .5){
                let id = entry.target.id;

                let selectedAnchor = document.querySelector("a.selected");
                if(selectedAnchor !== null) selectedAnchor.classList.remove("selected")

                let toSelect = document.querySelector(`a[href="#${id}"]`)
                if(toSelect !== null) toSelect.classList.add("selected")
            }
        })
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: threshold
    }
)

document.querySelectorAll(".viewport").forEach(
    vp => viewportObserver.observe(vp)
)