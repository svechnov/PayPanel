PayPanel.window.CreateLic = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-lic-window-create';
	}
	Ext.applyIf(config, {
		title: _('paypanel.create'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/lic/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.CreateLic.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.CreateLic, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('paypanel.name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.period'),
			name: 'period',
			id: config.id + '-period',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.price'),
			name: 'price',
			id: config.id + '-price',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.idprice'),
			name: 'idprice',
			id: config.id + '-idprice',
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('paypanel.active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('paypanel-lic-window-create', PayPanel.window.CreateLic);


PayPanel.window.UpdateLic = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'paypanel-lic-window-update';
	}
	Ext.applyIf(config, {
		title: _('paypanel.update'),
		width: 550,
		autoHeight: true,
		url: PayPanel.config.connector_url,
		action: 'mgr/lic/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	PayPanel.window.UpdateLic.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.window.UpdateLic, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'paypanel-combo-lic-vid',
			fieldLabel: _('paypanel.vid'),
			name: 'vid',
			id: config.id + '-vid',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.period'),
			name: 'period',
			id: config.id + '-period',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.price'),
			name: 'price',
			id: config.id + '-price',
			anchor: '99%'
		}, {
			xtype: 'textfield',
			fieldLabel: _('paypanel.idprice'),
			name: 'idprice',
			id: config.id + '-idprice',
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('paypanel.active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('paypanel-lic-window-update', PayPanel.window.UpdateLic);