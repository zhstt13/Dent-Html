import fs from 'node:fs';

const required = [
  'src/scripts/app.js',
  'src/scripts/state.js',
  'src/scripts/content-loader.js',
  'src/scripts/quiz.js'
];

const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error('Missing release files:', missing.join(', '));
  process.exit(1);
}

console.log('Release integrity validation passed.');
