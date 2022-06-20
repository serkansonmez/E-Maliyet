﻿USE TIGER_FERCAM
GO
SET ANSI_NULLS, QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE DP_RAPOR_ISLEMTARALACAK @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2) ,
                                      @_RAPTAR_VALUE DATETIME,
                                      @_CARKOD_VALUE NVARCHAR(50)
 
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

     SET @PARAMETRELER = N'@_RAPTAR DATETIME,@_CARKOD NVARCHAR(50)';

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

     SET @QUERY1 = SUBSTRING('--- 320 ALACAK VADE ANALİZİ
DECLARE @TARIH_1 DATE
DECLARE @TARIH_2 DATE
DECLARE @CLIENTREF integer
DECLARE @B_PAYPLANREF integer
DECLARE @B_VADE_TARIHI DATE
DECLARE @B_GIRIS_TARIHI DATE
DECLARE @B_ISLEM_TIPI varchar(55)
DECLARE @B_TUTAR AS FLOAT
DECLARE @K_PAYPLANREF AS integer 
Declare @K_VADE_TARIHI as date 
Declare @K_GIRIS_TARIHI as date 
Declare @K_ISLEM_TIPI as varchar(50) 
Declare @K_ISLEM_TUTAR as float
DECLARE @B_LOGICALREF integer declare @B_CARDREF AS integer DECLARE @B_DATE DATE DECLARE @B_PROCDATE DATE DECLARE @B_TRCODE integer declare @B_TOTAL float
DECLARE @A_LOGICALREF integer declare @A_CARDREF AS integer DECLARE @A_DATE DATE DECLARE @A_PROCDATE DATE DECLARE @A_TRCODE integer declare @A_TOTAL float
DECLARE @B_KALAN AS FLOAT DECLARE @A_KALAN AS FLOAT DECLARE @B_KAPANAN AS FLOAT
DECLARE @TABLO_SAY AS FLOAT
-- DY Paytrans Tablosu Oluþturuluyor
SET @TABLO_SAY = (SELECT COUNT(id) FROM {DATABASE}..sysobjects WHERE  NAME LIKE ''DY_PAYTRANS'')
IF @TABLO_SAY > 0 
	BEGIN
		DROP TABLE {DATABASE}..DY_PAYTRANS
	END
	SELECT * INTO  {DATABASE}..DY_PAYTRANS 
	FROM (
		SELECT 	PAYTRANS.LOGICALREF + 900000000 LOGICALREF,	PAYTRANS.CARDREF CARDREF,PAYTRANS.DATE_ DATE_,0 FTIME,PAYTRANS.PROCDATE PROCDATE,PAYTRANS.TRCODE  TRCODE,
	ROUND((CASE WHEN PAYTRANS.TRCURR IN (0,160) THEN PAYTRANS.TOTAL ELSE PAYTRANS.TOTAL * PAYTRANS.TRRATE END),2) TOTAL,PAYTRANS.FICHEREF FICHEREF,
	PAYTRANS.SIGN SIGN,	PAYTRANS.PAIDINCASH PAIDINCASH,	PAYTRANS.CLOSINGRATE  CLOSINGRATE,	PAYTRANS.CANCELLED CANCELLED
FROM   {DATABASE}LG_{FIRMA}_{DONEM}_PAYTRANS PAYTRANS	WHERE   PAYTRANS.CANCELLED =0  
	
UNION ALL

SELECT CLFLINE.LOGICALREF+ 800000000 LOGICALREF,CLFLINE.CLIENTREF CARDREF,CLFLINE.DATE_,0 FTIME,CLFLINE.DATE_ PROCDATE,CLFLINE.TRCODE,CLFLINE.AMOUNT AS TOTAL,
CLFLINE.SOURCEFREF FICHEREF,CLFLINE.SIGN,0 PAIDINCASH,0 CLOSINGRATE,CLFLINE.CANCELLED
 FROM {DATABASE}LG_{FIRMA}_{DONEM}_CLFLINE	CLFLINE WHERE CLFLINE.MODULENR=5 AND CLFLINE.TRCODE=6 AND CLFLINE.CANCELLED=0
		) Paytrans
		  CREATE UNIQUE INDEX [LOGICALREF] ON {DATABASE}..DY_PAYTRANS (LOGICALREF ASC)
		  CREATE INDEX CARDREF ON {DATABASE}..DY_PAYTRANS (CARDREF ASC)

--   DY Borc Takip Tablosunun Oluþturulması
SET @TABLO_SAY = (SELECT COUNT(id) FROM {DATABASE}..sysobjects WHERE  NAME LIKE ''DY_BorcTakip'')
IF @TABLO_SAY > 0 
	BEGIN
		DROP TABLE {DATABASE}..DY_BorcTakip
	END
	CREATE TABLE {DATABASE}..[DY_BorcTakip](
		[LOGICALREF] [int] IDENTITY(1,1) NOT NULL,
		[CLIENTREF] [int] NULL,
		[B_PAYPLANREF] [int] NULL,
		[B_VADE_TARIHI] [date] NULL,
		[B_GIRIS_TARIHI] [date] NULL,
		[B_ISLEM_TIPI] [nvarchar](50) NULL,
		[B_TUTAR] [float] NULL,
		[K_PAYPLANREF] [int] NULL,
		[K_VADE_TARIHI] [date] NULL,
		[K_GIRIS_TARIHI] [date] NULL,
		[K_ISLEM_TIPI] [nvarchar](50) NULL,
		[K_ISLEM_TUTAR] [float] NULL,
	 CONSTRAINT [PK_DY_BorcTakip] PRIMARY KEY CLUSTERED 
	(
		[LOGICALREF] ASC
	)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
	) ON [PRIMARY]
----------------------------------------------------------
SET @TARIH_1 = ''20000101''
SET @TARIH_2 = @_RAPTAR
DECLARE CariHesap Cursor For

SELECT LOGICALREF  FROM (
SELECT CLFLINE.CLIENTREF  LOGICALREF, SUM(CASE WHEN SIGN = 1 THEN AMOUNT ELSE 0-AMOUNT END) BAKIYE  
FROM {DATABASE}..LG_{FIRMA}_{DONEM}_CLFLINE CLFLINE
	LEFT JOIN {DATABASE}..LG_{FIRMA}_{DONEM}_INVOICE INVOICE ON CLFLINE.SOURCEFREF = INVOICE.LOGICALREF AND CLFLINE.MODULENR = 4
WHERE   ISNULL(INVOICE.FROMKASA,0) = 0 AND CLFLINE.DATE_ BETWEEN @TARIH_1 AND @TARIH_2 AND CLFLINE.CANCELLED =0 --and CLFLINE.CLIENTREF = 2
GROUP BY CLFLINE.CLIENTREF) D WHERE D.BAKIYE >0

OPEN CariHesap
FETCH NEXT FROM CariHesap INTO @CLIENTREF
WHILE @@FETCH_STATUS =0
BEGIN

DECLARE Borc Cursor For
	SELECT LOGICALREF,CARDREF,DATE_,PROCDATE,TRCODE,TOTAL  
	FROM   {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN =1 AND CANCELLED=0 AND PAIDINCASH = 0 AND CLOSINGRATE = 0 AND PROCDATE BETWEEN @TARIH_1 AND @TARIH_2   
	ORDER BY CARDREF,PROCDATE,FTIME
	
DECLARE Alacak Cursor For
	SELECT LOGICALREF,CARDREF,DATE_,PROCDATE,TRCODE,TOTAL  
	FROM   {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN =0 AND CANCELLED=0 AND PAIDINCASH = 0 AND CLOSINGRATE = 0 AND PROCDATE BETWEEN @TARIH_1 AND @TARIH_2   
	ORDER BY CARDREF,PROCDATE,FTIME
OPEN Alacak
FETCH NEXT FROM ALACAK INTO @A_LOGICALREF,@A_CARDREF,@A_DATE,@A_PROCDATE,@A_TRCODE,@A_TOTAL
	IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
	BEGIN 
		SET @A_TOTAL = 0
	END 
	OPEN Borc
		FETCH NEXT FROM Borc INTO @B_LOGICALREF,@B_CARDREF,@B_DATE,@B_PROCDATE,@B_TRCODE,@B_TOTAL
			SET @B_KALAN = @B_TOTAL
			SET @A_KALAN = @A_TOTAL 
			WHILE @@FETCH_STATUS =0
				BEGIN   
TEKRAR:
					SET @B_KALAN = @B_KALAN - @A_KALAN 
					IF @B_KALAN > 0 
						BEGIN
							IF @A_KALAN > 0 
								BEGIN
									INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
									values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@A_KALAN,2),@A_LOGICALREF,@A_DATE,@A_PROCDATE,ROUND(@A_KALAN,2))
								END 
							FETCH NEXT FROM ALACAK INTO @A_LOGICALREF,@A_CARDREF,@A_DATE,@A_PROCDATE,@A_TRCODE,@A_TOTAL
								IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
									BEGIN 
										INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
										values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@B_KALAN,2),NULL,NULL,NULL,0)
									
										INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
										SELECT CARDREF,	LOGICALREF,DATE_,PROCDATE ,TOTAL,null ,NULL ,null ,0  FROM {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN = 1 AND CANCELLED =0 AND PAIDINCASH = 0 AND  CLOSINGRATE = 0 AND  PROCDATE BETWEEN @TARIH_1 AND @TARIH_2 AND  LOGICALREF NOT IN (SELECT B_PAYPLANREF  FROM {DATABASE}..DY_BorcTakip WHERE CLIENTREF =  @CLIENTREF)
											
										goto BITIR
										SET @A_KALAN = 0
									END 
								IF @@FETCH_STATUS = 0  -- Alacak Kaydy bulunamazsa i?lemi bo? geçiyor
									BEGIN 
										SET @A_KALAN = @A_TOTAL
									END
							GOTO TEKRAR
						END 
						IF @B_KALAN = 0 OR @B_KALAN < 0
							BEGIN 
								SET @B_KAPANAN = @B_KALAN + @A_KALAN 
								INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
								values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@B_KAPANAN,2),@A_LOGICALREF,@A_DATE,@A_PROCDATE,ROUND(@B_KAPANAN,2))
								SET @A_KALAN  = @A_KALAN - @B_KAPANAN
								FETCH NEXT FROM Borc INTO @B_LOGICALREF,@B_CARDREF,@B_DATE,@B_PROCDATE,@B_TRCODE,@B_TOTAL
								IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
									BEGIN 
										GOTO BITIR
									END 
								SET @B_KALAN = @B_TOTAL
								GOTO TEKRAR
							END
						END
