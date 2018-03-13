create database burgers_db;
use burgers_db;

create table burgers_db
(
    id int not null auto_increment,
    name varchar (100) not null,
    devoured boolean default false,
    primary key (id)
)
