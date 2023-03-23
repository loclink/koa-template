const package = require('./package.json');
module.exports = {
  apps: [
    {
      name: package.name,
      script: './dist/src/index.js',
      cwd: './',
      watch: true,
      ignore_watch: ['logs', 'src/public', '.git'],
      out_file: './logs/koa_info.log', // 日志输出路径
      error_file: './logs/koa_err.log', // 报错日志输出路径
      log_date_format: 'YYYY-MM-DD HH:mm',
      merge_logs: true, // 合并日志文件名称
      restart_delay: 1000, // 崩溃重启服务时间间隔
      max_restarts: 3, // 崩溃后重启次数
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
