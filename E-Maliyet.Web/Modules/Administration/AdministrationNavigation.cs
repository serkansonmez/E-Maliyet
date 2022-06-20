﻿using Serenity.Navigation;
using MyPages = E_Maliyet.Administration.Pages;
using Administration = E_Maliyet.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Exception Log", typeof(Administration.UserController), action: "ExceptionLog", icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Kullanici Rapor Filtreleri", typeof(MyPages.KullaniciRaporFiltreleriController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/Raporlar", typeof(MyPages.RaporlarController), icon: null)]