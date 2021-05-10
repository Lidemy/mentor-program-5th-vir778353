## 請以自己的話解釋 API 是什麼
透過API，可以對server進行request跟response，進而取得想要的資料

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
### 508 Loop Detected
伺服器在處理請求時陷入無窮迴圈。
### 511 Network Authentication Required 
客戶端需要進行身分驗證才能獲得網路存取權限，限制使用者群存取特定網路。
###　420 Enhance Your Calm
Twitter Search與Trends API在客戶端被限速的情況下返回。
## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=10 |
| 獲取單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/5      |
| 新增餐廳   | POST   | /restaurants     | restaurants: 店名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳   | PATCH   | /restaurants/:id     | restaurants: 店名 | 無              |