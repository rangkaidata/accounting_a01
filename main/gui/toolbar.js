/*
 * auth: budiono
 * date: aug-31, 09:12, thu-2023; new;13
 */

'use strict';

toolbar.hide=function(indek){
  document.getElementById("frm_toolbar_hide_"+indek).style.display="inline";
  document.getElementById("frm_toolbar_hide_"+indek).onclick=function(){
    ui.hideMe(indek);
  }
}
// eof 13;
