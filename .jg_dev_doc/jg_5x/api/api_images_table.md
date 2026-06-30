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


