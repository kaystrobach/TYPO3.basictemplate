plugin.basictemplate.administrative {
	# cat=plugin.basictemplate/enable; type=boolean; label=Enable Adminpanel in Frontend 
	adminPanel       = 0
	# cat=plugin.basictemplate/enable; type=boolean; label=Disable Caching for Frontend 
	noCache          = 1
}
plugin.basictemplate.localization {
	# cat=plugin.basictemplate/language; type=string; label=Locale of output
	locale_all       = de_DE
	# cat=plugin.basictemplate/language; type=string; label=Language of output
	language         = de
}
plugin.basictemplate.config {
	# cat=plugin.basictemplate/content; type=string; label=LinkVars, which are keept during requests ;)
	linkVars         = L
	# cat=plugin.basictemplate/content; type=int; label=Default language uid
	sys_language_uid = 0
}
plugin.basictemplate.layout{
	# cat=plugin.basictemplate/content; type=string; label=additional CSS File 
	cssFile          = 
	# cat=plugin.basictemplate/content; type=string; label=copyright provider
	copyright        = Layout &copy; <a href="http://www.kay-strobach.de">Kay Strobach</a> - Stand 20.08.2011
}

#override css_styled_content
styles.content.imgtext.maxW = 774