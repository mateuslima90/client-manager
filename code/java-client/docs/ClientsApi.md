# ClientsApi

All URIs are relative to *http://localhost:8080/api/v1/idp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSingleClient**](ClientsApi.md#createSingleClient) | **POST** /client | Create a client
[**deleteSingleClient**](ClientsApi.md#deleteSingleClient) | **DELETE** /client/{clientId} | Delete Client by Id
[**getAllClient**](ClientsApi.md#getAllClient) | **GET** /clients | Return a list of clients
[**getSingleClient**](ClientsApi.md#getSingleClient) | **GET** /client/{clientId} | Search Client by Id
[**updateSingleClient**](ClientsApi.md#updateSingleClient) | **PUT** /client/{clientId} | Update Client by Id


<a name="createSingleClient"></a>
# **createSingleClient**
> Client createSingleClient(inlineObject)

Create a client

Return a specific client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClientsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080/api/v1/idp");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ClientsApi apiInstance = new ClientsApi(defaultClient);
    InlineObject inlineObject = new InlineObject(); // InlineObject | 
    try {
      Client result = apiInstance.createSingleClient(inlineObject);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClientsApi#createSingleClient");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  |

### Return type

[**Client**](Client.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A JSON array of clients |  -  |
**400** | Invalid Payload |  -  |
**409** | Client already exists |  -  |
**500** | Internal Server Error |  -  |

<a name="deleteSingleClient"></a>
# **deleteSingleClient**
> Client deleteSingleClient(clientId)

Delete Client by Id

Delete a specific client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClientsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080/api/v1/idp");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ClientsApi apiInstance = new ClientsApi(defaultClient);
    String clientId = "clientId_example"; // String | ID of pet to fetch
    try {
      Client result = apiInstance.deleteSingleClient(clientId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClientsApi#deleteSingleClient");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| ID of pet to fetch |

### Return type

[**Client**](Client.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of clients |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

<a name="getAllClient"></a>
# **getAllClient**
> List&lt;Client&gt; getAllClient()

Return a list of clients

Return all clients from IDP Provider

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClientsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080/api/v1/idp");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ClientsApi apiInstance = new ClientsApi(defaultClient);
    try {
      List<Client> result = apiInstance.getAllClient();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClientsApi#getAllClient");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Client&gt;**](Client.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of clients |  -  |
**400** | Not Found |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

<a name="getSingleClient"></a>
# **getSingleClient**
> Client getSingleClient(clientId)

Search Client by Id

Return a specific client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClientsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080/api/v1/idp");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ClientsApi apiInstance = new ClientsApi(defaultClient);
    String clientId = "clientId_example"; // String | ID of pet to fetch
    try {
      Client result = apiInstance.getSingleClient(clientId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClientsApi#getSingleClient");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| ID of pet to fetch |

### Return type

[**Client**](Client.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of clients |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

<a name="updateSingleClient"></a>
# **updateSingleClient**
> Client updateSingleClient(clientId, inlineObject1)

Update Client by Id

Update a specific client

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClientsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080/api/v1/idp");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ClientsApi apiInstance = new ClientsApi(defaultClient);
    String clientId = "clientId_example"; // String | ID of pet to fetch
    InlineObject1 inlineObject1 = new InlineObject1(); // InlineObject1 | 
    try {
      Client result = apiInstance.updateSingleClient(clientId, inlineObject1);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClientsApi#updateSingleClient");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| ID of pet to fetch |
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  |

### Return type

[**Client**](Client.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON array of clients |  -  |
**400** | Invalid Payload |  -  |
**404** | Not Found |  -  |
**409** | Client already exists |  -  |
**500** | Internal Server Error |  -  |

