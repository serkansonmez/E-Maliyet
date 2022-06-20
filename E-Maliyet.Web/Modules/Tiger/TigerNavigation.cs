using Serenity.Navigation;
using MyPages = E_Maliyet.Tiger.Pages;

[assembly: NavigationLink(int.MaxValue, "Tiger/Tiger Firmalar", typeof(MyPages.TigerFirmalarController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tiger/Tiger Donemler", typeof(MyPages.TigerDonemlerController), icon: null)]
 
//[assembly: NavigationLink(int.MaxValue, "Tiger/Satis Analiz Raporu", typeof(MyPages.SatisAnalizRaporuController), icon: null)]
 
[assembly: NavigationLink(int.MaxValue, "Tiger/Malzeme Listesi", typeof(MyPages.MalzemeListesiController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Tiger/Varyant Listesi", typeof(MyPages.VaryantListesiController), icon: null)]