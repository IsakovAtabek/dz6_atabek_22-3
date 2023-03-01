const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1

function getData (page) {
    if(page === 'next') {
        count++
    } else if (page === 'prev') {
        count--
    }
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `
            block.innerHTML = ''
            block.append(div)
        })
}

btnNext.onclick = () => {
    getData('next')
}

btnPrev.onclick = () => {
    getData('prev')
}

function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}
getPosts()