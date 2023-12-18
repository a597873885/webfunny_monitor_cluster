const { DataTypes } = require("../node_clickhouse/consts")
const moment = require('moment')
const Columns = {
  tableName: 'BuryPointCardStatistics',
  structure: {
    // ID 主键
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'id',
      defaultValue: DataTypes.UUIDV4
    },
    // 页面id
    pageId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'pageId'
    },
    // 卡片id
    cardId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'cardId'
    },
     // 卡片名称
     cardName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'cardName'
    },
     // 计数字段：代表图中哪种数据
     calcField: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'calcField'
    },
     // 计数字段：代表图中哪种数据
     calcFieldKey: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'calcFieldKey'
    },
    // 发生日期
    happenDate: {
      type: DataTypes.DATE_TIME,
      allowNull: false,
      field: 'happenDate'
    },
    // 统计数值
    count: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'count'
    },
    // 百分比
    percentage: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'percentage'
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE_TIME,
      field: "createdAt",
      get() {
        return moment().format('YYYY-MM-DD HH:mm:ss');
      }
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.DATE_TIME,
      field: "updatedAt",
      get() {
        return moment().format('YYYY-MM-DD HH:mm:ss');
      }
    }
  },
  // 创建索引
  index: {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
  },
  engine: "ENGINE MergeTree()",
  // 创建索引Sql
  indexSql: "",
  // 数据模型
  dataModel: "",
  // 指定分区Key
  partition: "",
  // 排序规则
  orderBy: "ORDER BY (createdAt)",
  // 设置表属性
  properties: ""
}
const DefineTable = function (sequelize) {
  return sequelize.define(Columns.tableName, Columns.structure, Columns.index)
}

module.exports = {
  Columns,
  DefineTable
}