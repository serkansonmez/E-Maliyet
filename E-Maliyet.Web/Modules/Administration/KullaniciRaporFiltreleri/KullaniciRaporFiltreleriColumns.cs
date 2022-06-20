
namespace E_Maliyet.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.KullaniciRaporFiltreleri")]
    [BasedOnRow(typeof(Entities.KullaniciRaporFiltreleriRow), CheckNames = true)]
    public class KullaniciRaporFiltreleriColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String RaporlarRaporAdi { get; set; }
        [EditLink]
        public String KullaniciFiltresi { get; set; }
    }
}