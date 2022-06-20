
namespace E_Maliyet.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.KullaniciRaporFiltreleriRow))]
    public class KullaniciRaporFiltreleriController : Controller
    {
        [Route("Administration/KullaniciRaporFiltreleri")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/KullaniciRaporFiltreleri/KullaniciRaporFiltreleriIndex.cshtml");
        }
    }
}