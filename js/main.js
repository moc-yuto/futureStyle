$(function () {
    $('#nav a').click(function(){
        var $this = $(this);
        $('div.jump, div.circle').animate({
            marginTop: '-100px',
            marginLeft: '-100px',
            width: '500px',
            height: '500px',
            opacity: 0
        },1000, function () {
            location.href = $this.attr('href');
        });
        return false;
    });
});
