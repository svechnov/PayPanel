<?php

if ($object->xpdo) {
	/** @var modX $modx */
	$modx =& $object->xpdo;

	switch ($options[xPDOTransport::PACKAGE_ACTION]) {
		case xPDOTransport::ACTION_INSTALL:
			$modelPath = $modx->getOption('paypanel_core_path', null, $modx->getOption('core_path') . 'components/paypanel/') . 'model/';
			$modx->addPackage('paypanel', $modelPath);

			$manager = $modx->getManager();
			$objects = array(
				'Hosting',
                'Licens',
                'Servers',
                'SSL',
                'Vds',
                'Zones',
			);
			foreach ($objects as $tmp) {
				$manager->createObjectContainer($tmp);
			}
			break;

		case xPDOTransport::ACTION_UPGRADE:
			break;

		case xPDOTransport::ACTION_UNINSTALL:
			break;
	}
}
return true;
