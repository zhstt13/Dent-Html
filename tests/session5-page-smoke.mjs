import fs from 'node:fs';

const htmlPath = 'metabolism-protein-session5.html';
const assetPath = 'assets/gums-header.png';
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

assert(fs.existsSync(htmlPath), 'Missing Session 5 standalone HTML');
assert(fs.existsSync(assetPath), 'Missing GUMS hero asset');

if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');

  for (const marker of [
    'id="lectureArticle"',
    'id="tab-flashcards"',
    'id="tab-quiz"',
    'id="tab-analytics"',
    'DENT PREMIUM STUDY UI',
    'assets/gums-header.png'
  ]) {
    assert(html.includes(marker), `Missing Session 5 marker: ${marker}`);
  }

  assert(!html.includes('data:image/png;base64,'), 'Hero image is still embedded as Base64');

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  const idSet = new Set(ids);
  assert(ids.length === idSet.size, 'Duplicate DOM ids found in Session 5 HTML');

  const refs = [...html.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map((m) => m[1]);
  const missingRefs = refs.filter((id) => id !== 'tab-' && !idSet.has(id));
  assert(missingRefs.length === 0, `Missing DOM id references: ${[...new Set(missingRefs)].join(', ')}`);

  const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const [index, script] of inlineScripts.entries()) {
    try {
      new Function(script);
    } catch (error) {
      failures.push(`Inline script ${index + 1} has a syntax error: ${error.message}`);
    }
  }
}

if (fs.existsSync(assetPath)) {
  const size = fs.statSync(assetPath).size;
  assert(size > 10000, 'GUMS hero asset looks unexpectedly small or empty');
}

if (failures.length) {
  console.error('Session 5 standalone page smoke test failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Session 5 standalone page smoke test passed.');
