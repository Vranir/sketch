let size=16; //defoult grid

function placeGrid(n,m){ //n is the number of cells
    const container = document.querySelector('#grid-container');
    //content.classList.add('content');
    for (let i=0; i<n; i++){
        for (let j=0;j<m;j++){
            let divcont = document.createElement('div');
            //divcont.textContent = i+"-"+j;
            divcont.className="grid-item";        
            container.appendChild(divcont);
            divcont.addEventListener("mouseover",()=>{
                divcont.setAttribute('style','background-color:rgb(255, 165, 0);');
                

                               

            })
            //divcont.addEventListener("mouseout",()=>{
            //    divcont.setAttribute('style','background-color: rgba(255, 255, 255, 0.8)');;
            //})

        }      
        
    }
}

const sizeBtn = document.querySelector('#open-button');
sizeBtn.addEventListener('click',()=>{
    size=prompt("Enter grid size (single number):",size);
    const container = document.querySelector('#grid-container');
    let firstdiv=container.firstElementChild;
    while (firstdiv) {
        firstdiv.remove();
        firstdiv = container.firstElementChild;
    }
    
    //container.setAttribute('style','grid-template-rows:repeat('+size+',auto);');
    container.setAttribute('style','grid-template-columns:repeat('+size+',auto);');
    placeGrid(size,size);  

})




placeGrid(size,size);