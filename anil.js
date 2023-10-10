
let count = 0
function clicks() { 
    count+=1 
    if (count%2!==0){
    document.getElementById("heading").style.color = "#cf1124"
    document.getElementById("heading").textContent = "priyanka"
    }
    else {
        document.getElementById("heading").textContent = "anilbellamkonda"
        document.getElementById("heading").style.color = "#000000"
    }
} 



