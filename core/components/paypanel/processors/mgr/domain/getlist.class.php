<?php

/**
 * Get a list of Items
 */
class PayPanelZonesGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'Zones';
	public $classKey = 'Zones';
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
				'OR:zones:LIKE' => '%'.$query.'%',
				'OR:domain:LIKE' => '%'.$query.'%',
				'OR:whois:LIKE' => '%'.$query.'%',
				'OR:idn:LIKE' => '%'.$query.'%',
				'OR:groups:LIKE' => '%'.$query.'%',
				'OR:roznica:LIKE' => '%'.$query.'%',
				'OR:p1:LIKE' => '%'.$query.'%',
				'OR:p2:LIKE' => '%'.$query.'%',
				'OR:p3:LIKE' => '%'.$query.'%',
				'OR:p4:LIKE' => '%'.$query.'%',
				'OR:p5:LIKE' => '%'.$query.'%',
				'OR:url:LIKE' => '%'.$query.'%',
				'OR:popular:LIKE' => '%'.$query.'%',
				'OR:hide:LIKE' => '%'.$query.'%',
				'OR:min:LIKE' => '%'.$query.'%',
				'OR:max:LIKE' => '%'.$query.'%',
				'OR:year:LIKE' => '%'.$query.'%',
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
			'action' => 'updateItem',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('paypanel_item_enable'),
				'multiple' => $this->modx->lexicon('paypanel_items_enable'),
				'action' => 'enableItem',
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
				'action' => 'disableItem',
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
			'action' => 'removeItem',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'PayPanelZonesGetListProcessor';