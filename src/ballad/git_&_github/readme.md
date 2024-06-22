# git

##### git remote 查看本地记录的远程仓库地址 只能有别名

##### git remote add 本地别名（一般用origin） https://xxxx.xx.git (表示远程长路地址i) 本地仓库管理远程仓库

##### git remote -v 可以查看本地别名 与 远程仓库地址

##### github 远程主分支一般是main 而本地主分支是master 可以通过 git branch -m main修改本地的主分支名叫main(-M)是强制修改 （也可以通过 git config --global init.defaultBranch main 修改本地的初始化主分支，后面初始化项目 本地的主分支都是main了）

#### 利用 git remote set-url 本地别名 xxx.xxx/xxx/xxx.xxx 重新设施远程仓库别名

#### 利用 git branch -u origin/远程仓库的分支名 在本地的当前分支下 关联远程仓库的指定分支

#### 利用 git push origin 本地分支名:远程仓库分支名 可以推送本地分支的代码到远程仓库中指定的分支下


# Issues
