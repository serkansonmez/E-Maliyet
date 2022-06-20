/// <reference path="../MaliyetDetay/MaliyetDetayGrid.ts" />

namespace E_Maliyet.Maliyet {

    import fld = MaliyetDetayRow.Fields;

    @Serenity.Decorators.registerClass()
    export class MaliyetMaliyetDetayGrid extends MaliyetDetayGrid {
        protected getDialogType() { return MaliyetMaliyetDetayDialog; }
        private treeMixin: Serenity.TreeGridMixin<Maliyet.MaliyetDetayRow>;
        constructor(container: JQuery) {
            super(container);
            this.treeMixin = new Serenity.TreeGridMixin({
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => true,
                
                // which column to place tree toggle / expand/collapse button
                toggleField: Maliyet.MaliyetDetayRow.Fields.Kodu,
                
                getParentId: x => x.ParentRef
                 
            });
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Maliyet/MaliyetDetay/ListExcel',
                separator: true
            }));

            buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            // toggle expand/collapse all
            buttons.push({
                title: null,
                hint: "Expand/Collapse All",
                cssClass: 'treegrid-toggle-expand-collapse-all',

                onClick: () => {
                    this.treeMixin.toggleAll();
                }
            });

            return buttons;
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.VaryantAciklamasi);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ CustomerID: this.customerID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.customerID;
        }

        private _customerID: number;

        get customerID() {
            return this._customerID;
        }

        set customerID(value: number) {
            if (this._customerID !== value) {
                this._customerID = value;
                this.setEquality('MaliyetTalepId', value);
                this.refresh();
            }
        }


        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [

                    new Slick.Aggregators.Sum('BirimFiyat'),
                    new Slick.Aggregators.Sum('Tutar')
                ]
            });



            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }
    }
}