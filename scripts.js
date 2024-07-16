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
        var value = eval(result)
        p.innerHTML = value.toFixed(2)
    }
    
}


function del(){
    p.innerText = p.innerText.slice(0,-1)
}