Ext.define('menu.view.service.services', {
    extend: 'Ext.List',
    xtype: 'services',

    config: {
        title: '综合服务',
        iconCls: 'home',
        
        styleHtmlContent: true,
        scrollable: true,
        
        variableHeights: true,
        grouped:true,
        store: 'serviceDAO',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{serviceName}',
            '<span>{description}</span>'
        ].join('')
    }
});
