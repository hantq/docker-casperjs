# docker-casperjs
Docker repo for CasperJS based on PhantomJS 2.0

## Environment
Ubuntu 14.04

PhantomJS 2.0.0

Casperjs 1.1.0-beta3

## Usage

Run **casperjs** command:

```bash
docker run hantq/docker-casperjs casperjs --version
```

Run test case:

```bash
docker run -v *pwd*/casperjs-test:/home/casperjs-test hantq/docker-casperjs casperjs /home/casperjs-test/sample.js
```

## Take a screenshot
```
docker run -v *pwd*/casperjs-test:/home/casperjs-test hantq/docker-casperjs casperjs test /home/casperjs-test/capture.js
```
