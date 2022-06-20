
namespace E_Go.Raporlar.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BorcluVadeAnaliziYeniRow))]
    public class BorcluVadeAnaliziYeniController : Controller
    {
        [Route("Raporlar/BorcluVadeAnaliziYeni")]
        public ActionResult Index()
        {
            return View("~/Modules/Raporlar/BorcluVadeAnaliziYeni/BorcluVadeAnaliziYeniIndex.cshtml");
        }
    }
}