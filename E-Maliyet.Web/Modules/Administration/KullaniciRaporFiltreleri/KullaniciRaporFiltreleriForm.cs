
namespace E_Maliyet.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.KullaniciRaporFiltreleri")]
    [BasedOnRow(typeof(Entities.KullaniciRaporFiltreleriRow), CheckNames = true)]
    public class KullaniciRaporFiltreleriForm
    {
        public Int32 UserId { get; set; }
        public Int32 RaporlarId { get; set; }
        public String KullaniciFiltresi { get; set; }
    }
}