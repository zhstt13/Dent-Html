import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const components = ['header', 'hero', 'navigation', 'lecture', 'flashcard', 'quiz', 'result', 'modal'];

assert(exists('index.html'), 'Missing root index.html');
assert(exists('src/scripts/app.js'), 'Missing runtime src/scripts/app.js');

const index = read('index.html');
const app = read('src/scripts/app.js');

for (const component of components) {
  assert(exists(`src/components/${component}/component.html`), `Missing component markup: ${component}`);
  assert(exists(`src/components/${component}/component.css`), `Missing component stylesheet: ${component}`);
  assert(app.includes(`'${component}'`), `Runtime does not register component: ${component}`);
  assert(index.includes(`data-component="${component}"`), `Root entry does not mount component: ${component}`);
}

for (const script of ['theme.js', 'navigation.js', 'flashcard.js', 'quiz.js', 'result.js', 'app.js']) {
  assert(index.includes(`src/scripts/${script}`), `Root entry is missing script: ${script}`);
}

assert(exists('src/scripts/progress.js'), 'Missing progress controller');
assert(exists('src/components/progress/component.html'), 'Missing progress component');
assert(exists('src/components/result/component.html'), 'Missing result component');

if (failures.length) {
  console.error('Dent-Html static smoke test failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Dent-Html static smoke test passed (${components.length} components checked).`);
