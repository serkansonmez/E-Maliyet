
namespace E_Maliyet.Maliyet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Maliyet"), TableName("[dbo].[VW_MaliyetDetayToplam]")]
    [DisplayName("Maliyet Detay Toplam"), InstanceName("Maliyet Detay Toplam")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MaliyetDetayToplamRow : Row, IIdRow
    {
        [DisplayName("Maliyet Talep Id"), NotNull]
        public Int32? MaliyetTalepId
        {
            get { return Fields.MaliyetTalepId[this]; }
            set { Fields.MaliyetTalepId[this] = value; }
        }

        [DisplayName("Birim Fiyat")]
        public Double? BirimFiyat
        {
            get { return Fields.BirimFiyat[this]; }
            set { Fields.BirimFiyat[this] = value; }
        }

        [DisplayName("Tutar")]
        public Double? Tutar
        {
            get { return Fields.Tutar[this]; }
            set { Fields.Tutar[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MaliyetTalepId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaliyetDetayToplamRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MaliyetTalepId;
            public DoubleField BirimFiyat;
            public DoubleField Tutar;
        }
    }
}
