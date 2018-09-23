const fs = require('fs'),
    combine = require('path').join,
    deepmerge = require('deepmerge');
/**
 * gets application settings by merging basic settings file located at root path 
 * and (optionally) another settings path designated by configuration name 
 * If no configuration name is provided, basic settings are returned
 * @param {String} rootPath
 * @param {String} configurationName
 * @returns {object} settings object
 */
function read(rootPath, configurationName) {

    return deepmerge(
        readJson(makePath(rootPath, null)),
        configurationName ? readJson(makePath(rootPath, configurationName)) : {}
    );
}
/**
 * read file as json
 *
 * @param {String} path
 * @returns json
 */
function readJson(path) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}
/**
 * make settings path based on configuration name
 * configuration name, if any, is inserted as settings.{confName}.json
 * @param {String} rootPath
 * @param {String} configurationName
 * @returns
 */
function makePath(rootPath, configurationName) {
    const fileName = configurationName ? `settings.${ configurationName }.json` : 'settings.json';
    return combine(rootPath, fileName);
}

module.exports = { read };