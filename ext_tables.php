<?php

if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

if(!t3lib_extMgm::isLoaded('themes')) {
	t3lib_extMgm::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'basictemplate: pagedefinition');
}