/*
 * Soma FontFriend 2.2
 * http://somadesign.ca/projects/fontfriend
 * 
 * Copyright (c) 2009 Matt Wiebe 
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Uses some code (c) 2009 Ryan Seddon from
 * http://labs.thecssninja.com/font_dragr/
 * Licensed under the MIT license
 *
*/

var fntfr = {
	version: "2.2",
	// style info
	css: "#font-friend{overflow:hidden;position: fixed;bottom:0;left:30px;background-color:#fff;background-color:rgba(255,255,255,0.9);width:740px;color:#222;-moz-box-shadow:1px 1px 5px rgba(0,0,0,.3);-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.3);box-shadow:1px 1px 5px rgba(0,0,0,.3);z-index:10000;text-align:left;height:280px;}#typo-drop{padding:12px 12px 12px 36px;}#typo-toggle{background-color:#222;color:#eee;display:block;width:12px;height:16px;padding:0 1px 0 3px;position:absolute;top:0;left:0;font-size:16px;line-height:1;cursor:pointer;z-index:10001;}#typo-toggle sup{font-size:13px;line-height:13px;vertical-align:super;display:none;}.open #typo-toggle sup{display:inline;}#typo-toggle:hover{color:#fff;background-color:#555;}.open #typo-toggle{width:auto;height:32px;font-size:32px;padding:0 3px;}#typo-drop form{background:none;color:inherit;float:none;}#typo-drop h6{font-size:13px;border-bottom:1px solid #aaa;line-height:1.5 !important;margin:0 0 6px !important;padding:0 !important;text-indent:0 !important;float:none !important;}#typo-drop>div{float:left;width:120px;padding-right:20px;margin-bottom:12px;}#typo-drop>div.wrap>div{margin-bottom:12px;font-size:11px !important;}#typo-drop div#typo-selector{width:130px;}#typo-drop div#typo-font-family{width:240px;}#typo-selector p{font-size:9px !important;line-height:1.2 !important;margin:1em 0 0 !important;padding:0 !important;}#typo-controls{position:absolute;bottom:60px;left:65px;width:55px !important;height:60px;margin:0 !important;padding:0 !important;}#typo-controls div{position:absolute;font-size:20px;width:1em;height:1em;cursor:pointer;color:#555;min-width:inherit !important;min-height:inherit !important;padding:0;margin:0;float:none;}#typo-controls div:hover{color:#000;}#typo-controls .up{left:1em;top:0;}#typo-controls .down{left:1em;bottom:0;}#typo-controls .left{left:0;top:1em;}#typo-controls .right{right:0;top:1em;}#typo-drop #typo-font-family ul{float:left;width:110px;padding-right:5px;}#typo-drop #typo-font-family ul#typo-font-family-sans{padding-right:10px;width:115px;}#typo-drop ol li{list-style: none outside}#typo-drop ol,#typo-drop ul{margin:0;padding:0;}#typo-drop li{font-size:11px !important;line-height:1.5 !important;margin:0 !important;padding:0 !important;list-style: none outside none !important;text-indent:0 !important;height:auto !important;}#typo-drop li.core{margin-bottom:4px !important;padding:0 !important;}#typo-drop ul li:hover{cursor:pointer;background-color:#e6e6e6 !important;}#typo-drop ul li.family-custom{margin:12px 0 0 !important;}#typo-drop ul li.family-custom:hover{cursor:default;background:none;}#family-custom{width:105px;}#typo-drop ol input[type=radio]{margin-left:-5px;width:auto !important;}#typo-blah{width:100px;margin-left:5px;}#typo-drop ol label{margin-left:5px;display:inline !important;}#typo-credit{position:absolute;bottom:21px;left:32px;font-size:9px;margin:0 !important;}#font-friend a{color:#4C0003 !important;text-decoration:underline !important;border:0 !important;}#font-friend a:hover{color:#A60007 !important;}#typo-clear{position:absolute;bottom:0;right:0;padding:5px 5px 0 !important;text-decoration: line-through;opacity:.1;font-size:21px;margin:0 !important;width:auto !important;}#typo-clear:hover{opacity:1;cursor:pointer;}#typo-font-drop{font-size:11px !important;background-color:#e6e6e6;padding:18px 0;text-align:center;border:1px solid #aaa;margin-bottom:6px;}#typo-font-drop.dropzone{background-color:#fff;border-color:#111;}#typo-drop select option{font-size:10px !important;}",
	// inserted html. see font-friend.html for understandable version
	html: '<div id="typo-drop"><span id="typo-toggle">F<sup>2</sup></span><div id="typo-selector"><h6>Selector</h6><form action="" method="get"><ol><li><input type="radio" name="jq-select" checked="checked" id="jq1"><label for="jq1">body</label></li><li><input type="radio" name="jq-select" id="jq2"><label for="jq2">h1,h2,h3,h4,h5,h6</label></li><li><input type="radio" name="jq-select" id="jq3"><label for="jq3">p</label></li><li><input type="radio" name="jq-select" id="jq4"><input type="text" name="typo-blah" value="roll your own" id="typo-blah"></li></ol></form><p>Roll your own selector using <a href="http://docs.jquery.com/Selectors">jQuery selectors</a>.</p></div><div id="typo-font-family"><h6>Font Family</h6><ul id="typo-font-family-sans" rel="fontFamily"><li>Arial</li><li>Verdana</li><li>Tahoma</li><li class="core">Trebuchet MS</li><li>Helvetica</li><li>Helvetica Neue</li><li>Gill Sans</li><li>Century Gothic</li><li>Lucida Grande</li><li>Lucida Sans Unicode</li><li>Calibri</li><li>Corbel</li><li>Candara</li></ul><ul id="typo-font-family-serif" rel="fontFamily"><li>Times New Roman</li><li class="core">Georgia</li><li>Times</li><li>Palatino</li><li>Palatino Linotype</li><li>Baskerville</li><li>Hoefler Text</li><li>Garamond</li><li>Constantia</li><li>Cambria</li><li class="family-custom"><input type="text" name="family-custom" value="your font family" id="family-custom"></li></ul></div><div class="wrap"><div id="typo-font-variant"><h6>Font Variant</h6><ul rel="fontVariant"><li>small-caps</li><li>normal</li></ul></div><div id="typo-font-weight"><h6>Font Weight</h6><ul rel="fontWeight"><li>bold</li><li>normal</li></ul></div><div id="typo-text-transform"><h6>Text Transform</h6><ul rel="textTransform"><li>capitalize</li><li>uppercase</li><li>lowercase</li><li>none</li></ul></div></div><div class="wrap"><div id="typo-font-face"><h6>@font-face</h6><div id="typo-font-drop">Drag a font here.</div><ul rel="fontFamily"></ul></div><div id="typo-line-height"><h6>Line Height</h6><select rel="lineHeight"><option>1</option><option>1.1</option><option>1.2</option><option>1.3</option><option>1.4</option><option>1.5</option><option>1.6</option><option>1.75</option><option>2</option></select></div><div id="typo-font-size"><h6>Font Size</h6><select rel="fontSize"><option>10</option><option>11</option><option>12</option><option>14</option><option>16</option><option>18</option><option>21</option><option>24</option><option>36</option><option>48</option><option>60</option><option>72</option></select></div></div><div id="typo-controls"><div class="left">&larr;</div><div class="right">&rarr;</div><div class="up">&uarr;</div><div class="down">&darr;</div></div><div id="typo-credit"><a href="http://somadesign.ca/projects/fontfriend/" title="Soma FontFriend homepage">Soma FontFriend</a></div><div id="typo-clear" title="clear all styles">S</div></div>'
};

