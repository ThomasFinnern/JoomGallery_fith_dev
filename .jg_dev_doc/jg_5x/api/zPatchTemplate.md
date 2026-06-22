<details>
 <summary><code>PATCH joomgallery/version</code> <code><b>/</b></code> <code>(writes 'version' number and 'creationDate' into manifest data of JG component)</code></summary>

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

