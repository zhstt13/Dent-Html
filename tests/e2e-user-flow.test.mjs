import fs from 'node:fs';

const checks = [
  ['src/scripts/content-loader.js', 'Content loader'],
  ['src/scripts/flashcard.js', 'Flashcard controller'],
  ['src/scripts/quiz.js', 'Quiz controller'],
  ['src/scripts/result.js', 'Result controller'],
  ['src/scripts/progress.js', 'Progress controller']
];

const failures = [];

for (const [file, label] of checks) {
  if (!fs.existsSync(file)) failures.push(`Missing ${label}: ${file}`);
}

const index = fs.readFileSync('src/index.html', 'utf8');
for (const section of ['flashcard', 'quiz', 'result', 'progress']) {
  if (!index.includes(`data-component="${section}"`)) {
    failures.push(`Missing user flow section: ${section}`);
  }
}

if (failures.length) {
  console.error('User flow validation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('User flow validation passed.');
