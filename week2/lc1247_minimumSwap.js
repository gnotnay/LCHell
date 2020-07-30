var minimumSwap = function(s1, s2) {
    let countX = 0;
    let countY = 0;
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] === "x" && s2[i] === "y") {
            countX++
        }

        if(s1[i] === "y" && s2[i] === "x") {
            countY++
        }
    }

    let ret = (countX >> 1) + (countY >> 1);
    if (countX % 2 === 0  && countY % 2 === 0){
        return ret
    }
    else if (countX % 2 !== 0  && countY % 2 !== 0){
        return ret + 2;
    }
    else {
        return -1;
    }
};