(function(){
    const expandBtn = document.getElementById('expandBtn')
    const wrap = document.getElementById('wrap')

    expandBtn.onclick = () => {
        wrap.classList.toggle("expanded")
        expandBtn.innerHTML = wrap.classList.contains('expanded') ? '&#129125 SHRINK' : '&#129125 EXPAND'
    }
})()