
<center>JoomGallery API Documentation</center>
<center>Version 2026.06.22</center><br>

## Joomgallery API (ready parts)

[//]: # (!INCLUDE "tableOfContent.md")
[//]: # (---)

### JG installed version (v1/joomgallery/version)

<details>
 <summary><code>GET v1/joomgallery/version</code> <code><b>/</b></code> <code>(gets 'version' number and 'creationDate' from manifest data of JG component)</code></summary>

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
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/version
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: ...
> ```
</details>

<details>
 <summary><code>PATCH v1/joomgallery/version</code> <code><b>/</b></code> <code>(writes 'version' number and 'creationDate' into manifest data of JG component)</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | version      |  %     | string   | like "4.4.0" or "4.3.0.1" | 
> | creationDate |  %     | string   | format "yyyy-mm-dd" example "2026-04-01"  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`        | ```json { ... "version": "4.3.1.2", "creationDate": "2026-01-01" }``` |

##### Example cURL

> ```shell
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

---

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

---

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
 <summary><code>POST v1/joomgallery/configs</code> <code><b>/</b></code> <code>(creates a new configuration set with data)</code></summary>

##### Parameters

> | name                                      |  type     | data type    | description                                                           |
> |-------------------------------------------|-----------|--------------|-----------------------------------------------------------------------|
> | all/selection of configuration parameters |  %     | Json, string |  | 


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
 <summary><code>PATCH v1/joomgallery/configs/:id</code> <code><b>/</b></code> <code>(writes parameters into selected configuration set)</code></summary>

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
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/configs/1" -d "{\"\"jg_userspace\":1\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
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
>    "jg_userspace": 1,
> }
> ```
</details>

<details>
 <summary><code>DELETE v1/joomgallery/configs/:id</code> <code><b>/</b></code> <code>(deletes selected JG configuration set)</code></summary>

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

---

### JG categories (v1/joomgallery/categories: JG table)

Attention: Manipulating category data can lead to inconsistent data. The changes apply to the 
database item and is not connected to the parent category or child images and does not change 
any image file data / image path.
The data integrity between category and image must be ensured by the data from the API calls themselves.

Attention: Category ID '0' and '1' are invalid as they are needed fo the binary tree

<details>
 <summary><code>GET v1/joomgallery/categories</code> <code><b>/</b></code> <code>(gets 'categories' number and 'creationDate' from manifest data of JG component)</code></summary>

##### Parameters

> None

##### Responses

> | http code  | content-type                      | response                                                                                                                                                                                                                                                |
> |------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`      | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "categories","id": "5","attributes": {"parent_id": 1,"level": 1,"lft": 7,"rgt": 10,"alias": "jg2","id": 5,"asset_id": 108,"asset_id_image": 0,"path": "jg2","title": "jg2 1","description": "","published": 1, .... }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>GET v1/joomgallery/categories/:id</code> <code><b>/</b></code> <code>(gets selected category variables kept in JGs own table)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type                      | response                                                                                                                                                                            |
> |-----------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`     | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "categories","id": "5","attributes": {"parent_id": 1,"level": 1,"lft": 7,"rgt": 10,"alias": "jg2","id": 5,"asset_id": 108,"asset_id_image": 0,"path": "jg2","title": "jg2 1","description": "","published": 1, .... }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>POST v1/joomgallery/categories</code> <code><b>/</b></code> <code>(creates a new category with data)</code></summary>

##### Parameters

> | name                                 | type | data type    | description                                                           |
> |--------------------------------------|------|--------------|-----------------------------------------------------------------------|
> | all/selection of category parameters | %    | Json, string |  | 


##### Responses

> | http code     | content-type                      | response                                                                                                                                                                             |
> |---------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "categories","id": "5","attributes": {"parent_id": 1,"level": 1,"lft": 7,"rgt": 10,"alias": "jg2","id": 5,"asset_id": 108,"asset_id_image": 0,"path": "jg2","title": "jg2 1","description": "","published": 1, .... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X POST "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories" -d "{\"parent_id\":1,\"title\":\"API Base\",\"modified_time\":\"2026-03-31 10:53:41\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> POST http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>    "parent_id": 1,
>    "title": "API Base",
>    "modified_time": "2026-03-31 10:53:41"
> }
> ```
</details>

<details>
 <summary><code>PATCH v1/joomgallery/categories/:id</code> <code><b>/</b></code> <code>(writes parameters into selected category</code></summary>

##### Parameters

> | name                                 |  type | data type    | description |
> |--------------------------------------|-------|--------------|-------------|
> | all/selection of category parameters |  %    | Json, string |             |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json;charset=UTF-8`  |  ```json { ... "data": {"type": "categories","id": "5","attributes": {"parent_id": 1,"level": 1,"lft": 7,"rgt": 10,"alias": "jg2","id": 5,"asset_id": 108,"asset_id_image": 0,"path": "jg2","title": "API 06","description": "","published": 1, .... }``` |

##### Example cURL

> ```shell
> curl -s --show-error  -X PATCH "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5" -d "{\"title\":\"API 06\"}"  -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> PATCH http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5
/> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> 
> {
>    "title": "API 06",
> }
> ```
</details>

<details>
 <summary><code>DELETE v1/joomgallery/categories/:id</code> <code><b>/</b></code> <code>(deletes selected category)</code></summary>

##### Parameters

> None

##### Responses

> None

##### Example cURL

> ```shell
> curl -s --show-error  -X DELETE "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> DELETE http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/categories/5
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> ```
</details>

---

### JG images (v1/joomgallery/images: JG table)

Attention: Manipulating image data can lead to inconsistent data. The changes apply to the database item 
and is not connected to the parent category and does not change any image file data / image path.
The data integrity between category and image must be ensured by the data from the API calls themselves.

Attention: The list of all images show less parameters per image than the get of a single image. 
The single image show all table parameters 

Attention: Changing the alias of an image will lead to move the image file which may not be successful. So it should be avoided

Attention: Deleting an image does delete the table item but not the images 'behind' (original, display, thumb, ...) 

<details>
 <summary><code>GET v1/joomgallery/images</code> <code><b>/</b></code> <code>(gets 'images' number and 'creationDate' from manifest data of JG component)</code></summary>

##### Parameters

> None

##### Responses

> | http code  | content-type                      | response                                                                                                                                               |
> |------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`      | `application/json;charset=UTF-8`  | ```json { ... "data": [{"type": "images","id": "1","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","published": 1, .... }``` |
##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>GET v1/joomgallery/images/:id</code> <code><b>/</b></code> <code>(gets selected image variables kept in JGs own table)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type                      | response                                                                                                                                                                            |
> |-----------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
> | `200`      | `application/json;charset=UTF-8`  | ```json { ... "data": {"type": "images","id": "1","attributes": {"id": 1,"catid": 3,"alias": "caffee-1","title": "caffee-1","description": "","author": "","date": "2010-06-17 12:41:21","imgmetadata": "{\"exif\":{\"IFD0\":{\"Make\":\"Canon\",\"Model\":\"Canon PowerShot A640\",\"Orientation\":1, .... }``` |

##### Example CURL

> ```batch
> curl -s --show-error  -X GET "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/1" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> GET http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/1
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token:  ...
> ```
</details>

<details>
 <summary><code>DELETE v1/joomgallery/images/:id</code> <code><b>/</b></code> <code>(deletes selected image)</code></summary>

##### Parameters

> None

##### Responses

> None

##### Example cURL

> ```shell
> curl -s --show-error  -X DELETE "http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/11" -H "Content-Type: application/json" -H "X-Joomla-Token:  ..."
> ```

##### Example http

> ```http
> ###
> DELETE http://127.0.0.1/joomgallery5x_dev/api/index.php/v1/joomgallery/images/11
> Accept: application/vnd.api+json
> Content-Type: application/json
> X-Joomla-Token: 
> ```
</details>


---

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

---

### JG upload image (v1/joomgallery/)

<details>
 <summary><code>POST v1/joomgallery/upload_image_file</code> <code><b>/</b></code> <code>(Uploads given image data and creates an image table item with given data)</code></summary>

The file must be given as base64 coded string 

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

