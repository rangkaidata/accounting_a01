
/*
 * name: budiono
 * date: sep 13, 08:50, mon 2022; new; 117;
 */ 

'use strict';

Menu.lokal=function(){
  Menu.invite=[];
  
  const tree=[
//    {parent:'root',id:'home',name:'Home',type:1},
    {parent:'root',id:'register',name:'Register',type:2},
    {parent:'root',id:'login',name:'Login',type:2},
    {parent:'root',id:'forgot',name:'Forgot Password','type':2},
  ];
  
  Menu.ready(tree);
}

Menu.ready=function(tree){
  var arr={
    id:bingkai[0].invite.id,
    data:tree,
  }

  Menu.invite.push(arr);
  
  for (var x in tree){
    if (tree[x].parent=='root'){
      arr={
        'id':tree[x].id,
        'name':tree[x].name,
        'type':tree[x].type,
      };
      datanya[0].submenu.push(arr);
    }
  }
  
  ui.setMenuBar();
  ui.recentlyApp();
  ui.changeMenuBarTitle(bingkai[0].login.full_name)
  
  var group_id;
  if(bingkai[0].group.id==bingkai[0].login.name){
    group_id='root';
  }else{
    group_id=bingkai[0].group.id;
  }
  
  bingkai[0].folder=bingkai[0].login.name
    +'@'+group_id+': '

  document.getElementById('window').style.visibility='visible';
}

Menu.klik=function(nomer){
  const tiket=antrian[nomer];
  console.log('menu.klik: '+tiket.menu.id);
  Menu.type(tiket);
  switch(tiket.menu.type){
    case 0:
    case 1:
      Menu.showFolder(tiket);// bentuk folder
      break;
    case 2:
    case 3:
      Menu.showForm(tiket);// bentuk form
      break;
    default:
      console.log('Menu.modulKlik: '+tiket.menu.type);
  }
}

Menu.type=function(tiket){// ambil tipe
  Menu.access(tiket);
  for(var x=0;x<tiket.menu.data.length;x++){
    if (tiket.menu.data[x].id==tiket.menu.id){
      //tiket.menu.name=tiket.menu.data[x].name
      tiket.menu.type=tiket.menu.data[x].type
      // alert('ada');
    }
  }
}

Menu.access=function(tiket){// ambil access menu
  console.log(Menu.invite.length);
  for(var i=0;i<Menu.invite.length;i++){
    if(Menu.invite[i].id==tiket.invite.id){
      tiket.menu.data=Menu.invite[i].data;
    }
  }
  if(tiket.menu.data==undefined){
    tiket.menu.data=[];
  }
}

Menu.showForm=function(tiket){  
  Menu.active.id=tiket.menu.id;
  Menu.active.name=tiket.menu.name;
  
  switch(tiket.menu.id){
    // non-login
    case 'register':Register.show(tiket);break;
    case 'login':Login.show(tiket);break;
    case 'logout':Logout.show(tiket);break;
    case 'forgot':Forgot.show(tiket);break;

    default:alert('Form "'+tiket.menu.id+'" belum terdaftar.');
  }
}

Menu.active={
  id:null,
  name:null,
}

// eof:117;
