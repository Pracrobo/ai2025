# [nginx docs]('https://nginx.org/')

## 마스터 프로세스와 워커 프로세스
1개의 마스터 프로세스(master process)와 여러개의 워커 프로세스들(worker processes)을 가지고 있다.

- 마스터 프로세스의 주요 역할은 설정(configuration)을 읽고 평가하고, 워커 프로세스들을 관리하는 것이다.
- 워커 프로세스들의 역할은 실질적인 요청들(requests)을 처리하는 것이다. 
  
- nginx는 이벤트 기반 모델(event-based model) 사용하며, 운영체제 의존적인(OS-dependent) 메커니즘을 활용하여 워커 프로세스들 사이의 요청을 효율적으로 분배한다.
워커 프로세스의 개수는 configuration 파일 안에 정의되어 있는데, 설정에 따라 절대적인 개수로 고정될 수도 있고 또는 가용한 CPU 코어의 개수에 따라 자동으로 조절될 수도 있다.

nginx와 그 모듈들이 동작하는 방식은 configuration 파일 안에서 결정된다. 디폴트로는 그 configuration 파일 이름은 nginx.conf로 되어 있으며, 그 파일이 위치하는 디렉토리는 /usr/local/nginx/conf, /etc/nginx, 또는 /usr/local/etc/nginx이다.


- Node.js 클러스터 모듈 사용 예
```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numWorkers = os.cpus().length;

  console.log(`Master process is running with ${numWorkers} workers`);

  // 워커 프로세스 생성
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  // 워커가 종료되었을 때 새로운 워커 생성
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log('Creating a new worker...');
    cluster.fork();
  });
} else {
  // 워커 프로세스에서 실제 작업 수행
  console.log(`Worker ${process.pid} started`);

  // TODO: 워커 프로세스에서 수행할 작업을 구현

  // 워커 프로세스 종료
  process.exit();
}

```
- 위 예제는 클러스터 모듈을 사용하여 워커 프로세스를 생성하고 관리하는 방법을 보여줍니다. cluster.isMaster를 사용하여 마스터 프로세스와 워커 프로세스를 구분하고, cluster.fork()를 사용하여 워커 프로세스를 생성합니다. 
- 마스터 프로세스는 numWorkers 개수만큼 워커 프로세스를 생성하고, 워커 프로세스가 종료되었을 때 새로운 워커를 생성하는 로직을 포함합니다.
- 각 워커 프로세스는 cluster.on('exit') 이벤트 핸들러를 통해 종료되었을 때 새로운 워커를 생성하도록 설정되어 있습니다. 워커 프로세스에서는 실제 작업을 수행하고, 작업이 완료되면 process.exit()을 호출하여 프로세스를 종료합니다.
- 실제 프로젝트에서는 워커 프로세스에서 수행할 작업을 구현해야 합니다. 위 예제에서 TODO 주석 부분에 작업을 추가하시면 됩니다. 이를 통해 클러스터 모듈을 사용하여 멀티스레딩을 구현하고, CPU 코어를 최대한 활용할 수 있습니다.


## 설정파일
 /etc/nginx/nginx.conf
 