﻿var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogForm = /** @class */ (function (_super) {
            __extends(DataAuditLogForm, _super);
            function DataAuditLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataAuditLogForm.init) {
                    DataAuditLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(DataAuditLogForm, [
                        'LogType', w0,
                        'LogDate', w1,
                        'UserId', w2,
                        'Tablename', w3,
                        'RecordId', w4,
                        'FieldName', w3,
                        'OldValue', w4,
                        'NewValue', w4
                    ]);
                }
                return _this;
            }
            DataAuditLogForm.formKey = 'Administration.DataAuditLog';
            return DataAuditLogForm;
        }(Serenity.PrefixedContext));
        Administration.DataAuditLogForm = DataAuditLogForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogRow;
        (function (DataAuditLogRow) {
            DataAuditLogRow.idProperty = 'LogId';
            DataAuditLogRow.localTextPrefix = 'Administration.DataAuditLog';
            DataAuditLogRow.deletePermission = 'Administration:Security';
            DataAuditLogRow.insertPermission = 'Administration:Security';
            DataAuditLogRow.readPermission = 'Administration:Security';
            DataAuditLogRow.updatePermission = 'Administration:Security';
        })(DataAuditLogRow = Administration.DataAuditLogRow || (Administration.DataAuditLogRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogService;
        (function (DataAuditLogService) {
            DataAuditLogService.baseUrl = 'Administration/DataAuditLog';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataAuditLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataAuditLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DataAuditLogService = Administration.DataAuditLogService || (Administration.DataAuditLogService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogType;
        (function (DataAuditLogType) {
            DataAuditLogType[DataAuditLogType["Insert"] = 1] = "Insert";
            DataAuditLogType[DataAuditLogType["Update"] = 2] = "Update";
            DataAuditLogType[DataAuditLogType["Delete"] = 3] = "Delete";
        })(DataAuditLogType = Administration.DataAuditLogType || (Administration.DataAuditLogType = {}));
        Serenity.Decorators.registerEnumType(DataAuditLogType, 'E_Maliyet.Administration.DataAuditLogType');
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var KullaniciRaporFiltreleriForm = /** @class */ (function (_super) {
            __extends(KullaniciRaporFiltreleriForm, _super);
            function KullaniciRaporFiltreleriForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KullaniciRaporFiltreleriForm.init) {
                    KullaniciRaporFiltreleriForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(KullaniciRaporFiltreleriForm, [
                        'UserId', w0,
                        'RaporlarId', w0,
                        'KullaniciFiltresi', w1
                    ]);
                }
                return _this;
            }
            KullaniciRaporFiltreleriForm.formKey = 'Administration.KullaniciRaporFiltreleri';
            return KullaniciRaporFiltreleriForm;
        }(Serenity.PrefixedContext));
        Administration.KullaniciRaporFiltreleriForm = KullaniciRaporFiltreleriForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var KullaniciRaporFiltreleriRow;
        (function (KullaniciRaporFiltreleriRow) {
            KullaniciRaporFiltreleriRow.idProperty = 'Id';
            KullaniciRaporFiltreleriRow.nameProperty = 'KullaniciFiltresi';
            KullaniciRaporFiltreleriRow.localTextPrefix = 'Administration.KullaniciRaporFiltreleri';
            KullaniciRaporFiltreleriRow.deletePermission = 'Administration:General';
            KullaniciRaporFiltreleriRow.insertPermission = 'Administration:General';
            KullaniciRaporFiltreleriRow.readPermission = 'Administration:General';
            KullaniciRaporFiltreleriRow.updatePermission = 'Administration:General';
        })(KullaniciRaporFiltreleriRow = Administration.KullaniciRaporFiltreleriRow || (Administration.KullaniciRaporFiltreleriRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var KullaniciRaporFiltreleriService;
        (function (KullaniciRaporFiltreleriService) {
            KullaniciRaporFiltreleriService.baseUrl = 'Administration/KullaniciRaporFiltreleri';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                KullaniciRaporFiltreleriService[x] = function (r, s, o) {
                    return Q.serviceRequest(KullaniciRaporFiltreleriService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(KullaniciRaporFiltreleriService = Administration.KullaniciRaporFiltreleriService || (Administration.KullaniciRaporFiltreleriService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RaporlarForm = /** @class */ (function (_super) {
            __extends(RaporlarForm, _super);
            function RaporlarForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RaporlarForm.init) {
                    RaporlarForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RaporlarForm, [
                        'RaporKodu', w0,
                        'RaporAdi', w0
                    ]);
                }
                return _this;
            }
            RaporlarForm.formKey = 'Administration.Raporlar';
            return RaporlarForm;
        }(Serenity.PrefixedContext));
        Administration.RaporlarForm = RaporlarForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RaporlarRow;
        (function (RaporlarRow) {
            RaporlarRow.idProperty = 'Id';
            RaporlarRow.nameProperty = 'RaporAdi';
            RaporlarRow.localTextPrefix = 'Administration.Raporlar';
            RaporlarRow.lookupKey = 'Administration.Raporlar';
            function getLookup() {
                return Q.getLookup('Administration.Raporlar');
            }
            RaporlarRow.getLookup = getLookup;
            RaporlarRow.deletePermission = 'Administration:General';
            RaporlarRow.insertPermission = 'Administration:General';
            RaporlarRow.readPermission = 'Administration:General';
            RaporlarRow.updatePermission = 'Administration:General';
        })(RaporlarRow = Administration.RaporlarRow || (Administration.RaporlarRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RaporlarService;
        (function (RaporlarService) {
            RaporlarService.baseUrl = 'Administration/Raporlar';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RaporlarService[x] = function (r, s, o) {
                    return Q.serviceRequest(RaporlarService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RaporlarService = Administration.RaporlarService || (Administration.RaporlarService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'RoleKey', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var TwoFactorAuthType;
        (function (TwoFactorAuthType) {
            TwoFactorAuthType[TwoFactorAuthType["Email"] = 1] = "Email";
            TwoFactorAuthType[TwoFactorAuthType["SMS"] = 2] = "SMS";
        })(TwoFactorAuthType = Administration.TwoFactorAuthType || (Administration.TwoFactorAuthType = {}));
        Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'E_Maliyet.Administration.TwoFactorAuthType');
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'MobilePhoneNumber', w0,
                        'MobilePhoneVerified', w2,
                        'TwoFactorAuth', w3,
                        'UserImage', w4,
                        'Password', w5,
                        'PasswordConfirm', w5,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailComposeForm = /** @class */ (function (_super) {
            __extends(EmailComposeForm, _super);
            function EmailComposeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailComposeForm.init) {
                    EmailComposeForm.init = true;
                    var s = Serenity;
                    var w0 = Serenity.StringEditor;
                    var w1 = Serenity.MultipleImageUploadEditor;
                    Q.initFormType(EmailComposeForm, [
                        'Subject', w0,
                        'Attachments', w1,
                        'ReplyToFolder', w0,
                        'ReplyToUniqueId', w0
                    ]);
                }
                return _this;
            }
            EmailComposeForm.formKey = 'Serenity.EmailClient.EmailCompose';
            return EmailComposeForm;
        }(Serenity.PrefixedContext));
        EmailClient.EmailComposeForm = EmailComposeForm;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailService;
        (function (EmailService) {
            EmailService.baseUrl = 'Common/Email';
            [
                'Login',
                'Signout',
                'UnreadCount',
                'Suggest',
                'Reply',
                'Compose',
                'DeleteMessages',
                'ToggleSeen',
                'Move',
                'ListMessages',
                'ListFolders',
                'RetrieveMessage'
            ].forEach(function (x) {
                EmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailService = EmailClient.EmailService || (EmailClient.EmailService = {}));
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaBakiyeForm = /** @class */ (function (_super) {
            __extends(BankaBakiyeForm, _super);
            function BankaBakiyeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankaBakiyeForm.init) {
                    BankaBakiyeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(BankaBakiyeForm, [
                        'BankaAdi', w0,
                        'HesapAdi', w0,
                        'BakiyeTl', w1,
                        'BakiyeUsd', w1,
                        'BakiyeEuro', w1
                    ]);
                }
                return _this;
            }
            BankaBakiyeForm.formKey = 'Finans.BankaBakiye';
            return BankaBakiyeForm;
        }(Serenity.PrefixedContext));
        Finans.BankaBakiyeForm = BankaBakiyeForm;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaBakiyeRow;
        (function (BankaBakiyeRow) {
            BankaBakiyeRow.idProperty = 'Id';
            BankaBakiyeRow.nameProperty = 'BankaAdi';
            BankaBakiyeRow.localTextPrefix = 'Finans.BankaBakiye';
            BankaBakiyeRow.deletePermission = 'Administration:General';
            BankaBakiyeRow.insertPermission = 'Administration:General';
            BankaBakiyeRow.readPermission = 'Administration:General';
            BankaBakiyeRow.updatePermission = 'Administration:General';
        })(BankaBakiyeRow = Finans.BankaBakiyeRow || (Finans.BankaBakiyeRow = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaBakiyeService;
        (function (BankaBakiyeService) {
            BankaBakiyeService.baseUrl = 'Finans/BankaBakiye';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'List2'
            ].forEach(function (x) {
                BankaBakiyeService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankaBakiyeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankaBakiyeService = Finans.BankaBakiyeService || (Finans.BankaBakiyeService = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaHareketleriForm = /** @class */ (function (_super) {
            __extends(BankaHareketleriForm, _super);
            function BankaHareketleriForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankaHareketleriForm.init) {
                    BankaHareketleriForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(BankaHareketleriForm, [
                        'BankaAdi', w0,
                        'HesapAdi', w0,
                        'Tarih', w1,
                        'FisNo', w0,
                        'FisTuru', w0,
                        'SatirAciklamasi', w0,
                        'CariKodu', w0,
                        'CariUnvani', w0,
                        'TahsilTl', w2,
                        'OdemeTl', w2,
                        'TahsilUsd', w2,
                        'OdemeUsd', w2,
                        'TahsilEuro', w2,
                        'OdemeEuro', w2
                    ]);
                }
                return _this;
            }
            BankaHareketleriForm.formKey = 'Finans.BankaHareketleri';
            return BankaHareketleriForm;
        }(Serenity.PrefixedContext));
        Finans.BankaHareketleriForm = BankaHareketleriForm;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaHareketleriRow;
        (function (BankaHareketleriRow) {
            BankaHareketleriRow.idProperty = 'Id';
            BankaHareketleriRow.nameProperty = 'BankaAdi';
            BankaHareketleriRow.localTextPrefix = 'Finans.BankaHareketleri';
            BankaHareketleriRow.deletePermission = 'Administration:General';
            BankaHareketleriRow.insertPermission = 'Administration:General';
            BankaHareketleriRow.readPermission = 'Administration:General';
            BankaHareketleriRow.updatePermission = 'Administration:General';
        })(BankaHareketleriRow = Finans.BankaHareketleriRow || (Finans.BankaHareketleriRow = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaHareketleriService;
        (function (BankaHareketleriService) {
            BankaHareketleriService.baseUrl = 'Finans/BankaHareketleri';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankaHareketleriService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankaHareketleriService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankaHareketleriService = Finans.BankaHareketleriService || (Finans.BankaHareketleriService = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var KasaHareketForm = /** @class */ (function (_super) {
            __extends(KasaHareketForm, _super);
            function KasaHareketForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KasaHareketForm.init) {
                    KasaHareketForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(KasaHareketForm, [
                        'KasaKodu', w0,
                        'KasaAdi', w0,
                        'Tarih', w1,
                        'IslemNo', w0,
                        'IslemTuru', w0,
                        'DetayAciklama', w0,
                        'TahsilTl', w2,
                        'OdemeTl', w2,
                        'TahsilUsd', w2,
                        'OdemeUsd', w2,
                        'TahsilEuro', w2,
                        'OdemeEuro', w2,
                        'CariKodu', w0,
                        'CariUnvan', w0
                    ]);
                }
                return _this;
            }
            KasaHareketForm.formKey = 'Finans.KasaHareket';
            return KasaHareketForm;
        }(Serenity.PrefixedContext));
        Finans.KasaHareketForm = KasaHareketForm;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var KasaHareketRow;
        (function (KasaHareketRow) {
            KasaHareketRow.idProperty = 'Id';
            KasaHareketRow.nameProperty = 'KasaKodu';
            KasaHareketRow.localTextPrefix = 'Finans.KasaHareket';
            KasaHareketRow.deletePermission = 'Administration:General';
            KasaHareketRow.insertPermission = 'Administration:General';
            KasaHareketRow.readPermission = 'Administration:General';
            KasaHareketRow.updatePermission = 'Administration:General';
        })(KasaHareketRow = Finans.KasaHareketRow || (Finans.KasaHareketRow = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var KasaHareketService;
        (function (KasaHareketService) {
            KasaHareketService.baseUrl = 'Finans/KasaHareket';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                KasaHareketService[x] = function (r, s, o) {
                    return Q.serviceRequest(KasaHareketService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(KasaHareketService = Finans.KasaHareketService || (Finans.KasaHareketService = {}));
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1,
                        'TigerFirma', w2,
                        'TigerDonem', w2
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var BilancoForm = /** @class */ (function (_super) {
            __extends(BilancoForm, _super);
            function BilancoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BilancoForm.init) {
                    BilancoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(BilancoForm, [
                        'Tip1', w0,
                        'Tip2', w0,
                        'Tip3', w0,
                        'Tip4', w0,
                        'HesapKodu', w0,
                        'HesapAdi', w0,
                        'Deger', w1
                    ]);
                }
                return _this;
            }
            BilancoForm.formKey = 'Muhasebe.Bilanco';
            return BilancoForm;
        }(Serenity.PrefixedContext));
        Muhasebe.BilancoForm = BilancoForm;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var BilancoRow;
        (function (BilancoRow) {
            BilancoRow.idProperty = 'Logicalref';
            BilancoRow.nameProperty = 'Tip1';
            BilancoRow.localTextPrefix = 'Muhasebe.Bilanco';
            BilancoRow.deletePermission = 'Administration:General';
            BilancoRow.insertPermission = 'Administration:General';
            BilancoRow.readPermission = 'Administration:General';
            BilancoRow.updatePermission = 'Administration:General';
        })(BilancoRow = Muhasebe.BilancoRow || (Muhasebe.BilancoRow = {}));
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var BilancoService;
        (function (BilancoService) {
            BilancoService.baseUrl = 'Muhasebe/Bilanco';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BilancoService[x] = function (r, s, o) {
                    return Q.serviceRequest(BilancoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BilancoService = Muhasebe.BilancoService || (Muhasebe.BilancoService = {}));
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var GelirTablosuForm = /** @class */ (function (_super) {
            __extends(GelirTablosuForm, _super);
            function GelirTablosuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GelirTablosuForm.init) {
                    GelirTablosuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(GelirTablosuForm, [
                        'Grup1', w0,
                        'Aciklama', w0,
                        'Ay', w1,
                        'Tutar', w2
                    ]);
                }
                return _this;
            }
            GelirTablosuForm.formKey = 'Muhasebe.GelirTablosu';
            return GelirTablosuForm;
        }(Serenity.PrefixedContext));
        Muhasebe.GelirTablosuForm = GelirTablosuForm;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var GelirTablosuRow;
        (function (GelirTablosuRow) {
            GelirTablosuRow.idProperty = 'SatirNo';
            GelirTablosuRow.nameProperty = 'Grup1';
            GelirTablosuRow.localTextPrefix = 'Muhasebe.GelirTablosu';
            GelirTablosuRow.deletePermission = 'Administration:General';
            GelirTablosuRow.insertPermission = 'Administration:General';
            GelirTablosuRow.readPermission = 'Administration:General';
            GelirTablosuRow.updatePermission = 'Administration:General';
        })(GelirTablosuRow = Muhasebe.GelirTablosuRow || (Muhasebe.GelirTablosuRow = {}));
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var GelirTablosuService;
        (function (GelirTablosuService) {
            GelirTablosuService.baseUrl = 'Muhasebe/GelirTablosu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GelirTablosuService[x] = function (r, s, o) {
                    return Q.serviceRequest(GelirTablosuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GelirTablosuService = Muhasebe.GelirTablosuService || (Muhasebe.GelirTablosuService = {}));
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcVadeAnaliziForm = /** @class */ (function (_super) {
            __extends(BorcVadeAnaliziForm, _super);
            function BorcVadeAnaliziForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorcVadeAnaliziForm.init) {
                    BorcVadeAnaliziForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BorcVadeAnaliziForm, [
                        'CariHesapKodu', w0,
                        'Tel1', w0,
                        'Tel2', w0,
                        'CariHesapUnvani', w0,
                        'OzelKod', w0,
                        'OzelKod2', w0,
                        'OzelKod3', w0,
                        'OzelKod4', w0,
                        'OzelKod5', w0,
                        'TanimliVade', w0,
                        'ToplamBakiye', w1,
                        'OrtalamaVade', w2,
                        'DolanBakiye', w1,
                        'DolanVade', w2,
                        'DolacakIlkFaturaTutari', w1,
                        'DolacakIlkFaturaVade', w2,
                        'SonTahsilatTarihi', w2,
                        'SonTahsilatTuru', w0,
                        'SonTahsilatCekOrtVade', w2,
                        'SonTahsilatTutari', w1,
                        'DevredenBakiye', w1,
                        'DevredenVade', w2,
                        'SonGorusenKisi', w0,
                        'SonGorusulenKisi', w0,
                        'SonGorusmeTarihi', w2,
                        'SonGorusmeDetayi', w0
                    ]);
                }
                return _this;
            }
            BorcVadeAnaliziForm.formKey = 'Raporlar.BorcVadeAnalizi';
            return BorcVadeAnaliziForm;
        }(Serenity.PrefixedContext));
        Raporlar.BorcVadeAnaliziForm = BorcVadeAnaliziForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcVadeAnaliziRow;
        (function (BorcVadeAnaliziRow) {
            BorcVadeAnaliziRow.idProperty = 'CariReferans';
            BorcVadeAnaliziRow.nameProperty = 'CariHesapKodu';
            BorcVadeAnaliziRow.localTextPrefix = 'Raporlar.BorcVadeAnalizi';
            BorcVadeAnaliziRow.deletePermission = 'Borç Vade Analizi:Silme';
            BorcVadeAnaliziRow.insertPermission = 'Borç Vade Analizi:Ekleme';
            BorcVadeAnaliziRow.readPermission = 'Borç Vade Analizi:Okuma';
            BorcVadeAnaliziRow.updatePermission = 'Borç Vade Analizi:Güncelleme';
        })(BorcVadeAnaliziRow = Raporlar.BorcVadeAnaliziRow || (Raporlar.BorcVadeAnaliziRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcVadeAnaliziService;
        (function (BorcVadeAnaliziService) {
            BorcVadeAnaliziService.baseUrl = 'Raporlar/BorcVadeAnalizi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorcVadeAnaliziService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorcVadeAnaliziService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorcVadeAnaliziService = Raporlar.BorcVadeAnaliziService || (Raporlar.BorcVadeAnaliziService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziForm = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziForm, _super);
            function BorcluVadeAnaliziForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorcluVadeAnaliziForm.init) {
                    BorcluVadeAnaliziForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BorcluVadeAnaliziForm, [
                        'CariHesapKodu', w0,
                        'Temsilci', w0,
                        'CariHesapUnvani', w0,
                        'OzelKod1', w0,
                        'OzelKod2', w0,
                        'OzelKod3', w0,
                        'OzelKod4', w0,
                        'OzelKod5', w0,
                        'TanimliVade', w0,
                        'ToplamBakiye', w1,
                        'OrtalamaVade', w2,
                        'DolanBakiye', w1,
                        'DolanVade', w2,
                        'DolacakIlkFaturaTutari', w1,
                        'DolacakIlkFaturaVade', w2,
                        'SonTahsilatTarihi', w2,
                        'SonTahsilatTutari', w1,
                        'DevredenBakiye', w1,
                        'DevredenVade', w2
                    ]);
                }
                return _this;
            }
            BorcluVadeAnaliziForm.formKey = 'Raporlar.BorcluVadeAnalizi';
            return BorcluVadeAnaliziForm;
        }(Serenity.PrefixedContext));
        Raporlar.BorcluVadeAnaliziForm = BorcluVadeAnaliziForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziRow;
        (function (BorcluVadeAnaliziRow) {
            BorcluVadeAnaliziRow.idProperty = 'CariReferans';
            BorcluVadeAnaliziRow.nameProperty = 'CariHesapKodu';
            BorcluVadeAnaliziRow.localTextPrefix = 'Raporlar.BorcluVadeAnalizi';
            BorcluVadeAnaliziRow.deletePermission = 'Administration:General';
            BorcluVadeAnaliziRow.insertPermission = 'Administration:General';
            BorcluVadeAnaliziRow.readPermission = 'Administration:General';
            BorcluVadeAnaliziRow.updatePermission = 'Administration:General';
        })(BorcluVadeAnaliziRow = Raporlar.BorcluVadeAnaliziRow || (Raporlar.BorcluVadeAnaliziRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziService;
        (function (BorcluVadeAnaliziService) {
            BorcluVadeAnaliziService.baseUrl = 'Raporlar/BorcluVadeAnalizi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorcluVadeAnaliziService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorcluVadeAnaliziService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorcluVadeAnaliziService = Raporlar.BorcluVadeAnaliziService || (Raporlar.BorcluVadeAnaliziService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziYeniForm = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziYeniForm, _super);
            function BorcluVadeAnaliziYeniForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BorcluVadeAnaliziYeniForm.init) {
                    BorcluVadeAnaliziYeniForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BorcluVadeAnaliziYeniForm, [
                        'CariHesapKodu', w0,
                        'Tel1', w0,
                        'Tel2', w0,
                        'CariHesapUnvani', w0,
                        'ÖzelKod', w0,
                        'ÖzelKod2', w0,
                        'ÖzelKod3', w0,
                        'ÖzelKod4', w0,
                        'ÖzelKod5', w0,
                        'TanımlıVade', w0,
                        'ToplamBakiye', w1,
                        'OrtalamaVade', w2,
                        'DolanBakiye', w1,
                        'DolanVade', w2,
                        'DolacakIlkFaturaTutarı', w1,
                        'DolacakIlkFaturaVade', w2,
                        'SonTahsilatTarihi', w2,
                        'SonTahsilatTürü', w0,
                        'SonTahsilatçekOrtVade', w2,
                        'SonTahsilatTutarı', w1,
                        'DevredenBakiye', w1,
                        'DevredenVade', w2,
                        'SonGorusenKisi', w0,
                        'SonGorusulenKisi', w0,
                        'SonGorusmeTarihi', w2,
                        'SonGorusmeDetayı', w0
                    ]);
                }
                return _this;
            }
            BorcluVadeAnaliziYeniForm.formKey = 'Raporlar.BorcluVadeAnaliziYeni';
            return BorcluVadeAnaliziYeniForm;
        }(Serenity.PrefixedContext));
        Raporlar.BorcluVadeAnaliziYeniForm = BorcluVadeAnaliziYeniForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziYeniRow;
        (function (BorcluVadeAnaliziYeniRow) {
            BorcluVadeAnaliziYeniRow.idProperty = 'CariReferans';
            BorcluVadeAnaliziYeniRow.nameProperty = 'CariHesapKodu';
            BorcluVadeAnaliziYeniRow.localTextPrefix = 'Raporlar.BorcluVadeAnaliziYeni';
            BorcluVadeAnaliziYeniRow.deletePermission = 'Administration:General';
            BorcluVadeAnaliziYeniRow.insertPermission = 'Administration:General';
            BorcluVadeAnaliziYeniRow.readPermission = 'Administration:General';
            BorcluVadeAnaliziYeniRow.updatePermission = 'Administration:General';
        })(BorcluVadeAnaliziYeniRow = Raporlar.BorcluVadeAnaliziYeniRow || (Raporlar.BorcluVadeAnaliziYeniRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziYeniService;
        (function (BorcluVadeAnaliziYeniService) {
            BorcluVadeAnaliziYeniService.baseUrl = 'Raporlar/BorcluVadeAnaliziYeni';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BorcluVadeAnaliziYeniService[x] = function (r, s, o) {
                    return Q.serviceRequest(BorcluVadeAnaliziYeniService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BorcluVadeAnaliziYeniService = Raporlar.BorcluVadeAnaliziYeniService || (Raporlar.BorcluVadeAnaliziYeniService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CariBakiyeRaporuForm = /** @class */ (function (_super) {
            __extends(CariBakiyeRaporuForm, _super);
            function CariBakiyeRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CariBakiyeRaporuForm.init) {
                    CariBakiyeRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CariBakiyeRaporuForm, [
                        'CariHesapUnvani', w0,
                        'OzelKod', w0,
                        'YetkiKod', w0,
                        'İşlemTarihi', w1,
                        'İşlemNo', w0,
                        'IslemReferans', w2,
                        'İşlemAçıklaması', w0,
                        'BelgeNo', w0,
                        'İşlemTürü', w0,
                        'Borç', w3,
                        'Alacak', w3,
                        'Bakiye', w3
                    ]);
                }
                return _this;
            }
            CariBakiyeRaporuForm.formKey = 'Raporlar.CariBakiyeRaporu';
            return CariBakiyeRaporuForm;
        }(Serenity.PrefixedContext));
        Raporlar.CariBakiyeRaporuForm = CariBakiyeRaporuForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CariBakiyeRaporuRow;
        (function (CariBakiyeRaporuRow) {
            CariBakiyeRaporuRow.idProperty = 'CariHesapKodu';
            CariBakiyeRaporuRow.nameProperty = 'CariHesapKodu';
            CariBakiyeRaporuRow.localTextPrefix = 'Raporlar.CariBakiyeRaporu';
            CariBakiyeRaporuRow.deletePermission = 'Cari Bakiye Raporu:Silme';
            CariBakiyeRaporuRow.insertPermission = 'Cari Bakiye Raporu:Ekleme';
            CariBakiyeRaporuRow.readPermission = 'Cari Bakiye Raporu:Okuma';
            CariBakiyeRaporuRow.updatePermission = 'Cari Bakiye Raporu:Güncelleme';
        })(CariBakiyeRaporuRow = Raporlar.CariBakiyeRaporuRow || (Raporlar.CariBakiyeRaporuRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CariBakiyeRaporuService;
        (function (CariBakiyeRaporuService) {
            CariBakiyeRaporuService.baseUrl = 'Raporlar/CariBakiyeRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CariBakiyeRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(CariBakiyeRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CariBakiyeRaporuService = Raporlar.CariBakiyeRaporuService || (Raporlar.CariBakiyeRaporuService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CekSenetRaporuForm = /** @class */ (function (_super) {
            __extends(CekSenetRaporuForm, _super);
            function CekSenetRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CekSenetRaporuForm.init) {
                    CekSenetRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CekSenetRaporuForm, [
                        'Durum', w0,
                        'BelgeTuru', w0,
                        'Tip', w0,
                        'SonDurum', w0,
                        'PortfoyNo', w0,
                        'SeriNo', w0,
                        'Borclu', w0,
                        'CiroEdenKesideci', w0,
                        'TcVergiNo', w0,
                        'CekBankaAdi', w0,
                        'Iban', w0,
                        'CekBankaHesapNo', w0,
                        'CekBankaSubeKodu', w0,
                        'Muhabir', w0,
                        'Sehir', w0,
                        'VadeYili', w1,
                        'VadeAy', w0,
                        'Vade', w2,
                        'GirisTarihi', w2,
                        'GirisYil', w1,
                        'GirisAyi', w0,
                        'Tutar', w3,
                        'Doviz', w0
                    ]);
                }
                return _this;
            }
            CekSenetRaporuForm.formKey = 'Raporlar.CekSenetRaporu';
            return CekSenetRaporuForm;
        }(Serenity.PrefixedContext));
        Raporlar.CekSenetRaporuForm = CekSenetRaporuForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CekSenetRaporuRow;
        (function (CekSenetRaporuRow) {
            CekSenetRaporuRow.idProperty = 'Referans';
            CekSenetRaporuRow.nameProperty = 'Durum';
            CekSenetRaporuRow.localTextPrefix = 'Raporlar.CekSenetRaporu';
            CekSenetRaporuRow.deletePermission = 'Çek Senet Raporu:Silme';
            CekSenetRaporuRow.insertPermission = 'Çek Senet Raporu:Ekleme';
            CekSenetRaporuRow.readPermission = 'Çek Senet Raporu:Okuma';
            CekSenetRaporuRow.updatePermission = 'Çek Senet Raporu:Güncelleme';
        })(CekSenetRaporuRow = Raporlar.CekSenetRaporuRow || (Raporlar.CekSenetRaporuRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CekSenetRaporuService;
        (function (CekSenetRaporuService) {
            CekSenetRaporuService.baseUrl = 'Raporlar/CekSenetRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CekSenetRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(CekSenetRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CekSenetRaporuService = Raporlar.CekSenetRaporuService || (Raporlar.CekSenetRaporuService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var HareketsizCariListesiForm = /** @class */ (function (_super) {
            __extends(HareketsizCariListesiForm, _super);
            function HareketsizCariListesiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HareketsizCariListesiForm.init) {
                    HareketsizCariListesiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(HareketsizCariListesiForm, [
                        'Statu', w0,
                        'CariHesapKodu', w0,
                        'CariHesapUnvani', w0,
                        'OzelKod', w0,
                        'OzelKod2', w0,
                        'OzelKod3', w0,
                        'OzelKod4', w0,
                        'OzelKod5', w0,
                        'YetkiKodu', w0,
                        'Adres1', w0,
                        'Adres2', w0,
                        'Telefon1', w0,
                        'Telefon2', w0,
                        'SonHareketTarihi', w1
                    ]);
                }
                return _this;
            }
            HareketsizCariListesiForm.formKey = 'Raporlar.HareketsizCariListesi';
            return HareketsizCariListesiForm;
        }(Serenity.PrefixedContext));
        Raporlar.HareketsizCariListesiForm = HareketsizCariListesiForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var HareketsizCariListesiRow;
        (function (HareketsizCariListesiRow) {
            HareketsizCariListesiRow.idProperty = 'Logicalref';
            HareketsizCariListesiRow.nameProperty = 'Statu';
            HareketsizCariListesiRow.localTextPrefix = 'Raporlar.HareketsizCariListesi';
            HareketsizCariListesiRow.deletePermission = 'Hareketsiz Cari Listesi:Silme';
            HareketsizCariListesiRow.insertPermission = 'Hareketsiz Cari Listesi:Ekleme';
            HareketsizCariListesiRow.readPermission = 'Hareketsiz Cari Listesi:Okuma';
            HareketsizCariListesiRow.updatePermission = 'Hareketsiz Cari Listesi:Güncelleme';
        })(HareketsizCariListesiRow = Raporlar.HareketsizCariListesiRow || (Raporlar.HareketsizCariListesiRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var HareketsizCariListesiService;
        (function (HareketsizCariListesiService) {
            HareketsizCariListesiService.baseUrl = 'Satis/HareketsizCariListesi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                HareketsizCariListesiService[x] = function (r, s, o) {
                    return Q.serviceRequest(HareketsizCariListesiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(HareketsizCariListesiService = Raporlar.HareketsizCariListesiService || (Raporlar.HareketsizCariListesiService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var MizanRaporuForm = /** @class */ (function (_super) {
            __extends(MizanRaporuForm, _super);
            function MizanRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MizanRaporuForm.init) {
                    MizanRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(MizanRaporuForm, [
                        'FisTarihi', w0,
                        'FisNumarasi', w1,
                        'YevmiyeNo', w1,
                        'FisOzelKodu', w1,
                        'FisYetkiKodu', w1,
                        'AnaHesapKodu', w1,
                        'AnaHesapAciklamasi', w1,
                        'HesapKodu', w1,
                        'HesapAdi', w1,
                        'Borc', w2,
                        'Alacak', w2,
                        'Bakiye', w2,
                        'SatirAciklamasi', w1,
                        'FisAciklamasi', w1
                    ]);
                }
                return _this;
            }
            MizanRaporuForm.formKey = 'Raporlar.MizanRaporu';
            return MizanRaporuForm;
        }(Serenity.PrefixedContext));
        Raporlar.MizanRaporuForm = MizanRaporuForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var MizanRaporuRow;
        (function (MizanRaporuRow) {
            MizanRaporuRow.idProperty = 'Logicalref';
            MizanRaporuRow.nameProperty = 'FisNumarasi';
            MizanRaporuRow.localTextPrefix = 'Raporlar.MizanRaporu';
            MizanRaporuRow.deletePermission = 'Mizan Raporu:Silme';
            MizanRaporuRow.insertPermission = 'Mizan Raporu:Ekleme';
            MizanRaporuRow.readPermission = 'Mizan Raporu:Okuma';
            MizanRaporuRow.updatePermission = 'Mizan Raporu:Güncelleme';
        })(MizanRaporuRow = Raporlar.MizanRaporuRow || (Raporlar.MizanRaporuRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var MizanRaporuService;
        (function (MizanRaporuService) {
            MizanRaporuService.baseUrl = 'Raporlar/MizanRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MizanRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(MizanRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MizanRaporuService = Raporlar.MizanRaporuService || (Raporlar.MizanRaporuService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var SatisAnalizRaporuForm = /** @class */ (function (_super) {
            __extends(SatisAnalizRaporuForm, _super);
            function SatisAnalizRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SatisAnalizRaporuForm.init) {
                    SatisAnalizRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SatisAnalizRaporuForm, [
                        'CariStatusu', w0,
                        'CariKodu', w0,
                        'CariUnvani', w0,
                        'CariOzelKodu', w0,
                        'CariOzelKod5', w0,
                        'CariYetkiKodu', w0,
                        'VergiDairesi', w0,
                        'VergiNo', w0,
                        'MalzemeKodu', w0,
                        'MalzemeAciklamasi', w0,
                        'MalzemeOzelKodu', w0,
                        'MalzemeOzelKod2', w0,
                        'MalzemeOzelKod3', w0,
                        'MalzemeOzelKod4', w0,
                        'MalzemeOzelKod5', w0,
                        'MalzemeGrupKodu', w0,
                        'MalzemeYetkiKodu', w0,
                        'FisTuru', w0,
                        'FisTarihi', w1,
                        'FisNo', w0,
                        'MuhasebeDurumu', w0,
                        'FaturaDurumu', w0,
                        'FaturaNo', w0,
                        'FisAyi', w0,
                        'Miktar', w2,
                        'Kdv', w3,
                        'KdvHaric', w3,
                        'KdvTutari', w3,
                        'SatirTipi', w0,
                        'SaticiKodu', w0,
                        'SaticiAdi', w0,
                        'Maliyet', w3,
                        'SatisFiyatFarki', w3,
                        'Kar', w3,
                        'Yil', w2,
                        'Sehir', w0
                    ]);
                }
                return _this;
            }
            SatisAnalizRaporuForm.formKey = 'Raporlar.SatisAnalizRaporu';
            return SatisAnalizRaporuForm;
        }(Serenity.PrefixedContext));
        Raporlar.SatisAnalizRaporuForm = SatisAnalizRaporuForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var SatisAnalizRaporuRow;
        (function (SatisAnalizRaporuRow) {
            SatisAnalizRaporuRow.idProperty = 'Referans';
            SatisAnalizRaporuRow.nameProperty = 'CariStatusu';
            SatisAnalizRaporuRow.localTextPrefix = 'Raporlar.SatisAnalizRaporu';
            SatisAnalizRaporuRow.deletePermission = 'Satış Analiz Raporu:Silme';
            SatisAnalizRaporuRow.insertPermission = 'Satış Analiz Raporu:Ekleme';
            SatisAnalizRaporuRow.readPermission = 'Satış Analiz Raporu:Okuma';
            SatisAnalizRaporuRow.updatePermission = 'Satış Analiz Raporu:Güncelleme';
        })(SatisAnalizRaporuRow = Raporlar.SatisAnalizRaporuRow || (Raporlar.SatisAnalizRaporuRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var SatisAnalizRaporuService;
        (function (SatisAnalizRaporuService) {
            SatisAnalizRaporuService.baseUrl = 'Raporlar/SatisAnalizRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SatisAnalizRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(SatisAnalizRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SatisAnalizRaporuService = Raporlar.SatisAnalizRaporuService || (Raporlar.SatisAnalizRaporuService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TahsilatRaporuForm = /** @class */ (function (_super) {
            __extends(TahsilatRaporuForm, _super);
            function TahsilatRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TahsilatRaporuForm.init) {
                    TahsilatRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(TahsilatRaporuForm, [
                        'Tarih', w0,
                        'BelgeNo', w1,
                        'CariKod', w1,
                        'CariUnvani', w1,
                        'SaticiKodu', w1,
                        'SaticiAdi', w1,
                        'PlakaNo', w1,
                        'PlakaAciklama', w1,
                        'Aciklama', w1,
                        'NakitTahsilat', w2,
                        'KrediTahsilat', w2
                    ]);
                }
                return _this;
            }
            TahsilatRaporuForm.formKey = 'Raporlar.TahsilatRaporu';
            return TahsilatRaporuForm;
        }(Serenity.PrefixedContext));
        Raporlar.TahsilatRaporuForm = TahsilatRaporuForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TahsilatRaporuRow;
        (function (TahsilatRaporuRow) {
            TahsilatRaporuRow.idProperty = 'Logicalref';
            TahsilatRaporuRow.nameProperty = 'BelgeNo';
            TahsilatRaporuRow.localTextPrefix = 'Raporlar.TahsilatRaporu';
            TahsilatRaporuRow.deletePermission = 'Tahsilat Raporu:Silme';
            TahsilatRaporuRow.insertPermission = 'Tahsilat Raporu:Ekleme';
            TahsilatRaporuRow.readPermission = 'Tahsilat Raporu:Okuma';
            TahsilatRaporuRow.updatePermission = 'Tahsilat Raporu:Güncelleme';
        })(TahsilatRaporuRow = Raporlar.TahsilatRaporuRow || (Raporlar.TahsilatRaporuRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TahsilatRaporuService;
        (function (TahsilatRaporuService) {
            TahsilatRaporuService.baseUrl = 'Raporlar/TahsilatRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TahsilatRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(TahsilatRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TahsilatRaporuService = Raporlar.TahsilatRaporuService || (Raporlar.TahsilatRaporuService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TigerBorcluVadeAnaliziForm = /** @class */ (function (_super) {
            __extends(TigerBorcluVadeAnaliziForm, _super);
            function TigerBorcluVadeAnaliziForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TigerBorcluVadeAnaliziForm.init) {
                    TigerBorcluVadeAnaliziForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TigerBorcluVadeAnaliziForm, [
                        'CariHesapKodu', w0,
                        'Temsilci', w0,
                        'CariHesapUnvani', w0,
                        'OzelKod1', w0,
                        'OzelKod2', w0,
                        'OzelKod3', w0,
                        'OzelKod4', w0,
                        'OzelKod5', w0,
                        'TanimliVade', w0,
                        'ToplamBakiye', w1,
                        'OrtalamaVade', w2,
                        'DolanBakiye', w1,
                        'DolanVade', w2,
                        'DolacakIlkFaturaTutari', w1,
                        'DolacakIlkFaturaVade', w2,
                        'SonTahsilatTarihi', w2,
                        'SonTahsilatTutari', w1,
                        'DevredenBakiye', w1,
                        'DevredenVade', w2
                    ]);
                }
                return _this;
            }
            TigerBorcluVadeAnaliziForm.formKey = 'Raporlar.TigerBorcluVadeAnalizi';
            return TigerBorcluVadeAnaliziForm;
        }(Serenity.PrefixedContext));
        Raporlar.TigerBorcluVadeAnaliziForm = TigerBorcluVadeAnaliziForm;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TigerBorcluVadeAnaliziRow;
        (function (TigerBorcluVadeAnaliziRow) {
            TigerBorcluVadeAnaliziRow.idProperty = 'CariReferans';
            TigerBorcluVadeAnaliziRow.nameProperty = 'CariHesapKodu';
            TigerBorcluVadeAnaliziRow.localTextPrefix = 'Raporlar.TigerBorcluVadeAnalizi';
            TigerBorcluVadeAnaliziRow.deletePermission = 'Administration:General';
            TigerBorcluVadeAnaliziRow.insertPermission = 'Administration:General';
            TigerBorcluVadeAnaliziRow.readPermission = 'Administration:General';
            TigerBorcluVadeAnaliziRow.updatePermission = 'Administration:General';
        })(TigerBorcluVadeAnaliziRow = Raporlar.TigerBorcluVadeAnaliziRow || (Raporlar.TigerBorcluVadeAnaliziRow = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TigerBorcluVadeAnaliziService;
        (function (TigerBorcluVadeAnaliziService) {
            TigerBorcluVadeAnaliziService.baseUrl = 'Raporlar/TigerBorcluVadeAnalizi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TigerBorcluVadeAnaliziService[x] = function (r, s, o) {
                    return Q.serviceRequest(TigerBorcluVadeAnaliziService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TigerBorcluVadeAnaliziService = Raporlar.TigerBorcluVadeAnaliziService || (Raporlar.TigerBorcluVadeAnaliziService = {}));
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
        var SatinalmaAnalizRaporuForm = /** @class */ (function (_super) {
            __extends(SatinalmaAnalizRaporuForm, _super);
            function SatinalmaAnalizRaporuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SatinalmaAnalizRaporuForm.init) {
                    SatinalmaAnalizRaporuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SatinalmaAnalizRaporuForm, [
                        'CariStatusu', w0,
                        'CariKodu', w0,
                        'CariUnvani', w0,
                        'CariOzelKodu', w0,
                        'CariOzelKod5', w0,
                        'CariYetkiKodu', w0,
                        'VergiDairesi', w0,
                        'VergiNo', w0,
                        'MalzemeKodu', w0,
                        'MalzemeAciklamasi', w0,
                        'MalzemeOzelKodu', w0,
                        'MalzemeOzelKod2', w0,
                        'MalzemeOzelKod3', w0,
                        'MalzemeOzelKod4', w0,
                        'MalzemeOzelKod5', w0,
                        'MalzemeGrupKodu', w0,
                        'MalzemeYetkiKodu', w0,
                        'FisTuru', w0,
                        'FisTarihi', w1,
                        'FisNo', w0,
                        'MuhasebeDurumu', w0,
                        'FaturaDurumu', w0,
                        'FaturaNo', w0,
                        'FisAyi', w0,
                        'Miktar', w2,
                        'Kdv', w3,
                        'KdvHaric', w3,
                        'KdvTutari', w3,
                        'SatirTipi', w0,
                        'SaticiKodu', w0,
                        'SaticiAdi', w0,
                        'Maliyet', w3,
                        'SatisFiyatFarki', w3,
                        'Kar', w3,
                        'Yil', w2,
                        'Sehir', w0
                    ]);
                }
                return _this;
            }
            SatinalmaAnalizRaporuForm.formKey = 'Satinalma.SatinalmaAnalizRaporu';
            return SatinalmaAnalizRaporuForm;
        }(Serenity.PrefixedContext));
        Satinalma.SatinalmaAnalizRaporuForm = SatinalmaAnalizRaporuForm;
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
        var SatinalmaAnalizRaporuRow;
        (function (SatinalmaAnalizRaporuRow) {
            SatinalmaAnalizRaporuRow.idProperty = 'Referans';
            SatinalmaAnalizRaporuRow.nameProperty = 'CariStatusu';
            SatinalmaAnalizRaporuRow.localTextPrefix = 'Satinalma.SatinalmaAnalizRaporu';
            SatinalmaAnalizRaporuRow.deletePermission = 'Satınalma Analiz Raporu:Silme';
            SatinalmaAnalizRaporuRow.insertPermission = 'Satınalma Analiz Raporu:Ekleme';
            SatinalmaAnalizRaporuRow.readPermission = 'Satınalma Analiz Raporu:Okuma';
            SatinalmaAnalizRaporuRow.updatePermission = 'Satınalma Analiz Raporu:Güncelleme';
        })(SatinalmaAnalizRaporuRow = Satinalma.SatinalmaAnalizRaporuRow || (Satinalma.SatinalmaAnalizRaporuRow = {}));
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
        var SatinalmaAnalizRaporuService;
        (function (SatinalmaAnalizRaporuService) {
            SatinalmaAnalizRaporuService.baseUrl = 'Satinalma/SatinalmaAnalizRaporu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SatinalmaAnalizRaporuService[x] = function (r, s, o) {
                    return Q.serviceRequest(SatinalmaAnalizRaporuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SatinalmaAnalizRaporuService = Satinalma.SatinalmaAnalizRaporuService || (Satinalma.SatinalmaAnalizRaporuService = {}));
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Texts;
    (function (Texts) {
        E_Maliyet['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, KullaniciRaporFiltreleri: { Id: 1, KullaniciFiltresi: 1, RaporlarId: 1, RaporlarRaporAdi: 1, RaporlarRaporKodu: 1, UserDisplayName: 1, UserEmail: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserLastDirectoryUpdate: 1, UserMobilePhoneNumber: 1, UserMobilePhoneVerified: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserSource: 1, UserTigerDonem: 1, UserTigerFirma: 1, UserTwoFactorAuth: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Raporlar: { Id: 1, RaporAdi: 1, RaporKodu: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TigerDonem: 1, TigerDonemNo: 1, TigerFirma: 1, TigerFirmaAdi: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Finans: { BankaBakiye: { BakiyeEuro: 1, BakiyeTl: 1, BakiyeUsd: 1, BankaAdi: 1, HesapAdi: 1, Id: 1 }, BankaHareketleri: { BankaAdi: 1, CariKodu: 1, CariUnvani: 1, FisNo: 1, FisTuru: 1, HesapAdi: 1, Id: 1, OdemeEuro: 1, OdemeTl: 1, OdemeUsd: 1, SatirAciklamasi: 1, TahsilEuro: 1, TahsilTl: 1, TahsilUsd: 1, Tarih: 1 }, KasaHareket: { CariKodu: 1, CariUnvan: 1, DetayAciklama: 1, Id: 1, IslemNo: 1, IslemTuru: 1, KasaAdi: 1, KasaKodu: 1, OdemeEuro: 1, OdemeTl: 1, OdemeUsd: 1, TahsilEuro: 1, TahsilTl: 1, TahsilUsd: 1, Tarih: 1 } }, Muhasebe: { Bilanco: { Deger: 1, HesapAdi: 1, HesapKodu: 1, Logicalref: 1, Tip1: 1, Tip2: 1, Tip3: 1, Tip4: 1 }, GelirTablosu: { Aciklama: 1, Ay: 1, Grup1: 1, SatirNo: 1, Tutar: 1 } }, Raporlar: { BorcVadeAnalizi: { CariHesapKodu: 1, CariHesapUnvani: 1, CariReferans: 1, DevredenBakiye: 1, DevredenVade: 1, DolacakIlkFaturaTutari: 1, DolacakIlkFaturaVade: 1, DolanBakiye: 1, DolanVade: 1, OrtalamaVade: 1, OzelKod: 1, OzelKod2: 1, OzelKod3: 1, OzelKod4: 1, OzelKod5: 1, SonGorusenKisi: 1, SonGorusmeDetayi: 1, SonGorusmeTarihi: 1, SonGorusulenKisi: 1, SonTahsilatCekOrtVade: 1, SonTahsilatTarihi: 1, SonTahsilatTuru: 1, SonTahsilatTutari: 1, TanimliVade: 1, Tel1: 1, Tel2: 1, ToplamBakiye: 1 }, BorcluVadeAnalizi: { CariHesapKodu: 1, CariHesapUnvani: 1, CariReferans: 1, DevredenBakiye: 1, DevredenVade: 1, DolacakIlkFaturaTutari: 1, DolacakIlkFaturaVade: 1, DolanBakiye: 1, DolanVade: 1, OrtalamaVade: 1, OzelKod1: 1, OzelKod2: 1, OzelKod3: 1, OzelKod4: 1, OzelKod5: 1, SonTahsilatTarihi: 1, SonTahsilatTutari: 1, TanimliVade: 1, Temsilci: 1, ToplamBakiye: 1 }, BorcluVadeAnaliziYeni: { CariHesapKodu: 1, CariHesapUnvani: 1, CariReferans: 1, DevredenBakiye: 1, DevredenVade: 1, DolacakIlkFaturaTutarı: 1, DolacakIlkFaturaVade: 1, DolanBakiye: 1, DolanVade: 1, OrtalamaVade: 1, SonGorusenKisi: 1, SonGorusmeDetayı: 1, SonGorusmeTarihi: 1, SonGorusulenKisi: 1, SonTahsilatTarihi: 1, SonTahsilatTutarı: 1, SonTahsilatTürü: 1, SonTahsilatçekOrtVade: 1, TanımlıVade: 1, Tel1: 1, Tel2: 1, ToplamBakiye: 1, ÖzelKod: 1, ÖzelKod2: 1, ÖzelKod3: 1, ÖzelKod4: 1, ÖzelKod5: 1 }, CariBakiyeRaporu: { Alacak: 1, Bakiye: 1, BelgeNo: 1, Borç: 1, CariHesapKodu: 1, CariHesapUnvani: 1, IslemReferans: 1, OzelKod: 1, YetkiKod: 1, İşlemAçıklaması: 1, İşlemNo: 1, İşlemTarihi: 1, İşlemTürü: 1 }, CekSenetRaporu: { BelgeTuru: 1, Borclu: 1, CekBankaAdi: 1, CekBankaHesapNo: 1, CekBankaSubeKodu: 1, CiroEdenKesideci: 1, Doviz: 1, Durum: 1, GirisAyi: 1, GirisTarihi: 1, GirisYil: 1, Iban: 1, Muhabir: 1, PortfoyNo: 1, Referans: 1, SatisElemani: 1, Sehir: 1, SeriNo: 1, SonDurum: 1, TcVergiNo: 1, Tip: 1, Tutar: 1, Vade: 1, VadeAy: 1, VadeYili: 1 }, HareketsizCariListesi: { Adres1: 1, Adres2: 1, CariHesapKodu: 1, CariHesapUnvani: 1, Logicalref: 1, OzelKod: 1, OzelKod2: 1, OzelKod3: 1, OzelKod4: 1, OzelKod5: 1, SonHareketTarihi: 1, Statu: 1, Telefon1: 1, Telefon2: 1, YetkiKodu: 1 }, MizanRaporu: { Alacak: 1, AnaHesapAciklamasi: 1, AnaHesapKodu: 1, Bakiye: 1, Borc: 1, FisAciklamasi: 1, FisNumarasi: 1, FisOzelKodu: 1, FisTarihi: 1, FisYetkiKodu: 1, HesapAdi: 1, HesapKodu: 1, Logicalref: 1, SatirAciklamasi: 1, YevmiyeNo: 1 }, SatisAnalizRaporu: { CariKodu: 1, CariOzelKod5: 1, CariOzelKodu: 1, CariStatusu: 1, CariUnvani: 1, CariYetkiKodu: 1, FaturaDurumu: 1, FaturaNo: 1, FisAyi: 1, FisNo: 1, FisTarihi: 1, FisTuru: 1, Kar: 1, Kdv: 1, KdvHaric: 1, KdvTutari: 1, Maliyet: 1, MalzemeAciklamasi: 1, MalzemeGrupKodu: 1, MalzemeKodu: 1, MalzemeOzelKod2: 1, MalzemeOzelKod3: 1, MalzemeOzelKod4: 1, MalzemeOzelKod5: 1, MalzemeOzelKodu: 1, MalzemeYetkiKodu: 1, Miktar: 1, MuhasebeDurumu: 1, Referans: 1, SaticiAdi: 1, SaticiKodu: 1, SatirTipi: 1, SatisFiyatFarki: 1, Sehir: 1, VergiDairesi: 1, VergiNo: 1, Yil: 1 }, TahsilatRaporu: { Aciklama: 1, BelgeNo: 1, CariKod: 1, CariUnvani: 1, KrediTahsilat: 1, Logicalref: 1, NakitTahsilat: 1, PlakaAciklama: 1, PlakaNo: 1, SaticiAdi: 1, SaticiKodu: 1, Tarih: 1 }, TigerBorcluVadeAnalizi: { CariHesapKodu: 1, CariHesapUnvani: 1, CariReferans: 1, DevredenBakiye: 1, DevredenVade: 1, DolacakIlkFaturaTutari: 1, DolacakIlkFaturaVade: 1, DolanBakiye: 1, DolanVade: 1, OrtalamaVade: 1, OzelKod1: 1, OzelKod2: 1, OzelKod3: 1, OzelKod4: 1, OzelKod5: 1, SonTahsilatTarihi: 1, SonTahsilatTutari: 1, TanimliVade: 1, Temsilci: 1, ToplamBakiye: 1 } }, Satinalma: { SatinalmaAnalizRaporu: { CariKodu: 1, CariOzelKod5: 1, CariOzelKodu: 1, CariStatusu: 1, CariUnvani: 1, CariYetkiKodu: 1, FaturaDurumu: 1, FaturaNo: 1, FisAyi: 1, FisNo: 1, FisTarihi: 1, FisTuru: 1, Kar: 1, Kdv: 1, KdvHaric: 1, KdvTutari: 1, Maliyet: 1, MalzemeAciklamasi: 1, MalzemeGrupKodu: 1, MalzemeKodu: 1, MalzemeOzelKod2: 1, MalzemeOzelKod3: 1, MalzemeOzelKod4: 1, MalzemeOzelKod5: 1, MalzemeOzelKodu: 1, MalzemeYetkiKodu: 1, Miktar: 1, MuhasebeDurumu: 1, Referans: 1, SaticiAdi: 1, SaticiKodu: 1, SatirTipi: 1, SatisFiyatFarki: 1, Sehir: 1, VergiDairesi: 1, VergiNo: 1, Yil: 1 } }, Tiger: { BankaHareketleri: { BankaAdi: 1, FisNo: 1, FisTuru: 1, HesapAdi: 1, Id: 1, OdemeEuro: 1, OdemeTl: 1, OdemeUsd: 1, SatirAciklamasi: 1, TahsilEuro: 1, TahsilTl: 1, TahsilUsd: 1, Tarih: 1 }, CariHesapListesi: { Active: 1, Bakiye: 1, Cardtype: 1, City: 1, Code: 1, Country: 1, Credit: 1, CreditRd: 1, Cyphcode: 1, Debit: 1, DebitRd: 1, Definition: 1, Emailaddr: 1, Finbrws: 1, Incharge: 1, Logicalref: 1, Orglogicref: 1, Purchbrws: 1, Salesbrws: 1, Specode: 1, Specode2: 1, Specode3: 1, Specode4: 1, Specode5: 1, Taxnr: 1, Taxoffice: 1, Tckno: 1, Telnrs1: 1, Telnrs2: 1, Tradinggrp: 1, Wflowcrd: 1, Wflowcrdref: 1 }, TigerDonemler: { Active: 1, Begdate: 1, Enddate: 1, FirmaDonemStr: 1, Firmnr: 1, Key1: 1, Key2: 1, Key3: 1, Key4: 1, Logicalref: 1, Nr: 1, Perlocalctype: 1, Perrepcurr: 1 }, TigerFirmalar: { Accepteinv: 1, Accofficecode: 1, Actarea: 1, Advancedproduct: 1, Backupebooks: 1, Bagkurnr: 1, Begday: 1, Begmon: 1, City: 1, Cntrycode: 1, Conscoderef: 1, Contractdate: 1, Contractdesc: 1, Contractnumber: 1, Contracttype: 1, Countofleg: 1, Country: 1, Cpachambnr: 1, Cpacity: 1, Cpacntrycode: 1, Cpacountry: 1, Cpadistrict: 1, Cpadoornr: 1, Cpaemail: 1, Cpaextension: 1, Cpafaxnr: 1, Cpaidtcno: 1, Cpakdspassword: 1, Cpaname: 1, Cpaoccupation: 1, Cpaphone: 1, Cparoad: 1, Cpastreet: 1, Cpasurname: 1, Cpataxnr: 1, Cpataxoff: 1, Cpatckn: 1, Cpatitle: 1, Cpausername: 1, Cpazipcode: 1, Ctable: 1, Dbname: 1, Deductlimit: 1, Direct: 1, District: 1, Dncnstlen: 1, Doornr: 1, Earcentdefaddr: 1, Earcentpass: 1, Earcentsend: 1, Earcentuser: 1, Ebookconttype: 1, Ebookcurrtype: 1, Ebookstartdate: 1, Einvconttype: 1, Einvcustom: 1, Einvoiceid: 1, Einvoicetypsgk: 1, Emailaddr: 1, Employeremail: 1, Employeridtcno: 1, Employername: 1, Employersurname: 1, Emutentdefaddr: 1, Emutentpass: 1, Emutentsend: 1, Emutentuser: 1, Fax: 1, Faxemailaddr: 1, Faxuserkey: 1, Faxusername: 1, Firmemailaddr: 1, Firmeuvatnumber: 1, Firmlang: 1, Firmrepcurr: 1, Firmtype: 1, Firmytlstatus: 1, Getcpafromdiv: 1, Hashvers: 1, Intsalesaddr: 1, Isebookkeptbyfirm: 1, Isymmcontractmade: 1, Jgcompanynr: 1, Jghrfirmcode: 1, Jgpassword: 1, Jgperiodnr: 1, Jgserverurl: 1, Jgusername: 1, Lastcontrolno: 1, Lastgloblineno: 1, Lastjournalno: 1, Liquidatedfirm: 1, Liquidatingdate: 1, Liquidationtyp: 1, Localcaldr: 1, Localctyp: 1, Logicalref: 1, Logoid: 1, Longperiods: 1, Majversnr: 1, Mersisno: 1, Minversnr: 1, Mobfirmalias: 1, Mobpassword: 1, Mobusername: 1, Moddate: 1, Modtime: 1, Nacecode: 1, Name: 1, NameAndNr: 1, Nr: 1, Officaltitle: 1, Orgchart: 1, Parole: 1, Parole2: 1, Passive: 1, Password: 1, Passwordtaxdecl: 1, Passwordtaxdecl2: 1, Pernr: 1, Phone1: 1, Phone2: 1, Postlabelcode: 1, Postlabelcodedesp: 1, Profileid: 1, Ptimestamphost: 1, Ptimestamppass: 1, Ptimestampport: 1, Ptimestampuser: 1, Relversnr: 1, Road: 1, Sector: 1, Securnr: 1, Senderlabelcode: 1, Senderlabelcodedesp: 1, Sepexchtable: 1, Shaalgorithm: 1, Shpagncod: 1, Siteid: 1, Srccriteria: 1, Statecode: 1, Statename: 1, Street: 1, Taxnr: 1, Taxoff: 1, Taxoffcode: 1, Taxoffstatecd: 1, Taxoffstatenm: 1, Taxpayercode: 1, Taxpayername: 1, Tcellappid: 1, Tcellapppw: 1, Timestampapppth: 1, Timestamppass: 1, Timestampport: 1, Timestampserver: 1, Timestampuser: 1, Title: 1, Traderegisno: 1, Usechangelog: 1, Usecommonparam: 1, Useearchive: 1, Useebook: 1, Useedespatch: 1, Useeproducerrec: 1, Useetradesmaninv: 1, Usepaperinv: 1, Useproxy: 1, Usercode: 1, Usercode2: 1, Userext: 1, Username: 1, Useserverdate: 1, Vatroundmtd: 1, Webaddr: 1, Workdayflgs1: 1, Workdayflgs2: 1, Workdayflgs3: 1, Workdayflgs4: 1, Workdayflgs5: 1, Workdayflgs6: 1, Workdayflgs7: 1, Ymmchambnr: 1, Ymmcontdate: 1, Ymmcontdesc: 1, Ymmcontnumber: 1, Ymmconttype: 1, Ymmemail: 1, Ymmfaxnr: 1, Ymmname: 1, Ymmphone: 1, Ymmsurname: 1, Ymmtaxnr: 1, Ymmtcno: 1, Ytlsourcefirm: 1, Zipcode: 1, Zusatzno: 1 } }, VeriGirisleri: { CariGorusmeler: { Aciklama: 1, Bakiye: 1, CariAdi: 1, CariAdiKodu: 1, CariRef: 1, Firma: 1, Gorusen: 1, GorusenAdi: 1, Gorusulen: 1, GorusulenUnvan: 1, Logicalref: 1, OdemeBaslangic: 1, OdemeBitis: 1, Specode2: 1, Tarih: 1, Tutar: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = E_Maliyet.Texts || (E_Maliyet.Texts = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var BankaHareketleriForm = /** @class */ (function (_super) {
            __extends(BankaHareketleriForm, _super);
            function BankaHareketleriForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankaHareketleriForm.init) {
                    BankaHareketleriForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(BankaHareketleriForm, [
                        'BankaAdi', w0,
                        'HesapAdi', w0,
                        'Tarih', w1,
                        'FisNo', w0,
                        'FisTuru', w0,
                        'SatirAciklamasi', w0,
                        'TahsilTl', w2,
                        'OdemeTl', w2,
                        'TahsilUsd', w2,
                        'OdemeUsd', w2,
                        'TahsilEuro', w2,
                        'OdemeEuro', w2
                    ]);
                }
                return _this;
            }
            BankaHareketleriForm.formKey = 'Tiger.BankaHareketleri';
            return BankaHareketleriForm;
        }(Serenity.PrefixedContext));
        Tiger.BankaHareketleriForm = BankaHareketleriForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var BankaHareketleriRow;
        (function (BankaHareketleriRow) {
            BankaHareketleriRow.idProperty = 'Id';
            BankaHareketleriRow.nameProperty = 'BankaAdi';
            BankaHareketleriRow.localTextPrefix = 'Tiger.BankaHareketleri';
            BankaHareketleriRow.deletePermission = 'Finans';
            BankaHareketleriRow.insertPermission = 'Finans';
            BankaHareketleriRow.readPermission = 'Finans';
            BankaHareketleriRow.updatePermission = 'Finans';
        })(BankaHareketleriRow = Tiger.BankaHareketleriRow || (Tiger.BankaHareketleriRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var BankaHareketleriService;
        (function (BankaHareketleriService) {
            BankaHareketleriService.baseUrl = 'Tiger/BankaHareketleri';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankaHareketleriService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankaHareketleriService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankaHareketleriService = Tiger.BankaHareketleriService || (Tiger.BankaHareketleriService = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var CariHesapListesiForm = /** @class */ (function (_super) {
            __extends(CariHesapListesiForm, _super);
            function CariHesapListesiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CariHesapListesiForm.init) {
                    CariHesapListesiForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(CariHesapListesiForm, [
                        'Code', w0,
                        'Definition', w0,
                        'City', w0,
                        'Country', w0,
                        'Active', w1,
                        'Cardtype', w1,
                        'Specode', w0,
                        'Tradinggrp', w0,
                        'Cyphcode', w0,
                        'Incharge', w0,
                        'Specode2', w0,
                        'Specode3', w0,
                        'Specode4', w0,
                        'Specode5', w0,
                        'Taxoffice', w0,
                        'Taxnr', w0,
                        'Tckno', w0,
                        'Emailaddr', w0,
                        'Telnrs1', w0,
                        'Telnrs2', w0,
                        'Orglogicref', w1,
                        'Wflowcrdref', w1,
                        'Purchbrws', w1,
                        'Salesbrws', w1,
                        'Finbrws', w1,
                        'Wflowcrd', w0,
                        'Debit', w2,
                        'Credit', w2,
                        'DebitRd', w2,
                        'CreditRd', w2
                    ]);
                }
                return _this;
            }
            CariHesapListesiForm.formKey = 'Tiger.CariHesapListesi';
            return CariHesapListesiForm;
        }(Serenity.PrefixedContext));
        Tiger.CariHesapListesiForm = CariHesapListesiForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var CariHesapListesiRow;
        (function (CariHesapListesiRow) {
            CariHesapListesiRow.idProperty = 'Logicalref';
            CariHesapListesiRow.nameProperty = 'Definition';
            CariHesapListesiRow.localTextPrefix = 'Tiger.CariHesapListesi';
            CariHesapListesiRow.lookupKey = 'Tiger.CariHesapListesi';
            function getLookup() {
                return Q.getLookup('Tiger.CariHesapListesi');
            }
            CariHesapListesiRow.getLookup = getLookup;
            CariHesapListesiRow.deletePermission = 'Cari Görüşmeler:Silme';
            CariHesapListesiRow.insertPermission = 'Cari Görüşmeler:Ekleme';
            CariHesapListesiRow.readPermission = 'Cari Görüşmeler:Okuma';
            CariHesapListesiRow.updatePermission = 'Cari Görüşmeler:Güncelleme';
        })(CariHesapListesiRow = Tiger.CariHesapListesiRow || (Tiger.CariHesapListesiRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var CariHesapListesiService;
        (function (CariHesapListesiService) {
            CariHesapListesiService.baseUrl = 'Tiger/CariHesapListesi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CariHesapListesiService[x] = function (r, s, o) {
                    return Q.serviceRequest(CariHesapListesiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CariHesapListesiService = Tiger.CariHesapListesiService || (Tiger.CariHesapListesiService = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerDonemlerForm = /** @class */ (function (_super) {
            __extends(TigerDonemlerForm, _super);
            function TigerDonemlerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TigerDonemlerForm.init) {
                    TigerDonemlerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(TigerDonemlerForm, [
                        'Nr', w0,
                        'Firmnr', w0,
                        'Begdate', w1,
                        'Enddate', w1,
                        'Active', w0,
                        'Key1', w0,
                        'Key2', w0,
                        'Key3', w0,
                        'Key4', w0,
                        'Perlocalctype', w0,
                        'Perrepcurr', w0
                    ]);
                }
                return _this;
            }
            TigerDonemlerForm.formKey = 'Tiger.TigerDonemler';
            return TigerDonemlerForm;
        }(Serenity.PrefixedContext));
        Tiger.TigerDonemlerForm = TigerDonemlerForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerDonemlerRow;
        (function (TigerDonemlerRow) {
            TigerDonemlerRow.idProperty = 'Nr';
            TigerDonemlerRow.nameProperty = 'FirmaDonemStr';
            TigerDonemlerRow.localTextPrefix = 'Tiger.TigerDonemler';
            TigerDonemlerRow.lookupKey = 'Firmnr';
            function getLookup() {
                return Q.getLookup('Firmnr');
            }
            TigerDonemlerRow.getLookup = getLookup;
            TigerDonemlerRow.deletePermission = 'Tiger Firmalar:Silme';
            TigerDonemlerRow.insertPermission = 'Tiger Firmalar:Ekleme';
            TigerDonemlerRow.readPermission = 'Tiger Dönemler:Okuma';
            TigerDonemlerRow.updatePermission = 'Tiger Firmalar:Güncelleme';
        })(TigerDonemlerRow = Tiger.TigerDonemlerRow || (Tiger.TigerDonemlerRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerDonemlerService;
        (function (TigerDonemlerService) {
            TigerDonemlerService.baseUrl = 'Tiger/TigerDonemler';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TigerDonemlerService[x] = function (r, s, o) {
                    return Q.serviceRequest(TigerDonemlerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TigerDonemlerService = Tiger.TigerDonemlerService || (Tiger.TigerDonemlerService = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerFirmalarForm = /** @class */ (function (_super) {
            __extends(TigerFirmalarForm, _super);
            function TigerFirmalarForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TigerFirmalarForm.init) {
                    TigerFirmalarForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(TigerFirmalarForm, [
                        'Nr', w0,
                        'Name', w1,
                        'Title', w1,
                        'Street', w1,
                        'Road', w1,
                        'Doornr', w1,
                        'District', w1,
                        'City', w1,
                        'Country', w1,
                        'Zipcode', w1,
                        'Phone1', w1,
                        'Phone2', w1,
                        'Fax', w1,
                        'Taxoff', w1,
                        'Taxnr', w1,
                        'Securnr', w1,
                        'Direct', w1,
                        'Cpaname', w1,
                        'Cpastreet', w1,
                        'Cparoad', w1,
                        'Cpadoornr', w1,
                        'Cpadistrict', w1,
                        'Cpacity', w1,
                        'Cpaphone', w1,
                        'Cpataxoff', w1,
                        'Cpataxnr', w1,
                        'Cpachambnr', w1,
                        'Begmon', w0,
                        'Begday', w0,
                        'Userext', w0,
                        'Pernr', w0,
                        'Countofleg', w0,
                        'Ctable', w1,
                        'Workdayflgs1', w0,
                        'Workdayflgs2', w0,
                        'Workdayflgs3', w0,
                        'Workdayflgs4', w0,
                        'Workdayflgs5', w0,
                        'Workdayflgs6', w0,
                        'Workdayflgs7', w0,
                        'Localctyp', w0,
                        'Firmrepcurr', w0,
                        'Sepexchtable', w0,
                        'Vatroundmtd', w0,
                        'Firmeuvatnumber', w1,
                        'Majversnr', w0,
                        'Minversnr', w0,
                        'Relversnr', w0,
                        'Siteid', w0,
                        'Orgchart', w0,
                        'Localcaldr', w0,
                        'Firmlang', w0,
                        'Taxoffcode', w1,
                        'Cntrycode', w1,
                        'Longperiods', w0,
                        'Logoid', w1,
                        'Emailaddr', w1,
                        'Webaddr', w1,
                        'Moddate', w2,
                        'Modtime', w0,
                        'Traderegisno', w1,
                        'Employername', w1,
                        'Employersurname', w1,
                        'Employeridtcno', w1,
                        'Employeremail', w1,
                        'Firmytlstatus', w0,
                        'Ytlsourcefirm', w0,
                        'Zusatzno', w1,
                        'Taxoffstatecd', w1,
                        'Taxoffstatenm', w1,
                        'Statecode', w1,
                        'Statename', w1,
                        'Cpaoccupation', w1,
                        'Cpaextension', w1,
                        'Cpaemail', w1,
                        'Cpasurname', w1,
                        'Cpaidtcno', w1,
                        'Accofficecode', w1,
                        'Advancedproduct', w0,
                        'Bagkurnr', w1,
                        'Username', w1,
                        'Dbname', w1,
                        'Password', w1,
                        'Actarea', w0,
                        'Sector', w0,
                        'Srccriteria', w1,
                        'Conscoderef', w0,
                        'Tcellappid', w1,
                        'Tcellapppw', w1,
                        'Dncnstlen', w0,
                        'Useserverdate', w0,
                        'Usechangelog', w0,
                        'Mobusername', w1,
                        'Mobpassword', w1,
                        'Mobfirmalias', w1,
                        'Accepteinv', w0,
                        'Einvoiceid', w1,
                        'Profileid', w1,
                        'Usecommonparam', w0,
                        'Passive', w0,
                        'Usercode', w1,
                        'Parole', w1,
                        'Passwordtaxdecl', w1,
                        'Firmemailaddr', w1,
                        'Firmtype', w0,
                        'Nacecode', w1,
                        'Cpacountry', w1,
                        'Cpazipcode', w1,
                        'Cpafaxnr', w1,
                        'Cpacntrycode', w1,
                        'Useebook', w0,
                        'Contractdesc', w1,
                        'Contracttype', w1,
                        'Contractdate', w2,
                        'Contractnumber', w1,
                        'Hashvers', w1,
                        'Timestampuser', w1,
                        'Timestamppass', w1,
                        'Timestampserver', w1,
                        'Useproxy', w0,
                        'Ptimestampuser', w1,
                        'Ptimestamppass', w1,
                        'Ptimestamphost', w1,
                        'Ptimestampport', w0,
                        'Timestampport', w0,
                        'Timestampapppth', w1,
                        'Jgserverurl', w1,
                        'Jgusername', w1,
                        'Jgpassword', w1,
                        'Jgcompanynr', w0,
                        'Jgperiodnr', w0,
                        'Jghrfirmcode', w1,
                        'Deductlimit', w3,
                        'Postlabelcode', w1,
                        'Senderlabelcode', w1,
                        'Einvconttype', w0,
                        'Ebookconttype', w0,
                        'Mersisno', w1,
                        'Officaltitle', w1,
                        'Useearchive', w0,
                        'Intsalesaddr', w1,
                        'Faxusername', w1,
                        'Faxuserkey', w1,
                        'Faxemailaddr', w1,
                        'Ebookstartdate', w2,
                        'Ebookcurrtype', w0,
                        'Earcentsend', w0,
                        'Earcentuser', w1,
                        'Earcentpass', w1,
                        'Earcentdefaddr', w1,
                        'Cpatitle', w0,
                        'Isebookkeptbyfirm', w0,
                        'Isymmcontractmade', w0,
                        'Ymmname', w1,
                        'Ymmsurname', w1,
                        'Ymmcontdesc', w1,
                        'Ymmconttype', w1,
                        'Ymmcontdate', w0,
                        'Ymmcontnumber', w1,
                        'Lastcontrolno', w0,
                        'Lastjournalno', w0,
                        'Lastgloblineno', w0,
                        'Backupebooks', w0,
                        'Einvcustom', w0,
                        'Ymmphone', w1,
                        'Ymmfaxnr', w1,
                        'Ymmemail', w1,
                        'Einvoicetypsgk', w0,
                        'Taxpayercode', w1,
                        'Taxpayername', w1,
                        'Ymmchambnr', w1,
                        'Ymmtcno', w1,
                        'Ymmtaxnr', w1,
                        'Useedespatch', w0,
                        'Postlabelcodedesp', w1,
                        'Senderlabelcodedesp', w1,
                        'Shaalgorithm', w0,
                        'Useeproducerrec', w0,
                        'Cpakdspassword', w1,
                        'Cpausername', w1,
                        'Useetradesmaninv', w0,
                        'Liquidatingdate', w0,
                        'Liquidatedfirm', w0,
                        'Getcpafromdiv', w0,
                        'Liquidationtyp', w0,
                        'Emutentsend', w0,
                        'Passwordtaxdecl2', w1,
                        'Emutentuser', w1,
                        'Emutentdefaddr', w1,
                        'Emutentpass', w1,
                        'Cpatckn', w0,
                        'Usepaperinv', w0,
                        'Shpagncod', w1,
                        'Parole2', w1,
                        'Usercode2', w1
                    ]);
                }
                return _this;
            }
            TigerFirmalarForm.formKey = 'Tiger.TigerFirmalar';
            return TigerFirmalarForm;
        }(Serenity.PrefixedContext));
        Tiger.TigerFirmalarForm = TigerFirmalarForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerFirmalarRow;
        (function (TigerFirmalarRow) {
            TigerFirmalarRow.idProperty = 'Nr';
            TigerFirmalarRow.nameProperty = 'NameAndNr';
            TigerFirmalarRow.localTextPrefix = 'Tiger.TigerFirmalar';
            TigerFirmalarRow.lookupKey = 'Tiger.TigerFirmalar';
            function getLookup() {
                return Q.getLookup('Tiger.TigerFirmalar');
            }
            TigerFirmalarRow.getLookup = getLookup;
            TigerFirmalarRow.deletePermission = 'Tiger Firmalar:Silme';
            TigerFirmalarRow.insertPermission = 'Tiger Firmalar:Ekleme';
            TigerFirmalarRow.readPermission = 'Tiger Firmalar:Okuma';
            TigerFirmalarRow.updatePermission = 'Tiger Firmalar:Güncelleme';
        })(TigerFirmalarRow = Tiger.TigerFirmalarRow || (Tiger.TigerFirmalarRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerFirmalarService;
        (function (TigerFirmalarService) {
            TigerFirmalarService.baseUrl = 'Tiger/TigerFirmalar';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TigerFirmalarService[x] = function (r, s, o) {
                    return Q.serviceRequest(TigerFirmalarService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TigerFirmalarService = Tiger.TigerFirmalarService || (Tiger.TigerFirmalarService = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
        var CariGorusmelerForm = /** @class */ (function (_super) {
            __extends(CariGorusmelerForm, _super);
            function CariGorusmelerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CariGorusmelerForm.init) {
                    CariGorusmelerForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(CariGorusmelerForm, [
                        'CariRef', w0,
                        'Tarih', w1,
                        'Gorusen', w0,
                        'Gorusulen', w2,
                        'GorusulenUnvan', w2,
                        'Bakiye', w3,
                        'Tutar', w3,
                        'OdemeBaslangic', w1,
                        'OdemeBitis', w1,
                        'Aciklama', w4
                    ]);
                }
                return _this;
            }
            CariGorusmelerForm.formKey = 'VeriGirisleri.CariGorusmeler';
            return CariGorusmelerForm;
        }(Serenity.PrefixedContext));
        VeriGirisleri.CariGorusmelerForm = CariGorusmelerForm;
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
        var CariGorusmelerRow;
        (function (CariGorusmelerRow) {
            CariGorusmelerRow.idProperty = 'Logicalref';
            CariGorusmelerRow.nameProperty = 'Gorusulen';
            CariGorusmelerRow.localTextPrefix = 'VeriGirisleri.CariGorusmeler';
            CariGorusmelerRow.deletePermission = 'Cari Görüşmeler:Silme';
            CariGorusmelerRow.insertPermission = 'Cari Görüşmeler:Ekleme';
            CariGorusmelerRow.readPermission = 'Cari Görüşmeler:Okuma';
            CariGorusmelerRow.updatePermission = 'Cari Görüşmeler:Güncelleme';
        })(CariGorusmelerRow = VeriGirisleri.CariGorusmelerRow || (VeriGirisleri.CariGorusmelerRow = {}));
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
        var CariGorusmelerService;
        (function (CariGorusmelerService) {
            CariGorusmelerService.baseUrl = 'VeriGirisleri/CariGorusmeler';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CariGorusmelerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CariGorusmelerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CariGorusmelerService = VeriGirisleri.CariGorusmelerService || (VeriGirisleri.CariGorusmelerService = {}));
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogDialog = /** @class */ (function (_super) {
            __extends(DataAuditLogDialog, _super);
            function DataAuditLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.DataAuditLogForm(_this.idPrefix);
                return _this;
            }
            DataAuditLogDialog.prototype.getFormKey = function () { return Administration.DataAuditLogForm.formKey; };
            DataAuditLogDialog.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getNameProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogDialog.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogDialog.prototype.getToolbarButtons = function () {
                return [];
            };
            DataAuditLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            DataAuditLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DataAuditLogDialog);
            return DataAuditLogDialog;
        }(Serenity.EntityDialog));
        Administration.DataAuditLogDialog = DataAuditLogDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var DataAuditLogGrid = /** @class */ (function (_super) {
            __extends(DataAuditLogGrid, _super);
            function DataAuditLogGrid(container) {
                return _super.call(this, container) || this;
            }
            DataAuditLogGrid.prototype.getColumnsKey = function () { return 'Administration.DataAuditLog'; };
            DataAuditLogGrid.prototype.getDialogType = function () { return Administration.DataAuditLogDialog; };
            DataAuditLogGrid.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogGrid.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogGrid.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogGrid.prototype.getButtons = function () {
                return [];
            };
            DataAuditLogGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "LogType" /* LogType */; }).format = function (ctx) {
                    var icon = null;
                    switch (ctx.value) {
                        case Administration.DataAuditLogType.Delete:
                            icon = "fa-times text-red";
                            break;
                        case Administration.DataAuditLogType.Insert:
                            icon = "fa-plus text-green";
                            break;
                        case Administration.DataAuditLogType.Update:
                            icon = "fa-pencil-square-o text-orange";
                            break;
                    }
                    return (icon ? '<i class="fa ' + icon + '"></i> ' : '') +
                        Serenity.EnumFormatter.format(Administration.DataAuditLogType, ctx.value);
                };
                return columns;
            };
            DataAuditLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataAuditLogGrid);
            return DataAuditLogGrid;
        }(Serenity.EntityGrid));
        Administration.DataAuditLogGrid = DataAuditLogGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var KullaniciRaporFiltreleriDialog = /** @class */ (function (_super) {
            __extends(KullaniciRaporFiltreleriDialog, _super);
            function KullaniciRaporFiltreleriDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.KullaniciRaporFiltreleriForm(_this.idPrefix);
                return _this;
            }
            KullaniciRaporFiltreleriDialog.prototype.getFormKey = function () { return Administration.KullaniciRaporFiltreleriForm.formKey; };
            KullaniciRaporFiltreleriDialog.prototype.getIdProperty = function () { return Administration.KullaniciRaporFiltreleriRow.idProperty; };
            KullaniciRaporFiltreleriDialog.prototype.getLocalTextPrefix = function () { return Administration.KullaniciRaporFiltreleriRow.localTextPrefix; };
            KullaniciRaporFiltreleriDialog.prototype.getNameProperty = function () { return Administration.KullaniciRaporFiltreleriRow.nameProperty; };
            KullaniciRaporFiltreleriDialog.prototype.getService = function () { return Administration.KullaniciRaporFiltreleriService.baseUrl; };
            KullaniciRaporFiltreleriDialog.prototype.getDeletePermission = function () { return Administration.KullaniciRaporFiltreleriRow.deletePermission; };
            KullaniciRaporFiltreleriDialog.prototype.getInsertPermission = function () { return Administration.KullaniciRaporFiltreleriRow.insertPermission; };
            KullaniciRaporFiltreleriDialog.prototype.getUpdatePermission = function () { return Administration.KullaniciRaporFiltreleriRow.updatePermission; };
            KullaniciRaporFiltreleriDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KullaniciRaporFiltreleriDialog);
            return KullaniciRaporFiltreleriDialog;
        }(Serenity.EntityDialog));
        Administration.KullaniciRaporFiltreleriDialog = KullaniciRaporFiltreleriDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var KullaniciRaporFiltreleriGrid = /** @class */ (function (_super) {
            __extends(KullaniciRaporFiltreleriGrid, _super);
            function KullaniciRaporFiltreleriGrid(container) {
                return _super.call(this, container) || this;
            }
            KullaniciRaporFiltreleriGrid.prototype.getColumnsKey = function () { return 'Administration.KullaniciRaporFiltreleri'; };
            KullaniciRaporFiltreleriGrid.prototype.getDialogType = function () { return Administration.KullaniciRaporFiltreleriDialog; };
            KullaniciRaporFiltreleriGrid.prototype.getIdProperty = function () { return Administration.KullaniciRaporFiltreleriRow.idProperty; };
            KullaniciRaporFiltreleriGrid.prototype.getInsertPermission = function () { return Administration.KullaniciRaporFiltreleriRow.insertPermission; };
            KullaniciRaporFiltreleriGrid.prototype.getLocalTextPrefix = function () { return Administration.KullaniciRaporFiltreleriRow.localTextPrefix; };
            KullaniciRaporFiltreleriGrid.prototype.getService = function () { return Administration.KullaniciRaporFiltreleriService.baseUrl; };
            KullaniciRaporFiltreleriGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KullaniciRaporFiltreleriGrid);
            return KullaniciRaporFiltreleriGrid;
        }(Serenity.EntityGrid));
        Administration.KullaniciRaporFiltreleriGrid = KullaniciRaporFiltreleriGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RaporlarDialog = /** @class */ (function (_super) {
            __extends(RaporlarDialog, _super);
            function RaporlarDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RaporlarForm(_this.idPrefix);
                return _this;
            }
            RaporlarDialog.prototype.getFormKey = function () { return Administration.RaporlarForm.formKey; };
            RaporlarDialog.prototype.getIdProperty = function () { return Administration.RaporlarRow.idProperty; };
            RaporlarDialog.prototype.getLocalTextPrefix = function () { return Administration.RaporlarRow.localTextPrefix; };
            RaporlarDialog.prototype.getNameProperty = function () { return Administration.RaporlarRow.nameProperty; };
            RaporlarDialog.prototype.getService = function () { return Administration.RaporlarService.baseUrl; };
            RaporlarDialog.prototype.getDeletePermission = function () { return Administration.RaporlarRow.deletePermission; };
            RaporlarDialog.prototype.getInsertPermission = function () { return Administration.RaporlarRow.insertPermission; };
            RaporlarDialog.prototype.getUpdatePermission = function () { return Administration.RaporlarRow.updatePermission; };
            RaporlarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RaporlarDialog);
            return RaporlarDialog;
        }(Serenity.EntityDialog));
        Administration.RaporlarDialog = RaporlarDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RaporlarGrid = /** @class */ (function (_super) {
            __extends(RaporlarGrid, _super);
            function RaporlarGrid(container) {
                return _super.call(this, container) || this;
            }
            RaporlarGrid.prototype.getColumnsKey = function () { return 'Administration.Raporlar'; };
            RaporlarGrid.prototype.getDialogType = function () { return Administration.RaporlarDialog; };
            RaporlarGrid.prototype.getIdProperty = function () { return Administration.RaporlarRow.idProperty; };
            RaporlarGrid.prototype.getInsertPermission = function () { return Administration.RaporlarRow.insertPermission; };
            RaporlarGrid.prototype.getLocalTextPrefix = function () { return Administration.RaporlarRow.localTextPrefix; };
            RaporlarGrid.prototype.getService = function () { return Administration.RaporlarService.baseUrl; };
            RaporlarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RaporlarGrid);
            return RaporlarGrid;
        }(Serenity.EntityGrid));
        Administration.RaporlarGrid = RaporlarGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var impersonate = Q.tryFirst(columns, function (x) { return x.field == "ImpersonationToken"; });
                if (impersonate != null) {
                    impersonate.format = function (ctx) {
                        if (!ctx.value)
                            return "";
                        return "<a target=\"_blank\" href=\"" + Q.resolveUrl('~/Account/ImpersonateAs?token=') + ctx.value + "\">"
                            + "<i class=\"fa fa-user-secret text-blue\"></i></a>";
                    };
                }
                return columns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = E_Maliyet.Authorization || (E_Maliyet.Authorization = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                _this.dialogTitle = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), _this.options.username);
                return _this;
            }
            UserPermissionDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                _this.dialogTitle = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), _this.options.username);
                return _this;
            }
            UserRoleDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = E_Maliyet.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = E_Maliyet.LanguageList || (E_Maliyet.LanguageList = {}));
})(E_Maliyet || (E_Maliyet = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var E_Maliyet;
(function (E_Maliyet) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('E_Maliyet');
        Serenity.EntityDialog.defaultLanguageList = E_Maliyet.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
        Serenity.setupUIOverrides();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        $(function () {
            // let demo page use its own settings for idle timeout
            if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
                return;
            var meta = $('meta[name=username]');
            if ((meta.length && meta.attr('content')) ||
                (!meta.length && Q.Authorization.isLoggedIn)) {
                new Serenity.IdleTimeout({
                    activityTimeout: 15 * 60,
                    warningDuration: 2 * 60
                });
            }
        });
    })(ScriptInitialization = E_Maliyet.ScriptInitialization || (E_Maliyet.ScriptInitialization = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            _this.dialogTitle = Q.text('Site.BasicProgressDialog.PleaseWait');
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.dialogTitle;
            },
            set: function (value) {
                this.dialogTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogButtons = function () {
            var _this = this;
            return [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
        };
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.width = 600;
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    E_Maliyet.BasicProgressDialog = BasicProgressDialog;
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new E_Maliyet.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm(Q.text('Site.Dialogs.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = E_Maliyet.DialogUtils || (E_Maliyet.DialogUtils = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var PromptDialog = /** @class */ (function (_super) {
            __extends(PromptDialog, _super);
            function PromptDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (!Q.isEmptyOrNull(_this.options.cssClass))
                    _this.element.addClass(_this.options.cssClass);
                if (!Q.isEmptyOrNull(_this.options.message)) {
                    var msg = $("<div/>").addClass("message")
                        .insertBefore(_this.byId("PropertyGrid"));
                    _this.options.isHtml ? msg.html(_this.options.message) : msg.text(_this.options.message);
                }
                _this.dialogTitle = _this.options.title || "Prompt";
                return _this;
            }
            PromptDialog_1 = PromptDialog;
            PromptDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            if (_this.options.validateValue == null || _this.options.validateValue(_this.value))
                                _this.dialogClose();
                        },
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () { return _this.dialogClose; }
                    }
                ];
            };
            PromptDialog.prototype.loadInitialEntity = function () {
                this.value = this.options.value;
            };
            PromptDialog.prototype.getPropertyItems = function () {
                return [
                    {
                        name: "Value",
                        editorType: this.options.editorType || "String",
                        required: Q.coalesce(this.options.required, true),
                        editorParams: this.options.editorOptions
                    }
                ];
            };
            Object.defineProperty(PromptDialog.prototype, "value", {
                get: function () {
                    return this.getSaveEntity().Value;
                },
                set: function (v) {
                    this.propertyGrid.load({
                        Value: v
                    });
                },
                enumerable: true,
                configurable: true
            });
            PromptDialog.prompt = function (title, message, value, validateValue) {
                new PromptDialog_1({
                    title: title,
                    message: message,
                    value: value,
                    validateValue: function (v) { return validateValue(v); }
                }).dialogOpen();
            };
            var PromptDialog_1;
            PromptDialog = PromptDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], PromptDialog);
            return PromptDialog;
        }(Serenity.PropertyDialog));
        Membership.PromptDialog = PromptDialog;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var ServiceEditorBase = /** @class */ (function (_super) {
        __extends(ServiceEditorBase, _super);
        function ServiceEditorBase(hidden, options) {
            var _this = _super.call(this, hidden, options) || this;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            return _this;
        }
        ServiceEditorBase.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (Q.isEmptyOrNull(value)) {
                if (this.cascadeLink) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new Serenity.CascadedWidgetLink(Serenity.Widget, this, function (p) { return _this.cascadeValue = _this.getCascadeFromValue(p); });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeValue", {
            get: function () {
                return this.options.cascadeValue;
            },
            set: function (value) {
                if (value !== this.options.cascadeValue) {
                    this.options.cascadeValue = value;
                    this.value = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeField", {
            get: function () {
                return this.options.cascadeField || this.options.cascadeFrom;
            },
            set: function (value) {
                this.options.cascadeField = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeFrom", {
            get: function () {
                return this.options.cascadeFrom;
            },
            set: function (value) {
                if (value !== this.options.cascadeFrom) {
                    this.setCascadeFrom(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        ServiceEditorBase.prototype.getCascadeFromValue = function (parent) {
            return Serenity.EditorUtils.getValue(parent);
        };
        ServiceEditorBase.prototype.getIncludeColumns = function () {
            return [];
        };
        ServiceEditorBase.prototype.getSort = function () {
            return [];
        };
        ServiceEditorBase.prototype.getTypeDelay = function () {
            return 500;
        };
        ServiceEditorBase.prototype.executeQueryByKey = function (options) {
            var request = options.request;
            request.ColumnSelection = 1 /* keyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            _super.prototype.executeQueryByKey.call(this, options);
        };
        ServiceEditorBase.prototype.executeQuery = function (options) {
            var _this = this;
            var request = options.request;
            request.ColumnSelection = 1 /* KeyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            request.Sort = this.getSort();
            request.ExcludeTotalCount = true;
            if (this.cascadeField) {
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter[this.cascadeField] = this.cascadeValue;
            }
            options.blockUI = false;
            options.error = function () { };
            if (this.lastRequest != null && this.lastRequest.readyState != XMLHttpRequest.DONE)
                this.lastRequest.abort();
            this.lastRequest = Q.serviceCall(options);
            this.lastRequest.then(function () { return _this.lastRequest = null; }, function () { return _this.lastRequest = null; });
        };
        ServiceEditorBase = __decorate([
            Serenity.Decorators.registerClass()
        ], ServiceEditorBase);
        return ServiceEditorBase;
    }(Serenity.Select2AjaxEditor));
    E_Maliyet.ServiceEditorBase = ServiceEditorBase;
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    E_Maliyet.StaticTextBlock = StaticTextBlock;
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('E_MaliyetTheme', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'azure', Q.text('Site.Layout.ThemeAzure'));
                Q.addOption(select, 'azure-light', Q.text('Site.Layout.ThemeAzureLight'));
                Q.addOption(select, 'cosmos', Q.text('Site.Layout.ThemeCosmos'));
                Q.addOption(select, 'cosmos-light', Q.text('Site.Layout.ThemeCosmosLight'));
                Q.addOption(select, 'glassy', Q.text('Site.Layout.ThemeGlassy'));
                Q.addOption(select, 'glassy-light', Q.text('Site.Layout.ThemeGlassyLight'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        // @ts-ignore
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                // @ts-ignore
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                // @ts-ignore
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.dialogTitle = _this.report.Title;
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('run-button')
                    .toggle(this.report && this.report.IsExternalReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport && !this.report.IsExternalReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'Run',
                        cssClass: 'run-button',
                        icon: 'fa-print text-blue',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var UserLocalStorage = /** @class */ (function () {
            function UserLocalStorage() {
            }
            UserLocalStorage.prototype.getItem = function (key) {
                return window.localStorage.getItem(E_Maliyet.Authorization.userDefinition.Username + ":" + key);
            };
            UserLocalStorage.prototype.setItem = function (key, value) {
                window.localStorage.setItem(E_Maliyet.Authorization.userDefinition.Username + ":" + key, value);
            };
            return UserLocalStorage;
        }());
        Common.UserLocalStorage = UserLocalStorage;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = E_Maliyet.Common || (E_Maliyet.Common = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaBakiyeDialog = /** @class */ (function (_super) {
            __extends(BankaBakiyeDialog, _super);
            function BankaBakiyeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finans.BankaBakiyeForm(_this.idPrefix);
                return _this;
            }
            BankaBakiyeDialog.prototype.getFormKey = function () { return Finans.BankaBakiyeForm.formKey; };
            BankaBakiyeDialog.prototype.getIdProperty = function () { return Finans.BankaBakiyeRow.idProperty; };
            BankaBakiyeDialog.prototype.getLocalTextPrefix = function () { return Finans.BankaBakiyeRow.localTextPrefix; };
            BankaBakiyeDialog.prototype.getNameProperty = function () { return Finans.BankaBakiyeRow.nameProperty; };
            BankaBakiyeDialog.prototype.getService = function () { return Finans.BankaBakiyeService.baseUrl; };
            BankaBakiyeDialog.prototype.getDeletePermission = function () { return Finans.BankaBakiyeRow.deletePermission; };
            BankaBakiyeDialog.prototype.getInsertPermission = function () { return Finans.BankaBakiyeRow.insertPermission; };
            BankaBakiyeDialog.prototype.getUpdatePermission = function () { return Finans.BankaBakiyeRow.updatePermission; };
            BankaBakiyeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaBakiyeDialog);
            return BankaBakiyeDialog;
        }(Serenity.EntityDialog));
        Finans.BankaBakiyeDialog = BankaBakiyeDialog;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaBakiyeGrid = /** @class */ (function (_super) {
            __extends(BankaBakiyeGrid, _super);
            function BankaBakiyeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            BankaBakiyeGrid.prototype.getColumnsKey = function () { return 'Finans.BankaBakiye'; };
            BankaBakiyeGrid.prototype.getDialogType = function () { return Finans.BankaBakiyeDialog; };
            BankaBakiyeGrid.prototype.getIdProperty = function () { return Finans.BankaBakiyeRow.idProperty; };
            BankaBakiyeGrid.prototype.getInsertPermission = function () { return Finans.BankaBakiyeRow.insertPermission; };
            BankaBakiyeGrid.prototype.getLocalTextPrefix = function () { return Finans.BankaBakiyeRow.localTextPrefix; };
            BankaBakiyeGrid.prototype.getService = function () { return Finans.BankaBakiyeService.baseUrl; };
            // saving grid 
            BankaBakiyeGrid.prototype.getPersistanceStorage = function () {
                return new E_Maliyet.Common.UserPreferenceStorage();
            };
            BankaBakiyeGrid.prototype.getPersistanceFlags = function () {
                return {
                    columnWidths: true // dont persist column widths;
                };
            };
            /**
             * This method is called to preprocess data returned from the list service
             */
            BankaBakiyeGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            BankaBakiyeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                if (E_Maliyet.Authorization.userDefinition.IsAdmin) {
                    buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        service: 'B2B/EmyEnvanter/ListExcel',
                        separator: true
                    }));
                    buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); }
                    }));
                }
                return buttons;
            };
            BankaBakiyeGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('BakiyeTl'),
                        new Slick.Aggregators.Sum('BakiyeUsd'),
                        new Slick.Aggregators.Sum('BakiyeEuro')
                    ]
                });
                return grid;
            };
            BankaBakiyeGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            BankaBakiyeGrid.prototype.usePager = function () {
                return false;
            };
            BankaBakiyeGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('Tarih', 'Tarih');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    //(args.request as CariHesapEkstresiRequest).BaslangicTarihi = start;
                    //(args.request as CariHesapEkstresiRequest).BitisTarihi = end;
                    //(args.request as CariHesapEkstresiRequest).CariHesapKodu = "320.01.01.00002";
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            BankaBakiyeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaBakiyeGrid);
            return BankaBakiyeGrid;
        }(Serenity.EntityGrid));
        Finans.BankaBakiyeGrid = BankaBakiyeGrid;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaHareketleriDialog = /** @class */ (function (_super) {
            __extends(BankaHareketleriDialog, _super);
            function BankaHareketleriDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finans.BankaHareketleriForm(_this.idPrefix);
                return _this;
            }
            BankaHareketleriDialog.prototype.getFormKey = function () { return Finans.BankaHareketleriForm.formKey; };
            BankaHareketleriDialog.prototype.getIdProperty = function () { return Finans.BankaHareketleriRow.idProperty; };
            BankaHareketleriDialog.prototype.getLocalTextPrefix = function () { return Finans.BankaHareketleriRow.localTextPrefix; };
            BankaHareketleriDialog.prototype.getNameProperty = function () { return Finans.BankaHareketleriRow.nameProperty; };
            BankaHareketleriDialog.prototype.getService = function () { return Finans.BankaHareketleriService.baseUrl; };
            BankaHareketleriDialog.prototype.getDeletePermission = function () { return Finans.BankaHareketleriRow.deletePermission; };
            BankaHareketleriDialog.prototype.getInsertPermission = function () { return Finans.BankaHareketleriRow.insertPermission; };
            BankaHareketleriDialog.prototype.getUpdatePermission = function () { return Finans.BankaHareketleriRow.updatePermission; };
            BankaHareketleriDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaHareketleriDialog);
            return BankaHareketleriDialog;
        }(Serenity.EntityDialog));
        Finans.BankaHareketleriDialog = BankaHareketleriDialog;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var BankaHareketleriGrid = /** @class */ (function (_super) {
            __extends(BankaHareketleriGrid, _super);
            function BankaHareketleriGrid(container) {
                return _super.call(this, container) || this;
            }
            BankaHareketleriGrid.prototype.getColumnsKey = function () { return 'Finans.BankaHareketleri'; };
            BankaHareketleriGrid.prototype.getDialogType = function () { return Finans.BankaHareketleriDialog; };
            BankaHareketleriGrid.prototype.getIdProperty = function () { return Finans.BankaHareketleriRow.idProperty; };
            BankaHareketleriGrid.prototype.getInsertPermission = function () { return Finans.BankaHareketleriRow.insertPermission; };
            BankaHareketleriGrid.prototype.getLocalTextPrefix = function () { return Finans.BankaHareketleriRow.localTextPrefix; };
            BankaHareketleriGrid.prototype.getService = function () { return Finans.BankaHareketleriService.baseUrl; };
            BankaHareketleriGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaHareketleriGrid);
            return BankaHareketleriGrid;
        }(Serenity.EntityGrid));
        Finans.BankaHareketleriGrid = BankaHareketleriGrid;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcVadeAnaliziDialog = /** @class */ (function (_super) {
            __extends(BorcVadeAnaliziDialog, _super);
            function BorcVadeAnaliziDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.BorcVadeAnaliziForm(_this.idPrefix);
                return _this;
            }
            BorcVadeAnaliziDialog.prototype.getFormKey = function () { return Raporlar.BorcVadeAnaliziForm.formKey; };
            BorcVadeAnaliziDialog.prototype.getIdProperty = function () { return Raporlar.BorcVadeAnaliziRow.idProperty; };
            BorcVadeAnaliziDialog.prototype.getLocalTextPrefix = function () { return Raporlar.BorcVadeAnaliziRow.localTextPrefix; };
            BorcVadeAnaliziDialog.prototype.getNameProperty = function () { return Raporlar.BorcVadeAnaliziRow.nameProperty; };
            BorcVadeAnaliziDialog.prototype.getService = function () { return Raporlar.BorcVadeAnaliziService.baseUrl; };
            BorcVadeAnaliziDialog.prototype.getDeletePermission = function () { return Raporlar.BorcVadeAnaliziRow.deletePermission; };
            BorcVadeAnaliziDialog.prototype.getInsertPermission = function () { return Raporlar.BorcVadeAnaliziRow.insertPermission; };
            BorcVadeAnaliziDialog.prototype.getUpdatePermission = function () { return Raporlar.BorcVadeAnaliziRow.updatePermission; };
            BorcVadeAnaliziDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorcVadeAnaliziDialog);
            return BorcVadeAnaliziDialog;
        }(Serenity.EntityDialog));
        Raporlar.BorcVadeAnaliziDialog = BorcVadeAnaliziDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcVadeAnaliziGrid = /** @class */ (function (_super) {
            __extends(BorcVadeAnaliziGrid, _super);
            function BorcVadeAnaliziGrid(container) {
                return _super.call(this, container) || this;
            }
            BorcVadeAnaliziGrid.prototype.getColumnsKey = function () { return 'Raporlar.BorcVadeAnalizi'; };
            BorcVadeAnaliziGrid.prototype.getDialogType = function () { return Raporlar.BorcVadeAnaliziDialog; };
            BorcVadeAnaliziGrid.prototype.getIdProperty = function () { return Raporlar.BorcVadeAnaliziRow.idProperty; };
            BorcVadeAnaliziGrid.prototype.getInsertPermission = function () { return Raporlar.BorcVadeAnaliziRow.insertPermission; };
            BorcVadeAnaliziGrid.prototype.getLocalTextPrefix = function () { return Raporlar.BorcVadeAnaliziRow.localTextPrefix; };
            BorcVadeAnaliziGrid.prototype.getService = function () { return Raporlar.BorcVadeAnaliziService.baseUrl; };
            BorcVadeAnaliziGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["q1"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CariAdi"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["q1"];
                    };
                }
                return flt;
            };
            BorcVadeAnaliziGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BorcVadeAnaliziGrid);
            return BorcVadeAnaliziGrid;
        }(Serenity.EntityGrid));
        Raporlar.BorcVadeAnaliziGrid = BorcVadeAnaliziGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CariBakiyeRaporuDialog = /** @class */ (function (_super) {
            __extends(CariBakiyeRaporuDialog, _super);
            function CariBakiyeRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.CariBakiyeRaporuForm(_this.idPrefix);
                return _this;
            }
            CariBakiyeRaporuDialog.prototype.getFormKey = function () { return Raporlar.CariBakiyeRaporuForm.formKey; };
            CariBakiyeRaporuDialog.prototype.getIdProperty = function () { return Raporlar.CariBakiyeRaporuRow.idProperty; };
            CariBakiyeRaporuDialog.prototype.getLocalTextPrefix = function () { return Raporlar.CariBakiyeRaporuRow.localTextPrefix; };
            CariBakiyeRaporuDialog.prototype.getNameProperty = function () { return Raporlar.CariBakiyeRaporuRow.nameProperty; };
            CariBakiyeRaporuDialog.prototype.getService = function () { return Raporlar.CariBakiyeRaporuService.baseUrl; };
            CariBakiyeRaporuDialog.prototype.getDeletePermission = function () { return Raporlar.CariBakiyeRaporuRow.deletePermission; };
            CariBakiyeRaporuDialog.prototype.getInsertPermission = function () { return Raporlar.CariBakiyeRaporuRow.insertPermission; };
            CariBakiyeRaporuDialog.prototype.getUpdatePermission = function () { return Raporlar.CariBakiyeRaporuRow.updatePermission; };
            CariBakiyeRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CariBakiyeRaporuDialog);
            return CariBakiyeRaporuDialog;
        }(Serenity.EntityDialog));
        Raporlar.CariBakiyeRaporuDialog = CariBakiyeRaporuDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CariBakiyeRaporuGrid = /** @class */ (function (_super) {
            __extends(CariBakiyeRaporuGrid, _super);
            function CariBakiyeRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            CariBakiyeRaporuGrid.prototype.getColumnsKey = function () { return 'Raporlar.CariBakiyeRaporu'; };
            CariBakiyeRaporuGrid.prototype.getDialogType = function () { return Raporlar.CariBakiyeRaporuDialog; };
            CariBakiyeRaporuGrid.prototype.getIdProperty = function () { return Raporlar.CariBakiyeRaporuRow.idProperty; };
            CariBakiyeRaporuGrid.prototype.getInsertPermission = function () { return Raporlar.CariBakiyeRaporuRow.insertPermission; };
            CariBakiyeRaporuGrid.prototype.getLocalTextPrefix = function () { return Raporlar.CariBakiyeRaporuRow.localTextPrefix; };
            CariBakiyeRaporuGrid.prototype.getService = function () { return Raporlar.CariBakiyeRaporuService.baseUrl; };
            CariBakiyeRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CariBakiyeRaporuGrid);
            return CariBakiyeRaporuGrid;
        }(Serenity.EntityGrid));
        Raporlar.CariBakiyeRaporuGrid = CariBakiyeRaporuGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CekSenetRaporuDialog = /** @class */ (function (_super) {
            __extends(CekSenetRaporuDialog, _super);
            function CekSenetRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.CekSenetRaporuForm(_this.idPrefix);
                return _this;
            }
            CekSenetRaporuDialog.prototype.getFormKey = function () { return Raporlar.CekSenetRaporuForm.formKey; };
            CekSenetRaporuDialog.prototype.getIdProperty = function () { return Raporlar.CekSenetRaporuRow.idProperty; };
            CekSenetRaporuDialog.prototype.getLocalTextPrefix = function () { return Raporlar.CekSenetRaporuRow.localTextPrefix; };
            CekSenetRaporuDialog.prototype.getNameProperty = function () { return Raporlar.CekSenetRaporuRow.nameProperty; };
            CekSenetRaporuDialog.prototype.getService = function () { return Raporlar.CekSenetRaporuService.baseUrl; };
            CekSenetRaporuDialog.prototype.getDeletePermission = function () { return Raporlar.CekSenetRaporuRow.deletePermission; };
            CekSenetRaporuDialog.prototype.getInsertPermission = function () { return Raporlar.CekSenetRaporuRow.insertPermission; };
            CekSenetRaporuDialog.prototype.getUpdatePermission = function () { return Raporlar.CekSenetRaporuRow.updatePermission; };
            CekSenetRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CekSenetRaporuDialog);
            return CekSenetRaporuDialog;
        }(Serenity.EntityDialog));
        Raporlar.CekSenetRaporuDialog = CekSenetRaporuDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var CekSenetRaporuGrid = /** @class */ (function (_super) {
            __extends(CekSenetRaporuGrid, _super);
            function CekSenetRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            CekSenetRaporuGrid.prototype.getColumnsKey = function () { return 'Raporlar.CekSenetRaporu'; };
            CekSenetRaporuGrid.prototype.getDialogType = function () { return Raporlar.CekSenetRaporuDialog; };
            CekSenetRaporuGrid.prototype.getIdProperty = function () { return Raporlar.CekSenetRaporuRow.idProperty; };
            CekSenetRaporuGrid.prototype.getInsertPermission = function () { return Raporlar.CekSenetRaporuRow.insertPermission; };
            CekSenetRaporuGrid.prototype.getLocalTextPrefix = function () { return Raporlar.CekSenetRaporuRow.localTextPrefix; };
            CekSenetRaporuGrid.prototype.getService = function () { return Raporlar.CekSenetRaporuService.baseUrl; };
            CekSenetRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CekSenetRaporuGrid);
            return CekSenetRaporuGrid;
        }(Serenity.EntityGrid));
        Raporlar.CekSenetRaporuGrid = CekSenetRaporuGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var KasaHareketDialog = /** @class */ (function (_super) {
            __extends(KasaHareketDialog, _super);
            function KasaHareketDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finans.KasaHareketForm(_this.idPrefix);
                return _this;
            }
            KasaHareketDialog.prototype.getFormKey = function () { return Finans.KasaHareketForm.formKey; };
            KasaHareketDialog.prototype.getIdProperty = function () { return Finans.KasaHareketRow.idProperty; };
            KasaHareketDialog.prototype.getLocalTextPrefix = function () { return Finans.KasaHareketRow.localTextPrefix; };
            KasaHareketDialog.prototype.getNameProperty = function () { return Finans.KasaHareketRow.nameProperty; };
            KasaHareketDialog.prototype.getService = function () { return Finans.KasaHareketService.baseUrl; };
            KasaHareketDialog.prototype.getDeletePermission = function () { return Finans.KasaHareketRow.deletePermission; };
            KasaHareketDialog.prototype.getInsertPermission = function () { return Finans.KasaHareketRow.insertPermission; };
            KasaHareketDialog.prototype.getUpdatePermission = function () { return Finans.KasaHareketRow.updatePermission; };
            KasaHareketDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KasaHareketDialog);
            return KasaHareketDialog;
        }(Serenity.EntityDialog));
        Finans.KasaHareketDialog = KasaHareketDialog;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Finans;
    (function (Finans) {
        var KasaHareketGrid = /** @class */ (function (_super) {
            __extends(KasaHareketGrid, _super);
            function KasaHareketGrid(container) {
                return _super.call(this, container) || this;
            }
            KasaHareketGrid.prototype.getColumnsKey = function () { return 'Finans.KasaHareket'; };
            KasaHareketGrid.prototype.getDialogType = function () { return Finans.KasaHareketDialog; };
            KasaHareketGrid.prototype.getIdProperty = function () { return Finans.KasaHareketRow.idProperty; };
            KasaHareketGrid.prototype.getInsertPermission = function () { return Finans.KasaHareketRow.insertPermission; };
            KasaHareketGrid.prototype.getLocalTextPrefix = function () { return Finans.KasaHareketRow.localTextPrefix; };
            KasaHareketGrid.prototype.getService = function () { return Finans.KasaHareketService.baseUrl; };
            KasaHareketGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KasaHareketGrid);
            return KasaHareketGrid;
        }(Serenity.EntityGrid));
        Finans.KasaHareketGrid = KasaHareketGrid;
    })(Finans = E_Maliyet.Finans || (E_Maliyet.Finans = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TahsilatRaporuDialog = /** @class */ (function (_super) {
            __extends(TahsilatRaporuDialog, _super);
            function TahsilatRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.TahsilatRaporuForm(_this.idPrefix);
                return _this;
            }
            TahsilatRaporuDialog.prototype.getFormKey = function () { return Raporlar.TahsilatRaporuForm.formKey; };
            TahsilatRaporuDialog.prototype.getIdProperty = function () { return Raporlar.TahsilatRaporuRow.idProperty; };
            TahsilatRaporuDialog.prototype.getLocalTextPrefix = function () { return Raporlar.TahsilatRaporuRow.localTextPrefix; };
            TahsilatRaporuDialog.prototype.getNameProperty = function () { return Raporlar.TahsilatRaporuRow.nameProperty; };
            TahsilatRaporuDialog.prototype.getService = function () { return Raporlar.TahsilatRaporuService.baseUrl; };
            TahsilatRaporuDialog.prototype.getDeletePermission = function () { return Raporlar.TahsilatRaporuRow.deletePermission; };
            TahsilatRaporuDialog.prototype.getInsertPermission = function () { return Raporlar.TahsilatRaporuRow.insertPermission; };
            TahsilatRaporuDialog.prototype.getUpdatePermission = function () { return Raporlar.TahsilatRaporuRow.updatePermission; };
            TahsilatRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TahsilatRaporuDialog);
            return TahsilatRaporuDialog;
        }(Serenity.EntityDialog));
        Raporlar.TahsilatRaporuDialog = TahsilatRaporuDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TahsilatRaporuGrid = /** @class */ (function (_super) {
            __extends(TahsilatRaporuGrid, _super);
            function TahsilatRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            TahsilatRaporuGrid.prototype.getColumnsKey = function () { return 'Raporlar.TahsilatRaporu'; };
            TahsilatRaporuGrid.prototype.getDialogType = function () { return Raporlar.TahsilatRaporuDialog; };
            TahsilatRaporuGrid.prototype.getIdProperty = function () { return Raporlar.TahsilatRaporuRow.idProperty; };
            TahsilatRaporuGrid.prototype.getInsertPermission = function () { return Raporlar.TahsilatRaporuRow.insertPermission; };
            TahsilatRaporuGrid.prototype.getLocalTextPrefix = function () { return Raporlar.TahsilatRaporuRow.localTextPrefix; };
            TahsilatRaporuGrid.prototype.getService = function () { return Raporlar.TahsilatRaporuService.baseUrl; };
            TahsilatRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TahsilatRaporuGrid);
            return TahsilatRaporuGrid;
        }(Serenity.EntityGrid));
        Raporlar.TahsilatRaporuGrid = TahsilatRaporuGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            //// user tablosundaki TigerFirma ve Donem update edilecek
                            //Q.serviceCall({
                            //    url: Q.resolveUrl('~/Account/Login'),
                            //    request: request,
                            //    onSuccess: response => {
                            //        // user tablosundaki TigerFirma ve Donem update edilecek
                            //        Q.alert("başarılı")
                            //    },
                            //    onError: (response: Serenity.ServiceResponse) => { });
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                                var args = response.Error.Arguments.split('|');
                                _this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
                                return;
                            }
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var request = this.getSaveEntity();
                //E_Maliyet.Authorization.userDefinition.TigerDonem = request.TigerDonem;
                //E_Maliyet.Authorization.userDefinition.TigerFirma= request.TigerFirma;
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.handleTwoFactorAuthentication = function (user, pass, twoFactorGuid, info) {
                var _this = this;
                var tries = 0;
                var remaining = 120;
                var dialog = null;
                var showDialog = function () {
                    dialog = new Membership.PromptDialog({
                        title: "Two Factor Authentication",
                        editorOptions: {
                            maxLength: 4,
                        },
                        editorType: "Integer",
                        message: info,
                        isHtml: true,
                        required: true,
                        validateValue: function (x) {
                            if (x >= 1000 && x <= 9999) {
                                tries++;
                                Q.serviceCall({
                                    url: Q.resolveUrl('~/Account/Login'),
                                    request: {
                                        Username: user,
                                        Password: pass,
                                        TwoFactorGuid: twoFactorGuid,
                                        TwoFactorCode: x
                                    },
                                    onSuccess: function (r) {
                                        _this.redirectToReturnUrl();
                                        return;
                                    },
                                    onError: function (z) {
                                        Q.notifyError(z.Error.Message);
                                        if (tries > 2) {
                                            Q.notifyError("Code entered is invalid! You can't try more than 3 times!");
                                            dialog = null;
                                            return;
                                        }
                                        showDialog();
                                    }
                                });
                                return true;
                            }
                            Q.notifyError("Please enter a valid code!");
                            return false;
                        }
                    });
                    dialog.dialogOpen();
                    dialog.element.on("dialogclose.me", function (x) {
                        if (dialog != null) {
                            dialog.element.off("dialogclose.me");
                            dialog = null;
                        }
                    });
                };
                function updateCounter() {
                    remaining -= 1;
                    if (dialog != null) {
                        dialog.element.find("span.counter").text(remaining.toString());
                    }
                    if (remaining >= 0)
                        setTimeout(updateCounter, 1000);
                    else if (dialog != null)
                        dialog.dialogClose();
                }
                ;
                showDialog();
                window.setTimeout(updateCounter, 1000);
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var TigerDonemlerEditor = /** @class */ (function (_super) {
            __extends(TigerDonemlerEditor, _super);
            function TigerDonemlerEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            TigerDonemlerEditor.prototype.getLookupKey = function () {
                return E_Maliyet.Tiger.TigerDonemlerRow.lookupKey;
            };
            TigerDonemlerEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.Firmnr != 0;
                });
            };
            TigerDonemlerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], TigerDonemlerEditor);
            return TigerDonemlerEditor;
        }(Serenity.LookupEditorBase));
        Administration.TigerDonemlerEditor = TigerDonemlerEditor;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Administration;
    (function (Administration) {
        var TigerFirmalarEditor = /** @class */ (function (_super) {
            __extends(TigerFirmalarEditor, _super);
            function TigerFirmalarEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            TigerFirmalarEditor.prototype.getLookupKey = function () {
                return E_Maliyet.Tiger.TigerFirmalarRow.lookupKey;
            };
            TigerFirmalarEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.Name != '' && x.Name != null;
                });
            };
            TigerFirmalarEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], TigerFirmalarEditor);
            return TigerFirmalarEditor;
        }(Serenity.LookupEditorBase));
        Administration.TigerFirmalarEditor = TigerFirmalarEditor;
    })(Administration = E_Maliyet.Administration || (E_Maliyet.Administration = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = E_Maliyet.Membership || (E_Maliyet.Membership = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var BilancoDialog = /** @class */ (function (_super) {
            __extends(BilancoDialog, _super);
            function BilancoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Muhasebe.BilancoForm(_this.idPrefix);
                return _this;
            }
            BilancoDialog.prototype.getFormKey = function () { return Muhasebe.BilancoForm.formKey; };
            BilancoDialog.prototype.getIdProperty = function () { return Muhasebe.BilancoRow.idProperty; };
            BilancoDialog.prototype.getLocalTextPrefix = function () { return Muhasebe.BilancoRow.localTextPrefix; };
            BilancoDialog.prototype.getNameProperty = function () { return Muhasebe.BilancoRow.nameProperty; };
            BilancoDialog.prototype.getService = function () { return Muhasebe.BilancoService.baseUrl; };
            BilancoDialog.prototype.getDeletePermission = function () { return Muhasebe.BilancoRow.deletePermission; };
            BilancoDialog.prototype.getInsertPermission = function () { return Muhasebe.BilancoRow.insertPermission; };
            BilancoDialog.prototype.getUpdatePermission = function () { return Muhasebe.BilancoRow.updatePermission; };
            BilancoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BilancoDialog);
            return BilancoDialog;
        }(Serenity.EntityDialog));
        Muhasebe.BilancoDialog = BilancoDialog;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var BilancoGrid = /** @class */ (function (_super) {
            __extends(BilancoGrid, _super);
            function BilancoGrid(container) {
                return _super.call(this, container) || this;
            }
            BilancoGrid.prototype.getColumnsKey = function () { return 'Muhasebe.Bilanco'; };
            BilancoGrid.prototype.getDialogType = function () { return Muhasebe.BilancoDialog; };
            BilancoGrid.prototype.getIdProperty = function () { return Muhasebe.BilancoRow.idProperty; };
            BilancoGrid.prototype.getInsertPermission = function () { return Muhasebe.BilancoRow.insertPermission; };
            BilancoGrid.prototype.getLocalTextPrefix = function () { return Muhasebe.BilancoRow.localTextPrefix; };
            BilancoGrid.prototype.getService = function () { return Muhasebe.BilancoService.baseUrl; };
            BilancoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BilancoGrid);
            return BilancoGrid;
        }(Serenity.EntityGrid));
        Muhasebe.BilancoGrid = BilancoGrid;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var GelirTablosuDialog = /** @class */ (function (_super) {
            __extends(GelirTablosuDialog, _super);
            function GelirTablosuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Muhasebe.GelirTablosuForm(_this.idPrefix);
                return _this;
            }
            GelirTablosuDialog.prototype.getFormKey = function () { return Muhasebe.GelirTablosuForm.formKey; };
            GelirTablosuDialog.prototype.getIdProperty = function () { return Muhasebe.GelirTablosuRow.idProperty; };
            GelirTablosuDialog.prototype.getLocalTextPrefix = function () { return Muhasebe.GelirTablosuRow.localTextPrefix; };
            GelirTablosuDialog.prototype.getNameProperty = function () { return Muhasebe.GelirTablosuRow.nameProperty; };
            GelirTablosuDialog.prototype.getService = function () { return Muhasebe.GelirTablosuService.baseUrl; };
            GelirTablosuDialog.prototype.getDeletePermission = function () { return Muhasebe.GelirTablosuRow.deletePermission; };
            GelirTablosuDialog.prototype.getInsertPermission = function () { return Muhasebe.GelirTablosuRow.insertPermission; };
            GelirTablosuDialog.prototype.getUpdatePermission = function () { return Muhasebe.GelirTablosuRow.updatePermission; };
            GelirTablosuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GelirTablosuDialog);
            return GelirTablosuDialog;
        }(Serenity.EntityDialog));
        Muhasebe.GelirTablosuDialog = GelirTablosuDialog;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Muhasebe;
    (function (Muhasebe) {
        var GelirTablosuGrid = /** @class */ (function (_super) {
            __extends(GelirTablosuGrid, _super);
            function GelirTablosuGrid(container) {
                return _super.call(this, container) || this;
            }
            GelirTablosuGrid.prototype.getColumnsKey = function () { return 'Muhasebe.GelirTablosu'; };
            GelirTablosuGrid.prototype.getDialogType = function () { return Muhasebe.GelirTablosuDialog; };
            GelirTablosuGrid.prototype.getIdProperty = function () { return Muhasebe.GelirTablosuRow.idProperty; };
            GelirTablosuGrid.prototype.getInsertPermission = function () { return Muhasebe.GelirTablosuRow.insertPermission; };
            GelirTablosuGrid.prototype.getLocalTextPrefix = function () { return Muhasebe.GelirTablosuRow.localTextPrefix; };
            GelirTablosuGrid.prototype.getService = function () { return Muhasebe.GelirTablosuService.baseUrl; };
            GelirTablosuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GelirTablosuGrid);
            return GelirTablosuGrid;
        }(Serenity.EntityGrid));
        Muhasebe.GelirTablosuGrid = GelirTablosuGrid;
    })(Muhasebe = E_Maliyet.Muhasebe || (E_Maliyet.Muhasebe = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var MizanRaporuDialog = /** @class */ (function (_super) {
            __extends(MizanRaporuDialog, _super);
            function MizanRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.MizanRaporuForm(_this.idPrefix);
                return _this;
            }
            MizanRaporuDialog.prototype.getFormKey = function () { return Raporlar.MizanRaporuForm.formKey; };
            MizanRaporuDialog.prototype.getIdProperty = function () { return Raporlar.MizanRaporuRow.idProperty; };
            MizanRaporuDialog.prototype.getLocalTextPrefix = function () { return Raporlar.MizanRaporuRow.localTextPrefix; };
            MizanRaporuDialog.prototype.getNameProperty = function () { return Raporlar.MizanRaporuRow.nameProperty; };
            MizanRaporuDialog.prototype.getService = function () { return Raporlar.MizanRaporuService.baseUrl; };
            MizanRaporuDialog.prototype.getDeletePermission = function () { return Raporlar.MizanRaporuRow.deletePermission; };
            MizanRaporuDialog.prototype.getInsertPermission = function () { return Raporlar.MizanRaporuRow.insertPermission; };
            MizanRaporuDialog.prototype.getUpdatePermission = function () { return Raporlar.MizanRaporuRow.updatePermission; };
            MizanRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MizanRaporuDialog);
            return MizanRaporuDialog;
        }(Serenity.EntityDialog));
        Raporlar.MizanRaporuDialog = MizanRaporuDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var MizanRaporuGrid = /** @class */ (function (_super) {
            __extends(MizanRaporuGrid, _super);
            function MizanRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            MizanRaporuGrid.prototype.getColumnsKey = function () { return 'Raporlar.MizanRaporu'; };
            MizanRaporuGrid.prototype.getDialogType = function () { return Raporlar.MizanRaporuDialog; };
            MizanRaporuGrid.prototype.getIdProperty = function () { return Raporlar.MizanRaporuRow.idProperty; };
            MizanRaporuGrid.prototype.getInsertPermission = function () { return Raporlar.MizanRaporuRow.insertPermission; };
            MizanRaporuGrid.prototype.getLocalTextPrefix = function () { return Raporlar.MizanRaporuRow.localTextPrefix; };
            MizanRaporuGrid.prototype.getService = function () { return Raporlar.MizanRaporuService.baseUrl; };
            MizanRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MizanRaporuGrid);
            return MizanRaporuGrid;
        }(Serenity.EntityGrid));
        Raporlar.MizanRaporuGrid = MizanRaporuGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
        var SatinalmaAnalizRaporuDialog = /** @class */ (function (_super) {
            __extends(SatinalmaAnalizRaporuDialog, _super);
            function SatinalmaAnalizRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Satinalma.SatinalmaAnalizRaporuForm(_this.idPrefix);
                return _this;
            }
            SatinalmaAnalizRaporuDialog.prototype.getFormKey = function () { return Satinalma.SatinalmaAnalizRaporuForm.formKey; };
            SatinalmaAnalizRaporuDialog.prototype.getIdProperty = function () { return Satinalma.SatinalmaAnalizRaporuRow.idProperty; };
            SatinalmaAnalizRaporuDialog.prototype.getLocalTextPrefix = function () { return Satinalma.SatinalmaAnalizRaporuRow.localTextPrefix; };
            SatinalmaAnalizRaporuDialog.prototype.getNameProperty = function () { return Satinalma.SatinalmaAnalizRaporuRow.nameProperty; };
            SatinalmaAnalizRaporuDialog.prototype.getService = function () { return Satinalma.SatinalmaAnalizRaporuService.baseUrl; };
            SatinalmaAnalizRaporuDialog.prototype.getDeletePermission = function () { return Satinalma.SatinalmaAnalizRaporuRow.deletePermission; };
            SatinalmaAnalizRaporuDialog.prototype.getInsertPermission = function () { return Satinalma.SatinalmaAnalizRaporuRow.insertPermission; };
            SatinalmaAnalizRaporuDialog.prototype.getUpdatePermission = function () { return Satinalma.SatinalmaAnalizRaporuRow.updatePermission; };
            SatinalmaAnalizRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SatinalmaAnalizRaporuDialog);
            return SatinalmaAnalizRaporuDialog;
        }(Serenity.EntityDialog));
        Satinalma.SatinalmaAnalizRaporuDialog = SatinalmaAnalizRaporuDialog;
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Satinalma;
    (function (Satinalma) {
        var SatinalmaAnalizRaporuGrid = /** @class */ (function (_super) {
            __extends(SatinalmaAnalizRaporuGrid, _super);
            function SatinalmaAnalizRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            SatinalmaAnalizRaporuGrid.prototype.getColumnsKey = function () { return 'Satinalma.SatinalmaAnalizRaporu'; };
            SatinalmaAnalizRaporuGrid.prototype.getDialogType = function () { return Satinalma.SatinalmaAnalizRaporuDialog; };
            SatinalmaAnalizRaporuGrid.prototype.getIdProperty = function () { return Satinalma.SatinalmaAnalizRaporuRow.idProperty; };
            SatinalmaAnalizRaporuGrid.prototype.getInsertPermission = function () { return Satinalma.SatinalmaAnalizRaporuRow.insertPermission; };
            SatinalmaAnalizRaporuGrid.prototype.getLocalTextPrefix = function () { return Satinalma.SatinalmaAnalizRaporuRow.localTextPrefix; };
            SatinalmaAnalizRaporuGrid.prototype.getService = function () { return Satinalma.SatinalmaAnalizRaporuService.baseUrl; };
            SatinalmaAnalizRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SatinalmaAnalizRaporuGrid);
            return SatinalmaAnalizRaporuGrid;
        }(Serenity.EntityGrid));
        Satinalma.SatinalmaAnalizRaporuGrid = SatinalmaAnalizRaporuGrid;
    })(Satinalma = E_Maliyet.Satinalma || (E_Maliyet.Satinalma = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziDialog = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziDialog, _super);
            function BorcluVadeAnaliziDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.BorcluVadeAnaliziForm(_this.idPrefix);
                return _this;
            }
            BorcluVadeAnaliziDialog.prototype.getFormKey = function () { return Raporlar.BorcluVadeAnaliziForm.formKey; };
            BorcluVadeAnaliziDialog.prototype.getIdProperty = function () { return Raporlar.BorcluVadeAnaliziRow.idProperty; };
            BorcluVadeAnaliziDialog.prototype.getLocalTextPrefix = function () { return Raporlar.BorcluVadeAnaliziRow.localTextPrefix; };
            BorcluVadeAnaliziDialog.prototype.getNameProperty = function () { return Raporlar.BorcluVadeAnaliziRow.nameProperty; };
            BorcluVadeAnaliziDialog.prototype.getService = function () { return Raporlar.BorcluVadeAnaliziService.baseUrl; };
            BorcluVadeAnaliziDialog.prototype.getDeletePermission = function () { return Raporlar.BorcluVadeAnaliziRow.deletePermission; };
            BorcluVadeAnaliziDialog.prototype.getInsertPermission = function () { return Raporlar.BorcluVadeAnaliziRow.insertPermission; };
            BorcluVadeAnaliziDialog.prototype.getUpdatePermission = function () { return Raporlar.BorcluVadeAnaliziRow.updatePermission; };
            BorcluVadeAnaliziDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorcluVadeAnaliziDialog);
            return BorcluVadeAnaliziDialog;
        }(Serenity.EntityDialog));
        Raporlar.BorcluVadeAnaliziDialog = BorcluVadeAnaliziDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziGrid = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziGrid, _super);
            function BorcluVadeAnaliziGrid(container) {
                return _super.call(this, container) || this;
            }
            BorcluVadeAnaliziGrid.prototype.getColumnsKey = function () { return 'Raporlar.BorcluVadeAnalizi'; };
            BorcluVadeAnaliziGrid.prototype.getDialogType = function () { return Raporlar.BorcluVadeAnaliziDialog; };
            BorcluVadeAnaliziGrid.prototype.getIdProperty = function () { return Raporlar.BorcluVadeAnaliziRow.idProperty; };
            BorcluVadeAnaliziGrid.prototype.getInsertPermission = function () { return Raporlar.BorcluVadeAnaliziRow.insertPermission; };
            BorcluVadeAnaliziGrid.prototype.getLocalTextPrefix = function () { return Raporlar.BorcluVadeAnaliziRow.localTextPrefix; };
            BorcluVadeAnaliziGrid.prototype.getService = function () { return Raporlar.BorcluVadeAnaliziService.baseUrl; };
            BorcluVadeAnaliziGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BorcluVadeAnaliziGrid);
            return BorcluVadeAnaliziGrid;
        }(Serenity.EntityGrid));
        Raporlar.BorcluVadeAnaliziGrid = BorcluVadeAnaliziGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziYeniDialog = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziYeniDialog, _super);
            function BorcluVadeAnaliziYeniDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.BorcluVadeAnaliziYeniForm(_this.idPrefix);
                return _this;
            }
            BorcluVadeAnaliziYeniDialog.prototype.getFormKey = function () { return Raporlar.BorcluVadeAnaliziYeniForm.formKey; };
            BorcluVadeAnaliziYeniDialog.prototype.getIdProperty = function () { return Raporlar.BorcluVadeAnaliziYeniRow.idProperty; };
            BorcluVadeAnaliziYeniDialog.prototype.getLocalTextPrefix = function () { return Raporlar.BorcluVadeAnaliziYeniRow.localTextPrefix; };
            BorcluVadeAnaliziYeniDialog.prototype.getNameProperty = function () { return Raporlar.BorcluVadeAnaliziYeniRow.nameProperty; };
            BorcluVadeAnaliziYeniDialog.prototype.getService = function () { return Raporlar.BorcluVadeAnaliziYeniService.baseUrl; };
            BorcluVadeAnaliziYeniDialog.prototype.getDeletePermission = function () { return Raporlar.BorcluVadeAnaliziYeniRow.deletePermission; };
            BorcluVadeAnaliziYeniDialog.prototype.getInsertPermission = function () { return Raporlar.BorcluVadeAnaliziYeniRow.insertPermission; };
            BorcluVadeAnaliziYeniDialog.prototype.getUpdatePermission = function () { return Raporlar.BorcluVadeAnaliziYeniRow.updatePermission; };
            BorcluVadeAnaliziYeniDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BorcluVadeAnaliziYeniDialog);
            return BorcluVadeAnaliziYeniDialog;
        }(Serenity.EntityDialog));
        Raporlar.BorcluVadeAnaliziYeniDialog = BorcluVadeAnaliziYeniDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var BorcluVadeAnaliziYeniGrid = /** @class */ (function (_super) {
            __extends(BorcluVadeAnaliziYeniGrid, _super);
            function BorcluVadeAnaliziYeniGrid(container) {
                return _super.call(this, container) || this;
            }
            BorcluVadeAnaliziYeniGrid.prototype.getColumnsKey = function () { return 'Raporlar.BorcluVadeAnaliziYeni'; };
            BorcluVadeAnaliziYeniGrid.prototype.getDialogType = function () { return Raporlar.BorcluVadeAnaliziYeniDialog; };
            BorcluVadeAnaliziYeniGrid.prototype.getIdProperty = function () { return Raporlar.BorcluVadeAnaliziYeniRow.idProperty; };
            BorcluVadeAnaliziYeniGrid.prototype.getInsertPermission = function () { return Raporlar.BorcluVadeAnaliziYeniRow.insertPermission; };
            BorcluVadeAnaliziYeniGrid.prototype.getLocalTextPrefix = function () { return Raporlar.BorcluVadeAnaliziYeniRow.localTextPrefix; };
            BorcluVadeAnaliziYeniGrid.prototype.getService = function () { return Raporlar.BorcluVadeAnaliziYeniService.baseUrl; };
            BorcluVadeAnaliziYeniGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BorcluVadeAnaliziYeniGrid);
            return BorcluVadeAnaliziYeniGrid;
        }(Serenity.EntityGrid));
        Raporlar.BorcluVadeAnaliziYeniGrid = BorcluVadeAnaliziYeniGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var HareketsizCariListesiDialog = /** @class */ (function (_super) {
            __extends(HareketsizCariListesiDialog, _super);
            function HareketsizCariListesiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.HareketsizCariListesiForm(_this.idPrefix);
                return _this;
            }
            HareketsizCariListesiDialog.prototype.getFormKey = function () { return Raporlar.HareketsizCariListesiForm.formKey; };
            HareketsizCariListesiDialog.prototype.getIdProperty = function () { return Raporlar.HareketsizCariListesiRow.idProperty; };
            HareketsizCariListesiDialog.prototype.getLocalTextPrefix = function () { return Raporlar.HareketsizCariListesiRow.localTextPrefix; };
            HareketsizCariListesiDialog.prototype.getNameProperty = function () { return Raporlar.HareketsizCariListesiRow.nameProperty; };
            HareketsizCariListesiDialog.prototype.getService = function () { return Raporlar.HareketsizCariListesiService.baseUrl; };
            HareketsizCariListesiDialog.prototype.getDeletePermission = function () { return Raporlar.HareketsizCariListesiRow.deletePermission; };
            HareketsizCariListesiDialog.prototype.getInsertPermission = function () { return Raporlar.HareketsizCariListesiRow.insertPermission; };
            HareketsizCariListesiDialog.prototype.getUpdatePermission = function () { return Raporlar.HareketsizCariListesiRow.updatePermission; };
            HareketsizCariListesiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HareketsizCariListesiDialog);
            return HareketsizCariListesiDialog;
        }(Serenity.EntityDialog));
        Raporlar.HareketsizCariListesiDialog = HareketsizCariListesiDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var HareketsizCariListesiGrid = /** @class */ (function (_super) {
            __extends(HareketsizCariListesiGrid, _super);
            function HareketsizCariListesiGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            HareketsizCariListesiGrid.prototype.getColumnsKey = function () { return 'Raporlar.HareketsizCariListesi'; };
            HareketsizCariListesiGrid.prototype.getDialogType = function () { return Raporlar.HareketsizCariListesiDialog; };
            HareketsizCariListesiGrid.prototype.getIdProperty = function () { return Raporlar.HareketsizCariListesiRow.idProperty; };
            HareketsizCariListesiGrid.prototype.getInsertPermission = function () { return Raporlar.HareketsizCariListesiRow.insertPermission; };
            HareketsizCariListesiGrid.prototype.getLocalTextPrefix = function () { return Raporlar.HareketsizCariListesiRow.localTextPrefix; };
            HareketsizCariListesiGrid.prototype.getService = function () { return Raporlar.HareketsizCariListesiService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            HareketsizCariListesiGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            HareketsizCariListesiGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Raporlar.HareketsizCariListesiService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            /*
            protected createSlickGrid() {
                var grid = super.createSlickGrid();
    
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
    
                this.view.setSummaryOptions({
                    aggregators: [
    
                        new Slick.Aggregators.Sum('Borc'),
                        new Slick.Aggregators.Sum('Alacak')
                    ]
                });
    
    
    
                return grid;
            }
    
            protected getSlickOptions() {
                var opt = super.getSlickOptions();
                opt.showFooterRow = true;
                return opt;
            }
    
            protected usePager() {
                return false;
            }
            */
            HareketsizCariListesiGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('Tarih', 'Tarih');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.BaslangicTarihi = start;
                    args.request.BitisTarihi = end;
                    //(args.request as CariHesapEkstresiRequest).CariHesapKodu = "320.01.01.00002";
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            HareketsizCariListesiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], HareketsizCariListesiGrid);
            return HareketsizCariListesiGrid;
        }(Serenity.EntityGrid));
        Raporlar.HareketsizCariListesiGrid = HareketsizCariListesiGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var SatisAnalizRaporuDialog = /** @class */ (function (_super) {
            __extends(SatisAnalizRaporuDialog, _super);
            function SatisAnalizRaporuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.SatisAnalizRaporuForm(_this.idPrefix);
                return _this;
            }
            SatisAnalizRaporuDialog.prototype.getFormKey = function () { return Raporlar.SatisAnalizRaporuForm.formKey; };
            SatisAnalizRaporuDialog.prototype.getIdProperty = function () { return Raporlar.SatisAnalizRaporuRow.idProperty; };
            SatisAnalizRaporuDialog.prototype.getLocalTextPrefix = function () { return Raporlar.SatisAnalizRaporuRow.localTextPrefix; };
            SatisAnalizRaporuDialog.prototype.getNameProperty = function () { return Raporlar.SatisAnalizRaporuRow.nameProperty; };
            SatisAnalizRaporuDialog.prototype.getService = function () { return Raporlar.SatisAnalizRaporuService.baseUrl; };
            SatisAnalizRaporuDialog.prototype.getDeletePermission = function () { return Raporlar.SatisAnalizRaporuRow.deletePermission; };
            SatisAnalizRaporuDialog.prototype.getInsertPermission = function () { return Raporlar.SatisAnalizRaporuRow.insertPermission; };
            SatisAnalizRaporuDialog.prototype.getUpdatePermission = function () { return Raporlar.SatisAnalizRaporuRow.updatePermission; };
            SatisAnalizRaporuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SatisAnalizRaporuDialog);
            return SatisAnalizRaporuDialog;
        }(Serenity.EntityDialog));
        Raporlar.SatisAnalizRaporuDialog = SatisAnalizRaporuDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var SatisAnalizRaporuGrid = /** @class */ (function (_super) {
            __extends(SatisAnalizRaporuGrid, _super);
            function SatisAnalizRaporuGrid(container) {
                return _super.call(this, container) || this;
            }
            SatisAnalizRaporuGrid.prototype.getColumnsKey = function () { return 'Raporlar.SatisAnalizRaporu'; };
            SatisAnalizRaporuGrid.prototype.getDialogType = function () { return Raporlar.SatisAnalizRaporuDialog; };
            SatisAnalizRaporuGrid.prototype.getIdProperty = function () { return Raporlar.SatisAnalizRaporuRow.idProperty; };
            SatisAnalizRaporuGrid.prototype.getInsertPermission = function () { return Raporlar.SatisAnalizRaporuRow.insertPermission; };
            SatisAnalizRaporuGrid.prototype.getLocalTextPrefix = function () { return Raporlar.SatisAnalizRaporuRow.localTextPrefix; };
            SatisAnalizRaporuGrid.prototype.getService = function () { return Raporlar.SatisAnalizRaporuService.baseUrl; };
            SatisAnalizRaporuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SatisAnalizRaporuGrid);
            return SatisAnalizRaporuGrid;
        }(Serenity.EntityGrid));
        Raporlar.SatisAnalizRaporuGrid = SatisAnalizRaporuGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TigerBorcluVadeAnaliziDialog = /** @class */ (function (_super) {
            __extends(TigerBorcluVadeAnaliziDialog, _super);
            function TigerBorcluVadeAnaliziDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Raporlar.TigerBorcluVadeAnaliziForm(_this.idPrefix);
                return _this;
            }
            TigerBorcluVadeAnaliziDialog.prototype.getFormKey = function () { return Raporlar.TigerBorcluVadeAnaliziForm.formKey; };
            TigerBorcluVadeAnaliziDialog.prototype.getIdProperty = function () { return Raporlar.TigerBorcluVadeAnaliziRow.idProperty; };
            TigerBorcluVadeAnaliziDialog.prototype.getLocalTextPrefix = function () { return Raporlar.TigerBorcluVadeAnaliziRow.localTextPrefix; };
            TigerBorcluVadeAnaliziDialog.prototype.getNameProperty = function () { return Raporlar.TigerBorcluVadeAnaliziRow.nameProperty; };
            TigerBorcluVadeAnaliziDialog.prototype.getService = function () { return Raporlar.TigerBorcluVadeAnaliziService.baseUrl; };
            TigerBorcluVadeAnaliziDialog.prototype.getDeletePermission = function () { return Raporlar.TigerBorcluVadeAnaliziRow.deletePermission; };
            TigerBorcluVadeAnaliziDialog.prototype.getInsertPermission = function () { return Raporlar.TigerBorcluVadeAnaliziRow.insertPermission; };
            TigerBorcluVadeAnaliziDialog.prototype.getUpdatePermission = function () { return Raporlar.TigerBorcluVadeAnaliziRow.updatePermission; };
            TigerBorcluVadeAnaliziDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerBorcluVadeAnaliziDialog);
            return TigerBorcluVadeAnaliziDialog;
        }(Serenity.EntityDialog));
        Raporlar.TigerBorcluVadeAnaliziDialog = TigerBorcluVadeAnaliziDialog;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Raporlar;
    (function (Raporlar) {
        var TigerBorcluVadeAnaliziGrid = /** @class */ (function (_super) {
            __extends(TigerBorcluVadeAnaliziGrid, _super);
            function TigerBorcluVadeAnaliziGrid(container) {
                return _super.call(this, container) || this;
            }
            TigerBorcluVadeAnaliziGrid.prototype.getColumnsKey = function () { return 'Raporlar.TigerBorcluVadeAnalizi'; };
            TigerBorcluVadeAnaliziGrid.prototype.getDialogType = function () { return Raporlar.TigerBorcluVadeAnaliziDialog; };
            TigerBorcluVadeAnaliziGrid.prototype.getIdProperty = function () { return Raporlar.TigerBorcluVadeAnaliziRow.idProperty; };
            TigerBorcluVadeAnaliziGrid.prototype.getInsertPermission = function () { return Raporlar.TigerBorcluVadeAnaliziRow.insertPermission; };
            TigerBorcluVadeAnaliziGrid.prototype.getLocalTextPrefix = function () { return Raporlar.TigerBorcluVadeAnaliziRow.localTextPrefix; };
            TigerBorcluVadeAnaliziGrid.prototype.getService = function () { return Raporlar.TigerBorcluVadeAnaliziService.baseUrl; };
            TigerBorcluVadeAnaliziGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerBorcluVadeAnaliziGrid);
            return TigerBorcluVadeAnaliziGrid;
        }(Serenity.EntityGrid));
        Raporlar.TigerBorcluVadeAnaliziGrid = TigerBorcluVadeAnaliziGrid;
    })(Raporlar = E_Maliyet.Raporlar || (E_Maliyet.Raporlar = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var BankaHareketleriDialog = /** @class */ (function (_super) {
            __extends(BankaHareketleriDialog, _super);
            function BankaHareketleriDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.BankaHareketleriForm(_this.idPrefix);
                return _this;
            }
            BankaHareketleriDialog.prototype.getFormKey = function () { return Tiger.BankaHareketleriForm.formKey; };
            BankaHareketleriDialog.prototype.getIdProperty = function () { return Tiger.BankaHareketleriRow.idProperty; };
            BankaHareketleriDialog.prototype.getLocalTextPrefix = function () { return Tiger.BankaHareketleriRow.localTextPrefix; };
            BankaHareketleriDialog.prototype.getNameProperty = function () { return Tiger.BankaHareketleriRow.nameProperty; };
            BankaHareketleriDialog.prototype.getService = function () { return Tiger.BankaHareketleriService.baseUrl; };
            BankaHareketleriDialog.prototype.getDeletePermission = function () { return Tiger.BankaHareketleriRow.deletePermission; };
            BankaHareketleriDialog.prototype.getInsertPermission = function () { return Tiger.BankaHareketleriRow.insertPermission; };
            BankaHareketleriDialog.prototype.getUpdatePermission = function () { return Tiger.BankaHareketleriRow.updatePermission; };
            BankaHareketleriDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaHareketleriDialog);
            return BankaHareketleriDialog;
        }(Serenity.EntityDialog));
        Tiger.BankaHareketleriDialog = BankaHareketleriDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var BankaHareketleriGrid = /** @class */ (function (_super) {
            __extends(BankaHareketleriGrid, _super);
            function BankaHareketleriGrid(container) {
                return _super.call(this, container) || this;
            }
            BankaHareketleriGrid.prototype.getColumnsKey = function () { return 'Tiger.BankaHareketleri'; };
            BankaHareketleriGrid.prototype.getDialogType = function () { return Tiger.BankaHareketleriDialog; };
            BankaHareketleriGrid.prototype.getIdProperty = function () { return Tiger.BankaHareketleriRow.idProperty; };
            BankaHareketleriGrid.prototype.getInsertPermission = function () { return Tiger.BankaHareketleriRow.insertPermission; };
            BankaHareketleriGrid.prototype.getLocalTextPrefix = function () { return Tiger.BankaHareketleriRow.localTextPrefix; };
            BankaHareketleriGrid.prototype.getService = function () { return Tiger.BankaHareketleriService.baseUrl; };
            BankaHareketleriGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankaHareketleriGrid);
            return BankaHareketleriGrid;
        }(Serenity.EntityGrid));
        Tiger.BankaHareketleriGrid = BankaHareketleriGrid;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var CariHesapListesiDialog = /** @class */ (function (_super) {
            __extends(CariHesapListesiDialog, _super);
            function CariHesapListesiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.CariHesapListesiForm(_this.idPrefix);
                return _this;
            }
            CariHesapListesiDialog.prototype.getFormKey = function () { return Tiger.CariHesapListesiForm.formKey; };
            CariHesapListesiDialog.prototype.getIdProperty = function () { return Tiger.CariHesapListesiRow.idProperty; };
            CariHesapListesiDialog.prototype.getLocalTextPrefix = function () { return Tiger.CariHesapListesiRow.localTextPrefix; };
            CariHesapListesiDialog.prototype.getNameProperty = function () { return Tiger.CariHesapListesiRow.nameProperty; };
            CariHesapListesiDialog.prototype.getService = function () { return Tiger.CariHesapListesiService.baseUrl; };
            CariHesapListesiDialog.prototype.getDeletePermission = function () { return Tiger.CariHesapListesiRow.deletePermission; };
            CariHesapListesiDialog.prototype.getInsertPermission = function () { return Tiger.CariHesapListesiRow.insertPermission; };
            CariHesapListesiDialog.prototype.getUpdatePermission = function () { return Tiger.CariHesapListesiRow.updatePermission; };
            CariHesapListesiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CariHesapListesiDialog);
            return CariHesapListesiDialog;
        }(Serenity.EntityDialog));
        Tiger.CariHesapListesiDialog = CariHesapListesiDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var CariHesapListesiGrid = /** @class */ (function (_super) {
            __extends(CariHesapListesiGrid, _super);
            function CariHesapListesiGrid(container) {
                return _super.call(this, container) || this;
            }
            CariHesapListesiGrid.prototype.getColumnsKey = function () { return 'Tiger.CariHesapListesi'; };
            CariHesapListesiGrid.prototype.getDialogType = function () { return Tiger.CariHesapListesiDialog; };
            CariHesapListesiGrid.prototype.getIdProperty = function () { return Tiger.CariHesapListesiRow.idProperty; };
            CariHesapListesiGrid.prototype.getInsertPermission = function () { return Tiger.CariHesapListesiRow.insertPermission; };
            CariHesapListesiGrid.prototype.getLocalTextPrefix = function () { return Tiger.CariHesapListesiRow.localTextPrefix; };
            CariHesapListesiGrid.prototype.getService = function () { return Tiger.CariHesapListesiService.baseUrl; };
            CariHesapListesiGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Tiger/CariHesapListesi/ListExcel',
                    separator: true
                }));
                buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CariHesapListesiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CariHesapListesiGrid);
            return CariHesapListesiGrid;
        }(Serenity.EntityGrid));
        Tiger.CariHesapListesiGrid = CariHesapListesiGrid;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerDonemlerDialog = /** @class */ (function (_super) {
            __extends(TigerDonemlerDialog, _super);
            function TigerDonemlerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.TigerDonemlerForm(_this.idPrefix);
                return _this;
            }
            TigerDonemlerDialog.prototype.getFormKey = function () { return Tiger.TigerDonemlerForm.formKey; };
            TigerDonemlerDialog.prototype.getIdProperty = function () { return Tiger.TigerDonemlerRow.idProperty; };
            TigerDonemlerDialog.prototype.getLocalTextPrefix = function () { return Tiger.TigerDonemlerRow.localTextPrefix; };
            TigerDonemlerDialog.prototype.getService = function () { return Tiger.TigerDonemlerService.baseUrl; };
            TigerDonemlerDialog.prototype.getDeletePermission = function () { return Tiger.TigerDonemlerRow.deletePermission; };
            TigerDonemlerDialog.prototype.getInsertPermission = function () { return Tiger.TigerDonemlerRow.insertPermission; };
            TigerDonemlerDialog.prototype.getUpdatePermission = function () { return Tiger.TigerDonemlerRow.updatePermission; };
            TigerDonemlerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerDonemlerDialog);
            return TigerDonemlerDialog;
        }(Serenity.EntityDialog));
        Tiger.TigerDonemlerDialog = TigerDonemlerDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerDonemlerGrid = /** @class */ (function (_super) {
            __extends(TigerDonemlerGrid, _super);
            function TigerDonemlerGrid(container) {
                return _super.call(this, container) || this;
            }
            TigerDonemlerGrid.prototype.getColumnsKey = function () { return 'Tiger.TigerDonemler'; };
            TigerDonemlerGrid.prototype.getDialogType = function () { return Tiger.TigerDonemlerDialog; };
            TigerDonemlerGrid.prototype.getIdProperty = function () { return Tiger.TigerDonemlerRow.idProperty; };
            TigerDonemlerGrid.prototype.getInsertPermission = function () { return Tiger.TigerDonemlerRow.insertPermission; };
            TigerDonemlerGrid.prototype.getLocalTextPrefix = function () { return Tiger.TigerDonemlerRow.localTextPrefix; };
            TigerDonemlerGrid.prototype.getService = function () { return Tiger.TigerDonemlerService.baseUrl; };
            TigerDonemlerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerDonemlerGrid);
            return TigerDonemlerGrid;
        }(Serenity.EntityGrid));
        Tiger.TigerDonemlerGrid = TigerDonemlerGrid;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerFirmalarDialog = /** @class */ (function (_super) {
            __extends(TigerFirmalarDialog, _super);
            function TigerFirmalarDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.TigerFirmalarForm(_this.idPrefix);
                return _this;
            }
            TigerFirmalarDialog.prototype.getFormKey = function () { return Tiger.TigerFirmalarForm.formKey; };
            TigerFirmalarDialog.prototype.getIdProperty = function () { return Tiger.TigerFirmalarRow.idProperty; };
            TigerFirmalarDialog.prototype.getLocalTextPrefix = function () { return Tiger.TigerFirmalarRow.localTextPrefix; };
            TigerFirmalarDialog.prototype.getNameProperty = function () { return Tiger.TigerFirmalarRow.nameProperty; };
            TigerFirmalarDialog.prototype.getService = function () { return Tiger.TigerFirmalarService.baseUrl; };
            TigerFirmalarDialog.prototype.getDeletePermission = function () { return Tiger.TigerFirmalarRow.deletePermission; };
            TigerFirmalarDialog.prototype.getInsertPermission = function () { return Tiger.TigerFirmalarRow.insertPermission; };
            TigerFirmalarDialog.prototype.getUpdatePermission = function () { return Tiger.TigerFirmalarRow.updatePermission; };
            TigerFirmalarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerFirmalarDialog);
            return TigerFirmalarDialog;
        }(Serenity.EntityDialog));
        Tiger.TigerFirmalarDialog = TigerFirmalarDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var TigerFirmalarGrid = /** @class */ (function (_super) {
            __extends(TigerFirmalarGrid, _super);
            function TigerFirmalarGrid(container) {
                return _super.call(this, container) || this;
            }
            TigerFirmalarGrid.prototype.getColumnsKey = function () { return 'Tiger.TigerFirmalar'; };
            TigerFirmalarGrid.prototype.getDialogType = function () { return Tiger.TigerFirmalarDialog; };
            TigerFirmalarGrid.prototype.getIdProperty = function () { return Tiger.TigerFirmalarRow.idProperty; };
            TigerFirmalarGrid.prototype.getInsertPermission = function () { return Tiger.TigerFirmalarRow.insertPermission; };
            TigerFirmalarGrid.prototype.getLocalTextPrefix = function () { return Tiger.TigerFirmalarRow.localTextPrefix; };
            TigerFirmalarGrid.prototype.getService = function () { return Tiger.TigerFirmalarService.baseUrl; };
            TigerFirmalarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TigerFirmalarGrid);
            return TigerFirmalarGrid;
        }(Serenity.EntityGrid));
        Tiger.TigerFirmalarGrid = TigerFirmalarGrid;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
        var CariGorusmelerDialog = /** @class */ (function (_super) {
            __extends(CariGorusmelerDialog, _super);
            function CariGorusmelerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VeriGirisleri.CariGorusmelerForm(_this.idPrefix);
                return _this;
            }
            CariGorusmelerDialog.prototype.getFormKey = function () { return VeriGirisleri.CariGorusmelerForm.formKey; };
            CariGorusmelerDialog.prototype.getIdProperty = function () { return VeriGirisleri.CariGorusmelerRow.idProperty; };
            CariGorusmelerDialog.prototype.getLocalTextPrefix = function () { return VeriGirisleri.CariGorusmelerRow.localTextPrefix; };
            CariGorusmelerDialog.prototype.getNameProperty = function () { return VeriGirisleri.CariGorusmelerRow.nameProperty; };
            CariGorusmelerDialog.prototype.getService = function () { return VeriGirisleri.CariGorusmelerService.baseUrl; };
            CariGorusmelerDialog.prototype.getDeletePermission = function () { return VeriGirisleri.CariGorusmelerRow.deletePermission; };
            CariGorusmelerDialog.prototype.getInsertPermission = function () { return VeriGirisleri.CariGorusmelerRow.insertPermission; };
            CariGorusmelerDialog.prototype.getUpdatePermission = function () { return VeriGirisleri.CariGorusmelerRow.updatePermission; };
            CariGorusmelerDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var queryString = window.location.search;
                var urlParams = new URLSearchParams(queryString);
                var Kodu = urlParams.get('cat');
                var DolanBakiye = urlParams.get('DolanBakiye');
                var CariReferans = urlParams.get('CariReferans');
                var ToplamBakiye = urlParams.get('ToplamBakiye');
                if (this.isNew()) {
                    this.form.Gorusen.value = E_Maliyet.Authorization.userDefinition.UserId.toString();
                    this.form.CariRef.value = CariReferans;
                    this.form.Tutar.value = parseFloat(DolanBakiye);
                    this.form.Bakiye.value = parseFloat(ToplamBakiye);
                }
            };
            CariGorusmelerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CariGorusmelerDialog);
            return CariGorusmelerDialog;
        }(Serenity.EntityDialog));
        VeriGirisleri.CariGorusmelerDialog = CariGorusmelerDialog;
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var VeriGirisleri;
    (function (VeriGirisleri) {
        var CariGorusmelerGrid = /** @class */ (function (_super) {
            __extends(CariGorusmelerGrid, _super);
            function CariGorusmelerGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.HeaderFiltersMixin({
                    grid: _this
                });
                return _this;
            }
            CariGorusmelerGrid.prototype.getColumnsKey = function () { return 'VeriGirisleri.CariGorusmeler'; };
            CariGorusmelerGrid.prototype.getDialogType = function () { return VeriGirisleri.CariGorusmelerDialog; };
            CariGorusmelerGrid.prototype.getIdProperty = function () { return VeriGirisleri.CariGorusmelerRow.idProperty; };
            CariGorusmelerGrid.prototype.getInsertPermission = function () { return VeriGirisleri.CariGorusmelerRow.insertPermission; };
            CariGorusmelerGrid.prototype.getLocalTextPrefix = function () { return VeriGirisleri.CariGorusmelerRow.localTextPrefix; };
            CariGorusmelerGrid.prototype.getService = function () { return VeriGirisleri.CariGorusmelerService.baseUrl; };
            CariGorusmelerGrid.prototype.getPersistanceStorage = function () {
                return new E_Maliyet.Common.UserPreferenceStorage();
            };
            CariGorusmelerGrid.prototype.getPersistanceFlags = function () {
                return {
                    columnWidths: true // dont persist column widths;
                };
            };
            CariGorusmelerGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                return columns;
            };
            CariGorusmelerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'VeriGirisleri/CariGorusmeler/ListExcel',
                    separator: true
                }));
                buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CariGorusmelerGrid.prototype.getQuickFilters = function () {
                /*
                   var flt = super.getQuickFilters();
    
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, x => x.field == "CariAdi");
                    category.init = e => {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
                 */
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var filter = Q.first(flt, function (x) { return x.field == "CariAdiKodu" /* CariAdiKodu */; });
                    filter.title = "Cari";
                    filter.type = Serenity.LookupEditor;
                    filter.handler = function (h) {
                        if (q["cat"]) {
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [['CariAdiKodu'], 'like', '' + q["cat"] + '']);
                        }
                        //if (q["cat"]) {
                        //    alert(q["cat"]);
                        //    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        //        [['CariAdi'], 'like', '%' + q["cat"] + '%']);
                        //}
                        flt.push;
                    };
                }
                return flt;
                /*
                 var q = Q.parseQueryString();
                let filters = super.getQuickFilters();
                let filter = Q.first(filters, x => x.field == fld.CariAdi);
                filter.title = "Cari";
                filter.type = Serenity.LookupEditor;
                filter.handler = h => {
     
                    if (q["cat"]) {
                        
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [['CariAdi'], 'like', '' + q["cat"] + '']);
                    }
    
                    //if (q["cat"]) {
                    //    alert(q["cat"]);
                    //    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                    //        [['CariAdi'], 'like', '%' + q["cat"] + '%']);
                    //}
    
                };
                filters.push;
                return filters;
                */
            };
            CariGorusmelerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CariGorusmelerGrid);
            return CariGorusmelerGrid;
        }(Serenity.EntityGrid));
        VeriGirisleri.CariGorusmelerGrid = CariGorusmelerGrid;
    })(VeriGirisleri = E_Maliyet.VeriGirisleri || (E_Maliyet.VeriGirisleri = {}));
})(E_Maliyet || (E_Maliyet = {}));