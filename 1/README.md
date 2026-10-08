# HAERYU Portfolio

GitHub Pages용 정적 React + Vite 포트폴리오입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 `main` 브랜치에 업로드합니다.
3. `Settings → Pages → Build and deployment → Source`에서 **GitHub Actions**를 선택합니다.
4. `main`에 push하면 `.github/workflows/deploy.yml`이 자동 배포합니다.

사이트 주소는 `https://<GitHub아이디>.github.io/<저장소명>/` 형태입니다.

### 참고
원본 프로젝트의 로그인/API/DB 기반 Private Archive는 GitHub Pages에서 실행할 수 없기 때문에 공개 기록형 Archive로 변환했습니다. 포트폴리오의 홈, 프로필, 작업 분야, 연락처, Archive 페이지는 정적으로 동작합니다.
