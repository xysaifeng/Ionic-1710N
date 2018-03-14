drop database if exists db;
create database db charset utf8;

drop table  if exists db.user;
create table db.user(
    id int auto_increment primary key comment 'id, PK',
    email varchar(255) not null unique comment '邮箱 UN NN',
    password varchar(255) not null comment '密码 NN'
)comment '用户表';

select * from db.user;