$(function () {

    $(".gotop").click(function () {
        jQuery("html,body").animate({ scrollTop: 0 }, 800); //1.點下按鈕之後會以 animate動態效果讓捲軸捲到網頁最頂端
    });
    //2.$(this).scrollTop()就是用來取得目前的位置距離網頁頂端有多遠，若大於 300px 就會將按鈕顯示出來，小於就會隱藏。
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').stop().fadeOut();
        }
    });


    $('.nav-Home').click(function () {
        //2.利用animate移到到指定的區塊
        $('html,body').animate({ scrollTop: $('.home').offset().top }, 800);
    });

    $('.nav-About').click(function () {
        $('html,body').animate({ scrollTop: $('.about').offset().top }, 800);
    });

    $('.nav-Skill').click(function () {
        $('html,body').animate({ scrollTop: $('.skill').offset().top }, 800);
    });

    $('.nav-Work').click(function () {
        $('html,body').animate({ scrollTop: $('.work').offset().top }, 800);
    });
  
    $('.nav-Contact').click(function () {
        $('html,body').animate({ scrollTop: $('.contact').offset().top }, 800);
    });


    $('.arrow-down').click(function () {
        
        $('html,body').animate({ scrollTop: $('.about').offset().top }, 800);
    });

    var waypoint = new Waypoint({
        element: document.getElementsByClassName('contact'),
        handler: function () {
            var typeWriting = new TypeWriting({
                targetElement: document.getElementsByClassName('contact-me')[0],
                inputString: 'Contact me',
                typing_interval: 130,
                blink_interval: '1s',
                cursor_color: 'transparent',
            }, function () {
                console.log("END");
            });
        },
        offset: '80%'
    })



   


  


});

