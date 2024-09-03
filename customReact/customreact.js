function customRender(reactElement01,container01){
    /*
    const domElement=document.createElement(reactElement01.type)
    domElement.innerHTML=reactElement01.children
    domElement.setAttribute('href',reactElement01.props.href)
    domElement.setAttribute('target',reactElement01.props.target)

    container01.appendChild(domElement)
    */
    const domElement=document.createElement(reactElement01.type)
    domElement.innerHTML=reactElement01.children
    for (const prop in reactElement01.props) {
       if(prop==='children')continue;
       domElement.setAttribute(prop,reactElement01.props[prop])
    }
    container01.appendChild(domElement)
}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)