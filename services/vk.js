const VK = require('vk-io').VK;
const truncate = require('./../utils/strutils').truncate;
async function getLatestPosts() {
    const vk = new VK();
 
    vk.setToken("065e4357065e4357065e4357fc0611d0940065e065e43575dcb080f855ec62674023cfa");
    
    let posts = await vk.api.wall.get({
        owner_id: -143778251,
        count: 5,
        filter: { owner: true }
    });

    return posts.items.map(toModel);
}

function toModel(item) {
    console.log("item id", item.id)
    return {
        date: new Date(item.date * 1000).toLocaleDateString(),
        id: "-143778251_" + item.id,
        link: "https://vk.com/wall" + "-143778251_" + item.id,
        text: truncate(item.text
            .replace(/(#(\w|[А-Я])*)/gi, "<strong>$1</strong>")
            .replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$1">$1</a>')
        )
            
    };
}

module.exports = { getLatestPosts };