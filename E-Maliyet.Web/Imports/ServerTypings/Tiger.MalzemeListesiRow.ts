namespace E_Maliyet.Tiger {
    export interface MalzemeListesiRow {
        Logicalref?: number;
        ItemsActive?: number;
        ItemsCardtype?: number;
        ItemsCardtypeTipi?: string;
        ItemsCode?: string;
        ItemsName?: string;
        ItemsStgrpcode?: string;
        ItemsProducercode?: string;
        ItemsSpecode?: string;
        UnitsetfCode?: string;
        UnitsetfName?: string;
        UnitsetlCode?: string;
        UnitsetlName?: string;
        Itmunita2Katsayi?: number;
        Itmunita3Katsayi?: number;
    }

    export namespace MalzemeListesiRow {
        export const idProperty = 'Logicalref';
        export const nameProperty = 'ItemsName';
        export const localTextPrefix = 'Tiger.MalzemeListesi';
        export const lookupKey = 'Tiger.MalzemeListesi';

        export function getLookup(): Q.Lookup<MalzemeListesiRow> {
            return Q.getLookup<MalzemeListesiRow>('Tiger.MalzemeListesi');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Logicalref = "Logicalref",
            ItemsActive = "ItemsActive",
            ItemsCardtype = "ItemsCardtype",
            ItemsCardtypeTipi = "ItemsCardtypeTipi",
            ItemsCode = "ItemsCode",
            ItemsName = "ItemsName",
            ItemsStgrpcode = "ItemsStgrpcode",
            ItemsProducercode = "ItemsProducercode",
            ItemsSpecode = "ItemsSpecode",
            UnitsetfCode = "UnitsetfCode",
            UnitsetfName = "UnitsetfName",
            UnitsetlCode = "UnitsetlCode",
            UnitsetlName = "UnitsetlName",
            Itmunita2Katsayi = "Itmunita2Katsayi",
            Itmunita3Katsayi = "Itmunita3Katsayi"
        }
    }
}
