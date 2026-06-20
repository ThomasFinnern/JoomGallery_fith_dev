## Joomgallery API (ready parts)

#### JG installed version

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>(gets 'version' number and 'creationDate' from manifest data of JG component)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json { ... "version": "4.3.1.2", "creationDate": "2026-01-01" }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/version" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> PATCH http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/version
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>     "version": "4.3.1.2",
>     "creationDate": "2026-01-01"
> }
> ```
</details>

<details>
 <summary><code>PATCH</code> <code><b>/</b></code> <code>(writes 'version' number and 'creationDate' into manifest data of JG component)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | version      |  %     | string   | like "4.4.0" or "4.3.0.1" | 
> | creationDate |  %     | string   | format "yyyy-mm-dd" examplöe "2026-04-01"  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json { ... "version": "4.3.1.2", "creationDate": "2026-01-01" }``` |

##### Example cURL

> ```javascript
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/version" -d "{\"version\":\"4.3.1.2\",\"creationDate\":\"2026-01-01\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/version
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> ```
</details>


