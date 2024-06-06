# 数据库初始化
-- 创建库
create database if not exists my_db_stu;

-- 切换库
use my_db_stu;

-- 用户表
create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userAccount  varchar(256)                           not null comment '学号',
    userPassword varchar(512)                           not null comment '密码',
    userName     varchar(256)                           null comment '名字',
    userAvatar   varchar(1024)                          null comment '头像',
    userNumber   varchar(256)                           null comment '电话号码',
    userProfile  varchar(512)                           null comment '简介',
    userRole     varchar(256) default 'user'            not null comment '角色：user/admin/ban',
    createTime   datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime   datetime     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete     tinyint      default 0                 not null comment '是否删除',
    index idx_userAccount (userAccount)
    ) comment '用户' collate = utf8mb4_unicode_ci;


-- 专业管理
create table if not exists generator
(
    id          bigint auto_increment comment 'id' primary key,
    name        varchar(128)                       null comment '学院',
    description text                               null comment '专业',
    basePackage varchar(128)                       null comment '辅导员',
    version     varchar(128)                       null comment '班级',
    author      varchar(128)                       null comment '系主任',
    tags        varchar(1024)                      null comment '标签列表（json 数组）',
    picture     varchar(256)                       null comment '图片',
    fileConfig  text                               null comment '文件配置（json字符串）',
    modelConfig text                               null comment '模型配置（json字符串）',
    distPath    text                               null comment '代码生成器产物路径',
    status      int      default 0                 not null comment '状态',
    userId      bigint                             not null comment '创建用户 id',
    createTime  datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime  datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete    tinyint  default 0                 not null comment '是否删除',
    index idx_userId (userId)
    ) comment '专业管理' collate = utf8mb4_unicode_ci;
