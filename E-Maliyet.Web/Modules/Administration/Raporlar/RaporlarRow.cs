
namespace E_Maliyet.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Raporlar]")]
    [DisplayName("Raporlar"), InstanceName("Raporlar")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class RaporlarRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Rapor Kodu"), Size(10), NotNull, QuickSearch]
        public String RaporKodu
        {
            get { return Fields.RaporKodu[this]; }
            set { Fields.RaporKodu[this] = value; }
        }

        [DisplayName("Rapor Adi"), Size(150), NotNull]
        public String RaporAdi
        {
            get { return Fields.RaporAdi[this]; }
            set { Fields.RaporAdi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RaporAdi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RaporlarRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField RaporKodu;
            public StringField RaporAdi;
        }
    }
}
