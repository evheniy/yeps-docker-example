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
    
    # Print app output
    $ docker logs <container id>

If you need to go inside the container you can use the exec command:

    $ docker exec -it <container id> /bin/bash
    
To test your app, get the port of your app that Docker mapped:

    $ docker ps
    
    # Example
    CONTAINER ID        IMAGE               COMMAND             CREATED              STATUS              PORTS                    NAMES
    dba798d9b52a        yeps                "npm start"         About a minute ago   Up About a minute   0.0.0.0:3000->3000/tcp   dreamy_euler

To stop:

    $ docker stop <container id>

#### [YEPS documentation](http://yeps.info/)
