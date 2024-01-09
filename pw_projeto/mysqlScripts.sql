create database if not exists rede_portefolios;
use rede_portefolios;

drop table if exists company;
drop table if exists administrator;
drop table if exists friend_list;
drop table if exists professional_workplace;
drop table if exists workplace;
drop table if exists professional_education;
drop table if exists education;
drop table if exists professional;
drop table if exists gender;
drop table if exists login;

create table login(
	loginID int auto_increment,
    email varchar(50) unique not null,
    password varchar(100) not null,
    primary key (loginID)
);

create table administrator(
	login int not null,
    primary key (login),
    foreign key (login) references login (loginID)
);

create table company(
	login int not null,
    companyID int auto_increment,
	companyName varchar(40) not null,
    description varchar(400),
    siteUrl varchar(100),
    logoUrl varchar(250),
    pending_approval boolean not null,
    primary key (companyID),
    foreign key (login) references login (loginID)
);

create table gender(
	abreviation varchar(1) not null,
    description varchar(30),
    primary key (abreviation)
);

create table professional(
	login int not null,
    professionalID int auto_increment,
    name varchar(40) not null,
    description varchar(200),
    gender varchar(1) not null,
    birthDate date not null,
    locality varchar(200) not null,
    visible boolean not null,
	primary key (professionalID),
    foreign key (login) references login (loginID),
    foreign key (gender) references gender (abreviation)
);

create table friend_list(
	professional_1 int not null,
    professional_2 int not null,
    primary key (professional_1,professional_2),
    foreign key (professional_1) references professional (professionalID),
    foreign key (professional_2) references professional (professionalID)
);

create table education(
		educationID int auto_increment,
		place_of_education varchar(100) not null,
        name varchar(50) not null,
        type varchar(30) not null,
        primary key (educationID)
);

create table professional_education(
	professional int not null,
    educationID int not null,
    average float,
    primary key (professional,educationID),
    foreign key (professional) references professional (professionalID),
	foreign key (educationID) references education (educationID)
);

create table workplace(
	workplaceID int auto_increment,
    name varchar(40) not null,
    url_logo varchar(200),
    primary key (workplaceID)
);

create table professional_workplace(
	proWorkID int auto_increment,
	professional int not null,
    workplace int not null,
	functions_description varchar(500),
	date_start date not null,
    date_end date not null,
    primary key (proWorkID),
    foreign key (professional) references professional (professionalID),
    foreign key (workplace) references workplace (workplaceID)
);

-- Populate
-- Insert of Admins
insert into login (email,password) values ("admin1@portefolios","securepassword123");
insert into administrator values (last_insert_id());

insert into login (email,password) values ("admin2@portefolios","securepassword123");
insert into administrator values (last_insert_id());

-- Insert of Companies
insert into login (email,password) values ("google@google.com","securepassword123");
insert into company values (last_insert_id(),null,"Google",null,"google.com","https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",false);

insert into login (email,password) values ("microsoft@microsoft.com","securepassword123");
insert into company values (last_insert_id(),null,"Microsoft",null,"microsoft.com","https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",false);

insert into login (email,password) values ("apple@apple.com","securepassword123");
insert into company values (last_insert_id(),null,"Apple",null,"apple.com","https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202301160205",false);

insert into login (email,password) values ("tesla@tesla.com","securepassword123");
insert into company values (last_insert_id(),null,"Tesla",null,"tesla.com","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/640px-Tesla_Motors.svg.png",false);

insert into login (email,password) values ("sony@sony.com","securepassword123");
insert into company values (last_insert_id(),null,"Sony",null,"sony.com","https://sony.scene7.com/is/content/sonyglobalsolutions/sony-logo?$S7Product$",false);

-- Insert of Genders
insert into gender values ('F',"Female");
insert into gender values ('M',"Male");

-- Insert of Professionals
insert into login (email,password) values ("mario.silva@gmail.com","securepassword123");
insert into professional values (last_insert_id(),null,"Mário Silva","Some Description",'M',"1998-08-03","Setúbal",true);

insert into login (email,password) values ("jose.gomes@yahoo.com","securepassword123");
insert into professional values (last_insert_id(),null,"José Gomes","Some Description",'M',"1975-01-02","Barreiro",false);

insert into login (email,password) values ("maria.andrade@outlook.com","securepassword123");
insert into professional values (last_insert_id(),null,"Maria Andrade","Some Description",'F',"1972-12-14","Barreiro",true);

insert into login (email,password) values ("andre.martins","securepassword123");
insert into professional values (last_insert_id(),null,"André Martins","Some Description",'M',"2000-02-21","Setúbal",true);

-- Insert of Friends List
insert into friend_list (professional_1,professional_2) values (1,3);
insert into friend_list (professional_1,professional_2) values (1,2);
insert into friend_list (professional_1,professional_2) values (2,3);

-- Insert of Education 
insert into education (place_of_education,name,type) values ("Politécnico de Setúbal","Engenharia Informática","Licenciatura");
insert into education (place_of_education,name,type) values ("Politécnico de Setúbal","Engenharia Mecânica","Licenciatura");
insert into education (place_of_education,name,type) values ("Politécnico de Setúbal","Comunicação Social","Licenciatura");
insert into education (place_of_education,name,type) values ("Politécnico de Setúbal","Engenharia de Software","Mestrado");
insert into education (place_of_education,name,type) values ("Politécnico de Setúbal","Formação de Segurança no Trabalho","Formação");

-- Insert of Professional Education
insert into professional_education values (1,1,15.2);
insert into professional_education values (1,4,12.7);
insert into professional_education values (2,2,17.4);
insert into professional_education values (3,3,17.8);
insert into professional_education values (3,5,null);

-- Insert of Workplace
insert into workplace (name,url_logo) values ("Imports Inc.",null);
insert into workplace (name,url_logo) values ("Exports LDA.",null);
insert into workplace (name,url_logo) values ("Microsoft","https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31");

-- Insert of Professional Workplace 
insert into professional_workplace values (null,1,1,"Back-End developer","2002-01-27","2020-03-26");
insert into professional_workplace values (null,2,2,"Maintenance","2012-02-07","2020-06-03");
insert into professional_workplace values (null,3,3,"Relações Públicas","1997-11-01","2012-09-29");

-- SPs/FNs
drop function if exists fn_ValidateLogin;
delimiter //
create function fn_ValidateLogin(email varchar(50),password varchar(100))
returns boolean
deterministic
begin
	return EXISTS(select * from login l where l.email=email and l.password=password);
end//
delimiter ;

drop procedure if exists sp_getLogin;
delimiter //
create procedure sp_getLogin(in email varchar(50),in password varchar(100))
begin
	select loginID from login l where l.email=email and l.password=password;
end//
delimiter ;

drop function if exists fn_GetLoginType;
delimiter //
create function fn_GetLoginType(login int)
returns varchar(20)
deterministic
begin
	if(exists(select * from administrator a where a.login=login)) then 
		return 'admin';
	elseif (exists(select * from company c where c.login=login)) then
		return 'company';
	else
		return 'user';
	end if; 
end//
delimiter ;