
namespace E_Maliyet.Maliyet.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaliyetDetayRow))]
    public class MaliyetDetayController : Controller
    {
        [Route("Maliyet/MaliyetDetay")]
        public ActionResult Index()
        {
            return View("~/Modules/Maliyet/MaliyetDetay/MaliyetDetayIndex.cshtml");
        }
    }
}