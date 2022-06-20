namespace E_Maliyet.Maliyet {
    export interface MaliyetTalepForm {
        ItemRef: Serenity.LookupEditor;
        VariantRef: Serenity.LookupEditor;
        Adet: Serenity.IntegerEditor;
    }

    export class MaliyetTalepForm extends Serenity.PrefixedContext {
        static formKey = 'Maliyet.MaliyetTalep';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaliyetTalepForm.init)  {
                MaliyetTalepForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(MaliyetTalepForm, [
                    'ItemRef', w0,
                    'VariantRef', w0,
                    'Adet', w1
                ]);
            }
        }
    }
}
