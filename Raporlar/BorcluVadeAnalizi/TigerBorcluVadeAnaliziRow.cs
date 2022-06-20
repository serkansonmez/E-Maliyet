
namespace E_Go.Raporlar.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Tiger"), Module("Raporlar"), TableName("[dbo].[Tmp_BorcluVadeAnalizi]")]
    [DisplayName("Tiger Borclu Vade Analizi"), InstanceName("Tiger Borclu Vade Analizi")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TigerBorcluVadeAnaliziRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cari Referans"), NotNull]
        public Int32? CariReferans
        {
            get { return Fields.CariReferans[this]; }
            set { Fields.CariReferans[this] = value; }
        }

        [DisplayName("Cari Hesap Kodu"), Size(17), QuickSearch]
        public String CariHesapKodu
        {
            get { return Fields.CariHesapKodu[this]; }
            set { Fields.CariHesapKodu[this] = value; }
        }

        [DisplayName("Temsilci"), Size(11)]
        public String Temsilci
        {
            get { return Fields.Temsilci[this]; }
            set { Fields.Temsilci[this] = value; }
        }

        [DisplayName("Cari Hesapünvanı"), Column("CariHesapÜnvanı"), Size(201)]
        public String CariHesapünvanı
        {
            get { return Fields.CariHesapünvanı[this]; }
            set { Fields.CariHesapünvanı[this] = value; }
        }

        [DisplayName("Ozel Kod1"), Size(11)]
        public String OzelKod1
        {
            get { return Fields.OzelKod1[this]; }
            set { Fields.OzelKod1[this] = value; }
        }

        [DisplayName("Ozel Kod2"), Size(11)]
        public String OzelKod2
        {
            get { return Fields.OzelKod2[this]; }
            set { Fields.OzelKod2[this] = value; }
        }

        [DisplayName("Ozel Kod3"), Size(11)]
        public String OzelKod3
        {
            get { return Fields.OzelKod3[this]; }
            set { Fields.OzelKod3[this] = value; }
        }

        [DisplayName("Ozel Kod4"), Size(11)]
        public String OzelKod4
        {
            get { return Fields.OzelKod4[this]; }
            set { Fields.OzelKod4[this] = value; }
        }

        [DisplayName("Ozel Kod5"), Size(11)]
        public String OzelKod5
        {
            get { return Fields.OzelKod5[this]; }
            set { Fields.OzelKod5[this] = value; }
        }

        [DisplayName("Tanimli Vade"), Size(201), NotNull]
        public String TanimliVade
        {
            get { return Fields.TanimliVade[this]; }
            set { Fields.TanimliVade[this] = value; }
        }

        [DisplayName("Toplam Bakiye")]
        public Double? ToplamBakiye
        {
            get { return Fields.ToplamBakiye[this]; }
            set { Fields.ToplamBakiye[this] = value; }
        }

        [DisplayName("Ortalama Vade")]
        public DateTime? OrtalamaVade
        {
            get { return Fields.OrtalamaVade[this]; }
            set { Fields.OrtalamaVade[this] = value; }
        }

        [DisplayName("Dolan Bakiye")]
        public Double? DolanBakiye
        {
            get { return Fields.DolanBakiye[this]; }
            set { Fields.DolanBakiye[this] = value; }
        }

        [DisplayName("Dolan Vade")]
        public DateTime? DolanVade
        {
            get { return Fields.DolanVade[this]; }
            set { Fields.DolanVade[this] = value; }
        }

        [DisplayName("Dolacak Ilk Fatura Tutari")]
        public Double? DolacakIlkFaturaTutari
        {
            get { return Fields.DolacakIlkFaturaTutari[this]; }
            set { Fields.DolacakIlkFaturaTutari[this] = value; }
        }

        [DisplayName("Dolacak Ilk Fatura Vade")]
        public DateTime? DolacakIlkFaturaVade
        {
            get { return Fields.DolacakIlkFaturaVade[this]; }
            set { Fields.DolacakIlkFaturaVade[this] = value; }
        }

        [DisplayName("Son Tahsilat Tarihi")]
        public DateTime? SonTahsilatTarihi
        {
            get { return Fields.SonTahsilatTarihi[this]; }
            set { Fields.SonTahsilatTarihi[this] = value; }
        }

        [DisplayName("Son Tahsilat Tutari")]
        public Double? SonTahsilatTutari
        {
            get { return Fields.SonTahsilatTutari[this]; }
            set { Fields.SonTahsilatTutari[this] = value; }
        }

        [DisplayName("Devreden Bakiye")]
        public Double? DevredenBakiye
        {
            get { return Fields.DevredenBakiye[this]; }
            set { Fields.DevredenBakiye[this] = value; }
        }

        [DisplayName("Devreden Vade")]
        public DateTime? DevredenVade
        {
            get { return Fields.DevredenVade[this]; }
            set { Fields.DevredenVade[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CariReferans; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CariHesapKodu; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TigerBorcluVadeAnaliziRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CariReferans;
            public StringField CariHesapKodu;
            public StringField Temsilci;
            public StringField CariHesapünvanı;
            public StringField OzelKod1;
            public StringField OzelKod2;
            public StringField OzelKod3;
            public StringField OzelKod4;
            public StringField OzelKod5;
            public StringField TanimliVade;
            public DoubleField ToplamBakiye;
            public DateTimeField OrtalamaVade;
            public DoubleField DolanBakiye;
            public DateTimeField DolanVade;
            public DoubleField DolacakIlkFaturaTutari;
            public DateTimeField DolacakIlkFaturaVade;
            public DateTimeField SonTahsilatTarihi;
            public DoubleField SonTahsilatTutari;
            public DoubleField DevredenBakiye;
            public DateTimeField DevredenVade;
        }
    }
}
