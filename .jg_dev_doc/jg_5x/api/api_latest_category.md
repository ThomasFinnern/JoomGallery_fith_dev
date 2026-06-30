### JG latest category (v1/joomgallery/ : joomla standard parameter)

The idea is to access the latest category ID before uploading the image to this 'parent' id   

<details>
 <summary><code>GET v1/joomgallery/latestcategory</code> <code><b>/</b></code> <code>(writes parameters into selected image)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  |  ```json { ... "data": {"type": "categories","id": "5","attributes": {"parent_id": 1,"level": 1,"lft": 7,"rgt": 10,"alias": "jg2","id": 5,"asset_id": 108,"asset_id_image": 0,"path": "jg2","title": "API 06","description": "","published": 1, .... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/latestcategory" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/latestcategory
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:
> ```
</details>

