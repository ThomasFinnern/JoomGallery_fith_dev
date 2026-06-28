### JG config JoomGallery part (v1/joomgallery/configs: JG table)
JG keeps multiple configuration sets in a JG table different to J! style. Therefore, the route begins with "v1/joomgallery/configs/**set number**".   
Attention: Please note the 's' in .../config**s**/...   

<details>
 <summary><code>GET v1/joomgallery/configs</code> <code><b>/</b></code> <code>(lists all JG configuration sets with variables from JGs own table)</code></summary>
  
##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                              |
> |---------------|-----------------------------------|-----------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  | ```json {"type": "configs", "id": "1", "attributes": { "id": 1, "asset_id": 105, "title": "Global Configuration", ...}``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
###
GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>GET v1/joomgallery/configs/:id</code> <code><b>/</b></code> <code>(gets variables of selected JG configuration set)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                                                                                    |
> |---------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json {"type": "configs", "id": "1", "attributes": { "id": 1, "asset_id": 105, "title": "Global Configuration", ... }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/1" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/1
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>POST joomgallery/configs</code> <code><b>/</b></code> <code>(creates new configuration set with data)</code></summary>

##### Parameters

> | name                  |  type     | data type    | description                                                           |
> |-----------------------|-----------|--------------|-----------------------------------------------------------------------|
> | all config parameters |  %     | Json, string |  | 


##### Responses

> | http code     | content-type                      | response                                                                                                                   |
> |---------------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  | ```json {"type": "configs", "id": "2", "attributes": { "id": 1, "asset_id": 105, "title": "Global Configuration", ... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X POST "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs" -d "{\"asset_id\":234,\"title\":\"Global Configuration 2\",\"note\":\"\",\"group_id\":1,\"published\":1,\"ordering\":0,\"checked_out\":0, ...}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> POST http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>    "asset_id": 234,
>    "title": "Global Configuration 2",
>    "note": "",
>    "group_id": 1,
>    "published": 1,
>    ...
> }
> ```

</details>

<details>
 <summary><code>PATCH joomgallery/configs/:id</code> <code><b>/</b></code> <code>(writes parameters into selected configuration set)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | configs      |  %     | string   | like "4.4.0" or "4.3.0.1" | 
> | creationDate |  %     | string   | format "yyyy-mm-dd" example "2026-04-01"  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json { ... "configs": "4.3.1.2", "creationDate": "2026-01-01" }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/1/configs" -d "{\"\"jg_userspace\":1\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> PATCH http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/1
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>     "jg_userspace": 1,
> }
> ```
</details>

<details>
 <summary><code>DELETE joomgallery/configs/:id</code> <code><b>/</b></code> <code>(deletes selected JG configuration set)</code></summary>

##### Parameters

> None

##### Responses

> None

##### Example cURL

> ```shell
> curl -s --show-error  -X DELETE  "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/2" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> DELETE http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/2
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> ```
</details>
