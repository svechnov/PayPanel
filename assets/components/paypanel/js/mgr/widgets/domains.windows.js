PayPanel.window.CreateDomains = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-domain-window-create';
	}
	Ext.applyIf(config, {
		title: _('paypanel.create'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/domain/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.CreateDomains.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateDomains, MODx.Window, {

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
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p1'),
                        name: 'p1',
                        id: config.id + '-p1',
                        anchor: '99%'
                    },{
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p2'),
                        name: 'p2',
                        id: config.id + '-p2',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p3'),
                        name: 'p3',
                        id: config.id + '-p3',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p4'),
                        name: 'p4',
                        id: config.id + '-p4',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p5'),
                        name: 'p5',
                        id: config.id + '-p5',
                        anchor: '99%'
                    },
                ]
                },
                {
                    title: 'Основное'
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
                                fieldLabel: _('paypanel.zones'),
                                name: 'zones',
                                id: config.id + '-zones',
                                anchor: '99%',
                                allowBlank: false,
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.whois'),
                                name: 'whois',
                                id: config.id + '-whois',
                                anchor: '99%'
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.groups'),
                                name: 'groups',
                                id: config.id + '-groups',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.url'),
                                name: 'url',
                                id: config.id + '-url',
                                anchor: '99%'
                            }, {
                                xtype: 'modx-combo-boolean',
                                hiddenName:'hide',
                                fieldLabel: _('paypanel.hide'),
                                name: 'hide',
                                id: config.id + '-hide',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.max'),
                                name: 'max',
                                id: config.id + '-max',
                                anchor: '99%'
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
                                fieldLabel: _('paypanel.domain'),
                                name: 'domain',
                                id: config.id + '-domain',
                                anchor: '99%'
                            }, {
                                xtype: 'modx-combo-boolean',
                                fieldLabel: _('paypanel.idn'),
                                name: 'idn',
                                hiddenName:'idn',
                                id: config.id + '-idn',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.roznica'),
                                name: 'roznica',
                                id: config.id + '-roznica',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.popular'),
                                name: 'popular',
                                id: config.id + '-popular',
                                anchor: '99%'
                            },{
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.min'),
                                name: 'min',
                                id: config.id + '-min',
                                anchor: '99%'
                            }, {
                                xtype: 'textfield',
                                fieldLabel: _('paypanel.year'),
                                name: 'year',
                                id: config.id + '-year',
                                anchor: '99%'
                            },
                        ]
                        }
                    ]
                    },
                    {
                        xtype: 'xcheckbox',
                        boxLabel: _('paypanel.active'),
                        name: 'active',
                        id: config.id + '-active',
                        checked: true,
                    }
                ]}

            ]
            }
        ];
	}

});
Ext.reg('paypanel-domain-window-create', PayPanel.window.CreateDomains);


PayPanel.window.UpdateDomains = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-domain-window-update';
	}
	Ext.applyIf(config, {
		title: _('paypanel_domain_update'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/domain/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.UpdateDomains.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateDomains, MODx.Window, {

	getFields: function (config) {
		return [
            {
                xtype: 'hidden',
                name: 'id',
                id: config.id + '-id',
            },
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
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p1'),
                        name: 'p1',
                        id: config.id + '-p1',
                        anchor: '99%'
                    },{
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p2'),
                        name: 'p2',
                        id: config.id + '-p2',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p3'),
                        name: 'p3',
                        id: config.id + '-p3',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p4'),
                        name: 'p4',
                        id: config.id + '-p4',
                        anchor: '99%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: _('paypanel.p5'),
                        name: 'p5',
                        id: config.id + '-p5',
                        anchor: '99%'
                    },
                ]
                },
                {
                title: 'Основное'
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
                                                fieldLabel: _('paypanel.zones'),
                                                name: 'zones',
                                                id: config.id + '-zones',
                                                anchor: '99%',
                                                allowBlank: false,
                                            },{
                                                xtype: 'textfield',
                                                fieldLabel: _('paypanel.whois'),
                                                name: 'whois',
                                                id: config.id + '-whois',
                                                anchor: '99%'
                                            },{
                                                xtype: 'textfield',
                                                fieldLabel: _('paypanel.groups'),
                                                name: 'groups',
                                                id: config.id + '-groups',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'textfield',
                                                fieldLabel: _('paypanel.url'),
                                                name: 'url',
                                                id: config.id + '-url',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'modx-combo-boolean',
                                                hiddenName:'hide',
                                                fieldLabel: _('paypanel.hide'),
                                                name: 'hide',
                                                id: config.id + '-hide',
                                                anchor: '99%'
                                            }, {
                                                xtype: 'textfield',
                                                fieldLabel: _('paypanel.max'),
                                                name: 'max',
                                                id: config.id + '-max',
                                                anchor: '99%'
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
                                            fieldLabel: _('paypanel.domain'),
                                            name: 'domain',
                                            id: config.id + '-domain',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'modx-combo-boolean',
                                            fieldLabel: _('paypanel.idn'),
                                            name: 'idn',
                                            hiddenName:'idn',
                                            id: config.id + '-idn',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('paypanel.roznica'),
                                            name: 'roznica',
                                            id: config.id + '-roznica',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('paypanel.popular'),
                                            name: 'popular',
                                            id: config.id + '-popular',
                                            anchor: '99%'
                                        },{
                                            xtype: 'textfield',
                                            fieldLabel: _('paypanel.min'),
                                            name: 'min',
                                            id: config.id + '-min',
                                            anchor: '99%'
                                        }, {
                                            xtype: 'textfield',
                                            fieldLabel: _('paypanel.year'),
                                            name: 'year',
                                            id: config.id + '-year',
                                            anchor: '99%'
                                        },
                                ]
                            }
                        ]
                },
  {
            xtype: 'xcheckbox',
            boxLabel: _('paypanel.active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }
            ]}

        ]
            }
                ];

	}

});
Ext.reg('paypanel-domain-window-update', PayPanel.window.UpdateDomains);