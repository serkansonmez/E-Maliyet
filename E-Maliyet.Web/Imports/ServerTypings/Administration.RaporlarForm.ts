namespace E_Maliyet.Administration {
    export interface RaporlarForm {
        RaporKodu: Serenity.StringEditor;
        RaporAdi: Serenity.StringEditor;
    }

    export class RaporlarForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Raporlar';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RaporlarForm.init)  {
                RaporlarForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RaporlarForm, [
                    'RaporKodu', w0,
                    'RaporAdi', w0
                ]);
            }
        }
    }
}
