const validation = ()=>{
    const id = document.getElementById('name').value;
    if(id.length >= 2)
        {
            
        return true;
        }
        console.log("not")
        alert('not enough')
    return false;

}