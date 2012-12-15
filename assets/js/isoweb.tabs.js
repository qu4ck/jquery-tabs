/*
 * Date 	: 14-12-2012
 * Author	: Airlangga bayu seto
 * Email	: qu4ck@iso.web.id
 * Website	: http://www.iso.web.id
 */
 
(function($){
	$.isoTabs = function(option){
		var opsi = $.extend({
			 click : "#tabs-nav a"
			,list  : "#list-tabs"
			,show  : "#tabs1"
		}, option);
		
		var list = opsi.list.substr(1)
		var click = opsi.click.substr(1)
		
		$(opsi.click).click(function(){
			var hr = $(this).attr("href");
			$("#"+click).removeClass("active");
			$("#"+ list+" div").hide();
			$("#"+list+" "+hr).show();
			$(this).addClass("active");
			
			return false;
		});
		
		$("#list-tabs div").hide();
		$(opsi.show).show();
		$("#tabs-nav a[href="+opsi.show+"]").addClass("active");
	}
})(jQuery);