# Linux

- root(/) 밑에
  - /bin : command binary 명령어에 대한 파일
  - /etc : 리눅스 설정 파일
  - /home밑에 계정명 폴더 존재
  - /opt : 추가패키지 설치 디렉토리
  - /tmp : 임시파일 저장장
  - /usr(bin, lib) : 기본실행되는 파일
  - /var(log) : 시스템 로그 파일 등이 있음
- 대소문자 구별한다.

## Basic 명령어

```shell
$ pwd : 현재위치
$ ls : 디렉토리의 내용
$ ls -l : 상세목록 (권한, 소유주, 용량 , 만든날짜)
$ ls -l -h : human readerable, 4.0K이런식
$ ls -a : 숨김파일까지 볼 수 있음
$ cd : change directory
```

## 파일과 폴더 생성

```shell
$ touch [file명]
$ echo "문자열" > [file명]
```

```shell
$ mkdir -p [상위폴더명]/[하위폴더명] : 상하위폴더 구조로 생성
$ mkdir [폴더명1] [폴더명2] : 2개 폴더 생성
$ mkdir ["폴더 1"] : 띄어쓰기해서 폴더명 붙일 경우 "" 표시
```

## 파일과 폴더 삭제

```shell
$ rm [파일명1] [파일명2] [파일명3] : 파일 여러개 삭제
$ rm file*.txt : file로 시작하는 text도 삭제
$ rm *.txt : 모든 txt 삭제
$ rm -r [파일명] : 폴더삭제
```

## 파일과 폴더 복사, 이동

```shell
$ cp [파일1] [파일2] : 파일 1으르 2로 복사
$ cp -r [폴더명] [경로] : 폴더 복사
$ mv [폴더1] [폴더2] : 폴더 이동
```

## crontab

```shell
$ cat /etc/crontab : 스케줄러

```

## find 명령어어

```shell
$ find : 하위 모든 폴더와 파일 가져옴
$ find -maxdepth 1 : 현재 위치에서 depth1만 보여줌
$ find -type f : file만 보여줌
$ find -type d : directory만 보여줌
$ find -name "찾고싶은 이름*" : ""안에 글자가 들어간 모든 파일 보여줌
$ find -iname "찾고싶은 이름*" : 대소문자 구분없이 검색가능
$ find -size (+,-)숫자(K, M) : +큰, -작은 / K, M 등 사용가능
```

- type, name, size 옵션들 섞기 가능

## 압축 명령어

```shell
$ tar : 압축하기
$ tar -cv : c는 create, v는 view , f는 file이름 지정
$ tar -cvf archive.tar file*.txt : archive.tar 라는 파일에 file~.txt 파일들이 압축됨
$ tar -tf [압축폴더명.tar] : 압축한 파일들을 보여줌
$ tar -xvf [압축폴더명.tar] : 압축한 파일 풀기
$ zip [파일명.zip] file*.txt : file~.txt 파일 파일명.zip으로 압축
$ uzip [파일명.zip]
```

### nano 편집기

- ctrl + O : write Out
- ctrl + K : cut
- ctrl + R : read file
- ctrl + \ : replace
- ctrl + W : keyword로 파일찾기
- ctrl + U : paste
- ctrl + X : exit
- ctrl + C : location
- M(alt) + U : undo
- M(alt) + E : redo
- M(alt) + 6 : copy
- M(alt) + A : set mark 커서
