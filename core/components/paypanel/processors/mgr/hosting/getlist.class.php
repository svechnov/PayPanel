<?php

/**
 * Get a list of Hosts
 */
class HostingGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'Hosting';
	public $classKey = 'Hosting';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	public $permission = 'list';


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
				'OR:cost:LIKE' => '%'.$query.'%',
				'OR:sort:LIKE' => '%'.$query.'%',
				'OR:hdd:LIKE' => '%'.$query.'%',
				'OR:domains:LIKE' => '%'.$query.'%',
				'OR:db:LIKE' => '%'.$query.'%',
				'OR:ftp:LIKE' => '%'.$query.'%',
				'OR:id_price:LIKE' => '%'.$query.'%',
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
			'title' => $this->modx->lexicon('paypanel_host_update'),
			//'multiple' => $this->modx->lexicon('paypanel_hosts_update'),
			'action' => 'updateHost',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('paypanel_host_enable'),
				'multiple' => $this->modx->lexicon('paypanel_hosts_enable'),
				'action' => 'enableHost',
				'button' => true,
				'menu' => true,
			);
		}
		else {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('paypanel_host_disable'),
				'multiple' => $this->modx->lexicon('paypanel_hosts_disable'),
				'action' => 'disableHost',
				'button' => true,
				'menu' => true,
			);
		}

		// Remove
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-trash-o action-red',
			'title' => $this->modx->lexicon('paypanel_host_remove'),
			'multiple' => $this->modx->lexicon('paypanel_hosts_remove'),
			'action' => 'removeHost',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'HostingGetListProcessor';