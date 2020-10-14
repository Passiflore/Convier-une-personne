
// Get all DOM elements
const container = document.querySelector('.container')

const question1 = container.querySelector('.question1')
const question2 = container.querySelector('.question2')
const question2bis = container.querySelector('.question2bis')
const question3 = container.querySelector('.question3')
const question4 = container.querySelector('.question4')
const question5 = container.querySelector('.question5')

const reponseN = container.querySelector('.reponseN')
const reponseN2 = container.querySelector('.reponseN2')
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
let advanced = false

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
        question2bis.style.display = ("block")
        question1.style.display = ("none")
        advanced = true
        
    }
    if (reply == 1 && yes == false)
    {
        question2.style.display = ("block")
        question1.style.display = ("none")
        advanced = false
    }

    if (reply == 2 && yes == true && advanced == false) // 2 oui
    {
        question3.style.display = ("block")
        question2.style.display = ("none")
    }

    if (reply == 2 && yes == true && advanced == true) // 2 bis oui
    {
        reponseP.style.display = ("block")
        question2bis.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 2 && yes == false && advanced == true ) // 2 bis non
    {
        reponseN2.style.display = ("block")
        question2bis.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (reply == 2 && yes == false && advanced == false ) // 2 bis non
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

    if (reply == 4 && yes == true) // gauche NON
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
    }

}
valider.addEventListener('click',nextquestion)

oui.addEventListener('click', () =>
{
    oui.style.boxShadow = '0px 0px 5px 0px rgba(6,45,91,1)'
    oui.style.backgroundColor = '#00ff91'
    non.style.boxShadow = '0px 2px 5px 0px rgba(6,45,91,1)'
    non.style.backgroundColor = '#2ee596'
})
non.addEventListener('click', () =>
{
    non.style.boxShadow = '0px 0px 5px 0px rgba(6,45,91,1)'
    non.style.backgroundColor = '#00ff91'
    oui.style.boxShadow = '0px 2px 5px 0px rgba(6,45,91,1)'
    oui.style.backgroundColor = '#2ee596'
})
valider.addEventListener('click', () =>
{
    valider.style.boxShadow = '0px 0px 5px 0px rgba(6,45,91,1)'
    valider.style.backgroundColor = '#00ff91'
    oui.style.boxShadow = '0px 2px 5px 0px rgba(6,45,91,1)'
    oui.style.backgroundColor = '#2ee596'
    non.style.boxShadow = '0px 2px 5px 0px rgba(6,45,91,1)'
    non.style.backgroundColor = '#2ee596'
    valider.style.boxShadow = '0px 2px 5px 0px rgba(6,45,91,1)'
    valider.style.backgroundColor = '#2ee596'
})