window.onload = function()
{
    displayAllNumbers()
    
}




const displayAllNumbers = function()
{
let numbers_container = document.getElementById('numbers_box')
    for(i=1; i<=76; i++)
    {
        let newNumber = document.createElement('div')
        newNumber.innerText = i
        newNumber.classList.add('number')
        numbers_container.appendChild(newNumber)
    }
}
const generateRandomNum = function()
{
    let elements = []
    let generatedRnNum = Math.floor(Math.random()*76)
    for(let i=0;i<=75; i++)
    {
    let check = document.getElementsByClassName('number')[i].innerHTML
        if(generatedRnNum == check)
        document.getElementsByClassName('number')[i].classList.add('highlight')
    }
    //elements.push(document.getElementsByClassName('highlight'))
}
