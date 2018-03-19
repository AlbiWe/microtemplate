<INCLUDE_TYPOSCRIPT: source="DIR:EXT:microtemplate/Configuration/PageTS/Include/" extensions="ts">

# set default language for the page module
	mod {
		SHARED {
			defaultLanguageFlag = gb
			defaultLanguageLabel = English
		}
	}

# RTE setup defined in ext_localconf.php
	RTE.default.preset = microtemplate
# only for 'bodytext' field example
#	RTE.config.tt_content.bodytext.preset = microtemplate


# set default back end group permissions
	TCEMAIN {
		permissions.groupid = 1
	}

# disable some content elements and some fields for pages and content elements
	TCEFORM {
	  pages {
		  alias.disabled = 1
		  newUntil.disabled = 1
		  layout.disabled = 1
		  url_scheme.disabled = 1
		  tx_realurl_pathoverride.disabled = 1
	#	  lastUpdated.disabled = 1 
		}
		tt_content {
			CType.removeItems = text, textpic, image, bullets, search
			imagecaption_position.disabled = 1
			image_noRows.disabled = 1
			imageorient.disabled = 0
			imagewidth.disabled = 0
			imageborder.disabled = 1
			lastUpdated.disabled = 1
			linkToTop.disabled = 1
			date.disabled = 1
			frame_class.disabled = 1
			header_position.disabled=1
			header_link.disabled = 1
			accessibility.disabled = 0
			layout.disabled = 1
		}
	}