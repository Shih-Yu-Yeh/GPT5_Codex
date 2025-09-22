import { readdirSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const TARGET_FOLDERS = ['src', 'scripts', 'tests'];
const SUPPORTED_EXTENSIONS = new Set(['.js', '.mjs']);

function collectFiles(relativeFolder) {
  const absoluteFolder = join(projectRoot, relativeFolder);
  const entries = readdirSync(absoluteFolder, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const nextRelativePath = join(relativeFolder, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(nextRelativePath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.has(ext)) {
        files.push(join(projectRoot, nextRelativePath));
      }
    }
  }

  return files;
}

let failures = 0;

for (const folder of TARGET_FOLDERS) {
  try {
    const files = collectFiles(folder);
    for (const file of files) {
      const result = spawnSync('node', ['--check', file], { stdio: 'inherit' });
      if (result.status !== 0) {
        failures += 1;
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      continue;
    }
    throw error;
  }
}

if (failures > 0) {
  console.error(`Linting failed for ${failures} file(s).`);
  process.exit(1);
}

console.log('All JavaScript files passed syntax checks.');
