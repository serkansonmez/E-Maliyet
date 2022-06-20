
namespace E_Maliyet.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Raporlar")]
    [BasedOnRow(typeof(Entities.RaporlarRow), CheckNames = true)]
    public class RaporlarColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String RaporKodu { get; set; }
        public String RaporAdi { get; set; }
    }
}