 

--EXEC  [EMY_BILANCO] '','119','01','20190101','20191231' 

ALTER PROCEDURE [dbo].[EMY_BILANCO] @DB NVARCHAR(50), @FIRM NVARCHAR(3), @DONEM NVARCHAR(2)  , @_BASTAR_VALUE DATETIME,
                                      @_BITTAR_VALUE DATETIME 
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
	 DECLARE @PARAMETRELER NVARCHAR(MAX)
	 SET @PARAMETRELER = N'@_BASTAR DATETIME,@_BITTAR DATETIME'
     SET @QUERY1 =  '
select EMUHACC.LOGICALREF as Referans,
CASE WHEN SUBSTRING(EMFLINE.KEBIRCODE,1,1)<3 THEN  ''Aktif Varlýklar''  ELSE ''Pasif Varlýklar'' END as Tip1, 
CASE WHEN SUBSTRING(EMFLINE.KEBIRCODE,1,1)=1 THEN  ''I.DÖNEN VARLIKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=2) THEN  ''II.DURAN VARLIKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=3) THEN  ''I.KISA VADELÝ YABANCI KAYNAKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=4) THEN  ''II.UZUN VADELÝ YABANCI KAYNAKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=5) THEN  ''III.ÖZ KAYNAKLAR''  ELSE ''DÝÐER'' END ) END ) END ) END ) END as Tip2, 
CASE  SUBSTRING(EMFLINE.KEBIRCODE,1,2) WHEN 10 THEN  ''A.HAZIR DEÐERLER''  
WHEN 11 THEN  ''B.MENKUL KIYMETLER''  
WHEN 12 THEN  ''C.TÝCARÝ ALACAKLAR''  
WHEN 13 THEN  ''D.DÝÐER ALACAKLAR''  
WHEN 15 THEN  ''E.STOKLAR'' 
WHEN 17 THEN  ''F.YILLARA YAYGIN ÝNÞAAT VE ONARIM MALÝYETLERÝ'' 
WHEN 18 THEN  ''G.GELECEK AYLARA AÝT GÝDERLER VE GELÝR TAHAKUKLARI'' 
WHEN 19 THEN  ''H.DÝÐER DÖNEN VARLIKLAR'' 
WHEN 22 THEN  ''A.TÝCARÝ ALACAKLAR''
WHEN 23 THEN  ''B.DÝÐER ALACAKLAR''
WHEN 24 THEN  ''C.MALÝ DURAN VARLIKLAR''
WHEN 25 THEN  ''D.MADDÝ DURAN VARLIKLAR''
WHEN 26 THEN  ''E.MADDÝ OLMAYAN DURAN VARLIKLAR''
WHEN 27 THEN  ''F.ÖZEL TÜKENMEYE TABÝ VARLIKLAR ''
WHEN 28 THEN  ''G.GELECEK YILLARA AÝD GÝDERLER VE GELÝR TAHAKUKLARI''  
WHEN 29 THEN  ''H.DÝÐER DURAN VARLIKLAR'' 
WHEN 30 THEN  ''A.MALÝ BORÇLAR''
WHEN 32 THEN  ''B.TÝCARÝ BORÇLAR'' 
WHEN 33 THEN  ''C.DÝÐER BORÇLAR'' 
WHEN 34 THEN  ''D.ALINAN AVANSLAR'' 
WHEN 35 THEN  ''E.YILLARA YAYGIN ÝNÞAAT VE ONARIM HAKEDÝÞLERÝ'' 
WHEN 36 THEN  ''F.ÖDENECEK VERGÝ VE DÝÐER HÜKÜMLÜKLER'' 
WHEN 37 THEN  ''G.BORÇ VE GÝDER KARÞILIKLARI'' 
WHEN 38 THEN  ''H.GELECEK AYLARA AÝD GELÝRLER VE GÝDER TAHAKUKLARI'' 
WHEN 39 THEN  ''J.DÝÐER KISA VADELÝ YABANCI KAYNAKLAR'' 
WHEN 40 THEN  ''A.MALÝ BORÇLAR''
WHEN 42 THEN  ''B.TÝCARÝ BORÇLAR'' 
WHEN 43 THEN  ''C.DÝÐER BORÇLAR'' 
WHEN 44 THEN  ''D.ALINAN AVANSLAR'' 
WHEN 47 THEN  ''E.BORÇ VE GÝDER KARÞILIKLARI'' 
WHEN 48 THEN  ''F.GELECEK YILLARA AÝD GELÝRLER VE GÝDER TAHAKUKLARI'' 
WHEN 49 THEN  ''G.DÝÐER UZUN VADELÝ YABANCI KAYNAKLAR'' 
WHEN 50 THEN  ''A.ÖDENMÝÞ SERMAYE''
WHEN 52 THEN  ''B.SERMAYE YEDEKLERÝ''
WHEN 54 THEN  ''C.KAR YEDEKLERÝ''
WHEN 57 THEN  ''D.GEÇMÝÞ YILLAR KARLARI''
WHEN 58 THEN  ''E.GEÇMÝÞ YILLAR ZARARLARI''
WHEN 59 THEN  ''F.DÖNEM NET KARI (ZARARI)''
ELSE ''DÝÐER'' END  as Tip3,
CASE  EMFLINE.KEBIRCODE 
WHEN	100	 THEN	''     01. Kasa''
WHEN	101	 THEN	''     02. Alýnan Çekler''
WHEN	102	 THEN	''     03. Banka''
WHEN	103	 THEN	''     04. Verilen Çekler ve Ödeme Emirleri (-)''
WHEN	108	 THEN	''     05. Diðer Hazýr Deðerler''
WHEN	110	 THEN	''     01. Hisse Senetleri              ''
WHEN	111	 THEN	''     02. Özel Kesim Tahvil, Senet ve Bonolarý''
WHEN	112	 THEN	''     03. Kamu Kesimi Tahvil, Senet ve Bonolarý      ''
WHEN	118	 THEN	''     04. Diðer Menkul Kýymetler ''
WHEN	119	 THEN	''     05. Menkul Kýymetler Deðer Düþüklüðü Karþýlýðý (-)''
WHEN	120	 THEN	''     01. Alýcýlar''
WHEN	121	 THEN	''     02. Alacak Senetleri''
WHEN	122	 THEN	''     03. Alacak Senetleri Reeskontu (-)''
WHEN	126	 THEN	''     04. Verilen Depozito ve Teminatlar''
WHEN	127	 THEN	''     05. Diðer Ticari Alacaklar''
WHEN	128	 THEN	''     06. Þüpheli Ticari Alacaklar''
WHEN	129	 THEN	''     07. Þüpheli Ticari Alacaklar Karþýlýðý (-)''
WHEN	131	 THEN	''     01. Ortaklardan Alacaklar''
WHEN	132	 THEN	''     02. Ýþtiraklerden Alacaklar''
WHEN	133	 THEN	''     03. Baðlý Ortaklýklardan Alacaklar''
WHEN	135	 THEN	''     04. Personelden Alacaklar ''
WHEN	136	 THEN	''     05. Diðer Çeþitli Alacaklar''
WHEN	137	 THEN	''     06. Diðer Alacak Senetleri Reeskontu (-)''
WHEN	138	 THEN	''     07. Þüpheli Diðer Alacaklar''
WHEN	139	 THEN	''     08. Þüpheli Diðer Alacaklar Karþýlýðý (-)''
WHEN	150	 THEN	''     01. Ýlk Madde ve Malzeme''
WHEN	151	 THEN	''     02. Yarý Mamuller - Üretim''
WHEN	152	 THEN	''     03. Mamuller''
WHEN	153	 THEN	''     04. Ticari Mallar ''
WHEN	157	 THEN	''     05. Diðer Stoklar''
WHEN	158	 THEN	''     06. Stok Deðer Düþüklüðü Karþýlýðý (-) ''
WHEN	159	 THEN	''     07. Verilen Sipariþ Avanslarý''
WHEN	170	 THEN	''     01. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	171	 THEN	''     02. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	172	 THEN	''     03. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	173	 THEN	''     04. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	174	 THEN	''     05. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	175	 THEN	''     06. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	176	 THEN	''     07. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	177	 THEN	''     08. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	178	 THEN	''     09. Yýllara Yaygýn Ýnþaat ve Onarým Maliyetleri''
WHEN	179	 THEN	''     10. Taþeronlara Verilen Avanslar''
WHEN	180	 THEN	''     01. Gelecek Aylara Ait Giderler''
WHEN	181	 THEN	''     02. Gelir Tahakkuklarý''
WHEN	190	 THEN	''     01. Devreden KDV''
WHEN	191	 THEN	''     02. Ýndirilecek Katma Deðer Vergisi''
WHEN	192	 THEN	''     03. Diðer Katma Deðer Vergisi''
WHEN	193	 THEN	''     04. Peþin Ödenen Vergiler ve Fonlar''
WHEN	195	 THEN	''     05. Ýþ Avanslarý''
WHEN	196	 THEN	''     06.  Personel Avanslarý''
WHEN	197	 THEN	''     07. Sayým ve Tesellüm Noksanlarý''
WHEN	198	 THEN	''     08. Diðer Çeþitli Dönen Varlýklar''
WHEN	199	 THEN	''     09. Diðer Dönen Varlýklar Karþýlýðý (-)''
WHEN	220	 THEN	''     01. Alýcýlar''
WHEN	221	 THEN	''     02. Alacak Senetleri''
WHEN	222	 THEN	''     03. Alacak Senetleri Reeskontu (-)''
WHEN	226	 THEN	''     04. Verilen Depozito ve Teminatlar''
WHEN	229	 THEN	''     05. Þüpheli Alacaklar Karþýlýðý (-)''
WHEN	231	 THEN	''     01. Ortaklardan Alacaklar''
WHEN	232	 THEN	''     02. Ýþtiraklerden Alacaklar''
WHEN	233	 THEN	''     03. Baðlý Ortaklýklardan Alacaklar''
WHEN	235	 THEN	''     04. Personelden Alacaklar'' '
SET @QUERY2 =  '
WHEN	236	 THEN	''     05. Diðer Çeþitli Alacaklar''
WHEN	237	 THEN	''     06. Diðer Alacak Senetleri Reeskontu (-)''
WHEN	239	 THEN	''     07. Þüpheli Diðer Alacaklar Karþýlýðý (-)''
WHEN	240	 THEN	''     01. Baðlý Menkul Kýymetler''
WHEN	241	 THEN	''     02. Baðlý Menkul Kýymetler Deðer Düþüklüðü Karþýlýðý (-)''
WHEN	242	 THEN	''     03. Ýþtirakler''
WHEN	243	 THEN	''     04. Ýþtiraklere Sermaye Taahhütleri (-)''
WHEN	244	 THEN	''     05. Ýþtirakler Sermaye Paylarý Deðer Düþüklüðü Karþýlýðý (-)''
WHEN	245	 THEN	''     06. Baðlý Ortaklýklar''
WHEN	246	 THEN	''     07. Baðlý Ortaklýklara Sermaye Taahhütleri (-)''
WHEN	247	 THEN	''     08. Baðlý Ortaklýklar Sermaye Paylarý Deðer Düþüklüðü Karþýlýðý (-)''
WHEN	248	 THEN	''     09. Diðer Mali Duran Varlýklar''
WHEN	249	 THEN	''     10. Diðer Mali Duran Varlýklar Deðer Düþüklüðü Karþýlýðý (-)''
WHEN	250	 THEN	''     01. Arazi ve Arsalar''
WHEN	251	 THEN	''     02. Yer Altý ve Yer Üstü Düzenleri''
WHEN	252	 THEN	''     03. Binalar''
WHEN	253	 THEN	''     04. Tesis, Makine ve Cihazlar''
WHEN	254	 THEN	''     05. Taþýtlar''
WHEN	255	 THEN	''     06. Demirbaþlar''
WHEN	256	 THEN	''     07. Diðer Maddi Duran Varlýklar''
WHEN	257	 THEN	''     08. Birikmiþ Amortismanlar (-)''
WHEN	258	 THEN	''     09. Yapýlmakta Olan Yatýrýmlar''
WHEN	259	 THEN	''     10. Verilen Avanslar''
WHEN	260	 THEN	''     01. Haklar''
WHEN	261	 THEN	''     02. Þerefiye''
WHEN	262	 THEN	''     03. Kuruluþ ve Örgütlenme Giderleri''
WHEN	263	 THEN	''     04. Araþtýrma ve Geliþtirme Giderleri''
WHEN	264	 THEN	''     05. Özel Maliyetler''
WHEN	267	 THEN	''     06. Diðer Maddi Olmayan Duran Varlýklar''
WHEN	268	 THEN	''     07. Birikmiþ Amortismanlar (-)''
WHEN	269	 THEN	''     08. Verilen Avanslar''
WHEN	271	 THEN	''     01. Arama Giderleri''
WHEN	272	 THEN	''     02. Hazýrlýk ve Geliþtirme Giderleri''
WHEN	277	 THEN	''     03. Diðer Özel Tükenmeye Tabi Varlýklar''
WHEN	278	 THEN	''     04. Birikmiþ Tükenme Paylarý (-)''
WHEN	279	 THEN	''     05. Verilen Avanslar''
WHEN	280	 THEN	''     01. Gelecek Yýllara Ait Giderler''
WHEN	281	 THEN	''     02. Gelir Tahakkuklarý''
WHEN	291	 THEN	''     01. Gelecek Yýllarda Ýndirilecek Katma Deðer Vergisi''
WHEN	292	 THEN	''     02. Diðer Katma Deðer Vergisi''
WHEN	295	 THEN	''     03. Peþin Ödenen Vergiler ve Fonlar''
WHEN	297	 THEN	''     04. Diðer Çeþitli Duran Varlýklar''
WHEN	300	 THEN	''      01. Banka Kredileri''
WHEN	303	 THEN	''      02. Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri''
WHEN	304	 THEN	''      03. Tahvil Anapara Borç, Taksit ve Faizleri''
WHEN	305	 THEN	''      04. Çýkarýlmýþ Bonolar ve Senetler''
WHEN	306	 THEN	''      05. Çýkarýlmýþ Diðer Menkul Kýymetler''
WHEN	308	 THEN	''      06. Menkul Kýymetler Ýhraç Farký (-)''
WHEN	309	 THEN	''      07. Diðer Mali Borçlar''
WHEN	320	 THEN	''      01. Satýcýlar''
WHEN	321	 THEN	''      02. Borç Senetleri''
WHEN	322	 THEN	''      03. Borç Senetleri Reeskontu (-)''
WHEN	326	 THEN	''      04. Alýnan Depozito ve Teminatlar''
WHEN	329	 THEN	''      05. Diðer Ticari Borçlar''
WHEN	331	 THEN	''      01. Ortaklara Borçlar''
WHEN	332	 THEN	''      02. Ýþtiraklere Borçlar''
WHEN	333	 THEN	''      03. Baðlý Ortaklýklara Borçlar''
WHEN	335	 THEN	''      04. Personele Borçlar''
WHEN	336	 THEN	''      05. Diðer Çeþitli Borçlar''
WHEN	337	 THEN	''      06. Diðer Borç Senetleri Reeskontu (-)''
WHEN	340	 THEN	''      01. Alýnan Sipariþ Avanslarý''
WHEN	349	 THEN	''      02. Alýnan Diðer Avanslar''
WHEN	350	 THEN	''      01. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	351	 THEN	''      02. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	352	 THEN	''      03. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	353	 THEN	''      04. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	354	 THEN	''      05. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	355	 THEN	''      06. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	356	 THEN	''      07. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	357	 THEN	''      08. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	358	 THEN	''      09. Yýllara Yaygýn Ýnþaat ve Onarým Hakediþ Bedelleri''
WHEN	360	 THEN	''      01. Ödenecek Vegi ve Fonlar''
WHEN	361	 THEN	''      02. Ödenecek Sosyal Güvenlik Kesintileri''
WHEN	368	 THEN	''      03. Vadesi Geçmiþ Ertelenmiþ Veya Taksitlendirilmiþ Vergi ve Diðer Yüküml.''
WHEN	369	 THEN	''      04. Ödenecek Diðer Yükümlülükler''
WHEN	370	 THEN	''      01. Dönem Karý Vergi ve Diðer Yasal Yükümlülük Karþýlýklarý''
WHEN	371	 THEN	''      02. Dönem Karýnýn Peþin Ödenen Vergi ve Diðer Yükümlülükleri (-)''
WHEN	372	 THEN	''      03. Kýdem Tazminatý Karþýlýðý''
WHEN	373	 THEN	''      04. Maliyet Giderleri Karþýlýðý''
WHEN	379	 THEN	''      05. Diðer Borç ve Gider Karþýlýklarý''
WHEN	380	 THEN	''      01. Gelecek Aylara Ait Gelirler''
WHEN	381	 THEN	''      02. Gider Tahakkuklarý''
WHEN	391	 THEN	''      01. Hesaplanan KDV''
WHEN	392	 THEN	''      02. Diðer KDV''
WHEN	393	 THEN	''      03. Merkez ve Þubeler Cari Hesabý''
WHEN	397	 THEN	''      04. Sayým ve Tesellüm Fazlalarý''
WHEN	399	 THEN	''      05. Diðer Çeþitli Yabancý Kaynaklar''
WHEN	400	 THEN	''      01. Banka Kredileri''
WHEN	405	 THEN	''      02. Çýkarýlmýþ Tahviller''
WHEN	407	 THEN	''      03. Çýkarýlmýþ Diðer Menkul Kýymetler''
WHEN	408	 THEN	''      04. Menkul Kýymetler Ýhraç Farký (-)''
WHEN	409	 THEN	''      05. Diðer Mali Borçlar''
WHEN	420	 THEN	''      01. Satýcýlar''
WHEN	421	 THEN	''      02. Borç Senetleri''
WHEN	422	 THEN	''      03. Borç Senetleri Reeskontu (-)''
WHEN	426	 THEN	''      04. Alýnan Depozito ve Teminatlar''
WHEN	429	 THEN	''      05. Diðer Ticari Borçlar''
WHEN	431	 THEN	''      01. Ortaklara Borçlar''
WHEN	432	 THEN	''      02. Ýþtiraklere Borçlar''
WHEN	433	 THEN	''      03. Baðlý Ortaklýklara Borçlar''
WHEN	436	 THEN	''      04. Diðer Çeþitli Borçlar''
WHEN	437	 THEN	''      05. Diðer Borç Senetleri Reeskontu (-)''
WHEN	438	 THEN	''      06. Kamuya Olan Ertelenmiþ Veya Taksitlendirilmiþ Borçlar''
WHEN	472	 THEN	''      01. Kýdem Tazminatý Karþýlýðý''
WHEN	479	 THEN	''      02. Diðer Borç ve Gider Karþýlýklarý''
WHEN	480	 THEN	''      01. Gelecek Yýllara Ait Gelirler''
WHEN	481	 THEN	''      02. Gider Tahakkuklarý''
WHEN	492	 THEN	''      01. Gelecek Yýllara Ertelenen Veya Terkin Edilen Katma Deðer Vergisi''
WHEN	493	 THEN	''      02. Tesise Katýlma Paylarý''
WHEN	499	 THEN	''      03. Diðer Çeþitli Uzun Vadeli Yabancý Kaynaklar''
WHEN	500	 THEN	''      01. Sermaye'' '
SET @QUERY3 =  '
WHEN	501	 THEN	''      02. Ödenmemiþ Sermaye (-)''
WHEN	520	 THEN	''      01. Hisse Senetleri Ýhraç Primleri''
WHEN	521	 THEN	''      02. Hisse Senedi Ýptal Karlarý''
WHEN	522	 THEN	''      03. M.D.V. Yeniden Deðerleme Artýþlarý''
WHEN	523	 THEN	''      04. Ýþtirakler Yeniden Deðerleme Artýþlarý''
WHEN	529	 THEN	''      05. Diðer Sermaye Yedekleri''
WHEN	540	 THEN	''      01. Yasal Yedekler''
WHEN	541	 THEN	''      02. Statü Yedekleri''
WHEN	542	 THEN	''      03. Olaðanüstü Yedekler''
WHEN	548	 THEN	''      04. Diðer Kar Yedekleri''
WHEN	549	 THEN	''      05. Özel Fonlar''
WHEN	570	 THEN	''    D GEÇMÝÞ YILLAR KARLARI''
WHEN	580	 THEN	''    E GEÇMÝÞ YILLAR ZARARLARI (-)''
WHEN	590	 THEN	''      01. Dönem Net Karý''
WHEN	591	 THEN	''      02. Dönem Net Zararý (-)''




