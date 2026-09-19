import fs from 'node:fs';

const files = [
  'src/scripts/app.js',
  'src/scripts/state.js',
  'src/scripts/content-loader.js',
  'src/scripts/flashcard.js',
  'src/scripts/quiz.js',
  'src/scripts/result.js',
  'src/scripts/progress.js'
];

const failures = [];

for (const file of files) {
  if (!fs.existsSync(file)) failures.push(`Missing runtime file: ${file}`);
}

const app = fs.readFileSync('src/scripts/app.js', 'utf8');

for (const component of ['flashcard', 'quiz', 'result', 'progress']) {
  if (!app.includes(`'${component}'`)) {
    failures.push(`Runtime missing ${component} component`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Runtime flow validation passed.');
