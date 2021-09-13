# client-manager


## Generate code through openapi specification

```
Spring Server Code

npx @openapitools/openapi-generator-cli generate -i openapi/client-manager-openapi.json -g spring --library spring-boot -p sourceFolder=src/main/gen -p basePackage=io.mkth -p apiPackage=io.mkth.api -p configPackage=io.mkth.configuration -p modelPackage=io.mkth.model -p title=client-manager -p groupId=io.mkth -p artifactId=client-manager -p artifactVersion=1.0.0-SNAPSHOT -o spring-server/
```

```
node-express-server

npx @openapitools/openapi-generator-cli generate -i openapi/client-manager-openapi.json -g nodejs-express-server -o node-express-server/
```

```
Java Client

npx @openapitools/openapi-generator-cli generate -i openapi/client-manager-openapi.json -g java -p sorceFolder=src/main/gen -o java-client/
```
