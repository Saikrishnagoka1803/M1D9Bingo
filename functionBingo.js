window.onload = function()
{
    displayAllNumbers()
}




const displayAllNumbers = function()
{
let numbersBox = document.getElementById('numbers_box')
    for(i=1; i<=76; i++)
    {
        let newNumber = document.createElement('div')
        newNumber.innerText = i
        newNumber.classList.add('number')
        numbersBox.appendChild(newNumber)
    }
}