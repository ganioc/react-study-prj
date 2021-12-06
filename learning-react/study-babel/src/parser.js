const parser = require('@babel/parser');
const traverse = require('@babel/traverse')

const code = `function square(n){
    return n * n;
}`;

console.log('Parsing:')
let ast = parser.parse(code);
console.log(ast)

traverse(ast, {
    enter(path){
        if(
            path.node.type === 'Identifier' &&
            path.node.name === "n"
        ){
            path.node.name="x";
        }
    }
})