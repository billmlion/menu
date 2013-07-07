Ext.define('menu.view.service.serviceContainer', {
    extend: 'Ext.navigation.View',
    xtype: 'serviceContainer',

    requires: [
		  'menu.view.service.services'
    ],

    config: {
    	tab: {
			title: '服务',
			iconCls: 'home'//,
			//action: 'speakersTab'
		},
        autoDestroy: false,

        items: [
            { xtype: 'services' }
        ]
    }
});
