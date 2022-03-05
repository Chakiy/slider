
let margin = 0
let count = 0


function next(){
    count += 1
    console.log(count)
    if (count === 6){
        count = 0
        margin = 0
        document.querySelector("img").style.marginLeft = margin + "px"
        document.querySelector(".prev").style.display = "none"   

    }else {
        document.querySelector(".prev").style.display = "inline-block"
        margin -= 400 
        document.querySelector("img").style.marginLeft = margin + "px"
    }
   }


function prev() {
    // console.log(count)
    count -= 1
    // console.log(count)
    if(count === 0){
        console.log("jkjkkjk")

        count = 0
        margin = 0
        document.querySelector("img").style.marginLeft = margin + "px"
        
        document.querySelector(".prev").style.display = "none"     
      
          
       
    }else {
        margin += 400
        document.querySelector("img").style.marginLeft = margin + "px"

    }

    }
