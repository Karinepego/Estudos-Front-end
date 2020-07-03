const funcs = [];

for(let i = 0; i < 10; i++) {
    funcs.push(function() { //push add novo elemento no array
        console.log(i);
    });
};

funcs[2]();
funcs[8]();