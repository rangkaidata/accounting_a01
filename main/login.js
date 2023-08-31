/*
 * name: budiono
 * date: aug-31, 07:19, thu 2023; new;71;
 */  
 
'use strict';

var Login={
  url:'login',
  title:"Login"
}

Login.show=(tiket)=>{
  tiket.modul=Login.url;
  tiket.menu.name=Login.title;

  tiket.letak.atas=0;
  tiket.ukuran.lebar=35;
  tiket.ukuran.tinggi=20;

  tiket.bisa.tambah=0;
  tiket.toolbar.ada=0;
  
  // tiket.letak.tengah=1;
  
  const baru=exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiUtama(tiket);
    const indek=newReg.show();
    Login.formCreate(indek);
  }else{
    show(baru);
  }  
}

Login.formCreate=(indek)=>{
  Login.form_01(indek);
}

Login.form_01=(indek)=>{
  const html='<div class="div-center">'
    +'<div id="msg_'+indek+'"'
    +' style="margin-bottom:1rem;line-height:1.5rem;"></div>'
    
    +'<form autocomplete="off" align="center">'
    +'<ul>'
    +'<li>&#128100; <label>User Name</label>&nbsp;'
      +'<input type="text" id="user_name_'+indek+'">'
      
    +'<li>&#128273; <label>Password</label>&nbsp;'
      +'<input type="password" id="user_password_'+indek+'">'
      
    +'<li><button type="button"'
      +' id="button_create_'+indek+'"'
      +'  onclick="Login.createData(\''+indek+'\')">'
      +'&#128275; Log In</button>'
      +'</li>'
    
    +'</ul>'
    +'</form>'
    +'</div>';

  content.html(indek,html);
  statusbar.ready(indek);
  document.getElementById('user_name_'+indek).focus();
}

Login.createData=(indek)=>{
  console.log('Login.createData()');
}
//EOF: 70
