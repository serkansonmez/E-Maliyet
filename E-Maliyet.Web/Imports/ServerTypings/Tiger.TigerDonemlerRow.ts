namespace E_Maliyet.Tiger {
    export interface TigerDonemlerRow {
        Logicalref?: number;
        Nr?: number;
        Firmnr?: number;
        Begdate?: string;
        Enddate?: string;
        Active?: number;
        Key1?: number;
        Key2?: number;
        Key3?: number;
        Key4?: number;
        Perlocalctype?: number;
        Perrepcurr?: number;
        FirmaDonemStr?: string;
    }

    export namespace TigerDonemlerRow {
        export const idProperty = 'Nr';
        export const nameProperty = 'FirmaDonemStr';
        export const localTextPrefix = 'Tiger.TigerDonemler';
        export const lookupKey = 'Firmnr';

        export function getLookup(): Q.Lookup<TigerDonemlerRow> {
            return Q.getLookup<TigerDonemlerRow>('Firmnr');
        }
        export const deletePermission = 'Tiger Firmalar:Silme';
        export const insertPermission = 'Tiger Firmalar:Ekleme';
        export const readPermission = 'Tiger Dönemler:Okuma';
        export const updatePermission = 'Tiger Firmalar:Güncelleme';

        export declare const enum Fields {
            Logicalref = "Logicalref",
            Nr = "Nr",
            Firmnr = "Firmnr",
            Begdate = "Begdate",
            Enddate = "Enddate",
            Active = "Active",
            Key1 = "Key1",
            Key2 = "Key2",
            Key3 = "Key3",
            Key4 = "Key4",
            Perlocalctype = "Perlocalctype",
            Perrepcurr = "Perrepcurr",
            FirmaDonemStr = "FirmaDonemStr"
        }
    }
}
