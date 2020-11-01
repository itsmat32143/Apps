var userAgent = navigator.platform,
    fileHost = "http://time4popcorn.eu/";

function isMobileCheck() {
  return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
console.info(isMobileCheck());
var mac = /Mac/,
    win = /Win/,
    lin = /Lin/,
    lin64 = /x86_64/;
if(window.ui) {
    switch (window.ui.os) {
        case 'Android':
            document.getElementsByTagName('body')[0].className += ' android';
            break;
        case 'iOS':
            document.getElementsByTagName('body')[0].className += ' ios';
            break;
        case 'Mac OS X':
            document.getElementsByTagName('body')[0].className += ' mac';
            break;
        case 'Windows':
            document.getElementsByTagName('body')[0].className += ' win';
            break;
        case 'Linux':
            if (lin64.test(userAgent)) {
                document.getElementsByTagName('body')[0].className += ' lin-64';
            } else {
                document.getElementsByTagName('body')[0].className += ' lin-32';
            }
            break;
        default:
            document.getElementsByTagName('body')[0].className += ' nope';
            break;
    }
}

// Disable WOW on small screens.
try {
  if(!isMobileCheck()) {
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
  };
} catch(err) {  }


var enable_push_notifications = false;

function firebase_init(topics, countryCode){
    window.firebase_init_setting = {
        firebaseConfig: {
            apiKey: "AIzaSyCQq3iVxAoGfcTn6YP2Pvmk1-WLaqaTb8k",
            authDomain: "popcorn-time-e9322.firebaseapp.com",
            databaseURL: "https://popcorn-time-e9322.firebaseio.com",
            storageBucket: "popcorn-time-e9322.appspot.com",
            messagingSenderId: "945992563336"
        },
        notificationConfig: {
            siteName: "qq-front",
            topics: topics,
            regUrl: "https://reg.popcorn-time.ch/subscribe",
            countryCode:countryCode,
            notificationCallback: function (p) {
                console.info('notificationCallback called:', p)
            },
            permissionGrantedCallback: function () {
                console.info('permissionGrantedCallback called');
                if (window._gaq) {
                    topics.forEach(function (topic) {
                        _gaq.push(['_trackEvent', 'notification', 'granted', topic]);
                    });
                }
            }
        }
    };
    (function () {
        var ns = document.createElement('script');
        ns.type = 'text/javascript';
        ns.async = true;
        ns.src = '/js/firebase.notifications.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ns, s);
    })();
}
if(enable_push_notifications) {
    firebase_init(["/topics/all_users"], null);
}

var externalLinks = document.querySelectorAll("a[data-href]");
for(var i = 0; i < externalLinks.length ; i++) {
   externalLinks[i].onclick = function(e) {
      e.preventDefault();
      window.open(this.dataset.href,'_blank');

      return false;
   }
}