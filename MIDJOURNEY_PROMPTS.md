# 미드저니 이미지 프롬프트 모음

Insurance HR 랜딩페이지용 배경 이미지 생성을 위한 미드저니 프롬프트입니다.
모든 프롬프트는 텍스트가 포함되지 않도록 설계되었습니다.

---

## Hero Section용 이미지

### 1. 추상적 비즈니스 네트워크
```
abstract digital network of glowing blue and green connected nodes, futuristic business technology background, dark black gradient background, geometric lines and particles flowing, cinematic lighting, ultra detailed, 8k, professional corporate aesthetic, no text --ar 16:9 --v 6
```

**용도**: Hero 섹션 메인 배경
**특징**: 네트워크 연결성, 기술적 느낌, 다크 테마


### 2. 데이터 플로우
```
flowing data streams in electric blue and neon green colors, abstract technology particles, dark minimalist background, depth of field, bokeh effect, modern corporate design, sleek and professional, no text --ar 16:9 --v 6
```

**용도**: Hero 섹션 파티클 배경
**특징**: 역동적인 움직임, 데이터 흐름 시각화

---

## About Section용 이미지

### 3. 팀워크 실루엣
```
silhouettes of business professionals in motion, gradient overlay of blue to green, minimalist modern design, dynamic composition, professional atmosphere, abstract background, no faces visible, no text --ar 16:9 --v 6
```

**용도**: 조직 소개 섹션
**특징**: 전문성, 협업, 인간적 요소


### 4. 도시 야경
```
modern cityscape at night with blue and green lighting, sleek skyscrapers, professional business district, cinematic depth of field, bokeh lights, dark atmospheric mood, ultra wide angle, no text --ar 16:9 --v 6
```

**용도**: About 섹션 배경
**특징**: 도시적, 프로페셔널, 성공 이미지

---

## Team Section용 이미지

### 5. 협업 공간
```
modern minimalist office space, abstract geometric shapes floating, gradient blue and green accent lighting, professional corporate environment, clean design, depth of field, no people, no text --ar 16:9 --v 6
```

**용도**: 구성원 소개 섹션
**특징**: 현대적 공간, 미니멀리즘


### 6. 성장 메타포
```
abstract upward growing geometric structures, gradient from deep blue to vibrant green, minimalist 3D design, professional business concept, dark background, dynamic composition, no text --ar 16:9 --v 6
```

**용도**: Team 섹션 헤더
**특징**: 성장과 발전의 시각화

---

## Recruitment Section용 이미지

### 7. 미래지향적 포털
```
futuristic digital portal with blue and green energy, abstract tech gateway, particles and light rays, professional sci-fi aesthetic, dark atmospheric background, cinematic lighting, no text --ar 16:9 --v 6
```

**용도**: 채용 섹션 배경
**특징**: 미래, 새로운 시작, 기회의 문


### 8. 성공 이미지
```
abstract representation of success and growth, geometric shapes ascending, gradient blue to green color scheme, modern minimalist design, professional corporate style, dramatic lighting, no text --ar 16:9 --v 6
```

**용도**: 채용 CTA 영역
**특징**: 성공, 성취, 상승

---

## 범용 배경 이미지

### 9. 다크 테크 패턴
```
dark technology background with subtle blue and green circuit patterns, minimalist design, abstract digital texture, professional fintech aesthetic, depth and layers, ultra high quality, no text --ar 16:9 --v 6
```

**용도**: 모든 섹션 공용
**특징**: 기술적, 세련됨, 범용성


### 10. 럭셔리 추상
```
luxury abstract background with flowing blue and green gradient waves, smooth curves, premium professional design, dark elegant atmosphere, depth of field, bokeh particles, cinematic quality, no text --ar 16:9 --v 6
```

**용도**: 모든 섹션 공용
**특징**: 프리미엄, 우아함, 부드러운 그라디언트

---

## 프롬프트 커스터마이징 가이드

### 화면 비율 변경
- **와이드 화면**: `--ar 16:9` (기본)
- **모바일 세로**: `--ar 9:16`
- **정사각형**: `--ar 1:1`
- **울트라와이드**: `--ar 21:9`

### 스타일 조정
- **더 사실적**: `--style raw` 추가
- **더 다양한 결과**: `--chaos 20` 추가
- **최고 품질**: `--q 2` 추가
- **더 빠른 생성**: `--q 0.5` 추가

### 색상 변경 옵션
현재 프롬프트의 `blue and green`을 다음으로 교체 가능:
- `cyan and emerald` - 더 밝은 톤
- `sapphire and mint` - 더 세련된 느낌
- `navy and teal` - 더 차분한 느낌
- `electric blue and lime green` - 더 비비드한 느낌
- `cobalt and jade` - 더 깊은 색감

### 분위기 조정
프롬프트에 추가할 수 있는 키워드:
- `elegant` - 우아함 강조
- `dramatic` - 극적인 효과
- `subtle` - 은은한 느낌
- `vibrant` - 생동감 있는
- `mysterious` - 신비로운

---

## 이미지 생성 후 작업

### 1. 최적화
- WebP 포맷으로 변환
- 적절한 압축 (품질 80-90%)
- 해상도: 1920x1080 권장

### 2. 적용 위치
```
/public/images/hero-bg.webp
/public/images/about-bg.webp
/public/images/team-bg.webp
/public/images/recruitment-bg.webp
```

### 3. 다크 오버레이
이미지 위에 다음 CSS 오버레이 적용 권장:
```css
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(...);
```

---

## 주의사항

- ✅ 모든 프롬프트에 `no text` 포함
- ✅ 한글/영어 텍스트 없는 순수 비주얼 이미지
- ✅ 다크 테마와 조화로운 색상 (블루, 그린)
- ✅ 프로페셔널하고 세련된 분위기
- ⚠️ 사람 얼굴은 실루엣으로만 사용
- ⚠️ 로고나 브랜드 마크 없음

---

**작성일**: 2024
**버전**: 1.0
**프로젝트**: Insurance HR Landing Page
