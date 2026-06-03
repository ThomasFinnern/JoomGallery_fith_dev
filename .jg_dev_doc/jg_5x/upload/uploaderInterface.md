# UploaderInterface

## UploaderInterface functions 
* checkError($uploaderror): 
   * Analyses an error code and returns its text

* retrieveImage(&$data, $createFilename = true)): 
   * Method to retrieve an uploaded image. Step 1.
   * (check upload, check user upload limit, create filename, onJoomBeforeUpload, ...)
   
* overrideData(&$data)
  * Override form data with image metadata
  * according to configuration. Step 2.

* rollback($data_row = false)
  * Rollback an erroneous upload

* isImgUploaded($data)
  * Detect if there is an image uploaded

* deleteTmp()
  * Delete all temporary created files which were created during upload

## Uploader

General code to be used but to derive from

* retrieveImage(&$data, $createFilename = true)): **(Step 1)**  
   ==> Create filesystem service , ...  
   Set filesystem: $data['filesystem'] = $this->component->getFilesystem()->get('filesystem');

* overrideData(&$data)   **(Step 2)**  
  ==> Override form data with image metadata  
  Create the Metadata service  
  Get image metadata (source)  
  'IFD0', 'EXIF', 'COMMENT', 'IPTC'

* **createImage($data_row)**  **(Step 3)**  
  Method to create uploaded image files. Step 3. (create imagetypes, upload imagetypes to storage, onJoomAfterUpload)

* **getImageNumber($userid)**  
   Returns the number of images of the current user

* **getSerial()**  
  Calculates the serial number for images file names and titles

* **resetUserStates()**
  Resets user states  
  ...filecounter, ...error', ...debugoutput', ...warningoutput

* **tempImgObj($data)**  
  Creation of a temporary image object for the rollback  
  return $img->catid, $img->filename

## Use in imageModel.php

1) [439] Create uploader service  
   $uploader = JoomHelper::getService (...)  
1) Detect uploaded file  
   $imgUploaded = $uploader->isImgUploaded($data);  
   => File should be already there 
1) Retrieve image (check upload, check user upload limit, create filename, onJoomBeforeSave)  
   $uploader->retrieveImage($data, $createFilename))  
1) Override data with image metadata  
  $uploader->overrideData($data)  
   -> Rollback on failed: $uploader->rollback();

1) **Create images** if($imgUploaded) ...   
1) $uploader->createImage($table)  
   -> Rollback on failed: $uploader->rollback();
1) All done. Clean created temp files  
   $uploader->deleteTmp();
