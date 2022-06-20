namespace E_Maliyet.Membership {
    export interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TigerFirma?: string;
        TigerDonem?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
