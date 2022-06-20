
namespace E_Go.Raporlar.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Raporlar.TigerBorcluVadeAnalizi")]
    [BasedOnRow(typeof(Entities.TigerBorcluVadeAnaliziRow), CheckNames = true)]
    public class TigerBorcluVadeAnaliziForm
    {
        public String CariHesapKodu { get; set; }
        public String Temsilci { get; set; }
        public String CariHesapünvanı { get; set; }
        public String OzelKod1 { get; set; }
        public String OzelKod2 { get; set; }
        public String OzelKod3 { get; set; }
        public String OzelKod4 { get; set; }
        public String OzelKod5 { get; set; }
        public String TanimliVade { get; set; }
        public Double ToplamBakiye { get; set; }
        public DateTime OrtalamaVade { get; set; }
        public Double DolanBakiye { get; set; }
        public DateTime DolanVade { get; set; }
        public Double DolacakIlkFaturaTutari { get; set; }
        public DateTime DolacakIlkFaturaVade { get; set; }
        public DateTime SonTahsilatTarihi { get; set; }
        public Double SonTahsilatTutari { get; set; }
        public Double DevredenBakiye { get; set; }
        public DateTime DevredenVade { get; set; }
    }
}