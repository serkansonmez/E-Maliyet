
namespace E_Maliyet.Tiger.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Tiger"), Module("Tiger"), TableName("[dbo].[VW_002_VARIANT]")]
    [DisplayName("Varyant Listesi"), InstanceName("Varyant Listesi")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class VaryantListesiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Logicalref"), Column("LOGICALREF"), Identity]
        public Int32? Logicalref
        {
            get { return Fields.Logicalref[this]; }
            set { Fields.Logicalref[this] = value; }
        }

        [DisplayName("Itemref"), Column("ITEMREF")]
        public Int32? Itemref
        {
            get { return Fields.Itemref[this]; }
            set { Fields.Itemref[this] = value; }
        }

        [DisplayName("Cardtype"), Column("CARDTYPE")]
        public Int16? Cardtype
        {
            get { return Fields.Cardtype[this]; }
            set { Fields.Cardtype[this] = value; }
        }

        [DisplayName("Variant Cardtype"), Column("VARIANT_CARDTYPE"), Size(27), NotNull, QuickSearch]
        public String VariantCardtype
        {
            get { return Fields.VariantCardtype[this]; }
            set { Fields.VariantCardtype[this] = value; }
        }

        [DisplayName("Code"), Column("CODE"), Size(25)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Name"), Column("NAME"), Size(51)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Active"), Column("ACTIVE")]
        public Int16? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Unitsetref"), Column("UNITSETREF")]
        public Int32? Unitsetref
        {
            get { return Fields.Unitsetref[this]; }
            set { Fields.Unitsetref[this] = value; }
        }

        [DisplayName("Specode"), Column("SPECODE"), Size(11)]
        public String Specode
        {
            get { return Fields.Specode[this]; }
            set { Fields.Specode[this] = value; }
        }

        [DisplayName("Specode2"), Column("SPECODE2"), Size(11)]
        public String Specode2
        {
            get { return Fields.Specode2[this]; }
            set { Fields.Specode2[this] = value; }
        }

        [DisplayName("Specode3"), Column("SPECODE3"), Size(11)]
        public String Specode3
        {
            get { return Fields.Specode3[this]; }
            set { Fields.Specode3[this] = value; }
        }

        [DisplayName("Specode4"), Column("SPECODE4"), Size(11)]
        public String Specode4
        {
            get { return Fields.Specode4[this]; }
            set { Fields.Specode4[this] = value; }
        }

        [DisplayName("Specode5"), Column("SPECODE5"), Size(11)]
        public String Specode5
        {
            get { return Fields.Specode5[this]; }
            set { Fields.Specode5[this] = value; }
        }

        [DisplayName("Stgrpcode"), Column("STGRPCODE"), Size(25)]
        public String Stgrpcode
        {
            get { return Fields.Stgrpcode[this]; }
            set { Fields.Stgrpcode[this] = value; }
        }

        [DisplayName("Producercode"), Column("PRODUCERCODE"), Size(101)]
        public String Producercode
        {
            get { return Fields.Producercode[this]; }
            set { Fields.Producercode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Logicalref; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VaryantListesiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Logicalref;
            public Int32Field Itemref;
            public Int16Field Cardtype;
            public StringField VariantCardtype;
            public StringField Code;
            public StringField Name;
            public Int16Field Active;
            public Int32Field Unitsetref;
            public StringField Specode;
            public StringField Specode2;
            public StringField Specode3;
            public StringField Specode4;
            public StringField Specode5;
            public StringField Stgrpcode;
            public StringField Producercode;
        }
    }
}
