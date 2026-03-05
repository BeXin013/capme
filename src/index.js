#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

function readPackageJson() {
  const pkgPath = path.join(__dirname, '..', 'package.json');
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

function main(argv) {
  const args = argv.slice(2);
  const pkg = readPackageJson();

  if (args.includes('-h') || args.includes('--help')) {
    process.stdout.write(`capme v${pkg.version}\n\nUsage:\n  capme [--version]\n`);
    return;
  }

  if (args.includes('-v') || args.includes('--version')) {
    process.stdout.write(`${pkg.version}\n`);
    return;
  }

  process.stdout.write('capme is ready.\n');
}

main(process.argv);
