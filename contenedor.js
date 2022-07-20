const fs = require('fs');
class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj){
 //let dataArch = await fs.promises.readFile(this.ruta, "utf8");
 //let dataArchParse = JSON.parse(dataArch)
 await fs.promises.writeFile(this.ruta, JSON.stringify([ obj ], null, 2))
 console.log(dataArch)
    }
}
module.exports = Contenedor