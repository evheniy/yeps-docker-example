# YEPS docker example

YEPS app example using docker

## How to use

 * [Install docker](https://docs.docker.com/engine/installation/)
 * Build image

```bash
$ docker build -t yeps .
```
    
 * Check images
 
```bash
$ docker images
```
    
 * Run the image
 
```bash
$ docker run -p 3000:3000 -d yeps
```
    
 * Open [http://localhost:3000/](http://localhost:3000/)
 
Print the output of your app:
 
    # Get container ID
    $ docker ps
    
    # Example
    CONTAINER ID   IMAGE   COMMAND        PORTS                    NAMES
    dba798d9b52a   yeps    "npm start"    0.0.0.0:3000->3000/tcp   dreamy_euler
    
    # Print app output
    $ docker logs <container id>

If you need to go inside the container you can use the exec command:

```bash
$ docker exec -it <container id> /bin/bash
```
    
To stop:

```bash
$ docker stop <container id>
```

#### [YEPS documentation](http://yeps.info/)
