page.includeCSS.ge-grids = EXT:microtemplate/Resources/Public/Styles/Content/ge-grids.css

#page.headerData.3948 = TEXT
#page.headerData.3948.value = {$microtemplate.contentWidth} / 3
#page.headerData.3948.prioriCalc = 1
#page.headerData.3948.value (
# <style>.ge-grid-1-1-1 .ge-grid-col {max-width: 200px !important}</styles>
#)
tt_content.gridelements_pi1 {
	10 =< lib.stdheader
	20 = COA
	20 {
		10 = USER
		10 { 
			userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
			setup {
				default < lib.gridelements.defaultGridSetup
		    ge-grid-1-1 < .default
		    ge-grid-1-1 {
			    cObject = FLUIDTEMPLATE
		      cObject.file = EXT:microtemplate/Resources/Private/Templates/Content/ge-grid-1-1.html
		    }
		    ge-grid-1-1-1 < .default
		    ge-grid-1-1-1 {
			    cObject = FLUIDTEMPLATE
		      cObject.file = EXT:microtemplate/Resources/Private/Templates/Content/ge-grid-1-1-1.html
		    }
		    ge-grid-1-2 < .default
		    ge-grid-1-2 {
			    cObject = FLUIDTEMPLATE
		      cObject.file = EXT:microtemplate/Resources/Private/Templates/Content/ge-grid-1-2.html
		    }
		    ge-grid-2-1 < .default
		    ge-grid-2-1 {
			    cObject = FLUIDTEMPLATE
		      cObject.file = EXT:microtemplate/Resources/Private/Templates/Content/ge-grid-2-1.html
		    }
			}
		}
	}
}