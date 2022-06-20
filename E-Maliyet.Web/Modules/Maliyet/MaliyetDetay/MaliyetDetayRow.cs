
namespace E_Maliyet.Maliyet.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Maliyet"), TableName("[dbo].[MaliyetDetay]")]
    [DisplayName("Maliyet Detay"), InstanceName("Maliyet Detay")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    [LookupScript()]
    public sealed class MaliyetDetayRow : Row, IIdRow, INameRow
    {
        [DisplayName("Maliyet Detay Id"), Identity]
        public Int32? MaliyetDetayId
        {
            get { return Fields.MaliyetDetayId[this]; }
            set { Fields.MaliyetDetayId[this] = value; }
        }

        [DisplayName("Maliyet Talep"), PrimaryKey, ForeignKey("[dbo].[MaliyetTalep]", "MaliyetTalepId"), LeftJoin("jMaliyetTalep"), TextualField("MaliyetTalepTigerFirma")]
        public Int32? MaliyetTalepId
        {
            get { return Fields.MaliyetTalepId[this]; }
            set { Fields.MaliyetTalepId[this] = value; }
        }

        [DisplayName("Seviye"), NotNull]
        public Int32? Seviye
        {
            get { return Fields.Seviye[this]; }
            set { Fields.Seviye[this] = value; }
        }

        [DisplayName("Satir Tipi"), Size(20), NotNull, QuickSearch]
        public String SatirTipi
        {
            get { return Fields.SatirTipi[this]; }
            set { Fields.SatirTipi[this] = value; }
        }

        [DisplayName("Turu"), Size(20), NotNull]
        public String Turu
        {
            get { return Fields.Turu[this]; }
            set { Fields.Turu[this] = value; }
        }

        [DisplayName("Kodu"), Size(50), NotNull]
        public String Kodu
        {
            get { return Fields.Kodu[this]; }
            set { Fields.Kodu[this] = value; }
        }

        [DisplayName("Aciklamasi"), Size(200), NotNull]
        public String Aciklamasi
        {
            get { return Fields.Aciklamasi[this]; }
            set { Fields.Aciklamasi[this] = value; }
        }

        [DisplayName("Varyant Kodu"), Size(50), NotNull]
        public String VaryantKodu
        {
            get { return Fields.VaryantKodu[this]; }
            set { Fields.VaryantKodu[this] = value; }
        }

        [DisplayName("Varyant Aciklamasi"), Size(200), NotNull]
        public String VaryantAciklamasi
        {
            get { return Fields.VaryantAciklamasi[this]; }
            set { Fields.VaryantAciklamasi[this] = value; }
        }

        [DisplayName("Miktar"), NotNull, DisplayFormat("#,##0.00")]
        public Double? Miktar
        {
            get { return Fields.Miktar[this]; }
            set { Fields.Miktar[this] = value; }
        }

        [DisplayName("Birim"), Size(20), NotNull]
        public String Birim
        {
            get { return Fields.Birim[this]; }
            set { Fields.Birim[this] = value; }
        }

        [DisplayName("Variant Ref"), NotNull]
        public Int32? VariantRef
        {
            get { return Fields.VariantRef[this]; }
            set { Fields.VariantRef[this] = value; }
        }

        [DisplayName("Adet"), NotNull, DisplayFormat("#,##0.00")]
        public Double? Adet
        {
            get { return Fields.Adet[this]; }
            set { Fields.Adet[this] = value; }
        }

        [DisplayName("Birim Fiyat"), NotNull, DisplayFormat("#,##0.00"), AlignRight]
        public Double? BirimFiyat
        {
            get { return Fields.BirimFiyat[this]; }
            set { Fields.BirimFiyat[this] = value; }
        }

        [DisplayName("Tutar"), NotNull, DisplayFormat("#,##0.00"), AlignRight]
        public Double? Tutar
        {
            get { return Fields.Tutar[this]; }
            set { Fields.Tutar[this] = value; }
        }

        [DisplayName("Fiş Türü"), Size(100), NotNull]
        public String FisTuru
        {
            get { return Fields.FisTuru[this]; }
            set { Fields.FisTuru[this] = value; }
        }
        [DisplayName("Fiş No"), Size(50), NotNull]
        public String FisNo
        {
            get { return Fields.FisNo[this]; }
            set { Fields.FisNo[this] = value; }
        }
        [DisplayName("Fiş Tarih"), Size(50), NotNull]
        public DateTime? FisTarih
        {
            get { return Fields.FisTarih[this]; }
            set { Fields.FisTarih[this] = value; }
        }
        [DisplayName("ParentRef")]
        public Int32? ParentRef
        {
            get { return Fields.ParentRef[this]; }
            set { Fields.ParentRef[this] = value; }
        }
        [DisplayName("Maliyet Talep User Id"), Expression("jMaliyetTalep.[UserId]")]
        public Int32? MaliyetTalepUserId
        {
            get { return Fields.MaliyetTalepUserId[this]; }
            set { Fields.MaliyetTalepUserId[this] = value; }
        }

        [DisplayName("Maliyet Talep Insert Date"), Expression("jMaliyetTalep.[InsertDate]")]
        public DateTime? MaliyetTalepInsertDate
        {
            get { return Fields.MaliyetTalepInsertDate[this]; }
            set { Fields.MaliyetTalepInsertDate[this] = value; }
        }

        [DisplayName("Maliyet Talep Tiger Firma"), Expression("jMaliyetTalep.[TigerFirma]")]
        public String MaliyetTalepTigerFirma
        {
            get { return Fields.MaliyetTalepTigerFirma[this]; }
            set { Fields.MaliyetTalepTigerFirma[this] = value; }
        }

        [DisplayName("Maliyet Talep Tiger Donem"), Expression("jMaliyetTalep.[TigerDonem]")]
        public String MaliyetTalepTigerDonem
        {
            get { return Fields.MaliyetTalepTigerDonem[this]; }
            set { Fields.MaliyetTalepTigerDonem[this] = value; }
        }

        [DisplayName("Maliyet Talep Item Ref"), Expression("jMaliyetTalep.[ItemRef]")]
        public Int32? MaliyetTalepItemRef
        {
            get { return Fields.MaliyetTalepItemRef[this]; }
            set { Fields.MaliyetTalepItemRef[this] = value; }
        }

        [DisplayName("Maliyet Talep Variant Ref"), Expression("jMaliyetTalep.[VariantRef]")]
        public Int32? MaliyetTalepVariantRef
        {
            get { return Fields.MaliyetTalepVariantRef[this]; }
            set { Fields.MaliyetTalepVariantRef[this] = value; }
        }

        [DisplayName("Maliyet Talep Adet"), Expression("jMaliyetTalep.[Adet]")]
        public Int32? MaliyetTalepAdet
        {
            get { return Fields.MaliyetTalepAdet[this]; }
            set { Fields.MaliyetTalepAdet[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VariantRef; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Aciklamasi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaliyetDetayRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MaliyetDetayId;
            public Int32Field MaliyetTalepId;
            public Int32Field Seviye;
            public StringField SatirTipi;
            public StringField Turu;
            public StringField Kodu;
            public StringField Aciklamasi;
            public StringField VaryantKodu;
            public StringField VaryantAciklamasi;
            public DoubleField Miktar;
            public StringField Birim;
            public Int32Field VariantRef;
            public DoubleField Adet;
            public DoubleField BirimFiyat;
            public DoubleField Tutar;
            public StringField FisTuru;
            public StringField FisNo;
            public DateTimeField FisTarih;
            public Int32Field ParentRef;

            public Int32Field MaliyetTalepUserId;
            public DateTimeField MaliyetTalepInsertDate;
            public StringField MaliyetTalepTigerFirma;
            public StringField MaliyetTalepTigerDonem;
            public Int32Field MaliyetTalepItemRef;
            public Int32Field MaliyetTalepVariantRef;
            public Int32Field MaliyetTalepAdet;
        }
    }
}
