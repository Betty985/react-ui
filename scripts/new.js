import fileSave from 'file-save'
import { promises as fs } from 'fs'
import { resolve, join } from 'path'
import chalk from 'chalk'
const root = process.cwd()
const name = process.argv[2]
const pgk_path = resolve(root, 'components')
function log(msg, err) {
    if (err) {
        console.log(chalk.bold.bgRed(msg))
    } else {
        console.log(chalk.green(msg))
    }
}
function create(url, content) {
    fileSave(url).write(content, 'utf8').end('\n')
}
function create_tsx() {
    let path = resolve(pgk_path, `${name}/index.tsx`)
    const template = `import React from 'react';
import './index.css'
interface ${name}Props {
    children?: React.ReactNode
  }
const ${name} = ({ children }: ${name}Props) => {
    return <div className='${name}'>
       {children}
    </div>
  }
export {${name}}
     `
    create(path, template);
}
function create_css() {
    let path = resolve(pgk_path, `${name}/index.css`)
    const template = `
.${name} {
  font-size: 24px;
  color:red;
}
     `
    create(path, template);
}
function create_stories() {
    let path = resolve(pgk_path, `${name}/index.stories.tsx`)
    const template = `import React from "react";
    import {${name}} from "./index";
    
    export default {
      title: "${name}"
    };
    
    export const With${name} = () => (
      <${name}>
        This is my ${name} component
      </${name}>
    );
     `
    create(path, template);
}
async function updateIndex() {
    let path = resolve(pgk_path, "index.ts");
    let indexText = await fs.readFile(path);
    const template = `${indexText}export * from "./${name}";`;
    create(path, template);
}
function main() {
    if (!name)
        return log(
            new Error(`
❌ name is undefined please input name
👉 eg: npm run new name`),
            true
        );

    create_tsx();

    create_css();

    create_stories()

    updateIndex();

    log("✔ 创建完成");
}

main();