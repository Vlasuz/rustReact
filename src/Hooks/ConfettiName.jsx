import React from 'react';
import 'jquery'

const ConfettiName = () => {
    // eslint-disable-next-line no-undef
    $.each($(".particletext.confetti"), function () {
        // eslint-disable-next-line no-undef
        var confetticount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= confetticount; i++) {
            // eslint-disable-next-line no-undef
            $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });

    // eslint-disable-next-line no-undef
    jQuery.rnd = function (m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }
};

export default ConfettiName;