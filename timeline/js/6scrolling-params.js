            $(document).ready(function() {
                $('#my-list a').bind('click',function(event){
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollLeft: $($anchor.attr('href')).offset().left
                    }, 3000,'easeInOutBack');
                   /* $('html, body').stop().animate({
                        scrollLeft: $($anchor.attr('href')).offset().left
                    }, 1000);*/
                    event.preventDefault();
                });
            });