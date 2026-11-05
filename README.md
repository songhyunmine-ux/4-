# LAST SIGNAL · 마지막 신호
React + Tailwind CSS + Vite로 만든 인터랙티브 휴대폰 추리 게임 프로토타입.

## 실행
Node.js 20.19+ 또는 22.12+에서:

```sh
npm ci
npm run dev
```

프로덕션 빌드: `npm run build`

## GitHub Pages 배포
GitHub 저장소 Settings → Pages → Build and deployment에서 Source를 **GitHub Actions**로 선택합니다. Actions 탭의 `Deploy to GitHub Pages` 워크플로를 수동 실행하거나 `main`에 푸시하면 Node.js 22에서 `npm ci`, `npm run build` 후 `dist`를 배포합니다. 저장소에서 Actions 실행을 허용해야 하며, 배포 환경에 승인 규칙이 있으면 승인도 필요합니다.

배포 성공 후 주소: https://songhyunmine-ux.github.io/4-/

Vite의 `base`는 `/4-/`입니다. 현재 앱은 URL 라우팅 없이 내부 상태로 전환하므로 SPA rewrite가 필요하지 않습니다. 별도 환경 변수와 서버도 필요하지 않습니다. 이전 Vercel 설정 파일은 남아 있지만 GitHub Actions에서는 사용하지 않습니다.

정적 파일은 `public/`에 넣고 설정에는 `audio.mp3`처럼 상대 경로를 기록하세요. 오디오는 `publicAsset()`을 통해 Vite 기본 경로 아래로 해석됩니다. 향후 `public/`의 이미지를 사용할 때도 `publicAsset('images/example.png')`를 사용하세요. `src/`에서 import한 이미지와 CSS는 Vite가 기본 경로를 처리합니다. 현재 이미지는 CSS 배경과 SVG 아이콘이며 별도 이미지 파일은 없습니다. 실제 `public/audio.mp3`는 아직 없으므로 현재 통화는 자막으로 체험합니다.

## 체험
- 하단 홈 바를 클릭하거나 위로 스와이프해 잠금 해제.
- 카카오톡/메시지 아이콘을 눌러 채팅. `어디야?`, `전화번호`, `괜찮아?` 등에 약 1.5초 뒤 답장.
- 전화 앱에서 `01012345678` 입력 후 통화. 자막이 순차 출력되며 빨간 버튼으로 종료.
- 앱 안에서 하단 홈 바를 누르거나 위로 스와이프하면 홈 화면으로 복귀. 통화는 종료 버튼을 누르기 전까지 유지.
- 사진·카메라·설정은 향후 확장을 위한 자리 표시자.

## 스토리 편집
`src/story.json`에서 연락처, 첫 메시지, 키워드별 답장, 기본 답장, 통화 자막을 편집합니다. `rules`는 먼저 일치한 규칙을 사용합니다. 실제 오디오가 필요하면 `public/audio.mp3`를 추가하거나 `call.audio` 경로를 변경하세요. 오디오가 없거나 재생이 차단되면 자막으로 체험할 수 있습니다. 음소거는 로컬 UI 상태이며 실제 마이크를 사용하지 않습니다. 스피커 버튼은 녹음 오디오 볼륨을 조정합니다.

상태는 현재 탭 메모리에만 유지되며 새로고침하면 초기화됩니다. 실제 문자·전화·카카오톡 서비스와 연결되지 않습니다. 아이콘은 lucide-react를 사용합니다.
