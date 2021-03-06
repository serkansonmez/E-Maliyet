
namespace E_Maliyet.Tiger.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tiger.VaryantListesi")]
    [BasedOnRow(typeof(Entities.VaryantListesiRow), CheckNames = true)]
    public class VaryantListesiForm
    {
        public Int32 Itemref { get; set; }
        public Int16 Cardtype { get; set; }
        public String VariantCardtype { get; set; }
        public String Code { get; set; }
        public String Name { get; set; }
        public Int16 Active { get; set; }
        public Int32 Unitsetref { get; set; }
        public String Specode { get; set; }
        public String Specode2 { get; set; }
        public String Specode3 { get; set; }
        public String Specode4 { get; set; }
        public String Specode5 { get; set; }
        public String Stgrpcode { get; set; }
        public String Producercode { get; set; }
    }
}