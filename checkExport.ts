import fs from 'fs';
import path from 'path';

const componentsDir = path.join(__dirname, 'src', 'components');

function checkExports(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const usesDefaultExport = /export\s+default\s+/.test(content);
  const usesNamedExport =
    /export\s+(function|const|class)\s+[A-Z]/.test(content);

  const file = path.basename(filePath);

  if (usesDefaultExport) {
    console.warn(`❌ ${file}: uses default export — please change to named export.`);
  } else if (!usesNamedExport) {
    console.warn(`❓ ${file}: no export found or malformed export.`);
  } else {
    console.log(`✅ ${file}: named export looks good.`);
  }
}

function walkDir(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.tsx')) {
      checkExports(fullPath);
    }
  });
}

walkDir(componentsDir);

