﻿USE TIGER_FERCAM
GO
SET ANSI_NULLS, QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE DP_RAPOR_CARI_LISTE @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2)  
AS
BEGIN
     DECLARE @QUERY NVARCHAR(MAX)
     DECLARE @QUERY1 NVARCHAR(MAX)
     DECLARE @QUERY2 NVARCHAR(MAX)
     DECLARE @QUERY3 NVARCHAR(MAX)
     DECLARE @QUERY4 NVARCHAR(MAX)
     DECLARE @QUERY5 NVARCHAR(MAX)
     DECLARE @QUERY6 NVARCHAR(MAX)
     DECLARE @QUERY7 NVARCHAR(MAX)
     DECLARE @QUERY8 NVARCHAR(MAX)
     DECLARE @QUERY9 NVARCHAR(MAX)
     DECLARE @QUERY10 NVARCHAR(MAX)
     DECLARE @QUERY11 NVARCHAR(MAX)
     DECLARE @QUERY12 NVARCHAR(MAX)
     DECLARE @QUERY13 NVARCHAR(MAX)
     DECLARE @QUERY14 NVARCHAR(MAX)
     DECLARE @QUERY15 NVARCHAR(MAX)
     DECLARE @QUERY16 NVARCHAR(MAX)
     DECLARE @QUERY17 NVARCHAR(MAX)
     DECLARE @QUERY18 NVARCHAR(MAX)
     DECLARE @QUERY19 NVARCHAR(MAX)
     DECLARE @QUERY20 NVARCHAR(MAX)


     SET @QUERY1 = ''
     SET @QUERY2 = ''
     SET @QUERY3 = ''
     SET @QUERY4 = ''
     SET @QUERY5 = ''
     SET @QUERY6 = ''
     SET @QUERY7 = ''
     SET @QUERY8 = ''
     SET @QUERY9 = ''
     SET @QUERY10 = ''
     SET @QUERY11 = ''
     SET @QUERY12 = ''
     SET @QUERY13 = ''
     SET @QUERY14 = ''
     SET @QUERY15 = ''
     SET @QUERY16 = ''
     SET @QUERY17 = ''
     SET @QUERY18 = ''
     SET @QUERY19 = ''
     SET @QUERY20 = ''

     SET @QUERY1 = SUBSTRING('SELECT  
case c.ACTIVE when 0 then ''Kullanımda'' else ''Kullanımdışı'' end as [Statü],
case c.CARDTYPE 
	when 1 then ''Alıcı'' 
	when 2 then ''Satıcı'' 
	when 3 then ''Alıcı/Satıcı''
	when 4 then ''Grup Kodu''  end as [Türü],
case c.ACCEPTEINV when 0 then ''Normal'' else ''e-Faturalı'' end as [e-Fatura Statüsü],
CASE C.PROFILEID  WHEN 1 THEN ''Temel'' WHEN 2 THEN ''Ticari'' else '' '' end as [e-Fatura Seneryo],
ISNULL(c.POSTLABELCODE,'''') as [Posta Kutusu Etiketi],ISNULL(c.SENDERLABELCODE,'''') as [Gönderici Birim Etiketi],	 
C.CODE AS [Cari Hesap Kodu],C.DEFINITION_ AS [Cari Hesap Ünvanı],CASE c.ISPERSCOMP WHEN 0 THEN ''Tüzel'' else ''Şahıs'' end as [Vergi Tipi],c.TAXOFFICE as [Vergi Dairesi],c.TAXNR as [Vergi No],c.TCKNO as [TC No],
C.SPECODE AS [Özel Kod],C.SPECODE2 AS [Özel Kod2],C.SPECODE3 AS [Özel Kod3],C.SPECODE4 AS [Özel Kod4],C.SPECODE5 AS [Özel Kod5]
,C.CYPHCODE as [Yetki Kodu],C.ADDR1 AS [Adres1],c.ADDR2 as [Adres2],c.TOWN as [İlçe],c.CITY AS [Şehir],c.COUNTRY as [Ülke],c.TELCODES1 as [Telefon1],c.TELCODES2 as [Telefon2],c.FAXNR as [Faks],
c.INCHARGE AS [İlgili],C.EMAILADDR AS [e-Posta],ISNULL((select CODE from {DATABASE}LG_{FIRMA}_EMUHACC WHERE LOGICALREF IN (SELECT ACCOUNTREF FROM {DATABASE}LG_{FIRMA}_CRDACREF WHERE TRCODE=5 AND CARDREF=C.LOGICALREF )),'''') AS [Muhasebe Kodu],
ISNULL((SELECT DEFINITION_ FROM {DATABASE}LG_{FIRMA}_PAYPLANS WHERE LOGICALREF=C.PAYMENTREF),'''') AS [Ödeme Planı]
FROM

{DATABASE}LG_{FIRMA}_CLCARD C

WHERE c.LOGICALREF>1
', 1, 4000)

      SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)

     EXECUTE sp_executesql @QUERY;
END
GO
