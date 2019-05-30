module.exports = (fileString) => {
    const regex = new RegExp('base_project', 'g');
    const url = process.cwd().toString().split('\\');
    return fileString.replace(regex, url[url.length - 1]);
}