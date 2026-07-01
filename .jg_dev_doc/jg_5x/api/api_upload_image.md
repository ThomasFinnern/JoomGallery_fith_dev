### JG upload image (v1/joomgallery/)

<details>
 <summary><code>POST v1/joomgallery/upload_image_file</code> <code><b>/</b></code> <code>(Uploads given image data and creates an image table item with given data)</code></summary>

The file must be given as base64 coded string 

Attention: Using the same image name twice for the same category will fail actually 

##### Parameters

> | name                              |  type | data type    | description |
> |-----------------------------------|-------|--------------|-------------|
> | all/selection of image parameters |  %    | Json, string |             |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  |  ```json { ... "data": {"type": "image","id": "1","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","description": "","author": "","date": "2010-06-17 12:41:21","imgmetadata": "{\"exif\":{\"IFD0\":{\"Make\":\"Canon\",\"Model\":\"Canon PowerShot A640\",\"Orientation\":1, .... }``` |

##### Example cURL

The image is kept in a base64 converted file: 2016-11-07_00012.jpg.base64 

Actually the command line is missing the image parameters. Please update (patch) the created image table item (id) with a next command

> ```shell
> curl -s --show-error  -X POST "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/upload_image_file/1" -F content=@\"2016-11-07_00012.jpg.base64\"  -H "Content-Type: multipart/mixed" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> POST http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/upload_image_file
/> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:
>
> {  
>    "catid": 3,
>    "description": "<p>Brown macchiato glas with nice figure in cream (3.B)<\/p>",
>    "title": "API coffee macchiato 2014-12-29_00005",
>    "filename": "API coffee macchiato.jpg",
>    "filesystem": "local-images",
>    "modified_time": "2026-04-01 10:53:41",
>    "date": "2014-12-28 14:43:11",
>    "approved": 1,
>    "access": 1,
>    "published": 1,
>    "author": "Thomas API",
>    "content": "\/9j\/4f\/+RXhpZgAASUkqAAgAAAALAA8BAgASAAAAlAAAABABAgALAAAAqAAAABI ...
>     ....
> }
> ```
</details>

<details>
 <summary><code>PATCH v1/joomgallery/upload_image_file/:id</code> <code><b>/</b></code> <code>(Uploads given image data and overwrites an image table item with given data)</code></summary>

The file must be given as base64 coded string
Other parameters may be used too. See patch command above

##### Parameters

> | name                              |  type | data type    | description |
> |-----------------------------------|-------|--------------|-------------|
> | all/selection of image parameters |  %    | Json, string |             |

##### Responses

> | http code     | content-type                      | response                                                                                                                                                                                                                                                                                                         |
> |---------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "image","id": "24","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","description": "","author": "","date": "2010-06-17 12:41:21","imgmetadata": "{\"exif\":{\"IFD0\":{\"Make\":\"Canon\",\"Model\":\"Canon PowerShot A640\",\"Orientation\":1, .... }``` |

##### Example cURL

The image is kept in a base64 converted file: 2016-11-07_00012.jpg.base64

Actually the command line is missing the image parameters. Please update (patch) the created image table item (id) with a next command

> ```shell
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/upload_image_file/24" -F content=@\"2016-11-07_00012.jpg.base64\"  -H "Content-Type: multipart/mixed" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> PATCH http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/upload_image_file/24
/> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:
>
> {  
>    "content": "\/9j\/4f\/+RXhpZgAASUkqAAgAAAALAA8BAgASAAAAlAAAABABAgALAAAAqAAAABI ...
>     ....
> }
> ```
</details>

