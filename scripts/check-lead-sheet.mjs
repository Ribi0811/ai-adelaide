import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'ai-adelaide-lead-tests-'));
try {
  await fs.symlink(path.resolve('node_modules'), path.join(directory, 'node_modules'), 'dir');
  const compile = spawnSync(process.execPath, [
    'node_modules/typescript/bin/tsc', 'lib/lead-sheet.ts', 'lib/enquiry-delivery.ts',
    '--outDir', directory, '--rootDir', 'lib', '--module', 'commonjs', '--target', 'ES2020',
    '--esModuleInterop', '--resolveJsonModule', '--skipLibCheck', '--strict',
  ], { stdio: 'inherit' });
  if (compile.status !== 0) process.exitCode = compile.status || 1;
  else {
    const test = spawnSync(process.execPath, ['--test', 'scripts/tests/lead-sheet.test.mjs'], {
      stdio: 'inherit', env: { ...process.env, LEAD_TEST_BUILD: directory },
    });
    process.exitCode = test.status || 0;
  }
} finally {
  await fs.rm(directory, { recursive: true, force: true });
}
