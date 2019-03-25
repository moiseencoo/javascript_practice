 
 // Other people solutions

 function two_fer(name = "you"){
	return `One for ${name}, one for me`;
}

///////////////////

export const twoFer = (name) => {
    return `One for ${name? name:"you"}, one for me.`;
}

///////////////////

export const twoFer = (name) => {

    if (name) {
        return `One for ${name}, one for me.`;
    } 
    return 'One for you, one for me.';

};
