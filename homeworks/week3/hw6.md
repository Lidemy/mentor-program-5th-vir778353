## hw1：好多星星
透過迴圈印出星星。

## hw2：水仙花數
透過while迴圈（終止條件是：數值/ 10> 0），把要判斷的數值放入一個空矩陣，在一個一個拿出來計算。

## hw3：判斷質數
用迴圈來判斷每個數值是不是質數。

## hw4：判斷迴文
把要判斷的字串，從尾到頭的一個一個放入新的空字串，再比較二個字串是否相同。

## hw5：聯誼順序比大小
重點在於"長度為 512 個位數以內"，所以就用把字串內的數值從頭到尾的比較（二個字串長度相同）。

## 筆記
git commit with ES6 時，出現 "prefer-arrow-callback"，參考[Node.js documentation](https://nodejs.org/api/readline.html)
```
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});
```