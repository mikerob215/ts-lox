import * as fs from 'node:fs/promises'


const file = await fs.readFile("./src/index.ts");
console.log(file.toString())
