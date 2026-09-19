import fs from 'node:fs';

const productionPath = 'index.html';
const standalonePath = 'metabolism-protein-session5.html';
const assetPath = 'assets/gums-header.png';
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const file of [productionPath, standalonePath, assetPath]) {
  assert(fs.existsSync(file), `Missing Session 5 release file: ${file}`);
}

const requiredMarkers = [
  'id="lectureArticle"',
  'id="tab-flashcards"',
  'id="tab-quiz"',
  'id="tab-analytics"'
];

for (const htmlPath of [productionPath, standalonePath]) {
  if (!fs.existsSync(htmlPath)) continue;
  const html = fs.readFileSync(htmlPath, 'utf8');

  for (const marker of requiredMarkers) {
    assert(html.includes(marker), `${htmlPath} missing marker: ${marker}`);
  }

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  const idSet = new Set(ids);
  assert(ids.length === idSet.size, `Duplicate DOM ids found in ${htmlPath}`);

  const refs = [...html.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map((m) => m[1]);
  const missingRefs = refs.filter((id) => id !== 'tab-' && !idSet.has(id));
  assert(missingRefs.length === 0, `${htmlPath} missing DOM id references: ${[...new Set(missingRefs)].join(', ')}`);

  const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const [index, script] of inlineScripts.entries()) {
    try {
      new Function(script);
    } catch (error) {
      failures.push(`${htmlPath} inline script ${index + 1} syntax error: ${error.message}`);
    }
  }
}

if (fs.existsSync(standalonePath)) {
  const html = fs.readFileSync(standalonePath, 'utf8');
  assert(html.includes('DENT PREMIUM STUDY UI'), 'Standalone import is missing premium design layer');
  assert(html.includes('assets/gums-header.png'), 'Standalone import does not reference external GUMS hero asset');
  assert(!html.includes('data:image/png;base64,'), 'Standalone hero PNG is still embedded as Base64');
}

if (fs.existsSync(productionPath)) {
  const html = fs.readFileSync(productionPath, 'utf8');
  assert(html.includes('dent-premium-visual-layer'), 'Production index is missing premium design layer');
}

if (fs.existsSync(assetPath)) {
  assert(fs.statSync(assetPath).size > 10000, 'GUMS hero asset looks unexpectedly small or empty');
}

if (failures.length) {
  console.error('Session 5 page smoke test failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Session 5 production + standalone smoke test passed.');
