const nbaData = {
    scoring: {
        2023: 'Joel Embiid',
        2022: 'Joel Embiid',
        2021: 'Stephen Curry',
        2020: 'James Harden',
        2019: 'James Harden'
    },
    mvp: {
        2023: 'Joel Embiid',
        2022: 'Nikola Jokic',
        2021: 'Nikola Jokic',
        2020: 'Giannis Antetokounmpo',
        2019: 'Giannis Antetokounmpo'
    },
    titles: {
        2023: 'Denver Nuggets',
        2022: 'Golden State Warriors',
        2021: 'Milwaukee Bucks',
        2020: 'Los Angeles Lakers',
        2019: 'Toronto Raptors',
    }
}

let genResponse = [];

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function messageOutput() {
    let keyID = Math.floor(Math.random() * 3);
    let valueID = randNum(2019, 2023);

    switch (keyID) {
        case 0:
            genResponse.push(`The scoring champion for ${valueID} was: ${nbaData['scoring'][valueID]}`);
            break;
        case 1:
            genResponse.push(`The league MVP for ${valueID} was: ${nbaData['mvp'][valueID]}`);
            break;
        case 2:
            genResponse.push(`The NBA champion for ${valueID} was: ${nbaData['titles'][valueID]}`);
            break;
        default:
            return 'error';
    };
    return genResponse;
};

console.log(messageOutput());