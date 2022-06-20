namespace E_Maliyet.Administration {
    export interface KullaniciRaporFiltreleriRow {
        Id?: number;
        UserId?: number;
        RaporlarId?: number;
        KullaniciFiltresi?: string;
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
        RaporlarRaporKodu?: string;
        RaporlarRaporAdi?: string;
    }

    export namespace KullaniciRaporFiltreleriRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KullaniciFiltresi';
        export const localTextPrefix = 'Administration.KullaniciRaporFiltreleri';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            UserId = "UserId",
            RaporlarId = "RaporlarId",
            KullaniciFiltresi = "KullaniciFiltresi",
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
            RaporlarRaporKodu = "RaporlarRaporKodu",
            RaporlarRaporAdi = "RaporlarRaporAdi"
        }
    }
}
