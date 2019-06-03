const fs = require('fs');
const typeBase = require('./type-base');

module.exports = async (content, name, type) => {
    try {
        if (!fs.existsSync(`lib/main/${name}`)) fs.mkdirSync(`lib/main/${name}`);
        if (!fs.existsSync('test')) fs.mkdirSync('test');

        if (typeBase.BLOC === type)
            return await fs.writeFileSync(`lib/main/${name}/${name}_bloc.dart`, content);
        if (typeBase.EVENT === type)
            return await fs.writeFileSync(`lib/main/${name}/${name}_event.dart`, content);
        if (typeBase.STATE === type)
            return await fs.writeFileSync(`lib/main/${name}/${name}_state.dart`, content);
        if (typeBase.PAGE === type)
            return await fs.writeFileSync(`lib/main/${name}/${name}_page.dart`, content);
        if (typeBase.CONTENT === type)
            return await fs.writeFileSync(`lib/main/${name}/${name}_content.dart`, content);
        if (typeBase.TEST === type)
            return await fs.writeFileSync(`test/${name}_bloc_test.dart`, content);
        await fs.writeFileSync(`lib/main/${name}/${name}.dart`, content);
    } catch (e) {
        console.error(`Falha ao criar o arquivo(${name}.dart)`);
        console.error(e);
    }
}