﻿/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace E_Maliyet.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('E_Maliyet');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }
    Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
    Serenity.setupUIOverrides();

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;

    $(() => {
        // let demo page use its own settings for idle timeout
        if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
            return;

        var meta = $('meta[name=username]');
        if ((meta.length && meta.attr('content')) ||
            (!meta.length && Q.Authorization.isLoggedIn)) {

            new Serenity.IdleTimeout({
                activityTimeout: 15 * 60,
                warningDuration: 2 * 60
            });
        }
    });
}