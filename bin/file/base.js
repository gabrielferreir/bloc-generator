module.exports = (fileString, name) => {
    const regex = new RegExp('base', 'g');
    const pre = fileString.replace(regex, name);
    const regex2 = new RegExp(`Fire${name}`, 'g');
    return pre.replace(regex2, 'Firebase');
}