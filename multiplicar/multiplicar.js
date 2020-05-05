const colors = require('colors');
const { writeFile } = require('fs');

let listarTabla = (base, limite = 10) => {
    let data = '';

    if (!Number(base)) {
        reject(`El valor introducido '${base}' no es un número.`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}