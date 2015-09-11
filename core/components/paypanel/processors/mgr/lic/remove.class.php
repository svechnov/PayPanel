<?php

/**
 * Remove an Items
 */
class PayPanelLicRemoveProcessor extends modObjectProcessor {
	public $objectType = 'Licens';
	public $classKey = 'Licens';
	public $languageTopics = array('paypanel');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('paypanel_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var PayPanelLic $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('paypanel_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'PayPanelLicRemoveProcessor';