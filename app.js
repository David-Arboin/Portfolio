const loaderContainer = document.querySelector('.loader-container')
window.addEventListener('load', () => {
    loaderContainer.style.display = 'none'
})

const displayLoading = () => {
    loaderContainer.style.display = 'block'
}

const hideLoading = () => {
    loaderContainer.style.display = 'none'
}
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
            document.querySelector('.display-text').style.opacity = 0
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundHome = document.querySelector('.image-background-home')
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

            // Gestion de la page presentation

            //**Appartition du texte lettre par lettre */
            const text = [...document.getElementsByTagName('h1')]
            document.querySelector('.display-text').style.opacity = 1

            for (let m = 0; m < text.length; m++) {
                let wrapTextSpan =
                    '<span>' +
                    text[m].innerText.split(' ').join('</span><span> ') +
                    '<span>'
                document.querySelectorAll('h1')[m].innerHTML = wrapTextSpan
            }
            const allSpanText = document.querySelectorAll('span')

            for (let k = 0; k < allSpanText.length; k++)
                (function (k) {
                    setTimeout(function () {
                        allSpanText[k].style.opacity = 1
                    }, 300 * (k + 1))
                })(k)
        }
    },
    {
        threshold: [0.5],
    }
)

let imageBackgroundPresentation = document.querySelector(
    '.image-background-presentation'
)
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

// Gestion de la page projets
const arrayProjects = [
    {
        id: 1,
        name: 'ohmyfood',
        imageUrl: './ressources/projects/OhMyFoodDesktop.png',
        lien: 'https://david-arboin.github.io/ohmyfood/',
    },
    {
        id: 2,
        name: 'Groupomania',
        imageUrl: './ressources/projects/GroupomaniaDesktop.png',
        lien: 'https://reseau-social-d-entreprise.herokuapp.com/loginPage',
    },
    {
        id: 3,
        name: 'Guitarsss (en construction)',
        imageUrl: './ressources/projects/guitarsss.png',
        lien: 'https://guitarsss.herokuapp.com/',
    },
    {
        id: 4,
        name: 'Booki',
        imageUrl: './ressources/projects/BookiDesktop.png',
        lien: 'https://david-arboin.github.io/Booki/',
    },
    {
        id: 5,
        name: 'IMC',
        imageUrl: './ressources/projects/ImcMiniApp.png',
        lien: 'https://david-arboin.github.io/IMC/',
    },
    {
        id: 6,
        name: 'Quizz',
        imageUrl: './ressources/projects/QuizzMiniApp.png',
        lien: 'https://david-arboin.github.io/Quizz/',
    },
    {
        id: 7,
        name: 'Cookies',
        imageUrl: './ressources/projects/CookiesApp.png',
        lien: 'https://david-arboin.github.io/Cookies/',
    },
    {
        id: 8,
        name: 'Kanap',
        imageUrl: './ressources/projects/KanapDesktop.png',
        lien: 'https://david-arboin.github.io/Kanap-front/html/index.html',
    },
    {
        id: 9,
        name: 'LaPanthere',
        imageUrl: './ressources/projects/LaPanthereDesktop.png',
        lien: 'https://david-arboin.github.io/La_Panthere/',
    },
]

// Affichage des projets
const DisplayProjects = document.querySelector('.display-projects')

// Affichage du du projet de droite
const projectLeft = document.createElement('div')
projectLeft.classList.add('display-project-0')

const imgProjectLeft = document.createElement('img')
imgProjectLeft.src = `${arrayProjects[0].imageUrl}`
imgProjectLeft.setAttribute(
    'alt',
    "Lien vers l'application " + `${arrayProjects[0].name}`
)

projectLeft.appendChild(imgProjectLeft)
DisplayProjects.appendChild(projectLeft)

// Affichae du du projet du milieu
const projectMiddle = document.createElement('a')
projectMiddle.classList.add('display-project-1')
projectMiddle.setAttribute('href', `${arrayProjects[1].lien}`)

const imgProjectMiddle = document.createElement('img')
imgProjectMiddle.src = `${arrayProjects[1].imageUrl}`
imgProjectMiddle.setAttribute(
    'alt',
    "Lien vers l'application " + `${arrayProjects[1].name}`
)

projectMiddle.appendChild(imgProjectMiddle)
DisplayProjects.appendChild(projectMiddle)

// Affichage du du projet de droite
const projectRight = document.createElement('div')
projectRight.classList.add('display-project-2')

const imgProjectRight = document.createElement('img')
imgProjectRight.src = `${arrayProjects[2].imageUrl}`
imgProjectRight.setAttribute(
    'alt',
    "Lien vers l'application " + `${arrayProjects[2].name}`
)

projectRight.appendChild(imgProjectRight)
DisplayProjects.appendChild(projectRight)

// Gestion du slide des projets vers la droite
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
        const displayNewProjectFromLeft = document.createElement('a')
        displayNewProjectFromLeft.classList.add(
            'display-project-0',
            'spinner-img'
        )
        displayNewProjectFromLeft.setAttribute(
            'href',
            `${arrayProjects[numberProjectLeft].lien}`
        )
        const imgProjectNewProjectFromLeft = document.createElement('img')
        imgProjectNewProjectFromLeft.addEventListener('load', () => {
            displayNewProjectFromLeft.classList.remove('spinner-img')
        })
        imgProjectNewProjectFromLeft.src = `${arrayProjects[numberProjectLeft].imageUrl}`
        imgProjectNewProjectFromLeft.setAttribute(
            'alt',
            "Lien vers l'application " +
                `${arrayProjects[numberProjectLeft].name}`
        )
        imgProjectNewProjectFromLeft.classList.add('display-image-project')
        displayNewProjectFromLeft.appendChild(imgProjectNewProjectFromLeft)

        //****Insertion de la div en première postition */

        const parentDiv =
            document.querySelector('.display-project-1').parentNode
        const middleProject = document.querySelector('.display-project-1')
        parentDiv.insertBefore(displayNewProjectFromLeft, middleProject)
        document.querySelector('.loader-container').style.display = 'none'
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
        const displayNewProjectFromRight = document.createElement('a')
        displayNewProjectFromRight.classList.add('display-project-2')
        displayNewProjectFromRight.setAttribute(
            'href',
            `${arrayProjects[numberProjectRight].lien}`
        )

        const imgProjectNewProjectFromRight = document.createElement('img')
        imgProjectNewProjectFromRight.src = `${arrayProjects[numberProjectRight].imageUrl}`
        imgProjectNewProjectFromRight.setAttribute(
            'alt',
            "Lien vers l'application " +
                `${arrayProjects[numberProjectRight].name}`
        )

        imgProjectNewProjectFromRight.classList.add('display-image-project')
        displayNewProjectFromRight.appendChild(imgProjectNewProjectFromRight)

        //****Insertion de la div en dernière postition */
        DisplayProjects.appendChild(displayNewProjectFromRight)
    }
}
