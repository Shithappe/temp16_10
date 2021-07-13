let store = 0;

function awd(block){
    store++;
    console.log(store);
    document.getElementById(block).classList.toggle("hidden");
    
    if (store == 10){
        for (let i = 1; i < 11; i++) document.getElementById(i).hidden = true;
        console.log("show")
        document.getElementById("tip").style.display = "block";
    }
}

function repeat(){
    store = 0;
    location.reload();
}


