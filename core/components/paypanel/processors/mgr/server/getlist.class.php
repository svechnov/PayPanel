<?php

/**
 * Get a list of Items
 */
class ServersGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'Servers';
	public $classKey = 'Servers';
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
				'OR:processor:LIKE' => '%'.$query.'%',
				'OR:memory:LIKE' => '%'.$query.'%',
				'OR:hdd:LIKE' => '%'.$query.'%',
				'OR:virtualisation:LIKE' => '%'.$query.'%',
				'OR:os:LIKE' => '%'.$query.'%',
				'OR:comments:LIKE' => '%'.$query.'%',
				'OR:price1:LIKE' => '%'.$query.'%',
				'OR:price2:LIKE' => '%'.$query.'%',
				'OR:price3:LIKE' => '%'.$query.'%',
				'OR:price4:LIKE' => '%'.$query.'%',
				'OR:skidka:LIKE' => '%'.$query.'%',
			//	'OR:active:LIKE' => '%'.$query.'%',
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
			'action' => 'updateServer',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('paypanel_item_enable'),
				'multiple' => $this->modx->lexicon('paypanel_items_enable'),
				'action' => 'enableServer',
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
				'action' => 'disableServer',
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
			'action' => 'removeServer',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'ServersGetListProcessor';