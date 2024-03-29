<?php

/**
 * Remove an Items
 */
class PayPanelVdsRemoveProcessor extends modObjectProcessor {
	public $objectType = 'Vds';
	public $classKey = 'Vds';
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
			/** @var PayPanelItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('paypanel_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'PayPanelVdsRemoveProcessor';