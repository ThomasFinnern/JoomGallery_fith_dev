# Links in list pages regarding router and return link

JG links in category and images lists were working. On pages with both lists the ids CBn were interfering and not starting the controller for publishing and other.

* Edit links are straight forward as checked in the display controller
* Links for delete, publish, ... need to apply the token somehow

Intention is to enable the user to handle item matching tasks like publish/unpublish ... in lists shown like categories/images
2025.09.08: Actually it is not possible for two list on same page in front end.

This is analyzed below

## Edit links
### Edit links are not checked for token ? yes they are ;-\)

It looks like a edit is possible with  
```http://127.0.0.1/joomgallery5x_dev/index.php?option=com_content&view=form&layout=edit&a_id=8&Itemid=502&catid=8```

In controller edit it is not checked 

Surprisingly JROOT\components\com_content\src\Controller\DisplayController.php:110 did error: 403 You are not permitted to use that link to directly access that page (#8).


ToDo: [ ] Check for edit cat/img on JG

### Edit link in article list 

Original Joomla site article edit link  
```href="/joomgallery5x_dev/index.php?option=com_content&amp;view=article&amp;id=8:test-2&amp;catid=8&amp;task=article.edit&amp;a_id=8&amp;return=aHR0cDovLzEyNy4wLjAuMS9qb29tZ2FsbGVyeTV4X2Rldi9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9Y2F0ZWdvcnkmaWQ9OCZJdGVtaWQ9NTAz&amp;Itemid=502" aria-describedby="editarticle-8"```

parts:
- id=8:test-2 => has alias additional
- task=article.edit
- a_id=8 => what is it used for ?
- aria-describedby="editarticle-8"
- Itemid=502" 

## Task links like "publish" "delete" ....

Following button definition will work on categories view but not in panel view where categories list is combinded with second images list. As long as only one list is shown it does work

button like "publish" "delete" not found in front end (site) lists on joomla. In edit of course

```
<button class="js-grid-item-delete tbody-icon " 
  data-item-confirm="Are you sure you want to delete? Confirming will permanently delete the selected item(s)!" 
  data-item-id="cb0" 
  data-item-task="usercategory.remove">
    <span class="icon-trash" aria-hidden="true"></span>
</button>
```

parts:
- data-item-id="cb0" -> is double in other list
- data-item-task="usercategory.remove" -> task is different (Userimage.remove)
- data-item-confirm="..." message 
- 

Further 'data...' items in joomla
```
data-action="edit"
data-item="<?php echo $this->typeName; ?>"
data-item-form-id="adminFormController" -> 
data-id="<?php echo $this->referenceId; ?>"
data-title="<?php echo $this->referenceTitle; ?>"
data-title-value="<?php echo $this->referenceTitleValue; ?>"
data-language="<?php echo $this->referenceLanguage; ?>"
data-editurl="<?php echo Route::_($this->editUri); ?>">
```

### Handling click on button

Javascript file list-view.js handles the click on the button. Joomgallery has its own improved version derived from the joomla file with same name.


Labels as classes to be found with javascript
- js-grid-item-action
- js-grid-item-delete (? JG label)


Differences:
- new function gridItemActionDelete: copy of gridItemAction with additional check of confirm message 
- 
- 
- 











