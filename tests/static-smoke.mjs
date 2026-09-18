import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const components = ['header', 'hero', 'navigation', 'lecture', 'flashcard', 'quiz', 'modal'];

assert(exists('index.html'), 'Missing root index.html');
assert(exists('src/scripts/app.js'), 'Missing runtime src/scripts/app.js');

const index = read('index.html');
const app = read('src/scripts/app.js');

for (const component of components) {
  assert(
    exists(`src/components/${component}/component.html`),
    `Missing component markup: ${component}`
  );
  assert(
    exists(`src/components/${component}/component.css`),
    `Missing component stylesheet: ${component}`
  );
  assert(
    app.includes(`'${component}'`),
    `Runtime does not register component: ${component}`
  );
  assert(
    index.includes(`data-component="${component}"`),
    `Root entry does not mount component: ${component}`
  );
}

for (const script of ['theme.js', 'navigation.js', 'flashcard.js', 'quiz.js', 'app.js']) {
  assert(
    index.includes(`src/scripts/${script}`),
    `Root entry is missing script: ${script}`
  );
}

const quizController = read('src/scripts/quiz.js');
const quizMarkup = read('src/components/quiz/component.html');
assert(!quizController.includes('export default'), 'quiz.js must remain browser-script compatible');
assert(quizMarkup.includes('data-quiz-option="1"'), 'Quiz options are not wired to the controller');

const flashcardMarkup = read('src/components/flashcard/component.html');
assert(flashcardMarkup.includes('data-flashcard'), 'Flashcard markup is not wired to the controller');

const navigationMarkup = read('src/components/navigation/component.html');
assert(navigationMarkup.includes('data-nav-target="quiz"'), 'Navigation targets are incomplete');

if (failures.length) {
  console.error('Dent-Html static smoke test failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Dent-Html static smoke test passed (${components.length} components checked).`);
