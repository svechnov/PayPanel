<?php

/**
 * Get a list of Items
 */
class VDSGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'Vds';
	public $classKey = 'Vds';
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
				'OR:vid:LIKE' => '%'.$query.'%',
				'OR:name:LIKE' => '%'.$query.'%',
				'OR:groups:LIKE' => '%'.$query.'%',
				'OR:processor:LIKE' => '%'.$query.'%',
				'OR:memory:LIKE' => '%'.$query.'%',
				'OR:hdd:LIKE' => '%'.$query.'%',
				'OR:trafic:LIKE' => '%'.$query.'%',
				'OR:support:LIKE' => '%'.$query.'%',
				'OR:priceisp:LIKE' => '%'.$query.'%',
				'OR:ipv4:LIKE' => '%'.$query.'%',
				'OR:ipv6:LIKE' => '%'.$query.'%',
				'OR:ipmax:LIKE' => '%'.$query.'%',
				'OR:dns:LIKE' => '%'.$query.'%',
				'OR:backup:LIKE' => '%'.$query.'%',
				'OR:price:LIKE' => '%'.$query.'%',
				'OR:idprice:LIKE' => '%'.$query.'%',
				'OR:active:LIKE' => '%'.$query.'%',
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
			'action' => 'updateVds',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('paypanel_item_enable'),
				'multiple' => $this->modx->lexicon('paypanel_items_enable'),
				'action' => 'enableVds',
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
				'action' => 'disableVds',
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
			'action' => 'removeVds',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'VDSGetListProcessor';