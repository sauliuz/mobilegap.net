/*--------------------------------------------------------------------*/
/*	DOCUMENT READY FUNCTIONS
/*--------------------------------------------------------------------*/

// IF JS IS ENABLED, REMOVE 'no-js' AND ADD 'js' CLASS
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {

	jQuery('#windowTitleDialog').bind('show', function () { document.getElementById ("xlInput").value = document.title; });
		
	// FITVID
	jQuery("body").fitVids();
	
	//AUTOHEIGHT TEXTAREA
	jQuery('textarea.auto-height').flexText();
	  
  	//FORM VALIDATION
	if (jQuery().validate) { jQuery("#commentform").validate(); }
	
	//RESPONSIVE MENU TOGGLE
	$('.js #menu-toggle').click(function (e) {
	  $('body').toggleClass('active');
	  e.preventDefault();
	});
	
	//RESPONSIVE MENU TOGGLE LI
	$('.js #menu-toggle').click(function (e) {
	  $('.nav ul li a').toggleClass('BeanMobileFadeLeft');
	});

	//ISOTOPE MAIN
	var $container = $('#isotope-container');
		$container.imagesLoaded( function(){
		$container.isotope({
		 itemSelector: '.isotope-item',
	 	 resizesContainer: true
	});

	//ISOTOPE FILTER
    $(function(){
        var $container = $('#isotope-container');
            optionFilter = jQuery('#sort-by'),
            optionFilterLinks = optionFilter.find('a');
        
        optionFilterLinks.attr('href', '#');
        
        optionFilterLinks.click(function(){
            var selector = jQuery(this).attr('data-filter');
           $container.imagesLoaded( function(){ 
            $container.isotope({ 
                filter : '.' + selector, 
                itemSelector : '.isotope-item',
                resizesContainer: true,
            });
            	});
            // Highlight the correct filter
            optionFilterLinks.removeClass('active');
            jQuery(this).addClass('active');
            return false;
        });
    });

	//ISOTOPE INFINITE SCROLLING   
	$(function(){
	  $container.infinitescroll({
	        navSelector  : '#page_nav',    
	        nextSelector : '#page_nav a',  
	        itemSelector : '.isotope-item',
	        loading: {
	            finishedMsg: 'Done Loading',
	            img: ' '
	          }
	        },
	        
	        function( newElements ) {
	          var $newElems = $( newElements ).css({ opacity: 0 });
	          $newElems.imagesLoaded(function(){
	            $newElems.animate({ opacity: 1 });
	            $container.isotope( 'appended', $newElems, true ); 
	          });
	        }
	      );
	  });
	  
	});
	
});