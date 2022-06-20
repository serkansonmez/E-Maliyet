
namespace E_Maliyet.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[KullaniciRaporFiltreleri]")]
    [DisplayName("Kullanici Rapor Filtreleri"), InstanceName("Kullanici Rapor Filtreleri")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class KullaniciRaporFiltreleriRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Raporlar"), NotNull, ForeignKey("[dbo].[Raporlar]", "Id"), LeftJoin("jRaporlar"), TextualField("RaporlarRaporAdi")]
        [LookupEditor(typeof(RaporlarRow))]
        public Int32? RaporlarId
        {
            get { return Fields.RaporlarId[this]; }
            set { Fields.RaporlarId[this] = value; }
        }

        [DisplayName("Kullanici Filtresi"), Size(1024), QuickSearch, TextAreaEditor(Rows = 6)]
        public String KullaniciFiltresi
        {
            get { return Fields.KullaniciFiltresi[this]; }
            set { Fields.KullaniciFiltresi[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        [DisplayName("User Mobile Phone Number"), Expression("jUser.[MobilePhoneNumber]")]
        public String UserMobilePhoneNumber
        {
            get { return Fields.UserMobilePhoneNumber[this]; }
            set { Fields.UserMobilePhoneNumber[this] = value; }
        }

        [DisplayName("User Mobile Phone Verified"), Expression("jUser.[MobilePhoneVerified]")]
        public Boolean? UserMobilePhoneVerified
        {
            get { return Fields.UserMobilePhoneVerified[this]; }
            set { Fields.UserMobilePhoneVerified[this] = value; }
        }

        [DisplayName("User Two Factor Auth"), Expression("jUser.[TwoFactorAuth]")]
        public Int32? UserTwoFactorAuth
        {
            get { return Fields.UserTwoFactorAuth[this]; }
            set { Fields.UserTwoFactorAuth[this] = value; }
        }

        [DisplayName("User Tiger Firma"), Expression("jUser.[TigerFirma]")]
        public String UserTigerFirma
        {
            get { return Fields.UserTigerFirma[this]; }
            set { Fields.UserTigerFirma[this] = value; }
        }

        [DisplayName("User Tiger Donem"), Expression("jUser.[TigerDonem]")]
        public String UserTigerDonem
        {
            get { return Fields.UserTigerDonem[this]; }
            set { Fields.UserTigerDonem[this] = value; }
        }

        [DisplayName("Raporlar Rapor Kodu"), Expression("jRaporlar.[RaporKodu]")]
        public String RaporlarRaporKodu
        {
            get { return Fields.RaporlarRaporKodu[this]; }
            set { Fields.RaporlarRaporKodu[this] = value; }
        }

        [DisplayName("Raporlar Rapor Adi"), Expression("jRaporlar.[RaporAdi]")]
        public String RaporlarRaporAdi
        {
            get { return Fields.RaporlarRaporAdi[this]; }
            set { Fields.RaporlarRaporAdi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KullaniciFiltresi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KullaniciRaporFiltreleriRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field RaporlarId;
            public StringField KullaniciFiltresi;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;
            public StringField UserMobilePhoneNumber;
            public BooleanField UserMobilePhoneVerified;
            public Int32Field UserTwoFactorAuth;
            public StringField UserTigerFirma;
            public StringField UserTigerDonem;

            public StringField RaporlarRaporKodu;
            public StringField RaporlarRaporAdi;
        }
    }
}
