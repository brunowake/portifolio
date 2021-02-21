
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
// let elements = []
// for (let i = 1; i < 7; i++) {
//     elements.push(newElement('li','listItem', 'list-item', `${i}`))

// }

// const  content = document.querySelector('.content > ul')
// elements.forEach(e => {
//     content.appendChild(e)
// })

// chaging scrollmargintop function - [list-item]
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
    

})






//linking  anchors 
getAllItems("[list-nav]").forEach((e,index) =>{
    e.setAttribute("href", `#${index+1}`)
    // setting scrollmargintop() as onclick function in each <a> on the menu. 
    e.onclick = function(e) {
        let currentUrlNumber = parseInt(window.location.href.split('#')[1])
        let navigateTo = parseInt(e.target.href.split('#')[1])
        // to chechk out in which direction I'm going, I'm taking the current URL and comparing to the navigateTo
        // if nagateTo > currentUrlNumber means that I'm scrolling down 
        console.log('url: '+currentUrlNumber, 'link '+navigateTo);
        // this is the part where we set the ScrollMarginTio to reveal the element according to its position 
        //if i'm using the links to go toward the end of the page we keep the scrollmargintop of default - 80px
        if( navigateTo >= currentUrlNumber || window.location.href.split('#')[1] === undefined){
            changingScrollMaringTop(80)
        }
        // if i'm going back to the beginning, change the scroll margin top to reveal the element i'm going to
        else{
            changingScrollMaringTop(590 * (currentUrlNumber - navigateTo) +(index *6))

        }

    }
})
