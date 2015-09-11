<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var PayPanel $PayPanel */
$PayPanel = $modx->getService('paypanel', 'PayPanel', $modx->getOption('paypanel_core_path', null, $modx->getOption('core_path') . 'components/paypanel/') . 'model/paypanel/');
$modx->lexicon->load('paypanel:default');

// handle request
$corePath = $modx->getOption('paypanel_core_path', null, $modx->getOption('core_path') . 'components/paypanel/');
$path = $modx->getOption('processorsPath', $PayPanel->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));