//Subx Slider plug-in for jQuery by Alessandro Mondragon "walleta"
//Subx Slider plug-in para jQuery por Alessandro Mondragon "walleta"
(function ($) {
    $.fn.extend({
        sxslider: function (options) {
            var defaults = {
                speed: 5000,
                controls: false,
                transitionSpeed: 2000,
                direction: "none"
            };
            var options = $.extend(defaults, options);
            var o = options;
            $obj = $(this);
            var slec = $obj.selector;
            if ($('style[stracker="' + slec + '"]').length == 0) {
                $(slec).newsxslider();
            };
            setTimeout(function () {
                $(slec).sxslider({
                    speed: o.speed,
                    controls: o.controls,
                    transitionSpeed: o.transitionSpeed,
                    direction: o.direction
                });
            }, o.speed);

            if(o.direction == "left"){
                var effect = "slide"
                var dirh = "left"
                var dirs = "right"
            }else if(o.direction == "right"){
                var effect = "slide"
                var dirh = "right"
                var dirs = "left"
            }else if(o.direction == "up"){
                var effect = "slide"
                var dirh = "up"
                var dirs = "down"
            }else if(o.direction == "down"){
                var effect = "slide"
                var dirh = "down"
                var dirs = "up"
            };

            return $(slec).each(function () {
                var subx_sw = $(this).attr("width");
                var subx_sh = $(this).attr("height");
                var subx_br = $(this).css("border-radius");
                $(this).css("width", subx_sw);
                $(this).css("height", subx_sh);
                $(this).css("height", subx_sh);
                if (o.direction != "none") {
                    if ($(this).find("img:last").attr("n") == "1" || $(this).find('img[n="1"]').length == 0) {
                    $(this).find("img:last").attr("n","0")
                    $(this).find("img").hide(effect,{direction:dirh},o.transitionSpeed).first().show(effect,{direction:dirs},o.transitionSpeed).each(function(){
                    $( this ).attr("n","1")
                    $( this ).parent().parent().attr( 'title', $(this).attr( 'title' ) );
                    $( this ).parent().parent().attr( 'description', $(this).attr( 'alt' ) );

                    });
                }else{
                    $(this).find('img[n="1"]').hide(effect,{direction:dirh},o.transitionSpeed).attr("n","0").parent().next().show(effect,{direction:dirs},o.transitionSpeed).attr("n","1").each(function(){
                    $( this ).parent().parent().attr( 'title', $(this).attr( 'title' ) );
                    $( this ).parent().parent().attr( 'description', $(this).attr( 'alt' ) );
                    
                    });
                    }
                } else{
                    if ($(this).find("img:last").attr("n") == "1" || $(this).find('img[n="1"]').length == 0) {
                    $(this).find("img:last").attr("n","0")
                    $(this).find("img").hide("fade",o.transitionSpeed).first().show("fade",o.transitionSpeed).each(function(){
                    $( this ).attr("n","1")
                    $( this ).parent().attr( 'title', $(this).attr( 'title' ) );
                    $( this ).parent().attr( 'description', $(this).attr( 'alt' ) );

                    });
                }else{
                    $(this).find('img[n="1"]').hide("fade",o.transitionSpeed).attr("n","0").next().show("fade",o.transitionSpeed).attr("n","1").each(function(){
                    $( this ).parent().attr( 'title', $(this).attr( 'title' ) );
                    $( this ).parent().attr( 'description', $(this).attr( 'alt' ) );
                    
                    });
                    }
                };
            });
        }
    });
    $.fn.extend({
        newsxslider: function (options) {
            var subx_br = $(this).css("border-radius");
            $(this).find("img").css("border-radius",subx_br);
            $obj = $(this);
            var slec = $obj.selector;
            $("body").append("<style stracker='" + slec + "'>\
	" + slec + "{cursor:pointer;background-color:transparent;overflow: hidden;position: relative;}\
	" + slec + ":after{content: attr(description);overflow:hidden;background: rgba(0,0,0,0.5);bottom: 0;color: white;padding: 5px 10px;position: absolute;width: 100%;z-index:1;}\
	" + slec + ":before{content: attr(title);overflow:hidden;background: rgba(0,0,0,0.5);top: 0;color: white;padding: 5px 10px;position: absolute;width: 100%;z-index:1;}\
	" + slec + " img{width: 100%;height: 100%;display: none;background-color:transparent;position:absolute;top:0;}\
	</style>")
        }
    });

})(jQuery);

