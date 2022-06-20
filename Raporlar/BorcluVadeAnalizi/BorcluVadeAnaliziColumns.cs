
namespace E_Go.Raporlar.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Raporlar.BorcluVadeAnalizi")]
    [BasedOnRow(typeof(Entities.BorcluVadeAnaliziRow), CheckNames = true)]
    public class BorcluVadeAnaliziColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CariReferans { get; set; }
        [EditLink]
        public String CariHesapKodu { get; set; }
        public String Tel1 { get; set; }
        public String Tel2 { get; set; }
        public String CariHesapünvanı { get; set; }
        public String ÖzelKod { get; set; }
        public String ÖzelKod2 { get; set; }
        public String ÖzelKod3 { get; set; }
        public String ÖzelKod4 { get; set; }
        public String ÖzelKod5 { get; set; }
        public String TanımlıVade { get; set; }
        public Double ToplamBakiye { get; set; }
        public DateTime OrtalamaVade { get; set; }
        public Double DolanBakiye { get; set; }
        public DateTime DolanVade { get; set; }
        public Double DolacakIlkFaturaTutarı { get; set; }
        public DateTime DolacakIlkFaturaVade { get; set; }
        public DateTime SonTahsilatTarihi { get; set; }
        public String SonTahsilatTürü { get; set; }
        public DateTime SonTahsilatçekOrtVade { get; set; }
        public Double SonTahsilatTutarı { get; set; }
        public Double DevredenBakiye { get; set; }
        public DateTime DevredenVade { get; set; }
        public String SonGorusenKisi { get; set; }
        public String SonGorusulenKisi { get; set; }
        public DateTime SonGorusmeTarihi { get; set; }
        public String SonGorusmeDetayı { get; set; }
    }
}