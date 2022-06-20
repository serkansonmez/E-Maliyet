
namespace E_Maliyet.Maliyet.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MaliyetTalepRow))]
    public class MaliyetTalepController : Controller
    {
        [Route("Maliyet/MaliyetTalep")]
        public ActionResult Index()
        {
            return View("~/Modules/Maliyet/MaliyetTalep/MaliyetTalepIndex.cshtml");
        }
    }
}