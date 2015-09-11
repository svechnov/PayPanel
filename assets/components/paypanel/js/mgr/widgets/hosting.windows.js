PayPanel.window.CreateHosting = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-host-window-create';
	}
	Ext.applyIf(config, {
		title: _('paypanel.create'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/hosting/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.CreateHosting.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateHosting, MODx.Window, {

	getFields: function (config) {
		return [
                {
                    layout:'column'
                    ,border: false
                    ,anchor: '99%'
                    ,items: [
                    {
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                        {
                            xtype: 'paypanel-combo-hosting-vid'
                            ,fieldLabel: _('paypanel.vid')
                            ,name: 'vid'
                            ,id: config.id + 'vid'
                            ,anchor: '99%'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: _('paypanel.cost'),
                            name: 'cost',
                            id: config.id + '-cost',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.hdd'),
                            name: 'hdd',
                            id: config.id + '-hdd',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.db'),
                            name: 'db',
                            id: config.id + '-db',
                            anchor: '99%',
                            allowBlank: false,
                        },  {
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.idprice'),
                            name: 'id_price',
                            id: config.id + '-id_price',
                            anchor: '99%',
                            allowBlank: false,
                        },
                    ]
                    },
                    {
                        columnWidth: .5
                        ,layout: 'form'
                        ,defaults: { msgTarget: 'under' }
                        ,border:false
                        ,items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.name'),
                            name: 'name',
                            id: config.id + '-name',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'modx-combo-boolean',
                            fieldLabel: _('paypanel.sort'),
                            hiddenName:'sort',
                            name: 'sort',
                            id: config.id + '-sort',
                            anchor: '99%',
                            allowBlank: false,
                        }, {
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.domains'),
                            name: 'domains',
                            id: config.id + '-domains',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            xtype: 'textfield',
                            fieldLabel: _('paypanel.ftp'),
                            name: 'ftp',
                            id: config.id + '-ftp',
                            anchor: '99%',
                            allowBlank: false,
                        },{
                            fieldLabel: _('paypanel.active'),
                            xtype: 'xcheckbox',
                            //  boxLabel: _('paypanel.active'),
                            name: 'active',
                            id: config.id + '-active',
                        }
                    ]
                    },

                ]
                },
        ];
	}

});
Ext.reg('paypanel-host-window-create', PayPanel.window.CreateHosting);


PayPanel.window.UpdateHosting = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-host-window-update';
	}
	Ext.applyIf(config, {
		title: _('paypanel.update'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/hosting/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.UpdateHosting.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateHosting, MODx.Window, {


	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, /*{
			xtype: 'textfield',
			fieldLabel: _('paypanel.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%',
			allowBlank: false,
		}, */
            {
                layout:'column'
                ,border: false
                ,anchor: '99%'
                ,items: [
                        {
                            columnWidth: .5
                            ,layout: 'form'
                            ,defaults: { msgTarget: 'under' }
                            ,border:false
                            ,items: [
                                    {
                                        xtype: 'paypanel-combo-hosting-vid'
                                        ,fieldLabel: _('paypanel.vid')
                                        ,name: 'vid'
                                        ,id: config.id + 'vid'
                                        ,anchor: '99%'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        fieldLabel: _('paypanel.cost'),
                                        name: 'cost',
                                        id: config.id + '-cost',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.hdd'),
                                        name: 'hdd',
                                        id: config.id + '-hdd',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.db'),
                                        name: 'db',
                                        id: config.id + '-db',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },  {
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.idprice'),
                                        name: 'id_price',
                                        id: config.id + '-id_price',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },
                        ]
                        },
                        {
                            columnWidth: .5
                            ,layout: 'form'
                            ,defaults: { msgTarget: 'under' }
                            ,border:false
                            ,items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.name'),
                                        name: 'name',
                                        id: config.id + '-name',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'modx-combo-boolean',
                                        fieldLabel: _('paypanel.sort'),
                                        hiddenName:'sort',
                                        name: 'sort',
                                        id: config.id + '-sort',
                                        anchor: '99%',
                                        allowBlank: false,
                                    }, {
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.domains'),
                                        name: 'domains',
                                        id: config.id + '-domains',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        xtype: 'textfield',
                                        fieldLabel: _('paypanel.ftp'),
                                        name: 'ftp',
                                        id: config.id + '-ftp',
                                        anchor: '99%',
                                        allowBlank: false,
                                    },{
                                        fieldLabel: _('paypanel.active'),
                                        xtype: 'xcheckbox',
                                      //  boxLabel: _('paypanel.active'),
                                        name: 'active',
                                        id: config.id + '-active',
                                    }
                                ]
                        },

                     ]
            },
 /*{
			xtype: 'numberfield',
			fieldLabel: _('paypanel.tarifsgroup'),
			name: 'tarifsgroup',
			id: config.id + '-tarifsgroup',
			anchor: '99%',
			allowBlank: false,
		}, */ ];
	}


});
Ext.reg('paypanel-host-window-update', PayPanel.window.UpdateHosting);