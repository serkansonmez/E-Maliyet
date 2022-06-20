namespace E_Maliyet.Tiger {
    export interface TigerFirmalarRow {
        Logicalref?: number;
        Nr?: number;
        Name?: string;
        Title?: string;
        Street?: string;
        Road?: string;
        Doornr?: string;
        District?: string;
        City?: string;
        Country?: string;
        Zipcode?: string;
        Phone1?: string;
        Phone2?: string;
        Fax?: string;
        Taxoff?: string;
        Taxnr?: string;
        Securnr?: string;
        Direct?: string;
        Cpaname?: string;
        Cpastreet?: string;
        Cparoad?: string;
        Cpadoornr?: string;
        Cpadistrict?: string;
        Cpacity?: string;
        Cpaphone?: string;
        Cpataxoff?: string;
        Cpataxnr?: string;
        Cpachambnr?: string;
        Begmon?: number;
        Begday?: number;
        Userext?: number;
        Pernr?: number;
        Countofleg?: number;
        Ctable?: string;
        Workdayflgs1?: number;
        Workdayflgs2?: number;
        Workdayflgs3?: number;
        Workdayflgs4?: number;
        Workdayflgs5?: number;
        Workdayflgs6?: number;
        Workdayflgs7?: number;
        Localctyp?: number;
        Firmrepcurr?: number;
        Sepexchtable?: number;
        Vatroundmtd?: number;
        Firmeuvatnumber?: string;
        Majversnr?: number;
        Minversnr?: number;
        Relversnr?: number;
        Siteid?: number;
        Orgchart?: number;
        Localcaldr?: number;
        Firmlang?: number;
        Taxoffcode?: string;
        Cntrycode?: string;
        Longperiods?: number;
        Logoid?: string;
        Emailaddr?: string;
        Webaddr?: string;
        Moddate?: string;
        Modtime?: number;
        Traderegisno?: string;
        Employername?: string;
        Employersurname?: string;
        Employeridtcno?: string;
        Employeremail?: string;
        Firmytlstatus?: number;
        Ytlsourcefirm?: number;
        Zusatzno?: string;
        Taxoffstatecd?: string;
        Taxoffstatenm?: string;
        Statecode?: string;
        Statename?: string;
        Cpaoccupation?: string;
        Cpaextension?: string;
        Cpaemail?: string;
        Cpasurname?: string;
        Cpaidtcno?: string;
        Accofficecode?: string;
        Advancedproduct?: number;
        Bagkurnr?: string;
        Username?: string;
        Dbname?: string;
        Password?: string;
        Actarea?: number;
        Sector?: number;
        Srccriteria?: string;
        Conscoderef?: number;
        Tcellappid?: string;
        Tcellapppw?: string;
        Dncnstlen?: number;
        Useserverdate?: number;
        Usechangelog?: number;
        Mobusername?: string;
        Mobpassword?: string;
        Mobfirmalias?: string;
        Accepteinv?: number;
        Einvoiceid?: string;
        Profileid?: string;
        Usecommonparam?: number;
        Passive?: number;
        Usercode?: string;
        Parole?: string;
        Passwordtaxdecl?: string;
        Firmemailaddr?: string;
        Firmtype?: number;
        Nacecode?: string;
        Cpacountry?: string;
        Cpazipcode?: string;
        Cpafaxnr?: string;
        Cpacntrycode?: string;
        Useebook?: number;
        Contractdesc?: string;
        Contracttype?: string;
        Contractdate?: string;
        Contractnumber?: string;
        Hashvers?: string;
        Timestampuser?: string;
        Timestamppass?: string;
        Timestampserver?: string;
        Useproxy?: number;
        Ptimestampuser?: string;
        Ptimestamppass?: string;
        Ptimestamphost?: string;
        Ptimestampport?: number;
        Timestampport?: number;
        Timestampapppth?: string;
        Jgserverurl?: string;
        Jgusername?: string;
        Jgpassword?: string;
        Jgcompanynr?: number;
        Jgperiodnr?: number;
        Jghrfirmcode?: string;
        Deductlimit?: number;
        Postlabelcode?: string;
        Senderlabelcode?: string;
        Einvconttype?: number;
        Ebookconttype?: number;
        Mersisno?: string;
        Officaltitle?: string;
        Useearchive?: number;
        Intsalesaddr?: string;
        Faxusername?: string;
        Faxuserkey?: string;
        Faxemailaddr?: string;
        Ebookstartdate?: string;
        Ebookcurrtype?: number;
        Earcentsend?: number;
        Earcentuser?: string;
        Earcentpass?: string;
        Earcentdefaddr?: string;
        Cpatitle?: number;
        Isebookkeptbyfirm?: number;
        Isymmcontractmade?: number;
        Ymmname?: string;
        Ymmsurname?: string;
        Ymmcontdesc?: string;
        Ymmconttype?: string;
        Ymmcontdate?: number;
        Ymmcontnumber?: string;
        Lastcontrolno?: number;
        Lastjournalno?: number;
        Lastgloblineno?: number;
        Backupebooks?: number;
        Einvcustom?: number;
        Ymmphone?: string;
        Ymmfaxnr?: string;
        Ymmemail?: string;
        Einvoicetypsgk?: number;
        Taxpayercode?: string;
        Taxpayername?: string;
        Ymmchambnr?: string;
        Ymmtcno?: string;
        Ymmtaxnr?: string;
        Useedespatch?: number;
        Postlabelcodedesp?: string;
        Senderlabelcodedesp?: string;
        Shaalgorithm?: number;
        Useeproducerrec?: number;
        Cpakdspassword?: string;
        Cpausername?: string;
        Useetradesmaninv?: number;
        Liquidatingdate?: number;
        Liquidatedfirm?: number;
        Getcpafromdiv?: number;
        Liquidationtyp?: number;
        Emutentsend?: number;
        Passwordtaxdecl2?: string;
        Emutentuser?: string;
        Emutentdefaddr?: string;
        Emutentpass?: string;
        Cpatckn?: number;
        Usepaperinv?: number;
        Shpagncod?: string;
        Parole2?: string;
        Usercode2?: string;
        NameAndNr?: string;
    }

    export namespace TigerFirmalarRow {
        export const idProperty = 'Nr';
        export const nameProperty = 'NameAndNr';
        export const localTextPrefix = 'Tiger.TigerFirmalar';
        export const lookupKey = 'Tiger.TigerFirmalar';

        export function getLookup(): Q.Lookup<TigerFirmalarRow> {
            return Q.getLookup<TigerFirmalarRow>('Tiger.TigerFirmalar');
        }
        export const deletePermission = 'Tiger Firmalar:Silme';
        export const insertPermission = 'Tiger Firmalar:Ekleme';
        export const readPermission = 'Tiger Firmalar:Okuma';
        export const updatePermission = 'Tiger Firmalar:Güncelleme';

        export declare const enum Fields {
            Logicalref = "Logicalref",
            Nr = "Nr",
            Name = "Name",
            Title = "Title",
            Street = "Street",
            Road = "Road",
            Doornr = "Doornr",
            District = "District",
            City = "City",
            Country = "Country",
            Zipcode = "Zipcode",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Fax = "Fax",
            Taxoff = "Taxoff",
            Taxnr = "Taxnr",
            Securnr = "Securnr",
            Direct = "Direct",
            Cpaname = "Cpaname",
            Cpastreet = "Cpastreet",
            Cparoad = "Cparoad",
            Cpadoornr = "Cpadoornr",
            Cpadistrict = "Cpadistrict",
            Cpacity = "Cpacity",
            Cpaphone = "Cpaphone",
            Cpataxoff = "Cpataxoff",
            Cpataxnr = "Cpataxnr",
            Cpachambnr = "Cpachambnr",
            Begmon = "Begmon",
            Begday = "Begday",
            Userext = "Userext",
            Pernr = "Pernr",
            Countofleg = "Countofleg",
            Ctable = "Ctable",
            Workdayflgs1 = "Workdayflgs1",
            Workdayflgs2 = "Workdayflgs2",
            Workdayflgs3 = "Workdayflgs3",
            Workdayflgs4 = "Workdayflgs4",
            Workdayflgs5 = "Workdayflgs5",
            Workdayflgs6 = "Workdayflgs6",
            Workdayflgs7 = "Workdayflgs7",
            Localctyp = "Localctyp",
            Firmrepcurr = "Firmrepcurr",
            Sepexchtable = "Sepexchtable",
            Vatroundmtd = "Vatroundmtd",
            Firmeuvatnumber = "Firmeuvatnumber",
            Majversnr = "Majversnr",
            Minversnr = "Minversnr",
            Relversnr = "Relversnr",
            Siteid = "Siteid",
            Orgchart = "Orgchart",
            Localcaldr = "Localcaldr",
            Firmlang = "Firmlang",
            Taxoffcode = "Taxoffcode",
            Cntrycode = "Cntrycode",
            Longperiods = "Longperiods",
            Logoid = "Logoid",
            Emailaddr = "Emailaddr",
            Webaddr = "Webaddr",
            Moddate = "Moddate",
            Modtime = "Modtime",
            Traderegisno = "Traderegisno",
            Employername = "Employername",
            Employersurname = "Employersurname",
            Employeridtcno = "Employeridtcno",
            Employeremail = "Employeremail",
            Firmytlstatus = "Firmytlstatus",
            Ytlsourcefirm = "Ytlsourcefirm",
            Zusatzno = "Zusatzno",
            Taxoffstatecd = "Taxoffstatecd",
            Taxoffstatenm = "Taxoffstatenm",
            Statecode = "Statecode",
            Statename = "Statename",
            Cpaoccupation = "Cpaoccupation",
            Cpaextension = "Cpaextension",
            Cpaemail = "Cpaemail",
            Cpasurname = "Cpasurname",
            Cpaidtcno = "Cpaidtcno",
            Accofficecode = "Accofficecode",
            Advancedproduct = "Advancedproduct",
            Bagkurnr = "Bagkurnr",
            Username = "Username",
            Dbname = "Dbname",
            Password = "Password",
            Actarea = "Actarea",
            Sector = "Sector",
            Srccriteria = "Srccriteria",
            Conscoderef = "Conscoderef",
            Tcellappid = "Tcellappid",
            Tcellapppw = "Tcellapppw",
            Dncnstlen = "Dncnstlen",
            Useserverdate = "Useserverdate",
            Usechangelog = "Usechangelog",
            Mobusername = "Mobusername",
            Mobpassword = "Mobpassword",
            Mobfirmalias = "Mobfirmalias",
            Accepteinv = "Accepteinv",
            Einvoiceid = "Einvoiceid",
            Profileid = "Profileid",
            Usecommonparam = "Usecommonparam",
            Passive = "Passive",
            Usercode = "Usercode",
            Parole = "Parole",
            Passwordtaxdecl = "Passwordtaxdecl",
            Firmemailaddr = "Firmemailaddr",
            Firmtype = "Firmtype",
            Nacecode = "Nacecode",
            Cpacountry = "Cpacountry",
            Cpazipcode = "Cpazipcode",
            Cpafaxnr = "Cpafaxnr",
            Cpacntrycode = "Cpacntrycode",
            Useebook = "Useebook",
            Contractdesc = "Contractdesc",
            Contracttype = "Contracttype",
            Contractdate = "Contractdate",
            Contractnumber = "Contractnumber",
            Hashvers = "Hashvers",
            Timestampuser = "Timestampuser",
            Timestamppass = "Timestamppass",
            Timestampserver = "Timestampserver",
            Useproxy = "Useproxy",
            Ptimestampuser = "Ptimestampuser",
            Ptimestamppass = "Ptimestamppass",
            Ptimestamphost = "Ptimestamphost",
            Ptimestampport = "Ptimestampport",
            Timestampport = "Timestampport",
            Timestampapppth = "Timestampapppth",
            Jgserverurl = "Jgserverurl",
            Jgusername = "Jgusername",
            Jgpassword = "Jgpassword",
            Jgcompanynr = "Jgcompanynr",
            Jgperiodnr = "Jgperiodnr",
            Jghrfirmcode = "Jghrfirmcode",
            Deductlimit = "Deductlimit",
            Postlabelcode = "Postlabelcode",
            Senderlabelcode = "Senderlabelcode",
            Einvconttype = "Einvconttype",
            Ebookconttype = "Ebookconttype",
            Mersisno = "Mersisno",
            Officaltitle = "Officaltitle",
            Useearchive = "Useearchive",
            Intsalesaddr = "Intsalesaddr",
            Faxusername = "Faxusername",
            Faxuserkey = "Faxuserkey",
            Faxemailaddr = "Faxemailaddr",
            Ebookstartdate = "Ebookstartdate",
            Ebookcurrtype = "Ebookcurrtype",
            Earcentsend = "Earcentsend",
            Earcentuser = "Earcentuser",
            Earcentpass = "Earcentpass",
            Earcentdefaddr = "Earcentdefaddr",
            Cpatitle = "Cpatitle",
            Isebookkeptbyfirm = "Isebookkeptbyfirm",
            Isymmcontractmade = "Isymmcontractmade",
            Ymmname = "Ymmname",
            Ymmsurname = "Ymmsurname",
            Ymmcontdesc = "Ymmcontdesc",
            Ymmconttype = "Ymmconttype",
            Ymmcontdate = "Ymmcontdate",
            Ymmcontnumber = "Ymmcontnumber",
            Lastcontrolno = "Lastcontrolno",
            Lastjournalno = "Lastjournalno",
            Lastgloblineno = "Lastgloblineno",
            Backupebooks = "Backupebooks",
            Einvcustom = "Einvcustom",
            Ymmphone = "Ymmphone",
            Ymmfaxnr = "Ymmfaxnr",
            Ymmemail = "Ymmemail",
            Einvoicetypsgk = "Einvoicetypsgk",
            Taxpayercode = "Taxpayercode",
            Taxpayername = "Taxpayername",
            Ymmchambnr = "Ymmchambnr",
            Ymmtcno = "Ymmtcno",
            Ymmtaxnr = "Ymmtaxnr",
            Useedespatch = "Useedespatch",
            Postlabelcodedesp = "Postlabelcodedesp",
            Senderlabelcodedesp = "Senderlabelcodedesp",
            Shaalgorithm = "Shaalgorithm",
            Useeproducerrec = "Useeproducerrec",
            Cpakdspassword = "Cpakdspassword",
            Cpausername = "Cpausername",
            Useetradesmaninv = "Useetradesmaninv",
            Liquidatingdate = "Liquidatingdate",
            Liquidatedfirm = "Liquidatedfirm",
            Getcpafromdiv = "Getcpafromdiv",
            Liquidationtyp = "Liquidationtyp",
            Emutentsend = "Emutentsend",
            Passwordtaxdecl2 = "Passwordtaxdecl2",
            Emutentuser = "Emutentuser",
            Emutentdefaddr = "Emutentdefaddr",
            Emutentpass = "Emutentpass",
            Cpatckn = "Cpatckn",
            Usepaperinv = "Usepaperinv",
            Shpagncod = "Shpagncod",
            Parole2 = "Parole2",
            Usercode2 = "Usercode2",
            NameAndNr = "NameAndNr"
        }
    }
}
