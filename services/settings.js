const   fs = require('fs'), 
        combine = require('path').join,
        deepmerge = require('deepmerge');

// TODO: use cli arguments to override settings 
module.exports = (_) => {

    const   settingsPath = combine(process.cwd(), 'settings.json'),
            settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    console.log(process.env)
    if (process.env.CONFIGURATION) {
        console.log(`configuration ${ process.env.CONFIGURATION }`);
        const merge = combine(process.cwd(), 
            `settings.${ process.env.CONFIGURATION }.json`);

        if (fs.existsSync(merge)) {
            deepmerge(settings, JSON.parse(fs.readFileSync(merge, 'utf8')));
        }
    }

    console.log(settings);

    return settings;
};