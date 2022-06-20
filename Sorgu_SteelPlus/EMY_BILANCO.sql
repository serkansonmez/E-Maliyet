 

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
CASE WHEN SUBSTRING(EMFLINE.KEBIRCODE,1,1)<3 THEN  ''Aktif Varl�klar''  ELSE ''Pasif Varl�klar'' END as Tip1, 
CASE WHEN SUBSTRING(EMFLINE.KEBIRCODE,1,1)=1 THEN  ''I.D�NEN VARLIKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=2) THEN  ''II.DURAN VARLIKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=3) THEN  ''I.KISA VADEL� YABANCI KAYNAKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=4) THEN  ''II.UZUN VADEL� YABANCI KAYNAKLAR''  ELSE 
(CASE WHEN (SUBSTRING(EMFLINE.KEBIRCODE,1,1)=5) THEN  ''III.�Z KAYNAKLAR''  ELSE ''D��ER'' END ) END ) END ) END ) END as Tip2, 
CASE  SUBSTRING(EMFLINE.KEBIRCODE,1,2) WHEN 10 THEN  ''A.HAZIR DE�ERLER''  
WHEN 11 THEN  ''B.MENKUL KIYMETLER''  
WHEN 12 THEN  ''C.T�CAR� ALACAKLAR''  
WHEN 13 THEN  ''D.D��ER ALACAKLAR''  
WHEN 15 THEN  ''E.STOKLAR'' 
WHEN 17 THEN  ''F.YILLARA YAYGIN �N�AAT VE ONARIM MAL�YETLER�'' 
WHEN 18 THEN  ''G.GELECEK AYLARA A�T G�DERLER VE GEL�R TAHAKUKLARI'' 
WHEN 19 THEN  ''H.D��ER D�NEN VARLIKLAR'' 
WHEN 22 THEN  ''A.T�CAR� ALACAKLAR''
WHEN 23 THEN  ''B.D��ER ALACAKLAR''
WHEN 24 THEN  ''C.MAL� DURAN VARLIKLAR''
WHEN 25 THEN  ''D.MADD� DURAN VARLIKLAR''
WHEN 26 THEN  ''E.MADD� OLMAYAN DURAN VARLIKLAR''
WHEN 27 THEN  ''F.�ZEL T�KENMEYE TAB� VARLIKLAR ''
WHEN 28 THEN  ''G.GELECEK YILLARA A�D G�DERLER VE GEL�R TAHAKUKLARI''  
WHEN 29 THEN  ''H.D��ER DURAN VARLIKLAR'' 
WHEN 30 THEN  ''A.MAL� BOR�LAR''
WHEN 32 THEN  ''B.T�CAR� BOR�LAR'' 
WHEN 33 THEN  ''C.D��ER BOR�LAR'' 
WHEN 34 THEN  ''D.ALINAN AVANSLAR'' 
WHEN 35 THEN  ''E.YILLARA YAYGIN �N�AAT VE ONARIM HAKED��LER�'' 
WHEN 36 THEN  ''F.�DENECEK VERG� VE D��ER H�K�ML�KLER'' 
WHEN 37 THEN  ''G.BOR� VE G�DER KAR�ILIKLARI'' 
WHEN 38 THEN  ''H.GELECEK AYLARA A�D GEL�RLER VE G�DER TAHAKUKLARI'' 
WHEN 39 THEN  ''J.D��ER KISA VADEL� YABANCI KAYNAKLAR'' 
WHEN 40 THEN  ''A.MAL� BOR�LAR''
WHEN 42 THEN  ''B.T�CAR� BOR�LAR'' 
WHEN 43 THEN  ''C.D��ER BOR�LAR'' 
WHEN 44 THEN  ''D.ALINAN AVANSLAR'' 
WHEN 47 THEN  ''E.BOR� VE G�DER KAR�ILIKLARI'' 
WHEN 48 THEN  ''F.GELECEK YILLARA A�D GEL�RLER VE G�DER TAHAKUKLARI'' 
WHEN 49 THEN  ''G.D��ER UZUN VADEL� YABANCI KAYNAKLAR'' 
WHEN 50 THEN  ''A.�DENM�� SERMAYE''
WHEN 52 THEN  ''B.SERMAYE YEDEKLER�''
WHEN 54 THEN  ''C.KAR YEDEKLER�''
WHEN 57 THEN  ''D.GE�M�� YILLAR KARLARI''
WHEN 58 THEN  ''E.GE�M�� YILLAR ZARARLARI''
WHEN 59 THEN  ''F.D�NEM NET KARI (ZARARI)''
ELSE ''D��ER'' END  as Tip3,
CASE  EMFLINE.KEBIRCODE 
WHEN	100	 THEN	''     01. Kasa''
WHEN	101	 THEN	''     02. Al�nan �ekler''
WHEN	102	 THEN	''     03. Banka''
WHEN	103	 THEN	''     04. Verilen �ekler ve �deme Emirleri (-)''
WHEN	108	 THEN	''     05. Di�er Haz�r De�erler''
WHEN	110	 THEN	''     01. Hisse Senetleri              ''
WHEN	111	 THEN	''     02. �zel Kesim Tahvil, Senet ve Bonolar�''
WHEN	112	 THEN	''     03. Kamu Kesimi Tahvil, Senet ve Bonolar�      ''
WHEN	118	 THEN	''     04. Di�er Menkul K�ymetler ''
WHEN	119	 THEN	''     05. Menkul K�ymetler De�er D���kl��� Kar��l��� (-)''
WHEN	120	 THEN	''     01. Al�c�lar''
WHEN	121	 THEN	''     02. Alacak Senetleri''
WHEN	122	 THEN	''     03. Alacak Senetleri Reeskontu (-)''
WHEN	126	 THEN	''     04. Verilen Depozito ve Teminatlar''
WHEN	127	 THEN	''     05. Di�er Ticari Alacaklar''
WHEN	128	 THEN	''     06. ��pheli Ticari Alacaklar''
WHEN	129	 THEN	''     07. ��pheli Ticari Alacaklar Kar��l��� (-)''
WHEN	131	 THEN	''     01. Ortaklardan Alacaklar''
WHEN	132	 THEN	''     02. ��tiraklerden Alacaklar''
WHEN	133	 THEN	''     03. Ba�l� Ortakl�klardan Alacaklar''
WHEN	135	 THEN	''     04. Personelden Alacaklar ''
WHEN	136	 THEN	''     05. Di�er �e�itli Alacaklar''
WHEN	137	 THEN	''     06. Di�er Alacak Senetleri Reeskontu (-)''
WHEN	138	 THEN	''     07. ��pheli Di�er Alacaklar''
WHEN	139	 THEN	''     08. ��pheli Di�er Alacaklar Kar��l��� (-)''
WHEN	150	 THEN	''     01. �lk Madde ve Malzeme''
WHEN	151	 THEN	''     02. Yar� Mamuller - �retim''
WHEN	152	 THEN	''     03. Mamuller''
WHEN	153	 THEN	''     04. Ticari Mallar ''
WHEN	157	 THEN	''     05. Di�er Stoklar''
WHEN	158	 THEN	''     06. Stok De�er D���kl��� Kar��l��� (-) ''
WHEN	159	 THEN	''     07. Verilen Sipari� Avanslar�''
WHEN	170	 THEN	''     01. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	171	 THEN	''     02. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	172	 THEN	''     03. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	173	 THEN	''     04. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	174	 THEN	''     05. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	175	 THEN	''     06. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	176	 THEN	''     07. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	177	 THEN	''     08. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	178	 THEN	''     09. Y�llara Yayg�n �n�aat ve Onar�m Maliyetleri''
WHEN	179	 THEN	''     10. Ta�eronlara Verilen Avanslar''
WHEN	180	 THEN	''     01. Gelecek Aylara Ait Giderler''
WHEN	181	 THEN	''     02. Gelir Tahakkuklar�''
WHEN	190	 THEN	''     01. Devreden KDV''
WHEN	191	 THEN	''     02. �ndirilecek Katma De�er Vergisi''
WHEN	192	 THEN	''     03. Di�er Katma De�er Vergisi''
WHEN	193	 THEN	''     04. Pe�in �denen Vergiler ve Fonlar''
WHEN	195	 THEN	''     05. �� Avanslar�''
WHEN	196	 THEN	''     06.  Personel Avanslar�''
WHEN	197	 THEN	''     07. Say�m ve Tesell�m Noksanlar�''
WHEN	198	 THEN	''     08. Di�er �e�itli D�nen Varl�klar''
WHEN	199	 THEN	''     09. Di�er D�nen Varl�klar Kar��l��� (-)''
WHEN	220	 THEN	''     01. Al�c�lar''
WHEN	221	 THEN	''     02. Alacak Senetleri''
WHEN	222	 THEN	''     03. Alacak Senetleri Reeskontu (-)''
WHEN	226	 THEN	''     04. Verilen Depozito ve Teminatlar''
WHEN	229	 THEN	''     05. ��pheli Alacaklar Kar��l��� (-)''
WHEN	231	 THEN	''     01. Ortaklardan Alacaklar''
WHEN	232	 THEN	''     02. ��tiraklerden Alacaklar''
WHEN	233	 THEN	''     03. Ba�l� Ortakl�klardan Alacaklar''
WHEN	235	 THEN	''     04. Personelden Alacaklar'' '
SET @QUERY2 =  '
WHEN	236	 THEN	''     05. Di�er �e�itli Alacaklar''
WHEN	237	 THEN	''     06. Di�er Alacak Senetleri Reeskontu (-)''
WHEN	239	 THEN	''     07. ��pheli Di�er Alacaklar Kar��l��� (-)''
WHEN	240	 THEN	''     01. Ba�l� Menkul K�ymetler''
WHEN	241	 THEN	''     02. Ba�l� Menkul K�ymetler De�er D���kl��� Kar��l��� (-)''
WHEN	242	 THEN	''     03. ��tirakler''
WHEN	243	 THEN	''     04. ��tiraklere Sermaye Taahh�tleri (-)''
WHEN	244	 THEN	''     05. ��tirakler Sermaye Paylar� De�er D���kl��� Kar��l��� (-)''
WHEN	245	 THEN	''     06. Ba�l� Ortakl�klar''
WHEN	246	 THEN	''     07. Ba�l� Ortakl�klara Sermaye Taahh�tleri (-)''
WHEN	247	 THEN	''     08. Ba�l� Ortakl�klar Sermaye Paylar� De�er D���kl��� Kar��l��� (-)''
WHEN	248	 THEN	''     09. Di�er Mali Duran Varl�klar''
WHEN	249	 THEN	''     10. Di�er Mali Duran Varl�klar De�er D���kl��� Kar��l��� (-)''
WHEN	250	 THEN	''     01. Arazi ve Arsalar''
WHEN	251	 THEN	''     02. Yer Alt� ve Yer �st� D�zenleri''
WHEN	252	 THEN	''     03. Binalar''
WHEN	253	 THEN	''     04. Tesis, Makine ve Cihazlar''
WHEN	254	 THEN	''     05. Ta��tlar''
WHEN	255	 THEN	''     06. Demirba�lar''
WHEN	256	 THEN	''     07. Di�er Maddi Duran Varl�klar''
WHEN	257	 THEN	''     08. Birikmi� Amortismanlar (-)''
WHEN	258	 THEN	''     09. Yap�lmakta Olan Yat�r�mlar''
WHEN	259	 THEN	''     10. Verilen Avanslar''
WHEN	260	 THEN	''     01. Haklar''
WHEN	261	 THEN	''     02. �erefiye''
WHEN	262	 THEN	''     03. Kurulu� ve �rg�tlenme Giderleri''
WHEN	263	 THEN	''     04. Ara�t�rma ve Geli�tirme Giderleri''
WHEN	264	 THEN	''     05. �zel Maliyetler''
WHEN	267	 THEN	''     06. Di�er Maddi Olmayan Duran Varl�klar''
WHEN	268	 THEN	''     07. Birikmi� Amortismanlar (-)''
WHEN	269	 THEN	''     08. Verilen Avanslar''
WHEN	271	 THEN	''     01. Arama Giderleri''
WHEN	272	 THEN	''     02. Haz�rl�k ve Geli�tirme Giderleri''
WHEN	277	 THEN	''     03. Di�er �zel T�kenmeye Tabi Varl�klar''
WHEN	278	 THEN	''     04. Birikmi� T�kenme Paylar� (-)''
WHEN	279	 THEN	''     05. Verilen Avanslar''
WHEN	280	 THEN	''     01. Gelecek Y�llara Ait Giderler''
WHEN	281	 THEN	''     02. Gelir Tahakkuklar�''
WHEN	291	 THEN	''     01. Gelecek Y�llarda �ndirilecek Katma De�er Vergisi''
WHEN	292	 THEN	''     02. Di�er Katma De�er Vergisi''
WHEN	295	 THEN	''     03. Pe�in �denen Vergiler ve Fonlar''
WHEN	297	 THEN	''     04. Di�er �e�itli Duran Varl�klar''
WHEN	300	 THEN	''      01. Banka Kredileri''
WHEN	303	 THEN	''      02. Uzun Vadeli Kredilerin Anapara Taksitleri ve Faizleri''
WHEN	304	 THEN	''      03. Tahvil Anapara Bor�, Taksit ve Faizleri''
WHEN	305	 THEN	''      04. ��kar�lm�� Bonolar ve Senetler''
WHEN	306	 THEN	''      05. ��kar�lm�� Di�er Menkul K�ymetler''
WHEN	308	 THEN	''      06. Menkul K�ymetler �hra� Fark� (-)''
WHEN	309	 THEN	''      07. Di�er Mali Bor�lar''
WHEN	320	 THEN	''      01. Sat�c�lar''
WHEN	321	 THEN	''      02. Bor� Senetleri''
WHEN	322	 THEN	''      03. Bor� Senetleri Reeskontu (-)''
WHEN	326	 THEN	''      04. Al�nan Depozito ve Teminatlar''
WHEN	329	 THEN	''      05. Di�er Ticari Bor�lar''
WHEN	331	 THEN	''      01. Ortaklara Bor�lar''
WHEN	332	 THEN	''      02. ��tiraklere Bor�lar''
WHEN	333	 THEN	''      03. Ba�l� Ortakl�klara Bor�lar''
WHEN	335	 THEN	''      04. Personele Bor�lar''
WHEN	336	 THEN	''      05. Di�er �e�itli Bor�lar''
WHEN	337	 THEN	''      06. Di�er Bor� Senetleri Reeskontu (-)''
WHEN	340	 THEN	''      01. Al�nan Sipari� Avanslar�''
WHEN	349	 THEN	''      02. Al�nan Di�er Avanslar''
WHEN	350	 THEN	''      01. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	351	 THEN	''      02. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	352	 THEN	''      03. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	353	 THEN	''      04. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	354	 THEN	''      05. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	355	 THEN	''      06. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	356	 THEN	''      07. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	357	 THEN	''      08. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	358	 THEN	''      09. Y�llara Yayg�n �n�aat ve Onar�m Hakedi� Bedelleri''
WHEN	360	 THEN	''      01. �denecek Vegi ve Fonlar''
WHEN	361	 THEN	''      02. �denecek Sosyal G�venlik Kesintileri''
WHEN	368	 THEN	''      03. Vadesi Ge�mi� Ertelenmi� Veya Taksitlendirilmi� Vergi ve Di�er Y�k�ml.''
WHEN	369	 THEN	''      04. �denecek Di�er Y�k�ml�l�kler''
WHEN	370	 THEN	''      01. D�nem Kar� Vergi ve Di�er Yasal Y�k�ml�l�k Kar��l�klar�''
WHEN	371	 THEN	''      02. D�nem Kar�n�n Pe�in �denen Vergi ve Di�er Y�k�ml�l�kleri (-)''
WHEN	372	 THEN	''      03. K�dem Tazminat� Kar��l���''
WHEN	373	 THEN	''      04. Maliyet Giderleri Kar��l���''
WHEN	379	 THEN	''      05. Di�er Bor� ve Gider Kar��l�klar�''
WHEN	380	 THEN	''      01. Gelecek Aylara Ait Gelirler''
WHEN	381	 THEN	''      02. Gider Tahakkuklar�''
WHEN	391	 THEN	''      01. Hesaplanan KDV''
WHEN	392	 THEN	''      02. Di�er KDV''
WHEN	393	 THEN	''      03. Merkez ve �ubeler Cari Hesab�''
WHEN	397	 THEN	''      04. Say�m ve Tesell�m Fazlalar�''
WHEN	399	 THEN	''      05. Di�er �e�itli Yabanc� Kaynaklar''
WHEN	400	 THEN	''      01. Banka Kredileri''
WHEN	405	 THEN	''      02. ��kar�lm�� Tahviller''
WHEN	407	 THEN	''      03. ��kar�lm�� Di�er Menkul K�ymetler''
WHEN	408	 THEN	''      04. Menkul K�ymetler �hra� Fark� (-)''
WHEN	409	 THEN	''      05. Di�er Mali Bor�lar''
WHEN	420	 THEN	''      01. Sat�c�lar''
WHEN	421	 THEN	''      02. Bor� Senetleri''
WHEN	422	 THEN	''      03. Bor� Senetleri Reeskontu (-)''
WHEN	426	 THEN	''      04. Al�nan Depozito ve Teminatlar''
WHEN	429	 THEN	''      05. Di�er Ticari Bor�lar''
WHEN	431	 THEN	''      01. Ortaklara Bor�lar''
WHEN	432	 THEN	''      02. ��tiraklere Bor�lar''
WHEN	433	 THEN	''      03. Ba�l� Ortakl�klara Bor�lar''
WHEN	436	 THEN	''      04. Di�er �e�itli Bor�lar''
WHEN	437	 THEN	''      05. Di�er Bor� Senetleri Reeskontu (-)''
WHEN	438	 THEN	''      06. Kamuya Olan Ertelenmi� Veya Taksitlendirilmi� Bor�lar''
WHEN	472	 THEN	''      01. K�dem Tazminat� Kar��l���''
WHEN	479	 THEN	''      02. Di�er Bor� ve Gider Kar��l�klar�''
WHEN	480	 THEN	''      01. Gelecek Y�llara Ait Gelirler''
WHEN	481	 THEN	''      02. Gider Tahakkuklar�''
WHEN	492	 THEN	''      01. Gelecek Y�llara Ertelenen Veya Terkin Edilen Katma De�er Vergisi''
WHEN	493	 THEN	''      02. Tesise Kat�lma Paylar�''
WHEN	499	 THEN	''      03. Di�er �e�itli Uzun Vadeli Yabanc� Kaynaklar''
WHEN	500	 THEN	''      01. Sermaye'' '
SET @QUERY3 =  '
WHEN	501	 THEN	''      02. �denmemi� Sermaye (-)''
WHEN	520	 THEN	''      01. Hisse Senetleri �hra� Primleri''
WHEN	521	 THEN	''      02. Hisse Senedi �ptal Karlar�''
WHEN	522	 THEN	''      03. M.D.V. Yeniden De�erleme Art��lar�''
WHEN	523	 THEN	''      04. ��tirakler Yeniden De�erleme Art��lar�''
WHEN	529	 THEN	''      05. Di�er Sermaye Yedekleri''
WHEN	540	 THEN	''      01. Yasal Yedekler''
WHEN	541	 THEN	''      02. Stat� Yedekleri''
WHEN	542	 THEN	''      03. Ola�an�st� Yedekler''
WHEN	548	 THEN	''      04. Di�er Kar Yedekleri''
WHEN	549	 THEN	''      05. �zel Fonlar''
WHEN	570	 THEN	''    D GE�M�� YILLAR KARLARI''
WHEN	580	 THEN	''    E GE�M�� YILLAR ZARARLARI (-)''
WHEN	590	 THEN	''      01. D�nem Net Kar�''
WHEN	591	 THEN	''      02. D�nem Net Zarar� (-)''




ELSE ''D��ER'' END Tip4, 
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


