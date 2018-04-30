### Quickstart

These steps require a local [Docker](http://docker.com) installation.

#### PreReqs

1. Install the Extension

```powershell
# Remove the extension
az extension remove -n acrbuildext

# Install the extension
az extension add --source https://acrbuild.blob.core.windows.net/cli/acrbuildext-0.0.4-py2.py3-none-any.whl -y
```

1. Clone the Repository and test the app

```powershell
git clone https://github.com/danielscholl/web-demo-node.git
cd web-demo-node

$Env:PORT=8080
node .\server.js

# Navigate to http://localhost:8080
```

#### Build the container manually

```powershell
# Build the Docker Container
docker build -t helloworld:v1 .

# Run the Docker Container
docker run -d -p 8080:80 helloworld:v1

# Navigate to http://localhost:8080
```

#### Build the Container using ACR Build Engine

```powershell
$ACR_NAME="<your_acr_name>"
az acr build --registry $ACR_NAME --image helloworld:v1 --context 
```
