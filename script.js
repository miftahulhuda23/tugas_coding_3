let addtobutton = document.getElementById("button")
let tododata = document.getElementById('data')
let input = document.getElementById('input')

addtobutton.addEventListener('click', function() {
    document.getElementById('button').click()
    var paragraph =document.createElement('p');
    paragraph.classList.add('paraghraph-styling');
    paragraph.innerText = input.value;
    tododata.appendChild(paragraph);
    input.value = ''

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through'
    })
})