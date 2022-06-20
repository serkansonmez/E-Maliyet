
namespace E_Maliyet.Tiger.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TigerDonemlerRow))]
    public class TigerDonemlerController : Controller
    {
        [Route("Tiger/TigerDonemler")]
        public ActionResult Index()
        {
            return View("~/Modules/Tiger/TigerDonemler/TigerDonemlerIndex.cshtml");
        }
    }
}