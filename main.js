function largerSize(){
    document.querySelector(".info").classList.remove("smaller");
    document.querySelector(".info").classList.add("larger");
}

function smallerSize(){
    document.querySelector(".info").classList.add("smaller");
}

// console.log(document.querySelector(".plus"));
document.getElementById("plus").onclick=largerSize;
document.getElementById("minus").onclick=smallerSize;