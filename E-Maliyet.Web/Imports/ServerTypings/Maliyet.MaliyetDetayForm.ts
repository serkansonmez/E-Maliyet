namespace E_Maliyet.Maliyet {
    export interface MaliyetDetayForm {
        MaliyetTalepId: Serenity.IntegerEditor;
        Seviye: Serenity.IntegerEditor;
        SatirTipi: Serenity.StringEditor;
        Turu: Serenity.StringEditor;
        Kodu: Serenity.StringEditor;
        Aciklamasi: Serenity.StringEditor;
        VaryantKodu: Serenity.StringEditor;
        VaryantAciklamasi: Serenity.StringEditor;
        Miktar: Serenity.IntegerEditor;
        Birim: Serenity.StringEditor;
        VariantRef: Serenity.IntegerEditor;
        Adet: Serenity.IntegerEditor;
        BirimFiyat: Serenity.DecimalEditor;
        Tutar: Serenity.DecimalEditor;
    }

    export class MaliyetDetayForm extends Serenity.PrefixedContext {
        static formKey = 'Maliyet.MaliyetDetay';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaliyetDetayForm.init)  {
                MaliyetDetayForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(MaliyetDetayForm, [
                    'MaliyetTalepId', w0,
                    'Seviye', w0,
                    'SatirTipi', w1,
                    'Turu', w1,
                    'Kodu', w1,
                    'Aciklamasi', w1,
                    'VaryantKodu', w1,
                    'VaryantAciklamasi', w1,
                    'Miktar', w0,
                    'Birim', w1,
                    'VariantRef', w0,
                    'Adet', w0,
                    'BirimFiyat', w2,
                    'Tutar', w2
                ]);
            }
        }
    }
}