// check if it's already been added. saves against weirdness if clicked again.
if (jQuery('#font-friend').size() == 0 ) {
	
	jQuery("head").append('<style id="font-friend-stylesheet" type="text/css" media="screen">'+fntfr.css+'</style>');
	jQuery("body").append("<div id='font-friend'></div>");
	jQuery("#font-friend").html(fntfr.html).addClass("open");
	jQuery("#typo-credit").append("<span> "+fntfr.version+"</span>");

	// reuse later
	var ff = jQuery("#font-friend");
	
	fntfr.width = ff.outerWidth();
	fntfr.height = ff.outerHeight();
	
	// open and close animations
	jQuery("#typo-toggle").toggle(function() {
		ff.removeClass("open").animate({height:16, width:16},100);
	}, function() {
		ff.addClass("open").animate({height:fntfr.height, width:fntfr.width},100);
	});


	// the main attraction: change that font
	jQuery("#typo-drop ul > li").live("click", function() {

		// set variables
		var theAttribute = jQuery(this).parent().attr("rel");
		var theValue = jQuery(this).text();
		var theSelector = jQuery("#typo-drop ol input:checked").next().text();
		if (theSelector == "") {
			var theSelector = jQuery("#typo-drop ol input:checked").next().attr("value");
		}
		// apply that css
		jQuery(theSelector).css(theAttribute, theValue);

	});
	
	jQuery("#typo-drop select").change(function() {
		// set variables
		var theAttribute = jQuery(this).attr("rel");
		var theValue = parseFloat( jQuery(this).find("option:selected").val() );
		var theSelector = jQuery("#typo-drop ol input:checked").next().text();
		if (theSelector == "") {
			var theSelector = jQuery("#typo-drop ol input:checked").next().attr("value");
		}
		// debug: console.log(theAttribute + " " + theValue + " " + theSelector);
		// apply that css
		jQuery(theSelector).css(theAttribute, theValue);
	});
	
	// unbind the click on the custom font family input (it's in a <li> element)
	jQuery("#typo-drop li.family-custom").unbind();
	
	// just type and change that custom font
	jQuery("#family-custom").keyup(function() {
		
		// variables
		var theSelector = jQuery("#typo-drop ol input:checked").next().text();
		if (theSelector == "") {
			var theSelector = jQuery("#typo-drop ol input:checked").next().attr("value");
		}
		var theValue = jQuery("#family-custom").attr("value");
		
		// apply that custom font
		jQuery(theSelector).css("fontFamily", theValue);
		
		
		return false;
	});

	//move the box around
	jQuery("#typo-controls div").click(function() {
		if (jQuery(this).hasClass("left") ) {
			jQuery("#font-friend").css({left:30, right:"auto"});
		} 
		if (jQuery(this).hasClass("right") ) {
				jQuery("#font-friend").css({right:30, left:"auto"});
		}
		if (jQuery(this).hasClass("up") ) {
			jQuery("#font-friend").css({top:0, bottom:"auto"});
		}
		if (jQuery(this).hasClass("down") ) {
			jQuery("#font-friend").css({bottom:0, top:"auto"});
		}
	});

	//clearout the text input onclick
	jQuery("#typo-blah, #family-custom").each(function(index) {
		jQuery(this).attr('rel', jQuery(this).attr("value") );
	}).click(function() {
		
		jQuery(this).prev().attr("checked", "checked");
		
		if (jQuery(this).attr("value") == jQuery(this).attr("rel") ) {
			jQuery(this).removeAttr("value");
		} else {
			jQuery(this).select();
		}
		
	});
	
	// clear all inline styles -> might crash large pages!
	jQuery("#typo-clear").click(function() {
		jQuery("*").removeAttr("style");
		fntfr.buildFamilies();
	});
	
	// add inline font-family styles
	fntfr.buildFamilies = function() {
		jQuery("#typo-font-family li, #typo-font-face li").each(function() {
			jQuery(this).css('fontFamily', '"'+jQuery(this).text()+'",monospace' );
		});
	};
	fntfr.buildFamilies();
	
	// drop functions	
	fntfr.drop = function(event) {
		
		event.stopPropagation();
		event.preventDefault();
		
		var dt = event.originalEvent.dataTransfer,
			files = dt.files,
			count = files.length,
			acceptedFileExtensions = /^.*\.(ttf|otf|svg|woff)$/i,
			droppedFullFileName,
			droppedFileName,
			droppedFontData;
		
		for (var i = 0; i < count; i++) {
			droppedFullFileName = files[i].fileName;
			
			if(droppedFullFileName.match(acceptedFileExtensions)) {
				droppedFileName = droppedFullFileName.replace(/\..+$/,""); // Removes file extension from name
				droppedFileName = droppedFileName.replace(/\W+/g, "-"); // Replace any non alpha numeric characters with -
				droppedFontData = files[i].getAsDataURL();
				
				fntfr.buildFontList(droppedFileName, droppedFontData);
				
				
				jQuery("#typo-font-face ul li:last-child").click();
				
			} else {
				alert("Invalid file extension. Will only accept ttf, otf, svg or woff font files");
			}
		} // end for
		
	};
	
	fntfr.buildFontList = function (name, data) {
		
		// Get font file and prepend it to stylsheet using @font-face rule
		jQuery("<style type='text/css'>@font-face{font-family: "+name+"; src:url("+data+");}</style> ").appendTo("head");
		
		jQuery("#typo-font-face ul").append("<li style='font-family:"+name+"'>"+name+"</li>");
		
	};
	
	// add event listeners for dropper

	jQuery("#typo-font-drop")
		.bind("dragover", function(event){event.stopPropagation(); event.preventDefault();})
		.bind("dragenter dragleave", function(event){jQuery(this).toggleClass("dropzone"); event.stopPropagation(); event.preventDefault();})
		.bind("drop", fntfr.drop);

} 
else {
	// if they've clicked on the bookmarklet a second time, assume they want to open it
	jQuery("#font-friend").animate({height:fntfr.height, width:fntfr.width},100).addClass("open");
}
