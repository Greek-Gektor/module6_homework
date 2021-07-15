



function go(a,b) {

    let timer = setInterval(function() {
        if (a > b) {
            clearInterval(timer);
        } else {
            console.log(a);
            a++
        }
    }, 1000);
}

go(5,15)





