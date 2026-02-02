<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/js/app.jsx')
    @inertiaHead



    <meta charset="utf-8">

    <!--====== Title ======-->
    <title>E-Commerce</title>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="/assets/frontend/theme-one/images/favicon.png" type="image/png">

    <!--====== Magnific Popup CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/css/magnific-popup.css">

    <!--====== Slick CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/css/slick.css">

    <!--====== Font Awesome CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/webfont/font-css/LineIcons.css">

    <!--====== Bootstrap CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/css/bootstrap.min.css">

    <!--====== Default CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/css/default.css">

    <!--====== Style CSS ======-->
    <link rel="stylesheet" href="/assets/frontend/theme-one/css/style.css">
</head>

<body>
    @inertia



    <!--====== Jquery js ======-->
    {{-- <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> --}}
    <script src="/assets/frontend/theme-one/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="/assets/frontend/theme-one/js/vendor/modernizr-3.7.1.min.js"></script>

    <!--====== Bootstrap js ======-->
    <script src="/assets/frontend/theme-one/js/popper.min.js"></script>
    <script src="/assets/frontend/theme-one/js/bootstrap.min.js"></script>

    <!--====== Slick js ======-->
    <script src="/assets/frontend/theme-one/js/slick.min.js"></script>

    <!--====== Magnific Popup js ======-->
    <script src="/assets/frontend/theme-one/js/jquery.magnific-popup.min.js"></script>

    <!--====== Ajax Contact js ======-->
    <script src="/assets/frontend/theme-one/js/ajax-contact.js"></script>

    <!--====== Scrolling Nav js ======-->
    <script src="/assets/frontend/theme-one/js/jquery.easing.min.js"></script>
    <script src="/assets/frontend/theme-one/js/scrolling-nav.js"></script>

    <!--====== Main js ======-->
    <script src="/assets/frontend/theme-one/js/main.js"></script>

    {{-- <script>
        (function() {
            function c() {
                var b = a.contentDocument || a.contentWindow.document;
                if (b) {
                    var d = b.createElement('script');
                    d.innerHTML =
                        "window.__CF$cv$params={r:'9c7567b5fb7dfc55',t:'MTc2OTk5MDM5Mw=='};var a=document.createElement('script');a.src='../../cdn-cgi/challenge-platform/h/b/scripts/jsd/d251aa49a8a3/maind41d.js';document.getElementsByTagName('head')[0].appendChild(a);";
                    b.getElementsByTagName('head')[0].appendChild(d)
                }
            }
            if (document.body) {
                var a = document.createElement('iframe');
                a.height = 1;
                a.width = 1;
                a.style.position = 'absolute';
                a.style.top = 0;
                a.style.left = 0;
                a.style.border = 'none';
                a.style.visibility = 'hidden';
                document.body.appendChild(a);
                if ('loading' !== document.readyState) c();
                else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
                else {
                    var e = document.onreadystatechange || function() {};
                    document.onreadystatechange = function(b) {
                        e(b);
                        'loading' !== document.readyState && (document.onreadystatechange = e, c())
                    }
                }
            }
        })();
    </script> --}}
    {{-- <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        data-cf-beacon='{"version":"2024.11.0","token":"9a6015d415bb4773a0bff22543062d3b","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}'
        crossorigin="anonymous"></script> --}}
</body>

</body>

</html>
