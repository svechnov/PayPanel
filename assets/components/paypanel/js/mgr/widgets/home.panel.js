PayPanel.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'paypanel-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('paypanel') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('paypanel.hosting'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-hosting',
					cls: 'main-wrapper',
				}]
			},{
				title: _('paypanel.domains'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-domains',
					cls: 'main-wrapper',
				}]
			},{
				title: _('paypanel.vds'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-vds',
					cls: 'main-wrapper',
				}]
			},{
				title: _('paypanel.ssl'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-ssl',
					cls: 'main-wrapper',
				}]
			},{
				title: _('paypanel.licens'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-licens',
					cls: 'main-wrapper',
				}]
			},{
				title: _('paypanel.servers'),
				layout: 'anchor',
				items: [{
					html: _('paypanel_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'paypanel-grid-servers',
					cls: 'main-wrapper',
				}]
			}
            ]
		}]
	});
	PayPanel.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(PayPanel.panel.Home, MODx.Panel);
Ext.reg('paypanel-panel-home', PayPanel.panel.Home);
