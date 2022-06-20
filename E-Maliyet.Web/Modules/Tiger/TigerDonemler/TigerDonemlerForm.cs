
namespace E_Maliyet.Tiger.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tiger.TigerDonemler")]
    [BasedOnRow(typeof(Entities.TigerDonemlerRow), CheckNames = true)]
    public class TigerDonemlerForm
    {
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