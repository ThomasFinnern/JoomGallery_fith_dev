
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

Both views can be reached from each other and in the end all views are reachable from both start points

## User Upload

This view directs to the upload page.  
It is intended for user who concentrate more on 'lots of uploads' and less on 'adminstration' and adding properties. There are links to the user panel view and to categories/galleries list and images list. 

For example: Sport club with a lot of events want to upload a lot of images but may not need to care for each image description and ... 

## User panel 

This view shows a general overview. It features the last uploaded images or last created categories/galleries. There a links to the upload view, categories list and images list .....
It is intended for user who care about each uploaded image properties and want to order or exchange items a lot.

For example: Photo/art club, wWhere users care about the order/content of categories/galleries and may toy around with the settings ...



## Setup the user

The user needs to be logged in, own a category/gallery and is assigned to a user group with certain rights

1) Create a user group for userUploads
2) Change the 

For each new user do following
1) Create a new user and assign the group


### 1) Create user group "JG user upload"

Create a user group. Specify a suitable name. Standard is "JG user upload". Assign "manager" as parent. See following order after save. 

![User group order](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/d48f878ac445ed786f4896f6fbb345826a4e2ca8/.jg_dev_doc/jg_4x/images/site.UserUpload/user.upload.group.order.en.png "User group order")

### 2) Permissions in global Joom gallery configuration

Attention: Please use the global and not local configuration.

Path in Backend: System -> Global configuration -> JoomGallery. Here use tab "Permissions"

![List of system permissions](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/d48f878ac445ed786f4896f6fbb345826a4e2ca8/.jg_dev_doc/jg_4x/images/site.UserUpload/system.permissions.en.png "List of system permissions")

Assign properties in red/green like in the picture above

### 2B) Check local permissions for specified group name

Path in Backend: Joom gallery control panel -> "Configuration sets" button -> link Global configuration -> Tab "permissions" -> JoomGallery -> button "Permissions" -> link"

It will look like below

![List of joom gallery permissions](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/d48f878ac445ed786f4896f6fbb345826a4e2ca8/.jg_dev_doc/jg_4x/images/site.UserUpload/jg.permissions.en.png "List of joom gallery permissions")

### 3A) Create new user and assign new group 

For each next user create a Joomla user and assign the above group. Use your specified group name or 'JG User Upload'. 

### 3B) Create new category and assign it to the user

The user needs a initial category/gallery to build on.
1) Create the category  
2) Assign it to the user: Edit the category -> Tab "Publishing" -> property owner -> click on icon on the right side

## User login

The user needs to be logged in, own a category/gallery and is assigned to a user group with certain rights


## User login

To be logged in the user needs a assigned catagory/gallery (is owner) and is assigned to a user group with certain rights

### Create site menu for users

According to the expected user type create menu item "User upload" or "User panel" or 
both

### Enable login module in the front view

Path: Content -> site modules

Here Loginform (Type login) exists or it must be created.
Enable the Loginform.

Recommendation: Restrict the appearance to the user... pages 
Inside assign a position and select the pages it shall appear

### Page texts that indicate that the upload cannot be displayed

#### Not logged in

![Not logged in](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/NotLoggedIn.en.png?raw=true  "Not logged in")

#### Logged in but missing rights or root category/gallery is not existing

![Logged in, no root gallery, no rights](https://github.com/ThomasFinnern/JoomGallery_fith_dev/blob/main/.jg_dev_doc/jg_4x/images/site.UserUpload/loggedInNoGalleryNorights.en.png?raw=true "Logged in, no root gallery, no rights")






### Settings menu "User upload"

??? ToDo:

### Settings menu "User panel"

??? ToDo:









