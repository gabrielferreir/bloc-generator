module.exports = (fileString, name) => {
    const regex = new RegExp('base', 'g');
    return fileString.replace(regex, name);
}