import nodemon from 'nodemon';
import path from 'path';

const nm = nodemon({
  exec: 'ts-node ./src/index.ts',
  ext: 'ts tsx',
  watch: ['./src/router', './src']
});

nm.on('restart', (changePage) => {
  if (changePage && changePage[0].includes(path.resolve(__dirname, '../', 'src/router'))) {
    console.log(1);
    nodemon.emit('routerChange');
  } else {
    
    console.log(0);
  }
  console.log(changePage, 'restart');
});

nm.on('quit', () => {
  process.exit(0);
});

// nm.on('exit', () => {
//   console.log('exit');
// });
// // force a restart
// nodemon.emit('restart');

// // force a quit
// nodemon.emit('quit');
