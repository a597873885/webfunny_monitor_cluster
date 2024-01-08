const { ProjectController } = require("../../controllers/controllers.js")

module.exports = (router) => {
  /** */
  // 获取项目各项数据，项目数量，健康分等等
  router.get('/getProjectBaseInfo', ProjectController.checkProjectCount);
}
