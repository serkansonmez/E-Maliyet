var E_Maliyet;
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
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayForm = /** @class */ (function (_super) {
            __extends(MaliyetDetayForm, _super);
            function MaliyetDetayForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaliyetDetayForm.init) {
                    MaliyetDetayForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(MaliyetDetayForm, [
                        'MaliyetTalepId', w0,
                        'Seviye', w0,
                        'SatirTipi', w1,
                        'Turu', w1,
                        'Kodu', w1,
                        'Aciklamasi', w1,
                        'VaryantKodu', w1,
                        'VaryantAciklamasi', w1,
                        'Miktar', w0,
                        'Birim', w1,
                        'VariantRef', w0,
                        'Adet', w0,
                        'BirimFiyat', w2,
                        'Tutar', w2
                    ]);
                }
                return _this;
            }
            MaliyetDetayForm.formKey = 'Maliyet.MaliyetDetay';
            return MaliyetDetayForm;
        }(Serenity.PrefixedContext));
        Maliyet.MaliyetDetayForm = MaliyetDetayForm;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayRow;
        (function (MaliyetDetayRow) {
            MaliyetDetayRow.idProperty = 'VariantRef';
            MaliyetDetayRow.nameProperty = 'Aciklamasi';
            MaliyetDetayRow.localTextPrefix = 'Maliyet.MaliyetDetay';
            MaliyetDetayRow.lookupKey = 'Maliyet.MaliyetDetay';
            function getLookup() {
                return Q.getLookup('Maliyet.MaliyetDetay');
            }
            MaliyetDetayRow.getLookup = getLookup;
            MaliyetDetayRow.deletePermission = 'Administration:General';
            MaliyetDetayRow.insertPermission = 'Administration:General';
            MaliyetDetayRow.readPermission = 'Administration:General';
            MaliyetDetayRow.updatePermission = 'Administration:General';
        })(MaliyetDetayRow = Maliyet.MaliyetDetayRow || (Maliyet.MaliyetDetayRow = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayService;
        (function (MaliyetDetayService) {
            MaliyetDetayService.baseUrl = 'Maliyet/MaliyetDetay';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaliyetDetayService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaliyetDetayService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaliyetDetayService = Maliyet.MaliyetDetayService || (Maliyet.MaliyetDetayService = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayToplamForm = /** @class */ (function (_super) {
            __extends(MaliyetDetayToplamForm, _super);
            function MaliyetDetayToplamForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaliyetDetayToplamForm.init) {
                    MaliyetDetayToplamForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    Q.initFormType(MaliyetDetayToplamForm, [
                        'BirimFiyat', w0,
                        'Tutar', w0
                    ]);
                }
                return _this;
            }
            MaliyetDetayToplamForm.formKey = 'Maliyet.MaliyetDetayToplam';
            return MaliyetDetayToplamForm;
        }(Serenity.PrefixedContext));
        Maliyet.MaliyetDetayToplamForm = MaliyetDetayToplamForm;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayToplamRow;
        (function (MaliyetDetayToplamRow) {
            MaliyetDetayToplamRow.idProperty = 'MaliyetTalepId';
            MaliyetDetayToplamRow.localTextPrefix = 'Maliyet.MaliyetDetayToplam';
            MaliyetDetayToplamRow.deletePermission = 'Administration:General';
            MaliyetDetayToplamRow.insertPermission = 'Administration:General';
            MaliyetDetayToplamRow.readPermission = 'Administration:General';
            MaliyetDetayToplamRow.updatePermission = 'Administration:General';
        })(MaliyetDetayToplamRow = Maliyet.MaliyetDetayToplamRow || (Maliyet.MaliyetDetayToplamRow = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayToplamService;
        (function (MaliyetDetayToplamService) {
            MaliyetDetayToplamService.baseUrl = 'Maliyet/MaliyetDetayToplam';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaliyetDetayToplamService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaliyetDetayToplamService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaliyetDetayToplamService = Maliyet.MaliyetDetayToplamService || (Maliyet.MaliyetDetayToplamService = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetTalepForm = /** @class */ (function (_super) {
            __extends(MaliyetTalepForm, _super);
            function MaliyetTalepForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaliyetTalepForm.init) {
                    MaliyetTalepForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(MaliyetTalepForm, [
                        'ItemRef', w0,
                        'VariantRef', w0,
                        'Adet', w1
                    ]);
                }
                return _this;
            }
            MaliyetTalepForm.formKey = 'Maliyet.MaliyetTalep';
            return MaliyetTalepForm;
        }(Serenity.PrefixedContext));
        Maliyet.MaliyetTalepForm = MaliyetTalepForm;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetTalepRow;
        (function (MaliyetTalepRow) {
            MaliyetTalepRow.idProperty = 'MaliyetTalepId';
            MaliyetTalepRow.nameProperty = 'TigerFirma';
            MaliyetTalepRow.localTextPrefix = 'Maliyet.MaliyetTalep';
            MaliyetTalepRow.lookupKey = 'Maliyet.MaliyetTalep';
            function getLookup() {
                return Q.getLookup('Maliyet.MaliyetTalep');
            }
            MaliyetTalepRow.getLookup = getLookup;
            MaliyetTalepRow.deletePermission = 'Administration:General';
            MaliyetTalepRow.insertPermission = 'Administration:General';
            MaliyetTalepRow.readPermission = 'Administration:General';
            MaliyetTalepRow.updatePermission = 'Administration:General';
        })(MaliyetTalepRow = Maliyet.MaliyetTalepRow || (Maliyet.MaliyetTalepRow = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetTalepService;
        (function (MaliyetTalepService) {
            MaliyetTalepService.baseUrl = 'Maliyet/MaliyetTalep';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaliyetTalepService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaliyetTalepService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaliyetTalepService = Maliyet.MaliyetTalepService || (Maliyet.MaliyetTalepService = {}));
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
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
    var Texts;
    (function (Texts) {
        E_Maliyet['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, KullaniciRaporFiltreleri: { Id: 1, KullaniciFiltresi: 1, RaporlarId: 1, RaporlarRaporAdi: 1, RaporlarRaporKodu: 1, UserDisplayName: 1, UserEmail: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserLastDirectoryUpdate: 1, UserMobilePhoneNumber: 1, UserMobilePhoneVerified: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserSource: 1, UserTigerDonem: 1, UserTigerFirma: 1, UserTwoFactorAuth: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Raporlar: { Id: 1, RaporAdi: 1, RaporKodu: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TigerDonem: 1, TigerDonemNo: 1, TigerFirma: 1, TigerFirmaAdi: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Maliyet: { MaliyetDetay: { Aciklamasi: 1, Adet: 1, Birim: 1, BirimFiyat: 1, FisNo: 1, FisTarih: 1, FisTuru: 1, Kodu: 1, MaliyetDetayId: 1, MaliyetTalepAdet: 1, MaliyetTalepId: 1, MaliyetTalepInsertDate: 1, MaliyetTalepItemRef: 1, MaliyetTalepTigerDonem: 1, MaliyetTalepTigerFirma: 1, MaliyetTalepUserId: 1, MaliyetTalepVariantRef: 1, Miktar: 1, ParentRef: 1, SatirTipi: 1, Seviye: 1, Turu: 1, Tutar: 1, VariantRef: 1, VaryantAciklamasi: 1, VaryantKodu: 1 }, MaliyetDetayToplam: { BirimFiyat: 1, MaliyetTalepId: 1, Tutar: 1 }, MaliyetTalep: { Adet: 1, BirimFiyat: 1, InsertDate: 1, ItemName: 1, ItemRef: 1, MaliyetDetaylari: 1, MaliyetTalepId: 1, TigerDonem: 1, TigerFirma: 1, Tutar: 1, UserDisplayName: 1, UserEmail: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserLastDirectoryUpdate: 1, UserMobilePhoneNumber: 1, UserMobilePhoneVerified: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserSource: 1, UserTigerDonem: 1, UserTigerFirma: 1, UserTwoFactorAuth: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, VariantName: 1, VariantRef: 1 } }, Tiger: { MalzemeListesi: { ItemsActive: 1, ItemsCardtype: 1, ItemsCardtypeTipi: 1, ItemsCode: 1, ItemsName: 1, ItemsProducercode: 1, ItemsSpecode: 1, ItemsStgrpcode: 1, Itmunita2Katsayi: 1, Itmunita3Katsayi: 1, Logicalref: 1, UnitsetfCode: 1, UnitsetfName: 1, UnitsetlCode: 1, UnitsetlName: 1 }, TigerDonemler: { Active: 1, Begdate: 1, Enddate: 1, FirmaDonemStr: 1, Firmnr: 1, Key1: 1, Key2: 1, Key3: 1, Key4: 1, Logicalref: 1, Nr: 1, Perlocalctype: 1, Perrepcurr: 1 }, TigerFirmalar: { Accepteinv: 1, Accofficecode: 1, Actarea: 1, Advancedproduct: 1, Backupebooks: 1, Bagkurnr: 1, Begday: 1, Begmon: 1, City: 1, Cntrycode: 1, Conscoderef: 1, Contractdate: 1, Contractdesc: 1, Contractnumber: 1, Contracttype: 1, Countofleg: 1, Country: 1, Cpachambnr: 1, Cpacity: 1, Cpacntrycode: 1, Cpacountry: 1, Cpadistrict: 1, Cpadoornr: 1, Cpaemail: 1, Cpaextension: 1, Cpafaxnr: 1, Cpaidtcno: 1, Cpakdspassword: 1, Cpaname: 1, Cpaoccupation: 1, Cpaphone: 1, Cparoad: 1, Cpastreet: 1, Cpasurname: 1, Cpataxnr: 1, Cpataxoff: 1, Cpatckn: 1, Cpatitle: 1, Cpausername: 1, Cpazipcode: 1, Ctable: 1, Dbname: 1, Deductlimit: 1, Direct: 1, District: 1, Dncnstlen: 1, Doornr: 1, Earcentdefaddr: 1, Earcentpass: 1, Earcentsend: 1, Earcentuser: 1, Ebookconttype: 1, Ebookcurrtype: 1, Ebookstartdate: 1, Einvconttype: 1, Einvcustom: 1, Einvoiceid: 1, Einvoicetypsgk: 1, Emailaddr: 1, Employeremail: 1, Employeridtcno: 1, Employername: 1, Employersurname: 1, Emutentdefaddr: 1, Emutentpass: 1, Emutentsend: 1, Emutentuser: 1, Fax: 1, Faxemailaddr: 1, Faxuserkey: 1, Faxusername: 1, Firmemailaddr: 1, Firmeuvatnumber: 1, Firmlang: 1, Firmrepcurr: 1, Firmtype: 1, Firmytlstatus: 1, Getcpafromdiv: 1, Hashvers: 1, Intsalesaddr: 1, Isebookkeptbyfirm: 1, Isymmcontractmade: 1, Jgcompanynr: 1, Jghrfirmcode: 1, Jgpassword: 1, Jgperiodnr: 1, Jgserverurl: 1, Jgusername: 1, Lastcontrolno: 1, Lastgloblineno: 1, Lastjournalno: 1, Liquidatedfirm: 1, Liquidatingdate: 1, Liquidationtyp: 1, Localcaldr: 1, Localctyp: 1, Logicalref: 1, Logoid: 1, Longperiods: 1, Majversnr: 1, Mersisno: 1, Minversnr: 1, Mobfirmalias: 1, Mobpassword: 1, Mobusername: 1, Moddate: 1, Modtime: 1, Nacecode: 1, Name: 1, NameAndNr: 1, Nr: 1, Officaltitle: 1, Orgchart: 1, Parole: 1, Parole2: 1, Passive: 1, Password: 1, Passwordtaxdecl: 1, Passwordtaxdecl2: 1, Pernr: 1, Phone1: 1, Phone2: 1, Postlabelcode: 1, Postlabelcodedesp: 1, Profileid: 1, Ptimestamphost: 1, Ptimestamppass: 1, Ptimestampport: 1, Ptimestampuser: 1, Relversnr: 1, Road: 1, Sector: 1, Securnr: 1, Senderlabelcode: 1, Senderlabelcodedesp: 1, Sepexchtable: 1, Shaalgorithm: 1, Shpagncod: 1, Siteid: 1, Srccriteria: 1, Statecode: 1, Statename: 1, Street: 1, Taxnr: 1, Taxoff: 1, Taxoffcode: 1, Taxoffstatecd: 1, Taxoffstatenm: 1, Taxpayercode: 1, Taxpayername: 1, Tcellappid: 1, Tcellapppw: 1, Timestampapppth: 1, Timestamppass: 1, Timestampport: 1, Timestampserver: 1, Timestampuser: 1, Title: 1, Traderegisno: 1, Usechangelog: 1, Usecommonparam: 1, Useearchive: 1, Useebook: 1, Useedespatch: 1, Useeproducerrec: 1, Useetradesmaninv: 1, Usepaperinv: 1, Useproxy: 1, Usercode: 1, Usercode2: 1, Userext: 1, Username: 1, Useserverdate: 1, Vatroundmtd: 1, Webaddr: 1, Workdayflgs1: 1, Workdayflgs2: 1, Workdayflgs3: 1, Workdayflgs4: 1, Workdayflgs5: 1, Workdayflgs6: 1, Workdayflgs7: 1, Ymmchambnr: 1, Ymmcontdate: 1, Ymmcontdesc: 1, Ymmcontnumber: 1, Ymmconttype: 1, Ymmemail: 1, Ymmfaxnr: 1, Ymmname: 1, Ymmphone: 1, Ymmsurname: 1, Ymmtaxnr: 1, Ymmtcno: 1, Ytlsourcefirm: 1, Zipcode: 1, Zusatzno: 1 }, VaryantListesi: { Active: 1, Cardtype: 1, Code: 1, Itemref: 1, Logicalref: 1, Name: 1, Producercode: 1, Specode: 1, Specode2: 1, Specode3: 1, Specode4: 1, Specode5: 1, Stgrpcode: 1, Unitsetref: 1, VariantCardtype: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = E_Maliyet.Texts || (E_Maliyet.Texts = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var MalzemeListesiForm = /** @class */ (function (_super) {
            __extends(MalzemeListesiForm, _super);
            function MalzemeListesiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MalzemeListesiForm.init) {
                    MalzemeListesiForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(MalzemeListesiForm, [
                        'ItemsActive', w0,
                        'ItemsCardtype', w0,
                        'ItemsCardtypeTipi', w1,
                        'ItemsCode', w1,
                        'ItemsName', w1,
                        'ItemsStgrpcode', w1,
                        'ItemsProducercode', w1,
                        'ItemsSpecode', w1,
                        'UnitsetfCode', w1,
                        'UnitsetfName', w1,
                        'UnitsetlCode', w1,
                        'UnitsetlName', w1,
                        'Itmunita2Katsayi', w2,
                        'Itmunita3Katsayi', w2
                    ]);
                }
                return _this;
            }
            MalzemeListesiForm.formKey = 'Tiger.MalzemeListesi';
            return MalzemeListesiForm;
        }(Serenity.PrefixedContext));
        Tiger.MalzemeListesiForm = MalzemeListesiForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var MalzemeListesiRow;
        (function (MalzemeListesiRow) {
            MalzemeListesiRow.idProperty = 'Logicalref';
            MalzemeListesiRow.nameProperty = 'ItemsName';
            MalzemeListesiRow.localTextPrefix = 'Tiger.MalzemeListesi';
            MalzemeListesiRow.lookupKey = 'Tiger.MalzemeListesi';
            function getLookup() {
                return Q.getLookup('Tiger.MalzemeListesi');
            }
            MalzemeListesiRow.getLookup = getLookup;
            MalzemeListesiRow.deletePermission = 'Administration:General';
            MalzemeListesiRow.insertPermission = 'Administration:General';
            MalzemeListesiRow.readPermission = 'Administration:General';
            MalzemeListesiRow.updatePermission = 'Administration:General';
        })(MalzemeListesiRow = Tiger.MalzemeListesiRow || (Tiger.MalzemeListesiRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var MalzemeListesiService;
        (function (MalzemeListesiService) {
            MalzemeListesiService.baseUrl = 'Tiger/MalzemeListesi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MalzemeListesiService[x] = function (r, s, o) {
                    return Q.serviceRequest(MalzemeListesiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MalzemeListesiService = Tiger.MalzemeListesiService || (Tiger.MalzemeListesiService = {}));
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
    var Tiger;
    (function (Tiger) {
        var VaryantListesiForm = /** @class */ (function (_super) {
            __extends(VaryantListesiForm, _super);
            function VaryantListesiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VaryantListesiForm.init) {
                    VaryantListesiForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(VaryantListesiForm, [
                        'Itemref', w0,
                        'Cardtype', w0,
                        'VariantCardtype', w1,
                        'Code', w1,
                        'Name', w1,
                        'Active', w0,
                        'Unitsetref', w0,
                        'Specode', w1,
                        'Specode2', w1,
                        'Specode3', w1,
                        'Specode4', w1,
                        'Specode5', w1,
                        'Stgrpcode', w1,
                        'Producercode', w1
                    ]);
                }
                return _this;
            }
            VaryantListesiForm.formKey = 'Tiger.VaryantListesi';
            return VaryantListesiForm;
        }(Serenity.PrefixedContext));
        Tiger.VaryantListesiForm = VaryantListesiForm;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var VaryantListesiRow;
        (function (VaryantListesiRow) {
            VaryantListesiRow.idProperty = 'Logicalref';
            VaryantListesiRow.nameProperty = 'Name';
            VaryantListesiRow.localTextPrefix = 'Tiger.VaryantListesi';
            VaryantListesiRow.lookupKey = 'Tiger.VaryantListesi';
            function getLookup() {
                return Q.getLookup('Tiger.VaryantListesi');
            }
            VaryantListesiRow.getLookup = getLookup;
            VaryantListesiRow.deletePermission = 'Administration:General';
            VaryantListesiRow.insertPermission = 'Administration:General';
            VaryantListesiRow.readPermission = 'Administration:General';
            VaryantListesiRow.updatePermission = 'Administration:General';
        })(VaryantListesiRow = Tiger.VaryantListesiRow || (Tiger.VaryantListesiRow = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var VaryantListesiService;
        (function (VaryantListesiService) {
            VaryantListesiService.baseUrl = 'Tiger/VaryantListesi';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VaryantListesiService[x] = function (r, s, o) {
                    return Q.serviceRequest(VaryantListesiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VaryantListesiService = Tiger.VaryantListesiService || (Tiger.VaryantListesiService = {}));
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
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
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayDialog = /** @class */ (function (_super) {
            __extends(MaliyetDetayDialog, _super);
            function MaliyetDetayDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maliyet.MaliyetDetayForm(_this.idPrefix);
                return _this;
            }
            MaliyetDetayDialog.prototype.getFormKey = function () { return Maliyet.MaliyetDetayForm.formKey; };
            MaliyetDetayDialog.prototype.getIdProperty = function () { return Maliyet.MaliyetDetayRow.idProperty; };
            MaliyetDetayDialog.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetDetayRow.localTextPrefix; };
            MaliyetDetayDialog.prototype.getNameProperty = function () { return Maliyet.MaliyetDetayRow.nameProperty; };
            MaliyetDetayDialog.prototype.getService = function () { return Maliyet.MaliyetDetayService.baseUrl; };
            MaliyetDetayDialog.prototype.getDeletePermission = function () { return Maliyet.MaliyetDetayRow.deletePermission; };
            MaliyetDetayDialog.prototype.getInsertPermission = function () { return Maliyet.MaliyetDetayRow.insertPermission; };
            MaliyetDetayDialog.prototype.getUpdatePermission = function () { return Maliyet.MaliyetDetayRow.updatePermission; };
            MaliyetDetayDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetDetayDialog);
            return MaliyetDetayDialog;
        }(Serenity.EntityDialog));
        Maliyet.MaliyetDetayDialog = MaliyetDetayDialog;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayGrid = /** @class */ (function (_super) {
            __extends(MaliyetDetayGrid, _super);
            function MaliyetDetayGrid(container) {
                return _super.call(this, container) || this;
            }
            MaliyetDetayGrid.prototype.getColumnsKey = function () { return 'Maliyet.MaliyetDetay'; };
            MaliyetDetayGrid.prototype.getDialogType = function () { return Maliyet.MaliyetDetayDialog; };
            MaliyetDetayGrid.prototype.getIdProperty = function () { return Maliyet.MaliyetDetayRow.idProperty; };
            MaliyetDetayGrid.prototype.getInsertPermission = function () { return Maliyet.MaliyetDetayRow.insertPermission; };
            MaliyetDetayGrid.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetDetayRow.localTextPrefix; };
            MaliyetDetayGrid.prototype.getService = function () { return Maliyet.MaliyetDetayService.baseUrl; };
            MaliyetDetayGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetDetayGrid);
            return MaliyetDetayGrid;
        }(Serenity.EntityGrid));
        Maliyet.MaliyetDetayGrid = MaliyetDetayGrid;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayToplamDialog = /** @class */ (function (_super) {
            __extends(MaliyetDetayToplamDialog, _super);
            function MaliyetDetayToplamDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maliyet.MaliyetDetayToplamForm(_this.idPrefix);
                return _this;
            }
            MaliyetDetayToplamDialog.prototype.getFormKey = function () { return Maliyet.MaliyetDetayToplamForm.formKey; };
            MaliyetDetayToplamDialog.prototype.getIdProperty = function () { return Maliyet.MaliyetDetayToplamRow.idProperty; };
            MaliyetDetayToplamDialog.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetDetayToplamRow.localTextPrefix; };
            MaliyetDetayToplamDialog.prototype.getService = function () { return Maliyet.MaliyetDetayToplamService.baseUrl; };
            MaliyetDetayToplamDialog.prototype.getDeletePermission = function () { return Maliyet.MaliyetDetayToplamRow.deletePermission; };
            MaliyetDetayToplamDialog.prototype.getInsertPermission = function () { return Maliyet.MaliyetDetayToplamRow.insertPermission; };
            MaliyetDetayToplamDialog.prototype.getUpdatePermission = function () { return Maliyet.MaliyetDetayToplamRow.updatePermission; };
            MaliyetDetayToplamDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetDetayToplamDialog);
            return MaliyetDetayToplamDialog;
        }(Serenity.EntityDialog));
        Maliyet.MaliyetDetayToplamDialog = MaliyetDetayToplamDialog;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetDetayToplamGrid = /** @class */ (function (_super) {
            __extends(MaliyetDetayToplamGrid, _super);
            function MaliyetDetayToplamGrid(container) {
                return _super.call(this, container) || this;
            }
            MaliyetDetayToplamGrid.prototype.getColumnsKey = function () { return 'Maliyet.MaliyetDetayToplam'; };
            MaliyetDetayToplamGrid.prototype.getDialogType = function () { return Maliyet.MaliyetDetayToplamDialog; };
            MaliyetDetayToplamGrid.prototype.getIdProperty = function () { return Maliyet.MaliyetDetayToplamRow.idProperty; };
            MaliyetDetayToplamGrid.prototype.getInsertPermission = function () { return Maliyet.MaliyetDetayToplamRow.insertPermission; };
            MaliyetDetayToplamGrid.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetDetayToplamRow.localTextPrefix; };
            MaliyetDetayToplamGrid.prototype.getService = function () { return Maliyet.MaliyetDetayToplamService.baseUrl; };
            MaliyetDetayToplamGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetDetayToplamGrid);
            return MaliyetDetayToplamGrid;
        }(Serenity.EntityGrid));
        Maliyet.MaliyetDetayToplamGrid = MaliyetDetayToplamGrid;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
/// <reference path="../MaliyetDetay/MaliyetDetayDialog.ts" />
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetMaliyetDetayDialog = /** @class */ (function (_super) {
            __extends(MaliyetMaliyetDetayDialog, _super);
            function MaliyetMaliyetDetayDialog() {
                return _super.call(this) || this;
            }
            MaliyetMaliyetDetayDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.MaliyetTalepId, true);
            };
            MaliyetMaliyetDetayDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetMaliyetDetayDialog);
            return MaliyetMaliyetDetayDialog;
        }(Maliyet.MaliyetDetayDialog));
        Maliyet.MaliyetMaliyetDetayDialog = MaliyetMaliyetDetayDialog;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
/// <reference path="../MaliyetDetay/MaliyetDetayGrid.ts" />
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetMaliyetDetayGrid = /** @class */ (function (_super) {
            __extends(MaliyetMaliyetDetayGrid, _super);
            function MaliyetMaliyetDetayGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: "Kodu" /* Kodu */,
                    getParentId: function (x) { return x.ParentRef; }
                });
                return _this;
            }
            MaliyetMaliyetDetayGrid.prototype.getDialogType = function () { return Maliyet.MaliyetMaliyetDetayDialog; };
            MaliyetMaliyetDetayGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(E_Maliyet.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Maliyet/MaliyetDetay/ListExcel',
                    separator: true
                }));
                buttons.push(E_Maliyet.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                // toggle expand/collapse all
                buttons.push({
                    title: null,
                    hint: "Expand/Collapse All",
                    cssClass: 'treegrid-toggle-expand-collapse-all',
                    onClick: function () {
                        _this.treeMixin.toggleAll();
                    }
                });
                return buttons;
            };
            MaliyetMaliyetDetayGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "VaryantAciklamasi" /* VaryantAciklamasi */; });
            };
            MaliyetMaliyetDetayGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            MaliyetMaliyetDetayGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            MaliyetMaliyetDetayGrid.prototype.getInitialTitle = function () {
                return null;
            };
            MaliyetMaliyetDetayGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(MaliyetMaliyetDetayGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('MaliyetTalepId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            MaliyetMaliyetDetayGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('BirimFiyat'),
                        new Slick.Aggregators.Sum('Tutar')
                    ]
                });
                return grid;
            };
            MaliyetMaliyetDetayGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            MaliyetMaliyetDetayGrid.prototype.usePager = function () {
                return false;
            };
            MaliyetMaliyetDetayGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetMaliyetDetayGrid);
            return MaliyetMaliyetDetayGrid;
        }(Maliyet.MaliyetDetayGrid));
        Maliyet.MaliyetMaliyetDetayGrid = MaliyetMaliyetDetayGrid;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetTalepDialog = /** @class */ (function (_super) {
            __extends(MaliyetTalepDialog, _super);
            function MaliyetTalepDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Maliyet.MaliyetTalepForm(_this.idPrefix);
                //   this.odemeBilgileriGrid.openDialogsAsPanel = false;
                _this.odemeBilgileriGrid = new Maliyet.MaliyetMaliyetDetayGrid(_this.byId('MaliyetDetayBilgileriGrid'));
                _this.form.ItemRef.changeSelect2(function (e) {
                    var HbId = Q.toId(_this.form.ItemRef.value);
                    //  this.form.VariantRef.cascadeValue = HbId;
                });
                return _this;
            }
            MaliyetTalepDialog.prototype.getFormKey = function () { return Maliyet.MaliyetTalepForm.formKey; };
            MaliyetTalepDialog.prototype.getIdProperty = function () { return Maliyet.MaliyetTalepRow.idProperty; };
            MaliyetTalepDialog.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetTalepRow.localTextPrefix; };
            MaliyetTalepDialog.prototype.getNameProperty = function () { return Maliyet.MaliyetTalepRow.nameProperty; };
            MaliyetTalepDialog.prototype.getService = function () { return Maliyet.MaliyetTalepService.baseUrl; };
            MaliyetTalepDialog.prototype.getDeletePermission = function () { return Maliyet.MaliyetTalepRow.deletePermission; };
            MaliyetTalepDialog.prototype.getInsertPermission = function () { return Maliyet.MaliyetTalepRow.insertPermission; };
            MaliyetTalepDialog.prototype.getUpdatePermission = function () { return Maliyet.MaliyetTalepRow.updatePermission; };
            MaliyetTalepDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            MaliyetTalepDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            MaliyetTalepDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //   Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'MaliyetDetayBilgileri', this.isNewOrDeleted());
                //  this.ordersGrid.ContractID = entity.ContractID;
                this.odemeBilgileriGrid.customerID = entity.MaliyetTalepId;
            };
            MaliyetTalepDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Maliyet.MaliyetTalep');
            };
            MaliyetTalepDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], MaliyetTalepDialog);
            return MaliyetTalepDialog;
        }(Serenity.EntityDialog));
        Maliyet.MaliyetTalepDialog = MaliyetTalepDialog;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Maliyet;
    (function (Maliyet) {
        var MaliyetTalepGrid = /** @class */ (function (_super) {
            __extends(MaliyetTalepGrid, _super);
            function MaliyetTalepGrid(container) {
                return _super.call(this, container) || this;
            }
            MaliyetTalepGrid.prototype.getColumnsKey = function () { return 'Maliyet.MaliyetTalep'; };
            MaliyetTalepGrid.prototype.getDialogType = function () { return Maliyet.MaliyetTalepDialog; };
            MaliyetTalepGrid.prototype.getIdProperty = function () { return Maliyet.MaliyetTalepRow.idProperty; };
            MaliyetTalepGrid.prototype.getInsertPermission = function () { return Maliyet.MaliyetTalepRow.insertPermission; };
            MaliyetTalepGrid.prototype.getLocalTextPrefix = function () { return Maliyet.MaliyetTalepRow.localTextPrefix; };
            MaliyetTalepGrid.prototype.getService = function () { return Maliyet.MaliyetTalepService.baseUrl; };
            MaliyetTalepGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaliyetTalepGrid);
            return MaliyetTalepGrid;
        }(Serenity.EntityGrid));
        Maliyet.MaliyetTalepGrid = MaliyetTalepGrid;
    })(Maliyet = E_Maliyet.Maliyet || (E_Maliyet.Maliyet = {}));
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
    var Tiger;
    (function (Tiger) {
        var MalzemeListesiDialog = /** @class */ (function (_super) {
            __extends(MalzemeListesiDialog, _super);
            function MalzemeListesiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.MalzemeListesiForm(_this.idPrefix);
                return _this;
            }
            MalzemeListesiDialog.prototype.getFormKey = function () { return Tiger.MalzemeListesiForm.formKey; };
            MalzemeListesiDialog.prototype.getIdProperty = function () { return Tiger.MalzemeListesiRow.idProperty; };
            MalzemeListesiDialog.prototype.getLocalTextPrefix = function () { return Tiger.MalzemeListesiRow.localTextPrefix; };
            MalzemeListesiDialog.prototype.getNameProperty = function () { return Tiger.MalzemeListesiRow.nameProperty; };
            MalzemeListesiDialog.prototype.getService = function () { return Tiger.MalzemeListesiService.baseUrl; };
            MalzemeListesiDialog.prototype.getDeletePermission = function () { return Tiger.MalzemeListesiRow.deletePermission; };
            MalzemeListesiDialog.prototype.getInsertPermission = function () { return Tiger.MalzemeListesiRow.insertPermission; };
            MalzemeListesiDialog.prototype.getUpdatePermission = function () { return Tiger.MalzemeListesiRow.updatePermission; };
            MalzemeListesiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MalzemeListesiDialog);
            return MalzemeListesiDialog;
        }(Serenity.EntityDialog));
        Tiger.MalzemeListesiDialog = MalzemeListesiDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var MalzemeListesiGrid = /** @class */ (function (_super) {
            __extends(MalzemeListesiGrid, _super);
            function MalzemeListesiGrid(container) {
                return _super.call(this, container) || this;
            }
            MalzemeListesiGrid.prototype.getColumnsKey = function () { return 'Tiger.MalzemeListesi'; };
            MalzemeListesiGrid.prototype.getDialogType = function () { return Tiger.MalzemeListesiDialog; };
            MalzemeListesiGrid.prototype.getIdProperty = function () { return Tiger.MalzemeListesiRow.idProperty; };
            MalzemeListesiGrid.prototype.getInsertPermission = function () { return Tiger.MalzemeListesiRow.insertPermission; };
            MalzemeListesiGrid.prototype.getLocalTextPrefix = function () { return Tiger.MalzemeListesiRow.localTextPrefix; };
            MalzemeListesiGrid.prototype.getService = function () { return Tiger.MalzemeListesiService.baseUrl; };
            MalzemeListesiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MalzemeListesiGrid);
            return MalzemeListesiGrid;
        }(Serenity.EntityGrid));
        Tiger.MalzemeListesiGrid = MalzemeListesiGrid;
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
    var Tiger;
    (function (Tiger) {
        var VaryantListesiDialog = /** @class */ (function (_super) {
            __extends(VaryantListesiDialog, _super);
            function VaryantListesiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tiger.VaryantListesiForm(_this.idPrefix);
                return _this;
            }
            VaryantListesiDialog.prototype.getFormKey = function () { return Tiger.VaryantListesiForm.formKey; };
            VaryantListesiDialog.prototype.getIdProperty = function () { return Tiger.VaryantListesiRow.idProperty; };
            VaryantListesiDialog.prototype.getLocalTextPrefix = function () { return Tiger.VaryantListesiRow.localTextPrefix; };
            VaryantListesiDialog.prototype.getNameProperty = function () { return Tiger.VaryantListesiRow.nameProperty; };
            VaryantListesiDialog.prototype.getService = function () { return Tiger.VaryantListesiService.baseUrl; };
            VaryantListesiDialog.prototype.getDeletePermission = function () { return Tiger.VaryantListesiRow.deletePermission; };
            VaryantListesiDialog.prototype.getInsertPermission = function () { return Tiger.VaryantListesiRow.insertPermission; };
            VaryantListesiDialog.prototype.getUpdatePermission = function () { return Tiger.VaryantListesiRow.updatePermission; };
            VaryantListesiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VaryantListesiDialog);
            return VaryantListesiDialog;
        }(Serenity.EntityDialog));
        Tiger.VaryantListesiDialog = VaryantListesiDialog;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
