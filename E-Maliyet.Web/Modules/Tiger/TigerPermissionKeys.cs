
using Serenity.Extensibility;
using System.ComponentModel;

namespace E_Maliyet.Tiger
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        public class TigerFirmalar
        {
            public const string View = "Tiger Firmalar:Okuma";
            public const string Delete = "Tiger Firmalar:Silme";
            public const string Insert = "Tiger Firmalar:Ekleme";
            public const string Update = "Tiger Firmalar:Güncelleme";
        }
        public class TigerDonemler
        {
            public const string View = "Tiger Dönemler:Okuma";
            public const string Delete = "Tiger Dönemler:Silme";
            public const string Insert = "Tiger Dönemler:Ekleme";
            public const string Update = "Tiger Dönemler:Güncelleme";
        }


    }
}
