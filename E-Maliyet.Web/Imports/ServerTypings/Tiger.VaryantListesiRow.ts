namespace E_Maliyet.Tiger {
    export interface VaryantListesiRow {
        Logicalref?: number;
        Itemref?: number;
        Cardtype?: number;
        VariantCardtype?: string;
        Code?: string;
        Name?: string;
        Active?: number;
        Unitsetref?: number;
        Specode?: string;
        Specode2?: string;
        Specode3?: string;
        Specode4?: string;
        Specode5?: string;
        Stgrpcode?: string;
        Producercode?: string;
    }

    export namespace VaryantListesiRow {
        export const idProperty = 'Logicalref';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Tiger.VaryantListesi';
        export const lookupKey = 'Tiger.VaryantListesi';

        export function getLookup(): Q.Lookup<VaryantListesiRow> {
            return Q.getLookup<VaryantListesiRow>('Tiger.VaryantListesi');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Logicalref = "Logicalref",
            Itemref = "Itemref",
            Cardtype = "Cardtype",
            VariantCardtype = "VariantCardtype",
            Code = "Code",
            Name = "Name",
            Active = "Active",
            Unitsetref = "Unitsetref",
            Specode = "Specode",
            Specode2 = "Specode2",
            Specode3 = "Specode3",
            Specode4 = "Specode4",
            Specode5 = "Specode5",
            Stgrpcode = "Stgrpcode",
            Producercode = "Producercode"
        }
    }
}
