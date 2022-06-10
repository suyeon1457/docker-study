#docker에서 pm2로 nodejs 서버 띄우기

###docker 이미지 빌드
```shell
docker build -t [닉네임]/[이미지 이름] .
```

###docker 이미지 실행
```shell
docker run --name [컨테이너 이름] -d -p 4887:4887 [닉네임]/[이미지 이름]
```

###docker hub에 업로드
```shell
docker push [닉네임]/[이미지 이름]
```

###docker compose로 백그라운드 시작
```shell
docker compose -f docker-compose.yml up -d --build
```

###docker compose로 재시작
```shell
docker compose restart [컨테이너 이름]
```

###docker 로그 확인
```shell
docker logs [컨테이너 이름]  
```

###docker 컨테이너 중단 및 삭제
```shell
docker stop [컨테이너 이름]
docker rm [컨테이너 이름]  
```

###참고
[velog](https://velog.io/@nawnoes/nodejs-express.js-%EC%84%9C%EB%B2%84-babel-node%EC%99%80-pm2%EB%A1%9C-%EA%B8%B0%EB%8F%99%ED%95%98%EA%B8%B0)
[pm2](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)