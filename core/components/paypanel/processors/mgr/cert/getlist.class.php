<?php

/**
 * Get a list of Ssls
 */
class SSLGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'SSL';
	public $classKey = 'SSL';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	//public $permission = 'list';


	/**
	 * * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return boolean|string
	 */
	public function beforeQuery() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}

		return true;
	}


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */
	public function prepareQueryBeforeCount(xPDOQuery $c) {
		$query = trim($this->getProperty('query'));
		if ($query) {
			$c->where(array(
				'id:LIKE' => '%'.$query.'%',
				'OR:name:LIKE' => '%'.$query.'%',
				'OR:vid:LIKE' => '%'.$query.'%',
				'OR:logo:LIKE' => '%'.$query.'%',
				'OR:options:LIKE' => '%'.$query.'%',
				'OR:comments:LIKE' => '%'.$query.'%',
				'OR:price:LIKE' => '%'.$query.'%',
				'OR:price1:LIKE' => '%'.$query.'%',
				'OR:price2:LIKE' => '%'.$query.'%',
				'OR:price3:LIKE' => '%'.$query.'%',
				'OR:price4:LIKE' => '%'.$query.'%',
				'OR:price5:LIKE' => '%'.$query.'%',
				'OR:idprice:LIKE' => '%'.$query.'%',
				//'OR:active:LIKE' => '%'.$query.'%',
			));
		}

		return $c;
	}


	/**
	 * @param xPDOObject $object
	 *
	 * @return array
	 */
	public function prepareRow(xPDOObject $object) {
		$array = $object->toArray();
		$array['actions'] = array();

		// Edit
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-edit',
			'title' => $this->modx->lexicon('paypanel_item_update'),
			//'multiple' => $this->modx->lexicon('paypanel_items_update'),
			'action' => 'updateSsl',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('paypanel_item_enable'),
				'multiple' => $this->modx->lexicon('paypanel_items_enable'),
				'action' => 'enableSsl',
				'button' => true,
				'menu' => true,
			);
		}
		else {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('paypanel_item_disable'),
				'multiple' => $this->modx->lexicon('paypanel_items_disable'),
				'action' => 'disableSsl',
				'button' => true,
				'menu' => true,
			);
		}

		// Remove
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-trash-o action-red',
			'title' => $this->modx->lexicon('paypanel_item_remove'),
			'multiple' => $this->modx->lexicon('paypanel_items_remove'),
			'action' => 'removeSsl',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'SSLGetListProcessor';