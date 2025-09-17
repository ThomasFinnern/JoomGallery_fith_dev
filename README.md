# Addition to JoomGallery development 

=>see 'JoomGallery_fith' or 'JoomGallery friends' repositories on github

* '.buildPHP' folder: build system -> needs python repository JoomGallery_fith_dev and buildExtension parallel
* '.packages' folder:  (invisible here) result of build process
* .jg_dev_doc folder: Joom gallery documentation (made by developer and only parts). 

## Support of build zip file and file format changes 

### build and file tasks 
The code may be formatted in several places

a) 'Use namespace' style: 
* It can be sorted by alphabet or length of line
* A ‘\’ can be added before it or this can be removed
* 

b) Header: 
* Current copyright year can be updated
* @package, @license, and others can be configured and entered with spacing alingment
* It can be formatted in JoomGallery format without a space at the start of the line or in joomla format with a space
* 

c) Manifest file 
* Current copyright year can be updated.
* The version can be incremented in all ‘.’ positions. MAJOR.MINOR.PATCH.(Build id). Sematic versioning with 'RC'... does not work. The 'builkd id' I use for debug version of code. These are ignored during the joomla update. This means that a minor version of build id can be installed on a major version in Joomla.
* 

### Required build project

The following project is needed for build or other file changing tasks:

* https://github.com/ThomasFinnern/buildExtension 
  - tasks handling system
  - entry point: buildExtensionCmd.php (build), doFileTasksCmd.php (fileheader, copyright year, ...)

### Tasks provided here

The tasks here use the general build project to generate build zip files or change formatting of files for the JoomGallery_fith copy of the joomgallery. The path for source files changes can be adjustet to any local path. Just change it in the *.tsk file for your needs 

**.buildPhp directory:** 

=> *.bat and *.tsk files create builds in the .buildPhp directory.
- build.bat creates a build with the original data in the parallel .packages directory.
- 'build.bat -s' creates a build with an incremented build ID. Also calling it with other flags can increment the MAJOR.MINOR.PATCH values.
- The build name is created from the project and version from the manifest file with today's date in the format <project>.<target id>.<version>.<date>.zip e.g. ```joomgallery.api.4.2.0_20250916.zip```
- A target id (prefixZipName) can also be specified in the *.tsk file. -see 'api' above

**.packages directory:** 

=> result of build
- The directory will be created if necessary.

**.cleanPHP directory:**

=> *.bat and *.tsk  files generate changes to the source code.
- The target path is specified in the *.tsk file.
- The affected files can be restricted (*.php or ...).
- A list of directories to be excluded is provided.
- Site and admin paths are treated separately.

**Examples:**
* alignAll_use_Lines_admin_JG.bat, alignAll_use_Lines_site_JG.bat
=> Change all 'use' lines in *.php.
* updateAll_fileHeaders_admin_JG.bat, updateAll_fileHeaders_site_JG.bat
=> Change all headers in *.php

The directories in the *.tsk files (task parameter) must be adjusted.
If we specify the root directory, all files can be adjusted (note: enter the vendor exception in *.tsk).

