const fs = require('fs');
const path = require('path');
const typeBase = require('./type-base');


module.exports = async (type) => {
    console.log(__dirname);
    console.log(process.cwd());
    console.log(path.join(__dirname, '..', 'bloc', 'base.dart'));
    switch (type) {
        case typeBase.BASE:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base.dart'), "utf8");
        case typeBase.BLOC:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_bloc.dart'), "utf8");
        case typeBase.EVENT:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_event.dart'), "utf8");
        case typeBase.STATE:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_state.dart'), "utf8");
        case typeBase.PAGE:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_page.dart'), "utf8");
        case typeBase.CONTENT:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_content.dart'), "utf8");
        case typeBase.TEST:
            return await fs.readFileSync(path.join(__dirname, '..', 'bloc', 'base_test.dart'), "utf8");
        default:
            console.log('Ih rapaz');
    }
}