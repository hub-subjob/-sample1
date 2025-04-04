//-------------------------------STORE MAP-------------------------------

{ /* ローカルスコープ */

    
   async function initMap() {
       // 必要なマップ情報を取得.（分割代入）
       const { Map, InfoWindow } = await google.maps.importLibrary("maps");
       const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
         "marker",
       );
       //HTMLの"map"を取得し、定数mapに入れ、必要情報を入力する
       const map = new Map(document.getElementById("map"), {
         zoom: 12,
         center: { lat: 35.702534450118954, lng: 140.0382679733375 },
         mapId: "",
       });
       
       //マーカー情報を入力
       const tourStops = [
         {
           position: { lat: 35.702534450118954, lng: 140.0382679733375 },
           title: "田喜野井公園ボール広場",
         },
         {
           position: { lat: 35.716060769930316, lng: 139.57439730020587 },
           title: "成蹊大学野球場",
         },
         {
           position: { lat: 35.718108162679485,  lng: 139.5676344541801 },
           title: "武蔵野総合体育館",
         },
       ];

       // 情報の入った定数を作成する
       const infoWindow = new InfoWindow();

       //classを取得する
       const storeList1 =document.querySelector('.storeList1');
       const storeList2 =document.querySelector('.storeList2');
       const storeList3 =document.querySelector('.storeList3');
       console.log(storeList1);
       console.log(storeList2);
       console.log(storeList3);

       // マーカーを作成する（マーカーサイズ、番号、タイトル）
       tourStops.forEach(({ position, title }, i) => {
         const pin = new PinElement({
           glyph: `${i + 1}`,
           scale: 1.5,
         });
         const marker = new AdvancedMarkerElement({
           position,
           map,
           title: `${i + 1}. ${title}`,
           content: pin.element,
           gmpClickable: true,
         });


           //関数class処理
          const MarkarInfo = function(){
            
            //serectの追加と削除
            switch(title){
                case"田喜野井公園ボール広場":
                storeList1.classList.add('serect');
                storeList2.classList.remove('serect');
                storeList3.classList.remove('serect');
                break;

                case"成蹊大学野球場":
                storeList1.classList.remove('serect');
                storeList2.classList.add('serect');
                storeList3.classList.remove('serect');
                break;
                
                case"武蔵野総合体育館":
                storeList1.classList.remove('serect');
                storeList2.classList.remove('serect');
                storeList3.classList.add('serect');
                break;

                default:
                    alert("STORE LISTが変更されています");
                    break;
            }

           infoWindow.close();
           infoWindow.setContent(marker.title);
           infoWindow.open(marker.map, marker);
         };
         
         // マーカークリックイベントの作成
         marker.addListener("click", ({ domEvent }) => {
           const { target } = domEvent;
            MarkarInfo();
         });
        

        

         //storeList1
         const StoreList1 = function(){
         storeList1.classList.add('serect');
         storeList2.classList.remove('serect');
         storeList3.classList.remove('serect')

       //マップ移動させる
        function list1() {
        map.panTo(new google.maps.LatLng(35.702534450118954,140.0382679733375));
        }
        list1();
        }
         
         //storeList2
         const StoreList2 = function(){
            storeList1.classList.remove('serect');
            storeList2.classList.add('serect');
            storeList3.classList.remove('serect');

            //マップ移動させる
        function list2() {
            map.panTo(new google.maps.LatLng(35.716060769930316,139.57439730020587));
            }
            list2();
            }
        
        //storeList3
        const StoreList3 = function(){
            storeList1.classList.remove('serect');
            storeList2.classList.remove('serect');
            storeList3.classList.add('serect');

             //マップ移動させる
        function list3() {
            map.panTo(new google.maps.LatLng(35.718108162679485,139.5676344541801));
            }
            list3();
            }

         // STORE LISTクリックイベントの作成
         storeList1.addEventListener('click',StoreList1);
         storeList2.addEventListener('click',StoreList2);
         storeList3.addEventListener('click',StoreList3);
        });




       
     }

     
     
     initMap();

}   
