$(document).ready(function () {

    // Değişken tanımlama
    let mybutton = $("#btn-back-to-top");

    // Sayfa scroll edildiğinde çalışacak fonksiyon
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            mybutton.fadeIn(); // 100px aşağı inince butonu göster (jQuery efekti)
        } else {
            mybutton.fadeOut(); // Yukarı çıkınca gizle
        }
    });

    // Butona tıklandığında
    mybutton.click(function () {
        // Sayfanın en tepesine animasyonlu git
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Kartların üzerine gelince hafif opaklık değişimi (Ekstra jQuery örneği)
    $(".card").hover(
        function () {
            $(this).addClass('border border-warning'); // Mouse gelince
        }, function () {
            $(this).removeClass('border border-warning'); // Mouse gidince
        }
    );
});
