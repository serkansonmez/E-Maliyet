﻿USE TIGER_FERCAM
GO
SET ANSI_NULLS, QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE DP_RAPOR_SATIS_ANALIZ @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2) ,
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

     SET @QUERY1 = SUBSTRING('(SELECT     CASE WHEN ITEMS.ACTIVE = 0 THEN ''Kullanımda'' ELSE ''Kullanım Dışı'' END AS [Cari Statusü], 
                      CLCARD.CODE AS [Cari Kodu], CLCARD.DEFINITION_ AS [Cari Ünvanı], 
                      CLCARD.SPECODE AS [Cari Özel Kodu], CLCARD.SPECODE5 AS [Cari Özel Kodu 5], 
                      CLCARD.CYPHCODE AS [Cari Yetki Kodu], CLCARD.TAXOFFICE AS [Vergi Dairesi], 
                      CLCARD.TAXNR AS [Vergi No], ITEMS.CODE AS [Malzeme Kodu], ITEMS.NAME AS [Malzeme Açıklaması], 
                      ITEMS.SPECODE AS [Malzeme Özel Kodu], ITEMS.SPECODE2 AS [Malzeme Özel Kod 2], 
                      ITEMS.SPECODE3 AS [Malzeme Özel Kod 3], ITEMS.SPECODE4 AS [Malzeme Özel Kod 4], 
                      ITEMS.SPECODE5 AS [Malzeme Özel Kod 5], ITEMS.Stgrpcode AS [Malzeme GrupKodu], 
                      ITEMS.cyphcode AS [Malzeme Yetki Kodu], CASE STLINE.TRCODE WHEN 2 THEN ''Perakande Satış İade İrsaliyesi'' WHEN 3 THEN ''Toptan Satış İade İrsaliyesi'' WHEN 7 THEN ''Perakande Satış  İrsaliyesi'' WHEN 8 THEN ''Toptan Satış İrsaliyesi''
					  else ''Diğer'' END  AS [Fiş Türü], STLINE.DATE_ AS [Fiş Tarihi], 
                      STFICHE.FICHENO AS [Fiş No], 
                      CASE WHEN INVOICE.ACCOUNTED = 1 THEN ''Muhasebeleşmiş'' ELSE ''Muhasebeleştirilmemiş'' END AS [Muhasebe Durumu], 
                      CASE WHEN STFICHE.BILLED = 1 THEN ''Faturalanmış'' ELSE ''Faturalanmamış'' END AS [Fatura Durumu], 
                      STFICHE.INVNO AS [Fatura No],CASE  MONTH(STLINE.DATE_) WHEN 1 THEN ''01.OCAK'' WHEN 2 THEN ''02.ŞUBAT'' WHEN 3 THEN ''03.MART'' WHEN 4 THEN ''04.NİSAN'' WHEN 5 THEN ''05.MAYIS'' WHEN 6 THEN ''06.HAZİRAN''
					  WHEN 7 THEN ''07.TEMMUZ'' WHEN 8 THEN ''08.AĞUSTOS'' WHEN 9 THEN ''09.EYLÜL'' WHEN 10 THEN ''10.EKİM'' WHEN 11 THEN ''11.KASIM'' ELSE ''12.ARALIK'' END AS  [Fiş Ayı],
					  CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)*-1 ELSE (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1) END   AS Miktar, 
                      STLINE.VAT AS [Kdv], CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.VATMATRAH + STLINE.DIFFPRICE)*-1 ELSE STLINE.VATMATRAH + STLINE.DIFFPRICE END  AS [Kdv Hariç],CASE WHEN STLINE.TRCODE IN(2,3) THEN STLINE.VATAMNT*-1 ELSE STLINE.VATAMNT END  AS [Kdv Tutarı], 
                      ''Malzeme'' AS [Satır Tipi],ISNULL((SELECT CODE FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Kodu],ISNULL((SELECT DEFINITION_  FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Adı]
						,CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) * -1 ELSE (STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) END AS Maliyet,
						STLINE.DIFFPRICE*-1 AS [Satış Fiyat Farkı],
						CASE WHEN STLINE.TRCODE IN(2,3) 
							THEN ((STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) + STLINE.DIFFPRICE) * -1
                      ELSE ((STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) + STLINE.DIFFPRICE) END AS Kar, 
                      YEAR(STLINE.DATE_) AS [Fiş Yılı],CLCARD.CITY AS [Şehir]
FROM         {DATABASE}LG_{FIRMA}_{DONEM}_STLINE STLINE WITH(NOLOCK)  LEFT OUTER JOIN
              {DATABASE}LG_{FIRMA}_ITEMS ITEMS WITH(NOLOCK) ON STLINE.STOCKREF = ITEMS.LOGICALREF INNER JOIN
              {DATABASE}LG_{FIRMA}_CLCARD CLCARD WITH(NOLOCK) ON STLINE.CLIENTREF = CLCARD.LOGICALREF INNER JOIN
              {DATABASE}LG_{FIRMA}_{DONEM}_STFICHE STFICHE WITH(NOLOCK) ON STLINE.STFICHEREF = STFICHE.LOGICALREF LEFT OUTER JOIN
              {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE WITH(NOLOCK) ON STFICHE.INVOICEREF = INVOICE.LOGICALREF 
            WHERE     (STLINE.LINETYPE = 0) AND (STLINE.CANCELLED = 0) and STLINE.TRCODE IN (2,3,7,8)
AND (@_CARIKOD='''' OR CLCARD.CODE LIKE REPLACE(@_CARIKOD,''*'',''%'')) AND (@_MLZKOD='''' OR ITEMS.CODE LIKE REPLACE(@_MLZKOD,''*'',''%'')) 
AND (STLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR))
UNION ALL
(SELECT     CASE WHEN SRVCARD.ACTIVE = 0 THEN ''Kullanımda'' ELSE ''Kullanım Dışı'' END AS [Cari Statusü], 
                        CLCARD.CODE AS [Cari Kodu], CLCARD.DEFINITION_ AS [Cari Ünvanı], 
                        CLCARD.SPECODE AS [Cari Özel Kodu], CLCARD.SPECODE5 AS [Cari Özel Kodu 5], 
                        CLCARD.CYPHCODE AS [Cari Yetki Kodu], CLCARD.TAXOFFICE AS [Vergi Dairesi], CLCARD.TAXNR AS [Vergi No], 
                        SRVCARD.CODE AS [Malzeme Kodu], SRVCARD.DEFINITION_ AS [Malzeme Açıklaması], SRVCARD.SPECODE AS [Malzeme Özel Kodu], 
                        '''' AS [Malzeme Özel Kod 2], '''' AS [Malzeme Özel Kod 3], '''' AS [Malzeme Özel Kod 4], '''' AS [Malzeme Özel Kod 5], '''' AS [Malzeme GrupKodu], 
                        SRVCARD.CYPHCODE AS [Malzeme Yetki Kodu], CASE STLINE.TRCODE WHEN 2 THEN ''Perakande Satış İade İrsaliyesi'' WHEN 3 THEN ''Toptan Satış İade İrsaliyesi'' WHEN 7 THEN ''Perakande Satış  İrsaliyesi'' WHEN 8 THEN ''Toptan Satış İrsaliyesi''  WHEN 9 THEN ''Verilen Hizmet Faturası''  else ''Diğer'' end  AS [Fiş Türü], STLINE.DATE_ AS [Fiş Tarihi], '''' AS [Fiş No], 
                        CASE WHEN INVOICE.ACCOUNTED = 1 THEN ''Muhasebeleşmiş'' ELSE ''Muhasebeleştirilmemiş'' END AS [Muhasebe Durumu], 
                        '''' AS [Fatura Durumu], INVOICE.FICHENO AS [Fatura No], CASE  MONTH(STLINE.DATE_) WHEN 1 THEN ''01.OCAK'' WHEN 2 THEN ''02.ŞUBAT'' WHEN 3 THEN ''03.MART'' WHEN 4 THEN ''04.NİSAN'' WHEN 5 THEN ''05.MAYIS'' WHEN 6 THEN ''06.HAZİRAN''
					  WHEN 7 THEN ''07.TEMMUZ'' WHEN 8 THEN ''08.AĞUSTOS'' WHEN 9 THEN ''09.EYLÜL'' WHEN 10 THEN ''10.EKİM'' WHEN 11 THEN ''11.KASIM'' ELSE ''12.ARALIK'' END AS [Fiş Ayı], 
                        (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1) AS Miktar, STLINE.VAT AS Kdv, STLINE.VATMATRAH AS [Kdv Hariç], 
                        STLINE.VATAMNT AS [Kdv Tutarı], ''Hizmet'' AS [Satır Tipi],ISNULL((SELECT CODE FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Kodu],ISNULL((SELECT DEFINITION_  FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Adı]
 ,(STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) AS Maliyet,STLINE.DIFFPRICE*-1 as [Satış Fiyat Farkı],
 (STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1))+STLINE.DIFFPRICE AS Kar ,YEAR(STLINE.DATE_) AS [Fiş Yılı],
			CLCARD.CITY AS [Şehir]
 FROM         {DATABASE}LG_{FIRMA}_{DONEM}_STLINE STLINE WITH(NOLOCK)  LEFT OUTER JOIN
            {DATABASE}LG_{FIRMA}_CLCARD CLCARD WITH(NOLOCK) ON STLINE.CLIENTREF = CLCARD.LOGICALREF INNER JOIN
             {DATABASE}LG_{FIRMA}_SRVCARD SRVCARD WITH(NOLOCK) ON STLINE.STOCKREF = SRVCARD.LOGICALREF INNER JOIN
            {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE WITH(NOLOCK) ON STLINE.INVOICEREF = INVOICE.LOGICALREF
 WHERE     (STLINE.LINETYPE = 4) AND (STLINE.CANCELLED = 0) And STLINE.TRCODE IN (2,3,7,8,9)
AND (@_CARIKOD='''' OR CLCARD.CODE LIKE REPLACE(@_CARIKOD,''*'',''%'')) AND (@_MLZKOD='''' OR SRVCARD.CODE LIKE REPLACE(@_MLZKOD,''*'',''%'')) 
AND (STLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR))', 1, 4000)
     SET @QUERY2 = SUBSTRING('(SELECT     CASE WHEN ITEMS.ACTIVE = 0 THEN ''Kullanımda'' ELSE ''Kullanım Dışı'' END AS [Cari Statusü], 
                      CLCARD.CODE AS [Cari Kodu], CLCARD.DEFINITION_ AS [Cari Ünvanı], 
                      CLCARD.SPECODE AS [Cari Özel Kodu], CLCARD.SPECODE5 AS [Cari Özel Kodu 5], 
                      CLCARD.CYPHCODE AS [Cari Yetki Kodu], CLCARD.TAXOFFICE AS [Vergi Dairesi], 
                      CLCARD.TAXNR AS [Vergi No], ITEMS.CODE AS [Malzeme Kodu], ITEMS.NAME AS [Malzeme Açıklaması], 
                      ITEMS.SPECODE AS [Malzeme Özel Kodu], ITEMS.SPECODE2 AS [Malzeme Özel Kod 2], 
                      ITEMS.SPECODE3 AS [Malzeme Özel Kod 3], ITEMS.SPECODE4 AS [Malzeme Özel Kod 4], 
                      ITEMS.SPECODE5 AS [Malzeme Özel Kod 5], ITEMS.Stgrpcode AS [Malzeme GrupKodu], 
                      ITEMS.cyphcode AS [Malzeme Yetki Kodu], CASE STLINE.TRCODE WHEN 2 THEN ''Perakande Satış İade İrsaliyesi'' WHEN 3 THEN ''Toptan Satış İade İrsaliyesi'' WHEN 7 THEN ''Perakande Satış  İrsaliyesi'' WHEN 8 THEN ''Toptan Satış İrsaliyesi''
					  else ''Diğer'' END  AS [Fiş Türü], STLINE.DATE_ AS [Fiş Tarihi], 
                      STFICHE.FICHENO AS [Fiş No], 
                      CASE WHEN INVOICE.ACCOUNTED = 1 THEN ''Muhasebeleşmiş'' ELSE ''Muhasebeleştirilmemiş'' END AS [Muhasebe Durumu], 
                      CASE WHEN STFICHE.BILLED = 1 THEN ''Faturalanmış'' ELSE ''Faturalanmamış'' END AS [Fatura Durumu], 
                      STFICHE.INVNO AS [Fatura No],CASE  MONTH(STLINE.DATE_) WHEN 1 THEN ''01.OCAK'' WHEN 2 THEN ''02.ŞUBAT'' WHEN 3 THEN ''03.MART'' WHEN 4 THEN ''04.NİSAN'' WHEN 5 THEN ''05.MAYIS'' WHEN 6 THEN ''06.HAZİRAN''
					  WHEN 7 THEN ''07.TEMMUZ'' WHEN 8 THEN ''08.AĞUSTOS'' WHEN 9 THEN ''09.EYLÜL'' WHEN 10 THEN ''10.EKİM'' WHEN 11 THEN ''11.KASIM'' ELSE ''12.ARALIK'' END AS  [Fiş Ayı],
					  CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)*-1 ELSE (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1) END   AS Miktar, 
                      STLINE.VAT AS [Kdv], CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.VATMATRAH + STLINE.DIFFPRICE)*-1 ELSE STLINE.VATMATRAH + STLINE.DIFFPRICE END  AS [Kdv Hariç],CASE WHEN STLINE.TRCODE IN(2,3) THEN STLINE.VATAMNT*-1 ELSE STLINE.VATAMNT END  AS [Kdv Tutarı], 
                      ''Malzeme'' AS [Satır Tipi],ISNULL((SELECT CODE FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Kodu],ISNULL((SELECT DEFINITION_  FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Adı]
						,CASE WHEN STLINE.TRCODE IN(2,3) THEN (STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) * -1 ELSE (STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) END AS Maliyet,
						STLINE.DIFFPRICE*-1 AS [Satış Fiyat Farkı],
						CASE WHEN STLINE.TRCODE IN(2,3) 
							THEN ((STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) + STLINE.DIFFPRICE) * -1
                      ELSE ((STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) + STLINE.DIFFPRICE) END AS Kar, 
                      YEAR(STLINE.DATE_) AS [Fiş Yılı],CLCARD.CITY AS [Şehir]
FROM         {DATABASE}LG_{FIRMA}_{DONEM}_STLINE STLINE WITH(NOLOCK)  LEFT OUTER JOIN
              {DATABASE}LG_{FIRMA}_ITEMS ITEMS WITH(NOLOCK) ON STLINE.STOCKREF = ITEMS.LOGICALREF INNER JOIN
              {DATABASE}LG_{FIRMA}_CLCARD CLCARD WITH(NOLOCK) ON STLINE.CLIENTREF = CLCARD.LOGICALREF INNER JOIN
              {DATABASE}LG_{FIRMA}_{DONEM}_STFICHE STFICHE WITH(NOLOCK) ON STLINE.STFICHEREF = STFICHE.LOGICALREF LEFT OUTER JOIN
              {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE WITH(NOLOCK) ON STFICHE.INVOICEREF = INVOICE.LOGICALREF 
            WHERE     (STLINE.LINETYPE = 0) AND (STLINE.CANCELLED = 0) and STLINE.TRCODE IN (2,3,7,8)
AND (@_CARIKOD='''' OR CLCARD.CODE LIKE REPLACE(@_CARIKOD,''*'',''%'')) AND (@_MLZKOD='''' OR ITEMS.CODE LIKE REPLACE(@_MLZKOD,''*'',''%'')) 
AND (STLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR))
UNION ALL
(SELECT     CASE WHEN SRVCARD.ACTIVE = 0 THEN ''Kullanımda'' ELSE ''Kullanım Dışı'' END AS [Cari Statusü], 
                        CLCARD.CODE AS [Cari Kodu], CLCARD.DEFINITION_ AS [Cari Ünvanı], 
                        CLCARD.SPECODE AS [Cari Özel Kodu], CLCARD.SPECODE5 AS [Cari Özel Kodu 5], 
                        CLCARD.CYPHCODE AS [Cari Yetki Kodu], CLCARD.TAXOFFICE AS [Vergi Dairesi], CLCARD.TAXNR AS [Vergi No], 
                        SRVCARD.CODE AS [Malzeme Kodu], SRVCARD.DEFINITION_ AS [Malzeme Açıklaması], SRVCARD.SPECODE AS [Malzeme Özel Kodu], 
                        '''' AS [Malzeme Özel Kod 2], '''' AS [Malzeme Özel Kod 3], '''' AS [Malzeme Özel Kod 4], '''' AS [Malzeme Özel Kod 5], '''' AS [Malzeme GrupKodu], 
                        SRVCARD.CYPHCODE AS [Malzeme Yetki Kodu], CASE STLINE.TRCODE WHEN 2 THEN ''Perakande Satış İade İrsaliyesi'' WHEN 3 THEN ''Toptan Satış İade İrsaliyesi'' WHEN 7 THEN ''Perakande Satış  İrsaliyesi'' WHEN 8 THEN ''Toptan Satış İrsaliyesi''  WHEN 9 THEN ''Verilen Hizmet Faturası''  else ''Diğer'' end  AS [Fiş Türü], STLINE.DATE_ AS [Fiş Tarihi], '''' AS [Fiş No], 
                        CASE WHEN INVOICE.ACCOUNTED = 1 THEN ''Muhasebeleşmiş'' ELSE ''Muhasebeleştirilmemiş'' END AS [Muhasebe Durumu], 
                        '''' AS [Fatura Durumu], INVOICE.FICHENO AS [Fatura No], CASE  MONTH(STLINE.DATE_) WHEN 1 THEN ''01.OCAK'' WHEN 2 THEN ''02.ŞUBAT'' WHEN 3 THEN ''03.MART'' WHEN 4 THEN ''04.NİSAN'' WHEN 5 THEN ''05.MAYIS'' WHEN 6 THEN ''06.HAZİRAN''
					  WHEN 7 THEN ''07.TEMMUZ'' WHEN 8 THEN ''08.AĞUSTOS'' WHEN 9 THEN ''09.EYLÜL'' WHEN 10 THEN ''10.EKİM'' WHEN 11 THEN ''11.KASIM'' ELSE ''12.ARALIK'' END AS [Fiş Ayı], 
                        (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1) AS Miktar, STLINE.VAT AS Kdv, STLINE.VATMATRAH AS [Kdv Hariç], 
                        STLINE.VATAMNT AS [Kdv Tutarı], ''Hizmet'' AS [Satır Tipi],ISNULL((SELECT CODE FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Kodu],ISNULL((SELECT DEFINITION_  FROM {DATABASE}LG_SLSMAN WHERE LOGICALREF=STLINE.SALESMANREF),'''') AS [Satıcı Adı]
 ,(STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1)) AS Maliyet,STLINE.DIFFPRICE*-1 as [Satış Fiyat Farkı],
 (STLINE.VATMATRAH - STLINE.OUTCOST * (STLINE.AMOUNT*STLINE.UINFO2/STLINE.UINFO1))+STLINE.DIFFPRICE AS Kar ,YEAR(STLINE.DATE_) AS [Fiş Yılı],
			CLCARD.CITY AS [Şehir]
 FROM         {DATABASE}LG_{FIRMA}_{DONEM}_STLINE STLINE WITH(NOLOCK)  LEFT OUTER JOIN
            {DATABASE}LG_{FIRMA}_CLCARD CLCARD WITH(NOLOCK) ON STLINE.CLIENTREF = CLCARD.LOGICALREF INNER JOIN
             {DATABASE}LG_{FIRMA}_SRVCARD SRVCARD WITH(NOLOCK) ON STLINE.STOCKREF = SRVCARD.LOGICALREF INNER JOIN
            {DATABASE}LG_{FIRMA}_{DONEM}_INVOICE INVOICE WITH(NOLOCK) ON STLINE.INVOICEREF = INVOICE.LOGICALREF
 WHERE     (STLINE.LINETYPE = 4) AND (STLINE.CANCELLED = 0) And STLINE.TRCODE IN (2,3,7,8,9)
AND (@_CARIKOD='''' OR CLCARD.CODE LIKE REPLACE(@_CARIKOD,''*'',''%'')) AND (@_MLZKOD='''' OR SRVCARD.CODE LIKE REPLACE(@_MLZKOD,''*'',''%'')) 
AND (STLINE.DATE_ BETWEEN @_BASTAR AND @_BITTAR))', 4001, 4000)

      SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)

     EXECUTE sp_executesql @QUERY, @PARAMETRELER, @_BASTAR = @_BASTAR_VALUE, @_BITTAR = @_BITTAR_VALUE, @_CARIKOD = @_CARIKOD_VALUE, @_MLZKOD = @_MLZKOD_VALUE;
END
GO