module.exports = (fileString, name) => {
    const regex = new RegExp('Base', 'g');
    return fileString.replace(regex, name.charAt(0).toUpperCase() + name.slice(1));
}