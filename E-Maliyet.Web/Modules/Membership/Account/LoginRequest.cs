
namespace E_Maliyet.Membership
{
    using E_Maliyet.Administration.Lookups;
    using E_Maliyet.Tiger.Entities;
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Kullanıcı Adını Giriniz...")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Şifreyi Giriniz..."), Required(true)]
        public string Password { get; set; }
        //  [Placeholder("Firma"), Required(true), E_Maliyet.Administration.TigerFirmalarEditor]
        [Placeholder("Firma"), Required(true), LookupEditor(typeof(TigerFirmalarRow))]
        public string TigerFirma { get; set; }
        [Placeholder("Dönem"), Required(true),LookupEditor(typeof(TigerDonemlerRow),CascadeFrom = "TigerFirma", CascadeField = "Firmnr")]
     //   [Placeholder("Dönem"), Required(true), E_Maliyet.Administration.TigerDonemlerEditor]
        public string TigerDonem { get; set; }
        [Ignore]
        public string TwoFactorGuid { get; set; }
        [Ignore]
        public int? TwoFactorCode { get; set; }
    }
}