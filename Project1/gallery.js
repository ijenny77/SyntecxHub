const works = [
    {id:1015,   cat:"landscape",   title:"Valley Before Rain",     medium:"Digital print",     year:"2023"},
    {id:1002,   cat:"structure",   title:"Concrete Interval",      medium:"Silver gelatin",     year:"2022"},
    {id:1025,   cat:"still",       title:"Fox, Unbothered",        medium:"Digital print",     year:"2024"},
    {id:1041,   cat:"street",      title:"Corner, Late August",    medium:"Digital print",     year:"2021"},
    {id:1053,   cat:"landscape",   title:"Coastal Interruption",   medium:"Silver gelatin",     year:"2025"},
    {id:1062,   cat:"structure",   title:"Stair Study No.4",       medium:"Digital print",     year:"2023"},
    {id:1074,   cat:"still",       title:"Bread and Table",        medium:"Digital print",     year:"2024"},
    {id:1084,   cat:"street",      title:"Market, Half Empty",     medium:"Silver gelatin",     year:"2022"},
    {id:1076,   cat:"landscape",   title:"Ridge Line at Dusk",     medium:"Digital print",     year:"2026"},
    {id:1069,   cat:"structure",   title:"Glass over Water",       medium:"Digital print",     year:"2023"},
    {id:1080,   cat:"still",       title:"Two Chairs, One Light",  medium:"Silver gelatin",     year:"2021"},
    {id:1050,   cat:"street",      title:"Waiting Room",           medium:"Digital print",     year:"2025"}
]

const grid = document.getElementById('grid')
const filters = document.getElementById('filters')

function pad(n){
    return String(n).padStart(2,'0')
}

function render(list) {
    grid.innerHTML = '';
    if(!list.length) {
        grid.innerHTML = '<div class = "empty">No photos in this category yet.</div>'
        return
    }
    list.forEach((w,i)=>{
        const fig = document.createElement('figure')
        fig.style.animationDelay = (i * 45) + 'ms';
        fig.tabIndex = 0;
        fig.innerHTML = `
        <div class="frame">
            <img src="https://picsum.photos/id/${w.id}/700/875" alt="${w.title}" loading="lazy">
            <div class="plate">
                <div class="num">No. ${pad(i+1)}</div>
                <h3>${w.title}</h3>
                <p>${w.medium}, ${w.year}</p>
            </div>
        </div>
        <figcaption class='label'>
            <span class='name'>${w.title}</span>
            <span>${w.year}</span>
        </figcaption>
        `;
        grid.appendChild(fig)
    })
}

filters.addEventListener('click',(e) => {
    const btn = e.target.closest('button')
    if(!btn) return;
    filters.querySelectorAll('button').forEach(b => b.classList.remove('active'))
    btn.classList.add('active');
    const f = btn.dataset.filter;
    render(f === 'all' ? works : works.filter(w => w.cat === f))
})

render(works)