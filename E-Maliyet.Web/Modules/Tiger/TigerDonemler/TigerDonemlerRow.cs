
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

    [ConnectionKey("Tiger"), Module("Tiger"), TableName("[dbo].[L_CAPIPERIOD]")]
    [DisplayName("Tiger Donemler"), InstanceName("Tiger Donemler")]
    [ReadPermission(TigerDonemler.View)]
    [ModifyPermission(TigerFirmalar.Update)]
    [InsertPermission(TigerFirmalar.Insert)]
    [DeletePermission(TigerFirmalar.Delete)]
    [LookupScript("Firmnr",Permission = "*")]
    public sealed class TigerDonemlerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Logicalref"), Column("LOGICALREF"), Identity]
        public Int32? Logicalref
        {
            get { return Fields.Logicalref[this]; }
            set { Fields.Logicalref[this] = value; }
        }

        //  [DisplayName("Nr"), Column("NR"), LookupInclude, LookupEditor(typeof(Administration.Lookups.TigerFirmalarLookup), CascadeFrom = "Firmnr")]
        [DisplayName("Nr"), Column("NR"), LookupInclude]
        public Int16? Nr
        {
            get { return Fields.Nr[this]; }
            set { Fields.Nr[this] = value; }
        }
        //  [DisplayName("Firmnr"), Column("FIRMNR"), ForeignKey("L_CAPIFIRM", "NR"), LookupInclude]
        [DisplayName("Firmnr"), Column("FIRMNR"), LookupInclude]
        public Int16? Firmnr
        {
            get { return Fields.Firmnr[this]; }
            set { Fields.Firmnr[this] = value; }
        }

        [DisplayName("Begdate"), Column("BEGDATE")]
        public DateTime? Begdate
        {
            get { return Fields.Begdate[this]; }
            set { Fields.Begdate[this] = value; }
        }

        [DisplayName("Enddate"), Column("ENDDATE")]
        public DateTime? Enddate
        {
            get { return Fields.Enddate[this]; }
            set { Fields.Enddate[this] = value; }
        }

        [DisplayName("Active"), Column("ACTIVE")]
        public Int16? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Key1"), Column("KEY1")]
        public Int16? Key1
        {
            get { return Fields.Key1[this]; }
            set { Fields.Key1[this] = value; }
        }

        [DisplayName("Key2"), Column("KEY2")]
        public Int16? Key2
        {
            get { return Fields.Key2[this]; }
            set { Fields.Key2[this] = value; }
        }

        [DisplayName("Key3"), Column("KEY3")]
        public Int16? Key3
        {
            get { return Fields.Key3[this]; }
            set { Fields.Key3[this] = value; }
        }

        [DisplayName("Key4"), Column("KEY4")]
        public Int16? Key4
        {
            get { return Fields.Key4[this]; }
            set { Fields.Key4[this] = value; }
        }

        [DisplayName("Perlocalctype"), Column("PERLOCALCTYPE")]
        public Int16? Perlocalctype
        {
            get { return Fields.Perlocalctype[this]; }
            set { Fields.Perlocalctype[this] = value; }
        }

        [DisplayName("Perrepcurr"), Column("PERREPCURR")]
        public Int16? Perrepcurr
        {
            get { return Fields.Perrepcurr[this]; }
            set { Fields.Perrepcurr[this] = value; }
        }

        //   [Expression("select  CAST(L_CAPIFIRM.NR AS VARCHAR(20)) + '-' + L_CAPIFIRM.NAME + ' - ' + CAST(T0.NR AS VARCHAR(20))  from L_CAPIFIRM  Where  L_CAPIFIRM.NR = T0.FIRMNR"), QuickSearch, LookupInclude]
        //     [Expression("select  CAST(L_CAPIFIRM.NR AS VARCHAR(20)) + '-' + L_CAPIFIRM.NAME + ' - ' + CAST(T0.NR AS VARCHAR(20))  from L_CAPIFIRM " +
        //        " Where  L_CAPIFIRM.NR = T0.FIRMNR"), QuickSearch, LookupInclude]

        //[DisplayName("Firma Dönem"),Expression("T0.Nr")]
        [DisplayName("Firma Dönem"), Expression("cast(T0.Nr as varchar(20))")]
        public string FirmaDonemStr
        {
            get { return Fields.FirmaDonemStr[this]; }
            set { Fields.FirmaDonemStr[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Nr; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FirmaDonemStr; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public TigerDonemlerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Logicalref;
            public Int16Field Nr;
            public Int16Field Firmnr;
            public DateTimeField Begdate;
            public DateTimeField Enddate;
            public Int16Field Active;
            public Int16Field Key1;
            public Int16Field Key2;
            public Int16Field Key3;
            public Int16Field Key4;
            public Int16Field Perlocalctype;
            public Int16Field Perrepcurr;

            public StringField FirmaDonemStr;
        }
    }
}
