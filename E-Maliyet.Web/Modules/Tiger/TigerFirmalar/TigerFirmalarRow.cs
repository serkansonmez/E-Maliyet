
namespace E_Maliyet.Tiger.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using static E_Maliyet.Tiger.PermissionKeys;

    [ConnectionKey("Tiger"), Module("Tiger"), TableName("[dbo].[L_CAPIFIRM]")]
    [DisplayName("Tiger Firmalar"), InstanceName("Tiger Firmalar")]
    [ReadPermission(TigerFirmalar.View)]
    [ModifyPermission(TigerFirmalar.Update)]
    [InsertPermission(TigerFirmalar.Insert)]
    [DeletePermission(TigerFirmalar.Delete)]
    [LookupScript(Permission = "*")]
    public sealed class TigerFirmalarRow : Row, IIdRow, INameRow
    {
        [DisplayName("Logicalref"), Column("LOGICALREF"), Identity]
        public Int32? Logicalref
        {
            get { return Fields.Logicalref[this]; }
            set { Fields.Logicalref[this] = value; }
        }

        [DisplayName("Nr"), Column("NR"), QuickSearch, LookupInclude()]
        public Int16? Nr
        {
            get { return Fields.Nr[this]; }
            set { Fields.Nr[this] = value; }
        }

        [DisplayName("Name"), Column("NAME"), Size(61), QuickSearch, LookupInclude()]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Title"), Column("TITLE"), Size(51)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Street"), Column("STREET"), Size(21)]
        public String Street
        {
            get { return Fields.Street[this]; }
            set { Fields.Street[this] = value; }
        }

        [DisplayName("Road"), Column("ROAD"), Size(21)]
        public String Road
        {
            get { return Fields.Road[this]; }
            set { Fields.Road[this] = value; }
        }

        [DisplayName("Doornr"), Column("DOORNR"), Size(21)]
        public String Doornr
        {
            get { return Fields.Doornr[this]; }
            set { Fields.Doornr[this] = value; }
        }

        [DisplayName("District"), Column("DISTRICT"), Size(21)]
        public String District
        {
            get { return Fields.District[this]; }
            set { Fields.District[this] = value; }
        }

        [DisplayName("City"), Column("CITY"), Size(21)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Column("COUNTRY"), Size(21)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Zipcode"), Column("ZIPCODE"), Size(11)]
        public String Zipcode
        {
            get { return Fields.Zipcode[this]; }
            set { Fields.Zipcode[this] = value; }
        }

        [DisplayName("Phone1"), Column("PHONE1"), Size(16)]
        public String Phone1
        {
            get { return Fields.Phone1[this]; }
            set { Fields.Phone1[this] = value; }
        }

        [DisplayName("Phone2"), Column("PHONE2"), Size(16)]
        public String Phone2
        {
            get { return Fields.Phone2[this]; }
            set { Fields.Phone2[this] = value; }
        }

        [DisplayName("Fax"), Column("FAX"), Size(16)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Taxoff"), Column("TAXOFF"), Size(51)]
        public String Taxoff
        {
            get { return Fields.Taxoff[this]; }
            set { Fields.Taxoff[this] = value; }
        }

        [DisplayName("Taxnr"), Column("TAXNR"), Size(21)]
        public String Taxnr
        {
            get { return Fields.Taxnr[this]; }
            set { Fields.Taxnr[this] = value; }
        }

        [DisplayName("Securnr"), Column("SECURNR"), Size(51)]
        public String Securnr
        {
            get { return Fields.Securnr[this]; }
            set { Fields.Securnr[this] = value; }
        }

        [DisplayName("Direct"), Column("DIRECT"), Size(81)]
        public String Direct
        {
            get { return Fields.Direct[this]; }
            set { Fields.Direct[this] = value; }
        }

        [DisplayName("Cpaname"), Column("CPANAME"), Size(31)]
        public String Cpaname
        {
            get { return Fields.Cpaname[this]; }
            set { Fields.Cpaname[this] = value; }
        }

        [DisplayName("Cpastreet"), Column("CPASTREET"), Size(21)]
        public String Cpastreet
        {
            get { return Fields.Cpastreet[this]; }
            set { Fields.Cpastreet[this] = value; }
        }

        [DisplayName("Cparoad"), Column("CPAROAD"), Size(21)]
        public String Cparoad
        {
            get { return Fields.Cparoad[this]; }
            set { Fields.Cparoad[this] = value; }
        }

        [DisplayName("Cpadoornr"), Column("CPADOORNR"), Size(21)]
        public String Cpadoornr
        {
            get { return Fields.Cpadoornr[this]; }
            set { Fields.Cpadoornr[this] = value; }
        }

        [DisplayName("Cpadistrict"), Column("CPADISTRICT"), Size(21)]
        public String Cpadistrict
        {
            get { return Fields.Cpadistrict[this]; }
            set { Fields.Cpadistrict[this] = value; }
        }

        [DisplayName("Cpacity"), Column("CPACITY"), Size(21)]
        public String Cpacity
        {
            get { return Fields.Cpacity[this]; }
            set { Fields.Cpacity[this] = value; }
        }

        [DisplayName("Cpaphone"), Column("CPAPHONE"), Size(16)]
        public String Cpaphone
        {
            get { return Fields.Cpaphone[this]; }
            set { Fields.Cpaphone[this] = value; }
        }

        [DisplayName("Cpataxoff"), Column("CPATAXOFF"), Size(51)]
        public String Cpataxoff
        {
            get { return Fields.Cpataxoff[this]; }
            set { Fields.Cpataxoff[this] = value; }
        }

        [DisplayName("Cpataxnr"), Column("CPATAXNR"), Size(21)]
        public String Cpataxnr
        {
            get { return Fields.Cpataxnr[this]; }
            set { Fields.Cpataxnr[this] = value; }
        }

        [DisplayName("Cpachambnr"), Column("CPACHAMBNR"), Size(21)]
        public String Cpachambnr
        {
            get { return Fields.Cpachambnr[this]; }
            set { Fields.Cpachambnr[this] = value; }
        }

        [DisplayName("Begmon"), Column("BEGMON")]
        public Int16? Begmon
        {
            get { return Fields.Begmon[this]; }
            set { Fields.Begmon[this] = value; }
        }

        [DisplayName("Begday"), Column("BEGDAY")]
        public Int16? Begday
        {
            get { return Fields.Begday[this]; }
            set { Fields.Begday[this] = value; }
        }

        [DisplayName("Userext"), Column("USEREXT")]
        public Int32? Userext
        {
            get { return Fields.Userext[this]; }
            set { Fields.Userext[this] = value; }
        }

        [DisplayName("Pernr"), Column("PERNR")]
        public Int16? Pernr
        {
            get { return Fields.Pernr[this]; }
            set { Fields.Pernr[this] = value; }
        }

        [DisplayName("Countofleg"), Column("COUNTOFLEG")]
        public Int16? Countofleg
        {
            get { return Fields.Countofleg[this]; }
            set { Fields.Countofleg[this] = value; }
        }

        [DisplayName("Ctable"), Column("CTABLE"), Size(31)]
        public String Ctable
        {
            get { return Fields.Ctable[this]; }
            set { Fields.Ctable[this] = value; }
        }

        [DisplayName("Workdayflgs1"), Column("WORKDAYFLGS1")]
        public Int16? Workdayflgs1
        {
            get { return Fields.Workdayflgs1[this]; }
            set { Fields.Workdayflgs1[this] = value; }
        }

        [DisplayName("Workdayflgs2"), Column("WORKDAYFLGS2")]
        public Int16? Workdayflgs2
        {
            get { return Fields.Workdayflgs2[this]; }
            set { Fields.Workdayflgs2[this] = value; }
        }

        [DisplayName("Workdayflgs3"), Column("WORKDAYFLGS3")]
        public Int16? Workdayflgs3
        {
            get { return Fields.Workdayflgs3[this]; }
            set { Fields.Workdayflgs3[this] = value; }
        }

        [DisplayName("Workdayflgs4"), Column("WORKDAYFLGS4")]
        public Int16? Workdayflgs4
        {
            get { return Fields.Workdayflgs4[this]; }
            set { Fields.Workdayflgs4[this] = value; }
        }

        [DisplayName("Workdayflgs5"), Column("WORKDAYFLGS5")]
        public Int16? Workdayflgs5
        {
            get { return Fields.Workdayflgs5[this]; }
            set { Fields.Workdayflgs5[this] = value; }
        }

        [DisplayName("Workdayflgs6"), Column("WORKDAYFLGS6")]
        public Int16? Workdayflgs6
        {
            get { return Fields.Workdayflgs6[this]; }
            set { Fields.Workdayflgs6[this] = value; }
        }

        [DisplayName("Workdayflgs7"), Column("WORKDAYFLGS7")]
        public Int16? Workdayflgs7
        {
            get { return Fields.Workdayflgs7[this]; }
            set { Fields.Workdayflgs7[this] = value; }
        }

        [DisplayName("Localctyp"), Column("LOCALCTYP")]
        public Int16? Localctyp
        {
            get { return Fields.Localctyp[this]; }
            set { Fields.Localctyp[this] = value; }
        }

        [DisplayName("Firmrepcurr"), Column("FIRMREPCURR")]
        public Int16? Firmrepcurr
        {
            get { return Fields.Firmrepcurr[this]; }
            set { Fields.Firmrepcurr[this] = value; }
        }

        [DisplayName("Sepexchtable"), Column("SEPEXCHTABLE")]
        public Int16? Sepexchtable
        {
            get { return Fields.Sepexchtable[this]; }
            set { Fields.Sepexchtable[this] = value; }
        }

        [DisplayName("Vatroundmtd"), Column("VATROUNDMTD")]
        public Int16? Vatroundmtd
        {
            get { return Fields.Vatroundmtd[this]; }
            set { Fields.Vatroundmtd[this] = value; }
        }

        [DisplayName("Firmeuvatnumber"), Column("FIRMEUVATNUMBER"), Size(21)]
        public String Firmeuvatnumber
        {
            get { return Fields.Firmeuvatnumber[this]; }
            set { Fields.Firmeuvatnumber[this] = value; }
        }

        [DisplayName("Majversnr"), Column("MAJVERSNR")]
        public Int16? Majversnr
        {
            get { return Fields.Majversnr[this]; }
            set { Fields.Majversnr[this] = value; }
        }

        [DisplayName("Minversnr"), Column("MINVERSNR")]
        public Int16? Minversnr
        {
            get { return Fields.Minversnr[this]; }
            set { Fields.Minversnr[this] = value; }
        }

        [DisplayName("Relversnr"), Column("RELVERSNR")]
        public Int16? Relversnr
        {
            get { return Fields.Relversnr[this]; }
            set { Fields.Relversnr[this] = value; }
        }

        [DisplayName("Siteid"), Column("SITEID")]
        public Int16? Siteid
        {
            get { return Fields.Siteid[this]; }
            set { Fields.Siteid[this] = value; }
        }

        [DisplayName("Orgchart"), Column("ORGCHART")]
        public Int32? Orgchart
        {
            get { return Fields.Orgchart[this]; }
            set { Fields.Orgchart[this] = value; }
        }

        [DisplayName("Localcaldr"), Column("LOCALCALDR")]
        public Int16? Localcaldr
        {
            get { return Fields.Localcaldr[this]; }
            set { Fields.Localcaldr[this] = value; }
        }

        [DisplayName("Firmlang"), Column("FIRMLANG")]
        public Int16? Firmlang
        {
            get { return Fields.Firmlang[this]; }
            set { Fields.Firmlang[this] = value; }
        }

        [DisplayName("Taxoffcode"), Column("TAXOFFCODE"), Size(25)]
        public String Taxoffcode
        {
            get { return Fields.Taxoffcode[this]; }
            set { Fields.Taxoffcode[this] = value; }
        }

        [DisplayName("Cntrycode"), Column("CNTRYCODE"), Size(5)]
        public String Cntrycode
        {
            get { return Fields.Cntrycode[this]; }
            set { Fields.Cntrycode[this] = value; }
        }

        [DisplayName("Longperiods"), Column("LONGPERIODS")]
        public Int16? Longperiods
        {
            get { return Fields.Longperiods[this]; }
            set { Fields.Longperiods[this] = value; }
        }

        [DisplayName("Logoid"), Column("LOGOID"), Size(25)]
        public String Logoid
        {
            get { return Fields.Logoid[this]; }
            set { Fields.Logoid[this] = value; }
        }

        [DisplayName("Emailaddr"), Column("EMAILADDR"), Size(31)]
        public String Emailaddr
        {
            get { return Fields.Emailaddr[this]; }
            set { Fields.Emailaddr[this] = value; }
        }

        [DisplayName("Webaddr"), Column("WEBADDR"), Size(41)]
        public String Webaddr
        {
            get { return Fields.Webaddr[this]; }
            set { Fields.Webaddr[this] = value; }
        }

        [DisplayName("Moddate"), Column("MODDATE")]
        public DateTime? Moddate
        {
            get { return Fields.Moddate[this]; }
            set { Fields.Moddate[this] = value; }
        }

        [DisplayName("Modtime"), Column("MODTIME")]
        public Int32? Modtime
        {
            get { return Fields.Modtime[this]; }
            set { Fields.Modtime[this] = value; }
        }

        [DisplayName("Traderegisno"), Column("TRADEREGISNO"), Size(21)]
        public String Traderegisno
        {
            get { return Fields.Traderegisno[this]; }
            set { Fields.Traderegisno[this] = value; }
        }

        [DisplayName("Employername"), Column("EMPLOYERNAME"), Size(21)]
        public String Employername
        {
            get { return Fields.Employername[this]; }
            set { Fields.Employername[this] = value; }
        }

        [DisplayName("Employersurname"), Column("EMPLOYERSURNAME"), Size(21)]
        public String Employersurname
        {
            get { return Fields.Employersurname[this]; }
            set { Fields.Employersurname[this] = value; }
        }

        [DisplayName("Employeridtcno"), Column("EMPLOYERIDTCNO"), Size(21)]
        public String Employeridtcno
        {
            get { return Fields.Employeridtcno[this]; }
            set { Fields.Employeridtcno[this] = value; }
        }

        [DisplayName("Employeremail"), Column("EMPLOYEREMAIL"), Size(51)]
        public String Employeremail
        {
            get { return Fields.Employeremail[this]; }
            set { Fields.Employeremail[this] = value; }
        }

        [DisplayName("Firmytlstatus"), Column("FIRMYTLSTATUS")]
        public Int16? Firmytlstatus
        {
            get { return Fields.Firmytlstatus[this]; }
            set { Fields.Firmytlstatus[this] = value; }
        }

        [DisplayName("Ytlsourcefirm"), Column("YTLSOURCEFIRM")]
        public Int16? Ytlsourcefirm
        {
            get { return Fields.Ytlsourcefirm[this]; }
            set { Fields.Ytlsourcefirm[this] = value; }
        }

        [DisplayName("Zusatzno"), Column("ZUSATZNO"), Size(4)]
        public String Zusatzno
        {
            get { return Fields.Zusatzno[this]; }
            set { Fields.Zusatzno[this] = value; }
        }

        [DisplayName("Taxoffstatecd"), Column("TAXOFFSTATECD"), Size(13)]
        public String Taxoffstatecd
        {
            get { return Fields.Taxoffstatecd[this]; }
            set { Fields.Taxoffstatecd[this] = value; }
        }

        [DisplayName("Taxoffstatenm"), Column("TAXOFFSTATENM"), Size(41)]
        public String Taxoffstatenm
        {
            get { return Fields.Taxoffstatenm[this]; }
            set { Fields.Taxoffstatenm[this] = value; }
        }

        [DisplayName("Statecode"), Column("STATECODE"), Size(13)]
        public String Statecode
        {
            get { return Fields.Statecode[this]; }
            set { Fields.Statecode[this] = value; }
        }

        [DisplayName("Statename"), Column("STATENAME"), Size(41)]
        public String Statename
        {
            get { return Fields.Statename[this]; }
            set { Fields.Statename[this] = value; }
        }

        [DisplayName("Cpaoccupation"), Column("CPAOCCUPATION"), Size(51)]
        public String Cpaoccupation
        {
            get { return Fields.Cpaoccupation[this]; }
            set { Fields.Cpaoccupation[this] = value; }
        }

        [DisplayName("Cpaextension"), Column("CPAEXTENSION"), Size(17)]
        public String Cpaextension
        {
            get { return Fields.Cpaextension[this]; }
            set { Fields.Cpaextension[this] = value; }
        }

        [DisplayName("Cpaemail"), Column("CPAEMAIL"), Size(51)]
        public String Cpaemail
        {
            get { return Fields.Cpaemail[this]; }
            set { Fields.Cpaemail[this] = value; }
        }

        [DisplayName("Cpasurname"), Column("CPASURNAME"), Size(31)]
        public String Cpasurname
        {
            get { return Fields.Cpasurname[this]; }
            set { Fields.Cpasurname[this] = value; }
        }

        [DisplayName("Cpaidtcno"), Column("CPAIDTCNO"), Size(21)]
        public String Cpaidtcno
        {
            get { return Fields.Cpaidtcno[this]; }
            set { Fields.Cpaidtcno[this] = value; }
        }

        [DisplayName("Accofficecode"), Column("ACCOFFICECODE"), Size(17)]
        public String Accofficecode
        {
            get { return Fields.Accofficecode[this]; }
            set { Fields.Accofficecode[this] = value; }
        }

        [DisplayName("Advancedproduct"), Column("ADVANCEDPRODUCT")]
        public Int16? Advancedproduct
        {
            get { return Fields.Advancedproduct[this]; }
            set { Fields.Advancedproduct[this] = value; }
        }

        [DisplayName("Bagkurnr"), Column("BAGKURNR"), Size(11)]
        public String Bagkurnr
        {
            get { return Fields.Bagkurnr[this]; }
            set { Fields.Bagkurnr[this] = value; }
        }

        [DisplayName("Username"), Column("USERNAME"), Size(31)]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Dbname"), Column("DBNAME"), Size(81)]
        public String Dbname
        {
            get { return Fields.Dbname[this]; }
            set { Fields.Dbname[this] = value; }
        }

        [DisplayName("Password"), Column("PASSWORD"), Size(31)]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [DisplayName("Actarea"), Column("ACTAREA")]
        public Int16? Actarea
        {
            get { return Fields.Actarea[this]; }
            set { Fields.Actarea[this] = value; }
        }

        [DisplayName("Sector"), Column("SECTOR")]
        public Int16? Sector
        {
            get { return Fields.Sector[this]; }
            set { Fields.Sector[this] = value; }
        }

        [DisplayName("Srccriteria"), Column("SRCCRITERIA"), Size(51)]
        public String Srccriteria
        {
            get { return Fields.Srccriteria[this]; }
            set { Fields.Srccriteria[this] = value; }
        }

        [DisplayName("Conscoderef"), Column("CONSCODEREF")]
        public Int32? Conscoderef
        {
            get { return Fields.Conscoderef[this]; }
            set { Fields.Conscoderef[this] = value; }
        }

        [DisplayName("Tcellappid"), Column("TCELLAPPID"), Size(81)]
        public String Tcellappid
        {
            get { return Fields.Tcellappid[this]; }
            set { Fields.Tcellappid[this] = value; }
        }

        [DisplayName("Tcellapppw"), Column("TCELLAPPPW"), Size(32)]
        public String Tcellapppw
        {
            get { return Fields.Tcellapppw[this]; }
            set { Fields.Tcellapppw[this] = value; }
        }

        [DisplayName("Dncnstlen"), Column("DNCNSTLEN")]
        public Int16? Dncnstlen
        {
            get { return Fields.Dncnstlen[this]; }
            set { Fields.Dncnstlen[this] = value; }
        }

        [DisplayName("Useserverdate"), Column("USESERVERDATE")]
        public Int16? Useserverdate
        {
            get { return Fields.Useserverdate[this]; }
            set { Fields.Useserverdate[this] = value; }
        }

        [DisplayName("Usechangelog"), Column("USECHANGELOG")]
        public Int16? Usechangelog
        {
            get { return Fields.Usechangelog[this]; }
            set { Fields.Usechangelog[this] = value; }
        }

        [DisplayName("Mobusername"), Column("MOBUSERNAME"), Size(31)]
        public String Mobusername
        {
            get { return Fields.Mobusername[this]; }
            set { Fields.Mobusername[this] = value; }
        }

        [DisplayName("Mobpassword"), Column("MOBPASSWORD"), Size(31)]
        public String Mobpassword
        {
            get { return Fields.Mobpassword[this]; }
            set { Fields.Mobpassword[this] = value; }
        }

        [DisplayName("Mobfirmalias"), Column("MOBFIRMALIAS"), Size(31)]
        public String Mobfirmalias
        {
            get { return Fields.Mobfirmalias[this]; }
            set { Fields.Mobfirmalias[this] = value; }
        }

        [DisplayName("Accepteinv"), Column("ACCEPTEINV")]
        public Int16? Accepteinv
        {
            get { return Fields.Accepteinv[this]; }
            set { Fields.Accepteinv[this] = value; }
        }

        [DisplayName("Einvoiceid"), Column("EINVOICEID"), Size(41)]
        public String Einvoiceid
        {
            get { return Fields.Einvoiceid[this]; }
            set { Fields.Einvoiceid[this] = value; }
        }

        [DisplayName("Profileid"), Column("PROFILEID"), Size(41)]
        public String Profileid
        {
            get { return Fields.Profileid[this]; }
            set { Fields.Profileid[this] = value; }
        }

        [DisplayName("Usecommonparam"), Column("USECOMMONPARAM")]
        public Int16? Usecommonparam
        {
            get { return Fields.Usecommonparam[this]; }
            set { Fields.Usecommonparam[this] = value; }
        }

        [DisplayName("Passive"), Column("PASSIVE")]
        public Int16? Passive
        {
            get { return Fields.Passive[this]; }
            set { Fields.Passive[this] = value; }
        }

        [DisplayName("Usercode"), Column("USERCODE"), Size(25)]
        public String Usercode
        {
            get { return Fields.Usercode[this]; }
            set { Fields.Usercode[this] = value; }
        }

        [DisplayName("Parole"), Column("PAROLE"), Size(25)]
        public String Parole
        {
            get { return Fields.Parole[this]; }
            set { Fields.Parole[this] = value; }
        }

        [DisplayName("Passwordtaxdecl"), Column("PASSWORDTAXDECL"), Size(25)]
        public String Passwordtaxdecl
        {
            get { return Fields.Passwordtaxdecl[this]; }
            set { Fields.Passwordtaxdecl[this] = value; }
        }

        [DisplayName("Firmemailaddr"), Column("FIRMEMAILADDR"), Size(51)]
        public String Firmemailaddr
        {
            get { return Fields.Firmemailaddr[this]; }
            set { Fields.Firmemailaddr[this] = value; }
        }

        [DisplayName("Firmtype"), Column("FIRMTYPE")]
        public Int16? Firmtype
        {
            get { return Fields.Firmtype[this]; }
            set { Fields.Firmtype[this] = value; }
        }

        [DisplayName("Nacecode"), Column("NACECODE"), Size(65)]
        public String Nacecode
        {
            get { return Fields.Nacecode[this]; }
            set { Fields.Nacecode[this] = value; }
        }

        [DisplayName("Cpacountry"), Column("CPACOUNTRY"), Size(21)]
        public String Cpacountry
        {
            get { return Fields.Cpacountry[this]; }
            set { Fields.Cpacountry[this] = value; }
        }

        [DisplayName("Cpazipcode"), Column("CPAZIPCODE"), Size(11)]
        public String Cpazipcode
        {
            get { return Fields.Cpazipcode[this]; }
            set { Fields.Cpazipcode[this] = value; }
        }

        [DisplayName("Cpafaxnr"), Column("CPAFAXNR"), Size(16)]
        public String Cpafaxnr
        {
            get { return Fields.Cpafaxnr[this]; }
            set { Fields.Cpafaxnr[this] = value; }
        }

        [DisplayName("Cpacntrycode"), Column("CPACNTRYCODE"), Size(5)]
        public String Cpacntrycode
        {
            get { return Fields.Cpacntrycode[this]; }
            set { Fields.Cpacntrycode[this] = value; }
        }

        [DisplayName("Useebook"), Column("USEEBOOK")]
        public Int16? Useebook
        {
            get { return Fields.Useebook[this]; }
            set { Fields.Useebook[this] = value; }
        }

        [DisplayName("Contractdesc"), Column("CONTRACTDESC"), Size(51)]
        public String Contractdesc
        {
            get { return Fields.Contractdesc[this]; }
            set { Fields.Contractdesc[this] = value; }
        }

        [DisplayName("Contracttype"), Column("CONTRACTTYPE"), Size(51)]
        public String Contracttype
        {
            get { return Fields.Contracttype[this]; }
            set { Fields.Contracttype[this] = value; }
        }

        [DisplayName("Contractdate"), Column("CONTRACTDATE")]
        public DateTime? Contractdate
        {
            get { return Fields.Contractdate[this]; }
            set { Fields.Contractdate[this] = value; }
        }

        [DisplayName("Contractnumber"), Column("CONTRACTNUMBER"), Size(51)]
        public String Contractnumber
        {
            get { return Fields.Contractnumber[this]; }
            set { Fields.Contractnumber[this] = value; }
        }

        [DisplayName("Hashvers"), Column("HASHVERS"), Size(51)]
        public String Hashvers
        {
            get { return Fields.Hashvers[this]; }
            set { Fields.Hashvers[this] = value; }
        }

        [DisplayName("Timestampuser"), Column("TIMESTAMPUSER"), Size(31)]
        public String Timestampuser
        {
            get { return Fields.Timestampuser[this]; }
            set { Fields.Timestampuser[this] = value; }
        }

        [DisplayName("Timestamppass"), Column("TIMESTAMPPASS"), Size(31)]
        public String Timestamppass
        {
            get { return Fields.Timestamppass[this]; }
            set { Fields.Timestamppass[this] = value; }
        }

        [DisplayName("Timestampserver"), Column("TIMESTAMPSERVER"), Size(201)]
        public String Timestampserver
        {
            get { return Fields.Timestampserver[this]; }
            set { Fields.Timestampserver[this] = value; }
        }

        [DisplayName("Useproxy"), Column("USEPROXY")]
        public Int16? Useproxy
        {
            get { return Fields.Useproxy[this]; }
            set { Fields.Useproxy[this] = value; }
        }

        [DisplayName("Ptimestampuser"), Column("PTIMESTAMPUSER"), Size(31)]
        public String Ptimestampuser
        {
            get { return Fields.Ptimestampuser[this]; }
            set { Fields.Ptimestampuser[this] = value; }
        }

        [DisplayName("Ptimestamppass"), Column("PTIMESTAMPPASS"), Size(31)]
        public String Ptimestamppass
        {
            get { return Fields.Ptimestamppass[this]; }
            set { Fields.Ptimestamppass[this] = value; }
        }

        [DisplayName("Ptimestamphost"), Column("PTIMESTAMPHOST"), Size(201)]
        public String Ptimestamphost
        {
            get { return Fields.Ptimestamphost[this]; }
            set { Fields.Ptimestamphost[this] = value; }
        }

        [DisplayName("Ptimestampport"), Column("PTIMESTAMPPORT")]
        public Int32? Ptimestampport
        {
            get { return Fields.Ptimestampport[this]; }
            set { Fields.Ptimestampport[this] = value; }
        }

        [DisplayName("Timestampport"), Column("TIMESTAMPPORT")]
        public Int32? Timestampport
        {
            get { return Fields.Timestampport[this]; }
            set { Fields.Timestampport[this] = value; }
        }

        [DisplayName("Timestampapppth"), Column("TIMESTAMPAPPPTH"), Size(201)]
        public String Timestampapppth
        {
            get { return Fields.Timestampapppth[this]; }
            set { Fields.Timestampapppth[this] = value; }
        }

        [DisplayName("Jgserverurl"), Column("JGSERVERURL"), Size(201)]
        public String Jgserverurl
        {
            get { return Fields.Jgserverurl[this]; }
            set { Fields.Jgserverurl[this] = value; }
        }

        [DisplayName("Jgusername"), Column("JGUSERNAME"), Size(51)]
        public String Jgusername
        {
            get { return Fields.Jgusername[this]; }
            set { Fields.Jgusername[this] = value; }
        }

        [DisplayName("Jgpassword"), Column("JGPASSWORD"), Size(51)]
        public String Jgpassword
        {
            get { return Fields.Jgpassword[this]; }
            set { Fields.Jgpassword[this] = value; }
        }

        [DisplayName("Jgcompanynr"), Column("JGCOMPANYNR")]
        public Int32? Jgcompanynr
        {
            get { return Fields.Jgcompanynr[this]; }
            set { Fields.Jgcompanynr[this] = value; }
        }

        [DisplayName("Jgperiodnr"), Column("JGPERIODNR")]
        public Int32? Jgperiodnr
        {
            get { return Fields.Jgperiodnr[this]; }
            set { Fields.Jgperiodnr[this] = value; }
        }

        [DisplayName("Jghrfirmcode"), Column("JGHRFIRMCODE"), Size(61)]
        public String Jghrfirmcode
        {
            get { return Fields.Jghrfirmcode[this]; }
            set { Fields.Jghrfirmcode[this] = value; }
        }

        [DisplayName("Deductlimit"), Column("DEDUCTLIMIT")]
        public Double? Deductlimit
        {
            get { return Fields.Deductlimit[this]; }
            set { Fields.Deductlimit[this] = value; }
        }

        [DisplayName("Postlabelcode"), Column("POSTLABELCODE"), Size(101)]
        public String Postlabelcode
        {
            get { return Fields.Postlabelcode[this]; }
            set { Fields.Postlabelcode[this] = value; }
        }

        [DisplayName("Senderlabelcode"), Column("SENDERLABELCODE"), Size(101)]
        public String Senderlabelcode
        {
            get { return Fields.Senderlabelcode[this]; }
            set { Fields.Senderlabelcode[this] = value; }
        }

        [DisplayName("Einvconttype"), Column("EINVCONTTYPE")]
        public Int16? Einvconttype
        {
            get { return Fields.Einvconttype[this]; }
            set { Fields.Einvconttype[this] = value; }
        }

        [DisplayName("Ebookconttype"), Column("EBOOKCONTTYPE")]
        public Int16? Ebookconttype
        {
            get { return Fields.Ebookconttype[this]; }
            set { Fields.Ebookconttype[this] = value; }
        }

        [DisplayName("Mersisno"), Column("MERSISNO"), Size(51)]
        public String Mersisno
        {
            get { return Fields.Mersisno[this]; }
            set { Fields.Mersisno[this] = value; }
        }

        [DisplayName("Officaltitle"), Column("OFFICALTITLE"), Size(255)]
        public String Officaltitle
        {
            get { return Fields.Officaltitle[this]; }
            set { Fields.Officaltitle[this] = value; }
        }

        [DisplayName("Useearchive"), Column("USEEARCHIVE")]
        public Int16? Useearchive
        {
            get { return Fields.Useearchive[this]; }
            set { Fields.Useearchive[this] = value; }
        }

        [DisplayName("Intsalesaddr"), Column("INTSALESADDR"), Size(101)]
        public String Intsalesaddr
        {
            get { return Fields.Intsalesaddr[this]; }
            set { Fields.Intsalesaddr[this] = value; }
        }

        [DisplayName("Faxusername"), Column("FAXUSERNAME"), Size(51)]
        public String Faxusername
        {
            get { return Fields.Faxusername[this]; }
            set { Fields.Faxusername[this] = value; }
        }

        [DisplayName("Faxuserkey"), Column("FAXUSERKEY"), Size(51)]
        public String Faxuserkey
        {
            get { return Fields.Faxuserkey[this]; }
            set { Fields.Faxuserkey[this] = value; }
        }

        [DisplayName("Faxemailaddr"), Column("FAXEMAILADDR"), Size(51)]
        public String Faxemailaddr
        {
            get { return Fields.Faxemailaddr[this]; }
            set { Fields.Faxemailaddr[this] = value; }
        }

        [DisplayName("Ebookstartdate"), Column("EBOOKSTARTDATE")]
        public DateTime? Ebookstartdate
        {
            get { return Fields.Ebookstartdate[this]; }
            set { Fields.Ebookstartdate[this] = value; }
        }

        [DisplayName("Ebookcurrtype"), Column("EBOOKCURRTYPE")]
        public Int16? Ebookcurrtype
        {
            get { return Fields.Ebookcurrtype[this]; }
            set { Fields.Ebookcurrtype[this] = value; }
        }

        [DisplayName("Earcentsend"), Column("EARCENTSEND")]
        public Int16? Earcentsend
        {
            get { return Fields.Earcentsend[this]; }
            set { Fields.Earcentsend[this] = value; }
        }

        [DisplayName("Earcentuser"), Column("EARCENTUSER"), Size(51)]
        public String Earcentuser
        {
            get { return Fields.Earcentuser[this]; }
            set { Fields.Earcentuser[this] = value; }
        }

        [DisplayName("Earcentpass"), Column("EARCENTPASS"), Size(51)]
        public String Earcentpass
        {
            get { return Fields.Earcentpass[this]; }
            set { Fields.Earcentpass[this] = value; }
        }

        [DisplayName("Earcentdefaddr"), Column("EARCENTDEFADDR"), Size(251)]
        public String Earcentdefaddr
        {
            get { return Fields.Earcentdefaddr[this]; }
            set { Fields.Earcentdefaddr[this] = value; }
        }

        [DisplayName("Cpatitle"), Column("CPATITLE")]
        public Int16? Cpatitle
        {
            get { return Fields.Cpatitle[this]; }
            set { Fields.Cpatitle[this] = value; }
        }

        [DisplayName("Isebookkeptbyfirm"), Column("ISEBOOKKEPTBYFIRM")]
        public Int16? Isebookkeptbyfirm
        {
            get { return Fields.Isebookkeptbyfirm[this]; }
            set { Fields.Isebookkeptbyfirm[this] = value; }
        }

        [DisplayName("Isymmcontractmade"), Column("ISYMMCONTRACTMADE")]
        public Int16? Isymmcontractmade
        {
            get { return Fields.Isymmcontractmade[this]; }
            set { Fields.Isymmcontractmade[this] = value; }
        }

        [DisplayName("Ymmname"), Column("YMMNAME"), Size(31)]
        public String Ymmname
        {
            get { return Fields.Ymmname[this]; }
            set { Fields.Ymmname[this] = value; }
        }

        [DisplayName("Ymmsurname"), Column("YMMSURNAME"), Size(31)]
        public String Ymmsurname
        {
            get { return Fields.Ymmsurname[this]; }
            set { Fields.Ymmsurname[this] = value; }
        }

        [DisplayName("Ymmcontdesc"), Column("YMMCONTDESC"), Size(51)]
        public String Ymmcontdesc
        {
            get { return Fields.Ymmcontdesc[this]; }
            set { Fields.Ymmcontdesc[this] = value; }
        }

        [DisplayName("Ymmconttype"), Column("YMMCONTTYPE"), Size(51)]
        public String Ymmconttype
        {
            get { return Fields.Ymmconttype[this]; }
            set { Fields.Ymmconttype[this] = value; }
        }

        [DisplayName("Ymmcontdate"), Column("YMMCONTDATE")]
        public Int32? Ymmcontdate
        {
            get { return Fields.Ymmcontdate[this]; }
            set { Fields.Ymmcontdate[this] = value; }
        }

        [DisplayName("Ymmcontnumber"), Column("YMMCONTNUMBER"), Size(51)]
        public String Ymmcontnumber
        {
            get { return Fields.Ymmcontnumber[this]; }
            set { Fields.Ymmcontnumber[this] = value; }
        }

        [DisplayName("Lastcontrolno"), Column("LASTCONTROLNO")]
        public Int32? Lastcontrolno
        {
            get { return Fields.Lastcontrolno[this]; }
            set { Fields.Lastcontrolno[this] = value; }
        }

        [DisplayName("Lastjournalno"), Column("LASTJOURNALNO")]
        public Int32? Lastjournalno
        {
            get { return Fields.Lastjournalno[this]; }
            set { Fields.Lastjournalno[this] = value; }
        }

        [DisplayName("Lastgloblineno"), Column("LASTGLOBLINENO")]
        public Int32? Lastgloblineno
        {
            get { return Fields.Lastgloblineno[this]; }
            set { Fields.Lastgloblineno[this] = value; }
        }

        [DisplayName("Backupebooks"), Column("BACKUPEBOOKS")]
        public Int16? Backupebooks
        {
            get { return Fields.Backupebooks[this]; }
            set { Fields.Backupebooks[this] = value; }
        }

        [DisplayName("Einvcustom"), Column("EINVCUSTOM")]
        public Int16? Einvcustom
        {
            get { return Fields.Einvcustom[this]; }
            set { Fields.Einvcustom[this] = value; }
        }

        [DisplayName("Ymmphone"), Column("YMMPHONE"), Size(16)]
        public String Ymmphone
        {
            get { return Fields.Ymmphone[this]; }
            set { Fields.Ymmphone[this] = value; }
        }

        [DisplayName("Ymmfaxnr"), Column("YMMFAXNR"), Size(16)]
        public String Ymmfaxnr
        {
            get { return Fields.Ymmfaxnr[this]; }
            set { Fields.Ymmfaxnr[this] = value; }
        }

        [DisplayName("Ymmemail"), Column("YMMEMAIL"), Size(51)]
        public String Ymmemail
        {
            get { return Fields.Ymmemail[this]; }
            set { Fields.Ymmemail[this] = value; }
        }

        [DisplayName("Einvoicetypsgk"), Column("EINVOICETYPSGK")]
        public Int16? Einvoicetypsgk
        {
            get { return Fields.Einvoicetypsgk[this]; }
            set { Fields.Einvoicetypsgk[this] = value; }
        }

        [DisplayName("Taxpayercode"), Column("TAXPAYERCODE"), Size(101)]
        public String Taxpayercode
        {
            get { return Fields.Taxpayercode[this]; }
            set { Fields.Taxpayercode[this] = value; }
        }

        [DisplayName("Taxpayername"), Column("TAXPAYERNAME"), Size(101)]
        public String Taxpayername
        {
            get { return Fields.Taxpayername[this]; }
            set { Fields.Taxpayername[this] = value; }
        }

        [DisplayName("Ymmchambnr"), Column("YMMCHAMBNR"), Size(21)]
        public String Ymmchambnr
        {
            get { return Fields.Ymmchambnr[this]; }
            set { Fields.Ymmchambnr[this] = value; }
        }

        [DisplayName("Ymmtcno"), Column("YMMTCNO"), Size(21)]
        public String Ymmtcno
        {
            get { return Fields.Ymmtcno[this]; }
            set { Fields.Ymmtcno[this] = value; }
        }

        [DisplayName("Ymmtaxnr"), Column("YMMTAXNR"), Size(21)]
        public String Ymmtaxnr
        {
            get { return Fields.Ymmtaxnr[this]; }
            set { Fields.Ymmtaxnr[this] = value; }
        }

        [DisplayName("Useedespatch"), Column("USEEDESPATCH")]
        public Int16? Useedespatch
        {
            get { return Fields.Useedespatch[this]; }
            set { Fields.Useedespatch[this] = value; }
        }

        [DisplayName("Postlabelcodedesp"), Column("POSTLABELCODEDESP"), Size(101)]
        public String Postlabelcodedesp
        {
            get { return Fields.Postlabelcodedesp[this]; }
            set { Fields.Postlabelcodedesp[this] = value; }
        }

        [DisplayName("Senderlabelcodedesp"), Column("SENDERLABELCODEDESP"), Size(101)]
        public String Senderlabelcodedesp
        {
            get { return Fields.Senderlabelcodedesp[this]; }
            set { Fields.Senderlabelcodedesp[this] = value; }
        }

        [DisplayName("Shaalgorithm"), Column("SHAALGORITHM")]
        public Int16? Shaalgorithm
        {
            get { return Fields.Shaalgorithm[this]; }
            set { Fields.Shaalgorithm[this] = value; }
        }

        [DisplayName("Useeproducerrec"), Column("USEEPRODUCERREC")]
        public Int16? Useeproducerrec
        {
            get { return Fields.Useeproducerrec[this]; }
            set { Fields.Useeproducerrec[this] = value; }
        }

        [DisplayName("Cpakdspassword"), Column("CPAKDSPASSWORD"), Size(51)]
        public String Cpakdspassword
        {
            get { return Fields.Cpakdspassword[this]; }
            set { Fields.Cpakdspassword[this] = value; }
        }

        [DisplayName("Cpausername"), Column("CPAUSERNAME"), Size(51)]
        public String Cpausername
        {
            get { return Fields.Cpausername[this]; }
            set { Fields.Cpausername[this] = value; }
        }

        [DisplayName("Useetradesmaninv"), Column("USEETRADESMANINV")]
        public Int16? Useetradesmaninv
        {
            get { return Fields.Useetradesmaninv[this]; }
            set { Fields.Useetradesmaninv[this] = value; }
        }

        [DisplayName("Liquidatingdate"), Column("LIQUIDATINGDATE")]
        public Int32? Liquidatingdate
        {
            get { return Fields.Liquidatingdate[this]; }
            set { Fields.Liquidatingdate[this] = value; }
        }

        [DisplayName("Liquidatedfirm"), Column("LIQUIDATEDFIRM")]
        public Int16? Liquidatedfirm
        {
            get { return Fields.Liquidatedfirm[this]; }
            set { Fields.Liquidatedfirm[this] = value; }
        }

        [DisplayName("Getcpafromdiv"), Column("GETCPAFROMDIV")]
        public Int16? Getcpafromdiv
        {
            get { return Fields.Getcpafromdiv[this]; }
            set { Fields.Getcpafromdiv[this] = value; }
        }

        [DisplayName("Liquidationtyp"), Column("LIQUIDATIONTYP")]
        public Int16? Liquidationtyp
        {
            get { return Fields.Liquidationtyp[this]; }
            set { Fields.Liquidationtyp[this] = value; }
        }

        [DisplayName("Emutentsend"), Column("EMUTENTSEND")]
        public Int16? Emutentsend
        {
            get { return Fields.Emutentsend[this]; }
            set { Fields.Emutentsend[this] = value; }
        }

        [DisplayName("Passwordtaxdecl2"), Column("PASSWORDTAXDECL2"), Size(25)]
        public String Passwordtaxdecl2
        {
            get { return Fields.Passwordtaxdecl2[this]; }
            set { Fields.Passwordtaxdecl2[this] = value; }
        }

        [DisplayName("Emutentuser"), Column("EMUTENTUSER"), Size(51)]
        public String Emutentuser
        {
            get { return Fields.Emutentuser[this]; }
            set { Fields.Emutentuser[this] = value; }
        }

        [DisplayName("Emutentdefaddr"), Column("EMUTENTDEFADDR"), Size(251)]
        public String Emutentdefaddr
        {
            get { return Fields.Emutentdefaddr[this]; }
            set { Fields.Emutentdefaddr[this] = value; }
        }

        [DisplayName("Emutentpass"), Column("EMUTENTPASS"), Size(51)]
        public String Emutentpass
        {
            get { return Fields.Emutentpass[this]; }
            set { Fields.Emutentpass[this] = value; }
        }

        [DisplayName("Cpatckn"), Column("CPATCKN")]
        public Int16? Cpatckn
        {
            get { return Fields.Cpatckn[this]; }
            set { Fields.Cpatckn[this] = value; }
        }

        [DisplayName("Usepaperinv"), Column("USEPAPERINV")]
        public Int16? Usepaperinv
        {
            get { return Fields.Usepaperinv[this]; }
            set { Fields.Usepaperinv[this] = value; }
        }

        [DisplayName("Shpagncod"), Column("SHPAGNCOD"), Size(13)]
        public String Shpagncod
        {
            get { return Fields.Shpagncod[this]; }
            set { Fields.Shpagncod[this] = value; }
        }

        [DisplayName("Parole2"), Column("PAROLE2"), Size(25)]
        public String Parole2
        {
            get { return Fields.Parole2[this]; }
            set { Fields.Parole2[this] = value; }
        }

        [DisplayName("Usercode2"), Column("USERCODE2"), Size(25)]
        public String Usercode2
        {
            get { return Fields.Usercode2[this]; }
            set { Fields.Usercode2[this] = value; }
        }

        [DisplayName("Firma Adı"),Expression("cast(T0.Nr as varchar(3)) + '-' + T0.Name"),Width(300)]
        public String NameAndNr
        {
            get { return Fields.NameAndNr[this]; }
            set { Fields.NameAndNr[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Nr; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameAndNr; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TigerFirmalarRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Logicalref;
            public Int16Field Nr;
            public StringField Name;
            public StringField Title;
            public StringField Street;
            public StringField Road;
            public StringField Doornr;
            public StringField District;
            public StringField City;
            public StringField Country;
            public StringField Zipcode;
            public StringField Phone1;
            public StringField Phone2;
            public StringField Fax;
            public StringField Taxoff;
            public StringField Taxnr;
            public StringField Securnr;
            public StringField Direct;
            public StringField Cpaname;
            public StringField Cpastreet;
            public StringField Cparoad;
            public StringField Cpadoornr;
            public StringField Cpadistrict;
            public StringField Cpacity;
            public StringField Cpaphone;
            public StringField Cpataxoff;
            public StringField Cpataxnr;
            public StringField Cpachambnr;
            public Int16Field Begmon;
            public Int16Field Begday;
            public Int32Field Userext;
            public Int16Field Pernr;
            public Int16Field Countofleg;
            public StringField Ctable;
            public Int16Field Workdayflgs1;
            public Int16Field Workdayflgs2;
            public Int16Field Workdayflgs3;
            public Int16Field Workdayflgs4;
            public Int16Field Workdayflgs5;
            public Int16Field Workdayflgs6;
            public Int16Field Workdayflgs7;
            public Int16Field Localctyp;
            public Int16Field Firmrepcurr;
            public Int16Field Sepexchtable;
            public Int16Field Vatroundmtd;
            public StringField Firmeuvatnumber;
            public Int16Field Majversnr;
            public Int16Field Minversnr;
            public Int16Field Relversnr;
            public Int16Field Siteid;
            public Int32Field Orgchart;
            public Int16Field Localcaldr;
            public Int16Field Firmlang;
            public StringField Taxoffcode;
            public StringField Cntrycode;
            public Int16Field Longperiods;
            public StringField Logoid;
            public StringField Emailaddr;
            public StringField Webaddr;
            public DateTimeField Moddate;
            public Int32Field Modtime;
            public StringField Traderegisno;
            public StringField Employername;
            public StringField Employersurname;
            public StringField Employeridtcno;
            public StringField Employeremail;
            public Int16Field Firmytlstatus;
            public Int16Field Ytlsourcefirm;
            public StringField Zusatzno;
            public StringField Taxoffstatecd;
            public StringField Taxoffstatenm;
            public StringField Statecode;
            public StringField Statename;
            public StringField Cpaoccupation;
            public StringField Cpaextension;
            public StringField Cpaemail;
            public StringField Cpasurname;
            public StringField Cpaidtcno;
            public StringField Accofficecode;
            public Int16Field Advancedproduct;
            public StringField Bagkurnr;
            public StringField Username;
            public StringField Dbname;
            public StringField Password;
            public Int16Field Actarea;
            public Int16Field Sector;
            public StringField Srccriteria;
            public Int32Field Conscoderef;
            public StringField Tcellappid;
            public StringField Tcellapppw;
            public Int16Field Dncnstlen;
            public Int16Field Useserverdate;
            public Int16Field Usechangelog;
            public StringField Mobusername;
            public StringField Mobpassword;
            public StringField Mobfirmalias;
            public Int16Field Accepteinv;
            public StringField Einvoiceid;
            public StringField Profileid;
            public Int16Field Usecommonparam;
            public Int16Field Passive;
            public StringField Usercode;
            public StringField Parole;
            public StringField Passwordtaxdecl;
            public StringField Firmemailaddr;
            public Int16Field Firmtype;
            public StringField Nacecode;
            public StringField Cpacountry;
            public StringField Cpazipcode;
            public StringField Cpafaxnr;
            public StringField Cpacntrycode;
            public Int16Field Useebook;
            public StringField Contractdesc;
            public StringField Contracttype;
            public DateTimeField Contractdate;
            public StringField Contractnumber;
            public StringField Hashvers;
            public StringField Timestampuser;
            public StringField Timestamppass;
            public StringField Timestampserver;
            public Int16Field Useproxy;
            public StringField Ptimestampuser;
            public StringField Ptimestamppass;
            public StringField Ptimestamphost;
            public Int32Field Ptimestampport;
            public Int32Field Timestampport;
            public StringField Timestampapppth;
            public StringField Jgserverurl;
            public StringField Jgusername;
            public StringField Jgpassword;
            public Int32Field Jgcompanynr;
            public Int32Field Jgperiodnr;
            public StringField Jghrfirmcode;
            public DoubleField Deductlimit;
            public StringField Postlabelcode;
            public StringField Senderlabelcode;
            public Int16Field Einvconttype;
            public Int16Field Ebookconttype;
            public StringField Mersisno;
            public StringField Officaltitle;
            public Int16Field Useearchive;
            public StringField Intsalesaddr;
            public StringField Faxusername;
            public StringField Faxuserkey;
            public StringField Faxemailaddr;
            public DateTimeField Ebookstartdate;
            public Int16Field Ebookcurrtype;
            public Int16Field Earcentsend;
            public StringField Earcentuser;
            public StringField Earcentpass;
            public StringField Earcentdefaddr;
            public Int16Field Cpatitle;
            public Int16Field Isebookkeptbyfirm;
            public Int16Field Isymmcontractmade;
            public StringField Ymmname;
            public StringField Ymmsurname;
            public StringField Ymmcontdesc;
            public StringField Ymmconttype;
            public Int32Field Ymmcontdate;
            public StringField Ymmcontnumber;
            public Int32Field Lastcontrolno;
            public Int32Field Lastjournalno;
            public Int32Field Lastgloblineno;
            public Int16Field Backupebooks;
            public Int16Field Einvcustom;
            public StringField Ymmphone;
            public StringField Ymmfaxnr;
            public StringField Ymmemail;
            public Int16Field Einvoicetypsgk;
            public StringField Taxpayercode;
            public StringField Taxpayername;
            public StringField Ymmchambnr;
            public StringField Ymmtcno;
            public StringField Ymmtaxnr;
            public Int16Field Useedespatch;
            public StringField Postlabelcodedesp;
            public StringField Senderlabelcodedesp;
            public Int16Field Shaalgorithm;
            public Int16Field Useeproducerrec;
            public StringField Cpakdspassword;
            public StringField Cpausername;
            public Int16Field Useetradesmaninv;
            public Int32Field Liquidatingdate;
            public Int16Field Liquidatedfirm;
            public Int16Field Getcpafromdiv;
            public Int16Field Liquidationtyp;
            public Int16Field Emutentsend;
            public StringField Passwordtaxdecl2;
            public StringField Emutentuser;
            public StringField Emutentdefaddr;
            public StringField Emutentpass;
            public Int16Field Cpatckn;
            public Int16Field Usepaperinv;
            public StringField Shpagncod;
            public StringField Parole2;
            public StringField Usercode2;
            public StringField NameAndNr;
        }
    }
}
