<?php

/**
 * Class PayPanelMainController
 */
abstract class PayPanelMainController extends modExtraManagerController {
	/** @var PayPanel $PayPanel */
	public $PayPanel;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('paypanel_core_path', null, $this->modx->getOption('core_path') . 'components/paypanel/');
		require_once $corePath . 'model/paypanel/paypanel.class.php';

		$this->PayPanel = new PayPanel($this->modx);
		$this->addCss($this->PayPanel->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->PayPanel->config['jsUrl'] . 'mgr/paypanel.js');
		$this->addHtml('
		<script type="text/javascript">
			PayPanel.config = ' . $this->modx->toJSON($this->PayPanel->config) . ';
			PayPanel.config.connector_url = "' . $this->PayPanel->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('paypanel:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends PayPanelMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}