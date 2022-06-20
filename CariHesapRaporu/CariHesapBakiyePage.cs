
namespace E_Go.Raporlar.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using E_Go.Raporlar.Entities;
    using Serenity.Data;
    using E_Go.Common;
    using System.Collections.Generic;
    using System.Data;
    using Serenity.Services;

    [PageAuthorize(typeof(Entities.TigerBorcluVadeAnaliziRow))]
    public class CariHesapBakiyeController : Controller
    {
        [Route("Raporlar/BorcluVadeAnalizi")]
        public ActionResult Index()
        {
            string a = "";
            // var cachedModel = TwoLevelCache.GetLocalStoreOnly("BorcluVadeAnaliziPageModel", TimeSpan.FromSeconds(1),
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("BorcluVadeAnaliziPageModel", TimeSpan.FromSeconds(0),
               TigerBorcluVadeAnaliziRow.Fields.GenerationKey, () =>
               {
                   List<TigerBorcluVadeAnaliziRow> odemeBilgileri = new List<TigerBorcluVadeAnaliziRow>();

                   using (var connection = SqlConnections.NewFor<TigerBorcluVadeAnaliziRow>())
                   {
                       var m = TigerBorcluVadeAnaliziRow.Fields;

                       odemeBilgileri = connection.List<TigerBorcluVadeAnaliziRow>(q => q
                           .Take(10000)
                          .Select(m.CariReferans)
                          .Select(m.CariHesapKodu)
                          .Select(m.Temsilci)
                          .Select(m.CariHesapünvanı)
                          .Select(m.OzelKod1)
                          .Select(m.OzelKod2)
                          .Select(m.OzelKod3)
                          .Select(m.OzelKod4)
                          .Select(m.OzelKod5)
                          .Select(m.TanimliVade)
                          .Select(m.ToplamBakiye)
                          .Select(m.OrtalamaVade)
                          .Select(m.DolanBakiye)
                          .Select(m.DolanVade)
                          .Select(m.DolacakIlkFaturaTutari)
                          .Select(m.DolacakIlkFaturaVade)
                          .Select(m.SonTahsilatTarihi)
                          .Select(m.SonTahsilatTutari)
                          .Select(m.DevredenBakiye)
                          .Select(m.DevredenVade)

                           .OrderBy(m.DolanVade,true));

                   }
                   var model = new CariHesapBakiyePageModel();
                //   model.TigerBorcluVadeAnaliziRow = odemeBilgileri;
                   //    model.JsonData = System.Net.WebUtility.HtmlDecode(Newtonsoft.Json.JsonConvert.SerializeObject(odemeBilgileri).Replace("CariReferans", "id").Replace("CariHesapünvanı", "title").Replace("StartDate","start").Replace("EndDate","end").Replace("DepozitoBedeli","progress").Replace("\"","q").Replace("\'", "q"));
                   model.JsonData = System.Net.WebUtility.HtmlDecode(Newtonsoft.Json.JsonConvert.SerializeObject(odemeBilgileri));
                   return model;
               });

           
             
           // return View("~/Modules/Raporlar/BorcluVadeAnalizi/BorcluVadeAnaliziIndex.cshtml");
            return View(MVC.Views.Raporlar.BorcluVadeAnalizi.BorcluVadeAnaliziIndex, cachedModel);
        }


        [Route("Raporlar/BorcluVadeAnalizi/ListeleSP")]
        public string ListeleSP(string CariHesapKodu)
        {

            if (CariHesapKodu==null)
            {
                CariHesapKodu = "%%";
            }
             
           UserDefinition user = (UserDefinition)Authorization.UserDefinition;

            string donem = user.TigerDonem;
            string firma = user.TigerFirma;


            IDbConnection conn = SqlConnections.NewFor<TigerBorcluVadeAnaliziRow>();

            var data = conn.Query<TigerBorcluVadeAnaliziRow>("dbo.sp_BorcluVadeAnalizi",
              param: new
              {
                  _FIRMA = firma,
                  _DONEM = donem,
                  _RAPTAR ="20200101",
                  _CARKOD = CariHesapKodu,
                  _BAKIYE = 0,

              },
              commandType: System.Data.CommandType.StoredProcedure);

            
          
            return System.Net.WebUtility.HtmlDecode(Newtonsoft.Json.JsonConvert.SerializeObject(data));
             
        }
    }
}