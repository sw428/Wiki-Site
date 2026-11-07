import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { ROOT, sourcePath, atomicWrite } from './sync.mjs'
const revision = execFileSync('git', ['-C', sourcePath(process.argv.slice(2)), 'rev-parse', 'HEAD'], { encoding: 'utf8', windowsHide: true }).trim()
atomicWrite(path.join(ROOT, 'source-state.json'), JSON.stringify({ repository: process.env.WIKI_REPOSITORY || 'sw428/wiki', revision }, null, 2) + '\n')
