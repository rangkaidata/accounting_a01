/*
 * auth: budiono
 * date: oct 05, 10:14, wed 2022; new;102;
 */

'use strict';

function pxRem(px) {// convert Pixel ToRem
  px=String(px).replace("px","");
  return Number(px) / parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function exist(tiket){
  var adaBerapa=0;
  var baru=-1;
  
  for(var x=1;x<bingkai.length;x++){
    //console.log('a: '+bingkai[x].menu.id+'/'+tiket.menu.id);
    if(bingkai[x].menu.id==tiket.menu.id){
      //console.log('b: '+bingkai[x].company.id+'/'+tiket.company.id);
      if(bingkai[x].company.id==tiket.company.id){
        //console.log('c: '+bingkai[x].closed+'/'+0)
        if(bingkai[x].closed==0){
          if(tiket.baru==true){
            adaBerapa++;
            bingkai[x].berapa=adaBerapa;
          }
          if(tiket.baru==false){
            baru=x;
            return x;
          }
        }
      }
    }
  }
  return -1;
}

function hitungKembar(tiket){// bingkai_double
  var total=0;
  for(var x=0;x<bingkai.length;x++){
    if(bingkai[x].menu.id==tiket.menu.id){
      if(bingkai[x].closed==0){
        total++;
      }
    }
  }
  if(total==0){return ''}
  return '-['+total+']';  
}

function remPx(rem){
  return (rem * parseFloat(getComputedStyle(document.documentElement).fontSize))+'px';
}

function naikKeAtas(){
  var abc=event.srcElement;
  var idku;
  var obj_id;
  if(abc.tagName=="INPUT"){
    return;// segala jenis input tidak sebabkan keatas
  }
  while(abc) {
    idku=abc.id;
    if(idku.substring(0,4)=='frm_'){
      obj_id=getID(abc);
      ui.zindek++;
      document.getElementById('frm_'+obj_id).style.zIndex=ui.zindek;
      return;
    }
    abc=abc.parentElement;
    if(abc==null) return;
  }  
}

function getID(obj){
  const a=obj.getAttribute('id');
  const b=a.split("_");
  return (b[b.length-1]);
}

function hapus_px(px){
  return String(px).replace("px","");
}

function tglSekarangUpdate(){
  var n99=new Date();
  var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"
    , "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
  var hari99 = ["Minggu","Senin", "Selasa", "Rabu"
    , "Kamis", "Jumat", "Sabtu"];
  return hari99[n99.getDay()]
    +', '+bulan[parseInt(n99.getMonth())]
    +' '+n99.getDate()+' '+ n99.getHours()
    +':'+('0'+n99.getMinutes()).slice(-2);
}

function remPxn(rem){
  return (rem * parseFloat(
    getComputedStyle(document.documentElement).fontSize)
  );
}

function show(indek){
  global.klik=false;
  if(bingkai[indek].closed==1){
    alert('This menu is dead');
  }
  else{
    ui.zindek++;
    ui.disabledAllTab();
    document.getElementById('app_recent_'+indek).disabled=true;
    ui.gantiJudul(indek);
    ui.bingkai_aktif(indek);
    
    if(bingkai[indek].status==3){
      document.getElementById('frm_'+indek).style.left='0px';  
    }else{
      document.getElementById('frm_'+indek).style.left=ui.rm(bingkai[indek].letak.kiri)+'px';  
    }
    document.getElementById('frm_'+indek).style.display='inline';
    document.getElementById("frm_"+indek).style.zIndex=ui.zindek;
  }
}
// eof: 102;
