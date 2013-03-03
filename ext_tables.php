<?php

if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

if(t3lib_extMgm::isLoaded('skinselector')) {
	#$skinRepository = t3lib_div::makeInstance('Tx_Skinselector_Domain_Repository_SkinRepository');
	#$skinRepository->add(new Tx_Skinselector_Domain_Model_Skin('basictemplate'));
} else {
	t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/Skin', 'basictemplate: pagedefinition');
}