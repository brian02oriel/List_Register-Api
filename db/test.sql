CREATE DATABASE api_db;

USE api_db;

 Create table if not exists users(
     id int(10) unsigned not null auto_increment,
     email varchar(250) collate utf8_unicode_ci not null,
     password varchar(200) collate utf8_unicode_ci not null,
     created_at timestamp default current_timestamp,
     updated_at timestamp default current_timestamp on update current_timestamp,
     primary key(id),
     unique key users_email_unique (email)
 ) engine = InnoDB default character set=utf8;

 

 Create table if not exists products(
     id int(10) unsigned not null auto_increment,
     userId int(10) unsigned not null,
     productname varchar(100) collate utf8_unicode_ci not null,
     exp_date date not null,
     created_at timestamp default current_timestamp,
     updated_at timestamp default current_timestamp on update current_timestamp,
     primary key(id),
     foreign key (userId) references users(id) on update cascade on delete cascade
 );

Describe users;

Describe products;

