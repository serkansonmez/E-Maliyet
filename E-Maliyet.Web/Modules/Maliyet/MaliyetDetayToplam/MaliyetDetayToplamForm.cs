
namespace E_Maliyet.Maliyet.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Maliyet.MaliyetDetayToplam")]
    [BasedOnRow(typeof(Entities.MaliyetDetayToplamRow), CheckNames = true)]
    public class MaliyetDetayToplamForm
    {
        public Double BirimFiyat { get; set; }
        public Double Tutar { get; set; }
    }
}