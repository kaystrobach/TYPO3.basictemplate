<?php

if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

if(!\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('themes')) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'basictemplate: pagedefinition');
}