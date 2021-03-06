/* Add media button */
jQuery(document).ready(function() {
	
	/* CHAT OPTION */
	var sPath=window.location.pathname.substring(1) + window.location.search;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	var sOption = sPath.substring(sPath.lastIndexOf('?') + 1);
	var sPlugin = sPath.substring(sPath.lastIndexOf('=') + 1);
	
	if(sPlugin === "speechy-plugin"){
		(function(){ var widget_id = 'xFqosHXMzb';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
	}
	/* END CHAT OPTION */

	
    var $ = jQuery;
    if ($('.set_player_logo').length > 0) {
        if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {
            $(document).on('click', '.set_player_logo', function(e) {
                e.preventDefault();
                var button = $(this);
                /*var id = button.prev();*/
				
                wp.media.editor.send.attachment = function(props, attachment) {
                    /*id.val(attachment.url);*/
					$('.show_player_logo').html("<img src=" + attachment.url + " style='width: 100px' />");
					$('.player_logo_value').val( attachment.url );
					$('.delete_player_logo').html( "delete image" );
                };
                wp.media.editor.open(button);
                return false;
            });
			
			$(document).on('click', '.delete_player_logo', function(e) {
                e.preventDefault();
                $('.show_player_logo').html("No image selected");
				$('.player_logo_value').val( "" );
				$('.delete_player_logo').html( "" );
				
                return false;
            });
        }
    }
	
	/* Player background Image */
	if ($('.set_player_bg_image').length > 0) {
        if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {
            $(document).on('click', '.set_player_bg_image', function(e) {
                e.preventDefault();
                var button = $(this);
                /*var id = button.prev();*/
				
                wp.media.editor.send.attachment = function(props, attachment) {
                    /*id.val(attachment.url);*/
					$('.show_player_bg_image').html("<img src=" + attachment.url + " style='width: 200px' />");
					$('.player_bg_image_value').val( attachment.url );
					$('.delete_player_bg_image').html( "delete image" );
					$('.set_player_logo').val("Set Player Logo");
                };
                wp.media.editor.open(button);
                return false;
            });
			
			$(document).on('click', '.delete_player_bg_image', function(e) {
                e.preventDefault();
                $('.show_player_bg_image').html("No image selected");
				$('.player_bg_image_value').val( "" );
				$('.delete_player_bg_image').html( "" );
				$('.delete_player_bg_image').html( "delete image" );
				
                return false;
            });
        }
    }
	
	/* Itunes Image */
	if ($('.set_speechy_itunes_image').length > 0) {
        if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {
            $(document).on('click', '.set_speechy_itunes_image', function(e) {
                e.preventDefault();
                var button = $(this);
                /*var id = button.prev();*/
				
                wp.media.editor.send.attachment = function(props, attachment) {
                    /*id.val(attachment.url);*/
					$('.show_speechy_itunes_image').html("<img src=" + attachment.url + " style='width: 200px' />");
					$('.speechy_itunes_image_value').val( attachment.url );
					$('.delete_speechy_itunes_image').html( "delete image" );
					$('.set_player_logo').val("Set Player Logo");
                };
                wp.media.editor.open(button);
                return false;
            });
			
			$(document).on('click', '.delete_speechy_itunes_image', function(e) {
                e.preventDefault();
                $('.show_speechy_itunes_image').html("No image selected");
				$('.speechy_itunes_image_value').val( "" );
				$('.delete_speechy_itunes_image').html( "" );
				$('.delete_speechy_itunes_image').html( "delete image" );
				
                return false;
            });
        }
    }
	
	jQuery("#prepmp3type").change(function(){
		jQuery("#prepboxmp3").hide();
		jQuery("#prepboxtext").hide();
		var type = jQuery("#prepmp3type").val();
		if(type == 'mp3')
			jQuery("#prepboxmp3").show();
		else if(type == 'text')
			jQuery("#prepboxtext").show();
		jQuery("#prepmp3id").change();
	});
	jQuery("#prepmp3id").change(function(){
		if(jQuery("#prepmp3id").val() == "1")
			jQuery("#prepboxmp3upload").show();
		else
			jQuery("#prepboxmp3upload").hide();
	});
	jQuery("#prepmp3type").change();
	
	
	jQuery("#prepboxmp3uploadformsubmit").click(function (e) {

        var supporttitle = jQuery('.support-title').val();
        var prepmp3name = jQuery('input[name=prepmp3name]').val();
        var prepmp3file = jQuery('input[name=prepmp3file]').prop('files')[0];

        var form_data = new FormData();

        form_data.append('action', 'mp3uploadajax');
        form_data.append('mp3name', prepmp3name);
        form_data.append('mp3file', prepmp3file);
        jQuery("#prepboxmp3uploadformsubmit").attr("disabled", true);
        jQuery("#prepboxmp3uploadformsubmit").val("Uploading");
        jQuery.ajax({
            url: 'admin-ajax.php',
            type: 'post',
            contentType: false,
            processData: false,
            data: form_data,
            dataType: 'json',
            success: function (response) {
            	jQuery("#prepboxmp3uploadformsubmit").attr("disabled", false);
            	jQuery("#prepboxmp3uploadformsubmit").val("Upload")
            	if(response.error == 0){
            		jQuery("#prepmp3id").html(response.html);
            		jQuery('input[name=prepmp3name]').val('');
            		jQuery('input[name=prepmp3file]').val('');
            		jQuery("#prepboxmp3upload").hide();
            	}
            	else
            		alert(response.message);
            },  
            error: function (response) {
             console.log('error');
             jQuery("#prepboxmp3uploadformsubmit").val("Upload")
             jQuery("#prepboxmp3uploadformsubmit").attr("disabled", false);
            }

        });
    });
});
/* Color picker for admin page*/

(function( $ ) {
    $(function() {   
        // Add Color Picker to all inputs that have 'color-field' class
        $( '.speechy-color-picker, .speechy-bg-color-picker, .speechy-text-color-picker' ).wpColorPicker();  		
    });
	
})( jQuery );

/* Open window for changing plan and payment with stripe */

function open_iframe(){
	console.log('YES');
}

var speechyPopup = null;

var messageupdate = "<p>Success! Your plan has been updated successfully! The change will be effective in about 5 minutes.</p>";

function openPortal(onSubscription){
	
	var getspeechystorage = localStorage.getItem("speechy");
	
	if(getspeechystorage != ""){
		var url = 'https://speechy.io/portal/?TB_iframe=true#login';
	}else{
		var url = 'https://speechy.io/portal/?TB_iframe=true#signup';
	}

	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
	
	// Listen to message from child window
	eventer(messageEvent,function(e) {
		if(url.indexOf(e.origin) != -1){
			//console.log(e.message);
		    var key = e.message ? "message" : "data";
		    var data = e[key];
		    //console.log(data);
		    if(data.action == "apply_credentials"){
		    	jQuery("#speechy_id_key").val(data.id_key);
		    	jQuery("#speechy_secret_key").val(data.secret_key);
		    	onSubscription("<p>Success! Your credentials are applied. Press 'Save Changes' to save them.</p>");
		    }
		    else if(data.action == "plan_change"){
		    	onSubscription(messageupdate);
		    }
		    
		    tb_remove();
		}
		
		localStorage.setItem("speechy", "1");
	},false);
	
	tb_show('Speechy', url);
	
	return false;
}

function openPortal2(onSubscription){
	if(speechyPopup == null){
		var url = "https://speechy.io/portal/#/";
		var w = 450;
		var h = 600;
		
	    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
	
	    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
	
	    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	    var top = ((height / 2) - (h / 2)) + dualScreenTop;
	    
		speechyPopup = window.open(url, "", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
		speechyPopup.onbeforeunload = function(){
			speechyPopup = null;
		};

		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
		
		// Listen to message from child window
		eventer(messageEvent,function(e) {
			if(url.indexOf(e.origin) != -1){
			    var key = e.message ? "message" : "data";
			    var data = e[key];
			    // console.log(data);
			    onSubscription(data.messageupdate);
				
			}
		},false);
		
		speechyPopup.focus();
	}
	else{
		speechyPopup.focus();
	}
}