
namespace E_Maliyet.Maliyet.Entities
{
    using E_Maliyet.Tiger.Entities;
    using E_Maliyet.Tiger.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Maliyet"), TableName("[dbo].[MaliyetTalep]")]
    [DisplayName("Maliyet Talep"), InstanceName("Maliyet Talep")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    [LeftJoin("jDetay", "VW_MaliyetDetayToplam", "  jDetay.MaliyetTalepId   = T0.MaliyetTalepId", RowType = typeof(MaliyetDetayToplamRow), TitlePrefix = "")]

    public sealed class MaliyetTalepRow : Row, IIdRow, INameRow
    {
        [DisplayName("Maliyet Talep Id"), Identity]
        public Int32? MaliyetTalepId
        {
            get { return Fields.MaliyetTalepId[this]; }
            set { Fields.MaliyetTalepId[this] = value; }
        }

        [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Tiger Firma"), Size(3), QuickSearch]
        public String TigerFirma
        {
            get { return Fields.TigerFirma[this]; }
            set { Fields.TigerFirma[this] = value; }
        }

        [DisplayName("Tiger Donem"), Size(2)]
        public String TigerDonem
        {
            get { return Fields.TigerDonem[this]; }
            set { Fields.TigerDonem[this] = value; }
        }

        [DisplayName("Malzeme"), NotNull]
        [LookupEditor(typeof(MalzemeListesiLookup)),ForeignKey("[dbo].[VW_002_ITEMS]", "LOGICALREF"), LeftJoin("jItems"), TextualField("ITEMS_NAME")]
        public Int32? ItemRef
        {
            get { return Fields.ItemRef[this]; }
            set { Fields.ItemRef[this] = value; }
        }

        //[DisplayName("Varyant"), NotNull]
        [DisplayName("Varyant"),   LookupInclude, LookupEditor(typeof(VaryantListesiLookup), CascadeFrom = "ItemRef", CascadeField = "Itemref", AutoComplete = true), ForeignKey("[dbo].[VW_002_VARIANT]", "LOGICALREF"), LeftJoin("jVariant"), TextualField("Name")]

        public Int32? VariantRef
        {
            get { return Fields.VariantRef[this]; }
            set { Fields.VariantRef[this] = value; }
        }

        [DisplayName("Adet"), NotNull]
        public Int32? Adet
        {
            get { return Fields.Adet[this]; }
            set { Fields.Adet[this] = value; }
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

        [DisplayName("Malzeme Adı"), Expression("jItems.[ITEMS_NAME]")]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Varyant Adı"), Expression("jVariant.[NAME]")]
        public String VariantName
        {
            get { return Fields.VariantName[this]; }
            set { Fields.VariantName[this] = value; }
        }

        [DisplayName("Birim Fiyat"), DisplayFormat("#,##0.00"), AlignRight, Expression("jDetay.[BirimFiyat]")]
        public Double? BirimFiyat
        {
            get { return Fields.BirimFiyat[this]; }
            set { Fields.BirimFiyat[this] = value; }
        }

        [DisplayName("Tutar"), DisplayFormat("#,##0.00"), AlignRight, Expression("jDetay.[Tutar]")]
        public Double? Tutar
        {
            get { return Fields.Tutar[this]; }
            set { Fields.Tutar[this] = value; }
        }

        [LookupEditor(typeof(MaliyetDetayRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(MaliyetDetayRow), "MaliyetTalepId", "MaliyetTalepId")]
        //   [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> MaliyetDetaylari
        {
            get { return Fields.MaliyetDetaylari[this]; }
            set { Fields.MaliyetDetaylari[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MaliyetTalepId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TigerFirma; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaliyetTalepRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MaliyetTalepId;
            public Int32Field UserId;
            public DateTimeField InsertDate;
            public StringField TigerFirma;
            public StringField TigerDonem;
            public Int32Field ItemRef;
            public Int32Field VariantRef;
            public Int32Field Adet;

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

            public StringField ItemName;
            public StringField VariantName;
            public DoubleField BirimFiyat;
            public DoubleField Tutar;

            public ListField<Int32> MaliyetDetaylari;

        }
    }
}
