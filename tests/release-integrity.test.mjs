import fs from 'node:fs';

const required = [
  'index.html',
  'src/scripts/app.js',
  'src/scripts/content-loader.js',
  'src/scripts/theme.js',
  'src/scripts/navigation.js',
  'src/scripts/flashcard.js',
  'src/scripts/quiz.js',
  'src/scripts/result.js',
  'src/scripts/progress.js',
  'src/styles/tokens.css',
  'src/styles/global.css',
  'src/styles/components.css',
  'src/styles/responsive.css',
  'src/styles/motion.css'
];

const components = [
  'header',
  'hero',
  'navigation',
  'lecture',
  'flashcard',
  'quiz',
  'result',
  'progress',
  'modal'
];

for (const component of components) {
  required.push(
    `src/components/${component}/component.html`,
    `src/components/${component}/component.css`
  );
}

const missing = required.filter((file) => !fs.existsSync(file));

if (missing.length) {
  console.error('Missing release files:', missing.join(', '));
  process.exit(1);
}

const index = fs.readFileSync('index.html', 'utf8');
const missingMounts = components.filter(
  (component) => !index.includes(`data-component="${component}"`)
);

if (missingMounts.length) {
  console.error('Missing component mounts:', missingMounts.join(', '));
  process.exit(1);
}

if (!index.includes('src/scripts/app.js')) {
  console.error('Runtime entrypoint is not connected in index.html');
  process.exit(1);
}

console.log(`Release integrity validation passed (${required.length} files, ${components.length} mounts checked).`);
