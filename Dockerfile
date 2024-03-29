FROM node:16.4.2
MAINTAINER smb1457 <smb1457@gmail.com>
# 앱 디렉터리 생성
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# pm2 설치
RUN npm install -g pm2

# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
# ENV NODE_ENV production

# dockerfile을 실행하는 경로에서 소스 복사
COPY . .
# 아래 포트로 매핑
EXPOSE 4887

# pm2-runtime으로 실행
CMD ["pm2-runtime", "start", "ecosystem.config.js"]