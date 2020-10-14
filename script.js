
// Get all DOM elements
const container = document.querySelector('.container')

const question1 = container.querySelector('.question1')
const question2 = container.querySelector('.question2')
const question2bis = container.querySelector('.question2bis')
const question3 = container.querySelector('.question3')
const question4 = container.querySelector('.question4')
const question5 = container.querySelector('.question5')

const reponseN = container.querySelector('.reponseN')
const reponseP = container.querySelector('.reponseP')

const buttons = container.querySelector('.buttons')
const non = container.querySelector('.non')
const oui = container.querySelector('.oui')
const valider = container.querySelector('.valider')

// Question

let truecount = 0
let falsecount = 0
let yes = false


let reply = 0

const affirmative = () =>
 {
    yes = true
 }
 oui.addEventListener('click',affirmative)


const negative = () =>
{
    yes = false
}
non.addEventListener('click',negative)


const nextquestion = () =>
{
    reply++

    if (reply == 1 && yes == true)
    {
        reponseP.style.display = ("block")
        question1.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }
    if (reply == 1 && yes == false)
    {
        question2.style.display = ("block")
        question1.style.display = ("none")
    }

    if (reply == 2 && yes == true)
    {
        question3.style.display = ("block")
        question2.style.display = ("none")
    }

    if (reply == 2 && yes == false)
    {
        reponseN.style.display = ("block")
        question2.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 3 && yes == false)
    {
        question4.style.display = ("block")
        question3.style.display = ("none")
    }

    if (reply == 3 && yes == true)
    {
        reponseN.style.display = ("block")
        question3.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 4 && yes == false)
    {
        reponseP.style.display = ("block")
        question4.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 4 && yes == true)
    {
        question5.style.display = ("block")
        question4.style.display = ("none")
    }

    if (reply == 5 && yes == true)
    {
        reponseP.style.display = ("block")
        question5.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 5 && yes == false)
    {
        reponseN.style.display = ("block")
        question5.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

}
valider.addEventListener('click',nextquestion)

oui.addEventListener('click', () =>
{
    oui.style.border = 'solid 4px #062d5b'
    oui.style.backgroundColor = '#062d5b'
    oui.style.color = '#FFFFFF'
    non.style.border = 'solid 3px #062d5b'
    non.style.backgroundColor = '#FFFFFF'
    non.style.color = '#062d5b'
    valider.style.backgroundColor ='#062d5b'
    valider.style.border = 'solid 3px #062d5b'
    valider.style.color ='#2cd189'
})
non.addEventListener('click', () =>
{
    non.style.border = 'solid 4px #062d5b'
    non.style.backgroundColor = '#062d5b'
    non.style.color = '#FFFFFF'
    oui.style.border = 'solid 3px #062d5b'
    oui.style.backgroundColor = '#FFFFFF'
    oui.style.color = '#062d5b'
    valider.style.backgroundColor ='#062d5b'
    valider.style.border = 'solid 3px #062d5b'
    valider.style.color ='#2cd189'
})
valider.addEventListener('click', () =>
{
    valider.style.border = 'solid 4px #062d5b'
    valider.style.backgroundColor = '#062d5b'
    valider.style.color = '#FFFFFF'
    oui.style.border = 'solid 3px #062d5b'
    oui.style.backgroundColor = '#FFFFFF'
    oui.style.color = '#062d5b'
    non.style.border = 'solid 3px #062d5b'
    non.style.backgroundColor = '#FFFFFF'
    non.style.color = '#062d5b'
})
