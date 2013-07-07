Ext.define('menu.store.serviceDAO', {
    extend: 'Ext.data.Store',

    config: {
        model: 'menu.model.serviceVO',
        autoLoad: true,
        sorters: 'serviceType',
        grouper: {
            groupFn: function(record) {
                return record.get('serviceName') ;
            }
        },
        proxy: {
            type: 'ajax',
            url: 'service.json'
        }
    }
});
