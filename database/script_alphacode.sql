create database db_alphacode;

use db_alphacode;

create table tbl_contact(
	id int not null auto_increment primary key,
    name varchar(200) not null,
    email varchar(200) not null,
    phone varchar(200) not null,
    birth_date date not null,
    profession varchar(200) not null,
    cellphone varchar(20) not null,
    check_wpp boolean not null,
    check_email boolean not null,
    check_sms boolean not null
);

select * from tbl_contact;

insert into tbl_contact(
	name,
    email,
    phone,
    birth_date,
    profession,
    cellphone,
    check_wpp,
    check_email,
    check_sms
) values(
	'Arthur Augusto',
    'arthur@gmail.com',
    '(11) 4002-8922',
	'2005-09-30',
    'Desenvolvedor de Sistemas',
    '(11) 99569-6822',
    false,
    false,
    true
);