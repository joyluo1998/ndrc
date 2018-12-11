$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggler = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggler.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggler );
}

$(function () {
    //���������Ϸ��ť�л�Ч��
    $('#more-pcgame').toggle(function () {
        $(this).text('<<');
        $('.pc-game').css('z-index',1).animate({
            width: 434
        }).find('.viewport').animate({
            width: 270
        });
        $('.mobile-game').animate({
            width: '693px'
        });
    },function () {
        $(this).text('���������Ϸ');
        $('.pc-game').animate({
            width: 299
        }).find('.viewport').animate({
            width: 135
        });
        $('.mobile-game').animate({
            width: '828px'
        }).find('.viewport').animate({
            width: 135
        });
    })
    //�����ֻ���Ϸ��ť�л�Ч��
    $('#more-mobile-game').toggle(function () {
        $(this).text('>>');
        $('.mobile-game').animate({
            width: '993px'
        })
        $('.pc-game').animate({
            width: 134
        }).find('#more-pcgame').hide();

    },function () {
        $(this).text('�����ֻ���Ϸ');
        $('.mobile-game').animate({
            width: '828px'
        })
        $('.pc-game').animate({
            width: 299
        }).find('#more-pcgame').show();
    })
})