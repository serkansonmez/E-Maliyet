namespace E_Maliyet.Tiger {
    export interface MalzemeListesiForm {
        ItemsActive: Serenity.IntegerEditor;
        ItemsCardtype: Serenity.IntegerEditor;
        ItemsCardtypeTipi: Serenity.StringEditor;
        ItemsCode: Serenity.StringEditor;
        ItemsName: Serenity.StringEditor;
        ItemsStgrpcode: Serenity.StringEditor;
        ItemsProducercode: Serenity.StringEditor;
        ItemsSpecode: Serenity.StringEditor;
        UnitsetfCode: Serenity.StringEditor;
        UnitsetfName: Serenity.StringEditor;
        UnitsetlCode: Serenity.StringEditor;
        UnitsetlName: Serenity.StringEditor;
        Itmunita2Katsayi: Serenity.DecimalEditor;
        Itmunita3Katsayi: Serenity.DecimalEditor;
    }

    export class MalzemeListesiForm extends Serenity.PrefixedContext {
        static formKey = 'Tiger.MalzemeListesi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MalzemeListesiForm.init)  {
                MalzemeListesiForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(MalzemeListesiForm, [
                    'ItemsActive', w0,
                    'ItemsCardtype', w0,
                    'ItemsCardtypeTipi', w1,
                    'ItemsCode', w1,
                    'ItemsName', w1,
                    'ItemsStgrpcode', w1,
                    'ItemsProducercode', w1,
                    'ItemsSpecode', w1,
                    'UnitsetfCode', w1,
                    'UnitsetfName', w1,
                    'UnitsetlCode', w1,
                    'UnitsetlName', w1,
                    'Itmunita2Katsayi', w2,
                    'Itmunita3Katsayi', w2
                ]);
            }
        }
    }
}