BITIR:
CLOSE Borc
DEALLOCATE Borc
CLOSE ALACAK
DEALLOCATE ALACAK
FETCH NEXT FROM CariHesap INTO @CLIENTREF
END
CLOSE CariHesap
DEALLOCATE CariHesap

select C.CODE AS [Cari Hesap Kodu],c.DEFINITION_ as [Cari Hesap Ünvanı],c.SPECODE as [Özel Kod],b.B_TUTAR as [Tutar] ,year(b.B_GIRIS_TARIHI) as [Yıl],MONTH(b.B_GIRIS_TARIHI) as [Ay],b.B_GIRIS_TARIHI as [İşlem Tarihi]
from DY_BorcTakip as b INNER JOIN {DATABASE}LG_{FIRMA}_CLCARD C ON C.LOGICALREF=B.CLIENTREF
WHERE B.K_ISLEM_TUTAR=0
', 1, 4000)
     SET @QUERY2 = SUBSTRING('--- 320 ALACAK VADE ANALİZİ
DECLARE @TARIH_1 DATE
DECLARE @TARIH_2 DATE
DECLARE @CLIENTREF integer
DECLARE @B_PAYPLANREF integer
DECLARE @B_VADE_TARIHI DATE
DECLARE @B_GIRIS_TARIHI DATE
DECLARE @B_ISLEM_TIPI varchar(55)
DECLARE @B_TUTAR AS FLOAT
DECLARE @K_PAYPLANREF AS integer 
Declare @K_VADE_TARIHI as date 
Declare @K_GIRIS_TARIHI as date 
Declare @K_ISLEM_TIPI as varchar(50) 
Declare @K_ISLEM_TUTAR as float
DECLARE @B_LOGICALREF integer declare @B_CARDREF AS integer DECLARE @B_DATE DATE DECLARE @B_PROCDATE DATE DECLARE @B_TRCODE integer declare @B_TOTAL float
DECLARE @A_LOGICALREF integer declare @A_CARDREF AS integer DECLARE @A_DATE DATE DECLARE @A_PROCDATE DATE DECLARE @A_TRCODE integer declare @A_TOTAL float
DECLARE @B_KALAN AS FLOAT DECLARE @A_KALAN AS FLOAT DECLARE @B_KAPANAN AS FLOAT
DECLARE @TABLO_SAY AS FLOAT
-- DY Paytrans Tablosu Oluþturuluyor
SET @TABLO_SAY = (SELECT COUNT(id) FROM {DATABASE}..sysobjects WHERE  NAME LIKE ''DY_PAYTRANS'')
IF @TABLO_SAY > 0 
	BEGIN
		DROP TABLE {DATABASE}..DY_PAYTRANS
	END
	SELECT * INTO  {DATABASE}..DY_PAYTRANS 
	FROM (
		SELECT 	PAYTRANS.LOGICALREF + 900000000 LOGICALREF,	PAYTRANS.CARDREF CARDREF,PAYTRANS.DATE_ DATE_,0 FTIME,PAYTRANS.PROCDATE PROCDATE,PAYTRANS.TRCODE  TRCODE,
	ROUND((CASE WHEN PAYTRANS.TRCURR IN (0,160) THEN PAYTRANS.TOTAL ELSE PAYTRANS.TOTAL * PAYTRANS.TRRATE END),2) TOTAL,PAYTRANS.FICHEREF FICHEREF,
	PAYTRANS.SIGN SIGN,	PAYTRANS.PAIDINCASH PAIDINCASH,	PAYTRANS.CLOSINGRATE  CLOSINGRATE,	PAYTRANS.CANCELLED CANCELLED
FROM   {DATABASE}LG_{FIRMA}_{DONEM}_PAYTRANS PAYTRANS	WHERE   PAYTRANS.CANCELLED =0  
	
UNION ALL

SELECT CLFLINE.LOGICALREF+ 800000000 LOGICALREF,CLFLINE.CLIENTREF CARDREF,CLFLINE.DATE_,0 FTIME,CLFLINE.DATE_ PROCDATE,CLFLINE.TRCODE,CLFLINE.AMOUNT AS TOTAL,
CLFLINE.SOURCEFREF FICHEREF,CLFLINE.SIGN,0 PAIDINCASH,0 CLOSINGRATE,CLFLINE.CANCELLED
 FROM {DATABASE}LG_{FIRMA}_{DONEM}_CLFLINE	CLFLINE WHERE CLFLINE.MODULENR=5 AND CLFLINE.TRCODE=6 AND CLFLINE.CANCELLED=0
		) Paytrans
		  CREATE UNIQUE INDEX [LOGICALREF] ON {DATABASE}..DY_PAYTRANS (LOGICALREF ASC)
		  CREATE INDEX CARDREF ON {DATABASE}..DY_PAYTRANS (CARDREF ASC)

--   DY Borc Takip Tablosunun Oluþturulması
SET @TABLO_SAY = (SELECT COUNT(id) FROM {DATABASE}..sysobjects WHERE  NAME LIKE ''DY_BorcTakip'')
IF @TABLO_SAY > 0 
	BEGIN
		DROP TABLE {DATABASE}..DY_BorcTakip
	END
	CREATE TABLE {DATABASE}..[DY_BorcTakip](
		[LOGICALREF] [int] IDENTITY(1,1) NOT NULL,
		[CLIENTREF] [int] NULL,
		[B_PAYPLANREF] [int] NULL,
		[B_VADE_TARIHI] [date] NULL,
		[B_GIRIS_TARIHI] [date] NULL,
		[B_ISLEM_TIPI] [nvarchar](50) NULL,
		[B_TUTAR] [float] NULL,
		[K_PAYPLANREF] [int] NULL,
		[K_VADE_TARIHI] [date] NULL,
		[K_GIRIS_TARIHI] [date] NULL,
		[K_ISLEM_TIPI] [nvarchar](50) NULL,
		[K_ISLEM_TUTAR] [float] NULL,
	 CONSTRAINT [PK_DY_BorcTakip] PRIMARY KEY CLUSTERED 
	(
		[LOGICALREF] ASC
	)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
	) ON [PRIMARY]
----------------------------------------------------------
SET @TARIH_1 = ''20000101''
SET @TARIH_2 = @_RAPTAR
DECLARE CariHesap Cursor For

SELECT LOGICALREF  FROM (
SELECT CLFLINE.CLIENTREF  LOGICALREF, SUM(CASE WHEN SIGN = 1 THEN AMOUNT ELSE 0-AMOUNT END) BAKIYE  
FROM {DATABASE}..LG_{FIRMA}_{DONEM}_CLFLINE CLFLINE
	LEFT JOIN {DATABASE}..LG_{FIRMA}_{DONEM}_INVOICE INVOICE ON CLFLINE.SOURCEFREF = INVOICE.LOGICALREF AND CLFLINE.MODULENR = 4
WHERE   ISNULL(INVOICE.FROMKASA,0) = 0 AND CLFLINE.DATE_ BETWEEN @TARIH_1 AND @TARIH_2 AND CLFLINE.CANCELLED =0 --and CLFLINE.CLIENTREF = 2
GROUP BY CLFLINE.CLIENTREF) D WHERE D.BAKIYE >0

OPEN CariHesap
FETCH NEXT FROM CariHesap INTO @CLIENTREF
WHILE @@FETCH_STATUS =0
BEGIN

DECLARE Borc Cursor For
	SELECT LOGICALREF,CARDREF,DATE_,PROCDATE,TRCODE,TOTAL  
	FROM   {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN =1 AND CANCELLED=0 AND PAIDINCASH = 0 AND CLOSINGRATE = 0 AND PROCDATE BETWEEN @TARIH_1 AND @TARIH_2   
	ORDER BY CARDREF,PROCDATE,FTIME
	
DECLARE Alacak Cursor For
	SELECT LOGICALREF,CARDREF,DATE_,PROCDATE,TRCODE,TOTAL  
	FROM   {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN =0 AND CANCELLED=0 AND PAIDINCASH = 0 AND CLOSINGRATE = 0 AND PROCDATE BETWEEN @TARIH_1 AND @TARIH_2   
	ORDER BY CARDREF,PROCDATE,FTIME
OPEN Alacak
FETCH NEXT FROM ALACAK INTO @A_LOGICALREF,@A_CARDREF,@A_DATE,@A_PROCDATE,@A_TRCODE,@A_TOTAL
	IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
	BEGIN 
		SET @A_TOTAL = 0
	END 
	OPEN Borc
		FETCH NEXT FROM Borc INTO @B_LOGICALREF,@B_CARDREF,@B_DATE,@B_PROCDATE,@B_TRCODE,@B_TOTAL
			SET @B_KALAN = @B_TOTAL
			SET @A_KALAN = @A_TOTAL 
			WHILE @@FETCH_STATUS =0
				BEGIN   
TEKRAR:
					SET @B_KALAN = @B_KALAN - @A_KALAN 
					IF @B_KALAN > 0 
						BEGIN
							IF @A_KALAN > 0 
								BEGIN
									INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
									values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@A_KALAN,2),@A_LOGICALREF,@A_DATE,@A_PROCDATE,ROUND(@A_KALAN,2))
								END 
							FETCH NEXT FROM ALACAK INTO @A_LOGICALREF,@A_CARDREF,@A_DATE,@A_PROCDATE,@A_TRCODE,@A_TOTAL
								IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
									BEGIN 
										INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
										values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@B_KALAN,2),NULL,NULL,NULL,0)
									
										INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
										SELECT CARDREF,	LOGICALREF,DATE_,PROCDATE ,TOTAL,null ,NULL ,null ,0  FROM {DATABASE}..DY_PAYTRANS WHERE CARDREF = @CLIENTREF AND SIGN = 1 AND CANCELLED =0 AND PAIDINCASH = 0 AND  CLOSINGRATE = 0 AND  PROCDATE BETWEEN @TARIH_1 AND @TARIH_2 AND  LOGICALREF NOT IN (SELECT B_PAYPLANREF  FROM {DATABASE}..DY_BorcTakip WHERE CLIENTREF =  @CLIENTREF)
											
										goto BITIR
										SET @A_KALAN = 0
									END 
								IF @@FETCH_STATUS = 0  -- Alacak Kaydy bulunamazsa i?lemi bo? geçiyor
									BEGIN 
										SET @A_KALAN = @A_TOTAL
									END
							GOTO TEKRAR
						END 
						IF @B_KALAN = 0 OR @B_KALAN < 0
							BEGIN 
								SET @B_KAPANAN = @B_KALAN + @A_KALAN 
								INSERT INTO {DATABASE}..DY_BorcTakip (CLIENTREF,B_PAYPLANREF,B_VADE_TARIHI,B_GIRIS_TARIHI,B_TUTAR,K_PAYPLANREF,K_VADE_TARIHI,K_GIRIS_TARIHI,K_ISLEM_TUTAR)
								values(@B_CARDREF,@B_LOGICALREF,@B_DATE,@B_PROCDATE,ROUND(@B_KAPANAN,2),@A_LOGICALREF,@A_DATE,@A_PROCDATE,ROUND(@B_KAPANAN,2))
								SET @A_KALAN  = @A_KALAN - @B_KAPANAN
								FETCH NEXT FROM Borc INTO @B_LOGICALREF,@B_CARDREF,@B_DATE,@B_PROCDATE,@B_TRCODE,@B_TOTAL
								IF @@FETCH_STATUS = -1  -- Alacak Kaydı bulunamazsa iþlemi boþ geçiyor
									BEGIN 
										GOTO BITIR
									END 
								SET @B_KALAN = @B_TOTAL
								GOTO TEKRAR
							END
						END
BITIR:
CLOSE Borc
DEALLOCATE Borc
CLOSE ALACAK
DEALLOCATE ALACAK
FETCH NEXT FROM CariHesap INTO @CLIENTREF
END
CLOSE CariHesap
DEALLOCATE CariHesap

select C.CODE AS [Cari Hesap Kodu],c.DEFINITION_ as [Cari Hesap Ünvanı],c.SPECODE as [Özel Kod],b.B_TUTAR as [Tutar] ,year(b.B_GIRIS_TARIHI) as [Yıl],MONTH(b.B_GIRIS_TARIHI) as [Ay],b.B_GIRIS_TARIHI as [İşlem Tarihi]
from DY_BorcTakip as b INNER JOIN {DATABASE}LG_{FIRMA}_CLCARD C ON C.LOGICALREF=B.CLIENTREF
WHERE B.K_ISLEM_TUTAR=0
', 4001, 4000)

      SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)

     EXECUTE sp_executesql @QUERY, @PARAMETRELER, @_RAPTAR = @_RAPTAR_VALUE, @_CARKOD = @_CARKOD_VALUE;
END
GO
