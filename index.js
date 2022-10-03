

function destroy()
{
document.getElementById('display').innerHTML= "";

}

function key(val){
document.getElementById('display').innerHTML += val
}

function solve()
{

let x = document.getElementById('display').innerHTML

let y = eval(x);

document.getElementById('display').innerHTML = y

return y
}

function back()
{
    let value = document.getElementById('display').innerHTML

    document.getElementById('display').innerHTML  = value.substr(0, value.length -1)
  
}


