
namespace E_Maliyet.Maliyet.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaliyetDetayToplamRow))]
    public class MaliyetDetayToplamController : Controller
    {
        [Route("Maliyet/MaliyetDetayToplam")]
        public ActionResult Index()
        {
            return View("~/Modules/Maliyet/MaliyetDetayToplam/MaliyetDetayToplamIndex.cshtml");
        }
    }
}