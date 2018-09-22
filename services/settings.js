const fs = require('fs'),
    combine = require('path').join,
    deepmerge = require('deepmerge');
/**
 * gets application settings by merging basic settings file located at root path 
 * and (optionally) another settings path designated by configuration name 
 * If no configuration name is provided, basic settings are returned
 * @param {*} rootPath
 * @param {*} configurationName
 * @returns settings object
 */
function read(rootPath, configurationName) {

    return deepmerge(
        readJson(makePath(rootPath, null)),
        configurationName ? readJson(makePath(rootPath, configurationName)) : {}
    );
}

function readJson(path) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function makePath(rootPath, configurationName) {
    const fileName = configurationName ? `settings.${ configurationName }.json` : 'settings.json';
    return combine(rootPath, fileName);
}

module.exports = { read };