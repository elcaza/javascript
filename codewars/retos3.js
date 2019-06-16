// Retorna una array de parejas formada por el string que tú le envies
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const toPairs = (_string) => {
    let array = _string.split("");
    let collector = [];
    let result = [];
    // Creamos parejas de arrays en collector. collector = [ [a,b], [c,d], [e, undefined] ];
    for (let i = 0 ; i < array.length; i = i +2) {
        let pair = [];
        pair.push(array[i], array[i+1])
        collector.push(pair)

    }

    // Convertimos nuestros arrays internos a una cadena. result = [ 'ab', 'cd', 'e' ];
    for (let i = 0; i < collector.length; i++) {
        let pairString = ""
        pairString = collector[i].join("")
        result.push(pairString)
    }

    // Si estamos en el último elemento de nuestro array y es impar entonces añadimos un "_" a la cadena
    if (result[result.length-1].length%2 !== 0) {
        result[result.length-1]+= "_"
    }
    return result;
};

//console.log(toPairs('abc')); // should return ['ab', 'c_']
//console.log(toPairs('abcdef')); // should return ['ab', 'cd', 'ef']


// Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.
// multiple_split('Hi, how are you?', [' ']) => # [Hi,', 'how', 'are', 'you?']
// multiple_split('1+2-3', ['+', '-']) => ['1', '2', '3']

const multiple_split = (_string, _patternsArray) => { // ["+". "-"]
    //let re = _patternsArray;
    // let array = _string.split(_patternsArray[0]);
    let finalArray = [];
    let newString = _string;

    // let re = (/\s/gi);
    // console.log(re);
    // let finalString = _string.replace(re, " ");

    // console.log(typeof(_patternsArray));
    // console.log(_patternsArray.length);

    // const badReplace = (_regex) => {
    // 	console.log("_regex:", _regex);
    // 	newString = _string.replace(_regex, "+_*******_+");
    // 	console.log(newString);
    // 	return newString;
    // }

    // for (let i=0; i<_patternsArray.length; i++){
    // 	// console.log("_patternsArray[i], ", _patternsArray[i])
    // 	// finalArray = newString.split(_patternsArray[i]);

    // 	// console.log(newString.split(_patternsArray[i]))
    // 	newString = badReplace(_patternsArray[i]);
    // }

    newString = newString.replace(_patternsArray[0]).replace(_patternsArray[1]);


    console.log("newString Final: ", newString);
};

// multiple_split('Hi, how are you?', [' ']) // => # [Hi,', 'how', 'are', 'you?']
// multiple_split('1+2-3', ['+', '-']) // => ['1', '2', '3']
