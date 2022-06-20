namespace E_Maliyet.Tiger {
    export interface TigerDonemlerForm {
        Nr: Serenity.IntegerEditor;
        Firmnr: Serenity.IntegerEditor;
        Begdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Active: Serenity.IntegerEditor;
        Key1: Serenity.IntegerEditor;
        Key2: Serenity.IntegerEditor;
        Key3: Serenity.IntegerEditor;
        Key4: Serenity.IntegerEditor;
        Perlocalctype: Serenity.IntegerEditor;
        Perrepcurr: Serenity.IntegerEditor;
    }

    export class TigerDonemlerForm extends Serenity.PrefixedContext {
        static formKey = 'Tiger.TigerDonemler';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TigerDonemlerForm.init)  {
                TigerDonemlerForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(TigerDonemlerForm, [
                    'Nr', w0,
                    'Firmnr', w0,
                    'Begdate', w1,
                    'Enddate', w1,
                    'Active', w0,
                    'Key1', w0,
                    'Key2', w0,
                    'Key3', w0,
                    'Key4', w0,
                    'Perlocalctype', w0,
                    'Perrepcurr', w0
                ]);
            }
        }
    }
}
