PayPanel.window.CreateServer = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-server-window-create';
	}
	Ext.applyIf(config, {
		title: _('paypanel_host_create'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/server/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.CreateServer.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateServer, MODx.Window, {
	getFields: function (config) {
		return [
            {
                xtype: 'modx-tabs'
                ,deferredRender: false
                ,border: true
                ,bodyStyle: 'padding:5px;'
                ,items: [
                {
                    title: 'Цены'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
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
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price1'),
                                name: 'price1',
                                id: config.id + '-price1',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price3'),
                                name: 'price3',
                                id: config.id + '-price3',
                                anchor: '99%',
                                allowBlank: false,
                            }
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
                                fieldLabel: _('paypanel.price2'),
                                name: 'price2',
                                id: config.id + '-price2',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price4'),
                                name: 'price4',
                                id: config.id + '-price4',
                                anchor: '99%',
                                allowBlank: false,
                            }
                        ]
                        }
                    ]
                    }]
                },
                {
                    title: 'Общее'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [

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
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.name'),
                                name: 'name',
                                id: config.id + '-name',
                                anchor: '99%',
                                allowBlank: false,
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.processor'),
                                name: 'processor',
                                id: config.id + '-processor',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.hdd'),
                                name: 'hdd',
                                id: config.id + '-hdd',
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
                                fieldLabel: _('paypanel.memory'),
                                name: 'memory',
                                id: config.id + '-memory',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.virtualisation'),
                                name: 'virtualisation',
                                id: config.id + '-virtualisation',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.skidka'),
                                name: 'skidka',
                                id: config.id + '-skidka',
                                anchor: '99%',
                                allowBlank: false,
                            },
                        ]
                        }
                    ]
                    },{
                        xtype: 'textarea',
                        fieldLabel: _('paypanel.os'),
                        name: 'os',
                        id: config.id + '-os',
                        anchor: '99%',
                        allowBlank: false,
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: _('paypanel.comments'),
                        name: 'comments',
                        id: config.id + '-comments',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'xcheckbox',
                        boxLabel: _('paypanel_host_active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]
                },



            ]


            }
        ];
	}

});
Ext.reg('paypanel-server-window-create', PayPanel.window.CreateServer);


PayPanel.window.UpdateServer = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-server-window-update';
	}
	Ext.applyIf(config, {
		title: _('paypanel_host_update'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/server/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.UpdateServer.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateServer, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
            xtype: 'modx-tabs'
            ,deferredRender: false
            ,border: true
            ,bodyStyle: 'padding:5px;'
            ,items: [
                {
                    title: 'Цены'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [
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
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price1'),
                                name: 'price1',
                                id: config.id + '-price1',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price3'),
                                name: 'price3',
                                id: config.id + '-price3',
                                anchor: '99%',
                                allowBlank: false,
                            }
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
                                fieldLabel: _('paypanel.price2'),
                                name: 'price2',
                                id: config.id + '-price2',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.price4'),
                                name: 'price4',
                                id: config.id + '-price4',
                                anchor: '99%',
                                allowBlank: false,
                            }
                        ]
                        }
                    ]
                    }]
                },
                {
                    title: 'Общее'
                    ,hideMode: 'offsets'
                    ,layout: 'form'
                    ,border:false
                    ,items: [

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
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.name'),
                                name: 'name',
                                id: config.id + '-name',
                                anchor: '99%',
                                allowBlank: false,
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.processor'),
                                name: 'processor',
                                id: config.id + '-processor',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.hdd'),
                                name: 'hdd',
                                id: config.id + '-hdd',
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
                                fieldLabel: _('paypanel.memory'),
                                name: 'memory',
                                id: config.id + '-memory',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.virtualisation'),
                                name: 'virtualisation',
                                id: config.id + '-virtualisation',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.skidka'),
                                name: 'skidka',
                                id: config.id + '-skidka',
                                anchor: '99%',
                                allowBlank: false,
                            },
                        ]
                        }
                    ]
                    },{
                        xtype: 'textarea',
                        fieldLabel: _('paypanel.os'),
                        name: 'os',
                        id: config.id + '-os',
                        anchor: '99%',
                        allowBlank: false,
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: _('paypanel.comments'),
                        name: 'comments',
                        id: config.id + '-comments',
                        anchor: '99%',
                        allowBlank: false,
                    },{
                        xtype: 'xcheckbox',
                        boxLabel: _('paypanel_host_active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]
                },



            ]


        }

        ];
	}

});
Ext.reg('paypanel-server-window-update', PayPanel.window.UpdateServer);