﻿using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class DataAuditLog
            {
                public const string DataAuditLogIndex = "~/Modules/Administration/DataAuditLog/DataAuditLogIndex.cshtml";
            }

            public static class KullaniciRaporFiltreleri
            {
                public const string KullaniciRaporFiltreleriIndex = "~/Modules/Administration/KullaniciRaporFiltreleri/KullaniciRaporFiltreleriIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Raporlar
            {
                public const string RaporlarIndex = "~/Modules/Administration/Raporlar/RaporlarIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class EmailClient
            {
                public const string EmailIndex = "~/Modules/Common/EmailClient/EmailIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Maliyet
        {
            public static class MaliyetDetay
            {
                public const string MaliyetDetayIndex = "~/Modules/Maliyet/MaliyetDetay/MaliyetDetayIndex.cshtml";
            }

            public static class MaliyetDetayToplam
            {
                public const string MaliyetDetayToplamIndex = "~/Modules/Maliyet/MaliyetDetayToplam/MaliyetDetayToplamIndex.cshtml";
            }

            public static class MaliyetTalep
            {
                public const string MaliyetTalepIndex = "~/Modules/Maliyet/MaliyetTalep/MaliyetTalepIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Tiger
        {
            public static class MalzemeListesi
            {
                public const string MalzemeListesiIndex = "~/Modules/Tiger/MalzemeListesi/MalzemeListesiIndex.cshtml";
            }

            public static class TigerDonemler
            {
                public const string TigerDonemlerIndex = "~/Modules/Tiger/TigerDonemler/TigerDonemlerIndex.cshtml";
            }

            public static class TigerFirmalar
            {
                public const string TigerFirmalarIndex = "~/Modules/Tiger/TigerFirmalar/TigerFirmalarIndex.cshtml";
            }

            public static class VaryantListesi
            {
                public const string VaryantListesiIndex = "~/Modules/Tiger/VaryantListesi/VaryantListesiIndex.cshtml";
            }

        }

    }
}
