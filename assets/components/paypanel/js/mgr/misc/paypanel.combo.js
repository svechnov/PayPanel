//PayPanel.combo.Hostingvid = function(config) { // комбобокс с экспертами на редактирование заказа.
//    config = config || {};
//    Ext.applyIf(config,{
//        fields: ['id','first_name']
//        ,url: PayPanel.config.connector_url
//        //,baseParams: { action: 'mgr/expert/getlist' }
//        ,name: 'id'
//        ,hiddenName: 'name'
//        ,displayField: 'first_name'
//        ,valueField: 'id'
//        ,editable: true
//        ,anchor: '99%'
//     //   ,pageSize: 10
//
//    });
//    PayPanel.combo.Hostingvid.superclass.constructor.call(this,config);
//};
//Ext.extend(PayPanel.combo.Hostingvid,MODx.combo.ComboBox);
//Ext.reg('modx-combo-orderasexpert-expert2',PayPanel.combo.Hostingvid);

PayPanel.combo.Hostingvid = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore(
        {
            //id: 0,
            fields: ['save','display']
            ,data: [
                ['hosting', _('paypanel.hosting.hosting')]
                ,['reseller', _('paypanel.hosting.reseller')]
                ,['dedicated',_('paypanel.hosting.dedicated')]
                ,['vds',_('paypanel.hosting.vds')]
                ,['vpn',_('paypanel.hosting.vpn')]
                ,['mail',_('paypanel.hosting.mail')]
                ,['ssh',_('paypanel.hosting.ssh')]

            ]
        })
        ,mode: 'local'
        ,displayField: 'display'
        ,valueField: 'save'
        ,hiddenName:'vid'
        //,value:'hosting'
        ,selectOnFocus:true
        ,triggerAction: 'all'
        //,emptyText: 'Выберите тип...'
    });
    PayPanel.combo.Hostingvid.superclass.constructor.call(this,config);
};
Ext.extend(PayPanel.combo.Hostingvid,MODx.combo.ComboBox);
Ext.reg('paypanel-combo-hosting-vid',PayPanel.combo.Hostingvid);

PayPanel.combo.Licensvid = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        store: new Ext.data.ArrayStore(
        {
            //id: 0,
            fields: ['save','display']
            ,data: [
                [1, _('paypanel.lic.ISPmanager')]
                ,[2, _('paypanel.lic.BILLmanager')]
                ,[3,_('paypanel.lic.VMmanager')]
                ,[4,_('paypanel.lic.VEmanager')]
                ,[5,_('paypanel.lic.DNSmanager')]
                ,[6,_('paypanel.lic.IPmanager')]
                ,[7,_('paypanel.lic.cPanel')]
                ,[8,_('paypanel.lic.Parallels')]
            ]
        })
        ,mode: 'local'
        ,displayField: 'display'
        ,valueField: 'save'
        ,hiddenName:'vid'
        //,value:'hosting'
        ,selectOnFocus:true
        ,triggerAction: 'all'
        //,emptyText: 'Выберите тип...'
    });
    PayPanel.combo.Licensvid.superclass.constructor.call(this,config);
};
Ext.extend(PayPanel.combo.Licensvid,MODx.combo.ComboBox);
Ext.reg('paypanel-combo-lic-vid',PayPanel.combo.Licensvid);