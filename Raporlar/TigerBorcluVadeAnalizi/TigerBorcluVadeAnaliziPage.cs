
namespace E_Go.Raporlar.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TigerBorcluVadeAnaliziRow))]
    public class TigerBorcluVadeAnaliziController : Controller
    {
        [Route("Raporlar/TigerBorcluVadeAnalizi")]
        public ActionResult Index()
        {
            return View("~/Modules/Raporlar/TigerBorcluVadeAnalizi/TigerBorcluVadeAnaliziIndex.cshtml");
        }
    }
}