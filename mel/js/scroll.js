
// function to creat elements
function newElement(tagName,className,customAttrib,customValue) {
    const elem = document.createElement(tagName)
    elem.className = className
    elem.setAttribute(customAttrib, customValue)
    elem.setAttribute("style", "margin-left: 0px")
    return elem
    
}

// changehash on scroll

// window.onscroll = function() {changeOnScroll()};
// function changeOnScroll() {
//     // console.log((window.innerHeight + window.scrollY),document.body.offsetHeight)
//     // console.log('................'+every500)
//     //console.log(window.scrollY );
    
//     window.location.href = '#1'


// }

// creating an array of li
let elements = []
for (let i = 1; i < 7; i++) {
    elements.push(newElement('li','listItem', 'list-item', `${i}`))

}

const  content = document.querySelector('.content > ul')
elements.forEach(e => {
    content.appendChild(e)
})

// chaging all scrollmargintop [list-item]
function changingScrollMaringTop(size) {
    getAllItems("[list-item]").forEach((e) => {
        e.style.scrollMarginTop = `${size}px`
    })
}


function getAllItems(attribute) {
    const allItems = document.querySelectorAll(attribute)
    
    return allItems
}

//adding top and margin left to all list-item
getAllItems("[list-item]").forEach((e,index) => {
    // let currentMaringLeft = parseInt(e.style.marginLeft.split('px')[0])
    e.id = `${index+1}`
    e.style.top = `${90 +(index*6)}px`
    e.style.marginLeft = `${index*5}px`
    e.innerText = index +1

})






//connecting anchors 
getAllItems("[list-nav]").forEach((e,index) =>{
    e.setAttribute("href", `#${index+1}`)
    e.onclick = function(e) {
        let currentUrlNumber = parseInt(window.location.href.split('#')[1])
        let currentLinkId = parseInt(e.target.href.split('#')[1])
        console.log('url: '+currentUrlNumber, 'link '+currentLinkId);
        if( currentLinkId >= currentUrlNumber || window.location.href.split('#')[1] === undefined){
            changingScrollMaringTop(80)
        }
        else{
            changingScrollMaringTop(590 * (currentUrlNumber - currentLinkId) +(index *6))

        }

    }
})
