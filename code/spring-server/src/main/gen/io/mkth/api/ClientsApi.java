/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (5.2.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package io.mkth.api;

import io.mkth.model.Client;
import io.mkth.model.InlineObject;
import io.mkth.model.InlineObject1;
import io.mkth.model.ModelApiResponse;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-08-01T23:30:16.486-03:00[America/Sao_Paulo]")
@Validated
@Api(value = "clients", description = "the clients API")
interface ClientsApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    /**
     * POST /clients : Create a client
     * Return a specific client
     *
     * @param inlineObject  (required)
     * @return A JSON array of clients (status code 201)
     *         or Invalid Payload (status code 400)
     *         or Client already exists (status code 409)
     *         or Internal Server Error (status code 500)
     */
    @ApiOperation(value = "Create a client", nickname = "createSingleClient", notes = "Return a specific client", response = Client.class, authorizations = {
        
        @Authorization(value = "BearerAuth")
         }, tags={ "clients", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "A JSON array of clients", response = Client.class),
        @ApiResponse(code = 400, message = "Invalid Payload", response = ModelApiResponse.class),
        @ApiResponse(code = 409, message = "Client already exists", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = ModelApiResponse.class) })
    @PostMapping(
        value = "/clients",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<Client> createSingleClient(@ApiParam(value = "" ,required=true )  @Valid @RequestBody InlineObject inlineObject) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"owner\" : \"mateuslima90@gmail.com\", \"description\" : \"User responsible to create bulk crm tasks\", \"id\" : \"121dasda212e12dsawd3\", \"team\" : \"APi Automation Team\", \"username\" : \"agLAl0hgqNKwp9APtAW6\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * DELETE /clients/{clientId} : Delete Client by Id
     * Delete a specific client
     *
     * @param clientId ID of pet to fetch (required)
     * @return A JSON array of clients (status code 200)
     *         or Not Found (status code 404)
     *         or Internal Server Error (status code 500)
     */
    @ApiOperation(value = "Delete Client by Id", nickname = "deleteSingleClient", notes = "Delete a specific client", response = Client.class, authorizations = {
        
        @Authorization(value = "BearerAuth")
         }, tags={ "clients", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A JSON array of clients", response = Client.class),
        @ApiResponse(code = 404, message = "Not Found", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = ModelApiResponse.class) })
    @DeleteMapping(
        value = "/clients/{clientId}",
        produces = { "application/json" }
    )
    default ResponseEntity<Client> deleteSingleClient(@ApiParam(value = "ID of pet to fetch",required=true) @PathVariable("clientId") String clientId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"owner\" : \"mateuslima90@gmail.com\", \"description\" : \"User responsible to create bulk crm tasks\", \"id\" : \"121dasda212e12dsawd3\", \"team\" : \"APi Automation Team\", \"username\" : \"agLAl0hgqNKwp9APtAW6\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /clients : Return a list of clients
     * Return all clients from IDP Provider
     *
     * @return A JSON array of clients (status code 200)
     *         or Not Found (status code 400)
     *         or Unauthorized (status code 401)
     *         or Internal Server Error (status code 500)
     */
    @ApiOperation(value = "Return a list of clients", nickname = "getAllClient", notes = "Return all clients from IDP Provider", response = Client.class, responseContainer = "List", authorizations = {
        
        @Authorization(value = "BearerAuth")
         }, tags={ "clients", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A JSON array of clients", response = Client.class, responseContainer = "List"),
        @ApiResponse(code = 400, message = "Not Found", response = ModelApiResponse.class),
        @ApiResponse(code = 401, message = "Unauthorized", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = ModelApiResponse.class) })
    @GetMapping(
        value = "/clients",
        produces = { "application/json" }
    )
    default ResponseEntity<List<Client>> getAllClient() {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"owner\" : \"mateuslima90@gmail.com\", \"description\" : \"User responsible to create bulk crm tasks\", \"id\" : \"121dasda212e12dsawd3\", \"team\" : \"APi Automation Team\", \"username\" : \"agLAl0hgqNKwp9APtAW6\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * GET /clients/{clientId} : Search Client by Id
     * Return a specific client
     *
     * @param clientId ID of pet to fetch (required)
     * @return A JSON array of clients (status code 200)
     *         or Not Found (status code 404)
     *         or Internal Server Error (status code 500)
     */
    @ApiOperation(value = "Search Client by Id", nickname = "getSingleClient", notes = "Return a specific client", response = Client.class, authorizations = {
        
        @Authorization(value = "BearerAuth")
         }, tags={ "clients", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A JSON array of clients", response = Client.class),
        @ApiResponse(code = 404, message = "Not Found", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = ModelApiResponse.class) })
    @GetMapping(
        value = "/clients/{clientId}",
        produces = { "application/json" }
    )
    default ResponseEntity<Client> getSingleClient(@ApiParam(value = "ID of pet to fetch",required=true) @PathVariable("clientId") String clientId) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"owner\" : \"mateuslima90@gmail.com\", \"description\" : \"User responsible to create bulk crm tasks\", \"id\" : \"121dasda212e12dsawd3\", \"team\" : \"APi Automation Team\", \"username\" : \"agLAl0hgqNKwp9APtAW6\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    /**
     * PUT /clients/{clientId} : Update Client by Id
     * Update a specific client
     *
     * @param clientId ID of pet to fetch (required)
     * @param inlineObject1  (required)
     * @return A JSON array of clients (status code 200)
     *         or Invalid Payload (status code 400)
     *         or Not Found (status code 404)
     *         or Client already exists (status code 409)
     *         or Internal Server Error (status code 500)
     */
    @ApiOperation(value = "Update Client by Id", nickname = "updateSingleClient", notes = "Update a specific client", response = Client.class, authorizations = {
        
        @Authorization(value = "BearerAuth")
         }, tags={ "clients", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "A JSON array of clients", response = Client.class),
        @ApiResponse(code = 400, message = "Invalid Payload", response = ModelApiResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = ModelApiResponse.class),
        @ApiResponse(code = 409, message = "Client already exists", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = ModelApiResponse.class) })
    @PutMapping(
        value = "/clients/{clientId}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<Client> updateSingleClient(@ApiParam(value = "ID of pet to fetch",required=true) @PathVariable("clientId") String clientId,@ApiParam(value = "" ,required=true )  @Valid @RequestBody InlineObject1 inlineObject1) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"owner\" : \"mateuslima90@gmail.com\", \"description\" : \"User responsible to create bulk crm tasks\", \"id\" : \"121dasda212e12dsawd3\", \"team\" : \"APi Automation Team\", \"username\" : \"agLAl0hgqNKwp9APtAW6\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}
