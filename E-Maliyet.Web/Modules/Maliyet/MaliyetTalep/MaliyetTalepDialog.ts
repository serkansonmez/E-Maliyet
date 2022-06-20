
namespace E_Maliyet.Maliyet {
 
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MaliyetTalepDialog extends Serenity.EntityDialog<MaliyetTalepRow, any> {
        protected getFormKey() { return MaliyetTalepForm.formKey; }
        protected getIdProperty() { return MaliyetTalepRow.idProperty; }
        protected getLocalTextPrefix() { return MaliyetTalepRow.localTextPrefix; }
        protected getNameProperty() { return MaliyetTalepRow.nameProperty; }
        protected getService() { return MaliyetTalepService.baseUrl; }
        protected getDeletePermission() { return MaliyetTalepRow.deletePermission; }
        protected getInsertPermission() { return MaliyetTalepRow.insertPermission; }
        protected getUpdatePermission() { return MaliyetTalepRow.updatePermission; }
        private loadedState: string;
        private odemeBilgileriGrid: MaliyetMaliyetDetayGrid;
        protected form = new MaliyetTalepForm(this.idPrefix);
        constructor() {
            super();
         //   this.odemeBilgileriGrid.openDialogsAsPanel = false;
            this.odemeBilgileriGrid = new MaliyetMaliyetDetayGrid(this.byId('MaliyetDetayBilgileriGrid'));
            this.form.ItemRef.changeSelect2(e => {
                var HbId = Q.toId(this.form.ItemRef.value);
              //  this.form.VariantRef.cascadeValue = HbId;
            });
           
        }


        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: MaliyetDetayRow) {
            super.loadEntity(entity);

            //   Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'MaliyetDetayBilgileri', this.isNewOrDeleted());


            //  this.ordersGrid.ContractID = entity.ContractID;
            this.odemeBilgileriGrid.customerID = entity.MaliyetTalepId;

        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Maliyet.MaliyetTalep');
        }

    }
}