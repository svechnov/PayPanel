<?php

/**
 * Create an Item
 */
class PayPanelZonesCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'Zones';
	public $classKey = 'Zones';
	public $languageTopics = array('paypanel');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
//	public function beforeSet() {
//		$name = trim($this->getProperty('name'));
//		if (empty($name)) {
//			$this->modx->error->addField('name', $this->modx->lexicon('paypanel_item_err_name'));
//		}
//		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
//			$this->modx->error->addField('name', $this->modx->lexicon('paypanel_item_err_ae'));
//		}
//
//		return parent::beforeSet();
//	}

}

return 'PayPanelZonesCreateProcessor';