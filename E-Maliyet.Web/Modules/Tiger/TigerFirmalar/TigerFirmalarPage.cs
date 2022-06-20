
namespace E_Maliyet.Tiger.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TigerFirmalarRow))]
    public class TigerFirmalarController : Controller
    {
        [Route("Tiger/TigerFirmalar")]
        public ActionResult Index()
        {
            return View("~/Modules/Tiger/TigerFirmalar/TigerFirmalarIndex.cshtml");
        }
    }
}