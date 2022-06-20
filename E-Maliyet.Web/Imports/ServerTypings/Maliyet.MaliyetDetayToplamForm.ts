namespace E_Maliyet.Maliyet {
    export interface MaliyetDetayToplamForm {
        BirimFiyat: Serenity.DecimalEditor;
        Tutar: Serenity.DecimalEditor;
    }

    export class MaliyetDetayToplamForm extends Serenity.PrefixedContext {
        static formKey = 'Maliyet.MaliyetDetayToplam';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaliyetDetayToplamForm.init)  {
                MaliyetDetayToplamForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;

                Q.initFormType(MaliyetDetayToplamForm, [
                    'BirimFiyat', w0,
                    'Tutar', w0
                ]);
            }
        }
    }
}
