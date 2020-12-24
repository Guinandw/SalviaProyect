// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// })

$(document).ready(function(){
$('.nav-button').click(function(){
$('.nav-button').toggleClass('change');
});

$(window).scroll(function(){
let position = $(this).scrollTop();
if(position >= 200){
    $('.nav-menu').addClass('custom-navbar');
}else{
    $('.nav-menu').removeClass('custom-navbar');
}
});

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 650){
        $('.mis-img').addClass('mis-img1');
        $('.mis-par').addClass('mis-header');
    }else{
        $('.mis-img').removeClass('mis-img1');
        $('.mis-par').removeClass('mis-header');

    }
    });

    $('.gallery-list-item').click(function(){
            // $('.filter').show(200);        
            let value = $(this).attr('data-filter');
            if(value === 'all'){
                $('.filter').show(300);
            }else {
                $('.filter').not('.'+ value).hide(300);
                $('.filter').filter('.'+ value).show(300);
                
            }
     });

     $('.gallery-list-item').click(function(){
        $(this).addClass('active-link-gallery').siblings().removeClass('active-link-gallery')
     });

     $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 4950){
            $('.card1').addClass('card1-mov');
            $('.card2').addClass('card2-mov');
            $('.card3').addClass('card3-mov');
        }else{
            $('.card1').removeClass('card1-mov');
            $('.card2').removeClass('card2-mov');
            $('.card3').removeClass('card3-mov');
    
        }
        });

});