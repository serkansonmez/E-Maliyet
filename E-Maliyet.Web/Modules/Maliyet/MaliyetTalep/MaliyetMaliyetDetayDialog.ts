/// <reference path="../MaliyetDetay/MaliyetDetayDialog.ts" />

namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetMaliyetDetayDialog extends MaliyetDetayDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();
            Serenity.EditorUtils.setReadOnly(this.form.MaliyetTalepId, true);

        }
    }
}