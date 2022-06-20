
namespace E_Maliyet.Tiger.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Tiger"), Module("Tiger"), TableName("[dbo].[VW_002_ITEMS]")]
    [DisplayName("Malzeme Listesi"), InstanceName("Malzeme Listesi")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class MalzemeListesiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Logicalref"), Column("LOGICALREF"), NotNull]
        public Int32? Logicalref
        {
            get { return Fields.Logicalref[this]; }
            set { Fields.Logicalref[this] = value; }
        }

        [DisplayName("Items Active"), Column("ITEMS_ACTIVE")]
        public Int16? ItemsActive
        {
            get { return Fields.ItemsActive[this]; }
            set { Fields.ItemsActive[this] = value; }
        }

        [DisplayName("Items Cardtype"), Column("ITEMS_CARDTYPE")]
        public Int16? ItemsCardtype
        {
            get { return Fields.ItemsCardtype[this]; }
            set { Fields.ItemsCardtype[this] = value; }
        }

        [DisplayName("Items Cardtype Tipi"), Column("ITEMS_CARDTYPE_TIPI"), Size(27), NotNull, QuickSearch]
        public String ItemsCardtypeTipi
        {
            get { return Fields.ItemsCardtypeTipi[this]; }
            set { Fields.ItemsCardtypeTipi[this] = value; }
        }

        [DisplayName("Items Code"), Column("ITEMS_CODE"), Size(25)]
        public String ItemsCode
        {
            get { return Fields.ItemsCode[this]; }
            set { Fields.ItemsCode[this] = value; }
        }

        [DisplayName("Items Name"), Column("ITEMS_NAME"), Size(51)]
        public String ItemsName
        {
            get { return Fields.ItemsName[this]; }
            set { Fields.ItemsName[this] = value; }
        }

        [DisplayName("Items Stgrpcode"), Column("ITEMS_STGRPCODE"), Size(25)]
        public String ItemsStgrpcode
        {
            get { return Fields.ItemsStgrpcode[this]; }
            set { Fields.ItemsStgrpcode[this] = value; }
        }

        [DisplayName("Items Producercode"), Column("ITEMS_PRODUCERCODE"), Size(101)]
        public String ItemsProducercode
        {
            get { return Fields.ItemsProducercode[this]; }
            set { Fields.ItemsProducercode[this] = value; }
        }

        [DisplayName("Items Specode"), Column("ITEMS_SPECODE"), Size(11)]
        public String ItemsSpecode
        {
            get { return Fields.ItemsSpecode[this]; }
            set { Fields.ItemsSpecode[this] = value; }
        }

        [DisplayName("Unitsetf Code"), Column("UNITSETF_CODE"), Size(25)]
        public String UnitsetfCode
        {
            get { return Fields.UnitsetfCode[this]; }
            set { Fields.UnitsetfCode[this] = value; }
        }

        [DisplayName("Unitsetf Name"), Column("UNITSETF_NAME"), Size(51)]
        public String UnitsetfName
        {
            get { return Fields.UnitsetfName[this]; }
            set { Fields.UnitsetfName[this] = value; }
        }

        [DisplayName("Unitsetl Code"), Column("UNITSETL_CODE"), Size(11)]
        public String UnitsetlCode
        {
            get { return Fields.UnitsetlCode[this]; }
            set { Fields.UnitsetlCode[this] = value; }
        }

        [DisplayName("Unitsetl Name"), Column("UNITSETL_NAME"), Size(51)]
        public String UnitsetlName
        {
            get { return Fields.UnitsetlName[this]; }
            set { Fields.UnitsetlName[this] = value; }
        }

        [DisplayName("Itmunita 2 Katsayi"), Column("ITMUNITA_2_KATSAYI")]
        public Double? Itmunita2Katsayi
        {
            get { return Fields.Itmunita2Katsayi[this]; }
            set { Fields.Itmunita2Katsayi[this] = value; }
        }

        [DisplayName("Itmunita 3 Katsayi"), Column("ITMUNITA_3_KATSAYI")]
        public Double? Itmunita3Katsayi
        {
            get { return Fields.Itmunita3Katsayi[this]; }
            set { Fields.Itmunita3Katsayi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Logicalref; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemsName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MalzemeListesiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Logicalref;
            public Int16Field ItemsActive;
            public Int16Field ItemsCardtype;
            public StringField ItemsCardtypeTipi;
            public StringField ItemsCode;
            public StringField ItemsName;
            public StringField ItemsStgrpcode;
            public StringField ItemsProducercode;
            public StringField ItemsSpecode;
            public StringField UnitsetfCode;
            public StringField UnitsetfName;
            public StringField UnitsetlCode;
            public StringField UnitsetlName;
            public DoubleField Itmunita2Katsayi;
            public DoubleField Itmunita3Katsayi;
        }
    }
}
