Keeps the patch part until post is finihed
Actually it is not working 2026.06.29

========================================================================================================================================================
<details>
 <summary><code>PATCH v1/joomgallery/images/:id</code> <code><b>/</b></code> <code>(writes parameters into selected image</code></summary>

##### Parameters

> | name                              |  type | data type    | description |
> |-----------------------------------|-------|--------------|-------------|
> | all/selection of image parameters |  %    | Json, string |             |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  |  ```json { ... "data": {"type": "images","id": "1","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","description": "","author": "","date": "2010-06-17 12:41:21","imgmetadata": "{\"exif\":{\"IFD0\":{\"Make\":\"Canon\",\"Model\":\"Canon PowerShot A640\",\"Orientation\":1, .... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/1" -d "{\"title\":\"API cat 07 patched\",\"alias\":\"\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> PATCH http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/1
/> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:
>
> {
>     "title": "API cat 07 patched",
>     "alias": "",
> }
> ```
</details>

