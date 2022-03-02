/*
 * @Author: Whilding
 * @Date: 2022-03-02 18:25:59
 * @LastEditors: Whilding
 * @LastEditTime: 2022-03-02 18:55:04
 * @Description: file content
 */
import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/CaOGaBi/nav',

  // Deployment branch name
  // 部署分支
  branch: 'main',

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,
}

export default c
