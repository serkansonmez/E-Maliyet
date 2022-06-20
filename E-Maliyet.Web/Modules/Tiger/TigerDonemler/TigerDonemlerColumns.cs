
namespace E_Maliyet.Tiger.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tiger.TigerDonemler")]
    [BasedOnRow(typeof(Entities.TigerDonemlerRow), CheckNames = true)]
    public class TigerDonemlerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Logicalref { get; set; }
        public Int16 Nr { get; set; }
        public Int16 Firmnr { get; set; }
        public DateTime Begdate { get; set; }
        public DateTime Enddate { get; set; }
        public Int16 Active { get; set; }
        public Int16 Key1 { get; set; }
        public Int16 Key2 { get; set; }
        public Int16 Key3 { get; set; }
        public Int16 Key4 { get; set; }
        public Int16 Perlocalctype { get; set; }
        public Int16 Perrepcurr { get; set; }
    }
}