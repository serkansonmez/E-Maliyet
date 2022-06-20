
namespace E_Maliyet.Maliyet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Maliyet.MaliyetTalep")]
    [BasedOnRow(typeof(Entities.MaliyetTalepRow), CheckNames = true)]
    public class MaliyetTalepColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MaliyetTalepId { get; set; }
        [EditLink]
        public DateTime InsertDate { get; set; }
        public String ItemName { get; set; }
        public String VariantName { get; set; }
        //public Int32 ItemRef { get; set; }
        //public Int32 VariantRef { get; set; }
        public Int32 Adet { get; set; }
        public Double BirimFiyat { get; set; }
        public Double Tutar { get; set; }
        public String UserUsername { get; set; }

       
        //public String TigerFirma { get; set; }
        //public String TigerDonem { get; set; }

     
    }
}