const froyo = {
    flavors: ['vanilla', 'strawberry', 'coffee']
}



function sumFlavors(choices){
    let sum = 0;
    for(let i = 0; i < choices.length; i++){
    sum = sum + Object.values(froyo);
    }
    return sum;
}

function createMessage(vanilla, strawberry, coffee){
    return `You ordered ${vanilla} vanilla, ${strawberry} strawberry, ${coffee} coffee.`
}
const inputFlavors = window.prompt('What flavors of Froyo would you like? Separate requests with commas, please.');
const sumOfFlavors = sumFlavors(inputFlavors);
console.log(createMessage(inputFlavors, sumOfFlavors));

