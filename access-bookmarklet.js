javascript: (function(){function n(){var e=document.getElementsByTagName('*'),n,r,i,s,o,u,a;for(n in e){if(n==window.parseInt(n,10)){r=e[n];i=t(r);if(i){s=i.getPropertyValue('color');o=i.getPropertyValue('background');u=i.getPropertyValue('background-color');a=i.getPropertyValue('background-image');if(o&&o!=='transparent'||u&&u!=='transparent'||a){r.style.backgroundColor='white';r.style.backgroundImage='none'}if(s){if(r.tagName.toUpperCase()=='A'){r.style.color='#00E'}else{r.style.color='initial'}}}}}}function r(n){var i=document.getElementsByTagName('*'),s,o,u,a,f;if(e){e=false;r(1)}for(s in i){if(s==window.parseInt(s,10)){o=i[s];u=t(o);if(u){a=u.getPropertyValue('font-size');if(a&&a.indexOf('px')>=0){f=window.parseFloat(a,10)*n;o.style.fontSize=f+'px'}}}}}function i(e,t,i){var s=t||1.2,o=1/s,u=document.createElement('div'),a=document.createElement('a'),f=document.createElement('a'),l=document.createElement('a'),c,h,p=[a,f,l];e=e||document.body;i=i||{};u.style.background='white';u.style.fontSize='16px';u.style.color='black';u.style.paddingTop='5px';u.style.position='relative';u.style.zIndex='1000';for(c in p){h=p[c];h.href='#';h.style.background='white';h.style.color='#00E';h.style.border='solid 1px black';h.style.align='center';h.style.padding='5px'}a.innerHTML=i.sharpenText||'Sharpen';a.title=i.sharpenTitle||'Sharpen Colors';a.onclick=n;f.innerHTML='+';f.title=i.increaseTitle||'Increase Size';f.onclick=function(){r(s)};l.innerHTML='-';l.title=i.decreaseTitle||'Decrease Size';l.onclick=function(){r(o)};u.appendChild(a);u.appendChild(f);u.appendChild(l);document.body.insertBefore(u,document.body.childNodes[0])}var e=true,t=window.getComputedStyle||function(){function t(e){return e.charAt(0).toUpperCase()+e.slice(1)}var e=document.body.currentStyle?'currentStyle':'style';return function(n){return{getPropertyValue:function(r){r=r.split('-');if(r[1]){r=r[0]+t(r[1])}return n[e][r]}}}}();return{init:i,resetColors:n,changeFontSize:r}})().init();