export const validateOldPassword = (accountForm: any) => (rule: any, value: any, callback: any) => {
    if (accountForm.oldPassword === '') {
        callback(new Error('请输入旧密码'));
    } else {
        callback();
    }
};

export const validateNewPassword = (accountForm: any) => (rule: any, value: any, callback: any) => {
    if (accountForm.newPassword === '') {
        callback(new Error('请输入新密码'));
    } else {
        callback();
    }
};

export const validateNewPasswordAgain = (accountForm: any) => (rule: any, value: any, callback: any) => {
    if (accountForm.newPassword === '') {
        callback(new Error('请再次输入密码'));
    } else if (accountForm.newPassword !== accountForm.newPasswordAgain){
        callback(new Error('两次密码不相同'))
    } else {
        callback();
    }
};