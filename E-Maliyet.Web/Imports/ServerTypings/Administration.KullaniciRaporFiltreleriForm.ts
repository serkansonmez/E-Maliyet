namespace E_Maliyet.Administration {
    export interface KullaniciRaporFiltreleriForm {
        UserId: Serenity.LookupEditor;
        RaporlarId: Serenity.LookupEditor;
        KullaniciFiltresi: Serenity.TextAreaEditor;
    }

    export class KullaniciRaporFiltreleriForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.KullaniciRaporFiltreleri';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KullaniciRaporFiltreleriForm.init)  {
                KullaniciRaporFiltreleriForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(KullaniciRaporFiltreleriForm, [
                    'UserId', w0,
                    'RaporlarId', w0,
                    'KullaniciFiltresi', w1
                ]);
            }
        }
    }
}
