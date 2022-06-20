namespace E_Maliyet {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        TigerFirma?: string;
        TigerDonem?: string;
        TigerFirmaAdi?: string;
        TigerDonemAdi?: string;
        UserId?: number;
    }
}
