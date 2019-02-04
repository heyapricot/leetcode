var romanToInt = function(s) {
    const hash = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }

    let acc = 0;

    for(let i = 0; i < s.length; i += 1){
        let current = s[i];
        let value = hash[current];

    }



};

romanToInt("III");
