# Course info: ST0263-241 Special Topics in Telematics

**Student:** Julián David Valencia Restrepo

**Professor:** Edwin Nelson Montoya Munera

# Challenge 1 and 2: P2P

## 1. Brief description of the activity

A Peer-to-Peer (P2P) file transfer system. The project is split into several components that represent different nodes (peers) and a central server.

### 1.1. What was completed from the professor's requirements (functional and non-functional)

#### Functional requirements

1. Peer-to-peer connectivity: peers must be able to connect to each other to share files.
2. Central server: there must be a central server that supports discovery of peers and files.
3. File transfer: peers must be able to upload files to and download files from other peers.

#### Non-functional requirements

1. Scalability: the system must handle a growing number of peers without significant performance degradation.

### 1.2. What was NOT completed

1. Deployment on AWS was not done.

# 2. High-level design, architecture, patterns and best practices

![Architecture screenshot](https://github.com/jdvalencir/st0263-241-jdvalencir/assets/88250984/682bde1f-71d6-4c97-aa7e-66edf9923eac)

From the code:

- Each peer has a **PServer** (Node.js, gRPC server) that serves and receives files from its `files` directory, and a **PClient** (Node.js CLI) that asks the user to download or upload a file by name.
- The **central server** (FastAPI) keeps an in-memory registry of PServers and their file indexes. Endpoints under `/api/v1/`: `pserver_login`, `check_peers_status` (heartbeat), `get_ip_list` (which PServers have a file), `upload_round_robin` (picks another PServer to upload to) and `update_list`.
- PServers that do not check in for 30 seconds are removed from the registry.
- File transfer between peers uses gRPC (`protobuf/file_transfer.proto`); the clients reach the central server over HTTP (axios).

# 3. Development environment

- Central server: Python 3.9 (Docker image), FastAPI 0.68.0, Uvicorn 0.15.0, Pydantic 1.8.2, httpx 0.19.0.
- PServer / PClient: Node.js with `@grpc/grpc-js`, `@grpc/proto-loader`, `axios`, `dotenv` (and `prompt-sync` for the client).

## Directory structure

- `Peer`, `Peer2`, `Peer3`: three copies of a peer.
  - `files`: files the peer can share.
  - `Pclient`: P2P client code.
  - `Pserver`: P2P server code (includes a `dockerfile` and `docker-compose.yml`).
- `ServerCentral`: central server.
  - `main.py`: FastAPI application.
  - `requirements.txt`: Python dependencies.
  - `dockerfile`: image for the central server (serves on port 8000 with Uvicorn).

## Getting started

Central server:

```bash
cd ServerCentral
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

or with Docker:

```bash
cd ServerCentral
docker build -t central-server .
docker run -p 8000:8000 central-server
```

Peer (each `src` directory has its own `.env` configuration file):

```bash
cd Peer/Pserver/src
npm install
npm start          # node server.js

cd Peer/Pclient/src
npm install
node client.js
```

Note: the `docker-compose.yml` in `Pserver/src` references Dockerfile paths (`./PServer/Dockerfile`, `./PClient/Dockerfile`, `./serverCentral/Dockerfile`) that do not match this repository layout, so it likely needs adjusting before use.

# References

- [Docker Hub](https://hub.docker.com/)
- [Docker docs](https://docs.docker.com/)
- [gRPC docs (Node)](https://grpc.io/docs/languages/node/basics/)
