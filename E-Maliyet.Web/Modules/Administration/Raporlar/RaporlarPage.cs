
namespace E_Maliyet.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RaporlarRow))]
    public class RaporlarController : Controller
    {
        [Route("Administration/Raporlar")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Raporlar/RaporlarIndex.cshtml");
        }
    }
}