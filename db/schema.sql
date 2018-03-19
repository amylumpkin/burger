create database eatburgers;
use eatburgers;

create table eatburgers
(
    id int not null auto_increment,
    name varchar (100) not null,
    devoured boolean default false,
    primary key (id)
);



insert into eatburgers (name) values ('Bacon Cheeseburger');
insert into eatburgers (name) values ('Mushroom and Swiss');
insert into eatburgers (name) values ('Chili Burger');