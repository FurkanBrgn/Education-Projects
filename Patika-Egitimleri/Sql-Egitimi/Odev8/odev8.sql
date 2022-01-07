--1.test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee{
    `id` INTEGER PRIMARY KEY,
    `name` VARCHAR(50),
    `birthday` DATE,
    `email` VARCHAR(100),
}

--2.Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
--employee.sql'in içerisinde;

--3.Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee SET name="Darken" WHERE id=2;
UPDATE employee SET email="gsegegkv@webmd.com" WHERE birthday="10/28/2021";
UPDATE employee SET birthday="05/14/2021" WHERE email="lspenslyt@1und1.de";
UPDATE employee SET id=51 WHERE name="Justis";
UPDATE employee SET name="Darken" WHERE email="usellekv@webmd.com";

--4.Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee WHERE id=4;
DELETE FROM employee WHERE name="Darken";
DELETE FROM employee WHERE email="gsegegkv@webmd.com";
DELETE FROM employee WHERE birthday="10/28/2021";
DELETE FROM employee WHERE id=51;