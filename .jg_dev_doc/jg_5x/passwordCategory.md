# Facts about the password handling for edit category

## User edit of category 
A user may set a password to a category and save it. 
On next visit the password is displayed with '*****' and a modify button next to it.
With the modify button clicked the passord may be changed. The actual password can not be seen as it is saved "hashed and salted".
 
A further control is added below. It enables "Reset password" 
with a yes/no flag on next save.

## Site view

On the site password protected categories images will not be shown. 
A user may activate the view when entering the passowrd 


## Admin edit user category

An admin will see the same as the owner of the category (see above). He can set a new passord with using the modify button



# Code facts 

Password visible is prevented by using "Password Form Field" with lock if password is set


## variables

* table:pw_protected  ($this->item->pw_protected)
  * Set when password is set and it is not in $unlockedCats
  * On set in site category HtmlView: images, parent are not loaded ()
  * On set in site category display: unlock enabled
  * 
* data:password
  * In category model the passord is set to '' as we do not want to display the hashed value
* is_password 
  * It is set in category model to yes or no. 
  * It is in category model used to 'lock' / 'unlock' the password control

# ToDo:
* "category model used to 'lock' / 'unlock' the password control" ==> Shoudn't be this donne in HtmlView ?
* ??? On save category model getForm is loaded () with lock/unlock part before save is done
   Why getForm ?
* 


### Changes 2025.09.30

1) Password was set to '' internally on loading on 'no admin rights' or 'actual user is not owner (created_by) of the category
    ```if(!$comp->getAccess()->checkACL('admin') || $user->id != $this->created_by)```
    Saving on empty passowrd may/has lead to unintentionally deleting of password.

2) 




On password is set show '***...' control and modify button. Edit is only possible after click on modify
On password is empty show only empty password  

The switch is lock=true for version '***..' and modify button in parameter definition


Plan B: 
Always show '****' and modify button. 



New 2025.09.30

### Old:
* When the creator of the category is not the actual user editing then the existing password appears empty without reset option CategoryTable
* Empty passowrd did overwrite existing password 





## misbehaviour 2025.09.15 editing category

* user of category: saving different alias with set password but empty control will reset passord on save
* user of category: accidental click into password (and going out) will reset passord on save

* admin edit category: saving changed published with set password but empty control will reset passord on save 
* admin edit category: accidental click into password (and going out) will reset passord on save







