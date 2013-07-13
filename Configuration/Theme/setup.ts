##################################################################
# Allgemeine TypoScript-Konfigurationen
	config {
		no_cache                = {$plugin.basictemplate.administrative.noCache}
		admPanel                = {$plugin.basictemplate.administrative.adminPanel}
		linkVars                = {$plugin.basictemplate.config.linkVars}
		sys_language_uid        = {$plugin.basictemplate.config.sys_language_uid}
		language                = {$plugin.basictemplate.localization.language}
		locale_all              = {$plugin.basictemplate.localization.locale_all}
		spamProtectEmailAddresses = 1
		
		xhtml_cleaning          = 1
		
		inlineStyle2TempFile    = 1
		removeDefaultJS         = external
		
		cache_period            = 86400
		cache_clearAtMidnight   = 1    
		
		typolinkCheckRootline   = 1
		simulateStaticDocuments = 0
		
		prefixLocalAnchors      = all
		
		disablePrefixComment    = 1
		
		headerComment (
		  Grundlayout / Einrichtung & Installation (c) 2011 Kay Strobach
		  more info @ http://projects.kay-strobach.de
		)
	}

##################################################################
# sitemap: set max age for newest pages
	tt_content.menu.20.5.special.maxAge = 3600*24*14

##################################################################
# Sitemaps kofigurieren
	tt_content.menu.20.2 {
		special = directory
		special.value.field = pages
		1.target = _self
		2.target = _self
		3.target = _self
		4.target = _self
		4.expAll = 0
	} 
	content.pageFrameObj = _self

##################################################################
# Libs

tt_content.image.20 {
	maxW >
	maxW.cObject = CASE
	maxW.cObject {
		key.field = colPos
		0 = TEXT
		0.value = 773
		2 = TEXT
		2.value = 145
	}
}

	lib {
		aside = CONTENT
		aside {
			table          = tt_content
			select.orderBy = sorting
			select.where   = colPos = 2
			renderObj {
				image.20 {
					maxW = 160
					maxW.override.data = 1
					maxWInText = 160
					maxWInText.override.data = 160
				}
			}
		}
		menu = HMENU
		menu {
			1 = TMENU
			1 {
				wrap = <ul>|</ul>
				NO = 1
				NO {
					wrapItemAndSub = <li>|</li>
					ATagBeforeWrap = 1
					linkWrap = <span>|</span>
				}
				ACT < .NO
				ACT {
					ATagParams = class="open"
				}
				expAll = 1
				accessKey = 1
			}
			
			2 < .1
			3 < .2
		}
		header = IMAGE
		header {
			altText.current = 1
			titleText.current = 1
			file = GIFBUILDER
			file {
				backColor = #ffffff
				XY = [10.w]+20,[10.h]+20
				10 = TEXT
				10 {
					text.current = 1
					fontColor = #444444
					fontSize  = 30 
					offset = 5,[10.h]+10
				}
				20 = EFFECT
				20.value = blur=70 |
				30 < .10
			}
		}
		footer = COA
		footer {
			10 = TEXT
			10.value = {$plugin.basictemplate.layout.copyright}
		}
	}

##################################################################
# Seite konfigurieren
  config {
		doctype(
			<!doctype html>
		)
		htmlTag_setParams = lang="{$plugin.basictemplate.localization.language}"
	}
	page = PAGE
  page {
  	#headTag(
    #	<head>
    #  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		#)
		includeCSS {
			file10 = EXT:basictemplate/Resources/Public/Stylesheets/main.css
			file20 = EXT:basictemplate/Resources/Public/Stylesheets/nav.css
			file30 = EXT:basictemplate/Resources/Public/Stylesheets/article.css
			file40 = EXT:basictemplate/Resources/Public/Stylesheets/header.css
			file50 = EXT:basictemplate/Resources/Public/Stylesheets/footer.css
			file60 = EXT:basictemplate/Resources/Public/Stylesheets/aside.css
			file80 = EXT:t3skin/stylesheets/structure/element_message.css
			file81 = EXT:t3skin/stylesheets/visual/element_message.css
			file90 = {$plugin.basictemplate.layout.cssFile}
		}
		includeJS {
			file10 = EXT:basictemplate/Resources/Public/JavaScripts/IeHtml5Compatibility.js
		}
		10 = FLUIDTEMPLATE
		10 {
			workOnSubpart   = DOCUMENT_BODY
			file            = EXT:basictemplate/Resources/Private/Templates/main.html
			layoutRootPath  = EXT:basictemplate/Resources/Private/Layouts/
			partialRootPath = EXT:basictemplate/Resources/Private/Partials/
			variables {
				content = CONTENT
				content {
					table          = tt_content
					select.orderBy = sorting
					select.where   = colPos = 0  
				}
			}
		}
	}
    
##################################################################
# browserswitch for shitty ie
[browser = msie] && [version =5]
	config.doctypeSwitch = false
	page.5 = TEXT
	page.5.value = <div style="position:absolute;left:0px;top:0px;width:100%;height:25px;clear:both;background-color:#f3ca66;color:#000000;text-align:left;padding:5px;font-weight:bold;">Ihr Browser ist veraltet. Das <a style="color:#000000;" href="https://www.bsi.bund.de/cln_156/ContentBSI/presse/Pressemitteilungen/Sicherheitsluecke_IE_150110.html">BSI warnt vor der Benutzung</a>.</div>
[GLOBAL]
[browser = msie] && [version =6]
	config.doctypeSwitch = false
	page.5 = TEXT
	page.5.value = <div style="position:absolute;left:0px;top:0px;width:100%;height:25px;clear:both;background-color:#f3ca66;color:#000000;text-align:left;padding:5px;font-weight:bold;">Ihr Browser ist veraltet. Das <a style="color:#000000;" href="https://www.bsi.bund.de/cln_156/ContentBSI/presse/Pressemitteilungen/Sicherheitsluecke_IE_150110.html">BSI warnt vor der Benutzung</a>.</div>
[GLOBAL]
[browser = msie] && [version = 7]
	config.doctypeSwitch = true
	page.5 = TEXT
	page.5.value = <div style="position:absolute;left:0px;top:0px;width:100%;height:25px;clear:both;background-color:#f3ca66;color:#000000;text-align:left;padding:5px;font-weight:bold;">Ihr Browser ist veraltet. Das <a style="color:#000000;" href="https://www.bsi.bund.de/cln_156/ContentBSI/presse/Pressemitteilungen/Sicherheitsluecke_IE_150110.html">BSI warnt vor der Benutzung</a>.</div>
[GLOBAL]

[browser = msie] && [version = 8]
	page.headerData.89 = TEXT
	page.headerData.89.value = <meta http-equiv="X-UA-Compatible" content="IE=8">
[GLOBAL]