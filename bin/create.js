const readFile = require('./read-file');
const typeBase = require('./type-base');
const readBase = require('./file/base');
const readBloc = require('./file/bloc');
const readProject = require('./file/project');
const createFile = require('./create-file');

module.exports = async (name, cmd) => {
    // BASE
    const stringFileBase = await readFile(typeBase.BASE);
    const stringFileFinalBase = readBase(stringFileBase, name, typeBase.BASE);
    createFile(stringFileFinalBase, name);

    // BLOC
    const stringFileBloc = await readFile(typeBase.BLOC);
    const stringFileFinalBloc = readBase(readBloc(stringFileBloc, name), name);
    createFile(stringFileFinalBloc, name, typeBase.BLOC);

    // EVENT
    const stringFileEvent = await readFile(typeBase.EVENT);
    const stringFileFinalEvent = readBloc(stringFileEvent, name);
    createFile(stringFileFinalEvent, name, typeBase.EVENT);

    // EVENT
    const stringFileState = await readFile(typeBase.STATE);
    const stringFileFinalState = readBloc(stringFileState, name);
    createFile(stringFileFinalState, name, typeBase.STATE);

    // PAGE
    const stringFilePage = await readFile(typeBase.PAGE);
    const stringFileFinalPage = readBase(readBloc(readProject(stringFilePage), name), name);
    createFile(stringFileFinalPage, name, typeBase.PAGE);

    // CONTENT
    const stringFileContent = await readFile(typeBase.CONTENT);
    const stringFileFinalContent = readBase(readBloc(readProject(stringFileContent), name), name);
    createFile(stringFileFinalContent, name, typeBase.CONTENT);

    // TEST
    const stringFileTest = await readFile(typeBase.TEST);
    const stringFileFinalTest = readBase(readBloc(stringFileTest, name), name);
    createFile(stringFileFinalTest, name, typeBase.TEST);
}