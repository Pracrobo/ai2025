## Git - shortcut 

| 작업                         | 명령어                                  |
|------------------------------|---------------------------------------|
| 새 브랜치 생성 및 체크아웃    | `git checkout -b 새브랜치이름`        |
| 변경사항 커밋                | `git add .` → `git commit -m "메시지"` |
| 새 브랜치를 원격에 푸시       | `git push -u origin 새브랜치이름`     |
| `upstream` 브랜치로 전환      | `git checkout main`                   |
| 최신 변경사항 가져오기        | `git pull origin main`                |
| 브랜치 병합                   | `git merge 새브랜치이름`               |
| 브랜치 삭제 (로컬)            | `git branch -d 새브랜치이름`           |
| 브랜치 삭제 (원격)            | `git push origin --delete 새브랜치이름` |
| Rebase 방식으로 병합          | `git rebase main`                      |

💡 **Tip:** 병합 전에 항상 `git pull` 해서 최신 상태로 맞추고 진행



 # 개념 정리
 ## rebase

 ## Detached HEAD 상태
 Git에서 일반적으로 HEAD는 현재 체크아웃된 브랜치를 가리킵니다.
그런데 지금은 특정 브랜치가 아닌 특정 커밋에 체크아웃된 상태입니다.
즉, "현재 브랜치가 없는 상태" 라고 볼 수 있습니다.

🛠 2. 왜 이런 상태가 되었을까?
git switch origin/main 또는 git checkout origin/main 같은 명령을 실행하면,
원격 브랜치(origin/main)의 최신 커밋으로 이동하지만, 로컬 브랜치가 생성되지 않기 때문에 "detached HEAD" 상태가 됩니다.

🛠 3. 해결 방법
```sh
git swith main
````


## git pull : fetch + merge 
로컬에서 작업한 내용을 보존하면서 origin/main의 변경사항 병합하는 방법
```sh
git pull origin main
````


