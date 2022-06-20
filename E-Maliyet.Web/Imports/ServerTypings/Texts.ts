namespace E_Maliyet.Texts {

    declare namespace Db {

        namespace Administration {

            namespace DataAuditLog {
                export const FieldName: string;
                export const LogDate: string;
                export const LogId: string;
                export const LogType: string;
                export const NewValue: string;
                export const OldValue: string;
                export const RecordId: string;
                export const Tablename: string;
                export const UserDisplayName: string;
                export const UserId: string;
                export const Username: string;
            }

            namespace KullaniciRaporFiltreleri {
                export const Id: string;
                export const KullaniciFiltresi: string;
                export const RaporlarId: string;
                export const RaporlarRaporAdi: string;
                export const RaporlarRaporKodu: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserMobilePhoneNumber: string;
                export const UserMobilePhoneVerified: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserTigerDonem: string;
                export const UserTigerFirma: string;
                export const UserTwoFactorAuth: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Raporlar {
                export const Id: string;
                export const RaporAdi: string;
                export const RaporKodu: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const ImpersonationToken: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TigerDonem: string;
                export const TigerDonemNo: string;
                export const TigerFirma: string;
                export const TigerFirmaAdi: string;
                export const TwoFactorAuth: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Maliyet {

            namespace MaliyetDetay {
                export const Aciklamasi: string;
                export const Adet: string;
                export const Birim: string;
                export const BirimFiyat: string;
                export const FisNo: string;
                export const FisTarih: string;
                export const FisTuru: string;
                export const Kodu: string;
                export const MaliyetDetayId: string;
                export const MaliyetTalepAdet: string;
                export const MaliyetTalepId: string;
                export const MaliyetTalepInsertDate: string;
                export const MaliyetTalepItemRef: string;
                export const MaliyetTalepTigerDonem: string;
                export const MaliyetTalepTigerFirma: string;
                export const MaliyetTalepUserId: string;
                export const MaliyetTalepVariantRef: string;
                export const Miktar: string;
                export const ParentRef: string;
                export const SatirTipi: string;
                export const Seviye: string;
                export const Turu: string;
                export const Tutar: string;
                export const VariantRef: string;
                export const VaryantAciklamasi: string;
                export const VaryantKodu: string;
            }

            namespace MaliyetDetayToplam {
                export const BirimFiyat: string;
                export const MaliyetTalepId: string;
                export const Tutar: string;
            }

            namespace MaliyetTalep {
                export const Adet: string;
                export const BirimFiyat: string;
                export const InsertDate: string;
                export const ItemName: string;
                export const ItemRef: string;
                export const MaliyetDetaylari: string;
                export const MaliyetTalepId: string;
                export const TigerDonem: string;
                export const TigerFirma: string;
                export const Tutar: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserMobilePhoneNumber: string;
                export const UserMobilePhoneVerified: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserTigerDonem: string;
                export const UserTigerFirma: string;
                export const UserTwoFactorAuth: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
                export const VariantName: string;
                export const VariantRef: string;
            }
        }

        namespace Tiger {

            namespace MalzemeListesi {
                export const ItemsActive: string;
                export const ItemsCardtype: string;
                export const ItemsCardtypeTipi: string;
                export const ItemsCode: string;
                export const ItemsName: string;
                export const ItemsProducercode: string;
                export const ItemsSpecode: string;
                export const ItemsStgrpcode: string;
                export const Itmunita2Katsayi: string;
                export const Itmunita3Katsayi: string;
                export const Logicalref: string;
                export const UnitsetfCode: string;
                export const UnitsetfName: string;
                export const UnitsetlCode: string;
                export const UnitsetlName: string;
            }

            namespace TigerDonemler {
                export const Active: string;
                export const Begdate: string;
                export const Enddate: string;
                export const FirmaDonemStr: string;
                export const Firmnr: string;
                export const Key1: string;
                export const Key2: string;
                export const Key3: string;
                export const Key4: string;
                export const Logicalref: string;
                export const Nr: string;
                export const Perlocalctype: string;
                export const Perrepcurr: string;
            }

            namespace TigerFirmalar {
                export const Accepteinv: string;
                export const Accofficecode: string;
                export const Actarea: string;
                export const Advancedproduct: string;
                export const Backupebooks: string;
                export const Bagkurnr: string;
                export const Begday: string;
                export const Begmon: string;
                export const City: string;
                export const Cntrycode: string;
                export const Conscoderef: string;
                export const Contractdate: string;
                export const Contractdesc: string;
                export const Contractnumber: string;
                export const Contracttype: string;
                export const Countofleg: string;
                export const Country: string;
                export const Cpachambnr: string;
                export const Cpacity: string;
                export const Cpacntrycode: string;
                export const Cpacountry: string;
                export const Cpadistrict: string;
                export const Cpadoornr: string;
                export const Cpaemail: string;
                export const Cpaextension: string;
                export const Cpafaxnr: string;
                export const Cpaidtcno: string;
                export const Cpakdspassword: string;
                export const Cpaname: string;
                export const Cpaoccupation: string;
                export const Cpaphone: string;
                export const Cparoad: string;
                export const Cpastreet: string;
                export const Cpasurname: string;
                export const Cpataxnr: string;
                export const Cpataxoff: string;
                export const Cpatckn: string;
                export const Cpatitle: string;
                export const Cpausername: string;
                export const Cpazipcode: string;
                export const Ctable: string;
                export const Dbname: string;
                export const Deductlimit: string;
                export const Direct: string;
                export const District: string;
                export const Dncnstlen: string;
                export const Doornr: string;
                export const Earcentdefaddr: string;
                export const Earcentpass: string;
                export const Earcentsend: string;
                export const Earcentuser: string;
                export const Ebookconttype: string;
                export const Ebookcurrtype: string;
                export const Ebookstartdate: string;
                export const Einvconttype: string;
                export const Einvcustom: string;
                export const Einvoiceid: string;
                export const Einvoicetypsgk: string;
                export const Emailaddr: string;
                export const Employeremail: string;
                export const Employeridtcno: string;
                export const Employername: string;
                export const Employersurname: string;
                export const Emutentdefaddr: string;
                export const Emutentpass: string;
                export const Emutentsend: string;
                export const Emutentuser: string;
                export const Fax: string;
                export const Faxemailaddr: string;
                export const Faxuserkey: string;
                export const Faxusername: string;
                export const Firmemailaddr: string;
                export const Firmeuvatnumber: string;
                export const Firmlang: string;
                export const Firmrepcurr: string;
                export const Firmtype: string;
                export const Firmytlstatus: string;
                export const Getcpafromdiv: string;
                export const Hashvers: string;
                export const Intsalesaddr: string;
                export const Isebookkeptbyfirm: string;
                export const Isymmcontractmade: string;
                export const Jgcompanynr: string;
                export const Jghrfirmcode: string;
                export const Jgpassword: string;
                export const Jgperiodnr: string;
                export const Jgserverurl: string;
                export const Jgusername: string;
                export const Lastcontrolno: string;
                export const Lastgloblineno: string;
                export const Lastjournalno: string;
                export const Liquidatedfirm: string;
                export const Liquidatingdate: string;
                export const Liquidationtyp: string;
                export const Localcaldr: string;
                export const Localctyp: string;
                export const Logicalref: string;
                export const Logoid: string;
                export const Longperiods: string;
                export const Majversnr: string;
                export const Mersisno: string;
                export const Minversnr: string;
                export const Mobfirmalias: string;
                export const Mobpassword: string;
                export const Mobusername: string;
                export const Moddate: string;
                export const Modtime: string;
                export const Nacecode: string;
                export const Name: string;
                export const NameAndNr: string;
                export const Nr: string;
                export const Officaltitle: string;
                export const Orgchart: string;
                export const Parole: string;
                export const Parole2: string;
                export const Passive: string;
                export const Password: string;
                export const Passwordtaxdecl: string;
                export const Passwordtaxdecl2: string;
                export const Pernr: string;
                export const Phone1: string;
                export const Phone2: string;
                export const Postlabelcode: string;
                export const Postlabelcodedesp: string;
                export const Profileid: string;
                export const Ptimestamphost: string;
                export const Ptimestamppass: string;
                export const Ptimestampport: string;
                export const Ptimestampuser: string;
                export const Relversnr: string;
                export const Road: string;
                export const Sector: string;
                export const Securnr: string;
                export const Senderlabelcode: string;
                export const Senderlabelcodedesp: string;
                export const Sepexchtable: string;
                export const Shaalgorithm: string;
                export const Shpagncod: string;
                export const Siteid: string;
                export const Srccriteria: string;
                export const Statecode: string;
                export const Statename: string;
                export const Street: string;
                export const Taxnr: string;
                export const Taxoff: string;
                export const Taxoffcode: string;
                export const Taxoffstatecd: string;
                export const Taxoffstatenm: string;
                export const Taxpayercode: string;
                export const Taxpayername: string;
                export const Tcellappid: string;
                export const Tcellapppw: string;
                export const Timestampapppth: string;
                export const Timestamppass: string;
                export const Timestampport: string;
                export const Timestampserver: string;
                export const Timestampuser: string;
                export const Title: string;
                export const Traderegisno: string;
                export const Usechangelog: string;
                export const Usecommonparam: string;
                export const Useearchive: string;
                export const Useebook: string;
                export const Useedespatch: string;
                export const Useeproducerrec: string;
                export const Useetradesmaninv: string;
                export const Usepaperinv: string;
                export const Useproxy: string;
                export const Usercode: string;
                export const Usercode2: string;
                export const Userext: string;
                export const Username: string;
                export const Useserverdate: string;
                export const Vatroundmtd: string;
                export const Webaddr: string;
                export const Workdayflgs1: string;
                export const Workdayflgs2: string;
                export const Workdayflgs3: string;
                export const Workdayflgs4: string;
                export const Workdayflgs5: string;
                export const Workdayflgs6: string;
                export const Workdayflgs7: string;
                export const Ymmchambnr: string;
                export const Ymmcontdate: string;
                export const Ymmcontdesc: string;
                export const Ymmcontnumber: string;
                export const Ymmconttype: string;
                export const Ymmemail: string;
                export const Ymmfaxnr: string;
                export const Ymmname: string;
                export const Ymmphone: string;
                export const Ymmsurname: string;
                export const Ymmtaxnr: string;
                export const Ymmtcno: string;
                export const Ytlsourcefirm: string;
                export const Zipcode: string;
                export const Zusatzno: string;
            }

            namespace VaryantListesi {
                export const Active: string;
                export const Cardtype: string;
                export const Code: string;
                export const Itemref: string;
                export const Logicalref: string;
                export const Name: string;
                export const Producercode: string;
                export const Specode: string;
                export const Specode2: string;
                export const Specode3: string;
                export const Specode4: string;
                export const Specode5: string;
                export const Stgrpcode: string;
                export const Unitsetref: string;
                export const VariantCardtype: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace CardViewMixin {
            export const CardView: string;
            export const ListView: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace DraggableGroupingMixin {
            export const CollapseAllButton: string;
            export const DropPlaceholder: string;
            export const ExpandAllButton: string;
        }

        namespace EmailClient {
            export const BackButton: string;
            export const CCLabel: string;
            export const CancelButton: string;
            export const ComposeButton: string;
            export const DeleteButton: string;
            export const DeleteMessageConfirmation: string;
            export const DeleteMessageSuccess: string;
            export const DeleteNoSelectionWarning: string;
            export const DeleteSelectedConfirmation: string;
            export const DeleteSelectedSuccess: string;

            namespace FolderNames {
                export const drafts: string;
                export const inbox: string;
                export const junk: string;
                export const sent: string;
                export const trash: string;
            }
            export const FoldersTitle: string;
            export const ForwardButton: string;
            export const ImapHost: string;
            export const ImapPassword: string;
            export const ImapPort: string;
            export const ImapUsername: string;
            export const LoginButton: string;
            export const LoginTitle: string;
            export const MoveMessageSuccess: string;
            export const MoveNoSelectionWarning: string;
            export const MoveSelectedSuccess: string;
            export const MoveToFolder: string;
            export const NewEmailDialogTitle: string;
            export const PageTitle: string;
            export const QuickSettings: string;
            export const RefreshButton: string;
            export const ReplyAllButton: string;
            export const ReplyButton: string;
            export const ReplyEmailDialogTitle: string;
            export const SearchPlaceholder: string;
            export const SendButton: string;
            export const SignoutButton: string;
            export const SmtpHost: string;
            export const SmtpPassword: string;
            export const SmtpPort: string;
            export const SmtpUsername: string;
            export const ToLabel: string;
            export const ToggleReadButton: string;
            export const ToggleSeenNoSelectionWarning: string;
        }

        namespace FavoriteViewsMixin {
            export const DeleteButtonHint: string;
            export const DeleteSuccessMessage: string;
            export const EmptyNameError: string;
            export const FavoriteViews: string;
            export const LoadedViewMessage: string;
            export const SaveButton: string;
            export const SaveSuccessMessage: string;
            export const SaveView: string;
        }

        namespace HeaderFiltersMixin {
            export const CancelButton: string;
            export const ClearButton: string;
            export const OkButton: string;
            export const Search: string;
            export const SelectAll: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }

        namespace WizardDialog {
            export const BackButton: string;
            export const CancelMessage: string;
            export const FinishButton: string;
            export const NextButton: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    E_Maliyet['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},KullaniciRaporFiltreleri:{Id:1,KullaniciFiltresi:1,RaporlarId:1,RaporlarRaporAdi:1,RaporlarRaporKodu:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserMobilePhoneNumber:1,UserMobilePhoneVerified:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserTigerDonem:1,UserTigerFirma:1,UserTwoFactorAuth:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},Language:{Id:1,LanguageId:1,LanguageName:1},Raporlar:{Id:1,RaporAdi:1,RaporKodu:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TigerDonem:1,TigerDonemNo:1,TigerFirma:1,TigerFirmaAdi:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Maliyet:{MaliyetDetay:{Aciklamasi:1,Adet:1,Birim:1,BirimFiyat:1,FisNo:1,FisTarih:1,FisTuru:1,Kodu:1,MaliyetDetayId:1,MaliyetTalepAdet:1,MaliyetTalepId:1,MaliyetTalepInsertDate:1,MaliyetTalepItemRef:1,MaliyetTalepTigerDonem:1,MaliyetTalepTigerFirma:1,MaliyetTalepUserId:1,MaliyetTalepVariantRef:1,Miktar:1,ParentRef:1,SatirTipi:1,Seviye:1,Turu:1,Tutar:1,VariantRef:1,VaryantAciklamasi:1,VaryantKodu:1},MaliyetDetayToplam:{BirimFiyat:1,MaliyetTalepId:1,Tutar:1},MaliyetTalep:{Adet:1,BirimFiyat:1,InsertDate:1,ItemName:1,ItemRef:1,MaliyetDetaylari:1,MaliyetTalepId:1,TigerDonem:1,TigerFirma:1,Tutar:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserMobilePhoneNumber:1,UserMobilePhoneVerified:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserTigerDonem:1,UserTigerFirma:1,UserTwoFactorAuth:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1,VariantName:1,VariantRef:1}},Tiger:{MalzemeListesi:{ItemsActive:1,ItemsCardtype:1,ItemsCardtypeTipi:1,ItemsCode:1,ItemsName:1,ItemsProducercode:1,ItemsSpecode:1,ItemsStgrpcode:1,Itmunita2Katsayi:1,Itmunita3Katsayi:1,Logicalref:1,UnitsetfCode:1,UnitsetfName:1,UnitsetlCode:1,UnitsetlName:1},TigerDonemler:{Active:1,Begdate:1,Enddate:1,FirmaDonemStr:1,Firmnr:1,Key1:1,Key2:1,Key3:1,Key4:1,Logicalref:1,Nr:1,Perlocalctype:1,Perrepcurr:1},TigerFirmalar:{Accepteinv:1,Accofficecode:1,Actarea:1,Advancedproduct:1,Backupebooks:1,Bagkurnr:1,Begday:1,Begmon:1,City:1,Cntrycode:1,Conscoderef:1,Contractdate:1,Contractdesc:1,Contractnumber:1,Contracttype:1,Countofleg:1,Country:1,Cpachambnr:1,Cpacity:1,Cpacntrycode:1,Cpacountry:1,Cpadistrict:1,Cpadoornr:1,Cpaemail:1,Cpaextension:1,Cpafaxnr:1,Cpaidtcno:1,Cpakdspassword:1,Cpaname:1,Cpaoccupation:1,Cpaphone:1,Cparoad:1,Cpastreet:1,Cpasurname:1,Cpataxnr:1,Cpataxoff:1,Cpatckn:1,Cpatitle:1,Cpausername:1,Cpazipcode:1,Ctable:1,Dbname:1,Deductlimit:1,Direct:1,District:1,Dncnstlen:1,Doornr:1,Earcentdefaddr:1,Earcentpass:1,Earcentsend:1,Earcentuser:1,Ebookconttype:1,Ebookcurrtype:1,Ebookstartdate:1,Einvconttype:1,Einvcustom:1,Einvoiceid:1,Einvoicetypsgk:1,Emailaddr:1,Employeremail:1,Employeridtcno:1,Employername:1,Employersurname:1,Emutentdefaddr:1,Emutentpass:1,Emutentsend:1,Emutentuser:1,Fax:1,Faxemailaddr:1,Faxuserkey:1,Faxusername:1,Firmemailaddr:1,Firmeuvatnumber:1,Firmlang:1,Firmrepcurr:1,Firmtype:1,Firmytlstatus:1,Getcpafromdiv:1,Hashvers:1,Intsalesaddr:1,Isebookkeptbyfirm:1,Isymmcontractmade:1,Jgcompanynr:1,Jghrfirmcode:1,Jgpassword:1,Jgperiodnr:1,Jgserverurl:1,Jgusername:1,Lastcontrolno:1,Lastgloblineno:1,Lastjournalno:1,Liquidatedfirm:1,Liquidatingdate:1,Liquidationtyp:1,Localcaldr:1,Localctyp:1,Logicalref:1,Logoid:1,Longperiods:1,Majversnr:1,Mersisno:1,Minversnr:1,Mobfirmalias:1,Mobpassword:1,Mobusername:1,Moddate:1,Modtime:1,Nacecode:1,Name:1,NameAndNr:1,Nr:1,Officaltitle:1,Orgchart:1,Parole:1,Parole2:1,Passive:1,Password:1,Passwordtaxdecl:1,Passwordtaxdecl2:1,Pernr:1,Phone1:1,Phone2:1,Postlabelcode:1,Postlabelcodedesp:1,Profileid:1,Ptimestamphost:1,Ptimestamppass:1,Ptimestampport:1,Ptimestampuser:1,Relversnr:1,Road:1,Sector:1,Securnr:1,Senderlabelcode:1,Senderlabelcodedesp:1,Sepexchtable:1,Shaalgorithm:1,Shpagncod:1,Siteid:1,Srccriteria:1,Statecode:1,Statename:1,Street:1,Taxnr:1,Taxoff:1,Taxoffcode:1,Taxoffstatecd:1,Taxoffstatenm:1,Taxpayercode:1,Taxpayername:1,Tcellappid:1,Tcellapppw:1,Timestampapppth:1,Timestamppass:1,Timestampport:1,Timestampserver:1,Timestampuser:1,Title:1,Traderegisno:1,Usechangelog:1,Usecommonparam:1,Useearchive:1,Useebook:1,Useedespatch:1,Useeproducerrec:1,Useetradesmaninv:1,Usepaperinv:1,Useproxy:1,Usercode:1,Usercode2:1,Userext:1,Username:1,Useserverdate:1,Vatroundmtd:1,Webaddr:1,Workdayflgs1:1,Workdayflgs2:1,Workdayflgs3:1,Workdayflgs4:1,Workdayflgs5:1,Workdayflgs6:1,Workdayflgs7:1,Ymmchambnr:1,Ymmcontdate:1,Ymmcontdesc:1,Ymmcontnumber:1,Ymmconttype:1,Ymmemail:1,Ymmfaxnr:1,Ymmname:1,Ymmphone:1,Ymmsurname:1,Ymmtaxnr:1,Ymmtcno:1,Ytlsourcefirm:1,Zipcode:1,Zusatzno:1},VaryantListesi:{Active:1,Cardtype:1,Code:1,Itemref:1,Logicalref:1,Name:1,Producercode:1,Specode:1,Specode2:1,Specode3:1,Specode4:1,Specode5:1,Stgrpcode:1,Unitsetref:1,VariantCardtype:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
