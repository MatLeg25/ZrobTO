-- auto-generated definition
create table category
(
    id integer     not null
        constraint category_pk
            primary key,
    name        varchar(50) not null,
    icon        varchar
);

-- auto-generated definition
create table subcategory
(
    id integer     not null
        constraint subcategory_pk
            primary key,
    name           varchar(30) not null,
    category_id    integer     not null
        constraint id
            references category
);

-- auto-generated definition
create table offer
(
    id           uuid not null                                                not null
        constraint offer_pk
            primary key,
    user_id        uuid        default '88557cc4-da17-4e13-ab87-574b67ad13a6'::uuid,
    title          varchar(30) default 'Offer title'::character varying not null,
    description    varchar     default 'Description'::character varying not null,
    price          integer                                              not null,
    delivery_time  integer,
    revisions      integer,
    image          char,
    subcategory_id integer                                              not null
        constraint id
            references subcategory
);

-- auto-generated definition
create table files
(
    id           varchar(255) not null
        constraint files_pkey
            primary key,
    content_type varchar(255),
    data         oid,
    name         varchar(255),
    size         bigint
);

alter table files
    owner to zrobtoadmin;
