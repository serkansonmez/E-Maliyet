 
--EXEC EMY_RAPOR_CARI_BAKIYE '','002','01','20190101','20200101','%%','%%','%%'

--SELECT * FROM L_CAPIFIRM
alter PROCEDURE EMY_RAPOR_CARI_BAKIYE @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2) ,
                                      @_BASTAR_VALUE DATETIME,
                                      @_BITTAR_VALUE DATETIME,
                                      @_KOD_VALUE NVARCHAR(50),
                                      @_OZELKOD_VALUE NVARCHAR(50),
                                      @_YETKIKODU_VALUE NVARCHAR(50)
 
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
	 DECLARE @QUERY21 NVARCHAR(MAX)

     DECLARE @PARAMETRELER NVARCHAR(MAX)

     SET @PARAMETRELER = N'@_BASTAR DATETIME,@_BITTAR DATETIME,@_KOD NVARCHAR(50),@_OZELKOD NVARCHAR(50),@_YETKIKODU NVARCHAR(50)';

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

     SET @QUERY1 = SUBSTRING('
    select
      CLCARD.CODE   AS ''CariHesapKodu'',
      CLCARD.DEFINITION_  AS ''CariHesapünvanı'',
	  CLCARD.SPECODE   AS ''ÖzelKod'',
	  CLCARD.cyphCODE   AS ''YetkiKod'',
      CLFLINE.DATE_   AS ''İşlemTarihi'',
      CASE CLFLINE.MODULENR  WHEN 4
        THEN
          (SELECT INV.FICHENO
          FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INV
          WHERE INV.LOGICALREF = CLFLINE.SOURCEFREF)
        ELSE CLFLINE.TRANNO
      END AS ''İşlem No'',
	  CLFLINE.LOGICALREF as ''IslemReferans'',
      CLFLINE.LINEEXP AS ''İşlemAçıklaması'',
      ISNULL(CLFLINE.DOCODE,
      CASE CLFLINE.MODULENR
        WHEN 4
        THEN
          (SELECT INV.FICHENO
          FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INV
          WHERE INV.LOGICALREF = CLFLINE.SOURCEFREF
          )
        ELSE CLFLINE.TRANNO
      END)         AS ''Belge No'',
	  case CLFLINE.MODULENR when 4 then ''Fatura'' when 5 then ''Cari Hesap'' when 6 then ''Çek/Senet'' when 7 then ''Banka'' when 10 then ''Kasa'' else ''Diğer'' end as ''İşlem Türü'',
           CASE SIGN
        WHEN 0
        THEN AMOUNT
        ELSE 0
      END AS ''Borç'',
      CASE SIGN
        WHEN 1
        THEN AMOUNT
        ELSE 0
      END AS ''Alacak'',
  (CASE SIGN
        WHEN 0
        THEN AMOUNT
        ELSE 0
      END -
      CASE SIGN
        WHEN 1
        THEN AMOUNT
        ELSE 0
      END) AS ''Bakiye''
    FROM {DATABASE}LG_{FIRMA}_CLCARD CLCARD,
          {DATABASE}LG_{FIRMA}_{DONEM}_CLFLINE CLFLINE
    WHERE 
     CLFLINE.CLIENTREF  = CLCARD.LOGICALREF
        AND CLFLINE.CANCELLED  = 0
AND (@_KOD='''' OR CLCARD.CODE LIKE REPLACE(@_KOD,''*'',''%'')) AND (@_OZELKOD='''' OR CLCARD.SPECODE LIKE REPLACE(@_OZELKOD,''*'',''%'')) AND (@_YETKIKODU='''' OR CLCARD.CYPHCODE LIKE REPLACE(@_YETKIKODU,''*'',''%'')) AND (CLFLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR)
   UNION ALL
      SELECT
	  CLCARD.CODE                            AS ''Cari Hesap Kodu'',
      CLCARD.DEFINITION_                         AS ''Cari Hesap Ünvanı'',
	  CLCARD.SPECODE                            AS ''Özel Kod'',
	  CLCARD.cyphCODE                            AS ''Yetki Kodu'',
      INVOICE.DATE_                              AS ''İşlem Tarihi'',
      INVOICE.FICHENO                            AS ''İşlem No'',
	  INVOICE.LOGICALREF  AS ''IslemReferans'',
      ISNULL(INVOICE.DOCODE,INVOICE.FICHENO)+'' nolu faturaya istinaden''       AS ''İşlem Açıklaması'',
      ISNULL(INVOICE.DOCODE,INVOICE.FICHENO) AS ''Belge No'',
	  ''Fatura'' as ''İşlem Türü'',
        CASE INVOICE.TRCODE
        WHEN 1
        THEN INVOICE.NETTOTAL
        WHEN 2
        THEN INVOICE.NETTOTAL
        WHEN 3
        THEN INVOICE.NETTOTAL
        WHEN 4
        THEN INVOICE.NETTOTAL
        WHEN 6
        THEN 0
        WHEN 7
        THEN 0
        WHEN 8
        THEN 0
        WHEN 9
        THEN 0
      END AS ''Borç'',
      CASE INVOICE.TRCODE
        WHEN 1
        THEN 0
        WHEN 2
        THEN 0
        WHEN 3
        THEN 0
        WHEN 4
        THEN 0
        WHEN 6
        THEN INVOICE.NETTOTAL
        WHEN 7
        THEN INVOICE.NETTOTAL
        WHEN 8
        THEN INVOICE.NETTOTAL
        WHEN 9
        THEN INVOICE.NETTOTAL',1, 4000)
         SET @QUERY2 =  ' END AS ''Alacak'',
(CASE INVOICE.TRCODE
        WHEN 1
        THEN INVOICE.NETTOTAL
        WHEN 2
        THEN INVOICE.NETTOTAL
        WHEN 3
        THEN INVOICE.NETTOTAL
        WHEN 4
        THEN INVOICE.NETTOTAL
        WHEN 6
        THEN 0
        WHEN 7
        THEN 0
        WHEN 8
        THEN 0
        WHEN 9
        THEN 0
      END -
      CASE INVOICE.TRCODE
        WHEN 1
        THEN 0
        WHEN 2
        THEN 0
        WHEN 3
        THEN 0
        WHEN 4
        THEN 0
        WHEN 6
        THEN INVOICE.NETTOTAL
        WHEN 7
        THEN INVOICE.NETTOTAL
        WHEN 8
        THEN INVOICE.NETTOTAL
        WHEN 9
        THEN INVOICE.NETTOTAL
      END) AS ''Bakiye''
    FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE,
      {DATABASE}LG_{FIRMA}_CLCARD CLCARD
    
    WHERE CLCARD.LOGICALREF = INVOICE.CLIENTREF
     AND INVOICE.FROMKASA    = 1
    AND INVOICE.CLIENTREF   > 0
AND (@_KOD='''' OR CLCARD.CODE LIKE REPLACE(@_KOD,''*'',''%'')) AND (@_OZELKOD='''' OR CLCARD.SPECODE LIKE REPLACE(@_OZELKOD,''*'',''%'')) AND (@_YETKIKODU='''' OR CLCARD.CYPHCODE LIKE REPLACE(@_YETKIKODU,''*'',''%'')) AND (INVOICE.DATE_ BETWEEN @_BASTAR AND @_BITTAR)' 
   /*
   SET @QUERY3 = '
    select
      CLCARD.CODE   AS ''Cari Hesap Kodu'',
      CLCARD.DEFINITION_  AS ''Cari Hesap Ünvanı'',
	  CLCARD.SPECODE   AS ''Özel Kod'',
	  CLCARD.cyphCODE   AS ''Yetki Kod'',
      CLFLINE.DATE_   AS ''İşlem Tarihi'',
      CASE CLFLINE.MODULENR  WHEN 4
        THEN
          (SELECT INV.FICHENO
          FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INV
          WHERE INV.LOGICALREF = CLFLINE.SOURCEFREF)
        ELSE CLFLINE.TRANNO
      END AS ''İşlem No'',
	  CLFLINE.LOGICALREF AS IslemReferans,
      CLFLINE.LINEEXP AS ''İşlem Açıklaması'',
      ISNULL(CLFLINE.DOCODE,
      CASE CLFLINE.MODULENR
        WHEN 4
        THEN
          (SELECT INV.FICHENO
          FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INV
          WHERE INV.LOGICALREF = CLFLINE.SOURCEFREF
          )
        ELSE CLFLINE.TRANNO
      END)         AS ''Belge No'',
	  case CLFLINE.MODULENR when 4 then ''Fatura'' when 5 then ''Cari Hesap'' when 6 then ''Çek/Senet'' when 7 then ''Banka'' when 10 then ''Kasa'' else ''Diğer'' end as ''İşlem Türü'',
           CASE SIGN
        WHEN 0
        THEN AMOUNT
        ELSE 0
      END AS ''Borç'',
      CASE SIGN
        WHEN 1
        THEN AMOUNT
        ELSE 0
      END AS ''Alacak'',
  (CASE SIGN
        WHEN 0
        THEN AMOUNT
        ELSE 0
      END -
      CASE SIGN
        WHEN 1
        THEN AMOUNT
        ELSE 0
      END) AS ''Bakiye''
    FROM {DATABASE}LG_{FIRMA}_CLCARD CLCARD,
          {DATABASE}LG_{FIRMA}_{DONEM}_CLFLINE CLFLINE
    WHERE 
     CLFLINE.CLIENTREF  = CLCARD.LOGICALREF
        AND CLFLINE.CANCELLED  = 0
AND (@_KOD='''' OR CLCARD.CODE LIKE REPLACE(@_KOD,''*'',''%'')) AND (@_OZELKOD='''' OR CLCARD.SPECODE LIKE REPLACE(@_OZELKOD,''*'',''%'')) AND (@_YETKIKODU='''' OR CLCARD.CYPHCODE LIKE REPLACE(@_YETKIKODU,''*'',''%'')) AND (CLFLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR)
   UNION ALL
      SELECT
	  CLCARD.CODE                            AS ''Cari Hesap Kodu'',
      CLCARD.DEFINITION_                         AS ''Cari Hesap Ünvanı'',
	  CLCARD.SPECODE                            AS ''Özel Kod'',
	  CLCARD.cyphCODE                            AS ''Yetki Kodu'',
      INVOICE.DATE_                              AS ''İşlem Tarihi'',
      INVOICE.FICHENO                            AS ''İşlem No'',
	  INVOICE.LOGICALREF AS IslemReferans,
      ISNULL(INVOICE.DOCODE,INVOICE.FICHENO)+'' nolu faturaya istinaden''       AS ''İşlem Açıklaması'',
      ISNULL(INVOICE.DOCODE,INVOICE.FICHENO) AS ''Belge No'',
	  ''Fatura'' as ''İşlem Türü'',
        CASE INVOICE.TRCODE
        WHEN 1
        THEN INVOICE.NETTOTAL
        WHEN 2
        THEN INVOICE.NETTOTAL
        WHEN 3
        THEN INVOICE.NETTOTAL
        WHEN 4
        THEN INVOICE.NETTOTAL
        WHEN 6
        THEN 0
        WHEN 7
        THEN 0
        WHEN 8
        THEN 0
        WHEN 9
        THEN 0
      END AS ''Borç'',
      CASE INVOICE.TRCODE
        WHEN 1
        THEN 0
        WHEN 2
        THEN 0
        WHEN 3
        THEN 0
        WHEN 4
        THEN 0
        WHEN 6
        THEN INVOICE.NETTOTAL
        WHEN 7
        THEN INVOICE.NETTOTAL
        WHEN 8
        THEN INVOICE.NETTOTAL
        WHEN 9
        THEN INVOICE.NETTOTAL
      END AS ''Alacak'',
(CASE INVOICE.TRCODE
        WHEN 1
        THEN INVOICE.NETTOTAL
        WHEN 2
        THEN INVOICE.NETTOTAL
        WHEN 3
        THEN INVOICE.NETTOTAL
        WHEN 4
        THEN INVOICE.NETTOTAL
        WHEN 6
        THEN 0
        WHEN 7
        THEN 0
        WHEN 8
        THEN 0
        WHEN 9
        THEN 0
      END -
      CASE INVOICE.TRCODE
        WHEN 1
        THEN 0
        WHEN 2
        THEN 0
        WHEN 3
        THEN 0
        WHEN 4
        THEN 0
        WHEN 6
        THEN INVOICE.NETTOTAL
        WHEN 7
        THEN INVOICE.NETTOTAL
        WHEN 8
        THEN INVOICE.NETTOTAL
        WHEN 9
        THEN INVOICE.NETTOTAL
      END) AS ''Bakiye''
    FROM {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE,
      {DATABASE}LG_{FIRMA}_CLCARD CLCARD
    
    WHERE CLCARD.LOGICALREF = INVOICE.CLIENTREF
     AND INVOICE.FROMKASA    = 1
    AND INVOICE.CLIENTREF   > 0
AND (@_KOD='''' OR CLCARD.CODE LIKE REPLACE(@_KOD,''*'',''%'')) AND (@_OZELKOD='''' OR CLCARD.SPECODE LIKE REPLACE(@_OZELKOD,''*'',''%'')) AND (@_YETKIKODU='''' OR CLCARD.CYPHCODE LIKE REPLACE(@_YETKIKODU,''*'',''%'')) AND (INVOICE.DATE_ BETWEEN @_BASTAR AND @_BITTAR)' 
*/
      SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)
	--  SELECT @QUERY
     EXECUTE sp_executesql @QUERY, @PARAMETRELER, @_BASTAR = @_BASTAR_VALUE, @_BITTAR = @_BITTAR_VALUE, @_KOD = @_KOD_VALUE, @_OZELKOD = @_OZELKOD_VALUE, @_YETKIKODU = @_YETKIKODU_VALUE;
END
GO
