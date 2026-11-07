import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { ROOT, sourcePath, synchronize, watchSource } from './sync.mjs'
import { checkDocs, checkSite } from './check.mjs'

const command = process.argv[2], args = process.argv.slice(3)
const baseIndex = args.indexOf('--base')
if (baseIndex >= 0) {
  if (!args[baseIndex + 1]) throw new Error('--base requires a path')
  process.env.SITE_BASE = args[baseIndex + 1]
}
const vitepress = path.join(ROOT, 'node_modules/vitepress/bin/vitepress.js')
let server, closeWatcher, stopping = false
function stop(code = 0) {
  if (stopping) return
  stopping = true
  closeWatcher?.()
  server?.kill('SIGTERM')
  process.exitCode = code
}
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => stop())
function vp(...argv) {
  return new Promise((resolve, reject) => {
    server = spawn(process.execPath, [vitepress, ...argv], { cwd: ROOT, stdio: 'inherit', windowsHide: true })
    server.once('error', reject)
    server.once('exit', (code, signal) => {
      server = null
      if (stopping || code === 0) resolve()
      else reject(new Error('VitePress exited: ' + (code ?? signal)))
    })
  })
}
try {
  const source = sourcePath(args)
  if (command === 'sync') synchronize(source)
  else if (command === 'watch') { closeWatcher = watchSource(source); synchronize(source) }
  else if (command === 'dev') {
    closeWatcher = watchSource(source)
    synchronize(source)
    await vp('dev', '.', '--host', '127.0.0.1', '--port', '5173', '--strictPort')
    stop()
  } else if (command === 'preview') {
    await vp('preview', '.', '--host', '127.0.0.1', '--port', '4173', '--strictPort')
  } else if (command === 'build') {
    synchronize(source)
    checkDocs()
    await vp('build', '.')
    checkSite()
  } else throw new Error('Use: npm run dev|sync|watch|build [-- --source PATH]')
} catch (error) {
  console.error(error.message)
  stop(1)
}
