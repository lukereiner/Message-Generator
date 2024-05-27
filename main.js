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
    for (type in nbaData) {
        let listID = randNum(2019, 2023);

        switch (type) {
            case 'scoring':
                genResponse.push(`The scoring champion for ${listID} was: ${nbaData[type][listID]}`);
                break;
            case 'mvp':
                genResponse.push(`The league MVP for ${listID} was: ${nbaData[type][listID]}`);
                break;
            case 'titles':
                genResponse.push(`The NBA champion for ${listID} was: ${nbaData[type][listID]}`);
                break;
            default:
                return 'error';
        }

    };
    return genResponse;
};

console.log(messageOutput());
