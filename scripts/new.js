import fileSave from 'file-save'
import { promises as fs } from 'fs'
import { resolve, join } from 'path'
import chalk from 'chalk'
const root = process.cwd()
const name = process.argv[2]
const pgk_path = resolve(root, 'src/components')
const scss_path = resolve(root, 'src/styles')
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
    const template = `import React , {FC} from 'react';
export interface ${name}Props {
    children?: React.ReactNode
  }
const ${name} :FC<${name}Props> = (props) => {
    const {children}=props
    return (
    <div className='${name}'>
       {children}
    </div>
   )
  }
export {${name}}
     `
    create(path, template);
}
function create_scss() {
    let path = resolve(scss_path, `${name.toLowerCase()}.scss`)
    const template = `
.${name} {
  font-size: 24px;
  color:red;
}
     `
    create(path, template);
}
function create_mdx() {
    let path = resolve(pgk_path, `${name}/index.stories.mdx`)
    const template = `<!-- packages/${name}/index.stories.mdx -->
import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import {${name}} from "./index.tsx";
    
<Meta title="MDX/${name}" component={${name}} />
${name}

<Canvas>
  <Story name="${name}">
    <${name}/>
  </Story>
</Canvas>
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
);`
    create(path, template);
}
async function updateIndex() {
    // 自动导出组件
    let path = resolve(pgk_path, "index.ts");
    let indexText = await fs.readFile(path);
    const template = `${indexText}export * from "./${name}";`;
    create(path, template);
    // 自动导出scss
    let scssPath = resolve(scss_path, 'index.scss')
    let indexScss = await fs.readFile(scssPath);
    const scssTemplate = `${indexScss}
@import "./${name}.scss";`;
    create(scssPath, scssTemplate);

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

    create_scss();

    create_stories();

    create_mdx();

    updateIndex();

    log("✔ 创建完成");
}

main();