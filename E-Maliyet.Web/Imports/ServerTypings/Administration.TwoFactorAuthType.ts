namespace E_Maliyet.Administration {
    export enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
    Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'E_Maliyet.Administration.TwoFactorAuthType');
}
