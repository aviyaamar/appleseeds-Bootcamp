const darkOrLight = (color) =>
{
    switch(color){
        case 'yellow':
        case 'pink':
        case 'orang':
            console.log('light color');

        case 'blue':
        case 'purple':
        case 'brown':
            console.log('dark color');
        default:
            console.log('unknown color');
    }
};
console.log(darkOrLight('red'));
console.log(darkOrLight('yellow'));
console.log(darkOrLight('blue'));
console.log(darkOrLight('pink'));
console.log(darkOrLight('brown'));