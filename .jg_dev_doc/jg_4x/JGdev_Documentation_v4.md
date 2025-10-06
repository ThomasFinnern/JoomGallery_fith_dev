
# <center>Documentation parts for JoomGallery V4 by developers</center>
## **<center>Descriptions of user interfaces of code additions (parts)</center>**

## <center>Thomas Finnern</center>

<center>Version 2025.04.30</center><br>

This documentation is a work in progress and will be updated regularly. 
It is the collection of all markdown files from github
[Project documentation Repository](https://github.com/ThomasFinnern/JoomGallery_fith_dev/tree/main/.jg_dev_doc/jg_4x) 

Actually it contains updated added to JommGallery 4 by Thomas Finnern
 
There may be an updated version of this document. 
We may update it once in a while on new features. 

We are sorry for "some" ugly parts of the style. This results from the limitation of writing in fast "Markdown syntax".

**Lets get started**

# Frontend user uplod / User Panel 

Joom gallery supports two main views (menues) to support users to upload images, create categories / galleries and edit the images ..

* User Upload
* User Panel

There are secondary possible direct menu calls

* User categories
* User images
These can be use but are only there for completeness

All user views above can be reached from Menu selection 'User Upload' 'User Panel'

## User Upload view

This view directs to the upload page.  
It is intended for user who concentrate more on 'lots of uploads' and less on 'adminstration' and adding properties. There are links to the user panel view and to categories/galleries list and images list. 

For example: Sport club with a lot of events want to upload a lot of images but may not need to care for each image description and ... 


## User panel view

This view shows a general overview. It features the last uploaded images and/or last created categories/galleries. There a links to the upload view, categories list and images list .....
It is intended for user who care about each uploaded image properties and want to order or exchange items a lot.

For example: Photo/art club, wWhere users care about the order/content of categories/galleries and may toy around with the settings ...


## Setup the user

Old: The user needs to be logged in, own a category/gallery and is assigned to a user group with certain rights (May be reactivated though)

The user needs to be logged in, and is assigned to a user group with certain rights

1) Create a user group for userUploads
2) Change the access see below

For each new user do following
1) Create a new user and assign the group

### 1) Create user group "JG user upload"

Create a user group. Here 'JG_user_upload' is used as name. Specify a suitable name. Standard is "JG user upload". Assign "manager" as parent (1). It will appear parallel to administrator. 
					
