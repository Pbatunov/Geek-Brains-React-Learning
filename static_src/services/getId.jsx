export const getId = () => {
    const symbols = '1234567890abcdefghijklmnopqrstuvwxyz';
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    let idString = '';

    for (let i = 0; i < 8; i++) {
        let symbol = getRandomInt(symbols.length);
        idString += symbols[symbol];
    }

    return idString;
}