/*
 * auth: budiono
 * date: aug-31, 08:34, thu-2023; new;15;
 */ 
 
'use strict';

statusbar.html=function(indek,tulisan){
  document.getElementById('frm_statusbar_'+indek).innerHTML=tulisan;
}

statusbar.ready=function(indek){
  this.html(indek,"Page ready");
}
// eof: 15;
