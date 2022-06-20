namespace E_Maliyet.Tiger {
    export interface VaryantListesiForm {
        Itemref: Serenity.IntegerEditor;
        Cardtype: Serenity.IntegerEditor;
        VariantCardtype: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Active: Serenity.IntegerEditor;
        Unitsetref: Serenity.IntegerEditor;
        Specode: Serenity.StringEditor;
        Specode2: Serenity.StringEditor;
        Specode3: Serenity.StringEditor;
        Specode4: Serenity.StringEditor;
        Specode5: Serenity.StringEditor;
        Stgrpcode: Serenity.StringEditor;
        Producercode: Serenity.StringEditor;
    }

    export class VaryantListesiForm extends Serenity.PrefixedContext {
        static formKey = 'Tiger.VaryantListesi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VaryantListesiForm.init)  {
                VaryantListesiForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(VaryantListesiForm, [
                    'Itemref', w0,
                    'Cardtype', w0,
                    'VariantCardtype', w1,
                    'Code', w1,
                    'Name', w1,
                    'Active', w0,
                    'Unitsetref', w0,
                    'Specode', w1,
                    'Specode2', w1,
                    'Specode3', w1,
                    'Specode4', w1,
                    'Specode5', w1,
                    'Stgrpcode', w1,
                    'Producercode', w1
                ]);
            }
        }
    }
}