![User group order](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/user.upload.group.order.en.png?raw=true"  "User group order")

### 2) Set User permissions for upload (login)

### 2A) Find permissions in global JoomGallery configuration

Attention: Please use the global and not local configuration.

Path in Backend: System -> Global configuration -> JoomGallery. Here use tab "Permissions"

![List of system permissions](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/system.permissions.en.png?raw=true"  "List of system permissions")

Assign properties in red/green like in the picture above

This may change in the future as Access in backend may be fixed/improved


### 2B) Assign local permissions for specified group name

Path in Backend: Joom gallery control panel -> "Configuration sets" button -> link Global configuration -> Tab "permissions" -> JoomGallery -> button "Permissions" -> link"

It shall look like below. In fure not all green settings should be needed

![List of joom gallery permissions](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/jg.permissions.en.png?raw=true"  "List of joom gallery permissions")

### 3A) Create new user and assign new group 

For each next user create a Joomla user and assign the above group. Use your specified group name or 'JG User Upload'. 

### 3B) ~~Create new category and assign it to the user~~

May be reactivated 
~~The user needs a initial category/gallery to build on.~~
~~1) Create the category  ~~
~~2) Assign it to the user: Edit the category -> Tab "Publishing" -> property owner -> click ~~on icon on the right side~~
## User Upload

### User Upload Page 
![Upload form (complete)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userUpload.full.en.png?raw=true  "")
Buttons order changed !

### Fast track to upload an image 
(1) Select the "category" the image should belong to  
(2) Select the title   
(3) Drag images into are here or   
(4) Browse with a file selector  
to fill the images list like below
(5) Click on "Upload files" to start the upload process (See below)

![Image selection: (dragged images)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/imageSelection.dragged.en.png?raw=true  "")

### Image selection view

Posibilities in Image selection view:  
(1) Cancel: Remove all images  
(2) "+": Add more files   
(3) Edit or delete a file   
(4) Drop more images into this area  
(5) Start uploading the displayed images   
(6) Debug Mode: On Yes (must be dark) extra messages tell about the state of the upload process

### Image edit view

![Image selection: Edit image property](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/imageSelection.imgEdit.en.png?raw=true  "")

Posibilities in Image edit view:  
(1) Cancel: reset changes made locally  
(2) Change title, Description, Author of the image  
(3) Save the changes   
(4) Cancel: go back  

### Upload options 

![Upload options](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userUploadForm.options.en.png?raw=true  "")

Posibilities in Upload options:  
(1) Select the "category" the image should belong to  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The selection is limited to the categories of the logged in user.
(2) Select the title   
(3) Starts numbering images with the given value   
(4) Author may be different from uploader anme  
(5) Should the images be visible direct after upload finished   
(6) Which group should be able to see the images
(7) Add a description to each image  
(8) Change the Editor input form from "writer/word" to HTML text view and back   

### Upload size limits (php, ...)

![Maximum Limits (php, ...)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/maxLimit.en.png?raw=true  "")

The maximum size of an image in the upload process is limited by several factors.

Posibilities in Upload size limits (php, ...):  
(1) Title which is always displayed. Tells the expected maximum from following sources  
(2) Maximum upload size: Set in php.ini  
(3) Maximum post size: Set in php.ini   
(4) Maximum script limit: Set in php.ini (memory a PHP script can use)  
(5) Joomla media imit: Set in joomla configuration 
(6) JoomGallery media config Limit: Set in joomgallery configuration   


D:\Entwickl\2025\_gitHub\JoomGallery_fith_dev\.jg_dev_doc\jg_4x\images\site.UserUpload\imageSelection.uploadSuccess.png

### Upload successful

![Image selection: Upload failed](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/imageSelection.uploadSuccess.en.png?raw=true  "")


### Upload failed

![Image selection: Upload failed](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/imageSelection.uploadFailed.en.png?raw=true  "")

### Forward links

![User upload links](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userUpload.forwardLinks.en.png?raw=true  "")

The button name indicates where the link on the button leads


## User panel

The user user panel has several section which may be switched on or off in menu options


#### Otions in user panel menu definitions

* Display user limits: Display an area where actual count of images/categories are matched with config settings
* Display user information: Display an area with actual count of images/categories. Only visible when user limits is off
* Display latest user categories: Display an area with latest user categories
* Number of latest categories: Number of latest user categories displayed in the list
* Display latest images: Display an area with latest user images 
* Number of latest images:  Number of latest user images displayed in the list
* Display user images as manageable: Display user images as manageable like in images view. List length defined by joomla standard length



###  Display latest user categories


![User panel(part XXX )](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/upload.forwardLinks.en.png?raw=true  "")
Buttons order changed !

###  Display latest images


![User panel(complete)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/upload.forwardLinks.en.png?raw=true  "")
Buttons order changed !

###  Display user images as manageable


![User panel(complete)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/upload.forwardLinks.en.png?raw=true  "")
Buttons order changed !


###  Display user limits


![User panel(complete)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/upload.forwardLinks.en.png?raw=true  "")
Buttons order changed !

###  Display user information






### Forward links

![User panel links](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userPanel.forwardLinks.en.png?raw=true  "")

The button name indicates where the link on the button leads


## User Categories 

### User Categories Page 
![User Categories (complete/parts)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategories.full.en.png?raw=true  "")












### Forward links

![User categories](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategories.forwardLinks.en.png?raw=true  "")

The button name indicates where the link on the button leads




## User Upload

### User Category Edit Page 

![User Category Edit](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEditForm.en.png?raw=true  "")

(1) Select the title   
(2) Alias will be generated automatically  
(3) Parent Category  
The selection is limited to the categories of the logged in user.  
**Attention:** The "root" category of the user displays itself as parent  
(4) Should the images be visible direct after upload finished   
(5) Which group should be able to see the images
(6) Password
(7) Add a description to the category

### User Category Edit Options 

![User Category Edit Options](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Options.en.png?raw=true  "")


### User Category Edit Publishing 

![User Category Edit Publishing](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Publishing.en.png?raw=true  "")


### User Category Edit Parameters 

![User Category Edit Parameters](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Parameters.en.png?raw=true  "")



## User Images 

### User Images Page 
![User Images (complete)](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategories.full.en.png?raw=true  "")







### Forward links

![User categories](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userImages.forwardLinks.en.png?raw=true  "")

The button name indicates where the link on the button leads


## User Upload

### User Category Edit Page 

![User Category Edit](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEditForm.en.png?raw=true  "")

(1) Select the title   
(2) Alias will be generated automatically  
(3) Parent Category  
The selection is limited to the categories of the logged in user.  
**Attention:** The "root" category of the user displays itself as parent  
(4) Should the images be visible direct after upload finished   
(5) Which group should be able to see the images
(6) Password
(7) Add a description to the category

### User Category Edit Options 

![User Category Edit Options](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Options.en.png?raw=true  "")


### User Category Edit Publishing 

![User Category Edit Publishing](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Publishing.en.png?raw=true  "")


### User Category Edit Parameters 

![User Category Edit Parameters](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/userCategoryEdit.Parameters.en.png?raw=true  "")














