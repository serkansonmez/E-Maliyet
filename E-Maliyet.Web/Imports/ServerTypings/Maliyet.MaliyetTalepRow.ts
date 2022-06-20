namespace E_Maliyet.Maliyet {
    export interface MaliyetTalepRow {
        MaliyetTalepId?: number;
        UserId?: number;
        InsertDate?: string;
        TigerFirma?: string;
        TigerDonem?: string;
        ItemRef?: number;
        VariantRef?: number;
        Adet?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserMobilePhoneNumber?: string;
        UserMobilePhoneVerified?: boolean;
        UserTwoFactorAuth?: number;
        UserTigerFirma?: string;
        UserTigerDonem?: string;
        ItemName?: string;
        VariantName?: string;
        BirimFiyat?: number;
        Tutar?: number;
        MaliyetDetaylari?: number[];
    }

    export namespace MaliyetTalepRow {
        export const idProperty = 'MaliyetTalepId';
        export const nameProperty = 'TigerFirma';
        export const localTextPrefix = 'Maliyet.MaliyetTalep';
        export const lookupKey = 'Maliyet.MaliyetTalep';

        export function getLookup(): Q.Lookup<MaliyetTalepRow> {
            return Q.getLookup<MaliyetTalepRow>('Maliyet.MaliyetTalep');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MaliyetTalepId = "MaliyetTalepId",
            UserId = "UserId",
            InsertDate = "InsertDate",
            TigerFirma = "TigerFirma",
            TigerDonem = "TigerDonem",
            ItemRef = "ItemRef",
            VariantRef = "VariantRef",
            Adet = "Adet",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserMobilePhoneNumber = "UserMobilePhoneNumber",
            UserMobilePhoneVerified = "UserMobilePhoneVerified",
            UserTwoFactorAuth = "UserTwoFactorAuth",
            UserTigerFirma = "UserTigerFirma",
            UserTigerDonem = "UserTigerDonem",
            ItemName = "ItemName",
            VariantName = "VariantName",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar",
            MaliyetDetaylari = "MaliyetDetaylari"
        }
    }
}
