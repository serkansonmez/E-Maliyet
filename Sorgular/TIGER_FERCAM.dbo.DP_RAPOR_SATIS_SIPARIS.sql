﻿USE TIGER_FERCAM
GO
SET ANSI_NULLS, QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE DP_RAPOR_SATIS_SIPARIS @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2) ,
                                      @_BASTAR_VALUE DATETIME,
                                      @_BITTAR_VALUE DATETIME,
                                      @_CARIKOD_VALUE NVARCHAR(50),
                                      @_MLZKOD_VALUE NVARCHAR(50)
 
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

     DECLARE @PARAMETRELER NVARCHAR(MAX)

     SET @PARAMETRELER = N'@_BASTAR DATETIME,@_BITTAR DATETIME,@_CARIKOD NVARCHAR(50),@_MLZKOD NVARCHAR(50)';

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

     SET @QUERY1 = SUBSTRING('SELECT     CLCARD.CODE AS [Cari Kod], CLCARD.DEFINITION_ AS [Cari Ünvan], DATEPART(WEEK, ORFICHE.DATE_) AS [Sipariş Haftası], ORFICHE.DATE_ AS [Sipariş Tarihi], 
                      (CASE ORFLINE.CLOSED WHEN 0 THEN ''Bekliyor'' WHEN 1 THEN ''Kapandı'' END) AS Statü, ORFICHE.FICHENO AS [Sipariş No], ITEMS.CODE AS [Malzeme Kodu], 
                      ITEMS.NAME AS [Malzeme Adı], ITEMS.STGRPCODE AS [Malzeme Grup Kodu], ITEMS.SPECODE3 AS [Özel Kod3], 
                      ORFLINE.AMOUNT AS [Sip.Miktarı], ORFLINE.SHIPPEDAMOUNT AS [Sevk Miktarı], ORFLINE.AMOUNT - ORFLINE.SHIPPEDAMOUNT AS Kalan, 
                      ORFLINE.LINEEXP AS [Satır Açıklaması], ORFLINE.DUEDATE AS [Teslim Tarihi], ORFLINE.PRICE AS Fiyat, (ORFLINE.AMOUNT - ORFLINE.SHIPPEDAMOUNT) 
                      * ORFLINE.PRICE AS [Kalan Tutar], TEDARIKCI.ICUSTSUPCODE AS [Musteri Kodu], MONTH(ORFLINE.DUEDATE) AS [Teslim Ay]
                        FROM         dbo.{DATABASE}LG_{FIRMA}_{DONEM}_ORFLINE AS ORFLINE INNER JOIN
                      dbo.{DATABASE}LG_{FIRMA}_{DONEM}_ORFICHE AS ORFICHE ON ORFLINE.ORDFICHEREF = ORFICHE.LOGICALREF INNER JOIN
                      dbo.{DATABASE}LG_{FIRMA}_ITEMS AS ITEMS ON ORFLINE.STOCKREF = ITEMS.LOGICALREF INNER JOIN
                      dbo.{DATABASE}LG_{FIRMA}_CLCARD AS CLCARD ON ORFLINE.CLIENTREF = CLCARD.LOGICALREF LEFT OUTER JOIN
                          (SELECT     ITEMREF, CLIENTREF, ICUSTSUPCODE
                            FROM          dbo.{DATABASE}LG_{FIRMA}_SUPPASGN) AS TEDARIKCI ON CLCARD.LOGICALREF = TEDARIKCI.CLIENTREF AND ITEMS.LOGICALREF = TEDARIKCI.ITEMREF
WHERE     (ORFICHE.TRCODE = 1) AND (ORFLINE.AMOUNT - ORFLINE.SHIPPEDAMOUNT > 0)
AND (@_CARIKOD='''' OR CLCARD.CODE LIKE REPLACE(@_CARIKOD,''*'',''%'')) AND (@_MLZKOD='''' OR ITEMS.CODE LIKE REPLACE(@_MLZKOD,''*'',''%'')) 
AND (ORFLINE .DATE_ BETWEEN @_BASTAR AND @_BITTAR)
', 1, 4000)

      SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)

     EXECUTE sp_executesql @QUERY, @PARAMETRELER, @_BASTAR = @_BASTAR_VALUE, @_BITTAR = @_BITTAR_VALUE, @_CARIKOD = @_CARIKOD_VALUE, @_MLZKOD = @_MLZKOD_VALUE;
END
GO
