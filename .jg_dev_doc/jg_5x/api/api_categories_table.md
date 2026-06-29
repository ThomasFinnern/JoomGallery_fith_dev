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

