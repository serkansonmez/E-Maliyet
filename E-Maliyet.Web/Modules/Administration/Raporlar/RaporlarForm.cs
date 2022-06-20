
namespace E_Maliyet.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Raporlar")]
    [BasedOnRow(typeof(Entities.RaporlarRow), CheckNames = true)]
    public class RaporlarForm
    {
        public String RaporKodu { get; set; }
        public String RaporAdi { get; set; }
    }
}