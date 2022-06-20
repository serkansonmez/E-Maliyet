namespace E_Maliyet.Maliyet {
    export interface MaliyetDetayToplamRow {
        MaliyetTalepId?: number;
        BirimFiyat?: number;
        Tutar?: number;
    }

    export namespace MaliyetDetayToplamRow {
        export const idProperty = 'MaliyetTalepId';
        export const localTextPrefix = 'Maliyet.MaliyetDetayToplam';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MaliyetTalepId = "MaliyetTalepId",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar"
        }
    }
}
