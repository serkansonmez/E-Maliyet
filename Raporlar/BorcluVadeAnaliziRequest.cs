using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Go.Web.Modules.Raporlar
{
 
    public class BorcluVadeAnaliziRequest : ListRequest
    {
        public DateTime? RaporTarihi { get; set; }
        public String CariHesapKodu { get; set; }
        public Double? Bakiye { get; set; }
        
    }
}
