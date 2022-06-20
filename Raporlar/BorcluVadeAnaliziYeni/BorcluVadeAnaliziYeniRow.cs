
namespace E_Go.Raporlar.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Raporlar"), TableName("[dbo].[Tmp_BorcluVadeAnalizi]")]
    [DisplayName("Borclu Vade Analizi Yeni"), InstanceName("Borclu Vade Analizi Yeni")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorcluVadeAnaliziYeniRow : Row, IIdRow, INameRow
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

        [DisplayName("Tel1"), Column("TEL1"), Size(51)]
        public String Tel1
        {
            get { return Fields.Tel1[this]; }
            set { Fields.Tel1[this] = value; }
        }

        [DisplayName("Tel2"), Column("TEL2"), Size(51)]
        public String Tel2
        {
            get { return Fields.Tel2[this]; }
            set { Fields.Tel2[this] = value; }
        }

        [DisplayName("Cari Hesap ünvanı"), Column("Cari Hesap Ünvanı"), Size(201)]
        public String CariHesapünvanı
        {
            get { return Fields.CariHesapünvanı[this]; }
            set { Fields.CariHesapünvanı[this] = value; }
        }

        [DisplayName("Özel Kod"), Column("Özel Kod"), Size(11)]
        public String ÖzelKod
        {
            get { return Fields.ÖzelKod[this]; }
            set { Fields.ÖzelKod[this] = value; }
        }

        [DisplayName("Özel Kod 2"), Column("Özel Kod 2"), Size(11)]
        public String ÖzelKod2
        {
            get { return Fields.ÖzelKod2[this]; }
            set { Fields.ÖzelKod2[this] = value; }
        }

        [DisplayName("Özel Kod 3"), Column("Özel Kod 3"), Size(11)]
        public String ÖzelKod3
        {
            get { return Fields.ÖzelKod3[this]; }
            set { Fields.ÖzelKod3[this] = value; }
        }

        [DisplayName("Özel Kod 4"), Column("Özel Kod 4"), Size(11)]
        public String ÖzelKod4
        {
            get { return Fields.ÖzelKod4[this]; }
            set { Fields.ÖzelKod4[this] = value; }
        }

        [DisplayName("Özel Kod 5"), Column("Özel Kod 5"), Size(11)]
        public String ÖzelKod5
        {
            get { return Fields.ÖzelKod5[this]; }
            set { Fields.ÖzelKod5[this] = value; }
        }

        [DisplayName("Tanımlı Vade"), Column("Tanımlı Vade"), Size(201), NotNull]
        public String TanımlıVade
        {
            get { return Fields.TanımlıVade[this]; }
            set { Fields.TanımlıVade[this] = value; }
        }

        [DisplayName("Toplam Bakiye"), Column("Toplam Bakiye")]
        public Double? ToplamBakiye
        {
            get { return Fields.ToplamBakiye[this]; }
            set { Fields.ToplamBakiye[this] = value; }
        }

        [DisplayName("Ortalama Vade"), Column("Ortalama Vade")]
        public DateTime? OrtalamaVade
        {
            get { return Fields.OrtalamaVade[this]; }
            set { Fields.OrtalamaVade[this] = value; }
        }

        [DisplayName("Dolan Bakiye"), Column("Dolan Bakiye")]
        public Double? DolanBakiye
        {
            get { return Fields.DolanBakiye[this]; }
            set { Fields.DolanBakiye[this] = value; }
        }

        [DisplayName("Dolan Vade"), Column("Dolan Vade")]
        public DateTime? DolanVade
        {
            get { return Fields.DolanVade[this]; }
            set { Fields.DolanVade[this] = value; }
        }

        [DisplayName("Dolacak Ilk Fatura Tutarı"), Column("Dolacak Ilk Fatura Tutarı")]
        public Double? DolacakIlkFaturaTutarı
        {
            get { return Fields.DolacakIlkFaturaTutarı[this]; }
            set { Fields.DolacakIlkFaturaTutarı[this] = value; }
        }

        [DisplayName("Dolacak Ilk Fatura Vade"), Column("Dolacak Ilk Fatura Vade")]
        public DateTime? DolacakIlkFaturaVade
        {
            get { return Fields.DolacakIlkFaturaVade[this]; }
            set { Fields.DolacakIlkFaturaVade[this] = value; }
        }

        [DisplayName("Son Tahsilat Tarihi"), Column("Son Tahsilat Tarihi")]
        public DateTime? SonTahsilatTarihi
        {
            get { return Fields.SonTahsilatTarihi[this]; }
            set { Fields.SonTahsilatTarihi[this] = value; }
        }

        [DisplayName("Son Tahsilat Türü"), Column("Son Tahsilat Türü"), Size(14), NotNull]
        public String SonTahsilatTürü
        {
            get { return Fields.SonTahsilatTürü[this]; }
            set { Fields.SonTahsilatTürü[this] = value; }
        }

        [DisplayName("Son Tahsilat çek OrtVade"), Column("Son Tahsilat Çek OrtVade")]
        public DateTime? SonTahsilatçekOrtVade
        {
            get { return Fields.SonTahsilatçekOrtVade[this]; }
            set { Fields.SonTahsilatçekOrtVade[this] = value; }
        }

        [DisplayName("Son Tahsilat Tutarı"), Column("Son Tahsilat Tutarı")]
        public Double? SonTahsilatTutarı
        {
            get { return Fields.SonTahsilatTutarı[this]; }
            set { Fields.SonTahsilatTutarı[this] = value; }
        }

        [DisplayName("Devreden Bakiye"), Column("Devreden Bakiye")]
        public Double? DevredenBakiye
        {
            get { return Fields.DevredenBakiye[this]; }
            set { Fields.DevredenBakiye[this] = value; }
        }

        [DisplayName("Devreden Vade"), Column("Devreden Vade")]
        public DateTime? DevredenVade
        {
            get { return Fields.DevredenVade[this]; }
            set { Fields.DevredenVade[this] = value; }
        }

        [DisplayName("Son Gorusen Kisi"), Column("Son Gorusen Kisi"), Size(25)]
        public String SonGorusenKisi
        {
            get { return Fields.SonGorusenKisi[this]; }
            set { Fields.SonGorusenKisi[this] = value; }
        }

        [DisplayName("Son Gorusulen Kisi"), Column("Son Gorusulen Kisi"), Size(50)]
        public String SonGorusulenKisi
        {
            get { return Fields.SonGorusulenKisi[this]; }
            set { Fields.SonGorusulenKisi[this] = value; }
        }

        [DisplayName("Son Gorusme Tarihi"), Column("Son Gorusme Tarihi")]
        public DateTime? SonGorusmeTarihi
        {
            get { return Fields.SonGorusmeTarihi[this]; }
            set { Fields.SonGorusmeTarihi[this] = value; }
        }

        [DisplayName("Son Gorusme Detayı"), Column("Son Gorusme Detayı"), Size(2147483647)]
        public String SonGorusmeDetayı
        {
            get { return Fields.SonGorusmeDetayı[this]; }
            set { Fields.SonGorusmeDetayı[this] = value; }
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

        public BorcluVadeAnaliziYeniRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CariReferans;
            public StringField CariHesapKodu;
            public StringField Tel1;
            public StringField Tel2;
            public StringField CariHesapünvanı;
            public StringField ÖzelKod;
            public StringField ÖzelKod2;
            public StringField ÖzelKod3;
            public StringField ÖzelKod4;
            public StringField ÖzelKod5;
            public StringField TanımlıVade;
            public DoubleField ToplamBakiye;
            public DateTimeField OrtalamaVade;
            public DoubleField DolanBakiye;
            public DateTimeField DolanVade;
            public DoubleField DolacakIlkFaturaTutarı;
            public DateTimeField DolacakIlkFaturaVade;
            public DateTimeField SonTahsilatTarihi;
            public StringField SonTahsilatTürü;
            public DateTimeField SonTahsilatçekOrtVade;
            public DoubleField SonTahsilatTutarı;
            public DoubleField DevredenBakiye;
            public DateTimeField DevredenVade;
            public StringField SonGorusenKisi;
            public StringField SonGorusulenKisi;
            public DateTimeField SonGorusmeTarihi;
            public StringField SonGorusmeDetayı;
        }
    }
}
