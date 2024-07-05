// vite 的插件 比如返回给 vite 一个对象
const fs = require("fs")
const path = require('path')

  // _config: UserConfig, 暂时用 any代替
// export default
module.exports = () => {
// export default () => {
 
  return {
    target: 'node',
    config(config: any, env: { mode: string, command: string }) {
      
      const result = fs.readdirsync(path.resolve(__dirname, '../src'))
      console.log(result);
      // console.log('config', config);
      // console.log('env', env);

      // return {

      //   // 返回一个resolve
      //   resolve: {
      //     // 
      //   }
      // }
    }
  }
}