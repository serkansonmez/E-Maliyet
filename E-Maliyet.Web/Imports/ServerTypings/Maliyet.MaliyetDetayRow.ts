namespace E_Maliyet.Maliyet {
    export interface MaliyetDetayRow {
        MaliyetDetayId?: number;
        MaliyetTalepId?: number;
        Seviye?: number;
        SatirTipi?: string;
        Turu?: string;
        Kodu?: string;
        Aciklamasi?: string;
        VaryantKodu?: string;
        VaryantAciklamasi?: string;
        Miktar?: number;
        Birim?: string;
        VariantRef?: number;
        Adet?: number;
        BirimFiyat?: number;
        Tutar?: number;
        FisTuru?: string;
        FisNo?: string;
        FisTarih?: string;
        ParentRef?: number;
        MaliyetTalepUserId?: number;
        MaliyetTalepInsertDate?: string;
        MaliyetTalepTigerFirma?: string;
        MaliyetTalepTigerDonem?: string;
        MaliyetTalepItemRef?: number;
        MaliyetTalepVariantRef?: number;
        MaliyetTalepAdet?: number;
    }

    export namespace MaliyetDetayRow {
        export const idProperty = 'VariantRef';
        export const nameProperty = 'Aciklamasi';
        export const localTextPrefix = 'Maliyet.MaliyetDetay';
        export const lookupKey = 'Maliyet.MaliyetDetay';

        export function getLookup(): Q.Lookup<MaliyetDetayRow> {
            return Q.getLookup<MaliyetDetayRow>('Maliyet.MaliyetDetay');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MaliyetDetayId = "MaliyetDetayId",
            MaliyetTalepId = "MaliyetTalepId",
            Seviye = "Seviye",
            SatirTipi = "SatirTipi",
            Turu = "Turu",
            Kodu = "Kodu",
            Aciklamasi = "Aciklamasi",
            VaryantKodu = "VaryantKodu",
            VaryantAciklamasi = "VaryantAciklamasi",
            Miktar = "Miktar",
            Birim = "Birim",
            VariantRef = "VariantRef",
            Adet = "Adet",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar",
            FisTuru = "FisTuru",
            FisNo = "FisNo",
            FisTarih = "FisTarih",
            ParentRef = "ParentRef",
            MaliyetTalepUserId = "MaliyetTalepUserId",
            MaliyetTalepInsertDate = "MaliyetTalepInsertDate",
            MaliyetTalepTigerFirma = "MaliyetTalepTigerFirma",
            MaliyetTalepTigerDonem = "MaliyetTalepTigerDonem",
            MaliyetTalepItemRef = "MaliyetTalepItemRef",
            MaliyetTalepVariantRef = "MaliyetTalepVariantRef",
            MaliyetTalepAdet = "MaliyetTalepAdet"
        }
    }
}
