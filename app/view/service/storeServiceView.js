Ext.define('menu.view.service.storeServiceView', {
    extend: 'Ext.Container',
    xtype: 'storeServiceView',

    requires: [
        'Ext.Map'
    ],

    config: {
        title: 'Information',
        layout: 'vbox',

        items: [
            {
                id: 'content',
                tpl: [
                    '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
                    '{serviceName}',
                    '<span>{description}</span>'
                ].join('')
            } ,
            {
                xtype: 'map',
                flex: 1,
                mapOptions: {
                    zoomControl: true,
                    panControl: true,
                    rotateControl: true,
                    streetViewControl: true,
                    mapTypeControl: true,
                    zoom: 18
                }
            }
        ] 
 
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);

           // this.down('map').setMapCenter({
             //   latitude: newRecord.data.latitude,
               // longitude: newRecord.data.longitude
            //});
        }
    }
});
