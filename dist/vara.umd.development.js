(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  var t=function(r,e){return (t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r;}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);})(r,e)};function r(r,e){function i(){this.constructor=r;}t(r,e),r.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i);}function e(t){var r="";Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.type===f.CLOSE_PATH)r+="z";else if(i.type===f.HORIZ_LINE_TO)r+=(i.relative?"h":"H")+i.x;else if(i.type===f.VERT_LINE_TO)r+=(i.relative?"v":"V")+i.y;else if(i.type===f.MOVE_TO)r+=(i.relative?"m":"M")+i.x+" "+i.y;else if(i.type===f.LINE_TO)r+=(i.relative?"l":"L")+i.x+" "+i.y;else if(i.type===f.CURVE_TO)r+=(i.relative?"c":"C")+i.x1+" "+i.y1+" "+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===f.SMOOTH_CURVE_TO)r+=(i.relative?"s":"S")+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===f.QUAD_TO)r+=(i.relative?"q":"Q")+i.x1+" "+i.y1+" "+i.x+" "+i.y;else if(i.type===f.SMOOTH_QUAD_TO)r+=(i.relative?"t":"T")+i.x+" "+i.y;else {if(i.type!==f.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+e+".");r+=(i.relative?"a":"A")+i.rX+" "+i.rY+" "+i.xRot+" "+ +i.lArcFlag+" "+ +i.sweepFlag+" "+i.x+" "+i.y;}}return r}function i(t,r){var e=t[0],i=t[1];return [e*Math.cos(r)-i*Math.sin(r),e*Math.sin(r)+i*Math.cos(r)]}function a(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if("number"!=typeof t[e])throw new Error("assertNumbers arguments["+e+"] is not a number. "+typeof t[e]+" == typeof "+t[e]);return !0}var n=Math.PI;function o(t,r,e){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var a=t.rX,o=t.rY,s=t.x,u=t.y;a=Math.abs(t.rX),o=Math.abs(t.rY);var h=i([(r-s)/2,(e-u)/2],-t.xRot/180*n),c=h[0],y=h[1],p=Math.pow(c,2)/Math.pow(a,2)+Math.pow(y,2)/Math.pow(o,2);1<p&&(a*=Math.sqrt(p),o*=Math.sqrt(p)),t.rX=a,t.rY=o;var m=Math.pow(a,2)*Math.pow(y,2)+Math.pow(o,2)*Math.pow(c,2),O=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(a,2)*Math.pow(o,2)-m)/m)),T=a*y/o*O,v=-o*c/a*O,l=i([T,v],t.xRot/180*n);t.cX=l[0]+(r+s)/2,t.cY=l[1]+(e+u)/2,t.phi1=Math.atan2((y-v)/o,(c-T)/a),t.phi2=Math.atan2((-y-v)/o,(-c-T)/a),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*n),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*n),t.phi1*=180/n,t.phi2*=180/n;}function s(t,r,e){a(t,r,e);var i=t*t+r*r-e*e;if(0>i)return [];if(0===i)return [[t*e/(t*t+r*r),r*e/(t*t+r*r)]];var n=Math.sqrt(i);return [[(t*e+r*n)/(t*t+r*r),(r*e-t*n)/(t*t+r*r)],[(t*e-r*n)/(t*t+r*r),(r*e+t*n)/(t*t+r*r)]]}var u,h=Math.PI/180;function c(t,r,e){return (1-e)*t+e*r}function y(t,r,e,i){return t+Math.cos(i/180*n)*r+Math.sin(i/180*n)*e}function p(t,r,e,i){var a=r-t,n=e-r,o=3*a+3*(i-e)-6*n,s=6*(n-a),u=3*a;return Math.abs(o)<1e-6?[-u/s]:function(t,r,e){void 0===e&&(e=1e-6);var i=t*t/4-r;if(i<-e)return [];if(i<=e)return [-t/2];var a=Math.sqrt(i);return [-t/2-a,-t/2+a]}(s/o,u/o,1e-6)}function m(t,r,e,i,a){var n=1-a;return t*(n*n*n)+r*(3*n*n*a)+e*(3*n*a*a)+i*(a*a*a)}!function(t){function r(){return u((function(t,r,e){return t.relative&&(void 0!==t.x1&&(t.x1+=r),void 0!==t.y1&&(t.y1+=e),void 0!==t.x2&&(t.x2+=r),void 0!==t.y2&&(t.y2+=e),void 0!==t.x&&(t.x+=r),void 0!==t.y&&(t.y+=e),t.relative=!1),t}))}function e(){var t=NaN,r=NaN,e=NaN,i=NaN;return u((function(a,n,o){return a.type&f.SMOOTH_CURVE_TO&&(a.type=f.CURVE_TO,t=isNaN(t)?n:t,r=isNaN(r)?o:r,a.x1=a.relative?n-t:2*n-t,a.y1=a.relative?o-r:2*o-r),a.type&f.CURVE_TO?(t=a.relative?n+a.x2:a.x2,r=a.relative?o+a.y2:a.y2):(t=NaN,r=NaN),a.type&f.SMOOTH_QUAD_TO&&(a.type=f.QUAD_TO,e=isNaN(e)?n:e,i=isNaN(i)?o:i,a.x1=a.relative?n-e:2*n-e,a.y1=a.relative?o-i:2*o-i),a.type&f.QUAD_TO?(e=a.relative?n+a.x1:a.x1,i=a.relative?o+a.y1:a.y1):(e=NaN,i=NaN),a}))}function n(){var t=NaN,r=NaN;return u((function(e,i,a){if(e.type&f.SMOOTH_QUAD_TO&&(e.type=f.QUAD_TO,t=isNaN(t)?i:t,r=isNaN(r)?a:r,e.x1=e.relative?i-t:2*i-t,e.y1=e.relative?a-r:2*a-r),e.type&f.QUAD_TO){t=e.relative?i+e.x1:e.x1,r=e.relative?a+e.y1:e.y1;var n=e.x1,o=e.y1;e.type=f.CURVE_TO,e.x1=((e.relative?0:i)+2*n)/3,e.y1=((e.relative?0:a)+2*o)/3,e.x2=(e.x+2*n)/3,e.y2=(e.y+2*o)/3;}else t=NaN,r=NaN;return e}))}function u(t){var r=0,e=0,i=NaN,a=NaN;return function(n){if(isNaN(i)&&!(n.type&f.MOVE_TO))throw new Error("path must start with moveto");var o=t(n,r,e,i,a);return n.type&f.CLOSE_PATH&&(r=i,e=a),void 0!==n.x&&(r=n.relative?r+n.x:n.x),void 0!==n.y&&(e=n.relative?e+n.y:n.y),n.type&f.MOVE_TO&&(i=r,a=e),o}}function O(t,r,e,i,n,o){return a(t,r,e,i,n,o),u((function(a,s,u,h){var c=a.x1,y=a.x2,p=a.relative&&!isNaN(h),m=void 0!==a.x?a.x:p?0:s,O=void 0!==a.y?a.y:p?0:u;function T(t){return t*t}a.type&f.HORIZ_LINE_TO&&0!==r&&(a.type=f.LINE_TO,a.y=a.relative?0:u),a.type&f.VERT_LINE_TO&&0!==e&&(a.type=f.LINE_TO,a.x=a.relative?0:s),void 0!==a.x&&(a.x=a.x*t+O*e+(p?0:n)),void 0!==a.y&&(a.y=m*r+a.y*i+(p?0:o)),void 0!==a.x1&&(a.x1=a.x1*t+a.y1*e+(p?0:n)),void 0!==a.y1&&(a.y1=c*r+a.y1*i+(p?0:o)),void 0!==a.x2&&(a.x2=a.x2*t+a.y2*e+(p?0:n)),void 0!==a.y2&&(a.y2=y*r+a.y2*i+(p?0:o));var v=t*i-r*e;if(void 0!==a.xRot&&(1!==t||0!==r||0!==e||1!==i))if(0===v)delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag,a.type=f.LINE_TO;else {var l=a.xRot*Math.PI/180,_=Math.sin(l),N=Math.cos(l),x=1/T(a.rX),d=1/T(a.rY),A=T(N)*x+T(_)*d,E=2*_*N*(x-d),C=T(_)*x+T(N)*d,M=A*i*i-E*r*i+C*r*r,R=E*(t*i+r*e)-2*(A*e*i+C*t*r),g=A*e*e-E*t*e+C*t*t,I=(Math.atan2(R,M-g)+Math.PI)%Math.PI/2,S=Math.sin(I),L=Math.cos(I);a.rX=Math.abs(v)/Math.sqrt(M*T(L)+R*S*L+g*T(S)),a.rY=Math.abs(v)/Math.sqrt(M*T(S)-R*S*L+g*T(L)),a.xRot=180*I/Math.PI;}return void 0!==a.sweepFlag&&0>v&&(a.sweepFlag=+!a.sweepFlag),a}))}function T(){return function(t){var r={};for(var e in t)r[e]=t[e];return r}}t.ROUND=function(t){function r(r){return Math.round(r*t)/t}return void 0===t&&(t=1e13),a(t),function(t){return void 0!==t.x1&&(t.x1=r(t.x1)),void 0!==t.y1&&(t.y1=r(t.y1)),void 0!==t.x2&&(t.x2=r(t.x2)),void 0!==t.y2&&(t.y2=r(t.y2)),void 0!==t.x&&(t.x=r(t.x)),void 0!==t.y&&(t.y=r(t.y)),void 0!==t.rX&&(t.rX=r(t.rX)),void 0!==t.rY&&(t.rY=r(t.rY)),t}},t.TO_ABS=r,t.TO_REL=function(){return u((function(t,r,e){return t.relative||(void 0!==t.x1&&(t.x1-=r),void 0!==t.y1&&(t.y1-=e),void 0!==t.x2&&(t.x2-=r),void 0!==t.y2&&(t.y2-=e),void 0!==t.x&&(t.x-=r),void 0!==t.y&&(t.y-=e),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,r,e){return void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===e&&(e=!0),u((function(i,a,n,o,s){if(isNaN(o)&&!(i.type&f.MOVE_TO))throw new Error("path must start with moveto");return r&&i.type&f.HORIZ_LINE_TO&&(i.type=f.LINE_TO,i.y=i.relative?0:n),e&&i.type&f.VERT_LINE_TO&&(i.type=f.LINE_TO,i.x=i.relative?0:a),t&&i.type&f.CLOSE_PATH&&(i.type=f.LINE_TO,i.x=i.relative?o-a:o,i.y=i.relative?s-n:s),i.type&f.ARC&&(0===i.rX||0===i.rY)&&(i.type=f.LINE_TO,delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag),i}))},t.NORMALIZE_ST=e,t.QT_TO_C=n,t.INFO=u,t.SANITIZE=function(t){void 0===t&&(t=0),a(t);var r=NaN,e=NaN,i=NaN,n=NaN;return u((function(a,o,s,u,h){var c=Math.abs,y=!1,p=0,m=0;if(a.type&f.SMOOTH_CURVE_TO&&(p=isNaN(r)?0:o-r,m=isNaN(e)?0:s-e),a.type&(f.CURVE_TO|f.SMOOTH_CURVE_TO)?(r=a.relative?o+a.x2:a.x2,e=a.relative?s+a.y2:a.y2):(r=NaN,e=NaN),a.type&f.SMOOTH_QUAD_TO?(i=isNaN(i)?o:2*o-i,n=isNaN(n)?s:2*s-n):a.type&f.QUAD_TO?(i=a.relative?o+a.x1:a.x1,n=a.relative?s+a.y1:a.y2):(i=NaN,n=NaN),a.type&f.LINE_COMMANDS||a.type&f.ARC&&(0===a.rX||0===a.rY||!a.lArcFlag)||a.type&f.CURVE_TO||a.type&f.SMOOTH_CURVE_TO||a.type&f.QUAD_TO||a.type&f.SMOOTH_QUAD_TO){var O=void 0===a.x?0:a.relative?a.x:a.x-o,T=void 0===a.y?0:a.relative?a.y:a.y-s;p=isNaN(i)?void 0===a.x1?p:a.relative?a.x:a.x1-o:i-o,m=isNaN(n)?void 0===a.y1?m:a.relative?a.y:a.y1-s:n-s;var v=void 0===a.x2?0:a.relative?a.x:a.x2-o,l=void 0===a.y2?0:a.relative?a.y:a.y2-s;c(O)<=t&&c(T)<=t&&c(p)<=t&&c(m)<=t&&c(v)<=t&&c(l)<=t&&(y=!0);}return a.type&f.CLOSE_PATH&&c(o-u)<=t&&c(s-h)<=t&&(y=!0),y?[]:a}))},t.MATRIX=O,t.ROTATE=function(t,r,e){void 0===r&&(r=0),void 0===e&&(e=0),a(t,r,e);var i=Math.sin(t),n=Math.cos(t);return O(n,i,-i,n,r-r*n+e*i,e-r*i-e*n)},t.TRANSLATE=function(t,r){return void 0===r&&(r=0),a(t,r),O(1,0,0,1,t,r)},t.SCALE=function(t,r){return void 0===r&&(r=t),a(t,r),O(t,0,0,r,0,0)},t.SKEW_X=function(t){return a(t),O(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return a(t),O(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(1,0,0,-1,0,t)},t.A_TO_C=function(){return u((function(t,r,e){return f.ARC===t.type?function(t,r,e){var a,n,s,u;t.cX||o(t,r,e);for(var y=Math.min(t.phi1,t.phi2),p=Math.max(t.phi1,t.phi2)-y,m=Math.ceil(p/90),O=new Array(m),T=r,v=e,l=0;l<m;l++){var _=c(t.phi1,t.phi2,l/m),N=c(t.phi1,t.phi2,(l+1)/m),x=N-_,d=4/3*Math.tan(x*h/4),A=[Math.cos(_*h)-d*Math.sin(_*h),Math.sin(_*h)+d*Math.cos(_*h)],E=A[0],C=A[1],M=[Math.cos(N*h),Math.sin(N*h)],R=M[0],g=M[1],I=[R+d*Math.sin(N*h),g-d*Math.cos(N*h)],S=I[0],L=I[1];O[l]={relative:t.relative,type:f.CURVE_TO};var H=function(r,e){var a=i([r*t.rX,e*t.rY],t.xRot),n=a[0],o=a[1];return [t.cX+n,t.cY+o]};a=H(E,C),O[l].x1=a[0],O[l].y1=a[1],n=H(S,L),O[l].x2=n[0],O[l].y2=n[1],s=H(R,g),O[l].x=s[0],O[l].y=s[1],t.relative&&(O[l].x1-=T,O[l].y1-=v,O[l].x2-=T,O[l].y2-=v,O[l].x-=T,O[l].y-=v),T=(u=[O[l].x,O[l].y])[0],v=u[1];}return O}(t,t.relative?0:r,t.relative?0:e):t}))},t.ANNOTATE_ARCS=function(){return u((function(t,r,e){return t.relative&&(r=0,e=0),f.ARC===t.type&&o(t,r,e),t}))},t.CLONE=T,t.CALCULATE_BOUNDS=function(){var t=function(t){var r={};for(var e in t)r[e]=t[e];return r},i=r(),a=n(),h=e(),c=u((function(r,e,n){var u=h(a(i(t(r))));function O(t){t>c.maxX&&(c.maxX=t),t<c.minX&&(c.minX=t);}function T(t){t>c.maxY&&(c.maxY=t),t<c.minY&&(c.minY=t);}if(u.type&f.DRAWING_COMMANDS&&(O(e),T(n)),u.type&f.HORIZ_LINE_TO&&O(u.x),u.type&f.VERT_LINE_TO&&T(u.y),u.type&f.LINE_TO&&(O(u.x),T(u.y)),u.type&f.CURVE_TO){O(u.x),T(u.y);for(var v=0,l=p(e,u.x1,u.x2,u.x);v<l.length;v++){0<(w=l[v])&&1>w&&O(m(e,u.x1,u.x2,u.x,w));}for(var _=0,N=p(n,u.y1,u.y2,u.y);_<N.length;_++){0<(w=N[_])&&1>w&&T(m(n,u.y1,u.y2,u.y,w));}}if(u.type&f.ARC){O(u.x),T(u.y),o(u,e,n);for(var x=u.xRot/180*Math.PI,d=Math.cos(x)*u.rX,A=Math.sin(x)*u.rX,E=-Math.sin(x)*u.rY,C=Math.cos(x)*u.rY,M=u.phi1<u.phi2?[u.phi1,u.phi2]:-180>u.phi2?[u.phi2+360,u.phi1+360]:[u.phi2,u.phi1],R=M[0],g=M[1],I=function(t){var r=t[0],e=t[1],i=180*Math.atan2(e,r)/Math.PI;return i<R?i+360:i},S=0,L=s(E,-d,0).map(I);S<L.length;S++){(w=L[S])>R&&w<g&&O(y(u.cX,d,E,w));}for(var H=0,U=s(C,-A,0).map(I);H<U.length;H++){var w;(w=U[H])>R&&w<g&&T(y(u.cY,A,C,w));}}return r}));return c.minX=1/0,c.maxX=-1/0,c.minY=1/0,c.maxY=-1/0,c};}(u||(u={}));var O,T=function(){function t(){}return t.prototype.round=function(t){return this.transform(u.ROUND(t))},t.prototype.toAbs=function(){return this.transform(u.TO_ABS())},t.prototype.toRel=function(){return this.transform(u.TO_REL())},t.prototype.normalizeHVZ=function(t,r,e){return this.transform(u.NORMALIZE_HVZ(t,r,e))},t.prototype.normalizeST=function(){return this.transform(u.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(u.QT_TO_C())},t.prototype.aToC=function(){return this.transform(u.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(u.SANITIZE(t))},t.prototype.translate=function(t,r){return this.transform(u.TRANSLATE(t,r))},t.prototype.scale=function(t,r){return this.transform(u.SCALE(t,r))},t.prototype.rotate=function(t,r,e){return this.transform(u.ROTATE(t,r,e))},t.prototype.matrix=function(t,r,e,i,a,n){return this.transform(u.MATRIX(t,r,e,i,a,n))},t.prototype.skewX=function(t){return this.transform(u.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(u.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(u.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(u.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(u.ANNOTATE_ARCS())},t}(),v=function(t){return " "===t||"\t"===t||"\r"===t||"\n"===t},l=function(t){return "0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},_=function(t){function e(){var r=t.call(this)||this;return r.curNumber="",r.curCommandType=-1,r.curCommandRelative=!1,r.canParseCommandOrComma=!0,r.curNumberHasExp=!1,r.curNumberHasExpDigits=!1,r.curNumberHasDecimal=!1,r.curArgs=[],r}return r(e,t),e.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},e.prototype.parse=function(t,r){var e=this;void 0===r&&(r=[]);for(var i=function(t){r.push(t),e.curArgs.length=0,e.canParseCommandOrComma=!0;},a=0;a<t.length;a++){var n=t[a],o=!(this.curCommandType!==f.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=l(n)&&("0"===this.curNumber&&"0"===n||o);if(!l(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+a);if(this.curCommandType===f.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+a+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+a+'"');this.curArgs.push(u),this.curArgs.length===N[this.curCommandType]&&(f.HORIZ_LINE_TO===this.curCommandType?i({type:f.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):f.VERT_LINE_TO===this.curCommandType?i({type:f.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===f.MOVE_TO||this.curCommandType===f.LINE_TO||this.curCommandType===f.SMOOTH_QUAD_TO?(i({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),f.MOVE_TO===this.curCommandType&&(this.curCommandType=f.LINE_TO)):this.curCommandType===f.CURVE_TO?i({type:f.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===f.SMOOTH_CURVE_TO?i({type:f.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===f.QUAD_TO?i({type:f.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===f.ARC&&i({type:f.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0;}if(!v(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else {if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+a+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=f.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=f.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=f.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=f.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=f.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=f.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=f.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=f.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else {if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+".");this.curCommandType=f.ARC,this.curCommandRelative="a"===n;}else r.push({type:f.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1;}else this.curNumber=n,this.curNumberHasDecimal="."===n;}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp;}return r},e.prototype.transform=function(t){return Object.create(this,{parse:{value:function(r,e){void 0===e&&(e=[]);for(var i=0,a=Object.getPrototypeOf(this).parse.call(this,r);i<a.length;i++){var n=a[i],o=t(n);Array.isArray(o)?e.push.apply(e,o):e.push(o);}return e}}})},e}(T),f=function(t){function i(r){var e=t.call(this)||this;return e.commands="string"==typeof r?i.parse(r):r,e}return r(i,t),i.prototype.encode=function(){return i.encode(this.commands)},i.prototype.getBounds=function(){var t=u.CALCULATE_BOUNDS();return this.transform(t),t},i.prototype.transform=function(t){for(var r=[],e=0,i=this.commands;e<i.length;e++){var a=t(i[e]);Array.isArray(a)?r.push.apply(r,a):r.push(a);}return this.commands=r,this},i.encode=function(t){return e(t)},i.parse=function(t){var r=new _,e=[];return r.parse(t,e),r.finish(e),e},i.CLOSE_PATH=1,i.MOVE_TO=2,i.HORIZ_LINE_TO=4,i.VERT_LINE_TO=8,i.LINE_TO=16,i.CURVE_TO=32,i.SMOOTH_CURVE_TO=64,i.QUAD_TO=128,i.SMOOTH_QUAD_TO=256,i.ARC=512,i.LINE_COMMANDS=i.LINE_TO|i.HORIZ_LINE_TO|i.VERT_LINE_TO,i.DRAWING_COMMANDS=i.HORIZ_LINE_TO|i.VERT_LINE_TO|i.LINE_TO|i.CURVE_TO|i.SMOOTH_CURVE_TO|i.QUAD_TO|i.SMOOTH_QUAD_TO|i.ARC,i}(T),N=((O={})[f.MOVE_TO]=2,O[f.LINE_TO]=2,O[f.HORIZ_LINE_TO]=1,O[f.VERT_LINE_TO]=1,O[f.CLOSE_PATH]=0,O[f.QUAD_TO]=4,O[f.SMOOTH_QUAD_TO]=2,O[f.CURVE_TO]=6,O[f.SMOOTH_CURVE_TO]=4,O[f.ARC]=7,O);

  var Vara = /*#__PURE__*/function () {
    function Vara(elem, fontSource, text, options) {
      this.elementName = elem;
      this.element = document.querySelector(elem);
      this.fontSource = fontSource;
      this.options = options;
      this.textItems = text;
      this.renderData = text;
      this.rendered = false;
      this.fontCharacters = {};
      this.canvasWidth = 0;
      this.defaultOptions = {
        fontSize: 21,
        strokeWidth: 0.5,
        color: '#000',
        duration: 1000,
        textAlign: 'left',
        autoAnimation: true,
        queued: true,
        delay: 0,
        breakWord: false,
        letterSpacing: {
          global: 0
        },
        width: this.element.getBoundingClientRect().width
      };
      this.defaultCharacters = {
        '63': {
          paths: [{
            w: 8.643798828125,
            h: 14.231731414794922,
            my: 22.666500004827977,
            mx: 0,
            pw: 28.2464542388916,
            d: 'm 0,0 c -2,-6.01,5,-8.64,8,-3.98,2,4.09,-7,8.57,-7,11.85'
          }, {
            w: 1.103759765625,
            h: 1.549820899963379,
            my: 8.881500004827977,
            mx: 1,
            pw: 4.466640472412109,
            d: 'm 0,0 a 0.7592,0.7357,0,0,1,0,0.735,0.7592,0.7357,0,0,1,-1,-0.735,0.7592,0.7357,0,0,1,1,-0.738,0.7592,0.7357,0,0,1,0,0.738 z'
          }],
          w: 8.643798828125
        }
      };
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.element.appendChild(this.canvas);
      this.init();
    }

    var _proto = Vara.prototype;

    _proto.init = function init() {
      var _this = this;

      this.normalizeOptions();
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', this.fontSource, true);

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            var contents = JSON.parse(xmlhttp.responseText);
            _this.fontCharacters = contents.c;
            _this.fontProperties = contents.p;

            _this.render();
          }
        }
      };

      xmlhttp.send(null);
    };

    _proto.render = function render() {
      this.calculatePositions(this.renderData[1]);
      this.draw(this.renderData[1]);
    };

    _proto.draw = function draw(_textItem) {
      var _this2 = this;

      // path - "d": "m 0,0 c 1.677946,-5.44834,5.875964,-14.09066,3.788545,-14.26551,-1.909719,-0.15996,-2.796112,9.62055,-3.788545,14.26551 z"
      var textItem = _textItem;
      this.ctx.strokeStyle = textItem.color;
      this.ctx.lineWidth = textItem.strokeWidth;
      this.ctx.fillStyle = 'transparent';
      textItem.render.text.split('').forEach(function (letter) {
        var charCode = letter.charCodeAt(0);
        if (_this2.fontCharacters[charCode]) _this2.fontCharacters[charCode].paths.forEach(function (path) {
          var svg = new f(path.d);
          console.log(svg);
        });
      });
    };

    _proto.normalizeOptions = function normalizeOptions() {
      var _this3 = this;

      this.options = this.options || {};
      this.objectKeys(this.defaultOptions).forEach(function (optionKey) {
        if (_this3.options[optionKey] === undefined) {
          // @ts-ignore
          _this3.options[optionKey] = _this3.defaultOptions[optionKey];
        }
      });
      this.renderData.forEach(function (textItem, i) {
        if (typeof textItem === 'string') {
          _this3.renderData[i] = _extends({
            text: textItem
          }, _this3.defaultOptions);
        } else if (typeof textItem === 'object') {
          _this3.objectKeys(_this3.options).forEach(function (option) {
            if (textItem[option] === undefined) // @ts-ignore
              textItem[option] = _this3.options[option];
          });
        }
      });
      Object.keys(this.defaultCharacters).forEach(function (character) {
        if (_this3.fontCharacters[character] === undefined) {
          _this3.fontCharacters[character] = _this3.defaultCharacters[character];
        }
      });
    };

    _proto.calculatePositions = function calculatePositions(_textItem) {
      var _this4 = this;

      var textItem = _textItem;

      if (!textItem.breakWord) {
        var textBlock = typeof textItem.text === 'string' ? [textItem.text] : textItem.text;
        var breakedTextBlock = textBlock.map(function (line) {
          return line.split(' ');
        });
        var lineWidth = 0;
        var lines = [''];
        breakedTextBlock.forEach(function (line) {
          line.forEach(function (word) {
            var wordWidth = 0;
            word.split('').forEach(function (letter) {
              var charCode = letter.charCodeAt(0);
              var currentLetter = _this4.fontCharacters[charCode] || _this4.fontCharacters['63'];
              wordWidth += currentLetter.w * (textItem.fontSize / 16);
            });

            if (lineWidth + wordWidth > textItem.width) {
              lineWidth = 0;
              lines.push(word);
            } else {
              lines[lines.length - 1] += word;
              lineWidth += wordWidth;
            }

            lines[lines.length - 1] += ' ';
          });
        });
        lines.forEach(function (line) {
          textItem.render = {
            text: line,
            x: textItem.x,
            y: textItem.y
          };
        });
      }
    };

    _proto.createSVGNode = function createSVGNode(n, v) {
      var e = document.createElementNS('http://www.w3.org/2000/svg', n);

      for (var p in v) {
        e.setAttributeNS(null, p.replace(/[A-Z]/g, function (m) {
          return '-' + m.toLowerCase();
        }), v[p]);
      }

      return e;
    };

    _proto.objectKeys = function objectKeys(x) {
      var keys = Object.keys(x);
      return keys;
    };

    return Vara;
  }();

  if (window) {
    window.Vara = Vara;
  }

})));
//# sourceMappingURL=vara.umd.development.js.map
