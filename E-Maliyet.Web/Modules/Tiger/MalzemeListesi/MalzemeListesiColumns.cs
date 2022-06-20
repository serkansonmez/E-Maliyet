
namespace E_Maliyet.Tiger.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tiger.MalzemeListesi")]
    [BasedOnRow(typeof(Entities.MalzemeListesiRow), CheckNames = true)]
    public class MalzemeListesiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Logicalref { get; set; }
        public Int16 ItemsActive { get; set; }
        public Int16 ItemsCardtype { get; set; }
        [EditLink]
        public String ItemsCardtypeTipi { get; set; }
        public String ItemsCode { get; set; }
        public String ItemsName { get; set; }
        public String ItemsStgrpcode { get; set; }
        public String ItemsProducercode { get; set; }
        public String ItemsSpecode { get; set; }
        public String UnitsetfCode { get; set; }
        public String UnitsetfName { get; set; }
        public String UnitsetlCode { get; set; }
        public String UnitsetlName { get; set; }
        public Double Itmunita2Katsayi { get; set; }
        public Double Itmunita3Katsayi { get; set; }
    }
}