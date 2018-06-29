/** 
 * single global variable: PORTAL
 * all modules in project should be properties of this
 * this file init the root object and modules
 * and init the menu
 * @author: Henry
 **/

var PORTAL = {
    // user
    User: {
        accessToken: '',
        name: '',
        mobile: '',
        type: false,
        signOut: null,
        getMenu: null,
        getProfile: null,
        updateProfile: null,
        changePassword: null,
        gridList: [],
        gridIds:[]
    },
    // system
    System: {
        UserMgt: {},
        OrgMgt: {},
        RoleMgt: {}
    }
};

// controller
$(document).ready(function() {
    (function () {
    		console.log(location.pathname);
    		$('#lospMenu a[href*="' + location.pathname + '"]').parent().addClass('active');
        $('#lospMenu a[href*="' + location.pathname + '"]').parent().parent().parent().addClass('active');
    }());
});