# HTTP Server with Docker

This project implements a simple HTTP server using Node.js and Docker. The server responds to incoming GET requests on the `/data` endpoint, accepting two query parameters `n` and `m`.

## Requirements

- Docker installed on your machine
- Node.js installed on your machine
  
## Getting Started

- Clone the repository:

   ```bash
   git clone https://github.com/rohit1107-2002/Assignment.git
   cd Assignment

- Generate Data Files (Run this command only once):
  ```bash
  ./generate_data_files.sh

- Build the Docker Image:
  ```bash
  docker build -t your-image-name .

- Run the Docker Container:
  ```bash
  docker run -p 8080:8080 --memory=1500m --cpus=2 your-image-name

- Access the Server:
  ```bash
  Visit http://localhost:8080/data in your web browser.

- Endpoints
  ```bash
  /data?n=<filename>: Returns the entire content of the specified file.
  /data?n=<filename>&m=<lineNumber>: Returns the content of the specified file at the given line number.

## Project Structure
- server.js: Node.js script for the HTTP server.
- Dockerfile: Docker configuration file.
- generate_data_files.sh: Script to generate random text data files.
- data/: Directory containing generated data files.
- node_modules/: Node.js dependencies (ignored in version control).
- package.json and package-lock.json: Node.js package information.
  
## Notes
- Data files are stored in the data/ directory.
- The server is exposed on port 8080.
