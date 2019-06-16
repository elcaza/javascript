// Retorna un valor en hexadecimal cuando le envías un rgb
const toHex = (_r, _g, _b) => {
    let red = _r;
    let green = _g;
    let blue = _b;

    if (red === 0) {
        red = "0"+red;
    }

    if (green === 0) {
        green = "0"+green;
    }

    if (blue === 0) {
        blue = "0"+blue;
    }

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);

    if (red.length != 2) {
        red = "0"+red;
    }

    if (green.length != 2) {
        green = "0"+green;
    }

    if (blue.length != 2) {
        blue = "0"+blue;
    }

    //return ("#" +red.toString(16) + green.toString(16) + blue.toString(16)).toUpperCase();
    return ("#" + red + green + blue).toUpperCase();
};

//console.log(toHex(80,11,90));


const toRGB = (_hex) => {
    let hex = _hex.slice(1);
    let hexArr = [];
    let rgbNumbers = [3];

    hexArr = toPairs(hex);

    //console.log(hexArr);

    for (let i=0; i<hexArr.length; i++) {
        rgbNumbers[i] = parseInt(hexArr[i], 16);
        //console.log(rgbNumbers[i]);
    }

    return ("" +rgbNumbers[0]+ ", " +rgbNumbers[1]+ ", " +rgbNumbers[2]+ "");
};

// console.log(toRGB("#FF0000"));

