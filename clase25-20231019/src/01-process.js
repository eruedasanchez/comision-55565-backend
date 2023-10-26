import http from 'http'

console.log("Directorio actual:", process.cwd()) // /Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019/src 
console.log("Id del proceso:", process.pid) // 69541
console.log("Donde corre el proceso:", process.title) // node
console.log("Version de Node:", process.version) // v18.15.0
console.log("Path de Node:", process.execPath) // /usr/local/bin/node
console.log("S.O.:", process.platform) // darwin

console.log("Var. Entorno:", process.env) 
// {
//   MallocNanoZone: '0',
//   USER: 'ezequielpc',
//   SECURITYSESSIONID: '190bf',
//   COMMAND_MODE: 'unix2003',
//   __CFBundleIdentifier: 'com.microsoft.VSCode',
//   PATH: '/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Frameworks/Python.framework/Versions/3.11/bin',
//   HOME: '/Users/ezequielpc',
//   SHELL: '/bin/zsh',
//   LaunchInstanceID: 'A8C0F799-2B11-466C-8940-E49104132DEF',
//   __CF_USER_TEXT_ENCODING: '0x1F5:0:86',
//   XPC_SERVICE_NAME: '0',
//   SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.kOJnXQ3xlD/Listeners',
//   XPC_FLAGS: '0x0',
//   LOGNAME: 'ezequielpc',
//   TMPDIR: '/var/folders/60/xbp0mgvn7mn0wg9w0qfjl8qr0000gn/T/',
//   ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
//   SHLVL: '1',
//   PWD: '/Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019/src',
//   OLDPWD: '/Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019',
//   TERM_PROGRAM: 'vscode',
//   TERM_PROGRAM_VERSION: '1.82.2',
//   LANG: 'en_US.UTF-8',
//   COLORTERM: 'truecolor',
//   GIT_ASKPASS: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
//   VSCODE_GIT_ASKPASS_NODE: '/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)',
//   VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
//   VSCODE_GIT_ASKPASS_MAIN: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
//   VSCODE_GIT_IPC_HANDLE: '/var/folders/60/xbp0mgvn7mn0wg9w0qfjl8qr0000gn/T/vscode-git-ba082b5386.sock',
//   VSCODE_INJECTION: '1',
//   ZDOTDIR: '/Users/ezequielpc',
//   USER_ZDOTDIR: '/Users/ezequielpc',
//   TERM: 'xterm-256color',
//   _: '/usr/local/bin/node'
// }

console.log("Var. Entorno - path:", process.env.PATH) 
// Var. Entorno - path: /Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Frameworks/Python.framework/Versions/3.11/bin

console.log("Var. Entorno - windir:", process.env.windir) // Var. Entorno - windir: undefined
console.log("Var. Entorno - MONGO_URL:", process.env.MONGO_URL) // Var. Entorno - MONGO_URL: undefined
console.log("Memory use:",process.memoryUsage()) 
// {
//   rss: 33595392,
//   heapTotal: 6381568,
//   heapUsed: 5865128,
//   external: 569988,
//   arrayBuffers: 18872
// }

console.log("Argumentos pasados x CLI:", process.argv) 
// [
//   '/usr/local/bin/node', (ruta de Node)
//   '/Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019/src/01-process.js' (ruta al proceso que se está ejecutando)
// ]

// Ahora, supongamos que ejecutamos por consola node 01-process.js hola true 104 Diego, 
// obtenemos en process.argv el siguiente resultado:

// Argumentos pasados x CLI: [
//     '/usr/local/bin/node',
//     '/Users/ezequielpc/Desktop/comision-55565-backend/clase25-20231019/src/01-process.js',
//     'hola',
//     'true',
//     '104',
//     'Diego'
//   ]








