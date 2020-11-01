;(function (window) {
   var browser,
      version,
      mobile,
      os,
      osversion,
      bit,
      ua = window.navigator.userAgent,
      platform = window.navigator.platform;
   //Internet Explorer
   if ( /MSIE/.test(ua) ) {

      browser = 'Internet Explorer';

      if ( /IEMobile/.test(ua) ) {
         mobile = 1;
      }

      version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];

      //Google Chrome
   } else if ( /Trident/.test(ua) ) {

      browser = 'Internet Explorer';


      version = /rv:\d+[.]\d+/.exec(navigator.userAgent)[0].split(":")[1];

   } else if ( /Chrome/.test(ua) ) {

      //Chromebooks
      if ( /CrOS/.test(ua) ) {
         platform = 'CrOS';
      }
      browser = 'Chrome';
      version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];

      // Opera Browser
   } else if ( /Opera/.test(ua) ) {

      browser = 'Opera';

      if ( /mini/.test(ua) || /Mobile/.test(ua) ) {
         mobile = 1;
      }

      //Android Browser
   } else if ( /Android/.test(ua) ) {

      browser = 'Android Webkit Browser';
      mobile = 1;
      os = /Android\s[\.\d]+/.exec(ua)[0];

      //Mozilla firefox
   } else if ( /Firefox/.test(ua) ) {

      browser = 'Firefox';

      if ( /Fennec/.test(ua) ) {
         mobile = 1;
      }
      version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];

      //Safari
   } else if ( /Safari/.test(ua) ) {

      browser = 'Safari';

      if ( (/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua)) ) {
         os = 'iOS';
         mobile = 1;
      }

   }
   if ( !version ) {

      version = /Version\/[\.\d]+/.exec(ua);

      if (version) {
         version = version[0].split('/')[1];
      } else {
         version = /Opera\/[\.\d]+/.exec(ua)[0].split('/')[1];
      }

   }

   if ( platform === 'MacIntel' || platform === 'MacPPC' ) {
      os = 'Mac OS X';
      osversion = /10[\.\_\d]+/.exec(ua)[0];
      if ( /[\_]/.test(osversion) ) {
         osversion = osversion.split('_').join('.');
      }
   } else if ( platform === 'CrOS' ) {
      os = 'ChromeOS';
   } else if ( platform === 'Win32' || platform == 'Win64' ) {
      os = 'Windows';
      bit = platform.replace(/[^0-9]+/,'');
   } else if ( !os && /Android/.test(ua) ) {
      os = 'Android';
   } else if ( !os && /Linux/.test(platform) ) {
      os = 'Linux';
   } else if ( !os && /Windows/.test(ua) ) {
      os = 'Windows';
   }
   window.ui = {
      browser : browser,
      version : version,
      mobile : mobile,
      os : os,
      osversion : osversion,
      bit: bit
   };
}(this));
/*
 Copyright (C) 2011 by Ben Brooks Scholz
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */