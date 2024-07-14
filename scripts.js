var p = document.querySelector("p#display")

function add(data){
    if (data == null){
        p.innerText = ''
    }else{
    p.innerText = p.innerText + data
    }
}

function calc(){
    var result = p.innerText
    if(result == ''){
        alert("Digite algo primeiro")
    }else{
        p.innerHTML = eval(result)
    }
    
}


function del(){
    p.innerText = p.innerText.slice(0,-1)
}