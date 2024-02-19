# NEXTJS - testing hello world
---

build image

	❯ docker build . -t damvhellonavbarbootstrap-mynextjs --target runner


test run container

	❯ docker run -d --name damvmynextjshellonavbarbootstrap -p 83:3000 damvhellonavbarbootstrap-mynextjs


check kedalam container

	❯ docker exec -it damvmynextjshellonavbarbootstrap /bin/sh


open browser

	URL http://localhost:83

---

<p align="center">
    <img src="./gambar-petunjuk/ss_001.png" alt="001" style="display: block; margin: 0 auto;">
</p>

<p align="center">
    <img src="./gambar-petunjuk/ss_002.png" alt="002" style="display: block; margin: 0 auto;">
</p>

<p align="center">
    <img src="./gambar-petunjuk/ss_003.png" alt="003" style="display: block; margin: 0 auto;">
</p>

<p align="center">
    <img src="./gambar-petunjuk/ss_004.png" alt="004" style="display: block; margin: 0 auto;">
</p>


---

### DEPLOY FLY.IO

	❯ flyctl apps create --name damvhellonavbarbootstrap-mynextjs
	
	
	❯ flyctl deploy
	
	
	❯ flyctl open
