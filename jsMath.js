    // const m = Math.PI;
    // console.log(m);

    // const m = Math.floor(Math.random()*20);
    // console.log(m);

    function getRendInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    console.log(getRendInt(5, 11));

