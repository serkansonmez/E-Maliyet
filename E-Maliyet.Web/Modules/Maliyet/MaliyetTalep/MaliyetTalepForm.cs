
namespace E_Maliyet.Maliyet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Maliyet.MaliyetTalep")]
    [BasedOnRow(typeof(Entities.MaliyetTalepRow), CheckNames = true)]
    public class MaliyetTalepForm
    {
        //public Int32 UserId { get; set; }
        //public DateTime InsertDate { get; set; }
        //public String TigerFirma { get; set; }
        //public String TigerDonem { get; set; }
        public Int32 ItemRef { get; set; }
        public Int32 VariantRef { get; set; }
        public Int32 Adet { get; set; }
    }
}