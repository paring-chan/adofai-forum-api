# 얼불춤 비공식 포럼 API


이 API는 vercel을 이용해 배포하고 사용하실 수 있습니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpikokr%2Fadofai-forum-api&env=API_KEY&envDescription=%EA%B5%AC%EA%B8%80%20API%ED%82%A4%EB%A5%BC%20%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94&envLink=https%3A%2F%2Fdevelopers.google.com%2Fsheets%2Fapi%2Fguides%2Fauthorizing%23APIKey&project-name=adofai-forum-api&repo-name=adofai-forum-api)


## API 사용법

### ID로 맵 찾기

```http request
GET /api/byID/[id]
```

### 모든 맵 가져오기

```http request
GET /api/all
```
