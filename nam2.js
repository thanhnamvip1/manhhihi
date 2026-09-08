// https://raw.githubusercontent.com/duyvinh09/Module_IOS/refs/heads/main/js/deleteHeader.js
// https://raw.githubusercontent.com/thanhnamvip1/manhhihi/refs/heads/main/js/nam2.js
/***********************************************
> deleteHeader by duyvinh09
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});