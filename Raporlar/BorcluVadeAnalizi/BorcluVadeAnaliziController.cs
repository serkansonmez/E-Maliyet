using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using E_Go.Raporlar.Entities;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
using Serenity.Data;

 
namespace E_Go.Raporlar.BorcluVadeAnalizi
{
    [Route("BorcluVadeAnalizi/[controller]")]
    //[ApiController]
    public class BorcluVadeAnaliziController : Controller
    {

        //// GET: Charts
        //public ActionResult Index()
        //{
        //    return View();
        //}

        // GET: Charts/StagingLast30Days

        public ActionResult BorcluVadeAnalizi()
        {

            var connection = SqlConnections.NewFor<BorcluVadeAnaliziRow>();
            var now = DateTime.Now;
            var today = DateTime.ParseExact(now.ToString("yyyyMMdd"), "yyyyMMdd", null);
            var StartTime = today - new TimeSpan(30, 0, 0, 0);
            //  var Chart_Data = connection.Query<BorcluVadeAnaliziRow>("select * from Chart_Staging where [date]>= '" + StartTime.ToString("yyyyMMdd") + "' order by Date");
            var Chart_Data = connection.Query<BorcluVadeAnaliziRow>("select * from TMP_BorcluVadeAnalizi");
              //List<object> dataList = new List<object>();
              //foreach (var record in Chart_Data)
              //{
              //    var DisplayDate = record.Date.Value.ToString("yyyy-MM-dd");
              //    dataList.Add(new { date = DisplayDate, Value = record.Amount.Value });
              //}

              var data = Json(Chart_Data, System.Web.Mvc.JsonRequestBehavior.AllowGet);
          //   var data =   System.Net.WebUtility.HtmlDecode(Newtonsoft.Json.JsonConvert.SerializeObject(Chart_Data));
            //return model;

            return data;
        }
    }
}

