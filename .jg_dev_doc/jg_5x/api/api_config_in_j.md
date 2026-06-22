### JG config joomla part (v1/joomgallery/config_in_j : joomla standard parameter)

<details>
<summary><code>GET v1/joomgallery/config_in_j</code> <code><b>/</b></code> <code>(gets config part by joomla standard. Not used by JG as such)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json { "inheritance_config": "default", "save_history": "0", "history_limit": 5 }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/config_in_j" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
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
