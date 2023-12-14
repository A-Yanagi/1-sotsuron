//表に入っている用語の説明
function show(id){
  if(document.getElementById){
  var element = document.getElementById(id);
  element.style.visibility = (element.style.visibility == 'visible')? "hidden": "visible";
  }
}

//セルの設定
document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.table-x');
  
    cells.forEach(cell => {
      cell.addEventListener('input', function () {
        adjustCellWidth(this);
      });
    });
  
    function adjustCellWidth(cell) {
      const minWidth = parseInt(getComputedStyle(cell).minWidth);
      const scrollWidth = cell.scrollWidth;
  
      if (scrollWidth > minWidth) {
        cell.style.width = `${scrollWidth-80}px`;
      } else {
        cell.style.width = 'auto';
      }
    }
  });


//保存用の許可
// メッセージ受信時のイベントリスナー
window.addEventListener("message", (event) => {
    // 受信したメッセージデータ
    const messageData = event.data;
  
    // オリジンの検証//ローカルファイルのためNGを食らっている
    if (event.origin === "file:///C:/Users/Aoi%20YANAGI/1-sotsuron/basic2.html") {
      // CORSを許可するアクションの処理
      if (messageData.action === "ALLOW_CORS") {
        // CORSを許可する処理を実行する
        document.domain = "file:///C:/Users/Aoi%20YANAGI/1-sotsuron/basic2.html";
      }
    }
  });
  