var E_Maliyet;
(function (E_Maliyet) {
    var Tiger;
    (function (Tiger) {
        var VaryantListesiGrid = /** @class */ (function (_super) {
            __extends(VaryantListesiGrid, _super);
            function VaryantListesiGrid(container) {
                return _super.call(this, container) || this;
            }
            VaryantListesiGrid.prototype.getColumnsKey = function () { return 'Tiger.VaryantListesi'; };
            VaryantListesiGrid.prototype.getDialogType = function () { return Tiger.VaryantListesiDialog; };
            VaryantListesiGrid.prototype.getIdProperty = function () { return Tiger.VaryantListesiRow.idProperty; };
            VaryantListesiGrid.prototype.getInsertPermission = function () { return Tiger.VaryantListesiRow.insertPermission; };
            VaryantListesiGrid.prototype.getLocalTextPrefix = function () { return Tiger.VaryantListesiRow.localTextPrefix; };
            VaryantListesiGrid.prototype.getService = function () { return Tiger.VaryantListesiService.baseUrl; };
            VaryantListesiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VaryantListesiGrid);
            return VaryantListesiGrid;
        }(Serenity.EntityGrid));
        Tiger.VaryantListesiGrid = VaryantListesiGrid;
    })(Tiger = E_Maliyet.Tiger || (E_Maliyet.Tiger = {}));
})(E_Maliyet || (E_Maliyet = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRV9NYWxpeWV0LldlYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5EYXRhQXVkaXRMb2dDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkRhdGFBdWRpdExvZ0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uRGF0YUF1ZGl0TG9nUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkRhdGFBdWRpdExvZ1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uRGF0YUF1ZGl0TG9nVHlwZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUmFwb3JsYXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJhcG9ybGFyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5SYXBvcmxhclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5SYXBvcmxhclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuQ29ubmVjdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5HZW5lcmF0ZU9wdGlvbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuR2VuZXJhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkxpc3RUYWJsZXNSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuVGFibGUudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Ud29GYWN0b3JBdXRoVHlwZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRW1haWxDbGllbnQuRW1haWxBdHRhY2htZW50LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsQXR0YWNobWVudFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRW1haWxDbGllbnQuRW1haWxDb21wb3NlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbENvbXBvc2VSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsRGVsZXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbEZvbGRlci50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbEl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRW1haWxDbGllbnQuRW1haWxMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbExvZ2luSW5mby50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbExvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbE1vdmVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsUmVwbHlSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsUmVwbHlSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbFJldHJpZXZlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRW1haWxDbGllbnQuRW1haWxTdWdnZXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbFN1Z2dlc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FbWFpbENsaWVudC5FbWFpbFRvZ2dsZVNlZW5SZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsVW5yZWFkQ291bnRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0VtYWlsQ2xpZW50LkVtYWlsVW5yZWFkQ291bnRSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9FeGNlbEltcG9ydFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRXhjZWxJbXBvcnRSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXROZXh0TnVtYmVyUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9HZXROZXh0TnVtYmVyUmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFsaXlldC5NYWxpeWV0RGV0YXlDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hbGl5ZXQuTWFsaXlldERldGF5Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXREZXRheVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXREZXRheVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFsaXlldC5NYWxpeWV0RGV0YXlUb3BsYW1Db2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hbGl5ZXQuTWFsaXlldERldGF5VG9wbGFtRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXREZXRheVRvcGxhbVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXREZXRheVRvcGxhbVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFsaXlldC5NYWxpeWV0VGFsZXBDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hbGl5ZXQuTWFsaXlldFRhbGVwRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXRUYWxlcFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYWxpeWV0Lk1hbGl5ZXRUYWxlcFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpbkZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpblJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUmVwb3J0aW5nLlJlcG9ydFJldHJpZXZlUmVzdWx0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLk1hbHplbWVMaXN0ZXNpQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UaWdlci5NYWx6ZW1lTGlzdGVzaUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuTWFsemVtZUxpc3Rlc2lSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuTWFsemVtZUxpc3Rlc2lTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlRpZ2VyRG9uZW1sZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlRpZ2VyRG9uZW1sZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlRpZ2VyRG9uZW1sZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuVGlnZXJEb25lbWxlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuVGlnZXJGaXJtYWxhckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuVGlnZXJGaXJtYWxhckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuVGlnZXJGaXJtYWxhclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UaWdlci5UaWdlckZpcm1hbGFyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UaWdlci5WYXJ5YW50TGlzdGVzaUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGlnZXIuVmFyeWFudExpc3Rlc2lGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlZhcnlhbnRMaXN0ZXNpUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RpZ2VyLlZhcnlhbnRMaXN0ZXNpU2VydmljZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vRGF0YUF1ZGl0TG9nL0RhdGFBdWRpdExvZ0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vRGF0YUF1ZGl0TG9nL0RhdGFBdWRpdExvZ0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0t1bGxhbmljaVJhcG9yRmlsdHJlbGVyaS9LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0t1bGxhbmljaVJhcG9yRmlsdHJlbGVyaS9LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9SYXBvcmxhci9SYXBvcmxhckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUmFwb3JsYXIvUmFwb3JsYXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1JvbGVQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9TZXJnZW4vU2VyZ2VuUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL0F1dGhlbnRpY2F0aW9uL0F1dGhvcml6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1Blcm1pc3Npb25DaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXNlclBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1JvbGVDaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXNlclJvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1NjcmlwdEluaXRpYWxpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9CYXNpY1Byb2dyZXNzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9CdWxrU2VydmljZUFjdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvRGlhbG9nVXRpbHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0VudW1TZWxlY3RGb3JtYXR0ZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0V4Y2VsRXhwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yQmFzZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvUHJvbXB0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9TZXJ2aWNlRWRpdG9yQmFzZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvU3RhdGljVGV4dEJsb2NrLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9MYW5ndWFnZVNlbGVjdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vU2lkZWJhclNlYXJjaC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vVGhlbWVTZWxlY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUGRmRXhwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnRIZWxwZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0UGFnZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1VzZXJQcmVmZXJlbmNlL1VzZXJMb2NhbFN0b3JhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9Vc2VyUHJlZmVyZW5jZS9Vc2VyUHJlZmVyZW5jZVN0b3JhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01hbGl5ZXQvTWFsaXlldERldGF5L01hbGl5ZXREZXRheURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFsaXlldC9NYWxpeWV0RGV0YXkvTWFsaXlldERldGF5R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFsaXlldC9NYWxpeWV0RGV0YXlUb3BsYW0vTWFsaXlldERldGF5VG9wbGFtRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYWxpeWV0L01hbGl5ZXREZXRheVRvcGxhbS9NYWxpeWV0RGV0YXlUb3BsYW1HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYWxpeWV0L01hbGl5ZXRUYWxlcC9NYWxpeWV0TWFsaXlldERldGF5RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYWxpeWV0L01hbGl5ZXRUYWxlcC9NYWxpeWV0TWFsaXlldERldGF5R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFsaXlldC9NYWxpeWV0VGFsZXAvTWFsaXlldFRhbGVwRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYWxpeWV0L01hbGl5ZXRUYWxlcC9NYWxpeWV0VGFsZXBHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1RpZ2VyRG9uZW1FZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9UaWdlckZpcm1hRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvVGlnZXIvTWFsemVtZUxpc3Rlc2kvTWFsemVtZUxpc3Rlc2lEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1RpZ2VyL01hbHplbWVMaXN0ZXNpL01hbHplbWVMaXN0ZXNpR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvVGlnZXIvVGlnZXJEb25lbWxlci9UaWdlckRvbmVtbGVyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9UaWdlci9UaWdlckRvbmVtbGVyL1RpZ2VyRG9uZW1sZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9UaWdlci9UaWdlckZpcm1hbGFyL1RpZ2VyRmlybWFsYXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1RpZ2VyL1RpZ2VyRmlybWFsYXIvVGlnZXJGaXJtYWxhckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1RpZ2VyL1ZhcnlhbnRMaXN0ZXNpL1ZhcnlhbnRMaXN0ZXNpRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9UaWdlci9WYXJ5YW50TGlzdGVzaS9WYXJ5YW50TGlzdGVzaUdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUEsSUFBVSxTQUFTLENBMENsQjtBQTFDRCxXQUFVLFNBQVM7SUFBQyxJQUFBLGNBQWMsQ0EwQ2pDO0lBMUNtQixXQUFBLGNBQWM7UUFZOUI7WUFBc0Msb0NBQXdCO1lBSTFELDBCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBdUJoQjtnQkFyQkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRztvQkFDekIsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFN0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO29CQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxD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QyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLHNCQUFzQixFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLHNCQUFzQixFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLDBCQUEwQixFQUFDLENBQUMsRUFBQyxFQUFDLHNCQUFzQixFQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQywwQkFBMEIsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyw0QkFBNEIsRUFBQyxDQUFDLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLHFCQUFxQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxlQUFlLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLHFCQUFxQixFQUFDLENBQUMsRUFBQyx1QkFBdUIsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FB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QUM7WUFDbEQsMENBQWEsR0FBdkIsY0FBNEIsT0FBTyxNQUFBLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUNoRCwwQ0FBYSxHQUF2QixjQUE0QixPQUFPLE1BQUEsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RCxnREFBbUIsR0FBN0IsY0FBa0MsT0FBTyxNQUFBLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNwRSwrQ0FBa0IsR0FBNUIsY0FBaUMsT0FBTyxNQUFBLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsdUNBQVUsR0FBcEIsY0FBeUIsT0FBTyxNQUFBLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFOdkQsa0JBQWtCO2dCQUQ5QixRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtlQUN2QixrQkFBa0IsQ0FXOUI7WUFBRCx5QkFBQztTQUFBLEFBWEQsQ0FBd0MsUUFBUSxDQUFDLFVBQVUsR0FXMUQ7UUFYWSx3QkFBa0IscUJBVzlCLENBQUE7SUFDTCxDQUFDLEVBZm1CLEtBQUssR0FBTCxlQUFLLEtBQUwsZUFBSyxRQWV4QjtBQUFELENBQUMsRUFmUyxTQUFTLEtBQVQsU0FBUyxRQWVsQiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGF0YUF1ZGl0TG9nRm9ybSB7XHJcbiAgICAgICAgTG9nVHlwZTogU2VyZW5pdHkuRW51bUVkaXRvcjtcclxuICAgICAgICBMb2dEYXRlOiBTZXJlbml0eS5EYXRlVGltZUVkaXRvcjtcclxuICAgICAgICBVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVGFibGVuYW1lOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgUmVjb3JkSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGaWVsZE5hbWU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBPbGRWYWx1ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE5ld1ZhbHVlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERhdGFBdWRpdExvZ0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkRhdGFBdWRpdExvZyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRGF0YUF1ZGl0TG9nRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRGF0YUF1ZGl0TG9nRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlVGltZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRGF0YUF1ZGl0TG9nRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdMb2dUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvZ0RhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcklkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhYmxlbmFtZScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWNvcmRJZCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWVsZE5hbWUnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnT2xkVmFsdWUnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3VmFsdWUnLCB3NFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBEYXRhQXVkaXRMb2dSb3cge1xyXG4gICAgICAgIExvZ0lkPzogbnVtYmVyO1xyXG4gICAgICAgIExvZ1R5cGU/OiBEYXRhQXVkaXRMb2dUeXBlO1xyXG4gICAgICAgIExvZ0RhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFRhYmxlbmFtZT86IHN0cmluZztcclxuICAgICAgICBSZWNvcmRJZD86IHN0cmluZztcclxuICAgICAgICBGaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgT2xkVmFsdWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3VmFsdWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRGF0YUF1ZGl0TG9nUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdMb2dJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5EYXRhQXVkaXRMb2cnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgTG9nSWQgPSBcIkxvZ0lkXCIsXHJcbiAgICAgICAgICAgIExvZ1R5cGUgPSBcIkxvZ1R5cGVcIixcclxuICAgICAgICAgICAgTG9nRGF0ZSA9IFwiTG9nRGF0ZVwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBUYWJsZW5hbWUgPSBcIlRhYmxlbmFtZVwiLFxyXG4gICAgICAgICAgICBSZWNvcmRJZCA9IFwiUmVjb3JkSWRcIixcclxuICAgICAgICAgICAgRmllbGROYW1lID0gXCJGaWVsZE5hbWVcIixcclxuICAgICAgICAgICAgT2xkVmFsdWUgPSBcIk9sZFZhbHVlXCIsXHJcbiAgICAgICAgICAgIE5ld1ZhbHVlID0gXCJOZXdWYWx1ZVwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlckRpc3BsYXlOYW1lID0gXCJVc2VyRGlzcGxheU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRGF0YUF1ZGl0TG9nU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vRGF0YUF1ZGl0TG9nJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8RGF0YUF1ZGl0TG9nUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPERhdGFBdWRpdExvZ1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0RhdGFBdWRpdExvZy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9EYXRhQXVkaXRMb2cvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkRhdGFBdWRpdExvZ1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgZW51bSBEYXRhQXVkaXRMb2dUeXBlIHtcclxuICAgICAgICBJbnNlcnQgPSAxLFxyXG4gICAgICAgIFVwZGF0ZSA9IDIsXHJcbiAgICAgICAgRGVsZXRlID0gM1xyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKERhdGFBdWRpdExvZ1R5cGUsICdFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24uRGF0YUF1ZGl0TG9nVHlwZScpO1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpRm9ybSB7XHJcbiAgICAgICAgVXNlcklkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgUmFwb3JsYXJJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIEt1bGxhbmljaUZpbHRyZXNpOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuVGV4dEFyZWFFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmFwb3JsYXJJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdLdWxsYW5pY2lGaWx0cmVzaScsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUmFwb3JsYXJJZD86IG51bWJlcjtcclxuICAgICAgICBLdWxsYW5pY2lGaWx0cmVzaT86IHN0cmluZztcclxuICAgICAgICBVc2VyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VyU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlclBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBVc2VyTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVc2VyVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlclVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlclVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlck1vYmlsZVBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VyVHdvRmFjdG9yQXV0aD86IG51bWJlcjtcclxuICAgICAgICBVc2VyVGlnZXJGaXJtYT86IHN0cmluZztcclxuICAgICAgICBVc2VyVGlnZXJEb25lbT86IHN0cmluZztcclxuICAgICAgICBSYXBvcmxhclJhcG9yS29kdT86IHN0cmluZztcclxuICAgICAgICBSYXBvcmxhclJhcG9yQWRpPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdLdWxsYW5pY2lGaWx0cmVzaSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUmFwb3JsYXJJZCA9IFwiUmFwb3JsYXJJZFwiLFxyXG4gICAgICAgICAgICBLdWxsYW5pY2lGaWx0cmVzaSA9IFwiS3VsbGFuaWNpRmlsdHJlc2lcIixcclxuICAgICAgICAgICAgVXNlclVzZXJuYW1lID0gXCJVc2VyVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlckRpc3BsYXlOYW1lID0gXCJVc2VyRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgVXNlckVtYWlsID0gXCJVc2VyRW1haWxcIixcclxuICAgICAgICAgICAgVXNlclNvdXJjZSA9IFwiVXNlclNvdXJjZVwiLFxyXG4gICAgICAgICAgICBVc2VyUGFzc3dvcmRIYXNoID0gXCJVc2VyUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFVzZXJQYXNzd29yZFNhbHQgPSBcIlVzZXJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgVXNlckxhc3REaXJlY3RvcnlVcGRhdGUgPSBcIlVzZXJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFVzZXJVc2VySW1hZ2UgPSBcIlVzZXJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgVXNlckluc2VydERhdGUgPSBcIlVzZXJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbnNlcnRVc2VySWQgPSBcIlVzZXJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlclVwZGF0ZURhdGUgPSBcIlVzZXJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVzZXJVcGRhdGVVc2VySWQgPSBcIlVzZXJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcklzQWN0aXZlID0gXCJVc2VySXNBY3RpdmVcIixcclxuICAgICAgICAgICAgVXNlck1vYmlsZVBob25lTnVtYmVyID0gXCJVc2VyTW9iaWxlUGhvbmVOdW1iZXJcIixcclxuICAgICAgICAgICAgVXNlck1vYmlsZVBob25lVmVyaWZpZWQgPSBcIlVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkXCIsXHJcbiAgICAgICAgICAgIFVzZXJUd29GYWN0b3JBdXRoID0gXCJVc2VyVHdvRmFjdG9yQXV0aFwiLFxyXG4gICAgICAgICAgICBVc2VyVGlnZXJGaXJtYSA9IFwiVXNlclRpZ2VyRmlybWFcIixcclxuICAgICAgICAgICAgVXNlclRpZ2VyRG9uZW0gPSBcIlVzZXJUaWdlckRvbmVtXCIsXHJcbiAgICAgICAgICAgIFJhcG9ybGFyUmFwb3JLb2R1ID0gXCJSYXBvcmxhclJhcG9yS29kdVwiLFxyXG4gICAgICAgICAgICBSYXBvcmxhclJhcG9yQWRpID0gXCJSYXBvcmxhclJhcG9yQWRpXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL0t1bGxhbmljaVJhcG9yRmlsdHJlbGVyaSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8S3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmkvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0t1bGxhbmljaVJhcG9yRmlsdHJlbGVyaS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0t1bGxhbmljaVJhcG9yRmlsdHJlbGVyaS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9LdWxsYW5pY2lSYXBvckZpbHRyZWxlcmkvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZD86IHN0cmluZztcclxuICAgICAgICBMYW5ndWFnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTGFuZ3VhZ2VOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxMYW5ndWFnZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8TGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlTmFtZSA9IFwiTGFuZ3VhZ2VOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSYXBvcmxhckZvcm0ge1xyXG4gICAgICAgIFJhcG9yS29kdTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJhcG9yQWRpOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJhcG9ybGFyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUmFwb3JsYXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJhcG9ybGFyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmFwb3JsYXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSYXBvcmxhckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUmFwb3JLb2R1JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhcG9yQWRpJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSYXBvcmxhclJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUmFwb3JLb2R1Pzogc3RyaW5nO1xyXG4gICAgICAgIFJhcG9yQWRpPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmFwb3JsYXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1JhcG9yQWRpJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJhcG9ybGFyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJhcG9ybGFyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSYXBvcmxhclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8UmFwb3JsYXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5SYXBvcmxhcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFJhcG9yS29kdSA9IFwiUmFwb3JLb2R1XCIsXHJcbiAgICAgICAgICAgIFJhcG9yQWRpID0gXCJSYXBvckFkaVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSYXBvcmxhclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JhcG9ybGFyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJhcG9ybGFyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmFwb3JsYXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UmFwb3JsYXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UmFwb3JsYXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUmFwb3JsYXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUmFwb3JsYXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUmFwb3JsYXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9SYXBvcmxhci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9SYXBvcmxhci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmFwb3JsYXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSb2xlS2V5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSb2xlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUm9sZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJvbGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvbGVOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvbGVLZXknLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgUm9sZVBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBSb2xlUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZVBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uSWQgPSBcIlJvbGVQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBSb2xlUm9sZU5hbWUgPSBcIlJvbGVSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUm93IHtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZUtleT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCIsXHJcbiAgICAgICAgICAgIFJvbGVLZXkgPSBcIlJvbGVLZXlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5Db25uZWN0aW9uIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkdlbmVyYXRlT3B0aW9ucyB7XHJcbiAgICAgICAgUm93PzogYm9vbGVhbjtcclxuICAgICAgICBTZXJ2aWNlPzogYm9vbGVhbjtcclxuICAgICAgICBVST86IGJvb2xlYW47XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkdlbmVyYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBDb25uZWN0aW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhYmxlPzogU2VyZ2VuVGFibGU7XHJcbiAgICAgICAgR2VuZXJhdGVPcHRpb25zPzogU2VyZ2VuR2VuZXJhdGVPcHRpb25zO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5MaXN0VGFibGVzUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBDb25uZWN0aW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTZXJnZW5TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9TZXJnZW4nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0Q29ubmVjdGlvbnMocmVxdWVzdDogU2VyZW5pdHkuU2VydmljZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNlcmdlbkNvbm5lY3Rpb24+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFRhYmxlcyhyZXF1ZXN0OiBTZXJnZW5MaXN0VGFibGVzUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8U2VyZ2VuVGFibGU+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gR2VuZXJhdGUocmVxdWVzdDogU2VyZ2VuR2VuZXJhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBMaXN0Q29ubmVjdGlvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1Nlcmdlbi9MaXN0Q29ubmVjdGlvbnNcIixcclxuICAgICAgICAgICAgTGlzdFRhYmxlcyA9IFwiQWRtaW5pc3RyYXRpb24vU2VyZ2VuL0xpc3RUYWJsZXNcIixcclxuICAgICAgICAgICAgR2VuZXJhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1Nlcmdlbi9HZW5lcmF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0Q29ubmVjdGlvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RUYWJsZXMnLCBcclxuICAgICAgICAgICAgJ0dlbmVyYXRlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+U2VyZ2VuU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5UYWJsZSB7XHJcbiAgICAgICAgVGFibGVuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElkZW50aWZpZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBTb3VyY2VMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgZW51bSBUd29GYWN0b3JBdXRoVHlwZSB7XHJcbiAgICAgICAgRW1haWwgPSAxLFxyXG4gICAgICAgIFNNUyA9IDJcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShUd29GYWN0b3JBdXRoVHlwZSwgJ0VfTWFsaXlldC5BZG1pbmlzdHJhdGlvbi5Ud29GYWN0b3JBdXRoVHlwZScpO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlckZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgTW9iaWxlUGhvbmVOdW1iZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNb2JpbGVQaG9uZVZlcmlmaWVkOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIFR3b0ZhY3RvckF1dGg6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgVXNlckltYWdlOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBTb3VyY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVXNlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnTW9iaWxlUGhvbmVOdW1iZXInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTW9iaWxlUGhvbmVWZXJpZmllZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdUd29GYWN0b3JBdXRoJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJJbWFnZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZENvbmZpcm0nLCB3NSxcclxuICAgICAgICAgICAgICAgICAgICAnU291cmNlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9iaWxlUGhvbmVOdW1iZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9iaWxlUGhvbmVWZXJpZmllZD86IGJvb2xlYW47XHJcbiAgICAgICAgVHdvRmFjdG9yQXV0aD86IFR3b0ZhY3RvckF1dGhUeXBlO1xyXG4gICAgICAgIFVzZXJJbWFnZT86IHN0cmluZztcclxuICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbXBlcnNvbmF0aW9uVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgVGlnZXJGaXJtYT86IHN0cmluZztcclxuICAgICAgICBUaWdlckRvbmVtPzogc3RyaW5nO1xyXG4gICAgICAgIFRpZ2VyRmlybWFBZGk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGlnZXJEb25lbU5vPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgTW9iaWxlUGhvbmVOdW1iZXIgPSBcIk1vYmlsZVBob25lTnVtYmVyXCIsXHJcbiAgICAgICAgICAgIE1vYmlsZVBob25lVmVyaWZpZWQgPSBcIk1vYmlsZVBob25lVmVyaWZpZWRcIixcclxuICAgICAgICAgICAgVHdvRmFjdG9yQXV0aCA9IFwiVHdvRmFjdG9yQXV0aFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcclxuICAgICAgICAgICAgSW1wZXJzb25hdGlvblRva2VuID0gXCJJbXBlcnNvbmF0aW9uVG9rZW5cIixcclxuICAgICAgICAgICAgVGlnZXJGaXJtYSA9IFwiVGlnZXJGaXJtYVwiLFxyXG4gICAgICAgICAgICBUaWdlckRvbmVtID0gXCJUaWdlckRvbmVtXCIsXHJcbiAgICAgICAgICAgIFRpZ2VyRmlybWFBZGkgPSBcIlRpZ2VyRmlybWFBZGlcIixcclxuICAgICAgICAgICAgVGlnZXJEb25lbU5vID0gXCJUaWdlckRvbmVtTm9cIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVuZGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlVuZGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5VbmRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBQcmVmZXJlbmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VSb3cge1xyXG4gICAgICAgIFVzZXJQcmVmZXJlbmNlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclByZWZlcmVuY2VJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0NvbW1vbi5Vc2VyUHJlZmVyZW5jZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VJZCA9IFwiVXNlclByZWZlcmVuY2VJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQcmVmZXJlbmNlVHlwZSA9IFwiUHJlZmVyZW5jZVR5cGVcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZSA9IFwiVmFsdWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQcmVmZXJlbmNlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQ29tbW9uL1VzZXJQcmVmZXJlbmNlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQcmVmZXJlbmNlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJDb21tb24vVXNlclByZWZlcmVuY2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJDb21tb24vVXNlclByZWZlcmVuY2UvUmV0cmlldmVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQcmVmZXJlbmNlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eS5FbWFpbENsaWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtYWlsQXR0YWNobWVudCB7XHJcbiAgICAgICAgS2V5PzogbnVtYmVyO1xyXG4gICAgICAgIEZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIERvd25sb2FkVXJsPzogc3RyaW5nO1xyXG4gICAgICAgIFNpemU/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxBdHRhY2htZW50UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBGb2xkZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5pcXVlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eS5FbWFpbENsaWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZUZvcm0ge1xyXG4gICAgICAgIFN1YmplY3Q6IFN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBdHRhY2htZW50czogTXVsdGlwbGVJbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBSZXBseVRvRm9sZGVyOiBTdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwbHlUb1VuaXF1ZUlkOiBTdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NlcmVuaXR5LkVtYWlsQ2xpZW50LkVtYWlsQ29tcG9zZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1haWxDb21wb3NlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRW1haWxDb21wb3NlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gTXVsdGlwbGVJbWFnZVVwbG9hZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShFbWFpbENvbXBvc2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YmplY3QnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXR0YWNobWVudHMnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwbHlUb0ZvbGRlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBseVRvVW5pcXVlSWQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxDb21wb3NlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUbz86IHN0cmluZztcclxuICAgICAgICBDYz86IHN0cmluZztcclxuICAgICAgICBCY2M/OiBzdHJpbmc7XHJcbiAgICAgICAgU3ViamVjdD86IHN0cmluZztcclxuICAgICAgICBCb2R5SHRtbD86IHN0cmluZztcclxuICAgICAgICBBdHRhY2htZW50cz86IHN0cmluZztcclxuICAgICAgICBSZXBseVRvRm9sZGVyPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGx5VG9VbmlxdWVJZD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbERlbGV0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRm9sZGVyPzogc3RyaW5nO1xyXG4gICAgICAgIFVuaXF1ZUlkcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eS5FbWFpbENsaWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtYWlsRm9sZGVyIHtcclxuICAgICAgICBLaW5kPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRnVsbE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5yZWFkQ291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgU3ViRm9sZGVycz86IEVtYWlsRm9sZGVyW107XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxJdGVtIHtcclxuICAgICAgICBVbmlxdWVJZD86IG51bWJlcjtcclxuICAgICAgICBTdWJqZWN0Pzogc3RyaW5nO1xyXG4gICAgICAgIERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRnJvbT86IHN0cmluZztcclxuICAgICAgICBUbz86IHN0cmluZztcclxuICAgICAgICBDYz86IHN0cmluZztcclxuICAgICAgICBTZWVuPzogYm9vbGVhbjtcclxuICAgICAgICBJbXBvcnRhbnQ/OiBib29sZWFuO1xyXG4gICAgICAgIERlbGV0ZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIEhhc0F0dGFjaG1lbnRzPzogYm9vbGVhbjtcclxuICAgICAgICBTaXplPzogbnVtYmVyO1xyXG4gICAgICAgIEh0bWxCb2R5Pzogc3RyaW5nO1xyXG4gICAgICAgIEF0dGFjaG1lbnRzPzogRW1haWxBdHRhY2htZW50W107XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxMaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBGb2xkZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxMb2dpbkluZm8ge1xyXG4gICAgICAgIEltYXBIb3N0Pzogc3RyaW5nO1xyXG4gICAgICAgIEltYXBQb3J0PzogbnVtYmVyO1xyXG4gICAgICAgIEltYXBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBJbWFwUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgU210cEhvc3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgU210cFBvcnQ/OiBudW1iZXI7XHJcbiAgICAgICAgU210cFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNtdHBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBMb2dpbkluZm8/OiBFbWFpbExvZ2luSW5mbztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbE1vdmVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUZvbGRlcj86IHN0cmluZztcclxuICAgICAgICBVbmlxdWVJZHM/OiBudW1iZXJbXTtcclxuICAgICAgICBUYXJnZXRGb2xkZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1haWxSZXBseVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRm9sZGVyPzogc3RyaW5nO1xyXG4gICAgICAgIFVuaXF1ZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJlcGx5VG9BbGw/OiBib29sZWFuO1xyXG4gICAgICAgIEZvcndhcmQ/OiBib29sZWFuO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eS5FbWFpbENsaWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtYWlsUmVwbHlSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgU3ViamVjdD86IHN0cmluZztcclxuICAgICAgICBUbz86IHN0cmluZztcclxuICAgICAgICBDYz86IHN0cmluZztcclxuICAgICAgICBSZXBseUJvZHk/OiBzdHJpbmc7XHJcbiAgICAgICAgQXR0YWNobWVudHM/OiBFbWFpbEF0dGFjaG1lbnRbXTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFJldHJpZXZlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBGb2xkZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5pcXVlSWQ/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuaXR5LkVtYWlsQ2xpZW50IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1haWxTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vRW1haWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMb2dpbihyZXF1ZXN0OiBFbWFpbExvZ2luUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBTaWdub3V0KHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVucmVhZENvdW50KHJlcXVlc3Q6IEVtYWlsVW5yZWFkQ291bnRSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IEVtYWlsVW5yZWFkQ291bnRSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFN1Z2dlc3QocmVxdWVzdDogRW1haWxTdWdnZXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBFbWFpbFN1Z2dlc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJlcGx5KHJlcXVlc3Q6IEVtYWlsUmVwbHlSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IEVtYWlsUmVwbHlSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENvbXBvc2UocmVxdWVzdDogRW1haWxDb21wb3NlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGVNZXNzYWdlcyhyZXF1ZXN0OiBFbWFpbERlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVG9nZ2xlU2VlbihyZXF1ZXN0OiBFbWFpbFRvZ2dsZVNlZW5SZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE1vdmUocmVxdWVzdDogRW1haWxNb3ZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0TWVzc2FnZXMocmVxdWVzdDogRW1haWxMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1haWxJdGVtPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RGb2xkZXJzKHJlcXVlc3Q6IFNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxFbWFpbEZvbGRlcj4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZU1lc3NhZ2UocmVxdWVzdDogRW1haWxSZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxFbWFpbEl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIExvZ2luID0gXCJDb21tb24vRW1haWwvTG9naW5cIixcclxuICAgICAgICAgICAgU2lnbm91dCA9IFwiQ29tbW9uL0VtYWlsL1NpZ25vdXRcIixcclxuICAgICAgICAgICAgVW5yZWFkQ291bnQgPSBcIkNvbW1vbi9FbWFpbC9VbnJlYWRDb3VudFwiLFxyXG4gICAgICAgICAgICBTdWdnZXN0ID0gXCJDb21tb24vRW1haWwvU3VnZ2VzdFwiLFxyXG4gICAgICAgICAgICBSZXBseSA9IFwiQ29tbW9uL0VtYWlsL1JlcGx5XCIsXHJcbiAgICAgICAgICAgIENvbXBvc2UgPSBcIkNvbW1vbi9FbWFpbC9Db21wb3NlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZU1lc3NhZ2VzID0gXCJDb21tb24vRW1haWwvRGVsZXRlTWVzc2FnZXNcIixcclxuICAgICAgICAgICAgVG9nZ2xlU2VlbiA9IFwiQ29tbW9uL0VtYWlsL1RvZ2dsZVNlZW5cIixcclxuICAgICAgICAgICAgTW92ZSA9IFwiQ29tbW9uL0VtYWlsL01vdmVcIixcclxuICAgICAgICAgICAgTGlzdE1lc3NhZ2VzID0gXCJDb21tb24vRW1haWwvTGlzdE1lc3NhZ2VzXCIsXHJcbiAgICAgICAgICAgIExpc3RGb2xkZXJzID0gXCJDb21tb24vRW1haWwvTGlzdEZvbGRlcnNcIixcclxuICAgICAgICAgICAgUmV0cmlldmVNZXNzYWdlID0gXCJDb21tb24vRW1haWwvUmV0cmlldmVNZXNzYWdlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0xvZ2luJywgXHJcbiAgICAgICAgICAgICdTaWdub3V0JywgXHJcbiAgICAgICAgICAgICdVbnJlYWRDb3VudCcsIFxyXG4gICAgICAgICAgICAnU3VnZ2VzdCcsIFxyXG4gICAgICAgICAgICAnUmVwbHknLCBcclxuICAgICAgICAgICAgJ0NvbXBvc2UnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZU1lc3NhZ2VzJywgXHJcbiAgICAgICAgICAgICdUb2dnbGVTZWVuJywgXHJcbiAgICAgICAgICAgICdNb3ZlJywgXHJcbiAgICAgICAgICAgICdMaXN0TWVzc2FnZXMnLCBcclxuICAgICAgICAgICAgJ0xpc3RGb2xkZXJzJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZU1lc3NhZ2UnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5FbWFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFN1Z2dlc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIENvbnRhaW5zVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFN1Z2dlc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgU3VnZ2VzdGlvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFRvZ2dsZVNlZW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEZvbGRlcj86IHN0cmluZztcclxuICAgICAgICBVbmlxdWVJZHM/OiBudW1iZXJbXTtcclxuICAgICAgICBTZWVuPzogYm9vbGVhbjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFVucmVhZENvdW50UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5pdHkuRW1haWxDbGllbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbWFpbFVucmVhZENvdW50UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIFVucmVhZENvdW50PzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEltcG9ydFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRmlsZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEltcG9ydFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlIHtcclxuICAgICAgICBJbnNlcnRlZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVkPzogbnVtYmVyO1xyXG4gICAgICAgIEVycm9yTGlzdD86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2V0TmV4dE51bWJlclJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUHJlZml4Pzogc3RyaW5nO1xyXG4gICAgICAgIExlbmd0aD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdldE5leHROdW1iZXJSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgTnVtYmVyPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcmlhbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYWxpeWV0RGV0YXlGb3JtIHtcclxuICAgICAgICBNYWxpeWV0VGFsZXBJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBTZXZpeWU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU2F0aXJUaXBpOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVHVydTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEtvZHU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBY2lrbGFtYXNpOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVmFyeWFudEtvZHU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBWYXJ5YW50QWNpa2xhbWFzaTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE1pa3RhcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBCaXJpbTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFZhcmlhbnRSZWY6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQWRldDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBCaXJpbUZpeWF0OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFR1dGFyOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0RGV0YXlGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNYWxpeWV0Lk1hbGl5ZXREZXRheSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWFsaXlldERldGF5Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTWFsaXlldERldGF5Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTWFsaXlldERldGF5Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdNYWxpeWV0VGFsZXBJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZXZpeWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2F0aXJUaXBpJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1R1cnUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnS29kdScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2lrbGFtYXNpJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ZhcnlhbnRLb2R1JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ZhcnlhbnRBY2lrbGFtYXNpJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pa3RhcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdCaXJpbScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdWYXJpYW50UmVmJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZXQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQmlyaW1GaXlhdCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdXRhcicsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYWxpeWV0RGV0YXlSb3cge1xyXG4gICAgICAgIE1hbGl5ZXREZXRheUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcElkPzogbnVtYmVyO1xyXG4gICAgICAgIFNldml5ZT86IG51bWJlcjtcclxuICAgICAgICBTYXRpclRpcGk/OiBzdHJpbmc7XHJcbiAgICAgICAgVHVydT86IHN0cmluZztcclxuICAgICAgICBLb2R1Pzogc3RyaW5nO1xyXG4gICAgICAgIEFjaWtsYW1hc2k/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFyeWFudEtvZHU/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFyeWFudEFjaWtsYW1hc2k/OiBzdHJpbmc7XHJcbiAgICAgICAgTWlrdGFyPzogbnVtYmVyO1xyXG4gICAgICAgIEJpcmltPzogc3RyaW5nO1xyXG4gICAgICAgIFZhcmlhbnRSZWY/OiBudW1iZXI7XHJcbiAgICAgICAgQWRldD86IG51bWJlcjtcclxuICAgICAgICBCaXJpbUZpeWF0PzogbnVtYmVyO1xyXG4gICAgICAgIFR1dGFyPzogbnVtYmVyO1xyXG4gICAgICAgIEZpc1R1cnU/OiBzdHJpbmc7XHJcbiAgICAgICAgRmlzTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgRmlzVGFyaWg/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFyZW50UmVmPzogbnVtYmVyO1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBNYWxpeWV0VGFsZXBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcFRpZ2VyRmlybWE/OiBzdHJpbmc7XHJcbiAgICAgICAgTWFsaXlldFRhbGVwVGlnZXJEb25lbT86IHN0cmluZztcclxuICAgICAgICBNYWxpeWV0VGFsZXBJdGVtUmVmPzogbnVtYmVyO1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcFZhcmlhbnRSZWY/OiBudW1iZXI7XHJcbiAgICAgICAgTWFsaXlldFRhbGVwQWRldD86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1hbGl5ZXREZXRheVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVmFyaWFudFJlZic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdBY2lrbGFtYXNpJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01hbGl5ZXQuTWFsaXlldERldGF5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ01hbGl5ZXQuTWFsaXlldERldGF5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxNYWxpeWV0RGV0YXlSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPE1hbGl5ZXREZXRheVJvdz4oJ01hbGl5ZXQuTWFsaXlldERldGF5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNYWxpeWV0RGV0YXlJZCA9IFwiTWFsaXlldERldGF5SWRcIixcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwSWQgPSBcIk1hbGl5ZXRUYWxlcElkXCIsXHJcbiAgICAgICAgICAgIFNldml5ZSA9IFwiU2V2aXllXCIsXHJcbiAgICAgICAgICAgIFNhdGlyVGlwaSA9IFwiU2F0aXJUaXBpXCIsXHJcbiAgICAgICAgICAgIFR1cnUgPSBcIlR1cnVcIixcclxuICAgICAgICAgICAgS29kdSA9IFwiS29kdVwiLFxyXG4gICAgICAgICAgICBBY2lrbGFtYXNpID0gXCJBY2lrbGFtYXNpXCIsXHJcbiAgICAgICAgICAgIFZhcnlhbnRLb2R1ID0gXCJWYXJ5YW50S29kdVwiLFxyXG4gICAgICAgICAgICBWYXJ5YW50QWNpa2xhbWFzaSA9IFwiVmFyeWFudEFjaWtsYW1hc2lcIixcclxuICAgICAgICAgICAgTWlrdGFyID0gXCJNaWt0YXJcIixcclxuICAgICAgICAgICAgQmlyaW0gPSBcIkJpcmltXCIsXHJcbiAgICAgICAgICAgIFZhcmlhbnRSZWYgPSBcIlZhcmlhbnRSZWZcIixcclxuICAgICAgICAgICAgQWRldCA9IFwiQWRldFwiLFxyXG4gICAgICAgICAgICBCaXJpbUZpeWF0ID0gXCJCaXJpbUZpeWF0XCIsXHJcbiAgICAgICAgICAgIFR1dGFyID0gXCJUdXRhclwiLFxyXG4gICAgICAgICAgICBGaXNUdXJ1ID0gXCJGaXNUdXJ1XCIsXHJcbiAgICAgICAgICAgIEZpc05vID0gXCJGaXNOb1wiLFxyXG4gICAgICAgICAgICBGaXNUYXJpaCA9IFwiRmlzVGFyaWhcIixcclxuICAgICAgICAgICAgUGFyZW50UmVmID0gXCJQYXJlbnRSZWZcIixcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwVXNlcklkID0gXCJNYWxpeWV0VGFsZXBVc2VySWRcIixcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwSW5zZXJ0RGF0ZSA9IFwiTWFsaXlldFRhbGVwSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBNYWxpeWV0VGFsZXBUaWdlckZpcm1hID0gXCJNYWxpeWV0VGFsZXBUaWdlckZpcm1hXCIsXHJcbiAgICAgICAgICAgIE1hbGl5ZXRUYWxlcFRpZ2VyRG9uZW0gPSBcIk1hbGl5ZXRUYWxlcFRpZ2VyRG9uZW1cIixcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwSXRlbVJlZiA9IFwiTWFsaXlldFRhbGVwSXRlbVJlZlwiLFxyXG4gICAgICAgICAgICBNYWxpeWV0VGFsZXBWYXJpYW50UmVmID0gXCJNYWxpeWV0VGFsZXBWYXJpYW50UmVmXCIsXHJcbiAgICAgICAgICAgIE1hbGl5ZXRUYWxlcEFkZXQgPSBcIk1hbGl5ZXRUYWxlcEFkZXRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNYWxpeWV0RGV0YXlTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNYWxpeWV0L01hbGl5ZXREZXRheSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNYWxpeWV0RGV0YXlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNYWxpeWV0RGV0YXlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TWFsaXlldERldGF5Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE1hbGl5ZXREZXRheVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNYWxpeWV0L01hbGl5ZXREZXRheS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJNYWxpeWV0L01hbGl5ZXREZXRheS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNYWxpeWV0L01hbGl5ZXREZXRheS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1hbGl5ZXQvTWFsaXlldERldGF5L1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk1hbGl5ZXQvTWFsaXlldERldGF5L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5NYWxpeWV0RGV0YXlTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYWxpeWV0RGV0YXlUb3BsYW1Gb3JtIHtcclxuICAgICAgICBCaXJpbUZpeWF0OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFR1dGFyOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0RGV0YXlUb3BsYW1Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNYWxpeWV0Lk1hbGl5ZXREZXRheVRvcGxhbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWFsaXlldERldGF5VG9wbGFtRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTWFsaXlldERldGF5VG9wbGFtRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1hbGl5ZXREZXRheVRvcGxhbUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQmlyaW1GaXlhdCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdXRhcicsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cge1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcElkPzogbnVtYmVyO1xyXG4gICAgICAgIEJpcmltRml5YXQ/OiBudW1iZXI7XHJcbiAgICAgICAgVHV0YXI/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ01hbGl5ZXRUYWxlcElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01hbGl5ZXQuTWFsaXlldERldGF5VG9wbGFtJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwSWQgPSBcIk1hbGl5ZXRUYWxlcElkXCIsXHJcbiAgICAgICAgICAgIEJpcmltRml5YXQgPSBcIkJpcmltRml5YXRcIixcclxuICAgICAgICAgICAgVHV0YXIgPSBcIlR1dGFyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTWFsaXlldERldGF5VG9wbGFtU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTWFsaXlldC9NYWxpeWV0RGV0YXlUb3BsYW0nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TWFsaXlldERldGF5VG9wbGFtUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TWFsaXlldERldGF5VG9wbGFtUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE1hbGl5ZXREZXRheVRvcGxhbVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNYWxpeWV0RGV0YXlUb3BsYW1Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTWFsaXlldC9NYWxpeWV0RGV0YXlUb3BsYW0vQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTWFsaXlldC9NYWxpeWV0RGV0YXlUb3BsYW0vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTWFsaXlldC9NYWxpeWV0RGV0YXlUb3BsYW0vRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNYWxpeWV0L01hbGl5ZXREZXRheVRvcGxhbS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJNYWxpeWV0L01hbGl5ZXREZXRheVRvcGxhbS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TWFsaXlldERldGF5VG9wbGFtU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuTWFsaXlldCB7XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWFsaXlldFRhbGVwRm9ybSB7XHJcbiAgICAgICAgSXRlbVJlZjogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFZhcmlhbnRSZWY6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBBZGV0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0VGFsZXBGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNYWxpeWV0Lk1hbGl5ZXRUYWxlcCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWFsaXlldFRhbGVwRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTWFsaXlldFRhbGVwRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTWFsaXlldFRhbGVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtUmVmJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ZhcmlhbnRSZWYnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWRldCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNYWxpeWV0VGFsZXBSb3cge1xyXG4gICAgICAgIE1hbGl5ZXRUYWxlcElkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFRpZ2VyRmlybWE/OiBzdHJpbmc7XHJcbiAgICAgICAgVGlnZXJEb25lbT86IHN0cmluZztcclxuICAgICAgICBJdGVtUmVmPzogbnVtYmVyO1xyXG4gICAgICAgIFZhcmlhbnRSZWY/OiBudW1iZXI7XHJcbiAgICAgICAgQWRldD86IG51bWJlcjtcclxuICAgICAgICBVc2VyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VyU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlclBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBVc2VyTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVc2VyVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlclVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlclVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlck1vYmlsZVBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VyVHdvRmFjdG9yQXV0aD86IG51bWJlcjtcclxuICAgICAgICBVc2VyVGlnZXJGaXJtYT86IHN0cmluZztcclxuICAgICAgICBVc2VyVGlnZXJEb25lbT86IHN0cmluZztcclxuICAgICAgICBJdGVtTmFtZT86IHN0cmluZztcclxuICAgICAgICBWYXJpYW50TmFtZT86IHN0cmluZztcclxuICAgICAgICBCaXJpbUZpeWF0PzogbnVtYmVyO1xyXG4gICAgICAgIFR1dGFyPzogbnVtYmVyO1xyXG4gICAgICAgIE1hbGl5ZXREZXRheWxhcmk/OiBudW1iZXJbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1hbGl5ZXRUYWxlcFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTWFsaXlldFRhbGVwSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGlnZXJGaXJtYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNYWxpeWV0Lk1hbGl5ZXRUYWxlcCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdNYWxpeWV0Lk1hbGl5ZXRUYWxlcCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TWFsaXlldFRhbGVwUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxNYWxpeWV0VGFsZXBSb3c+KCdNYWxpeWV0Lk1hbGl5ZXRUYWxlcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgTWFsaXlldFRhbGVwSWQgPSBcIk1hbGl5ZXRUYWxlcElkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVGlnZXJGaXJtYSA9IFwiVGlnZXJGaXJtYVwiLFxyXG4gICAgICAgICAgICBUaWdlckRvbmVtID0gXCJUaWdlckRvbmVtXCIsXHJcbiAgICAgICAgICAgIEl0ZW1SZWYgPSBcIkl0ZW1SZWZcIixcclxuICAgICAgICAgICAgVmFyaWFudFJlZiA9IFwiVmFyaWFudFJlZlwiLFxyXG4gICAgICAgICAgICBBZGV0ID0gXCJBZGV0XCIsXHJcbiAgICAgICAgICAgIFVzZXJVc2VybmFtZSA9IFwiVXNlclVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXJEaXNwbGF5TmFtZSA9IFwiVXNlckRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXJFbWFpbCA9IFwiVXNlckVtYWlsXCIsXHJcbiAgICAgICAgICAgIFVzZXJTb3VyY2UgPSBcIlVzZXJTb3VyY2VcIixcclxuICAgICAgICAgICAgVXNlclBhc3N3b3JkSGFzaCA9IFwiVXNlclBhc3N3b3JkSGFzaFwiLFxyXG4gICAgICAgICAgICBVc2VyUGFzc3dvcmRTYWx0ID0gXCJVc2VyUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIFVzZXJMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJVc2VyTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBVc2VyVXNlckltYWdlID0gXCJVc2VyVXNlckltYWdlXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbnNlcnREYXRlID0gXCJVc2VySW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVc2VySW5zZXJ0VXNlcklkID0gXCJVc2VySW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJVcGRhdGVEYXRlID0gXCJVc2VyVXBkYXRlRGF0ZVwiLFxyXG4gICAgICAgICAgICBVc2VyVXBkYXRlVXNlcklkID0gXCJVc2VyVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJc0FjdGl2ZSA9IFwiVXNlcklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFVzZXJNb2JpbGVQaG9uZU51bWJlciA9IFwiVXNlck1vYmlsZVBob25lTnVtYmVyXCIsXHJcbiAgICAgICAgICAgIFVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkID0gXCJVc2VyTW9iaWxlUGhvbmVWZXJpZmllZFwiLFxyXG4gICAgICAgICAgICBVc2VyVHdvRmFjdG9yQXV0aCA9IFwiVXNlclR3b0ZhY3RvckF1dGhcIixcclxuICAgICAgICAgICAgVXNlclRpZ2VyRmlybWEgPSBcIlVzZXJUaWdlckZpcm1hXCIsXHJcbiAgICAgICAgICAgIFVzZXJUaWdlckRvbmVtID0gXCJVc2VyVGlnZXJEb25lbVwiLFxyXG4gICAgICAgICAgICBJdGVtTmFtZSA9IFwiSXRlbU5hbWVcIixcclxuICAgICAgICAgICAgVmFyaWFudE5hbWUgPSBcIlZhcmlhbnROYW1lXCIsXHJcbiAgICAgICAgICAgIEJpcmltRml5YXQgPSBcIkJpcmltRml5YXRcIixcclxuICAgICAgICAgICAgVHV0YXIgPSBcIlR1dGFyXCIsXHJcbiAgICAgICAgICAgIE1hbGl5ZXREZXRheWxhcmkgPSBcIk1hbGl5ZXREZXRheWxhcmlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNYWxpeWV0VGFsZXBTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNYWxpeWV0L01hbGl5ZXRUYWxlcCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNYWxpeWV0VGFsZXBSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNYWxpeWV0VGFsZXBSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TWFsaXlldFRhbGVwUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPE1hbGl5ZXRUYWxlcFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJNYWxpeWV0L01hbGl5ZXRUYWxlcC9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJNYWxpeWV0L01hbGl5ZXRUYWxlcC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJNYWxpeWV0L01hbGl5ZXRUYWxlcC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1hbGl5ZXQvTWFsaXlldFRhbGVwL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIk1hbGl5ZXQvTWFsaXlldFRhbGVwL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5NYWxpeWV0VGFsZXBTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFRpZ2VyRmlybWE6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBUaWdlckRvbmVtOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuTG9va3VwRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExvZ2luRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaWdlckZpcm1hJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpZ2VyRG9uZW0nLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFRpZ2VyRmlybWE/OiBzdHJpbmc7XHJcbiAgICAgICAgVGlnZXJEb25lbT86IHN0cmluZztcclxuICAgICAgICBUd29GYWN0b3JHdWlkPzogc3RyaW5nO1xyXG4gICAgICAgIFR3b0ZhY3RvckNvZGU/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbml0eS5SZXBvcnRpbmcge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnRSZXRyaWV2ZVJlc3VsdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgSXNFeHRlcm5hbFJlcG9ydD86IGJvb2xlYW47XHJcbiAgICAgICAgUmVwb3J0S2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIFByb3BlcnRpZXM/OiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW1bXTtcclxuICAgICAgICBJbml0aWFsU2V0dGluZ3M/OiBhbnk7XHJcbiAgICAgICAgSXNEYXRhT25seVJlcG9ydD86IGJvb2xlYW47XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgICAgICBUaWdlckZpcm1hPzogc3RyaW5nO1xyXG4gICAgICAgIFRpZ2VyRG9uZW0/OiBzdHJpbmc7XHJcbiAgICAgICAgVGlnZXJGaXJtYUFkaT86IHN0cmluZztcclxuICAgICAgICBUaWdlckRvbmVtQWRpPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRleHRzIHtcclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBEYiB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRGF0YUF1ZGl0TG9nIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaWVsZE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTG9nSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmV3VmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPbGRWYWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlY29yZElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFibGVuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLdWxsYW5pY2lGaWx0cmVzaTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJhcG9ybGFySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSYXBvcmxhclJhcG9yQWRpOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmFwb3JsYXJSYXBvcktvZHU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyTGFzdERpcmVjdG9yeVVwZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJNb2JpbGVQaG9uZU51bWJlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclRpZ2VyRG9uZW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyVGlnZXJGaXJtYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJUd29GYWN0b3JBdXRoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmFwb3JsYXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmFwb3JBZGk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSYXBvcktvZHU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbXBlcnNvbmF0aW9uVG9rZW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW9iaWxlUGhvbmVOdW1iZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2JpbGVQaG9uZVZlcmlmaWVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaWdlckRvbmVtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGlnZXJEb25lbU5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGlnZXJGaXJtYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpZ2VyRmlybWFBZGk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUd29GYWN0b3JBdXRoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnRlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ29tbW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZWZlcmVuY2VUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclByZWZlcmVuY2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNYWxpeWV0IHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNYWxpeWV0RGV0YXkge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjaWtsYW1hc2k6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGV0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlyaW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJpbUZpeWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlzTm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaXNUYXJpaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZpc1R1cnU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLb2R1OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFsaXlldERldGF5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWxpeWV0VGFsZXBBZGV0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFsaXlldFRhbGVwSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWxpeWV0VGFsZXBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFsaXlldFRhbGVwSXRlbVJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1hbGl5ZXRUYWxlcFRpZ2VyRG9uZW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWxpeWV0VGFsZXBUaWdlckZpcm1hOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFsaXlldFRhbGVwVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFsaXlldFRhbGVwVmFyaWFudFJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1pa3Rhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhcmVudFJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdGlyVGlwaTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNldml5ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFR1cnU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUdXRhcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhcmlhbnRSZWY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWYXJ5YW50QWNpa2xhbWFzaTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhcnlhbnRLb2R1OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNYWxpeWV0RGV0YXlUb3BsYW0ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpcmltRml5YXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWxpeWV0VGFsZXBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFR1dGFyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNYWxpeWV0VGFsZXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJpbUZpeWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbVJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1hbGl5ZXREZXRheWxhcmk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWxpeWV0VGFsZXBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpZ2VyRG9uZW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaWdlckZpcm1hOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVHV0YXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyTGFzdERpcmVjdG9yeVVwZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJNb2JpbGVQaG9uZU51bWJlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJNb2JpbGVQaG9uZVZlcmlmaWVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclRpZ2VyRG9uZW06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyVGlnZXJGaXJtYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJUd29GYWN0b3JBdXRoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhcmlhbnROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmFyaWFudFJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVGlnZXIge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIE1hbHplbWVMaXN0ZXNpIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJdGVtc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1zQ2FyZHR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJdGVtc0NhcmR0eXBlVGlwaTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1zQ29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1zTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1zUHJvZHVjZXJjb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbXNTcGVjb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbXNTdGdycGNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJdG11bml0YTJLYXRzYXlpOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRtdW5pdGEzS2F0c2F5aTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2ljYWxyZWY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0c2V0ZkNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0c2V0Zk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0c2V0bENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0c2V0bE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRpZ2VyRG9uZW1sZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJlZ2RhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbmRkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlybWFEb25lbVN0cjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZpcm1ucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZXkyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5Mzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpY2FscmVmOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJsb2NhbGN0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVycmVwY3Vycjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVGlnZXJGaXJtYWxhciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0ZWludjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY29mZmljZWNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RhcmVhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWR2YW5jZWRwcm9kdWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja3VwZWJvb2tzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFna3VybnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWdkYXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWdtb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ250cnljb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uc2NvZGVyZWY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250cmFjdGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250cmFjdGRlc2M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250cmFjdG51bWJlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRyYWN0dHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvdW50b2ZsZWc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3BhY2hhbWJucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYWNpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGFjbnRyeWNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGFjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3BhZGlzdHJpY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGFkb29ybnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGFlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYWV4dGVuc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYWZheG5yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3BhaWR0Y25vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3Bha2RzcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGFuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3Bhb2NjdXBhdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3Bhcm9hZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXN0cmVldDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXN1cm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGF0YXhucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXRheG9mZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXRja246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcGF0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENwYXVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3BhemlwY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN0YWJsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERibmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlZHVjdGxpbWl0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlyZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzdHJpY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEbmNuc3RsZW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEb29ybnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFYXJjZW50ZGVmYWRkcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVhcmNlbnRwYXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRWFyY2VudHNlbmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFYXJjZW50dXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVib29rY29udHR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFYm9va2N1cnJ0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRWJvb2tzdGFydGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFaW52Y29udHR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFaW52Y3VzdG9tOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRWludm9pY2VpZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVpbnZvaWNldHlwc2drOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxhZGRyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZXJlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVyaWR0Y25vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZXJzdXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW11dGVudGRlZmFkZHI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXV0ZW50cGFzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtdXRlbnRzZW5kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW11dGVudHVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYXg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYXhlbWFpbGFkZHI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYXh1c2Vya2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmF4dXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaXJtZW1haWxhZGRyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlybWV1dmF0bnVtYmVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlybWxhbmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGaXJtcmVwY3Vycjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZpcm10eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmlybXl0bHN0YXR1czogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdldGNwYWZyb21kaXY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIYXNodmVyczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEludHNhbGVzYWRkcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzZWJvb2trZXB0YnlmaXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXN5bW1jb250cmFjdG1hZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBKZ2NvbXBhbnlucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEpnaHJmaXJtY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEpncGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBKZ3BlcmlvZG5yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSmdzZXJ2ZXJ1cmw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBKZ3VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdGNvbnRyb2xubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3RnbG9ibGluZW5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdGpvdXJuYWxubzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExpcXVpZGF0ZWRmaXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGlxdWlkYXRpbmdkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGlxdWlkYXRpb250eXA6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2NhbGNhbGRyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTG9jYWxjdHlwOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTG9naWNhbHJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ29pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvbmdwZXJpb2RzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFqdmVyc25yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWVyc2lzbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNaW52ZXJzbnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2JmaXJtYWxpYXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2JwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vYnVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZHRpbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYWNlY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQW5kTnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9mZmljYWx0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZ2NoYXJ0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFyb2xlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFyb2xlMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3NpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkdGF4ZGVjbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkdGF4ZGVjbDI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RsYWJlbGNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0bGFiZWxjb2RlZGVzcDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2ZpbGVpZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB0aW1lc3RhbXBob3N0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHRpbWVzdGFtcHBhc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdGltZXN0YW1wcG9ydDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB0aW1lc3RhbXB1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVsdmVyc25yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9hZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3Rvcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VybnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZW5kZXJsYWJlbGNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZW5kZXJsYWJlbGNvZGVkZXNwOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2VwZXhjaHRhYmxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hhYWxnb3JpdGhtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hwYWduY29kOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2l0ZWlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3JjY3JpdGVyaWE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZWNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZW5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdHJlZXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheG9mZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheG9mZmNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhvZmZzdGF0ZWNkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4b2Zmc3RhdGVubTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheHBheWVyY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheHBheWVybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRjZWxsYXBwaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUY2VsbGFwcHB3OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGltZXN0YW1wYXBwcHRoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGltZXN0YW1wcGFzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpbWVzdGFtcHBvcnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaW1lc3RhbXBzZXJ2ZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaW1lc3RhbXB1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUcmFkZXJlZ2lzbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VjaGFuZ2Vsb2c6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2Vjb21tb25wYXJhbTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZWVhcmNoaXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlZWJvb2s6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VlZGVzcGF0Y2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VlcHJvZHVjZXJyZWM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VldHJhZGVzbWFuaW52OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcGFwZXJpbnY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2Vwcm94eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJjb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcmNvZGUyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcmV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlc2VydmVyZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhdHJvdW5kbXRkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgV2ViYWRkcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzMzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzNDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzNTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzNjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdvcmtkYXlmbGdzNzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbWNoYW1ibnI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZbW1jb250ZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbWNvbnRkZXNjOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWW1tY29udG51bWJlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbWNvbnR0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWW1tZW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZbW1mYXhucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbW5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZbW1waG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbXN1cm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZbW10YXhucjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFltbXRjbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZdGxzb3VyY2VmaXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWmlwY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFp1c2F0em5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBWYXJ5YW50TGlzdGVzaSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FyZHR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbXJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2ljYWxyZWY6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjZXJjb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3BlY29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNwZWNvZGUyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3BlY29kZTM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTcGVjb2RlNDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNwZWNvZGU1OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3RncnBjb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVW5pdHNldHJlZjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZhcmlhbnRDYXJkdHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIEZvcm1zIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIE1lbWJlcnNoaXAge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb3Jnb3RQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExvZ2luIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR29vZ2xlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT1I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW1lbWJlck1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbkluQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnblVwQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpZ25VcCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0VGVybXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0ZUVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1FbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ2FyZFZpZXdNaXhpbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXJkVmlldzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGlzdFZpZXc6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGlhbG9ncyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZW5kaW5nQ2hhbmdlc0NvbmZpcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERyYWdnYWJsZUdyb3VwaW5nTWl4aW4ge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29sbGFwc2VBbGxCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERyb3BQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXhwYW5kQWxsQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRW1haWxDbGllbnQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ0NMYWJlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb21wb3NlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZU1lc3NhZ2VDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZU1lc3NhZ2VTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVOb1NlbGVjdGlvbldhcm5pbmc6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZVNlbGVjdGVkQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVTZWxlY3RlZFN1Y2Nlc3M6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb2xkZXJOYW1lcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgZHJhZnRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgaW5ib3g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBqdW5rOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3Qgc2VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IHRyYXNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvbGRlcnNUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yd2FyZEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgSW1hcEhvc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEltYXBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgSW1hcFBvcnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEltYXBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTG9naW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vdmVNZXNzYWdlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW92ZU5vU2VsZWN0aW9uV2FybmluZzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW92ZVNlbGVjdGVkU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW92ZVRvRm9sZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOZXdFbWFpbERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYWdlVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1aWNrU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlZnJlc2hCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcGx5QWxsQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBseUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlFbWFpbERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2VuZEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbm91dEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU210cEhvc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNtdHBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU210cFBvcnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNtdHBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVG9MYWJlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVG9nZ2xlUmVhZEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVG9nZ2xlU2Vlbk5vU2VsZWN0aW9uV2FybmluZzogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEZhdm9yaXRlVmlld3NNaXhpbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVCdXR0b25IaW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVTdWNjZXNzTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wdHlOYW1lRXJyb3I6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhdm9yaXRlVmlld3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvYWRlZFZpZXdNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzc01lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVWaWV3OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgSGVhZGVyRmlsdGVyc01peGluIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbmNlbEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xlYXJCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZWFyY2g6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlbGVjdEFsbDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQXp1cmU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQXp1cmVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUNvc21vczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVDb3Ntb3NMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHbGFzc3k6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR2xhc3N5TGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW5MaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZExpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvdzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3dMaWdodDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFBlcm1pc3Npb25zQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0Um9sZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldm9rZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZURpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBWYWxpZGF0aW9uRXJyb3Ige1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBXaXphcmREaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRmluaXNoQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOZXh0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgRV9NYWxpeWV0WydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7RGF0YUF1ZGl0TG9nOntGaWVsZE5hbWU6MSxMb2dEYXRlOjEsTG9nSWQ6MSxMb2dUeXBlOjEsTmV3VmFsdWU6MSxPbGRWYWx1ZToxLFJlY29yZElkOjEsVGFibGVuYW1lOjEsVXNlckRpc3BsYXlOYW1lOjEsVXNlcklkOjEsVXNlcm5hbWU6MX0sS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpOntJZDoxLEt1bGxhbmljaUZpbHRyZXNpOjEsUmFwb3JsYXJJZDoxLFJhcG9ybGFyUmFwb3JBZGk6MSxSYXBvcmxhclJhcG9yS29kdToxLFVzZXJEaXNwbGF5TmFtZToxLFVzZXJFbWFpbDoxLFVzZXJJZDoxLFVzZXJJbnNlcnREYXRlOjEsVXNlckluc2VydFVzZXJJZDoxLFVzZXJJc0FjdGl2ZToxLFVzZXJMYXN0RGlyZWN0b3J5VXBkYXRlOjEsVXNlck1vYmlsZVBob25lTnVtYmVyOjEsVXNlck1vYmlsZVBob25lVmVyaWZpZWQ6MSxVc2VyUGFzc3dvcmRIYXNoOjEsVXNlclBhc3N3b3JkU2FsdDoxLFVzZXJTb3VyY2U6MSxVc2VyVGlnZXJEb25lbToxLFVzZXJUaWdlckZpcm1hOjEsVXNlclR3b0ZhY3RvckF1dGg6MSxVc2VyVXBkYXRlRGF0ZToxLFVzZXJVcGRhdGVVc2VySWQ6MSxVc2VyVXNlckltYWdlOjEsVXNlclVzZXJuYW1lOjF9LExhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUmFwb3JsYXI6e0lkOjEsUmFwb3JBZGk6MSxSYXBvcktvZHU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZUtleToxLFJvbGVOYW1lOjF9LFJvbGVQZXJtaXNzaW9uOntQZXJtaXNzaW9uS2V5OjEsUm9sZUlkOjEsUm9sZVBlcm1pc3Npb25JZDoxLFJvbGVSb2xlTmFtZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEltcGVyc29uYXRpb25Ub2tlbjoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxNb2JpbGVQaG9uZU51bWJlcjoxLE1vYmlsZVBob25lVmVyaWZpZWQ6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFNvdXJjZToxLFRpZ2VyRG9uZW06MSxUaWdlckRvbmVtTm86MSxUaWdlckZpcm1hOjEsVGlnZXJGaXJtYUFkaToxLFR3b0ZhY3RvckF1dGg6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sQ29tbW9uOntVc2VyUHJlZmVyZW5jZTp7TmFtZToxLFByZWZlcmVuY2VUeXBlOjEsVXNlcklkOjEsVXNlclByZWZlcmVuY2VJZDoxLFZhbHVlOjF9fSxNYWxpeWV0OntNYWxpeWV0RGV0YXk6e0FjaWtsYW1hc2k6MSxBZGV0OjEsQmlyaW06MSxCaXJpbUZpeWF0OjEsRmlzTm86MSxGaXNUYXJpaDoxLEZpc1R1cnU6MSxLb2R1OjEsTWFsaXlldERldGF5SWQ6MSxNYWxpeWV0VGFsZXBBZGV0OjEsTWFsaXlldFRhbGVwSWQ6MSxNYWxpeWV0VGFsZXBJbnNlcnREYXRlOjEsTWFsaXlldFRhbGVwSXRlbVJlZjoxLE1hbGl5ZXRUYWxlcFRpZ2VyRG9uZW06MSxNYWxpeWV0VGFsZXBUaWdlckZpcm1hOjEsTWFsaXlldFRhbGVwVXNlcklkOjEsTWFsaXlldFRhbGVwVmFyaWFudFJlZjoxLE1pa3RhcjoxLFBhcmVudFJlZjoxLFNhdGlyVGlwaToxLFNldml5ZToxLFR1cnU6MSxUdXRhcjoxLFZhcmlhbnRSZWY6MSxWYXJ5YW50QWNpa2xhbWFzaToxLFZhcnlhbnRLb2R1OjF9LE1hbGl5ZXREZXRheVRvcGxhbTp7QmlyaW1GaXlhdDoxLE1hbGl5ZXRUYWxlcElkOjEsVHV0YXI6MX0sTWFsaXlldFRhbGVwOntBZGV0OjEsQmlyaW1GaXlhdDoxLEluc2VydERhdGU6MSxJdGVtTmFtZToxLEl0ZW1SZWY6MSxNYWxpeWV0RGV0YXlsYXJpOjEsTWFsaXlldFRhbGVwSWQ6MSxUaWdlckRvbmVtOjEsVGlnZXJGaXJtYToxLFR1dGFyOjEsVXNlckRpc3BsYXlOYW1lOjEsVXNlckVtYWlsOjEsVXNlcklkOjEsVXNlckluc2VydERhdGU6MSxVc2VySW5zZXJ0VXNlcklkOjEsVXNlcklzQWN0aXZlOjEsVXNlckxhc3REaXJlY3RvcnlVcGRhdGU6MSxVc2VyTW9iaWxlUGhvbmVOdW1iZXI6MSxVc2VyTW9iaWxlUGhvbmVWZXJpZmllZDoxLFVzZXJQYXNzd29yZEhhc2g6MSxVc2VyUGFzc3dvcmRTYWx0OjEsVXNlclNvdXJjZToxLFVzZXJUaWdlckRvbmVtOjEsVXNlclRpZ2VyRmlybWE6MSxVc2VyVHdvRmFjdG9yQXV0aDoxLFVzZXJVcGRhdGVEYXRlOjEsVXNlclVwZGF0ZVVzZXJJZDoxLFVzZXJVc2VySW1hZ2U6MSxVc2VyVXNlcm5hbWU6MSxWYXJpYW50TmFtZToxLFZhcmlhbnRSZWY6MX19LFRpZ2VyOntNYWx6ZW1lTGlzdGVzaTp7SXRlbXNBY3RpdmU6MSxJdGVtc0NhcmR0eXBlOjEsSXRlbXNDYXJkdHlwZVRpcGk6MSxJdGVtc0NvZGU6MSxJdGVtc05hbWU6MSxJdGVtc1Byb2R1Y2VyY29kZToxLEl0ZW1zU3BlY29kZToxLEl0ZW1zU3RncnBjb2RlOjEsSXRtdW5pdGEyS2F0c2F5aToxLEl0bXVuaXRhM0thdHNheWk6MSxMb2dpY2FscmVmOjEsVW5pdHNldGZDb2RlOjEsVW5pdHNldGZOYW1lOjEsVW5pdHNldGxDb2RlOjEsVW5pdHNldGxOYW1lOjF9LFRpZ2VyRG9uZW1sZXI6e0FjdGl2ZToxLEJlZ2RhdGU6MSxFbmRkYXRlOjEsRmlybWFEb25lbVN0cjoxLEZpcm1ucjoxLEtleTE6MSxLZXkyOjEsS2V5MzoxLEtleTQ6MSxMb2dpY2FscmVmOjEsTnI6MSxQZXJsb2NhbGN0eXBlOjEsUGVycmVwY3VycjoxfSxUaWdlckZpcm1hbGFyOntBY2NlcHRlaW52OjEsQWNjb2ZmaWNlY29kZToxLEFjdGFyZWE6MSxBZHZhbmNlZHByb2R1Y3Q6MSxCYWNrdXBlYm9va3M6MSxCYWdrdXJucjoxLEJlZ2RheToxLEJlZ21vbjoxLENpdHk6MSxDbnRyeWNvZGU6MSxDb25zY29kZXJlZjoxLENvbnRyYWN0ZGF0ZToxLENvbnRyYWN0ZGVzYzoxLENvbnRyYWN0bnVtYmVyOjEsQ29udHJhY3R0eXBlOjEsQ291bnRvZmxlZzoxLENvdW50cnk6MSxDcGFjaGFtYm5yOjEsQ3BhY2l0eToxLENwYWNudHJ5Y29kZToxLENwYWNvdW50cnk6MSxDcGFkaXN0cmljdDoxLENwYWRvb3JucjoxLENwYWVtYWlsOjEsQ3BhZXh0ZW5zaW9uOjEsQ3BhZmF4bnI6MSxDcGFpZHRjbm86MSxDcGFrZHNwYXNzd29yZDoxLENwYW5hbWU6MSxDcGFvY2N1cGF0aW9uOjEsQ3BhcGhvbmU6MSxDcGFyb2FkOjEsQ3Bhc3RyZWV0OjEsQ3Bhc3VybmFtZToxLENwYXRheG5yOjEsQ3BhdGF4b2ZmOjEsQ3BhdGNrbjoxLENwYXRpdGxlOjEsQ3BhdXNlcm5hbWU6MSxDcGF6aXBjb2RlOjEsQ3RhYmxlOjEsRGJuYW1lOjEsRGVkdWN0bGltaXQ6MSxEaXJlY3Q6MSxEaXN0cmljdDoxLERuY25zdGxlbjoxLERvb3JucjoxLEVhcmNlbnRkZWZhZGRyOjEsRWFyY2VudHBhc3M6MSxFYXJjZW50c2VuZDoxLEVhcmNlbnR1c2VyOjEsRWJvb2tjb250dHlwZToxLEVib29rY3VycnR5cGU6MSxFYm9va3N0YXJ0ZGF0ZToxLEVpbnZjb250dHlwZToxLEVpbnZjdXN0b206MSxFaW52b2ljZWlkOjEsRWludm9pY2V0eXBzZ2s6MSxFbWFpbGFkZHI6MSxFbXBsb3llcmVtYWlsOjEsRW1wbG95ZXJpZHRjbm86MSxFbXBsb3llcm5hbWU6MSxFbXBsb3llcnN1cm5hbWU6MSxFbXV0ZW50ZGVmYWRkcjoxLEVtdXRlbnRwYXNzOjEsRW11dGVudHNlbmQ6MSxFbXV0ZW50dXNlcjoxLEZheDoxLEZheGVtYWlsYWRkcjoxLEZheHVzZXJrZXk6MSxGYXh1c2VybmFtZToxLEZpcm1lbWFpbGFkZHI6MSxGaXJtZXV2YXRudW1iZXI6MSxGaXJtbGFuZzoxLEZpcm1yZXBjdXJyOjEsRmlybXR5cGU6MSxGaXJteXRsc3RhdHVzOjEsR2V0Y3BhZnJvbWRpdjoxLEhhc2h2ZXJzOjEsSW50c2FsZXNhZGRyOjEsSXNlYm9va2tlcHRieWZpcm06MSxJc3ltbWNvbnRyYWN0bWFkZToxLEpnY29tcGFueW5yOjEsSmdocmZpcm1jb2RlOjEsSmdwYXNzd29yZDoxLEpncGVyaW9kbnI6MSxKZ3NlcnZlcnVybDoxLEpndXNlcm5hbWU6MSxMYXN0Y29udHJvbG5vOjEsTGFzdGdsb2JsaW5lbm86MSxMYXN0am91cm5hbG5vOjEsTGlxdWlkYXRlZGZpcm06MSxMaXF1aWRhdGluZ2RhdGU6MSxMaXF1aWRhdGlvbnR5cDoxLExvY2FsY2FsZHI6MSxMb2NhbGN0eXA6MSxMb2dpY2FscmVmOjEsTG9nb2lkOjEsTG9uZ3BlcmlvZHM6MSxNYWp2ZXJzbnI6MSxNZXJzaXNubzoxLE1pbnZlcnNucjoxLE1vYmZpcm1hbGlhczoxLE1vYnBhc3N3b3JkOjEsTW9idXNlcm5hbWU6MSxNb2RkYXRlOjEsTW9kdGltZToxLE5hY2Vjb2RlOjEsTmFtZToxLE5hbWVBbmROcjoxLE5yOjEsT2ZmaWNhbHRpdGxlOjEsT3JnY2hhcnQ6MSxQYXJvbGU6MSxQYXJvbGUyOjEsUGFzc2l2ZToxLFBhc3N3b3JkOjEsUGFzc3dvcmR0YXhkZWNsOjEsUGFzc3dvcmR0YXhkZWNsMjoxLFBlcm5yOjEsUGhvbmUxOjEsUGhvbmUyOjEsUG9zdGxhYmVsY29kZToxLFBvc3RsYWJlbGNvZGVkZXNwOjEsUHJvZmlsZWlkOjEsUHRpbWVzdGFtcGhvc3Q6MSxQdGltZXN0YW1wcGFzczoxLFB0aW1lc3RhbXBwb3J0OjEsUHRpbWVzdGFtcHVzZXI6MSxSZWx2ZXJzbnI6MSxSb2FkOjEsU2VjdG9yOjEsU2VjdXJucjoxLFNlbmRlcmxhYmVsY29kZToxLFNlbmRlcmxhYmVsY29kZWRlc3A6MSxTZXBleGNodGFibGU6MSxTaGFhbGdvcml0aG06MSxTaHBhZ25jb2Q6MSxTaXRlaWQ6MSxTcmNjcml0ZXJpYToxLFN0YXRlY29kZToxLFN0YXRlbmFtZToxLFN0cmVldDoxLFRheG5yOjEsVGF4b2ZmOjEsVGF4b2ZmY29kZToxLFRheG9mZnN0YXRlY2Q6MSxUYXhvZmZzdGF0ZW5tOjEsVGF4cGF5ZXJjb2RlOjEsVGF4cGF5ZXJuYW1lOjEsVGNlbGxhcHBpZDoxLFRjZWxsYXBwcHc6MSxUaW1lc3RhbXBhcHBwdGg6MSxUaW1lc3RhbXBwYXNzOjEsVGltZXN0YW1wcG9ydDoxLFRpbWVzdGFtcHNlcnZlcjoxLFRpbWVzdGFtcHVzZXI6MSxUaXRsZToxLFRyYWRlcmVnaXNubzoxLFVzZWNoYW5nZWxvZzoxLFVzZWNvbW1vbnBhcmFtOjEsVXNlZWFyY2hpdmU6MSxVc2VlYm9vazoxLFVzZWVkZXNwYXRjaDoxLFVzZWVwcm9kdWNlcnJlYzoxLFVzZWV0cmFkZXNtYW5pbnY6MSxVc2VwYXBlcmludjoxLFVzZXByb3h5OjEsVXNlcmNvZGU6MSxVc2VyY29kZTI6MSxVc2VyZXh0OjEsVXNlcm5hbWU6MSxVc2VzZXJ2ZXJkYXRlOjEsVmF0cm91bmRtdGQ6MSxXZWJhZGRyOjEsV29ya2RheWZsZ3MxOjEsV29ya2RheWZsZ3MyOjEsV29ya2RheWZsZ3MzOjEsV29ya2RheWZsZ3M0OjEsV29ya2RheWZsZ3M1OjEsV29ya2RheWZsZ3M2OjEsV29ya2RheWZsZ3M3OjEsWW1tY2hhbWJucjoxLFltbWNvbnRkYXRlOjEsWW1tY29udGRlc2M6MSxZbW1jb250bnVtYmVyOjEsWW1tY29udHR5cGU6MSxZbW1lbWFpbDoxLFltbWZheG5yOjEsWW1tbmFtZToxLFltbXBob25lOjEsWW1tc3VybmFtZToxLFltbXRheG5yOjEsWW1tdGNubzoxLFl0bHNvdXJjZWZpcm06MSxaaXBjb2RlOjEsWnVzYXR6bm86MX0sVmFyeWFudExpc3Rlc2k6e0FjdGl2ZToxLENhcmR0eXBlOjEsQ29kZToxLEl0ZW1yZWY6MSxMb2dpY2FscmVmOjEsTmFtZToxLFByb2R1Y2VyY29kZToxLFNwZWNvZGU6MSxTcGVjb2RlMjoxLFNwZWNvZGUzOjEsU3BlY29kZTQ6MSxTcGVjb2RlNToxLFN0Z3JwY29kZToxLFVuaXRzZXRyZWY6MSxWYXJpYW50Q2FyZHR5cGU6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsRm9ybVRpdGxlOjEsR29vZ2xlQnV0dG9uOjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxTaXRlOntBY2Nlc3NEZW5pZWQ6e0NsaWNrVG9DaGFuZ2VVc2VyOjEsQ2xpY2tUb0xvZ2luOjEsTGFja1Blcm1pc3Npb25zOjEsTm90TG9nZ2VkSW46MSxQYWdlVGl0bGU6MX0sQmFzaWNQcm9ncmVzc0RpYWxvZzp7Q2FuY2VsVGl0bGU6MSxQbGVhc2VXYWl0OjF9LEJ1bGtTZXJ2aWNlQWN0aW9uOntBbGxIYWRFcnJvcnNGb3JtYXQ6MSxBbGxTdWNjZXNzRm9ybWF0OjEsQ29uZmlybWF0aW9uRm9ybWF0OjEsRXJyb3JDb3VudDoxLE5vdGhpbmdUb1Byb2Nlc3M6MSxTb21lSGFkRXJyb3JzRm9ybWF0OjEsU3VjY2Vzc0NvdW50OjF9LENhcmRWaWV3TWl4aW46e0NhcmRWaWV3OjEsTGlzdFZpZXc6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sRGlhbG9nczp7UGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb246MX0sRHJhZ2dhYmxlR3JvdXBpbmdNaXhpbjp7Q29sbGFwc2VBbGxCdXR0b246MSxEcm9wUGxhY2Vob2xkZXI6MSxFeHBhbmRBbGxCdXR0b246MX0sRW1haWxDbGllbnQ6e0JhY2tCdXR0b246MSxDQ0xhYmVsOjEsQ2FuY2VsQnV0dG9uOjEsQ29tcG9zZUJ1dHRvbjoxLERlbGV0ZUJ1dHRvbjoxLERlbGV0ZU1lc3NhZ2VDb25maXJtYXRpb246MSxEZWxldGVNZXNzYWdlU3VjY2VzczoxLERlbGV0ZU5vU2VsZWN0aW9uV2FybmluZzoxLERlbGV0ZVNlbGVjdGVkQ29uZmlybWF0aW9uOjEsRGVsZXRlU2VsZWN0ZWRTdWNjZXNzOjEsRm9sZGVyTmFtZXM6e2RyYWZ0czoxLGluYm94OjEsanVuazoxLHNlbnQ6MSx0cmFzaDoxfSxGb2xkZXJzVGl0bGU6MSxGb3J3YXJkQnV0dG9uOjEsSW1hcEhvc3Q6MSxJbWFwUGFzc3dvcmQ6MSxJbWFwUG9ydDoxLEltYXBVc2VybmFtZToxLExvZ2luQnV0dG9uOjEsTG9naW5UaXRsZToxLE1vdmVNZXNzYWdlU3VjY2VzczoxLE1vdmVOb1NlbGVjdGlvbldhcm5pbmc6MSxNb3ZlU2VsZWN0ZWRTdWNjZXNzOjEsTW92ZVRvRm9sZGVyOjEsTmV3RW1haWxEaWFsb2dUaXRsZToxLFBhZ2VUaXRsZToxLFF1aWNrU2V0dGluZ3M6MSxSZWZyZXNoQnV0dG9uOjEsUmVwbHlBbGxCdXR0b246MSxSZXBseUJ1dHRvbjoxLFJlcGx5RW1haWxEaWFsb2dUaXRsZToxLFNlYXJjaFBsYWNlaG9sZGVyOjEsU2VuZEJ1dHRvbjoxLFNpZ25vdXRCdXR0b246MSxTbXRwSG9zdDoxLFNtdHBQYXNzd29yZDoxLFNtdHBQb3J0OjEsU210cFVzZXJuYW1lOjEsVG9MYWJlbDoxLFRvZ2dsZVJlYWRCdXR0b246MSxUb2dnbGVTZWVuTm9TZWxlY3Rpb25XYXJuaW5nOjF9LEZhdm9yaXRlVmlld3NNaXhpbjp7RGVsZXRlQnV0dG9uSGludDoxLERlbGV0ZVN1Y2Nlc3NNZXNzYWdlOjEsRW1wdHlOYW1lRXJyb3I6MSxGYXZvcml0ZVZpZXdzOjEsTG9hZGVkVmlld01lc3NhZ2U6MSxTYXZlQnV0dG9uOjEsU2F2ZVN1Y2Nlc3NNZXNzYWdlOjEsU2F2ZVZpZXc6MX0sSGVhZGVyRmlsdGVyc01peGluOntDYW5jZWxCdXR0b246MSxDbGVhckJ1dHRvbjoxLE9rQnV0dG9uOjEsU2VhcmNoOjEsU2VsZWN0QWxsOjF9LExheW91dDp7Rm9vdGVyQ29weXJpZ2h0OjEsRm9vdGVySW5mbzoxLEZvb3RlclJpZ2h0czoxLEdlbmVyYWxTZXR0aW5nczoxLExhbmd1YWdlOjEsVGhlbWU6MSxUaGVtZUF6dXJlOjEsVGhlbWVBenVyZUxpZ2h0OjEsVGhlbWVCbGFjazoxLFRoZW1lQmxhY2tMaWdodDoxLFRoZW1lQmx1ZToxLFRoZW1lQmx1ZUxpZ2h0OjEsVGhlbWVDb3Ntb3M6MSxUaGVtZUNvc21vc0xpZ2h0OjEsVGhlbWVHbGFzc3k6MSxUaGVtZUdsYXNzeUxpZ2h0OjEsVGhlbWVHcmVlbjoxLFRoZW1lR3JlZW5MaWdodDoxLFRoZW1lUHVycGxlOjEsVGhlbWVQdXJwbGVMaWdodDoxLFRoZW1lUmVkOjEsVGhlbWVSZWRMaWdodDoxLFRoZW1lWWVsbG93OjEsVGhlbWVZZWxsb3dMaWdodDoxfSxSb2xlUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxFZGl0QnV0dG9uOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlckRpYWxvZzp7RWRpdFBlcm1pc3Npb25zQnV0dG9uOjEsRWRpdFJvbGVzQnV0dG9uOjF9LFVzZXJQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEdyYW50OjEsUGVybWlzc2lvbjoxLFJldm9rZToxLFNhdmVTdWNjZXNzOjF9LFVzZXJSb2xlRGlhbG9nOntEaWFsb2dUaXRsZToxLFNhdmVTdWNjZXNzOjF9LFZhbGlkYXRpb25FcnJvcjp7VGl0bGU6MX0sV2l6YXJkRGlhbG9nOntCYWNrQnV0dG9uOjEsQ2FuY2VsTWVzc2FnZToxLEZpbmlzaEJ1dHRvbjoxLE5leHRCdXR0b246MX19LFZhbGlkYXRpb246e0F1dGhlbnRpY2F0aW9uRXJyb3I6MSxDYW50RmluZFVzZXJXaXRoRW1haWw6MSxDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDoxLERlbGV0ZUZvcmVpZ25LZXlFcnJvcjoxLEVtYWlsQ29uZmlybToxLEVtYWlsSW5Vc2U6MSxJbnZhbGlkQWN0aXZhdGVUb2tlbjoxLEludmFsaWRSZXNldFRva2VuOjEsTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDoxLFNhdmVQcmltYXJ5S2V5RXJyb3I6MX19KTtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWFsemVtZUxpc3Rlc2lGb3JtIHtcclxuICAgICAgICBJdGVtc0FjdGl2ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBJdGVtc0NhcmR0eXBlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1zQ2FyZHR5cGVUaXBpOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSXRlbXNDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSXRlbXNOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSXRlbXNTdGdycGNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBJdGVtc1Byb2R1Y2VyY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1zU3BlY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzZXRmQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzZXRmTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzZXRsQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzZXRsTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0bXVuaXRhMkthdHNheWk6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSXRtdW5pdGEzS2F0c2F5aTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTWFsemVtZUxpc3Rlc2lGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdUaWdlci5NYWx6ZW1lTGlzdGVzaSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWFsemVtZUxpc3Rlc2lGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNYWx6ZW1lTGlzdGVzaUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1hbHplbWVMaXN0ZXNpRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtc0FjdGl2ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtc0NhcmR0eXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1zQ2FyZHR5cGVUaXBpJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1zQ29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtc05hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSXRlbXNTdGdycGNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSXRlbXNQcm9kdWNlcmNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSXRlbXNTcGVjb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRzZXRmQ29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0c2V0Zk5hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdHNldGxDb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRzZXRsTmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdG11bml0YTJLYXRzYXlpJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0bXVuaXRhM0thdHNheWknLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1hbHplbWVMaXN0ZXNpUm93IHtcclxuICAgICAgICBMb2dpY2FscmVmPzogbnVtYmVyO1xyXG4gICAgICAgIEl0ZW1zQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIEl0ZW1zQ2FyZHR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgSXRlbXNDYXJkdHlwZVRpcGk/OiBzdHJpbmc7XHJcbiAgICAgICAgSXRlbXNDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIEl0ZW1zTmFtZT86IHN0cmluZztcclxuICAgICAgICBJdGVtc1N0Z3JwY29kZT86IHN0cmluZztcclxuICAgICAgICBJdGVtc1Byb2R1Y2VyY29kZT86IHN0cmluZztcclxuICAgICAgICBJdGVtc1NwZWNvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5pdHNldGZDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIFVuaXRzZXRmTmFtZT86IHN0cmluZztcclxuICAgICAgICBVbml0c2V0bENvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVW5pdHNldGxOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEl0bXVuaXRhMkthdHNheWk/OiBudW1iZXI7XHJcbiAgICAgICAgSXRtdW5pdGEzS2F0c2F5aT86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1hbHplbWVMaXN0ZXNpUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdMb2dpY2FscmVmJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0l0ZW1zTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdUaWdlci5NYWx6ZW1lTGlzdGVzaSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdUaWdlci5NYWx6ZW1lTGlzdGVzaSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TWFsemVtZUxpc3Rlc2lSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPE1hbHplbWVMaXN0ZXNpUm93PignVGlnZXIuTWFsemVtZUxpc3Rlc2knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIExvZ2ljYWxyZWYgPSBcIkxvZ2ljYWxyZWZcIixcclxuICAgICAgICAgICAgSXRlbXNBY3RpdmUgPSBcIkl0ZW1zQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIEl0ZW1zQ2FyZHR5cGUgPSBcIkl0ZW1zQ2FyZHR5cGVcIixcclxuICAgICAgICAgICAgSXRlbXNDYXJkdHlwZVRpcGkgPSBcIkl0ZW1zQ2FyZHR5cGVUaXBpXCIsXHJcbiAgICAgICAgICAgIEl0ZW1zQ29kZSA9IFwiSXRlbXNDb2RlXCIsXHJcbiAgICAgICAgICAgIEl0ZW1zTmFtZSA9IFwiSXRlbXNOYW1lXCIsXHJcbiAgICAgICAgICAgIEl0ZW1zU3RncnBjb2RlID0gXCJJdGVtc1N0Z3JwY29kZVwiLFxyXG4gICAgICAgICAgICBJdGVtc1Byb2R1Y2VyY29kZSA9IFwiSXRlbXNQcm9kdWNlcmNvZGVcIixcclxuICAgICAgICAgICAgSXRlbXNTcGVjb2RlID0gXCJJdGVtc1NwZWNvZGVcIixcclxuICAgICAgICAgICAgVW5pdHNldGZDb2RlID0gXCJVbml0c2V0ZkNvZGVcIixcclxuICAgICAgICAgICAgVW5pdHNldGZOYW1lID0gXCJVbml0c2V0Zk5hbWVcIixcclxuICAgICAgICAgICAgVW5pdHNldGxDb2RlID0gXCJVbml0c2V0bENvZGVcIixcclxuICAgICAgICAgICAgVW5pdHNldGxOYW1lID0gXCJVbml0c2V0bE5hbWVcIixcclxuICAgICAgICAgICAgSXRtdW5pdGEyS2F0c2F5aSA9IFwiSXRtdW5pdGEyS2F0c2F5aVwiLFxyXG4gICAgICAgICAgICBJdG11bml0YTNLYXRzYXlpID0gXCJJdG11bml0YTNLYXRzYXlpXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE1hbHplbWVMaXN0ZXNpU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnVGlnZXIvTWFsemVtZUxpc3Rlc2knO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TWFsemVtZUxpc3Rlc2lSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNYWx6ZW1lTGlzdGVzaVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxNYWx6ZW1lTGlzdGVzaVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNYWx6ZW1lTGlzdGVzaVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJUaWdlci9NYWx6ZW1lTGlzdGVzaS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJUaWdlci9NYWx6ZW1lTGlzdGVzaS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJUaWdlci9NYWx6ZW1lTGlzdGVzaS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlRpZ2VyL01hbHplbWVMaXN0ZXNpL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlRpZ2VyL01hbHplbWVMaXN0ZXNpL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5NYWx6ZW1lTGlzdGVzaVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFRpZ2VyRmlybWFsYXIge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiVGlnZXIgRmlybWFsYXI6T2t1bWFcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiVGlnZXIgRmlybWFsYXI6U2lsbWVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydCA9IFwiVGlnZXIgRmlybWFsYXI6RWtsZW1lXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGUgPSBcIlRpZ2VyIEZpcm1hbGFyOkfDvG5jZWxsZW1lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVGlnZXJEb25lbWxlciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJUaWdlciBEw7ZuZW1sZXI6T2t1bWFcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiVGlnZXIgRMO2bmVtbGVyOlNpbG1lXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnQgPSBcIlRpZ2VyIETDtm5lbWxlcjpFa2xlbWVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZSA9IFwiVGlnZXIgRMO2bmVtbGVyOkfDvG5jZWxsZW1lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuVGlnZXIge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuVGlnZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUaWdlckRvbmVtbGVyRm9ybSB7XHJcbiAgICAgICAgTnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRmlybW5yOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEJlZ2RhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgRW5kZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBBY3RpdmU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgS2V5MTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBLZXkyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEtleTM6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgS2V5NDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBQZXJsb2NhbGN0eXBlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFBlcnJlcGN1cnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRpZ2VyRG9uZW1sZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdUaWdlci5UaWdlckRvbmVtbGVyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFUaWdlckRvbmVtbGVyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVGlnZXJEb25lbWxlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShUaWdlckRvbmVtbGVyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaXJtbnInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQmVnZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbmRkYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjdGl2ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdLZXkxJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0tleTInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnS2V5MycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdLZXk0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlcmxvY2FsY3R5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGVycmVwY3VycicsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGlnZXJEb25lbWxlclJvdyB7XHJcbiAgICAgICAgTG9naWNhbHJlZj86IG51bWJlcjtcclxuICAgICAgICBOcj86IG51bWJlcjtcclxuICAgICAgICBGaXJtbnI/OiBudW1iZXI7XHJcbiAgICAgICAgQmVnZGF0ZT86IHN0cmluZztcclxuICAgICAgICBFbmRkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBLZXkxPzogbnVtYmVyO1xyXG4gICAgICAgIEtleTI/OiBudW1iZXI7XHJcbiAgICAgICAgS2V5Mz86IG51bWJlcjtcclxuICAgICAgICBLZXk0PzogbnVtYmVyO1xyXG4gICAgICAgIFBlcmxvY2FsY3R5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgUGVycmVwY3Vycj86IG51bWJlcjtcclxuICAgICAgICBGaXJtYURvbmVtU3RyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGlnZXJEb25lbWxlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTnInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRmlybWFEb25lbVN0cic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdUaWdlci5UaWdlckRvbmVtbGVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0Zpcm1ucic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VGlnZXJEb25lbWxlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VGlnZXJEb25lbWxlclJvdz4oJ0Zpcm1ucicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdUaWdlciBGaXJtYWxhcjpTaWxtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnVGlnZXIgRmlybWFsYXI6RWtsZW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnVGlnZXIgRMO2bmVtbGVyOk9rdW1hJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdUaWdlciBGaXJtYWxhcjpHw7xuY2VsbGVtZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgTG9naWNhbHJlZiA9IFwiTG9naWNhbHJlZlwiLFxyXG4gICAgICAgICAgICBOciA9IFwiTnJcIixcclxuICAgICAgICAgICAgRmlybW5yID0gXCJGaXJtbnJcIixcclxuICAgICAgICAgICAgQmVnZGF0ZSA9IFwiQmVnZGF0ZVwiLFxyXG4gICAgICAgICAgICBFbmRkYXRlID0gXCJFbmRkYXRlXCIsXHJcbiAgICAgICAgICAgIEFjdGl2ZSA9IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIEtleTEgPSBcIktleTFcIixcclxuICAgICAgICAgICAgS2V5MiA9IFwiS2V5MlwiLFxyXG4gICAgICAgICAgICBLZXkzID0gXCJLZXkzXCIsXHJcbiAgICAgICAgICAgIEtleTQgPSBcIktleTRcIixcclxuICAgICAgICAgICAgUGVybG9jYWxjdHlwZSA9IFwiUGVybG9jYWxjdHlwZVwiLFxyXG4gICAgICAgICAgICBQZXJyZXBjdXJyID0gXCJQZXJyZXBjdXJyXCIsXHJcbiAgICAgICAgICAgIEZpcm1hRG9uZW1TdHIgPSBcIkZpcm1hRG9uZW1TdHJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGlnZXJEb25lbWxlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1RpZ2VyL1RpZ2VyRG9uZW1sZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGlnZXJEb25lbWxlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFRpZ2VyRG9uZW1sZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VGlnZXJEb25lbWxlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUaWdlckRvbmVtbGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlRpZ2VyL1RpZ2VyRG9uZW1sZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiVGlnZXIvVGlnZXJEb25lbWxlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJUaWdlci9UaWdlckRvbmVtbGVyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiVGlnZXIvVGlnZXJEb25lbWxlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJUaWdlci9UaWdlckRvbmVtbGVyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UaWdlckRvbmVtbGVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuVGlnZXIge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuVGlnZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUaWdlckZpcm1hbGFyRm9ybSB7XHJcbiAgICAgICAgTnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRpdGxlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RyZWV0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUm9hZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERvb3JucjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3RyaWN0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvdW50cnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBaaXBjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGhvbmUxOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGhvbmUyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRmF4OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGF4b2ZmOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGF4bnI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTZWN1cm5yOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGlyZWN0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3BhbmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYXN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYXJvYWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGFkb29ybnI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGFkaXN0cmljdDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYWNpdHk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGFwaG9uZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYXRheG9mZjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYXRheG5yOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3BhY2hhbWJucjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEJlZ21vbjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBCZWdkYXk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXNlcmV4dDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBQZXJucjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDb3VudG9mbGVnOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEN0YWJsZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFdvcmtkYXlmbGdzMTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBXb3JrZGF5ZmxnczI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgV29ya2RheWZsZ3MzOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFdvcmtkYXlmbGdzNDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBXb3JrZGF5ZmxnczU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgV29ya2RheWZsZ3M2OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFdvcmtkYXlmbGdzNzogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBMb2NhbGN0eXA6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRmlybXJlcGN1cnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU2VwZXhjaHRhYmxlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFZhdHJvdW5kbXRkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEZpcm1ldXZhdG51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE1hanZlcnNucjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBNaW52ZXJzbnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUmVsdmVyc25yOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFNpdGVpZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBPcmdjaGFydDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBMb2NhbGNhbGRyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEZpcm1sYW5nOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFRheG9mZmNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDbnRyeWNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMb25ncGVyaW9kczogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBMb2dvaWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbGFkZHI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBXZWJhZGRyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTW9kZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBNb2R0aW1lOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFRyYWRlcmVnaXNubzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVyc3VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVyaWR0Y25vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1wbG95ZXJlbWFpbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEZpcm15dGxzdGF0dXM6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgWXRsc291cmNlZmlybTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBadXNhdHpubzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRheG9mZnN0YXRlY2Q6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUYXhvZmZzdGF0ZW5tOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RhdGVjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RhdGVuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3Bhb2NjdXBhdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYWV4dGVuc2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYWVtYWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3Bhc3VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYWlkdGNubzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFjY29mZmljZWNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZHZhbmNlZHByb2R1Y3Q6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQmFna3VybnI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERibmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWN0YXJlYTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBTZWN0b3I6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU3JjY3JpdGVyaWE6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb25zY29kZXJlZjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBUY2VsbGFwcGlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGNlbGxhcHBwdzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERuY25zdGxlbjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVc2VzZXJ2ZXJkYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVzZWNoYW5nZWxvZzogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBNb2J1c2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE1vYnBhc3N3b3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTW9iZmlybWFsaWFzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWNjZXB0ZWludjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBFaW52b2ljZWlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUHJvZmlsZWlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVXNlY29tbW9ucGFyYW06IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUGFzc2l2ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVc2VyY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhcm9sZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkdGF4ZGVjbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEZpcm1lbWFpbGFkZHI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGaXJtdHlwZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBOYWNlY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYWNvdW50cnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGF6aXBjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3BhZmF4bnI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGFjbnRyeWNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VlYm9vazogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDb250cmFjdGRlc2M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250cmFjdHR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250cmFjdGRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQ29udHJhY3RudW1iZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIYXNodmVyczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRpbWVzdGFtcHVzZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUaW1lc3RhbXBwYXNzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGltZXN0YW1wc2VydmVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVXNlcHJveHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUHRpbWVzdGFtcHVzZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQdGltZXN0YW1wcGFzczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFB0aW1lc3RhbXBob3N0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUHRpbWVzdGFtcHBvcnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVGltZXN0YW1wcG9ydDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBUaW1lc3RhbXBhcHBwdGg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBKZ3NlcnZlcnVybDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEpndXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBKZ3Bhc3N3b3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSmdjb21wYW55bnI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgSmdwZXJpb2RucjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBKZ2hyZmlybWNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZWR1Y3RsaW1pdDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBQb3N0bGFiZWxjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VuZGVybGFiZWxjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRWludmNvbnR0eXBlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVib29rY29udHR5cGU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgTWVyc2lzbm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBPZmZpY2FsdGl0bGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VlYXJjaGl2ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBJbnRzYWxlc2FkZHI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGYXh1c2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEZheHVzZXJrZXk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBGYXhlbWFpbGFkZHI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFYm9va3N0YXJ0ZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBFYm9va2N1cnJ0eXBlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVhcmNlbnRzZW5kOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVhcmNlbnR1c2VyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRWFyY2VudHBhc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFYXJjZW50ZGVmYWRkcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENwYXRpdGxlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIElzZWJvb2trZXB0YnlmaXJtOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIElzeW1tY29udHJhY3RtYWRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFltbW5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBZbW1zdXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgWW1tY29udGRlc2M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBZbW1jb250dHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFltbWNvbnRkYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFltbWNvbnRudW1iZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYXN0Y29udHJvbG5vOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIExhc3Rqb3VybmFsbm86IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgTGFzdGdsb2JsaW5lbm86IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQmFja3VwZWJvb2tzOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVpbnZjdXN0b206IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgWW1tcGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBZbW1mYXhucjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFltbWVtYWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRWludm9pY2V0eXBzZ2s6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVGF4cGF5ZXJjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGF4cGF5ZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgWW1tY2hhbWJucjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFltbXRjbm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBZbW10YXhucjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVzZWVkZXNwYXRjaDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBQb3N0bGFiZWxjb2RlZGVzcDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNlbmRlcmxhYmVsY29kZWRlc3A6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTaGFhbGdvcml0aG06IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXNlZXByb2R1Y2VycmVjOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENwYWtkc3Bhc3N3b3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3BhdXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VldHJhZGVzbWFuaW52OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIExpcXVpZGF0aW5nZGF0ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBMaXF1aWRhdGVkZmlybTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBHZXRjcGFmcm9tZGl2OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIExpcXVpZGF0aW9udHlwOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEVtdXRlbnRzZW5kOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkdGF4ZGVjbDI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbXV0ZW50dXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtdXRlbnRkZWZhZGRyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW11dGVudHBhc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcGF0Y2tuOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVzZXBhcGVyaW52OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFNocGFnbmNvZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhcm9sZTI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VyY29kZTI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGlnZXJGaXJtYWxhckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1RpZ2VyLlRpZ2VyRmlybWFsYXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVRpZ2VyRmlybWFsYXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBUaWdlckZpcm1hbGFyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVGlnZXJGaXJtYWxhckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTnInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXRsZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHJlZXQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUm9hZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdEb29ybnInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzdHJpY3QnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l0eScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VudHJ5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ppcGNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUxJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lMicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXgnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVGF4b2ZmJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RheG5yJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlY3VybnInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWN0JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYW5hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3Bhc3RyZWV0JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYXJvYWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhZG9vcm5yJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWRpc3RyaWN0JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWNpdHknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhcGhvbmUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhdGF4b2ZmJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYXRheG5yJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWNoYW1ibnInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQmVnbW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlZ2RheScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VyZXh0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Blcm5yJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdW50b2ZsZWcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3RhYmxlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmtkYXlmbGdzMScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdXb3JrZGF5ZmxnczInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnV29ya2RheWZsZ3MzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmtkYXlmbGdzNCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdXb3JrZGF5ZmxnczUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnV29ya2RheWZsZ3M2JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dvcmtkYXlmbGdzNycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2NhbGN0eXAnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRmlybXJlcGN1cnInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VwZXhjaHRhYmxlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ZhdHJvdW5kbXRkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zpcm1ldXZhdG51bWJlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWp2ZXJzbnInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWludmVyc25yJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbHZlcnNucicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaXRlaWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnT3JnY2hhcnQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTG9jYWxjYWxkcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaXJtbGFuZycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXhvZmZjb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NudHJ5Y29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb25ncGVyaW9kcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dvaWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWxhZGRyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dlYmFkZHInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdNb2R0aW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWRlcmVnaXNubycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBsb3llcm5hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRW1wbG95ZXJzdXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVyaWR0Y25vJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVyZW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRmlybXl0bHN0YXR1cycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdZdGxzb3VyY2VmaXJtJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1p1c2F0em5vJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RheG9mZnN0YXRlY2QnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVGF4b2Zmc3RhdGVubScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGF0ZWNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhdGVuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYW9jY3VwYXRpb24nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhZXh0ZW5zaW9uJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYXN1cm5hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhaWR0Y25vJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY29mZmljZWNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQWR2YW5jZWRwcm9kdWN0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JhZ2t1cm5yJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RibmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY3RhcmVhJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlY3RvcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcmNjcml0ZXJpYScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25zY29kZXJlZicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUY2VsbGFwcGlkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RjZWxsYXBwcHcnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRG5jbnN0bGVuJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXNlcnZlcmRhdGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlY2hhbmdlbG9nJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vYnVzZXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vYnBhc3N3b3JkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vYmZpcm1hbGlhcycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHRlaW52JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VpbnZvaWNlaWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZmlsZWlkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZWNvbW1vbnBhcmFtJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3NpdmUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcmNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFyb2xlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkdGF4ZGVjbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaXJtZW1haWxhZGRyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zpcm10eXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hY2Vjb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWNvdW50cnknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3BhemlwY29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcGFmYXhucicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcGFjbnRyeWNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlZWJvb2snLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udHJhY3RkZXNjJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRyYWN0dHlwZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250cmFjdGRhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29udHJhY3RudW1iZXInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSGFzaHZlcnMnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVGltZXN0YW1wdXNlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaW1lc3RhbXBwYXNzJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpbWVzdGFtcHNlcnZlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2Vwcm94eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdGltZXN0YW1wdXNlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdGltZXN0YW1wcGFzcycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdGltZXN0YW1waG9zdCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdGltZXN0YW1wcG9ydCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaW1lc3RhbXBwb3J0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpbWVzdGFtcGFwcHB0aCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdKZ3NlcnZlcnVybCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdKZ3VzZXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0pncGFzc3dvcmQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnSmdjb21wYW55bnInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSmdwZXJpb2RucicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdKZ2hyZmlybWNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRGVkdWN0bGltaXQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdGxhYmVsY29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZW5kZXJsYWJlbGNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRWludmNvbnR0eXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Vib29rY29udHR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWVyc2lzbm8nLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnT2ZmaWNhbHRpdGxlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZWVhcmNoaXZlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ludHNhbGVzYWRkcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXh1c2VybmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXh1c2Vya2V5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZheGVtYWlsYWRkcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFYm9va3N0YXJ0ZGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFYm9va2N1cnJ0eXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VhcmNlbnRzZW5kJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VhcmNlbnR1c2VyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VhcmNlbnRwYXNzJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VhcmNlbnRkZWZhZGRyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYXRpdGxlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lzZWJvb2trZXB0YnlmaXJtJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0lzeW1tY29udHJhY3RtYWRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ltbW5hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnWW1tc3VybmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1jb250ZGVzYycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1jb250dHlwZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1jb250ZGF0ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1jb250bnVtYmVyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3Rjb250cm9sbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFzdGpvdXJuYWxubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYXN0Z2xvYmxpbmVubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdCYWNrdXBlYm9va3MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRWludmN1c3RvbScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1waG9uZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1mYXhucicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW1lbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFaW52b2ljZXR5cHNnaycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXhwYXllcmNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVGF4cGF5ZXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ltbWNoYW1ibnInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnWW1tdGNubycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdZbW10YXhucicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VlZGVzcGF0Y2gnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdGxhYmVsY29kZWRlc3AnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU2VuZGVybGFiZWxjb2RlZGVzcCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaGFhbGdvcml0aG0nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlZXByb2R1Y2VycmVjJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYWtkc3Bhc3N3b3JkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NwYXVzZXJuYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZWV0cmFkZXNtYW5pbnYnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGlxdWlkYXRpbmdkYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xpcXVpZGF0ZWRmaXJtJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dldGNwYWZyb21kaXYnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGlxdWlkYXRpb250eXAnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW11dGVudHNlbmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmR0YXhkZWNsMicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXV0ZW50dXNlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXV0ZW50ZGVmYWRkcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXV0ZW50cGFzcycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcGF0Y2tuJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXBhcGVyaW52JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NocGFnbmNvZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXJvbGUyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJjb2RlMicsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGlnZXJGaXJtYWxhclJvdyB7XHJcbiAgICAgICAgTG9naWNhbHJlZj86IG51bWJlcjtcclxuICAgICAgICBOcj86IG51bWJlcjtcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN0cmVldD86IHN0cmluZztcclxuICAgICAgICBSb2FkPzogc3RyaW5nO1xyXG4gICAgICAgIERvb3Jucj86IHN0cmluZztcclxuICAgICAgICBEaXN0cmljdD86IHN0cmluZztcclxuICAgICAgICBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgWmlwY29kZT86IHN0cmluZztcclxuICAgICAgICBQaG9uZTE/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvbmUyPzogc3RyaW5nO1xyXG4gICAgICAgIEZheD86IHN0cmluZztcclxuICAgICAgICBUYXhvZmY/OiBzdHJpbmc7XHJcbiAgICAgICAgVGF4bnI/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VjdXJucj86IHN0cmluZztcclxuICAgICAgICBEaXJlY3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhbmFtZT86IHN0cmluZztcclxuICAgICAgICBDcGFzdHJlZXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3Bhcm9hZD86IHN0cmluZztcclxuICAgICAgICBDcGFkb29ybnI/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhZGlzdHJpY3Q/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhY2l0eT86IHN0cmluZztcclxuICAgICAgICBDcGFwaG9uZT86IHN0cmluZztcclxuICAgICAgICBDcGF0YXhvZmY/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhdGF4bnI/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhY2hhbWJucj86IHN0cmluZztcclxuICAgICAgICBCZWdtb24/OiBudW1iZXI7XHJcbiAgICAgICAgQmVnZGF5PzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJleHQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybnI/OiBudW1iZXI7XHJcbiAgICAgICAgQ291bnRvZmxlZz86IG51bWJlcjtcclxuICAgICAgICBDdGFibGU/OiBzdHJpbmc7XHJcbiAgICAgICAgV29ya2RheWZsZ3MxPzogbnVtYmVyO1xyXG4gICAgICAgIFdvcmtkYXlmbGdzMj86IG51bWJlcjtcclxuICAgICAgICBXb3JrZGF5ZmxnczM/OiBudW1iZXI7XHJcbiAgICAgICAgV29ya2RheWZsZ3M0PzogbnVtYmVyO1xyXG4gICAgICAgIFdvcmtkYXlmbGdzNT86IG51bWJlcjtcclxuICAgICAgICBXb3JrZGF5ZmxnczY/OiBudW1iZXI7XHJcbiAgICAgICAgV29ya2RheWZsZ3M3PzogbnVtYmVyO1xyXG4gICAgICAgIExvY2FsY3R5cD86IG51bWJlcjtcclxuICAgICAgICBGaXJtcmVwY3Vycj86IG51bWJlcjtcclxuICAgICAgICBTZXBleGNodGFibGU/OiBudW1iZXI7XHJcbiAgICAgICAgVmF0cm91bmRtdGQ/OiBudW1iZXI7XHJcbiAgICAgICAgRmlybWV1dmF0bnVtYmVyPzogc3RyaW5nO1xyXG4gICAgICAgIE1hanZlcnNucj86IG51bWJlcjtcclxuICAgICAgICBNaW52ZXJzbnI/OiBudW1iZXI7XHJcbiAgICAgICAgUmVsdmVyc25yPzogbnVtYmVyO1xyXG4gICAgICAgIFNpdGVpZD86IG51bWJlcjtcclxuICAgICAgICBPcmdjaGFydD86IG51bWJlcjtcclxuICAgICAgICBMb2NhbGNhbGRyPzogbnVtYmVyO1xyXG4gICAgICAgIEZpcm1sYW5nPzogbnVtYmVyO1xyXG4gICAgICAgIFRheG9mZmNvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ250cnljb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIExvbmdwZXJpb2RzPzogbnVtYmVyO1xyXG4gICAgICAgIExvZ29pZD86IHN0cmluZztcclxuICAgICAgICBFbWFpbGFkZHI/OiBzdHJpbmc7XHJcbiAgICAgICAgV2ViYWRkcj86IHN0cmluZztcclxuICAgICAgICBNb2RkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIE1vZHRpbWU/OiBudW1iZXI7XHJcbiAgICAgICAgVHJhZGVyZWdpc25vPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVybmFtZT86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llcnN1cm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZXJpZHRjbm8/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZXJlbWFpbD86IHN0cmluZztcclxuICAgICAgICBGaXJteXRsc3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIFl0bHNvdXJjZWZpcm0/OiBudW1iZXI7XHJcbiAgICAgICAgWnVzYXR6bm8/OiBzdHJpbmc7XHJcbiAgICAgICAgVGF4b2Zmc3RhdGVjZD86IHN0cmluZztcclxuICAgICAgICBUYXhvZmZzdGF0ZW5tPzogc3RyaW5nO1xyXG4gICAgICAgIFN0YXRlY29kZT86IHN0cmluZztcclxuICAgICAgICBTdGF0ZW5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3Bhb2NjdXBhdGlvbj86IHN0cmluZztcclxuICAgICAgICBDcGFleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhZW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3Bhc3VybmFtZT86IHN0cmluZztcclxuICAgICAgICBDcGFpZHRjbm8/OiBzdHJpbmc7XHJcbiAgICAgICAgQWNjb2ZmaWNlY29kZT86IHN0cmluZztcclxuICAgICAgICBBZHZhbmNlZHByb2R1Y3Q/OiBudW1iZXI7XHJcbiAgICAgICAgQmFna3VybnI/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIEFjdGFyZWE/OiBudW1iZXI7XHJcbiAgICAgICAgU2VjdG9yPzogbnVtYmVyO1xyXG4gICAgICAgIFNyY2NyaXRlcmlhPzogc3RyaW5nO1xyXG4gICAgICAgIENvbnNjb2RlcmVmPzogbnVtYmVyO1xyXG4gICAgICAgIFRjZWxsYXBwaWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGNlbGxhcHBwdz86IHN0cmluZztcclxuICAgICAgICBEbmNuc3RsZW4/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlc2VydmVyZGF0ZT86IG51bWJlcjtcclxuICAgICAgICBVc2VjaGFuZ2Vsb2c/OiBudW1iZXI7XHJcbiAgICAgICAgTW9idXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9icGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9iZmlybWFsaWFzPzogc3RyaW5nO1xyXG4gICAgICAgIEFjY2VwdGVpbnY/OiBudW1iZXI7XHJcbiAgICAgICAgRWludm9pY2VpZD86IHN0cmluZztcclxuICAgICAgICBQcm9maWxlaWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlY29tbW9ucGFyYW0/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc2l2ZT86IG51bWJlcjtcclxuICAgICAgICBVc2VyY29kZT86IHN0cmluZztcclxuICAgICAgICBQYXJvbGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmR0YXhkZWNsPzogc3RyaW5nO1xyXG4gICAgICAgIEZpcm1lbWFpbGFkZHI/OiBzdHJpbmc7XHJcbiAgICAgICAgRmlybXR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgTmFjZWNvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhY291bnRyeT86IHN0cmluZztcclxuICAgICAgICBDcGF6aXBjb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIENwYWZheG5yPzogc3RyaW5nO1xyXG4gICAgICAgIENwYWNudHJ5Y29kZT86IHN0cmluZztcclxuICAgICAgICBVc2VlYm9vaz86IG51bWJlcjtcclxuICAgICAgICBDb250cmFjdGRlc2M/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29udHJhY3R0eXBlPzogc3RyaW5nO1xyXG4gICAgICAgIENvbnRyYWN0ZGF0ZT86IHN0cmluZztcclxuICAgICAgICBDb250cmFjdG51bWJlcj86IHN0cmluZztcclxuICAgICAgICBIYXNodmVycz86IHN0cmluZztcclxuICAgICAgICBUaW1lc3RhbXB1c2VyPzogc3RyaW5nO1xyXG4gICAgICAgIFRpbWVzdGFtcHBhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgVGltZXN0YW1wc2VydmVyPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXByb3h5PzogbnVtYmVyO1xyXG4gICAgICAgIFB0aW1lc3RhbXB1c2VyPzogc3RyaW5nO1xyXG4gICAgICAgIFB0aW1lc3RhbXBwYXNzPzogc3RyaW5nO1xyXG4gICAgICAgIFB0aW1lc3RhbXBob3N0Pzogc3RyaW5nO1xyXG4gICAgICAgIFB0aW1lc3RhbXBwb3J0PzogbnVtYmVyO1xyXG4gICAgICAgIFRpbWVzdGFtcHBvcnQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGltZXN0YW1wYXBwcHRoPzogc3RyaW5nO1xyXG4gICAgICAgIEpnc2VydmVydXJsPzogc3RyaW5nO1xyXG4gICAgICAgIEpndXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSmdwYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBKZ2NvbXBhbnlucj86IG51bWJlcjtcclxuICAgICAgICBKZ3BlcmlvZG5yPzogbnVtYmVyO1xyXG4gICAgICAgIEpnaHJmaXJtY29kZT86IHN0cmluZztcclxuICAgICAgICBEZWR1Y3RsaW1pdD86IG51bWJlcjtcclxuICAgICAgICBQb3N0bGFiZWxjb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIFNlbmRlcmxhYmVsY29kZT86IHN0cmluZztcclxuICAgICAgICBFaW52Y29udHR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgRWJvb2tjb250dHlwZT86IG51bWJlcjtcclxuICAgICAgICBNZXJzaXNubz86IHN0cmluZztcclxuICAgICAgICBPZmZpY2FsdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlZWFyY2hpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgSW50c2FsZXNhZGRyPzogc3RyaW5nO1xyXG4gICAgICAgIEZheHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZheHVzZXJrZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgRmF4ZW1haWxhZGRyPzogc3RyaW5nO1xyXG4gICAgICAgIEVib29rc3RhcnRkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEVib29rY3VycnR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgRWFyY2VudHNlbmQ/OiBudW1iZXI7XHJcbiAgICAgICAgRWFyY2VudHVzZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgRWFyY2VudHBhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgRWFyY2VudGRlZmFkZHI/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhdGl0bGU/OiBudW1iZXI7XHJcbiAgICAgICAgSXNlYm9va2tlcHRieWZpcm0/OiBudW1iZXI7XHJcbiAgICAgICAgSXN5bW1jb250cmFjdG1hZGU/OiBudW1iZXI7XHJcbiAgICAgICAgWW1tbmFtZT86IHN0cmluZztcclxuICAgICAgICBZbW1zdXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFltbWNvbnRkZXNjPzogc3RyaW5nO1xyXG4gICAgICAgIFltbWNvbnR0eXBlPzogc3RyaW5nO1xyXG4gICAgICAgIFltbWNvbnRkYXRlPzogbnVtYmVyO1xyXG4gICAgICAgIFltbWNvbnRudW1iZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdGNvbnRyb2xubz86IG51bWJlcjtcclxuICAgICAgICBMYXN0am91cm5hbG5vPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3RnbG9ibGluZW5vPzogbnVtYmVyO1xyXG4gICAgICAgIEJhY2t1cGVib29rcz86IG51bWJlcjtcclxuICAgICAgICBFaW52Y3VzdG9tPzogbnVtYmVyO1xyXG4gICAgICAgIFltbXBob25lPzogc3RyaW5nO1xyXG4gICAgICAgIFltbWZheG5yPzogc3RyaW5nO1xyXG4gICAgICAgIFltbWVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIEVpbnZvaWNldHlwc2drPzogbnVtYmVyO1xyXG4gICAgICAgIFRheHBheWVyY29kZT86IHN0cmluZztcclxuICAgICAgICBUYXhwYXllcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgWW1tY2hhbWJucj86IHN0cmluZztcclxuICAgICAgICBZbW10Y25vPzogc3RyaW5nO1xyXG4gICAgICAgIFltbXRheG5yPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZWVkZXNwYXRjaD86IG51bWJlcjtcclxuICAgICAgICBQb3N0bGFiZWxjb2RlZGVzcD86IHN0cmluZztcclxuICAgICAgICBTZW5kZXJsYWJlbGNvZGVkZXNwPzogc3RyaW5nO1xyXG4gICAgICAgIFNoYWFsZ29yaXRobT86IG51bWJlcjtcclxuICAgICAgICBVc2VlcHJvZHVjZXJyZWM/OiBudW1iZXI7XHJcbiAgICAgICAgQ3Bha2RzcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3BhdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlZXRyYWRlc21hbmludj86IG51bWJlcjtcclxuICAgICAgICBMaXF1aWRhdGluZ2RhdGU/OiBudW1iZXI7XHJcbiAgICAgICAgTGlxdWlkYXRlZGZpcm0/OiBudW1iZXI7XHJcbiAgICAgICAgR2V0Y3BhZnJvbWRpdj86IG51bWJlcjtcclxuICAgICAgICBMaXF1aWRhdGlvbnR5cD86IG51bWJlcjtcclxuICAgICAgICBFbXV0ZW50c2VuZD86IG51bWJlcjtcclxuICAgICAgICBQYXNzd29yZHRheGRlY2wyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtdXRlbnR1c2VyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtdXRlbnRkZWZhZGRyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtdXRlbnRwYXNzPzogc3RyaW5nO1xyXG4gICAgICAgIENwYXRja24/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcGFwZXJpbnY/OiBudW1iZXI7XHJcbiAgICAgICAgU2hwYWduY29kPzogc3RyaW5nO1xyXG4gICAgICAgIFBhcm9sZTI/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcmNvZGUyPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWVBbmROcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRpZ2VyRmlybWFsYXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ05yJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWVBbmROcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdUaWdlci5UaWdlckZpcm1hbGFyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1RpZ2VyLlRpZ2VyRmlybWFsYXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFRpZ2VyRmlybWFsYXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFRpZ2VyRmlybWFsYXJSb3c+KCdUaWdlci5UaWdlckZpcm1hbGFyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1RpZ2VyIEZpcm1hbGFyOlNpbG1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdUaWdlciBGaXJtYWxhcjpFa2xlbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdUaWdlciBGaXJtYWxhcjpPa3VtYSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnVGlnZXIgRmlybWFsYXI6R8O8bmNlbGxlbWUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIExvZ2ljYWxyZWYgPSBcIkxvZ2ljYWxyZWZcIixcclxuICAgICAgICAgICAgTnIgPSBcIk5yXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgVGl0bGUgPSBcIlRpdGxlXCIsXHJcbiAgICAgICAgICAgIFN0cmVldCA9IFwiU3RyZWV0XCIsXHJcbiAgICAgICAgICAgIFJvYWQgPSBcIlJvYWRcIixcclxuICAgICAgICAgICAgRG9vcm5yID0gXCJEb29ybnJcIixcclxuICAgICAgICAgICAgRGlzdHJpY3QgPSBcIkRpc3RyaWN0XCIsXHJcbiAgICAgICAgICAgIENpdHkgPSBcIkNpdHlcIixcclxuICAgICAgICAgICAgQ291bnRyeSA9IFwiQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBaaXBjb2RlID0gXCJaaXBjb2RlXCIsXHJcbiAgICAgICAgICAgIFBob25lMSA9IFwiUGhvbmUxXCIsXHJcbiAgICAgICAgICAgIFBob25lMiA9IFwiUGhvbmUyXCIsXHJcbiAgICAgICAgICAgIEZheCA9IFwiRmF4XCIsXHJcbiAgICAgICAgICAgIFRheG9mZiA9IFwiVGF4b2ZmXCIsXHJcbiAgICAgICAgICAgIFRheG5yID0gXCJUYXhuclwiLFxyXG4gICAgICAgICAgICBTZWN1cm5yID0gXCJTZWN1cm5yXCIsXHJcbiAgICAgICAgICAgIERpcmVjdCA9IFwiRGlyZWN0XCIsXHJcbiAgICAgICAgICAgIENwYW5hbWUgPSBcIkNwYW5hbWVcIixcclxuICAgICAgICAgICAgQ3Bhc3RyZWV0ID0gXCJDcGFzdHJlZXRcIixcclxuICAgICAgICAgICAgQ3Bhcm9hZCA9IFwiQ3Bhcm9hZFwiLFxyXG4gICAgICAgICAgICBDcGFkb29ybnIgPSBcIkNwYWRvb3JuclwiLFxyXG4gICAgICAgICAgICBDcGFkaXN0cmljdCA9IFwiQ3BhZGlzdHJpY3RcIixcclxuICAgICAgICAgICAgQ3BhY2l0eSA9IFwiQ3BhY2l0eVwiLFxyXG4gICAgICAgICAgICBDcGFwaG9uZSA9IFwiQ3BhcGhvbmVcIixcclxuICAgICAgICAgICAgQ3BhdGF4b2ZmID0gXCJDcGF0YXhvZmZcIixcclxuICAgICAgICAgICAgQ3BhdGF4bnIgPSBcIkNwYXRheG5yXCIsXHJcbiAgICAgICAgICAgIENwYWNoYW1ibnIgPSBcIkNwYWNoYW1ibnJcIixcclxuICAgICAgICAgICAgQmVnbW9uID0gXCJCZWdtb25cIixcclxuICAgICAgICAgICAgQmVnZGF5ID0gXCJCZWdkYXlcIixcclxuICAgICAgICAgICAgVXNlcmV4dCA9IFwiVXNlcmV4dFwiLFxyXG4gICAgICAgICAgICBQZXJuciA9IFwiUGVybnJcIixcclxuICAgICAgICAgICAgQ291bnRvZmxlZyA9IFwiQ291bnRvZmxlZ1wiLFxyXG4gICAgICAgICAgICBDdGFibGUgPSBcIkN0YWJsZVwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczEgPSBcIldvcmtkYXlmbGdzMVwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczIgPSBcIldvcmtkYXlmbGdzMlwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczMgPSBcIldvcmtkYXlmbGdzM1wiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczQgPSBcIldvcmtkYXlmbGdzNFwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczUgPSBcIldvcmtkYXlmbGdzNVwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczYgPSBcIldvcmtkYXlmbGdzNlwiLFxyXG4gICAgICAgICAgICBXb3JrZGF5ZmxnczcgPSBcIldvcmtkYXlmbGdzN1wiLFxyXG4gICAgICAgICAgICBMb2NhbGN0eXAgPSBcIkxvY2FsY3R5cFwiLFxyXG4gICAgICAgICAgICBGaXJtcmVwY3VyciA9IFwiRmlybXJlcGN1cnJcIixcclxuICAgICAgICAgICAgU2VwZXhjaHRhYmxlID0gXCJTZXBleGNodGFibGVcIixcclxuICAgICAgICAgICAgVmF0cm91bmRtdGQgPSBcIlZhdHJvdW5kbXRkXCIsXHJcbiAgICAgICAgICAgIEZpcm1ldXZhdG51bWJlciA9IFwiRmlybWV1dmF0bnVtYmVyXCIsXHJcbiAgICAgICAgICAgIE1hanZlcnNuciA9IFwiTWFqdmVyc25yXCIsXHJcbiAgICAgICAgICAgIE1pbnZlcnNuciA9IFwiTWludmVyc25yXCIsXHJcbiAgICAgICAgICAgIFJlbHZlcnNuciA9IFwiUmVsdmVyc25yXCIsXHJcbiAgICAgICAgICAgIFNpdGVpZCA9IFwiU2l0ZWlkXCIsXHJcbiAgICAgICAgICAgIE9yZ2NoYXJ0ID0gXCJPcmdjaGFydFwiLFxyXG4gICAgICAgICAgICBMb2NhbGNhbGRyID0gXCJMb2NhbGNhbGRyXCIsXHJcbiAgICAgICAgICAgIEZpcm1sYW5nID0gXCJGaXJtbGFuZ1wiLFxyXG4gICAgICAgICAgICBUYXhvZmZjb2RlID0gXCJUYXhvZmZjb2RlXCIsXHJcbiAgICAgICAgICAgIENudHJ5Y29kZSA9IFwiQ250cnljb2RlXCIsXHJcbiAgICAgICAgICAgIExvbmdwZXJpb2RzID0gXCJMb25ncGVyaW9kc1wiLFxyXG4gICAgICAgICAgICBMb2dvaWQgPSBcIkxvZ29pZFwiLFxyXG4gICAgICAgICAgICBFbWFpbGFkZHIgPSBcIkVtYWlsYWRkclwiLFxyXG4gICAgICAgICAgICBXZWJhZGRyID0gXCJXZWJhZGRyXCIsXHJcbiAgICAgICAgICAgIE1vZGRhdGUgPSBcIk1vZGRhdGVcIixcclxuICAgICAgICAgICAgTW9kdGltZSA9IFwiTW9kdGltZVwiLFxyXG4gICAgICAgICAgICBUcmFkZXJlZ2lzbm8gPSBcIlRyYWRlcmVnaXNub1wiLFxyXG4gICAgICAgICAgICBFbXBsb3llcm5hbWUgPSBcIkVtcGxveWVybmFtZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llcnN1cm5hbWUgPSBcIkVtcGxveWVyc3VybmFtZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llcmlkdGNubyA9IFwiRW1wbG95ZXJpZHRjbm9cIixcclxuICAgICAgICAgICAgRW1wbG95ZXJlbWFpbCA9IFwiRW1wbG95ZXJlbWFpbFwiLFxyXG4gICAgICAgICAgICBGaXJteXRsc3RhdHVzID0gXCJGaXJteXRsc3RhdHVzXCIsXHJcbiAgICAgICAgICAgIFl0bHNvdXJjZWZpcm0gPSBcIll0bHNvdXJjZWZpcm1cIixcclxuICAgICAgICAgICAgWnVzYXR6bm8gPSBcIlp1c2F0em5vXCIsXHJcbiAgICAgICAgICAgIFRheG9mZnN0YXRlY2QgPSBcIlRheG9mZnN0YXRlY2RcIixcclxuICAgICAgICAgICAgVGF4b2Zmc3RhdGVubSA9IFwiVGF4b2Zmc3RhdGVubVwiLFxyXG4gICAgICAgICAgICBTdGF0ZWNvZGUgPSBcIlN0YXRlY29kZVwiLFxyXG4gICAgICAgICAgICBTdGF0ZW5hbWUgPSBcIlN0YXRlbmFtZVwiLFxyXG4gICAgICAgICAgICBDcGFvY2N1cGF0aW9uID0gXCJDcGFvY2N1cGF0aW9uXCIsXHJcbiAgICAgICAgICAgIENwYWV4dGVuc2lvbiA9IFwiQ3BhZXh0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIENwYWVtYWlsID0gXCJDcGFlbWFpbFwiLFxyXG4gICAgICAgICAgICBDcGFzdXJuYW1lID0gXCJDcGFzdXJuYW1lXCIsXHJcbiAgICAgICAgICAgIENwYWlkdGNubyA9IFwiQ3BhaWR0Y25vXCIsXHJcbiAgICAgICAgICAgIEFjY29mZmljZWNvZGUgPSBcIkFjY29mZmljZWNvZGVcIixcclxuICAgICAgICAgICAgQWR2YW5jZWRwcm9kdWN0ID0gXCJBZHZhbmNlZHByb2R1Y3RcIixcclxuICAgICAgICAgICAgQmFna3VybnIgPSBcIkJhZ2t1cm5yXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBEYm5hbWUgPSBcIkRibmFtZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgQWN0YXJlYSA9IFwiQWN0YXJlYVwiLFxyXG4gICAgICAgICAgICBTZWN0b3IgPSBcIlNlY3RvclwiLFxyXG4gICAgICAgICAgICBTcmNjcml0ZXJpYSA9IFwiU3JjY3JpdGVyaWFcIixcclxuICAgICAgICAgICAgQ29uc2NvZGVyZWYgPSBcIkNvbnNjb2RlcmVmXCIsXHJcbiAgICAgICAgICAgIFRjZWxsYXBwaWQgPSBcIlRjZWxsYXBwaWRcIixcclxuICAgICAgICAgICAgVGNlbGxhcHBwdyA9IFwiVGNlbGxhcHBwd1wiLFxyXG4gICAgICAgICAgICBEbmNuc3RsZW4gPSBcIkRuY25zdGxlblwiLFxyXG4gICAgICAgICAgICBVc2VzZXJ2ZXJkYXRlID0gXCJVc2VzZXJ2ZXJkYXRlXCIsXHJcbiAgICAgICAgICAgIFVzZWNoYW5nZWxvZyA9IFwiVXNlY2hhbmdlbG9nXCIsXHJcbiAgICAgICAgICAgIE1vYnVzZXJuYW1lID0gXCJNb2J1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBNb2JwYXNzd29yZCA9IFwiTW9icGFzc3dvcmRcIixcclxuICAgICAgICAgICAgTW9iZmlybWFsaWFzID0gXCJNb2JmaXJtYWxpYXNcIixcclxuICAgICAgICAgICAgQWNjZXB0ZWludiA9IFwiQWNjZXB0ZWludlwiLFxyXG4gICAgICAgICAgICBFaW52b2ljZWlkID0gXCJFaW52b2ljZWlkXCIsXHJcbiAgICAgICAgICAgIFByb2ZpbGVpZCA9IFwiUHJvZmlsZWlkXCIsXHJcbiAgICAgICAgICAgIFVzZWNvbW1vbnBhcmFtID0gXCJVc2Vjb21tb25wYXJhbVwiLFxyXG4gICAgICAgICAgICBQYXNzaXZlID0gXCJQYXNzaXZlXCIsXHJcbiAgICAgICAgICAgIFVzZXJjb2RlID0gXCJVc2VyY29kZVwiLFxyXG4gICAgICAgICAgICBQYXJvbGUgPSBcIlBhcm9sZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZHRheGRlY2wgPSBcIlBhc3N3b3JkdGF4ZGVjbFwiLFxyXG4gICAgICAgICAgICBGaXJtZW1haWxhZGRyID0gXCJGaXJtZW1haWxhZGRyXCIsXHJcbiAgICAgICAgICAgIEZpcm10eXBlID0gXCJGaXJtdHlwZVwiLFxyXG4gICAgICAgICAgICBOYWNlY29kZSA9IFwiTmFjZWNvZGVcIixcclxuICAgICAgICAgICAgQ3BhY291bnRyeSA9IFwiQ3BhY291bnRyeVwiLFxyXG4gICAgICAgICAgICBDcGF6aXBjb2RlID0gXCJDcGF6aXBjb2RlXCIsXHJcbiAgICAgICAgICAgIENwYWZheG5yID0gXCJDcGFmYXhuclwiLFxyXG4gICAgICAgICAgICBDcGFjbnRyeWNvZGUgPSBcIkNwYWNudHJ5Y29kZVwiLFxyXG4gICAgICAgICAgICBVc2VlYm9vayA9IFwiVXNlZWJvb2tcIixcclxuICAgICAgICAgICAgQ29udHJhY3RkZXNjID0gXCJDb250cmFjdGRlc2NcIixcclxuICAgICAgICAgICAgQ29udHJhY3R0eXBlID0gXCJDb250cmFjdHR5cGVcIixcclxuICAgICAgICAgICAgQ29udHJhY3RkYXRlID0gXCJDb250cmFjdGRhdGVcIixcclxuICAgICAgICAgICAgQ29udHJhY3RudW1iZXIgPSBcIkNvbnRyYWN0bnVtYmVyXCIsXHJcbiAgICAgICAgICAgIEhhc2h2ZXJzID0gXCJIYXNodmVyc1wiLFxyXG4gICAgICAgICAgICBUaW1lc3RhbXB1c2VyID0gXCJUaW1lc3RhbXB1c2VyXCIsXHJcbiAgICAgICAgICAgIFRpbWVzdGFtcHBhc3MgPSBcIlRpbWVzdGFtcHBhc3NcIixcclxuICAgICAgICAgICAgVGltZXN0YW1wc2VydmVyID0gXCJUaW1lc3RhbXBzZXJ2ZXJcIixcclxuICAgICAgICAgICAgVXNlcHJveHkgPSBcIlVzZXByb3h5XCIsXHJcbiAgICAgICAgICAgIFB0aW1lc3RhbXB1c2VyID0gXCJQdGltZXN0YW1wdXNlclwiLFxyXG4gICAgICAgICAgICBQdGltZXN0YW1wcGFzcyA9IFwiUHRpbWVzdGFtcHBhc3NcIixcclxuICAgICAgICAgICAgUHRpbWVzdGFtcGhvc3QgPSBcIlB0aW1lc3RhbXBob3N0XCIsXHJcbiAgICAgICAgICAgIFB0aW1lc3RhbXBwb3J0ID0gXCJQdGltZXN0YW1wcG9ydFwiLFxyXG4gICAgICAgICAgICBUaW1lc3RhbXBwb3J0ID0gXCJUaW1lc3RhbXBwb3J0XCIsXHJcbiAgICAgICAgICAgIFRpbWVzdGFtcGFwcHB0aCA9IFwiVGltZXN0YW1wYXBwcHRoXCIsXHJcbiAgICAgICAgICAgIEpnc2VydmVydXJsID0gXCJKZ3NlcnZlcnVybFwiLFxyXG4gICAgICAgICAgICBKZ3VzZXJuYW1lID0gXCJKZ3VzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIEpncGFzc3dvcmQgPSBcIkpncGFzc3dvcmRcIixcclxuICAgICAgICAgICAgSmdjb21wYW55bnIgPSBcIkpnY29tcGFueW5yXCIsXHJcbiAgICAgICAgICAgIEpncGVyaW9kbnIgPSBcIkpncGVyaW9kbnJcIixcclxuICAgICAgICAgICAgSmdocmZpcm1jb2RlID0gXCJKZ2hyZmlybWNvZGVcIixcclxuICAgICAgICAgICAgRGVkdWN0bGltaXQgPSBcIkRlZHVjdGxpbWl0XCIsXHJcbiAgICAgICAgICAgIFBvc3RsYWJlbGNvZGUgPSBcIlBvc3RsYWJlbGNvZGVcIixcclxuICAgICAgICAgICAgU2VuZGVybGFiZWxjb2RlID0gXCJTZW5kZXJsYWJlbGNvZGVcIixcclxuICAgICAgICAgICAgRWludmNvbnR0eXBlID0gXCJFaW52Y29udHR5cGVcIixcclxuICAgICAgICAgICAgRWJvb2tjb250dHlwZSA9IFwiRWJvb2tjb250dHlwZVwiLFxyXG4gICAgICAgICAgICBNZXJzaXNubyA9IFwiTWVyc2lzbm9cIixcclxuICAgICAgICAgICAgT2ZmaWNhbHRpdGxlID0gXCJPZmZpY2FsdGl0bGVcIixcclxuICAgICAgICAgICAgVXNlZWFyY2hpdmUgPSBcIlVzZWVhcmNoaXZlXCIsXHJcbiAgICAgICAgICAgIEludHNhbGVzYWRkciA9IFwiSW50c2FsZXNhZGRyXCIsXHJcbiAgICAgICAgICAgIEZheHVzZXJuYW1lID0gXCJGYXh1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBGYXh1c2Vya2V5ID0gXCJGYXh1c2Vya2V5XCIsXHJcbiAgICAgICAgICAgIEZheGVtYWlsYWRkciA9IFwiRmF4ZW1haWxhZGRyXCIsXHJcbiAgICAgICAgICAgIEVib29rc3RhcnRkYXRlID0gXCJFYm9va3N0YXJ0ZGF0ZVwiLFxyXG4gICAgICAgICAgICBFYm9va2N1cnJ0eXBlID0gXCJFYm9va2N1cnJ0eXBlXCIsXHJcbiAgICAgICAgICAgIEVhcmNlbnRzZW5kID0gXCJFYXJjZW50c2VuZFwiLFxyXG4gICAgICAgICAgICBFYXJjZW50dXNlciA9IFwiRWFyY2VudHVzZXJcIixcclxuICAgICAgICAgICAgRWFyY2VudHBhc3MgPSBcIkVhcmNlbnRwYXNzXCIsXHJcbiAgICAgICAgICAgIEVhcmNlbnRkZWZhZGRyID0gXCJFYXJjZW50ZGVmYWRkclwiLFxyXG4gICAgICAgICAgICBDcGF0aXRsZSA9IFwiQ3BhdGl0bGVcIixcclxuICAgICAgICAgICAgSXNlYm9va2tlcHRieWZpcm0gPSBcIklzZWJvb2trZXB0YnlmaXJtXCIsXHJcbiAgICAgICAgICAgIElzeW1tY29udHJhY3RtYWRlID0gXCJJc3ltbWNvbnRyYWN0bWFkZVwiLFxyXG4gICAgICAgICAgICBZbW1uYW1lID0gXCJZbW1uYW1lXCIsXHJcbiAgICAgICAgICAgIFltbXN1cm5hbWUgPSBcIlltbXN1cm5hbWVcIixcclxuICAgICAgICAgICAgWW1tY29udGRlc2MgPSBcIlltbWNvbnRkZXNjXCIsXHJcbiAgICAgICAgICAgIFltbWNvbnR0eXBlID0gXCJZbW1jb250dHlwZVwiLFxyXG4gICAgICAgICAgICBZbW1jb250ZGF0ZSA9IFwiWW1tY29udGRhdGVcIixcclxuICAgICAgICAgICAgWW1tY29udG51bWJlciA9IFwiWW1tY29udG51bWJlclwiLFxyXG4gICAgICAgICAgICBMYXN0Y29udHJvbG5vID0gXCJMYXN0Y29udHJvbG5vXCIsXHJcbiAgICAgICAgICAgIExhc3Rqb3VybmFsbm8gPSBcIkxhc3Rqb3VybmFsbm9cIixcclxuICAgICAgICAgICAgTGFzdGdsb2JsaW5lbm8gPSBcIkxhc3RnbG9ibGluZW5vXCIsXHJcbiAgICAgICAgICAgIEJhY2t1cGVib29rcyA9IFwiQmFja3VwZWJvb2tzXCIsXHJcbiAgICAgICAgICAgIEVpbnZjdXN0b20gPSBcIkVpbnZjdXN0b21cIixcclxuICAgICAgICAgICAgWW1tcGhvbmUgPSBcIlltbXBob25lXCIsXHJcbiAgICAgICAgICAgIFltbWZheG5yID0gXCJZbW1mYXhuclwiLFxyXG4gICAgICAgICAgICBZbW1lbWFpbCA9IFwiWW1tZW1haWxcIixcclxuICAgICAgICAgICAgRWludm9pY2V0eXBzZ2sgPSBcIkVpbnZvaWNldHlwc2drXCIsXHJcbiAgICAgICAgICAgIFRheHBheWVyY29kZSA9IFwiVGF4cGF5ZXJjb2RlXCIsXHJcbiAgICAgICAgICAgIFRheHBheWVybmFtZSA9IFwiVGF4cGF5ZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFltbWNoYW1ibnIgPSBcIlltbWNoYW1ibnJcIixcclxuICAgICAgICAgICAgWW1tdGNubyA9IFwiWW1tdGNub1wiLFxyXG4gICAgICAgICAgICBZbW10YXhuciA9IFwiWW1tdGF4bnJcIixcclxuICAgICAgICAgICAgVXNlZWRlc3BhdGNoID0gXCJVc2VlZGVzcGF0Y2hcIixcclxuICAgICAgICAgICAgUG9zdGxhYmVsY29kZWRlc3AgPSBcIlBvc3RsYWJlbGNvZGVkZXNwXCIsXHJcbiAgICAgICAgICAgIFNlbmRlcmxhYmVsY29kZWRlc3AgPSBcIlNlbmRlcmxhYmVsY29kZWRlc3BcIixcclxuICAgICAgICAgICAgU2hhYWxnb3JpdGhtID0gXCJTaGFhbGdvcml0aG1cIixcclxuICAgICAgICAgICAgVXNlZXByb2R1Y2VycmVjID0gXCJVc2VlcHJvZHVjZXJyZWNcIixcclxuICAgICAgICAgICAgQ3Bha2RzcGFzc3dvcmQgPSBcIkNwYWtkc3Bhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIENwYXVzZXJuYW1lID0gXCJDcGF1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VldHJhZGVzbWFuaW52ID0gXCJVc2VldHJhZGVzbWFuaW52XCIsXHJcbiAgICAgICAgICAgIExpcXVpZGF0aW5nZGF0ZSA9IFwiTGlxdWlkYXRpbmdkYXRlXCIsXHJcbiAgICAgICAgICAgIExpcXVpZGF0ZWRmaXJtID0gXCJMaXF1aWRhdGVkZmlybVwiLFxyXG4gICAgICAgICAgICBHZXRjcGFmcm9tZGl2ID0gXCJHZXRjcGFmcm9tZGl2XCIsXHJcbiAgICAgICAgICAgIExpcXVpZGF0aW9udHlwID0gXCJMaXF1aWRhdGlvbnR5cFwiLFxyXG4gICAgICAgICAgICBFbXV0ZW50c2VuZCA9IFwiRW11dGVudHNlbmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmR0YXhkZWNsMiA9IFwiUGFzc3dvcmR0YXhkZWNsMlwiLFxyXG4gICAgICAgICAgICBFbXV0ZW50dXNlciA9IFwiRW11dGVudHVzZXJcIixcclxuICAgICAgICAgICAgRW11dGVudGRlZmFkZHIgPSBcIkVtdXRlbnRkZWZhZGRyXCIsXHJcbiAgICAgICAgICAgIEVtdXRlbnRwYXNzID0gXCJFbXV0ZW50cGFzc1wiLFxyXG4gICAgICAgICAgICBDcGF0Y2tuID0gXCJDcGF0Y2tuXCIsXHJcbiAgICAgICAgICAgIFVzZXBhcGVyaW52ID0gXCJVc2VwYXBlcmludlwiLFxyXG4gICAgICAgICAgICBTaHBhZ25jb2QgPSBcIlNocGFnbmNvZFwiLFxyXG4gICAgICAgICAgICBQYXJvbGUyID0gXCJQYXJvbGUyXCIsXHJcbiAgICAgICAgICAgIFVzZXJjb2RlMiA9IFwiVXNlcmNvZGUyXCIsXHJcbiAgICAgICAgICAgIE5hbWVBbmROciA9IFwiTmFtZUFuZE5yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRpZ2VyRmlybWFsYXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdUaWdlci9UaWdlckZpcm1hbGFyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFRpZ2VyRmlybWFsYXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUaWdlckZpcm1hbGFyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFRpZ2VyRmlybWFsYXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VGlnZXJGaXJtYWxhclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJUaWdlci9UaWdlckZpcm1hbGFyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlRpZ2VyL1RpZ2VyRmlybWFsYXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiVGlnZXIvVGlnZXJGaXJtYWxhci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlRpZ2VyL1RpZ2VyRmlybWFsYXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiVGlnZXIvVGlnZXJGaXJtYWxhci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VGlnZXJGaXJtYWxhclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVmFyeWFudExpc3Rlc2lGb3JtIHtcclxuICAgICAgICBJdGVtcmVmOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENhcmR0eXBlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFZhcmlhbnRDYXJkdHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWN0aXZlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVuaXRzZXRyZWY6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU3BlY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNwZWNvZGUyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3BlY29kZTM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTcGVjb2RlNDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNwZWNvZGU1OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RncnBjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUHJvZHVjZXJjb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFZhcnlhbnRMaXN0ZXNpRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnVGlnZXIuVmFyeWFudExpc3Rlc2knO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVZhcnlhbnRMaXN0ZXNpRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVmFyeWFudExpc3Rlc2lGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShWYXJ5YW50TGlzdGVzaUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnSXRlbXJlZicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXJkdHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdWYXJpYW50Q2FyZHR5cGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjdGl2ZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0c2V0cmVmJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwZWNvZGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY29kZTInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY29kZTMnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY29kZTQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY29kZTUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3RncnBjb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y2VyY29kZScsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVmFyeWFudExpc3Rlc2lSb3cge1xyXG4gICAgICAgIExvZ2ljYWxyZWY/OiBudW1iZXI7XHJcbiAgICAgICAgSXRlbXJlZj86IG51bWJlcjtcclxuICAgICAgICBDYXJkdHlwZT86IG51bWJlcjtcclxuICAgICAgICBWYXJpYW50Q2FyZHR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEFjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBVbml0c2V0cmVmPzogbnVtYmVyO1xyXG4gICAgICAgIFNwZWNvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3BlY29kZTI/OiBzdHJpbmc7XHJcbiAgICAgICAgU3BlY29kZTM/OiBzdHJpbmc7XHJcbiAgICAgICAgU3BlY29kZTQ/OiBzdHJpbmc7XHJcbiAgICAgICAgU3BlY29kZTU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3RncnBjb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIFByb2R1Y2VyY29kZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFZhcnlhbnRMaXN0ZXNpUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdMb2dpY2FscmVmJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnVGlnZXIuVmFyeWFudExpc3Rlc2knO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnVGlnZXIuVmFyeWFudExpc3Rlc2knO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFZhcnlhbnRMaXN0ZXNpUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxWYXJ5YW50TGlzdGVzaVJvdz4oJ1RpZ2VyLlZhcnlhbnRMaXN0ZXNpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBMb2dpY2FscmVmID0gXCJMb2dpY2FscmVmXCIsXHJcbiAgICAgICAgICAgIEl0ZW1yZWYgPSBcIkl0ZW1yZWZcIixcclxuICAgICAgICAgICAgQ2FyZHR5cGUgPSBcIkNhcmR0eXBlXCIsXHJcbiAgICAgICAgICAgIFZhcmlhbnRDYXJkdHlwZSA9IFwiVmFyaWFudENhcmR0eXBlXCIsXHJcbiAgICAgICAgICAgIENvZGUgPSBcIkNvZGVcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBBY3RpdmUgPSBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICBVbml0c2V0cmVmID0gXCJVbml0c2V0cmVmXCIsXHJcbiAgICAgICAgICAgIFNwZWNvZGUgPSBcIlNwZWNvZGVcIixcclxuICAgICAgICAgICAgU3BlY29kZTIgPSBcIlNwZWNvZGUyXCIsXHJcbiAgICAgICAgICAgIFNwZWNvZGUzID0gXCJTcGVjb2RlM1wiLFxyXG4gICAgICAgICAgICBTcGVjb2RlNCA9IFwiU3BlY29kZTRcIixcclxuICAgICAgICAgICAgU3BlY29kZTUgPSBcIlNwZWNvZGU1XCIsXHJcbiAgICAgICAgICAgIFN0Z3JwY29kZSA9IFwiU3RncnBjb2RlXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y2VyY29kZSA9IFwiUHJvZHVjZXJjb2RlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFZhcnlhbnRMaXN0ZXNpU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnVGlnZXIvVmFyeWFudExpc3Rlc2knO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VmFyeWFudExpc3Rlc2lSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxWYXJ5YW50TGlzdGVzaVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxWYXJ5YW50TGlzdGVzaVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxWYXJ5YW50TGlzdGVzaVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJUaWdlci9WYXJ5YW50TGlzdGVzaS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJUaWdlci9WYXJ5YW50TGlzdGVzaS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJUaWdlci9WYXJ5YW50TGlzdGVzaS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlRpZ2VyL1ZhcnlhbnRMaXN0ZXNpL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlRpZ2VyL1ZhcnlhbnRMaXN0ZXNpL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5WYXJ5YW50TGlzdGVzaVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZXNwb25zaXZlKClcclxuICAgIGV4cG9ydCBjbGFzcyBEYXRhQXVkaXRMb2dEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RGF0YUF1ZGl0TG9nUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIERhdGFBdWRpdExvZ0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRGF0YUF1ZGl0TG9nUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gRGF0YUF1ZGl0TG9nUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRGF0YUF1ZGl0TG9nUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRGF0YUF1ZGl0TG9nU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IERhdGFBdWRpdExvZ0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICBTZXJlbml0eS5FZGl0b3JVdGlscy5zZXRSZWFkb25seSh0aGlzLmVsZW1lbnQuZmluZCgnLmVkaXRvcicpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRGF0YUF1ZGl0TG9nR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8RGF0YUF1ZGl0TG9nUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdBZG1pbmlzdHJhdGlvbi5EYXRhQXVkaXRMb2cnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBEYXRhQXVkaXRMb2dEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIERhdGFBdWRpdExvZ1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIERhdGFBdWRpdExvZ1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIERhdGFBdWRpdExvZ1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFEuZmlyc3QoY29sdW1ucywgeCA9PiB4LmZpZWxkID09PSBEYXRhQXVkaXRMb2dSb3cuRmllbGRzLkxvZ1R5cGUpLmZvcm1hdCA9IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbjogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY3R4LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEYXRhQXVkaXRMb2dUeXBlLkRlbGV0ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFwiZmEtdGltZXMgdGV4dC1yZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEYXRhQXVkaXRMb2dUeXBlLkluc2VydDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFwiZmEtcGx1cyB0ZXh0LWdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGF0YUF1ZGl0TG9nVHlwZS5VcGRhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBcImZhLXBlbmNpbC1zcXVhcmUtbyB0ZXh0LW9yYW5nZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGljb24gPyAnPGkgY2xhc3M9XCJmYSAnICsgaWNvbiArICdcIj48L2k+ICcgOiAnJykgKyBcclxuICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5FbnVtRm9ybWF0dGVyLmZvcm1hdChEYXRhQXVkaXRMb2dUeXBlLCBjdHgudmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxLdWxsYW5pY2lSYXBvckZpbHRyZWxlcmlSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0FkbWluaXN0cmF0aW9uLkt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gS3VsbGFuaWNpUmFwb3JGaWx0cmVsZXJpUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEt1bGxhbmljaVJhcG9yRmlsdHJlbGVyaVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExhbmd1YWdlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IExhbmd1YWdlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmFwb3JsYXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmFwb3JsYXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmFwb3JsYXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJhcG9ybGFyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmFwb3JsYXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJhcG9ybGFyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmFwb3JsYXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJhcG9ybGFyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJhcG9ybGFyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJhcG9ybGFyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmFwb3JsYXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSYXBvcmxhckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJhcG9ybGFyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdBZG1pbmlzdHJhdGlvbi5SYXBvcmxhcic7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJhcG9ybGFyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSYXBvcmxhclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSYXBvcmxhclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJhcG9ybGFyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmFwb3JsYXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Sb2xlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJvbGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbUm9sZVJvdy5GaWVsZHMuUm9sZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsImRlY2xhcmUgdmFyIFZ1ZTtcclxuXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmdlblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gbmV3IFZ1ZSh7XHJcbiAgICAgICAgICAgICAgICBlbDogJCgnPGRpdi8+JykuYXBwZW5kVG8odGhpcy5lbGVtZW50KVswXSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29kZTogZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFibGUuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIklkZW50aWZpZXIgY2Fubm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWJsZS5Nb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IoXCJNb2R1bGUgY2Fubm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VyZ2VuU2VydmljZS5HZW5lcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0aW9uS2V5OiB0aGlzLmNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZTogdGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZU9wdGlvbnM6IHRoaXMuZ2VuZXJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoXCJDb2RlIGZvciBzZWxlY3RlZCB0YWJsZSBpcyBnZW5lcmF0ZWQuIFlvdSdsbCBuZWVkIHRvIHJlYnVpbGQgeW91ciBwcm9qZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbCB8fCAhdmFsLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLnRhYmxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkxpc3RUYWJsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3Rpb25LZXk6IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4gdm0udGFibGVzID0gcmVzcG9uc2UuRW50aXRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBRLmdldFRlbXBsYXRlKCdBZG1pbmlzdHJhdGlvbi5TZXJnZW5QYW5lbCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgU2VyZ2VuU2VydmljZS5MaXN0Q29ubmVjdGlvbnMoe30sIHJlc3BvbnNlID0+IHZtLmNvbm5lY3Rpb25zID0gcmVzcG9uc2UuRW50aXRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VHJhbnNsYXRpb25JdGVtLCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUcmFuc2xhdGlvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhc0NoYW5nZXM6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yOyBcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdrZXl1cC4nICsgdGhpcy51bmlxdWVOYW1lICsgJyBjaGFuZ2UuJyArIHRoaXMudW5pcXVlTmFtZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dC5jdXN0b20tdGV4dCcsIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gUS50cmltVG9OdWxsKCQoZS50YXJnZXQpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoJChlLnRhcmdldCkuZGF0YSgna2V5JykpLkN1c3RvbVRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgIGxldCBkb25lOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdzb3VyY2UtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5Tb3VyY2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlNvdXJjZVRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygndGFyZ2V0LXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5UYXJnZXRUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlRhcmdldFRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goeyBmaWVsZDogJ0tleScsIHdpZHRoOiAzMDAsIHNvcnRhYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1NvdXJjZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc291cmNlLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdDdXN0b21UZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8aW5wdXQvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjdXN0b20tdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWtleScsIGN0eC5pdGVtLktleSkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGFyZ2V0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd0YXJnZXQtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBLZXk6ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5Tb3VyY2VMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlRhcmdldExhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUNoYW5nZXMobGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2VMaWtlPGFueT4ge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNbaXRlbS5LZXldID0gaXRlbS5DdXN0b21UZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFRyYW5zbGF0aW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRDogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1xyXG4gICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gUS50cmltVG9OdWxsKGxhbmd1YWdlKSB8fCAnaW52YXJpYW50JztcclxuICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcygnVXNlciB0cmFuc2xhdGlvbnMgaW4gXCInICsgbGFuZ3VhZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICdcIiBsYW5ndWFnZSBhcmUgc2F2ZWQgdG8gXCJ1c2VyLnRleHRzLicgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlICsgJy5qc29uXCIgJyArICdmaWxlIHVuZGVyIFwifi9BcHBfRGF0YS90ZXh0cy9cIicsICcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMudmlldy5wYXJhbXM7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU291cmNlTGFuZ3VhZ2VJRCA9IHRoaXMuc291cmNlTGFuZ3VhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkgPSB0aGlzLnRhcmdldExhbmd1YWdlLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRhcmdldExhbmd1YWdlSUQgPSB0aGlzLnRhcmdldExhbmd1YWdlS2V5O1xyXG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld1N1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU2F2ZUNoYW5nZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYXBwbHktY2hhbmdlcy1idXR0b24nXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLCBzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFRyYW5zbGF0aW9uSXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3M7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hpbmcgPSBzZCh0aGlzLnNlYXJjaFRleHQpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaChzdHI6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaGluZykgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFEuaXNFbXB0eU9yTnVsbChzZWFyY2hpbmcpIHx8IG1hdGNoKGl0ZW0uS2V5KSB8fCBtYXRjaChpdGVtLlNvdXJjZVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaChpdGVtLlRhcmdldFRleHQpIHx8IG1hdGNoKGl0ZW0uQ3VzdG9tVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVXNlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRSb2xlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXJvbGVzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMgdGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJSb2xlRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRQZXJtaXNzaW9uc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2VkaXQtcm9sZXMtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXNlIGZpZWxkcyBhcmUgb25seSByZXF1aXJlZCBpbiBuZXcgcmVjb3JkIG1vZGVcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGltcGVyc29uYXRlID0gUS50cnlGaXJzdChjb2x1bW5zLCB4ID0+IHguZmllbGQgPT0gXCJJbXBlcnNvbmF0aW9uVG9rZW5cIik7XHJcbiAgICAgICAgICAgIGlmIChpbXBlcnNvbmF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpbXBlcnNvbmF0ZS5mb3JtYXQgPSBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9JbXBlcnNvbmF0ZUFzP3Rva2VuPScpfSR7Y3R4LnZhbHVlfVwiPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGkgY2xhc3M9XCJmYSBmYS11c2VyLXNlY3JldCB0ZXh0LWJsdWVcIj48L2k+PC9hPmA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkF1dGhvcml6YXRpb24ge1xyXG4gICAgZXhwb3J0IGRlY2xhcmUgbGV0IHVzZXJEZWZpbml0aW9uOiBTY3JpcHRVc2VyRGVmaW5pdGlvbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aG9yaXphdGlvbiwgJ3VzZXJEZWZpbml0aW9uJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRSZW1vdGVEYXRhKCdVc2VyRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB1ZCA9IHVzZXJEZWZpbml0aW9uO1xyXG4gICAgICAgIHJldHVybiB1ZC5Vc2VybmFtZSA9PT0gJ2FkbWluJyB8fCAhIXVkLlBlcm1pc3Npb25zW3Blcm1pc3Npb25LZXldO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKS5FbnRpdGllcztcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0Um9sZVBlcm1pc3Npb25zKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dUaXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1RpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5zZXJ2aWNlUmVxdWVzdCgnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5TYXZlU3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuU2NyaXB0SW5pdGlhbGl6YXRpb24ge1xyXG4gICAgUS5Db25maWcucmVzcG9uc2l2ZURpYWxvZ3MgPSB0cnVlO1xyXG4gICAgUS5Db25maWcucm9vdE5hbWVzcGFjZXMucHVzaCgnRV9NYWxpeWV0Jyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuXHJcbiAgICBpZiAoJC5mblsnY29sb3Jib3gnXSkge1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4V2lkdGggPSBcIjk1JVwiO1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4SGVpZ2h0ID0gXCI5NSVcIjtcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRhdGFHcmlkLmRlZmF1bHRQZXJzaXN0YW5jZVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gICAgU2VyZW5pdHkuc2V0dXBVSU92ZXJyaWRlcygpO1xyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcblxyXG4gICAgJCgoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGRlbW8gcGFnZSB1c2UgaXRzIG93biBzZXR0aW5ncyBmb3IgaWRsZSB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdTYW1wbGVzL0lkbGVUaW1lb3V0JykgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBtZXRhID0gJCgnbWV0YVtuYW1lPXVzZXJuYW1lXScpO1xyXG4gICAgICAgIGlmICgobWV0YS5sZW5ndGggJiYgbWV0YS5hdHRyKCdjb250ZW50JykpIHx8XHJcbiAgICAgICAgICAgICghbWV0YS5sZW5ndGggJiYgUS5BdXRob3JpemF0aW9uLmlzTG9nZ2VkSW4pKSB7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuSWRsZVRpbWVvdXQoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiAxNSAqIDYwLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZ0R1cmF0aW9uOiAyICogNjBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0IHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQmFzaWNQcm9ncmVzc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoe1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIGNoYW5nZTogKGUsIHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzTGFiZWwnKS50ZXh0KHRoaXMudmFsdWUgKyAnIC8gJyArIHRoaXMubWF4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1RpdGxlID0gUS50ZXh0KCdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuUGxlYXNlV2FpdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNhbmNlbGxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCdvcHRpb24nLCAnbWF4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCdvcHRpb24nLCAnbWF4JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnUHJvZ3Jlc3NCYXInKS5wcm9ncmVzc2JhcigpLnByb2dyZXNzYmFyKCd2YWx1ZScsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlhbG9nVGl0bGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dUaXRsZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNhbmNlbFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldERpYWxvZ0J1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy51aS1kaWFsb2cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lIC51aS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdvcGFjaXR5JywgJzAuNScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCBRLnRyaW1Ub051bGwodGhpcy5jYW5jZWxUaXRsZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuQ2FuY2VsVGl0bGUnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuICAgICAgICAgICAgb3B0LndpZHRoID0gNjAwO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdERpYWxvZygpIHtcclxuICAgICAgICAgICAgc3VwZXIuaW5pdERpYWxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLnVpLWRpYWxvZycpLmZpbmQoJy51aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncy1EaWFsb2dDb250ZW50IHMtQmFzaWNQcm9ncmVzc0RpYWxvZ0NvbnRlbnQnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fU3RhdHVzVGV4dCcgY2xhc3M9J3N0YXR1cy10ZXh0JyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBpZD0nfl9Qcm9ncmVzc0JhcicgY2xhc3M9J3Byb2dyZXNzLWJhcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fUHJvZ3Jlc3NMYWJlbCcgY2xhc3M9J3Byb2dyZXNzLWxhYmVsJyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBCdWxrU2VydmljZUFjdGlvbiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBrZXlzOiBzdHJpbmdbXTtcclxuICAgICAgICBwcm90ZWN0ZWQgcXVldWU6IHN0cmluZ1tdO1xyXG4gICAgICAgIHByb3RlY3RlZCBxdWV1ZUluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgcHJvdGVjdGVkIHByb2dyZXNzRGlhbG9nOiBCYXNpY1Byb2dyZXNzRGlhbG9nO1xyXG4gICAgICAgIHByb3RlY3RlZCBwZW5kaW5nUmVxdWVzdHM6IG51bWJlcjtcclxuICAgICAgICBwcm90ZWN0ZWQgY29tcGxldGVkUmVxdWVzdHM6IG51bWJlcjtcclxuICAgICAgICBwcm90ZWN0ZWQgZXJyb3JCeUtleTogUS5EaWN0aW9uYXJ5PFNlcmVuaXR5LlNlcnZpY2VFcnJvcj47XHJcbiAgICAgICAgcHJpdmF0ZSBzdWNjZXNzQ291bnQ7XHJcbiAgICAgICAgcHJpdmF0ZSBlcnJvckNvdW50O1xyXG4gICAgICAgIHB1YmxpYyBkb25lOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUHJvZ3Jlc3NEaWFsb2coKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cgPSBuZXcgQmFzaWNQcm9ncmVzc0RpYWxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy5tYXggPSB0aGlzLmtleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLnZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb25maXJtYXRpb25Gb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uQ29uZmlybWF0aW9uRm9ybWF0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29uZmlybWF0aW9uTWVzc2FnZSh0YXJnZXRDb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQodGhpcy5nZXRDb25maXJtYXRpb25Gb3JtYXQoKSwgdGFyZ2V0Q291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm0odGFyZ2V0Q291bnQsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBRLmNvbmZpcm0odGhpcy5nZXRDb25maXJtYXRpb25NZXNzYWdlKHRhcmdldENvdW50KSwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROb3RoaW5nVG9Qcm9jZXNzTWVzc2FnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5Ob3RoaW5nVG9Qcm9jZXNzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbm90aGluZ1RvUHJvY2VzcygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlFcnJvcih0aGlzLmdldE5vdGhpbmdUb1Byb2Nlc3NNZXNzYWdlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFBhcmFsbGVsUmVxdWVzdHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJhdGNoU2l6ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc3RhcnRQYXJhbGxlbEV4ZWN1dGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmVzc0RpYWxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWRSZXF1ZXN0cyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JCeUtleSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gdGhpcy5rZXlzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWVJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbGxlbFJlcXVlc3RzID0gdGhpcy5nZXRQYXJhbGxlbFJlcXVlc3RzKCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJhbGxlbFJlcXVlc3RzLS0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0QmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNlcnZpY2VDYWxsQ2xlYW51cCgpIHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMtLTtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWRSZXF1ZXN0cysrO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gUS50ZXh0KCh0aGlzLnByb2dyZXNzRGlhbG9nLmNhbmNlbGxlZCA/XHJcbiAgICAgICAgICAgICAgICAnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLkNhbmNlbFRpdGxlJyA6ICdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuUGxlYXNlV2FpdCcpKTtcclxuXHJcbiAgICAgICAgICAgIHRpdGxlICs9ICcgKCc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3NDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5TdWNjZXNzQ291bnQnKSwgdGhpcy5zdWNjZXNzQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VjY2Vzc0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGUgKz0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkVycm9yQ291bnQnKSwgdGhpcy5lcnJvckNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy50aXRsZSA9IHRpdGxlICsgJyknO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLnZhbHVlID0gdGhpcy5zdWNjZXNzQ291bnQgKyB0aGlzLmVycm9yQ291bnQ7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmVzc0RpYWxvZy5jYW5jZWxsZWQgJiYgdGhpcy5wcm9ncmVzc0RpYWxvZy52YWx1ZSA8IHRoaXMua2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZU5leHRCYXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBleGVjdXRlRm9yQmF0Y2goYmF0Y2g6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZXhlY3V0ZU5leHRCYXRjaCgpIHtcclxuICAgICAgICAgICAgdmFyIGJhdGNoU2l6ZSA9IHRoaXMuZ2V0QmF0Y2hTaXplKCk7XHJcbiAgICAgICAgICAgIHZhciBiYXRjaCA9IFtdO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+PSBiYXRjaFNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWV1ZUluZGV4ID49IHRoaXMucXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmF0Y2gucHVzaCh0aGlzLnF1ZXVlW3RoaXMucXVldWVJbmRleCsrXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlRm9yQmF0Y2goYmF0Y2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QWxsSGFkRXJyb3JzRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLkFsbEhhZEVycm9yc0Zvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dBbGxIYWRFcnJvcnMoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5RXJyb3IoUS5mb3JtYXQodGhpcy5nZXRBbGxIYWRFcnJvcnNGb3JtYXQoKSwgdGhpcy5lcnJvckNvdW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U29tZUhhZEVycm9yc0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5Tb21lSGFkRXJyb3JzRm9ybWF0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2hvd1NvbWVIYWRFcnJvcnMoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5V2FybmluZyhRLmZvcm1hdCh0aGlzLmdldFNvbWVIYWRFcnJvcnNGb3JtYXQoKSwgdGhpcy5zdWNjZXNzQ291bnQsIHRoaXMuZXJyb3JDb3VudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEFsbFN1Y2Nlc3NGb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uQWxsU3VjY2Vzc0Zvcm1hdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNob3dBbGxTdWNjZXNzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS5mb3JtYXQodGhpcy5nZXRBbGxTdWNjZXNzRm9ybWF0KCksIHRoaXMuc3VjY2Vzc0NvdW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2hvd1Jlc3VsdHMoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yQ291bnQgPT09IDAgJiYgdGhpcy5zdWNjZXNzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aGluZ1RvUHJvY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvckNvdW50ID4gMCAmJiB0aGlzLnN1Y2Nlc3NDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWxsSGFkRXJyb3JzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTb21lSGFkRXJyb3JzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbFN1Y2Nlc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBleGVjdXRlKGtleXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5cyA9IGtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGhpbmdUb1Byb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm0odGhpcy5rZXlzLmxlbmd0aCwgKCkgPT4gdGhpcy5zdGFydFBhcmFsbGVsRXhlY3V0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X3N1Y2Nlc3NDb3VudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VjY2Vzc0NvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0X3N1Y2Nlc3NDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0NvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRfZXJyb3JDb3VudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldF9lcnJvckNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5EaWFsb2dVdGlscyB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24oZWxlbWVudDogSlF1ZXJ5LCBoYXNQZW5kaW5nQ2hhbmdlczogKCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGVsZW1lbnQub24oJ2RpYWxvZ2JlZm9yZWNsb3NlIHBhbmVsYmVmb3JlY2xvc2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LldYLmhhc09yaWdpbmFsRXZlbnQoZSkgfHwgIWhhc1BlbmRpbmdDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdTaXRlLkRpYWxvZ3MuUGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24nKSxcclxuICAgICAgICAgICAgICAgICgpID0+IGVsZW1lbnQuZmluZCgnZGl2LnNhdmUtYW5kLWNsb3NlLWJ1dHRvbicpLmNsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25ObzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcygndWktZGlhbG9nLWNvbnRlbnQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlhbG9nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdzLVBhbmVsJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2cuY2xvc2VQYW5lbChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVudW1TZWxlY3RGb3JtYXR0ZXIgaW1wbGVtZW50cyBTbGljay5Gb3JtYXR0ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgZW51bVR5cGUgPSBTZXJlbml0eS5FbnVtVHlwZVJlZ2lzdHJ5LmdldCh0aGlzLmVudW1LZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNiID0gXCI8c2VsZWN0PlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPic7XHJcbiAgICAgICAgICAgICAgICBzYiArPSBRLmh0bWxFbmNvZGUodGhpcy5lbXB0eUl0ZW1UZXh0IHx8IFEudGV4dChcIkNvbnRyb2xzLlNlbGVjdEVkaXRvci5FbXB0eUl0ZW1UZXh0XCIpKTtcclxuICAgICAgICAgICAgICAgIHNiICs9ICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB4IG9mIE9iamVjdC5rZXlzKGVudW1UeXBlKS5maWx0ZXIodiA9PiAhaXNOYU4ocGFyc2VJbnQodiwgMTApKSkpIHtcclxuICAgICAgICAgICAgICAgIHNiICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIFEuYXR0ckVuY29kZSh4KSArICdcIic7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2IgKz0gXCIgc2VsZWN0ZWRcIjtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZW51bVR5cGVbeF07XHJcbiAgICAgICAgICAgICAgICBzYiArPSBcIj5cIjtcclxuICAgICAgICAgICAgICAgIHNiICs9IFEuaHRtbEVuY29kZShRLnRyeUdldFRleHQoXCJFbnVtcy5cIiArIHRoaXMuZW51bUtleSArIFwiLlwiICsgbmFtZSkgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzYiArPSBcIjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzYiArPSBcIjwvc2VsZWN0PlwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgZW51bUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBhbGxvd0NsZWFyOiBib29sZWFuO1xyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBlbXB0eUl0ZW1UZXh0OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEV4cG9ydE9wdGlvbnMge1xyXG4gICAgICAgIGdyaWQ6IFNlcmVuaXR5LkRhdGFHcmlkPGFueSwgYW55PjtcclxuICAgICAgICBzZXJ2aWNlOiBzdHJpbmc7XHJcbiAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEV4Y2VsRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogRXhjZWxFeHBvcnRPcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGludDogUS5jb2FsZXNjZShvcHRpb25zLmhpbnQsICdFeGNlbCcpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJycpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQteGxzeC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZCA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBRLmRlZXBDbG9uZShncmlkLmdldFZpZXcoKS5wYXJhbXMpIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Ta2lwID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29ydEJ5ID0gZ3JpZC5nZXRWaWV3KCkuc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gZ3JpZC5nZXRHcmlkKCkuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMucHVzaChjb2x1bW4uaWQgfHwgY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgUS5wb3N0VG9TZXJ2aWNlKHsgc2VydmljZTogb3B0aW9ucy5zZXJ2aWNlLCByZXF1ZXN0OiByZXF1ZXN0LCB0YXJnZXQ6ICdfYmxhbmsnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogb3B0aW9ucy5zZXBhcmF0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcyhbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lZGl0b3IoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JCYXNlPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxURW50aXR5LCBhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dElkID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbnRpdHkgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJgXCIgKyB0aGlzLm5leHRJZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldE5ld0lkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICBlbnRpdHlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlKG9wdDogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8YW55PiwgY2FsbGJhY2s6IChyOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBvcHQucmVxdWVzdCBhcyBTZXJlbml0eS5TYXZlUmVxdWVzdDxURW50aXR5PjtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IFEuZGVlcENsb25lKHJlcXVlc3QuRW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQocm93KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIChyb3cgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IFEuaW5kZXhPZihpdGVtcywgeCA9PiB0aGlzLmlkKHgpID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBRLmRlZXBDbG9uZSh7fSBhcyBURW50aXR5LCBpdGVtc1tpbmRleF0sIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW50aXRpZXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlRW50aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRlbGV0ZUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IFRFbnRpdHksIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0RW50aXRpZXMoaXRlbXM6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5ld0VudGl0eSgpOiBURW50aXR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFRFbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFEudHJ5Rmlyc3QoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09ICdhZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKHRoaXMuZ2V0TmV3RW50aXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoeCA9PiB4LmNzc0NsYXNzICE9IFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZWRpdEl0ZW0oZW50aXR5T3JJZDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBlbnRpdHlPcklkO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vbkRlbGV0ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZUVudGl0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wZXJ0eSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eS5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eS5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVEVudGl0eVtdIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXRJdGVtcygpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICYmIGlkLnRvU3RyaW5nKCkuY2hhckF0KDApID09ICdgJylcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgeVtwXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoKHZhbHVlIHx8IFtdKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5IGFzIGFueSlbcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAoeSBhcyBhbnkpW3BdID0gXCJgXCIgKyB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRFbnRpdHksIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJfX2lkXCI7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uU2F2ZTogKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIG9uRGVsZXRlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuRGVsZXRlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwbHkgY2hhbmdlcyBidXR0b24gZG9lc24ndCB3b3JrIHByb3Blcmx5IHdpdGggaW4tbWVtb3J5IGdyaWRzIHlldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBseUNoYW5nZXNCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzQnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2F2ZSAmJiB0aGlzLm9uU2F2ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSGFuZGxlcihvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGUgJiYgdGhpcy5vbkRlbGV0ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xyXG4gICAgICAgIGVkaXRvclR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgZWRpdG9yT3B0aW9ucz86IGFueTtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIGlzSHRtbD86IGJvb2xlYW47XHJcbiAgICAgICAgdmFsdWU/OiBhbnk7XHJcbiAgICAgICAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIHZhbGlkYXRlVmFsdWU6ICh2OiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvbXB0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlEaWFsb2c8YW55LCBQcm9tcHREaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUHJvbXB0RGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFRLmlzRW1wdHlPck51bGwodGhpcy5vcHRpb25zLmNzc0NsYXNzKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY3NzQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFRLmlzRW1wdHlPck51bGwodGhpcy5vcHRpb25zLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gJChcIjxkaXYvPlwiKS5hZGRDbGFzcyhcIm1lc3NhZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKHRoaXMuYnlJZChcIlByb3BlcnR5R3JpZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNIdG1sID8gbXNnLmh0bWwodGhpcy5vcHRpb25zLm1lc3NhZ2UpIDogbXNnLnRleHQodGhpcy5vcHRpb25zLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1RpdGxlID0gdGhpcy5vcHRpb25zLnRpdGxlIHx8IFwiUHJvbXB0XCI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ0J1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KFwiRGlhbG9ncy5Pa0J1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlVmFsdWUgPT0gbnVsbCB8fCB0aGlzLm9wdGlvbnMudmFsaWRhdGVWYWx1ZSh0aGlzLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoXCJEaWFsb2dzLkNhbmNlbEJ1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGxvYWRJbml0aWFsRW50aXR5KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yVHlwZTogdGhpcy5vcHRpb25zLmVkaXRvclR5cGUgfHwgXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogUS5jb2FsZXNjZSh0aGlzLm9wdGlvbnMucmVxdWlyZWQsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvclBhcmFtczogdGhpcy5vcHRpb25zLmVkaXRvck9wdGlvbnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdldFNhdmVFbnRpdHkoKSBhcyBhbnkpLlZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB2YWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQubG9hZChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmFsdWU6IHZcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHByb21wdCh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRlVmFsdWU6IChzdHJpbmcpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgbmV3IFByb21wdERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVWYWx1ZTogdiA9PiB2YWxpZGF0ZVZhbHVlKHYpXHJcbiAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldCB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgY2FzY2FkZUZyb20/OiBzdHJpbmc7XHJcbiAgICAgICAgY2FzY2FkZUZpZWxkPzogc3RyaW5nO1xyXG4gICAgICAgIGNhc2NhZGVWYWx1ZT86IGFueTtcclxuICAgIH1cclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTZXJ2aWNlRWRpdG9yQmFzZTxUT3B0aW9ucyBleHRlbmRzIFNlcnZpY2VFZGl0b3JPcHRpb25zLCBUUm93PiBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJBamF4RWRpdG9yPFRPcHRpb25zLCBUUm93PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBjYXNjYWRlTGluazogU2VyZW5pdHkuQ2FzY2FkZWRXaWRnZXRMaW5rPFNlcmVuaXR5LldpZGdldDxhbnk+PjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaGlkZGVuOiBKUXVlcnksIG9wdGlvbnM6IFRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGhpZGRlbiwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldENhc2NhZGVGcm9tKHRoaXMub3B0aW9ucy5jYXNjYWRlRnJvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNldENhc2NhZGVGcm9tKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKFEuaXNFbXB0eU9yTnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhc2NhZGVMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNjYWRlTGluay5zZXRfcGFyZW50SUQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNjYWRlTGluayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhc2NhZGVGcm9tID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYXNjYWRlTGluayA9IG5ldyBTZXJlbml0eS5DYXNjYWRlZFdpZGdldExpbmsoU2VyZW5pdHkuV2lkZ2V0LCB0aGlzLFxyXG4gICAgICAgICAgICAgICAgcCA9PiB0aGlzLmNhc2NhZGVWYWx1ZSA9IHRoaXMuZ2V0Q2FzY2FkZUZyb21WYWx1ZShwKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhc2NhZGVMaW5rLnNldF9wYXJlbnRJRCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYXNjYWRlRnJvbSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjYXNjYWRlVmFsdWUoKTogYW55IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXNjYWRlVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IGNhc2NhZGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5vcHRpb25zLmNhc2NhZGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhc2NhZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY2FzY2FkZUZpZWxkKCk6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FzY2FkZUZpZWxkIHx8IHRoaXMub3B0aW9ucy5jYXNjYWRlRnJvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgY2FzY2FkZUZpZWxkKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhc2NhZGVGaWVsZCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjYXNjYWRlRnJvbSgpOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhc2NhZGVGcm9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBjYXNjYWRlRnJvbSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5vcHRpb25zLmNhc2NhZGVGcm9tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhc2NhZGVGcm9tKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRDYXNjYWRlRnJvbVZhbHVlKHBhcmVudDogU2VyZW5pdHkuV2lkZ2V0PGFueT4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmVuaXR5LkVkaXRvclV0aWxzLmdldFZhbHVlKHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5jbHVkZUNvbHVtbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U29ydCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlRGVsYXkoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbGFzdFJlcXVlc3Q6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGVRdWVyeUJ5S2V5KG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VFJvdz4+KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gPFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdD5vcHRpb25zLnJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuQ29sdW1uU2VsZWN0aW9uID0gU2VyZW5pdHkuUmV0cmlldmVDb2x1bW5TZWxlY3Rpb24ua2V5T25seTtcclxuICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IHRoaXMuZ2V0SW5jbHVkZUNvbHVtbnMoKTtcclxuICAgICAgICAgICAgc3VwZXIuZXhlY3V0ZVF1ZXJ5QnlLZXkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5KG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUUm93Pj4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gPFNlcmVuaXR5Lkxpc3RSZXF1ZXN0Pm9wdGlvbnMucmVxdWVzdDtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QuQ29sdW1uU2VsZWN0aW9uID0gU2VyZW5pdHkuQ29sdW1uU2VsZWN0aW9uLktleU9ubHk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMgPSB0aGlzLmdldEluY2x1ZGVDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU29ydCA9IHRoaXMuZ2V0U29ydCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LkV4Y2x1ZGVUb3RhbENvdW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhc2NhZGVGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5FcXVhbGl0eUZpbHRlciA9IHJlcXVlc3QuRXF1YWxpdHlGaWx0ZXIgfHwge307XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LkVxdWFsaXR5RmlsdGVyW3RoaXMuY2FzY2FkZUZpZWxkXSA9IHRoaXMuY2FzY2FkZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmJsb2NrVUkgPSBmYWxzZTtcclxuICAgICAgICAgICAgb3B0aW9ucy5lcnJvciA9ICgpID0+IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFJlcXVlc3QgIT0gbnVsbCAmJiB0aGlzLmxhc3RSZXF1ZXN0LnJlYWR5U3RhdGUgIT0gWE1MSHR0cFJlcXVlc3QuRE9ORSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFJlcXVlc3QuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcXVlc3QgPSBRLnNlcnZpY2VDYWxsKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0LnRoZW4oKCkgPT4gdGhpcy5sYXN0UmVxdWVzdCA9IG51bGwsICgpID0+IHRoaXMubGFzdFJlcXVlc3QgPSBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGVkaXRvciB3aWRnZXQgYnV0IGl0IG9ubHkgZGlzcGxheXMgYSB0ZXh0LCBub3QgZWRpdHMgaXQuXHJcbiAgICAgKiAgXHJcbiAgICAgKi9cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLmVsZW1lbnQoXCI8ZGl2Lz5cIilcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKFtTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIGV4cG9ydCBjbGFzcyBTdGF0aWNUZXh0QmxvY2sgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8U3RhdGljVGV4dEJsb2NrT3B0aW9ucz5cclxuICAgICAgICBpbXBsZW1lbnRzIFNlcmVuaXR5LklTZXRFZGl0VmFsdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHRpb25zOiBTdGF0aWNUZXh0QmxvY2tPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyBoaWRlIHRoZSBjYXB0aW9uIGxhYmVsIGZvciB0aGlzIGVkaXRvciBpZiBpbiBhIGZvcm0uIHVnbHkgaGFja1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZGVMYWJlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCcuY2FwdGlvbicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudENvbnRlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlRWxlbWVudENvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gUS5jb2FsZXNjZSh0aGlzLm9wdGlvbnMudGV4dCwgdGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBpc0xvY2FsVGV4dCBpcyBzZXQsIHRleHQgaXMgYWN0dWFsbHkgYSBsb2NhbCB0ZXh0IGtleVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzTG9jYWxUZXh0KVxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFEudGV4dCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvbid0IGh0bWwgZW5jb2RlIGlmIGlzSHRtbCBvcHRpb24gaXMgdHJ1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzSHRtbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5odG1sKHRleHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dCh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJ5IGltcGxlbWVudGluZyBJU2V0RWRpdFZhbHVlIGludGVyZmFjZSwgd2UgYWxsb3cgdGhpcyBlZGl0b3IgdG8gZGlzcGxheSBpdHMgZmllbGQgdmFsdWUuXHJcbiAgICAgICAgICogQnV0IG9ubHkgZG8gdGhpcyB3aGVuIG91ciB0ZXh0IGNvbnRlbnQgaXMgbm90IGV4cGxpY2l0bHkgc2V0IGluIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZTogYW55LCBwcm9wZXJ0eTogU2VyZW5pdHkuUHJvcGVydHlJdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gUS5jb2FsZXNjZSh0aGlzLm9wdGlvbnMudGV4dCwgc291cmNlW3Byb3BlcnR5Lm5hbWVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFN0YXRpY1RleHRCbG9ja09wdGlvbnMge1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBpc0h0bWw6IGJvb2xlYW47XHJcbiAgICAgICAgaXNMb2NhbFRleHQ6IGJvb2xlYW47XHJcbiAgICAgICAgaGlkZUxhYmVsOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5LCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihzZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gUS5jb2FsZXNjZShjdXJyZW50TGFuZ3VhZ2UsICdlbicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFEuQ29uZmlnLmFwcGxpY2F0aW9uUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGggIT0gJy8nICYmIFEuZW5kc1dpdGgocGF0aCwgJy8nKSlcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICQuY29va2llKCdMYW5ndWFnZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFEuZ2V0TG9va3VwQXN5bmM8QWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpLnRoZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVEuYW55KHguaXRlbXMsIHogPT4gei5MYW5ndWFnZUlkID09PSBjdXJyZW50TGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGN1cnJlbnRMYW5ndWFnZS5sYXN0SW5kZXhPZignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2Uuc3Vic3RyKDAsIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeSA9PiB5Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgb2YgeC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgbC5MYW5ndWFnZUlkLCBsLkxhbmd1YWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnZhbChjdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2lkZWJhclNlYXJjaCBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBwcml2YXRlIG1lbnVVTDogSlF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnB1dDogSlF1ZXJ5LCBtZW51VUw6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dChpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudVVMID0gbWVudVVMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSB0aGlzLm1lbnVVTC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0ZXh0LnJlcGxhY2UoJywnLCAnICcpLnNwbGl0KCcgJykuZmlsdGVyKHggPT4gIVEuaXNUcmltbWVkRW1wdHkoeCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBRLnRyaW1Ub051bGwoU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhwYXJ0c1tpXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGxpTGlzdDtcclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsICYmICEodGl0bGUuaW5kZXhPZihwKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSBpdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBUaGVtZVNlbGVjdGlvbiBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihzZWxlY3Q6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihzZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFEuQ29uZmlnLmFwcGxpY2F0aW9uUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGggIT0gJy8nICYmIFEuZW5kc1dpdGgocGF0aCwgJy8nKSlcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnRV9NYWxpeWV0VGhlbWUnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lID0gc2VsZWN0LnZhbCgpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhcmtTaWRlYmFyID0gdGhlbWUuaW5kZXhPZignbGlnaHQnKSA8IDA7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NraW4tJyArIHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdza2luLScgKyB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2Rhcmstc2lkZWJhcicsIGRhcmtTaWRlYmFyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcygnbGlnaHQtc2lkZWJhcicsICFkYXJrU2lkZWJhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYXp1cmUnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQXp1cmUnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2F6dXJlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUF6dXJlTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2Nvc21vcycsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVDb3Ntb3MnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2Nvc21vcy1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVDb3Ntb3NMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnZ2xhc3N5JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdsYXNzeScpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnZ2xhc3N5LWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdsYXNzeUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibHVlJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsdWUnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsdWUtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmx1ZUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdwdXJwbGUnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUHVycGxlJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdwdXJwbGUtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUHVycGxlTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3JlZCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVSZWQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3JlZC1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVSZWRMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnZ3JlZW4nLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lR3JlZW4nKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2dyZWVuLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdyZWVuTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3llbGxvdycsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVZZWxsb3cnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3llbGxvdy1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVZZWxsb3dMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmxhY2snLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmxhY2snKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsYWNrLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsYWNrTGlnaHQnKSk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3QudmFsKHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEN1cnJlbnRUaGVtZSgpIHtcclxuICAgICAgICAgICAgdmFyIHNraW5DbGFzcyA9IFEuZmlyc3QoKCQoJ2JvZHknKS5hdHRyKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLCB4ID0+IFEuc3RhcnRzV2l0aCh4LCAnc2tpbi0nKSk7XHJcbiAgICAgICAgICAgIGlmIChza2luQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBza2luQ2xhc3Muc3Vic3RyKDUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGRmRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAgICAgZ3JpZDogU2VyZW5pdHkuRGF0YUdyaWQ8YW55LCBhbnk+O1xyXG4gICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gYm9vbGVhbjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgICAgIHNlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgICAgICAgcmVwb3J0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgdGl0bGVUb3A/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGVGb250U2l6ZT86IG51bWJlcjtcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZztcclxuICAgICAgICBwYWdlTnVtYmVycz86IGJvb2xlYW47XHJcbiAgICAgICAgY29sdW1uVGl0bGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgICAgICB0YWJsZU9wdGlvbnM/OiBqc1BERi5BdXRvVGFibGVPcHRpb25zO1xyXG4gICAgICAgIG91dHB1dD86IHN0cmluZztcclxuICAgICAgICBhdXRvUHJpbnQ/OiBib29sZWFuO1xyXG4gICAgICAgIHByaW50RGF0ZVRpbWVIZWFkZXI/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGRmRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnM6IFNsaWNrLkNvbHVtbltdLCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblRpdGxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3JjQ29sdW1ucy5tYXAoc3JjID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IGpzUERGLkF1dG9UYWJsZUNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5OiBzcmMuaWQgfHwgc3JjLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzcmMubmFtZSB8fCAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uVGl0bGVzICYmIGNvbHVtblRpdGxlc1tjb2wuZGF0YUtleV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBjb2wudGl0bGUgPSBjb2x1bW5UaXRsZXNbY29sLmRhdGFLZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZToganNQREYuQXV0b1RhYmxlU3R5bGVzID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoKHNyYy5jc3NDbGFzcyB8fCAnJykuaW5kZXhPZihcImFsaWduLXJpZ2h0XCIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGFsaWduID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzcmMuY3NzQ2xhc3MgfHwgJycpLmluZGV4T2YoXCJhbGlnbi1jZW50ZXJcIikgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oYWxpZ24gPSAnY2VudGVyJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5TdHlsZXNbY29sLmRhdGFLZXldID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0F1dG9UYWJsZURhdGEoZW50aXRpZXM6IGFueVtdLCBrZXlzOiBzdHJpbmdbXSwgc3JjQ29sdW1uczogU2xpY2suQ29sdW1uW10gKSB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjZWxsID0gMDsgY2VsbCA8IHNyY0NvbHVtbnMubGVuZ3RoOyBjZWxsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gc3JjQ29sdW1uc1tjZWxsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxkID0gc3JjLmZpZWxkIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2NlbGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjLmZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdHRlcihyb3csIGNlbGwsIGl0ZW1bZmxkXSwgc3JjLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3JjLmZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdCh7IHJvdzogcm93LCBjZWxsOiBjZWxsLCBpdGVtOiBpdGVtLCB2YWx1ZTogaXRlbVtmbGRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBpdGVtW2ZsZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sIHx8IChodG1sLmluZGV4T2YoJzwnKSA8IDAgJiYgaHRtbC5pbmRleE9mKCcmJykgPCAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWwuY2hpbGRyZW5bMF0pLmlzKFwiOmlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW5bMF0pLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsLmNoaWxkcmVuKS5pcygnLmNoZWNrLWJveCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW4pLmhhc0NsYXNzKFwiY2hlY2tlZFwiKSA/IFwiWFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZWwudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZHN0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleHBvcnRUb1BkZihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZyA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGluY2x1ZGVBdXRvVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gUS5kZWVwQ2xvbmUoZy52aWV3LnBhcmFtcykgYXMgU2VyZW5pdHkuTGlzdFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU2tpcCA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgc29ydEJ5ID0gZy52aWV3LnNvcnRCeTtcclxuICAgICAgICAgICAgaWYgKHNvcnRCeSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdyaWRDb2x1bW5zID0gZy5zbGlja0dyaWQuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBncmlkQ29sdW1ucyA9IGdyaWRDb2x1bW5zLmZpbHRlcih4ID0+IHguaWQgIT09IFwiX19zZWxlY3RfX1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uIG9mIGdyaWRDb2x1bW5zKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucy5wdXNoKGNvbHVtbi5pZCB8fCBjb2x1bW4uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGcudmlldy51cmwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb2MgPSBuZXcganNQREYoJ2wnLCAncHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjQ29sdW1ucyA9IGdyaWRDb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnMsIGNvbHVtblN0eWxlcywgb3B0aW9ucy5jb2x1bW5UaXRsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gY29sdW1ucy5tYXAoeCA9PiB4LmRhdGFLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdGllcyA9ICg8U2VyZW5pdHkuTGlzdFJlc3BvbnNlPGFueT4+cmVzcG9uc2UpLkVudGl0aWVzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdG9BdXRvVGFibGVEYXRhKGVudGl0aWVzLCBrZXlzLCBzcmNDb2x1bW5zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKG9wdGlvbnMudGl0bGVGb250U2l6ZSB8fCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTdHlsZSgnYm9sZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXBvcnRUaXRsZSA9IG9wdGlvbnMucmVwb3J0VGl0bGUgfHwgZy5nZXRUaXRsZSgpIHx8IFwiUmVwb3J0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHJlcG9ydFRpdGxlLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnRpdGxlVG9wIHx8IDI1LCB7IGhhbGlnbjogJ2NlbnRlcicgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VzRXhwID0gXCJ7e1R9fVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZU51bWJlcnMgPSBvcHRpb25zLnBhZ2VOdW1iZXJzID09IG51bGwgfHwgb3B0aW9ucy5wYWdlTnVtYmVycztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b09wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogeyB0b3A6IDI1LCBsZWZ0OiAyNSwgcmlnaHQ6IDI1LCBib3R0b206IHBhZ2VOdW1iZXJzID8gMjUgOiAzMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdsaW5lYnJlYWsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFBhZGRpbmc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZ246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblN0eWxlczogY29sdW1uU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy50YWJsZU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU51bWJlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvb3RlciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gZGF0YS5wYWdlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCBwYWdlIG51bWJlciBwbHVnaW4gb25seSBhdmFpbGFibGUgaW4ganNwZGYgdjEuMCtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLnB1dFRvdGFsUGFnZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBcIiAvIFwiICsgdG90YWxQYWdlc0V4cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KHN0ciwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gYXV0b09wdGlvbnMubWFyZ2luLmJvdHRvbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmFmdGVyUGFnZUNvbnRlbnQgPSBmb290ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByaW50IGhlYWRlciBvZiBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlciA9PSBudWxsIHx8IG9wdGlvbnMucHJpbnREYXRlVGltZUhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlUGFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFN0eWxlKCdub3JtYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U2l6ZSg4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRlIGFuZCB0aW1lIG9mIHRoZSByZXBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGVUZXh0KFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCBcImRkLU1NLXl5eXkgSEg6bW1cIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIGF1dG9PcHRpb25zLm1hcmdpbi5yaWdodCwgMTMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9PcHRpb25zLmJlZm9yZVBhZ2VDb250ZW50ID0gYmVmb3JlUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvVGFibGUoY29sdW1ucywgZGF0YSwgYXV0b09wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvYy5wdXRUb3RhbFBhZ2VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5wdXRUb3RhbFBhZ2VzKHRvdGFsUGFnZXNFeHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5vdXRwdXQgfHwgb3B0aW9ucy5vdXRwdXQgPT0gXCJmaWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZSB8fCBvcHRpb25zLnJlcG9ydFRpdGxlIHx8IFwiezB9X3sxfS5wZGZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBRLmZvcm1hdChmaWxlTmFtZSwgZy5nZXRUaXRsZSgpIHx8IFwicmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLmZvcm1hdERhdGUobmV3IERhdGUoKSwgXCJ5eXl5TU1kZF9ISG1tXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hdXRvUHJpbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hdXRvUHJpbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgPT0gJ25ld3dpbmRvdycgfHwgJ19ibGFuaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJsbmV3d2luZG93JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvdXRwdXQgPT0gJ3dpbmRvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICdkYXRhdXJpJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLm91dHB1dChvdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPFNlcmVuaXR5LlRvb2xCdXR0b24+e1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBoaW50OiBvcHRpb25zLmhpbnQgfHwgJ1BERicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGV4cG9ydFRvUGRmKG9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBvcHRpb25zLnNlcGFyYXRvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5jbHVkZUpzUERGKCkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNQREYgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJChcImpzUERGU2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiPHNjcmlwdC8+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJqc1BERlNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgUS5yZXNvbHZlVXJsKFwifi9TY3JpcHRzL2pzcGRmLm1pbi5qc1wiKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluY2x1ZGVBdXRvVGFibGUoKSB7XHJcbiAgICAgICAgICAgIGluY2x1ZGVKc1BERigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzUERGID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgKGpzUERGIGFzIGFueSkuQVBJID09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoanNQREYgYXMgYW55KS5BUEkuYXV0b1RhYmxlICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9ICQoXCJqc1BERkF1dG9UYWJsZVNjcmlwdFwiKTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJChcIjxzY3JpcHQvPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwianNQREZBdXRvVGFibGVTY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFEucmVzb2x2ZVVybChcIn4vU2NyaXB0cy9qc3BkZi5wbHVnaW4uYXV0b3RhYmxlLm1pbi5qc1wiKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwb3J0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJlcG9ydERpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnQ6IFNlcmVuaXR5LlJlcG9ydGluZy5SZXBvcnRSZXRyaWV2ZVJlc3VsdDtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZXBvcnREaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVwb3J0KHRoaXMub3B0aW9ucy5yZXBvcnRLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ0J1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVByb3BlcnR5R3JpZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgJiYgdGhpcy5ieUlkKCdQcm9wZXJ0eUdyaWQnKS5odG1sKCcnKS5hdHRyKCdjbGFzcycsICcnKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQgPSBuZXcgU2VyZW5pdHkuUHJvcGVydHlHcmlkKHRoaXMuYnlJZCgnUHJvcGVydHlHcmlkJyksIHtcclxuICAgICAgICAgICAgICAgIGlkUHJlZml4OiB0aGlzLmlkUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgdXNlQ2F0ZWdvcmllczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLnJlcG9ydC5Qcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0pLmluaXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbG9hZFJlcG9ydChyZXBvcnRLZXk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L1JlcG9ydC9SZXRyaWV2ZScpLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEtleTogcmVwb3J0S2V5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnQgPSByZXNwb25zZSBhcyBTZXJlbml0eS5SZXBvcnRpbmcuUmVwb3J0UmV0cmlldmVSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dUaXRsZSA9IHRoaXMucmVwb3J0LlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHlHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQubG9hZCh0aGlzLnJlcG9ydC5Jbml0aWFsU2V0dGluZ3MgfHwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW50ZXJmYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ3ByaW50LXByZXZpZXctYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIC50b2dnbGUodGhpcy5yZXBvcnQgJiYgIXRoaXMucmVwb3J0LklzRGF0YU9ubHlSZXBvcnQgJiYgIXRoaXMucmVwb3J0LklzRXh0ZXJuYWxSZXBvcnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ3J1bi1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiB0aGlzLnJlcG9ydC5Jc0V4dGVybmFsUmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQtcGRmLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0V4dGVybmFsUmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQteGxzeC1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiB0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0V4dGVybmFsUmVwb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4ZWN1dGVSZXBvcnQodGFyZ2V0OiBzdHJpbmcsIGV4dDogc3RyaW5nLCBkb3dubG9hZDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZC5zYXZlKG9wdCk7XHJcbiAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZCxcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogdGhpcy5yZXBvcnQuUmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBnZXRUb29sYmFyQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAncHJpbnQtcHJldmlldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgbnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUnVuJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ3J1bi1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYS1wcmludCB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgbnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUERGJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsICdwZGYnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0V4Y2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC14bHN4LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCAneGxzeCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEVfTWFsaXlldC5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgICAgIGRvd25sb2FkPzogYm9vbGVhbjtcclxuICAgICAgICBleHRlbnNpb24/OiAncGRmJyB8ICdodG0nIHwgJ2h0bWwnIHwgJ3hsc3gnIHwgJ2RvY3gnO1xyXG4gICAgICAgIGdldFBhcmFtcz86ICgpID0+IGFueTtcclxuICAgICAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0QnV0dG9uT3B0aW9ucyBleHRlbmRzIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBjc3NDbGFzcz86IHN0cmluZztcclxuICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogUmVwb3J0QnV0dG9uT3B0aW9ucyk6IFNlcmVuaXR5LlRvb2xCdXR0b24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJ1JlcG9ydCcpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFEuY29hbGVzY2Uob3B0aW9ucy5jc3NDbGFzcywgJ3ByaW50LWJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGUob3B0aW9uczogUmVwb3J0RXhlY3V0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuZ2V0UGFyYW1zID8gb3B0aW9ucy5nZXRQYXJhbXMoKSA6IG9wdGlvbnMucGFyYW1zO1xyXG5cclxuICAgICAgICAgICAgUS5wb3N0VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnfi9SZXBvcnQvJyArIChvcHRpb25zLmRvd25sb2FkID8gJ0Rvd25sb2FkJyA6ICdSZW5kZXInKSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogb3B0aW9ucy5yZXBvcnRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBRLmNvYWxlc2NlKG9wdGlvbnMuZXh0ZW5zaW9uLCAncGRmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0OiBvcHQgPyAkLnRvSlNPTihvcHQpIDogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFEuY29hbGVzY2Uob3B0aW9ucy50YXJnZXQsICdfYmxhbmsnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcG9ydFBhZ2UgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBwcm9wZXJ0eUl0ZW1zOiBTZXJlbml0eS5Qcm9wZXJ0eUl0ZW1bXTtcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5R3JpZDogU2VyZW5pdHkuUHJvcGVydHlHcmlkO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAkKCcucmVwb3J0LWxpbmsnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMucmVwb3J0TGlua0NsaWNrKGUpKTtcclxuICAgICAgICAgICAgJCgnZGl2LmxpbmUnLCBlbGVtZW50KS5jbGljayhlID0+IHRoaXMuY2F0ZWdvcnlDbGljayhlKSk7XHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KCQoJy5zLVF1aWNrU2VhcmNoQmFyIGlucHV0JywgZWxlbWVudCksIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIGRvbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9ICQoJy5yZXBvcnQtbGlzdCcsIHRoaXMuZWxlbWVudCkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmNoaWxkcmVuKCd1bCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQpLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwb3J0SXRlbXMgPSBsaUxpc3QuZmlsdGVyKCcucmVwb3J0LWl0ZW0nKTtcclxuICAgICAgICAgICAgcmVwb3J0SXRlbXMuZWFjaChmdW5jdGlvbiAoaXgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlLmluZGV4T2YodGV4dCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSByZXBvcnRJdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGVzLmxlbmd0aCA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5jaGlsZHJlbigndWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjYXRlZ29yeUNsaWNrKGUpIHtcclxuICAgICAgICAgICAgdmFyIGxpID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICAgICAgaWYgKGxpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCd1bCcpLmhpZGUoJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGxpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ3VsJykuc2hvdygnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmxlbmd0aCA9PT0gMSAmJiAhbGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbignLmxpbmUnKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVwb3J0TGlua0NsaWNrKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuZXcgUmVwb3J0RGlhbG9nKHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogJChlLnRhcmdldCkuZGF0YSgna2V5JylcclxuICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgRV9NYWxpeWV0LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckxvY2FsU3RvcmFnZSBpbXBsZW1lbnRzIFNlcmVuaXR5LlNldHRpbmdTdG9yYWdlIHtcclxuICAgICAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb24udXNlckRlZmluaXRpb24uVXNlcm5hbWUgKyBcIjpcIiArIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb24udXNlckRlZmluaXRpb24uVXNlcm5hbWUgKyBcIjpcIiArIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBcclxufVxyXG5pbnRlcmZhY2UgR3JpZFBlcnNpc3RhbmNlRmxhZ3Mge1xyXG4gICAgY29sdW1uV2lkdGhzPzogYm9vbGVhbjtcclxuICAgIGNvbHVtblZpc2liaWxpdHk/OiBib29sZWFuO1xyXG4gICAgc29ydENvbHVtbnM/OiBib29sZWFuO1xyXG4gICAgZmlsdGVySXRlbXM/OiBib29sZWFuO1xyXG4gICAgcXVpY2tGaWx0ZXJzPzogYm9vbGVhbjtcclxuICAgIGluY2x1ZGVEZWxldGVkPzogYm9vbGVhbjtcclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUHJlZmVyZW5jZVN0b3JhZ2UgaW1wbGVtZW50cyBTZXJlbml0eS5TZXR0aW5nU3RvcmFnZSB7XHJcbiAgICAgICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VTZXJ2aWNlLlJldHJpZXZlKHtcclxuICAgICAgICAgICAgICAgIFByZWZlcmVuY2VUeXBlOiBcIlVzZXJQcmVmZXJlbmNlU3RvcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgTmFtZToga2V5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB2YWx1ZSA9IHJlc3BvbnNlLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VTZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBQcmVmZXJlbmNlVHlwZTogXCJVc2VyUHJlZmVyZW5jZVN0b3JhZ2VcIixcclxuICAgICAgICAgICAgICAgIE5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIFZhbHVlOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuTWFsaXlldCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWFsaXlldERldGF5RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1hbGl5ZXREZXRheVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNYWxpeWV0RGV0YXlGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTWFsaXlldERldGF5Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsaXlldERldGF5U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNYWxpeWV0RGV0YXlSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWFsaXlldERldGF5Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE1hbGl5ZXREZXRheUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuTWFsaXlldCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWFsaXlldERldGF5R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TWFsaXlldERldGF5Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdNYWxpeWV0Lk1hbGl5ZXREZXRheSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1hbGl5ZXREZXRheURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTWFsaXlldERldGF5Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0Lk1hbGl5ZXQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1hbGl5ZXREZXRheVRvcGxhbURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNYWxpeWV0RGV0YXlUb3BsYW1Sb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNYWxpeWV0RGV0YXlUb3BsYW1TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbGl5ZXREZXRheVRvcGxhbVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTWFsaXlldERldGF5VG9wbGFtRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0RGV0YXlUb3BsYW1HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNYWxpeWV0RGV0YXlUb3BsYW1Sb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ01hbGl5ZXQuTWFsaXlldERldGF5VG9wbGFtJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNYWxpeWV0RGV0YXlUb3BsYW1Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsaXlldERldGF5VG9wbGFtU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL01hbGl5ZXREZXRheS9NYWxpeWV0RGV0YXlEaWFsb2cudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0TWFsaXlldERldGF5RGlhbG9nIGV4dGVuZHMgTWFsaXlldERldGF5RGlhbG9nIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICBTZXJlbml0eS5FZGl0b3JVdGlscy5zZXRSZWFkT25seSh0aGlzLmZvcm0uTWFsaXlldFRhbGVwSWQsIHRydWUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vTWFsaXlldERldGF5L01hbGl5ZXREZXRheUdyaWQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuXHJcbiAgICBpbXBvcnQgZmxkID0gTWFsaXlldERldGF5Um93LkZpZWxkcztcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0TWFsaXlldERldGF5R3JpZCBleHRlbmRzIE1hbGl5ZXREZXRheUdyaWQge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTWFsaXlldE1hbGl5ZXREZXRheURpYWxvZzsgfVxyXG4gICAgICAgIHByaXZhdGUgdHJlZU1peGluOiBTZXJlbml0eS5UcmVlR3JpZE1peGluPE1hbGl5ZXQuTWFsaXlldERldGF5Um93PjtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVNaXhpbiA9IG5ldyBTZXJlbml0eS5UcmVlR3JpZE1peGluKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAvLyBicmluZyB0cmVlIGl0ZW1zIGluaXRpYWxseSBjb2xsYXBzZWRcclxuICAgICAgICAgICAgICAgIGluaXRpYWxDb2xsYXBzZTogKCkgPT4gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggY29sdW1uIHRvIHBsYWNlIHRyZWUgdG9nZ2xlIC8gZXhwYW5kL2NvbGxhcHNlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRmllbGQ6IE1hbGl5ZXQuTWFsaXlldERldGF5Um93LkZpZWxkcy5Lb2R1LFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnZXRQYXJlbnRJZDogeCA9PiB4LlBhcmVudFJlZlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goRV9NYWxpeWV0LkNvbW1vbi5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiAnTWFsaXlldC9NYWxpeWV0RGV0YXkvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goRV9NYWxpeWV0LkNvbW1vbi5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvZ2dsZSBleHBhbmQvY29sbGFwc2UgYWxsXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiRXhwYW5kL0NvbGxhcHNlIEFsbFwiLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICd0cmVlZ3JpZC10b2dnbGUtZXhwYW5kLWNvbGxhcHNlLWFsbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZU1peGluLnRvZ2dsZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Q29sdW1ucygpLmZpbHRlcih4ID0+IHguZmllbGQgIT09IGZsZC5WYXJ5YW50QWNpa2xhbWFzaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgaW5pdEVudGl0eURpYWxvZyhpdGVtVHlwZSwgZGlhbG9nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXRFbnRpdHlEaWFsb2coaXRlbVR5cGUsIGRpYWxvZyk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5jYXNjYWRlKGRpYWxvZywgdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy51aS1kaWFsb2cnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWRkQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdEl0ZW0oeyBDdXN0b21lcklEOiB0aGlzLmN1c3RvbWVySUQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEdyaWRDYW5Mb2FkKCkgJiYgISF0aGlzLmN1c3RvbWVySUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9jdXN0b21lcklEOiBudW1iZXI7XHJcblxyXG4gICAgICAgIGdldCBjdXN0b21lcklEKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJJRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBjdXN0b21lcklEKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbWVySUQgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21lcklEID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVxdWFsaXR5KCdNYWxpeWV0VGFsZXBJZCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVNsaWNrR3JpZCgpIHtcclxuICAgICAgICAgICAgdmFyIGdyaWQgPSBzdXBlci5jcmVhdGVTbGlja0dyaWQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gcmVnaXN0ZXIgdGhpcyBwbHVnaW4gZm9yIGdyb3VwaW5nIG9yIHlvdSdsbCBoYXZlIGVycm9yc1xyXG4gICAgICAgICAgICBncmlkLnJlZ2lzdGVyUGx1Z2luKG5ldyBTbGljay5EYXRhLkdyb3VwSXRlbU1ldGFkYXRhUHJvdmlkZXIoKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U3VtbWFyeU9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgYWdncmVnYXRvcnM6IFtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsaWNrLkFnZ3JlZ2F0b3JzLlN1bSgnQmlyaW1GaXlhdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbGljay5BZ2dyZWdhdG9ycy5TdW0oJ1R1dGFyJylcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBvcHQuc2hvd0Zvb3RlclJvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuIFxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWFsaXlldFRhbGVwRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE1hbGl5ZXRUYWxlcFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNYWxpeWV0VGFsZXBGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1hbGl5ZXRUYWxlcFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1hbGl5ZXRUYWxlcFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTWFsaXlldFRhbGVwUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsaXlldFRhbGVwU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNYWxpeWV0VGFsZXBSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWFsaXlldFRhbGVwUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbGl5ZXRUYWxlcFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkZWRTdGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgb2RlbWVCaWxnaWxlcmlHcmlkOiBNYWxpeWV0TWFsaXlldERldGF5R3JpZDtcclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBNYWxpeWV0VGFsZXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAvLyAgIHRoaXMub2RlbWVCaWxnaWxlcmlHcmlkLm9wZW5EaWFsb2dzQXNQYW5lbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9kZW1lQmlsZ2lsZXJpR3JpZCA9IG5ldyBNYWxpeWV0TWFsaXlldERldGF5R3JpZCh0aGlzLmJ5SWQoJ01hbGl5ZXREZXRheUJpbGdpbGVyaUdyaWQnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5JdGVtUmVmLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgSGJJZCA9IFEudG9JZCh0aGlzLmZvcm0uSXRlbVJlZi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgLy8gIHRoaXMuZm9ybS5WYXJpYW50UmVmLmNhc2NhZGVWYWx1ZSA9IEhiSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldFNhdmVTdGF0ZSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkLnRvSlNPTih0aGlzLmdldFNhdmVFbnRpdHkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlci5sb2FkUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU3RhdGUgPSB0aGlzLmdldFNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEVudGl0eShlbnRpdHk6IE1hbGl5ZXREZXRheVJvdykge1xyXG4gICAgICAgICAgICBzdXBlci5sb2FkRW50aXR5KGVudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgIFNlcmVuaXR5LlRhYnNFeHRlbnNpb25zLnNldERpc2FibGVkKHRoaXMudGFicywgJ09yZGVycycsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LlRhYnNFeHRlbnNpb25zLnNldERpc2FibGVkKHRoaXMudGFicywgJ01hbGl5ZXREZXRheUJpbGdpbGVyaScsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gIHRoaXMub3JkZXJzR3JpZC5Db250cmFjdElEID0gZW50aXR5LkNvbnRyYWN0SUQ7XHJcbiAgICAgICAgICAgIHRoaXMub2RlbWVCaWxnaWxlcmlHcmlkLmN1c3RvbWVySUQgPSBlbnRpdHkuTWFsaXlldFRhbGVwSWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TYXZlU3VjY2VzcyhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzdXBlci5vblNhdmVTdWNjZXNzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIFEucmVsb2FkTG9va3VwKCdNYWxpeWV0Lk1hbGl5ZXRUYWxlcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5NYWxpeWV0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNYWxpeWV0VGFsZXBHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNYWxpeWV0VGFsZXBSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ01hbGl5ZXQuTWFsaXlldFRhbGVwJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTWFsaXlldFRhbGVwRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNYWxpeWV0VGFsZXBSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWFsaXlldFRhbGVwUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTWFsaXlldFRhbGVwUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsaXlldFRhbGVwU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAkLmZuWyd2ZWdhcyddICYmICQoJ2JvZHknKVsndmVnYXMnXSh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwMDAsXHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBSUFBQUFDQVFNQUFBQkllSjluQUFBQUEzTkNTVlFJQ0FqYjRVXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiL2dBQUFBQmxCTVZFWC8vLzhBQUFCVnd0TitBQUFBQW5SU1RsTUEvMXVSSXJVQUFBQUpjRWhaY3dBQUFzUUFBQUxFQVZ1Um5Rc0FBQUFXZEVWWWRFTnlaV0YwXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYVc5dUlGUnBiV1VBTURRdk1UTXZNVEdyVzBUNkFBQUFISFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JHYVhKbGQyOXlhM01nUTFNMWNiWGpOZ0FBQUF4SlJFRlVDSmxqYUdCZ0FBQUJoQUNCck9OSVBnQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMS5qcGdcIiksIHRyYW5zaXRpb246ICdmYWRlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUyLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ3pvb21PdXQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTMuanBnXCIpLCB0cmFuc2l0aW9uOiAnc3dpcmxMZWZ0JyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLyB1c2VyIHRhYmxvc3VuZGFraSBUaWdlckZpcm1hIHZlIERvbmVtIHVwZGF0ZSBlZGlsZWNla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Euc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgLy8gdXNlciB0YWJsb3N1bmRha2kgVGlnZXJGaXJtYSB2ZSBEb25lbSB1cGRhdGUgZWRpbGVjZWtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBRLmFsZXJ0KFwiYmHFn2FyxLFsxLFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJUd29GYWN0b3JBdXRoZW50aWNhdGlvblJlcXVpcmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVR3b0ZhY3RvckF1dGhlbnRpY2F0aW9uKHJlcXVlc3QuVXNlcm5hbWUsIHJlcXVlc3QuUGFzc3dvcmQsIGFyZ3NbMV0sIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgLy9FX01hbGl5ZXQuQXV0aG9yaXphdGlvbi51c2VyRGVmaW5pdGlvbi5UaWdlckRvbmVtID0gcmVxdWVzdC5UaWdlckRvbmVtO1xyXG4gICAgICAgICAgICAvL0VfTWFsaXlldC5BdXRob3JpemF0aW9uLnVzZXJEZWZpbml0aW9uLlRpZ2VyRmlybWE9IHJlcXVlc3QuVGlnZXJGaXJtYTtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBoYW5kbGVUd29GYWN0b3JBdXRoZW50aWNhdGlvbih1c2VyOiBzdHJpbmcsIHBhc3M6IHN0cmluZywgdHdvRmFjdG9yR3VpZDogc3RyaW5nLCBpbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHRyaWVzID0gMDtcclxuICAgICAgICAgICAgdmFyIHJlbWFpbmluZyA9IDEyMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaWFsb2cgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNob3dEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cgPSBuZXcgUHJvbXB0RGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUd28gRmFjdG9yIEF1dGhlbnRpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JUeXBlOiBcIkludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBpbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSHRtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVZhbHVlOiAoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA+PSAxMDAwICYmIHggPD0gOTk5OSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZXMrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTogdXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHBhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3b0ZhY3Rvckd1aWQ6IHR3b0ZhY3Rvckd1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3b0ZhY3RvckNvZGU6IHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6ICh6OiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcih6LkVycm9yLk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWVzID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIkNvZGUgZW50ZXJlZCBpcyBpbnZhbGlkISBZb3UgY2FuJ3QgdHJ5IG1vcmUgdGhhbiAzIHRpbWVzIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGNvZGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5lbGVtZW50Lm9uKFwiZGlhbG9nY2xvc2UubWVcIiwgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmVsZW1lbnQub2ZmKFwiZGlhbG9nY2xvc2UubWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb3VudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuZWxlbWVudC5maW5kKFwic3Bhbi5jb3VudGVyXCIpLnRleHQocmVtYWluaW5nLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmcgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZUNvdW50ZXIsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlhbG9nICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHVwZGF0ZUNvdW50ZXIsIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG48ZGl2IGNsYXNzPVwiZmxleC1sYXlvdXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICA8aDM+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicy1Gb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNldCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRpZ2VyRG9uZW1sZXJFZGl0b3IgZXh0ZW5kc1xyXG4gICAgICAgIFNlcmVuaXR5Lkxvb2t1cEVkaXRvckJhc2U8U2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucywgRV9NYWxpeWV0LlRpZ2VyLlRpZ2VyRG9uZW1sZXJSb3c+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb29rdXBLZXkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFX01hbGl5ZXQuVGlnZXIuVGlnZXJEb25lbWxlclJvdy5sb29rdXBLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJdGVtcyhsb29rdXA6IFEuTG9va3VwPEVfTWFsaXlldC5UaWdlci5UaWdlckRvbmVtbGVyUm93Pikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0SXRlbXMobG9va3VwKS5maWx0ZXIoeCA9PlxyXG4gICAgICAgICAgICAgICAgeC5GaXJtbnIgIT0gMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBnZXRJdGVtcyhsb29rdXA6IFEuTG9va3VwPEVfTWFsaXlldC5UaWdlci5UaWdlckRvbmVtbGVyUm93PiwgZmlsdGVyVmFsdWUgPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIGZpbHRlcmVkTG9va1VwO1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgIGZpbHRlcmVkTG9va1VwID0gc3VwZXIuZ2V0SXRlbXMobG9va3VwKS5maWx0ZXIoeCA9PiB4LkZpcm1uci50b1N0cmluZygpID09PSB0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgIHJldHVybiBmaWx0ZXJlZExvb2tVcDtcclxuICAgICAgICAvL31cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRpZ2VyRmlybWFsYXJFZGl0b3IgZXh0ZW5kc1xyXG4gICAgICAgIFNlcmVuaXR5Lkxvb2t1cEVkaXRvckJhc2U8U2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucywgRV9NYWxpeWV0LlRpZ2VyLlRpZ2VyRmlybWFsYXJSb3c+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb29rdXBLZXkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFX01hbGl5ZXQuVGlnZXIuVGlnZXJGaXJtYWxhclJvdy5sb29rdXBLZXk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXRlbXMobG9va3VwOiBRLkxvb2t1cDxFX01hbGl5ZXQuVGlnZXIuVGlnZXJGaXJtYWxhclJvdz4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEl0ZW1zKGxvb2t1cCkuZmlsdGVyKHggPT5cclxuICAgICAgICAgICAgICAgIHguTmFtZSAhPSAnJyAmJiB4Lk5hbWUgIT0gbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLncoJ0NvbmZpcm1QYXNzd29yZCcsIFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yKS52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBFX01hbGl5ZXQuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Rm9yZ290UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBGb3Jnb3RQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3Jnb3RQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgRV9NYWxpeWV0Lk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEVfTWFsaXlldC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8U2lnblVwUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2lnblVwRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogU2lnblVwRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTaWduVXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1FbWFpbC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtRW1haWwudmFsdWUgIT09IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uRW1haWxDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlOYW1lOiB0aGlzLmZvcm0uRGlzcGxheU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmZvcm0uRW1haWwudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5TaWduVXAuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWFsemVtZUxpc3Rlc2lEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TWFsemVtZUxpc3Rlc2lSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTWFsemVtZUxpc3Rlc2lGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTWFsemVtZUxpc3Rlc2lSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsemVtZUxpc3Rlc2lTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTWFsemVtZUxpc3Rlc2lGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNYWx6ZW1lTGlzdGVzaUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPE1hbHplbWVMaXN0ZXNpUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdUaWdlci5NYWx6ZW1lTGlzdGVzaSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBNYWx6ZW1lTGlzdGVzaVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNYWx6ZW1lTGlzdGVzaVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE1hbHplbWVMaXN0ZXNpUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWFsemVtZUxpc3Rlc2lTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVGlnZXJEb25lbWxlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxUaWdlckRvbmVtbGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFRpZ2VyRG9uZW1sZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFRpZ2VyRG9uZW1sZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBUaWdlckRvbmVtbGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVGlnZXJEb25lbWxlclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGlnZXJEb25lbWxlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBUaWdlckRvbmVtbGVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFRpZ2VyRG9uZW1sZXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBUaWdlckRvbmVtbGVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVGlnZXJEb25lbWxlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRpZ2VyRG9uZW1sZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1RpZ2VyLlRpZ2VyRG9uZW1sZXInOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBUaWdlckRvbmVtbGVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBUaWdlckRvbmVtbGVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRpZ2VyRG9uZW1sZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBUaWdlckRvbmVtbGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVGlnZXJEb25lbWxlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUaWdlckZpcm1hbGFyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRpZ2VyRmlybWFsYXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVGlnZXJGaXJtYWxhckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGlnZXJGaXJtYWxhclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUaWdlckZpcm1hbGFyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBUaWdlckZpcm1hbGFyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGlnZXJGaXJtYWxhclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFRpZ2VyRmlybWFsYXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgRV9NYWxpeWV0LlRpZ2VyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUaWdlckZpcm1hbGFyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VGlnZXJGaXJtYWxhclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnVGlnZXIuVGlnZXJGaXJtYWxhcic7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGlnZXJGaXJtYWxhclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFRpZ2VyRmlybWFsYXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUaWdlckZpcm1hbGFyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBFX01hbGl5ZXQuVGlnZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFZhcnlhbnRMaXN0ZXNpRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFZhcnlhbnRMaXN0ZXNpUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFZhcnlhbnRMaXN0ZXNpRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFZhcnlhbnRMaXN0ZXNpUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFZhcnlhbnRMaXN0ZXNpU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFZhcnlhbnRMaXN0ZXNpRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEVfTWFsaXlldC5UaWdlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVmFyeWFudExpc3Rlc2lHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxWYXJ5YW50TGlzdGVzaVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnVGlnZXIuVmFyeWFudExpc3Rlc2knOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVmFyeWFudExpc3Rlc2lSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVmFyeWFudExpc3Rlc2lSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBWYXJ5YW50TGlzdGVzaVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFZhcnlhbnRMaXN0ZXNpU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19