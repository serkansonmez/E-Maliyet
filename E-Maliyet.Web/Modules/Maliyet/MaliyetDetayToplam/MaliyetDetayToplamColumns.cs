
namespace E_Maliyet.Maliyet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Maliyet.MaliyetDetayToplam")]
    [BasedOnRow(typeof(Entities.MaliyetDetayToplamRow), CheckNames = true)]
    public class MaliyetDetayToplamColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MaliyetTalepId { get; set; }
        public Double BirimFiyat { get; set; }
        public Double Tutar { get; set; }
    }
}