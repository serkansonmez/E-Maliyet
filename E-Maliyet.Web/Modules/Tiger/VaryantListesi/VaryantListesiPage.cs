
namespace E_Maliyet.Tiger.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VaryantListesiRow))]
    public class VaryantListesiController : Controller
    {
        [Route("Tiger/VaryantListesi")]
        public ActionResult Index()
        {
            return View("~/Modules/Tiger/VaryantListesi/VaryantListesiIndex.cshtml");
        }
    }
}