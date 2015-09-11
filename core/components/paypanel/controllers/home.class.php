<?php

/**
 * The home manager controller for PayPanel.
 *
 */
class PayPanelHomeManagerController extends PayPanelMainController {
	/* @var PayPanel $PayPanel */
	public $PayPanel;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('paypanel');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->PayPanel->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->PayPanel->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/hosting.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/domains.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/vds.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/ssl.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/servers.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/licens.grid.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/hosting.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/domains.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/vds.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/ssl.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/servers.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/licens.windows.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/misc/paypanel.combo.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "paypanel-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->PayPanel->config['templatesPath'] . 'home.tpl';
	}
}