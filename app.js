// Gestion de l'affichage du menu
const handleNavPos1Text = document.querySelectorAll('a')[0]
const handleNavPos2Text = document.querySelectorAll('a')[1]
const handleNavPos3Text = document.querySelectorAll('a')[2]

// Gestion affiche du menu sur la page d'accueil
let observerImageBackgroundHome = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting) {
            handleNavPos1Text.textContent = 'À propos'
            document.querySelector('.presentation').href = '#presentation'
            handleNavPos2Text.textContent = 'Projets'
            document.querySelector('.projects').href = '#projects'
            handleNavPos3Text.textContent = 'Contact'
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundHome = document.querySelector('.image-background-home')
/* imageBackgroundHome.classList.add('not-visible') */
observerImageBackgroundHome.observe(imageBackgroundHome)

// Gestion affiche du menu sur la page de présentation (À propos)
let observerImageBackgroundPresentation = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting) {
            handleNavPos1Text.textContent = 'Accueil'
            document.querySelector('.presentation').href = '#home'
            handleNavPos2Text.textContent = 'Projets'
            document.querySelector('.projects').href = '#projects'
            handleNavPos3Text.textContent = 'Contact'
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundPresentation = document.querySelector(
    '.image-background-presentation'
)
/* image1.classList.add('not-visible') */
observerImageBackgroundPresentation.observe(imageBackgroundPresentation)

// Gestion affiche du menu sur la page projets
let observerImageBackgroundProjects = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting) {
            handleNavPos1Text.textContent = 'Accueil'
            document.querySelector('.presentation').href = '#home'
            handleNavPos2Text.textContent = 'À propos'
            document.querySelector('.projects').href = '#presentation'
            handleNavPos3Text.textContent = 'Contact'
            document.querySelector('.contact').href = '#contact'
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundProjects = document.querySelector(
    '.image-background-projects'
)
/* image1.classList.add('not-visible') */
observerImageBackgroundProjects.observe(imageBackgroundProjects)

// Gestion affiche du menu sur la page contact
let observerImageBackgroundContact = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting) {
            handleNavPos1Text.textContent = 'Accueil'
            document.querySelector('.presentation').href = '#home'
            handleNavPos2Text.textContent = 'À propos'
            document.querySelector('.projects').href = '#presentation'
            handleNavPos3Text.textContent = 'Projets'
            document.querySelector('.contact').href = '#projects'
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundContact = document.querySelector('.image-background-contact')
/* image1.classList.add('not-visible') */
observerImageBackgroundContact.observe(imageBackgroundContact)

// Gestion de la page presentation

//**Appartition du texte lettre par lettre */
const text = [...document.getElementsByTagName('h1')]
console.log(text[0].innerText)

for (let m = 0; m < text.length; m++) {
    let wrapTextSpan =
        '<span>' +
        text[m].innerText.split(' ').join('</span><span> ') +
        '<span>'
    console.log(wrapTextSpan)
    document.querySelectorAll('h1')[m].innerHTML = wrapTextSpan
}
const allSpanText = document.querySelectorAll('span')
console.log(allSpanText)

for (let k = 0; k < allSpanText.length; k++)
    (function (k) {
        setTimeout(function () {
            allSpanText[k].style.opacity = 1
        }, 300 * (k + 1))
    })(k)

// Gestion de la page projets
const arrayProjects = [
    { name: 'Booki', imageUrl: './ressources/projects/BookiDesktop.png' },
    {
        name: 'Groupomania',
        imageUrl: './ressources/projects/GroupomaniaDesktop.png',
    },
    {
        name: 'Piiquante',
        imageUrl: './ressources/projects/PiiquanteDesktop.png',
    },
    {
        name: 'Kanap',
        imageUrl: './ressources/projects/KanapDesktop.png',
    },
    {
        name: 'LaPanthere',
        imageUrl: './ressources/projects/LaPanthereDesktop.png',
    },
    {
        name: 'ohmyfood',
        imageUrl: './ressources/projects/OhMyFoodDesktop.png',
    },
]

//***Affichage des projets
const DisplayProjects = document.querySelector('.display-projects')

for (let i = 0; i < 3; i++) {
    const newProject = document.createElement('div')
    newProject.classList.add(`display-project-${i}`)
    newProject.setAttribute('id', `project-${i}`)

    const imgProject = document.createElement('img')
    imgProject.src = `${arrayProjects[i].imageUrl}`
    imgProject.classList.add('display-image-project')

    newProject.appendChild(imgProject)
    DisplayProjects.appendChild(newProject)
}

// Animation du slide des projets vers la droite
const clickRight = document.querySelector('.arrow-right')
clickRight.addEventListener('click', handleClickRight)

/* let hoverRight = document.querySelector('.display-project-0')
hoverRight.addEventListener('mouseover', handleClickRight) */

let numberProjectLeft = 0
let numberProjectMiddle = 1
let numberProjectRight = 2

function handleClickRight(goToRight, hoverRight) {
    hoverRight = document.querySelector('.display-project-0')

    if (numberProjectLeft == 0) {
        numberProjectLeft = arrayProjects.length - 1
    } else {
        numberProjectLeft--
    }

    if (numberProjectMiddle == 0) {
        numberProjectMiddle = arrayProjects.length - 1
    } else {
        numberProjectMiddle--
    }

    if (numberProjectRight == 0) {
        numberProjectRight = arrayProjects.length - 1
    } else {
        numberProjectRight--
    }

    hoverRight = document.querySelector('.display-project-0')

    if (goToRight) {
        // Suppresion du projet de droite
        const displayProjectRight = document.querySelector('.display-project-2')
        displayProjectRight.remove()

        // Décalage du projet du centre à droite avec les propriétés de celui de droite
        const displayProjectMiddle =
            document.querySelector('.display-project-1')
        displayProjectMiddle.classList.replace(
            'display-project-1',
            'display-project-2'
        )

        // Décalage du projet de gauche au centre avec les propriétés de celui du centre
        const displayProjectLeft = document.querySelector('.display-project-0')
        displayProjectLeft.classList.replace(
            'display-project-0',
            'display-project-1'
        )
        //****Création du projet de gauche avec ses propriétés */
        const displayNewProjectFromLeft = document.createElement('div')
        displayNewProjectFromLeft.classList.add('display-project-0')
        const imgProjectNewProjectFromLeft = document.createElement('img')
        imgProjectNewProjectFromLeft.src = `${arrayProjects[numberProjectLeft].imageUrl}`
        imgProjectNewProjectFromLeft.classList.add('display-image-project')
        displayNewProjectFromLeft.appendChild(imgProjectNewProjectFromLeft)

        //****Insertion de la div en première postition */

        const parentDiv =
            document.querySelector('.display-project-1').parentNode
        const middleProject = document.querySelector('.display-project-1')
        parentDiv.insertBefore(displayNewProjectFromLeft, middleProject)
    }
    hoverRight = document.querySelector('.display-project-0')
}
// Animation du slide des projets vers la gauche

const clickLeft = document.querySelector('.arrow-left')
clickLeft.addEventListener('click', handleClickLeft)

/* const hoverLeft = document.querySelector('#project-2')
hoverLeft.addEventListener('mouseover', handleClickLeft) */

function handleClickLeft(goToLeft) {
    goToLeft.preventDefault()

    if (numberProjectLeft === arrayProjects.length - 1) {
        numberProjectLeft = 0
    } else {
        numberProjectLeft++
    }

    if (numberProjectMiddle === arrayProjects.length - 1) {
        numberProjectMiddle = 0
    } else {
        numberProjectMiddle++
    }

    if (numberProjectRight === arrayProjects.length - 1) {
        numberProjectRight = 0
    } else {
        numberProjectRight++
    }

    if (goToLeft) {
        // Suppresion du projet de gauche
        const displayProjectLeft = document.querySelector('.display-project-0')
        displayProjectLeft.remove()

        // Décalage du projet du centre à gauche avec les propriétés de celui de gauche
        const displayProjectMiddle =
            document.querySelector('.display-project-1')
        displayProjectMiddle.classList.replace(
            'display-project-1',
            'display-project-0'
        )

        // Décalage du projet de droite au centre avec les propriétés de celui du centre
        const displayProjectRight = document.querySelector('.display-project-2')
        displayProjectRight.classList.replace(
            'display-project-2',
            'display-project-1'
        )
        //****Création de la div */
        const displayNewProjectFromRight = document.createElement('div')
        displayNewProjectFromRight.classList.add('display-project-2')
        const imgProjectNewProjectFromRight = document.createElement('img')
        imgProjectNewProjectFromRight.src = `${arrayProjects[numberProjectRight].imageUrl}`

        imgProjectNewProjectFromRight.classList.add('display-image-project')
        displayNewProjectFromRight.appendChild(imgProjectNewProjectFromRight)

        //****Insertion de la div en dernière postition */
        DisplayProjects.appendChild(displayNewProjectFromRight)
    }
}