ELSE ''DÝÐER'' END Tip4, 
EMUHACC.code as [HesapKodu],EMUHACC.DEFINITION_ as [HesapAdi],
ROUND(SUM(EMFLINE.DEBIT - EMFLINE.CREDIT),2) as [Deger]

from 


{DATABASE}LG_{FIRMA}_{DONEM}_EMFICHE EMFICHE,{DATABASE}LG_{FIRMA}_{DONEM}_EMFLINE EMFLINE,{DATABASE}LG_{FIRMA}_EMUHACC EMUHACC

WHERE

EMFICHE.LOGICALREF=EMFLINE.ACCFICHEREF  AND  EMFLINE.ACCOUNTREF=EMUHACC.LOGICALREF    AND SUBSTRING(EMFLINE.KEBIRCODE,1,1)<6

AND (EMFLINE.DATE_  BETWEEN @_BASTAR AND @_BITTAR)
GROUP BY  EMFLINE.KEBIRCODE,EMUHACC.code,EMUHACC.DEFINITION_ ,EMUHACC.LOGICALREF
' 




 

     SET @QUERY = @QUERY1 + @QUERY2 + @QUERY3 + @QUERY4 + @QUERY5 + @QUERY6 + @QUERY7 + @QUERY8 + @QUERY9 + @QUERY10 + @QUERY11 + @QUERY12 + @QUERY13 + @QUERY14 + @QUERY15 + @QUERY16 + @QUERY17 + @QUERY18 + @QUERY19 + @QUERY20
      SET @QUERY = REPLACE(REPLACE(REPLACE(@QUERY, '{DATABASE}',@DB), '{FIRMA}',@FIRM), '{DONEM}', @DONEM)
	 -- select @QUERY
     EXECUTE sp_executesql @QUERY, @PARAMETRELER, @_BASTAR = @_BASTAR_VALUE, @_BITTAR = @_BITTAR_VALUE

     
END
GO


