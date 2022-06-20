
namespace E_Maliyet.Tiger.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MalzemeListesiRow))]
    public class MalzemeListesiController : Controller
    {
        [Route("Tiger/MalzemeListesi")]
        public ActionResult Index()
        {
            return View("~/Modules/Tiger/MalzemeListesi/MalzemeListesiIndex.cshtml");
        }
    }
}