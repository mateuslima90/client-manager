package io.mkth.api;

import io.mkth.model.Client;
import io.mkth.model.InlineObject;
import io.mkth.model.InlineObject1;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-08-01T23:30:16.486-03:00[America/Sao_Paulo]")
@Controller
@RequestMapping("${openapi.client-manager.base-path:/api/v1/idp}")
public class ClientsApiController implements ClientsApi {

    private final NativeWebRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public ClientsApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<List<Client>> getAllClient() {
        Client client = new Client();
        client.setId("1234");
        client.setUsername("teste-client-api");
        client.setDescription("User to tests");
        client.setOwner("mateus_lima");
        client.setTeam("security-team");
        return ResponseEntity.ok(Arrays.asList(client));
    }

    @Override
    public ResponseEntity<Client> createSingleClient(InlineObject inlineObject) {
        Client client = new Client();
        client.setId("123456");
        client.setUsername(inlineObject.getUsername());
        client.setDescription(inlineObject.getDescription());
        client.setOwner(inlineObject.getOwner());
        client.setTeam(inlineObject.getTeam());
        return ResponseEntity.status(HttpStatus.CREATED).body(client);
    }

    @Override
    public ResponseEntity<Client> deleteSingleClient(String clientId) {
        // Searching client by id
        // remove this client
        Client client = new Client();
        client.setId("1234");
        client.setUsername("teste-client-api");
        client.setDescription("User to tests");
        client.setOwner("mateus_lima");
        client.setTeam("security-team");
        return ResponseEntity.status(HttpStatus.OK).body(client);
    }

    @Override
    public ResponseEntity<Client> getSingleClient(String clientId) {
        Client client = new Client();
        client.setId("1234");
        client.setUsername("teste-client-api");
        client.setDescription("User to tests");
        client.setOwner("mateus_lima");
        client.setTeam("security-team");
        return ResponseEntity.status(HttpStatus.OK).body(client);
    }

    @Override
    public ResponseEntity<Client> updateSingleClient(String clientId, InlineObject1 inlineObject) {
        // Searching client by id
        Client client = new Client();
        client.setId("123456");
        client.setUsername(inlineObject.getUsername());
        client.setDescription(inlineObject.getDescription());
        client.setOwner(inlineObject.getOwner());
        client.setTeam(inlineObject.getTeam());
        return ResponseEntity.status(HttpStatus.OK).body(client);
    }
}
