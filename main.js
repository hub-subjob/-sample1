'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

  // DOM取得 STORIE.HTML

  const tabMenus = document.querySelectorAll('div.tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

function tabSwitch(e) {
  
    // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab__menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab__menu-item');
  console.log(tabItems);

  //クリックされた要素のidによって削除するクラスの条件処理
  if(e.currentTarget.dataset.tab==="03"){

    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('.tab__panel-box');
    console.log(tabPanelItems);

    // クリックされた要素以外の親要素の兄弟要素の子要素を取得
    const tabPanelItems1 = tabList.
    nextElementSibling.querySelectorAll('.tab__panel-box1');
    console.log(tabPanelItems1);

    // お知らせを表示させる
    tabPanelItems1.forEach((tabPanelItem1) => {
        tabPanelItem1.classList.remove('delete');
      })
    

     // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.add('delete');
  })
  
  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');

 


  }else if(e.currentTarget.dataset.tab==="02"){
    
     // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('.tab__panel-box1');
    console.log(tabPanelItems);

     // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.add('delete');
  })

   // クリックされた要素以外の親要素の兄弟要素の子要素を取得
   const tabPanelItems1 = tabList.
   nextElementSibling.querySelectorAll('.tab__panel-box');
   console.log(tabPanelItems1);

   // お知らせを表示させる
   tabPanelItems1.forEach((tabPanelItem1) => {
       tabPanelItem1.classList.remove('delete');
     })
   

  
  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');

  }else{
    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('.tab__panel-box00');
    console.log(tabPanelItems);

     // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('delete');
  })
  
  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  }
  }

}








