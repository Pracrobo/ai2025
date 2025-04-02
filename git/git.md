## 📝 요약

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
