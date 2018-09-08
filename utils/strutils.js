module.exports = { truncate };

const MAX_LENGTH = 50;

function truncate(str) {
    str = str || '';
    if (str.length < MAX_LENGTH) return str;

    const   lastSpace = str.substr(0, MAX_LENGTH - 1).lastIndexOf(' '),
            truncateTo = lastSpace < 1 ? MAX_LENGTH - 1 : lastSpace; 

    return `${ str.substr(0, truncateTo) } ...`;
}
