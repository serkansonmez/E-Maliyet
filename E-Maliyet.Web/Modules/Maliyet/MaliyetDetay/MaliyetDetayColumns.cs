
namespace E_Maliyet.Maliyet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Maliyet.MaliyetDetay")]
    [BasedOnRow(typeof(Entities.MaliyetDetayRow), CheckNames = true)]
    public class MaliyetDetayColumns
    {
       // [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
      ///  public Int32 MaliyetDetayId { get; set; }
       // public String MaliyetTalepTigerFirma { get; set; }
     //   public Int32 Seviye { get; set; }
     
    //    public String SatirTipi { get; set; }
        public String Turu { get; set; }
        public String Kodu { get; set; }
        public String Aciklamasi { get; set; }
      //  public String VaryantKodu { get; set; }
        public String VaryantAciklamasi { get; set; }
        public Int32 Miktar { get; set; }
        public String Birim { get; set; }
      //  public Int32 VariantRef { get; set; }
        public Int32 Adet { get; set; }
        public Double BirimFiyat { get; set; }
        public Double Tutar { get; set; }

        public String FisTuru { get; set; }
        public String FisNo { get; set; }
        public DateTime FisTarih { get; set; }

    }
}