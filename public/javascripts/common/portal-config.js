/** 
 * PORTAL Config: define config data
 * @author: Henry
 **/

// echarts
PORTAL.ECHARTS_PATH = 'assets/frameworks/echarts';

// routes
PORTAL.Routes = {
	Resource: {
		StaticResource: {
			GET_RESOURCE_LIST: '/getResourceList'
		}
	},

	Config: {
		ProxyMgt: {
			GET_PROXY_LIST: '/getProxyList',
			SET_PROXY_LOG: '/setProxyLog'
		},
		GridMgt: {
			GET_GRID_TYPE_LIST: '/grid/getGridTypeList',
			GET_GRID_LIST: '/grid/getGridList',
			GET_GRID_INFO: '/grid/getGridInfo',
			ADD_GRID: '/grid/addGrid',
			UPDATE_GRID: '/grid/editGrid',
			DEL_GRID: '/grid/delGrid',
			GET_GRID_USER_INFO: '/grid/getGridUserInfo',
			DEL_GRID_USER: '/grid/delGridUser',
			GET_RESOURCE_TYPE_LIST: '/grid/getResourceTypeList',
			GET_GRID_RESOURCE:'/grid/getGridResource',
			GET_RESOURCE_BY_TYPE:'/grid/getResourceByType',
			SAVE_GRID_RESOURCE:'/grid/saveGridResource',
			GET_GRID_USER:'/grid/getGridUser'
		}
	},

	System: {
		UserMgt: {
			GET_USER_LIST: '/proxy/customer/user/list',
			GET_ONLINE_USER_LIST: '/proxy/customer/user/onlineUserList',
			GET_USER: 	   '/proxy/customer/user/',
			ADD_USER:      '/proxy/customer/user/add',
			UPDATE_USER:   '/proxy/customer/user/update/',
			DELETE_USER:   '/proxy/customer/user/delete',
			LOCK_USER:     '/proxy/customer/user/lock'
		},
		OrgMgt: {
			GET_ORG_TREE: '/proxy/unit/getUnitDeptList',
			GET_DEPART: '/proxy/unit/getDeptInfo',
			GET_DEPART_USERS: '/proxy/unit/getDeptUsers',
			UPDATE_DEPART_USERS: '/proxy/unit/updateDeptUsers',
			GET_ALL_USERS: '/proxy/unit/getAllUsers',
			ADD_DEPART: '/proxy/unit/createDept',
			UPDATE_DEPART: '/proxy/unit/updateDept',
			DELETE_DEPART: '/proxy/unit/deleteDept',
			GET_UNIT: '/proxy/unit/getUnit',
			ADD_UNIT: '/proxy/unit/createUnit',
			UPDATE_UNIT: '/proxy/unit/updateUnit',
			DELETE_UNIT: '/proxy/unit/deleteUnit',
			GET_UNIT_SYSTEMS: '',
			UPDATE_UNIT_SYSTEMS: '',
			GET_UNIT_ADMIN: '',
			UPDATE_UNIT_ADMIN: ''
		},
		RoleMgt: {
			GET_ROLE_LIST: '/proxy/role/getRoleList',
			ADD_ROLE: '/proxy/role/addRole', 
			UPDATE_ROLE: '/proxy/role/updateRole',
			DELETE_ROLE: '/proxy/role/deleteRole',
			GET_ROLE_SYSTEMS: '/proxy/role/getRoleSystems',
			UPDATE_ROLE_SYSTEMS: '/proxy/role/updateRoleSystems',
			GET_ROLE_USERS: '/proxy/role/getRoleUsers',
			UPDATE_ROLE_USERS: '/proxy/role/updateRoleUsers'
		},
		LogLogin: {
			GET_LOG_LIST: '/proxy/api/log/login/list',
			GET_LOG_STATUS: '/proxy/api/log/login/st',
			GET_CLIENT_TYPES: '/proxy/api/clienttypes',
            GET_LOGIN_LOGS: '/logs/LoginLogs/export',
            GET_TIME_SELECT: '/logs/searchDropdownList'
		},
		LogOperation:{
			GET_LOG_OPERATION: '/proxy/api/log/operation/list',
			GET_OPERATION_STATUS: '/proxy/api/log/operation/at',
			GET_OPERATION_RESULT: '/proxy/api/log/operation/art',
			ADD_OPERATION_LOG: '/proxy/api/log/operation/add',
			LOG_OPERATION_EXPORT: '/logs/OperationLogs/export'
		},
		Monitor:{
			GET_SERVER_LIST: '/performance/getServerList',
			GET_SERVER_INFO: '/performance/getSysPreformance'
		},
		CMExport:{
			QUERY_CM: '/grid/queryCmList',
			DEVICE_EXPORT: '/pnm/export/device',
			PERFORMANCE_EXPORT: '/pnm/export/CMPerformance',
			GET_TIME_SELECT: '/pnm/export/getTimeSelectorList'
		},
		ProxyMgt:{
			INIT_SNMP_CONFIG: '/initSnmpConfig',
			GET_ALL_PROXY: '/getAllProxyId',
			SAVE_CMTS_CONFIG: '/saveCmts',
			SAVE_CM_CONFIG: '/saveCm',
			DELETE_CMTS_CONFIG: '/deleteCmts',
			DELETE_CM_CONFIG: '/deleteCm'
		}

	},
    ReportMgt:{
		GET_CM_CITY_REPORT:"/pnm/getBadCMStatistics",
        GET_CM_GRID_REPORT:"/pnm/getBadCMHandleStatistics"

    },
	Maintenance:{
        GET_BAD_CM_INFO:'/pnm/getBadCmInfo',
		GET_ODN_INCHANNEL:'/pnm/getCmInchannelByOdn',
		GET_CM_INFO:'/grid/getCmInfo'
	}
};