## 請解釋後端與前端的差異。
>前端在於給使用者看到的畫面與使用者的互動。後端在於處理資料庫與網頁的功能。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
>瀏覽器發送封包前，本機電腦先去問「DNS Server」要發送地址的IP (google.com)
，瀏覽器送出一個 request 到 google 的 server ，在其的資料庫找尋 "javascript" 的相關資料資料，再將結果 (html的檔案) response 到本機的瀏覽器。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. 檢查連線
`ping google.com`
2. 查詢DNS 
`nslookup google.com`
3. 時間
`date`