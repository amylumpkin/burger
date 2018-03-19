drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers
(
    id int not null auto_increment,
    name varchar (100) not null,
    devoured boolean default false,
    primary key (id)
);



insert into burgers (name) values ('Bacon Cheeseburger');
insert into burgers (name) values ('Mushroom and Swiss');
insert into burgers (name) values ('Chili Burger');