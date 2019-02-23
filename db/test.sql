create database listapi;

use listapi;

create table if not exists 'users' (
    'id' int(10) unsigned not null auto_increment,
    'username' varchar(50) collate utf8_unicode_ci not null,
    'email' varchar(200) collate utf8_unicode_ci not null,
    'password' varchar(100) collate utf8_unicode_ci not null,
    'created_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    'updated_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY ('id'),
    UNIQUE_KEY 'users_email_unique' ('email')
)

create table if not exists 'products' (
    'id' int(10) unsigned not null auto_increment,
    'productname' varchar(100) collate utf8_unicode_ci not null,
    'expdate' DATE not null DEFAULT CURRENT_DATE,
    'created_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    'updated_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY ('id')
)

