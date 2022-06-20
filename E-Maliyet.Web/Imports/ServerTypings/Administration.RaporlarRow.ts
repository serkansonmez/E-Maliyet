namespace E_Maliyet.Administration {
    export interface RaporlarRow {
        Id?: number;
        RaporKodu?: string;
        RaporAdi?: string;
    }

    export namespace RaporlarRow {
        export const idProperty = 'Id';
        export const nameProperty = 'RaporAdi';
        export const localTextPrefix = 'Administration.Raporlar';
        export const lookupKey = 'Administration.Raporlar';

        export function getLookup(): Q.Lookup<RaporlarRow> {
            return Q.getLookup<RaporlarRow>('Administration.Raporlar');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            RaporKodu = "RaporKodu",
            RaporAdi = "RaporAdi"
        }
    }
}
