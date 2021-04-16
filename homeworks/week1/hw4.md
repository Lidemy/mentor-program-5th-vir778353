## 跟你朋友介紹 Git

### Git 版本控制的軟體
>說明：可以儲存你所有版本的笑話，簡單好用不頭疼

#### 第一步 資料夾擁有 Git 的功能
`git init`
*移除 Git 的功能
`rm -r .git`
* 查閱版本控制狀態
`git status`
#### 第二步 將笑話檔案加入版本控制
`git add <檔案名稱>`
* 移除版本控制
`git rm --cached <檔案名稱>`
#### 第三步 建立版本
`git commit -m "相關版本訊息"`
* 查閱所有版本
`git log`
* 回到過去版本
`git checkout <版本號>`
>「版本號」從 `git log` 取得。
* 回到最新版本
`git checkout master`

:::info
**Hine：**
* 修改 commit message
`git commit --amend`
* 刪除最新版本 commit
    1. 將最新的commit全部移除，並將已修改的檔案，回復至上一次commit的狀態
`git reset HEAD^ --hard`
    2. 將最新的commit移除，但保留已修改的檔案。
`git reset HEAD^ --soft`
:::
