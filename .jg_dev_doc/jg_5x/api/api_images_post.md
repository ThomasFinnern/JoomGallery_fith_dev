Keeps the post part until post is finihed
Actually it is not working 2026.06.29

========================================================================================================================================================
<details>
 <summary><code>POST v1/joomgallery/images</code> <code><b>/</b></code> <code>(creates a new image table item with data. It does not create any image though)</code></summary>


##### Parameters

> | name                                 | type | data type    | description                                                           |
> |--------------------------------------|------|--------------|-----------------------------------------------------------------------|
> | all/selection of image parameters | %    | Json, string |  | 


##### Responses

> | http code     | content-type                      | response                                                                                                                                                                             |
> |---------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`      | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "images","id": "1","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","description": "","author": "","date": "2010-06-17 12:41:21","imgmetadata": "{\"exif\":{\"IFD0\":{\"Make\":\"Canon\",\"Model\":\"Canon PowerShot A640\",\"Orientation\":1, .... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X POST "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images" -d "{\"catid\":8,\"description\":\"API Base\",\"title\":\"API image for cat 08\\/01\",\"filename\":\"API_cat_06_test.jpg\",\"modified_time\":\"2026-03-31 10:53:41\",\"published\":1}" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> POST http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>     "catid": 8,
>     "description": "API Base",
>     "title": "API image for cat 08\/01",
>     "filename": "API_cat_06_test.jpg",
>     "modified_time": "2026-03-31 10:53:41",
>     "published": 1
> }
> ```
</details>
