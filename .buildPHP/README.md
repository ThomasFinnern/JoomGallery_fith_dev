
# '.buildPHP' folder:

Python project to generate zip of project JoomGallery_fith_dev
Resulting zip is created in parallel folder .packages

Needs python installed and Repository 'JoomGallery_fith_dev' and 'buildExtension' must be located in parallel folders.

In this folder '.buildPHP' are the base batch scripts which calls the hard working ones (python) in buildExtension folder.

The manifest file will be changed for actual date. Options to the batch tell which version number part shall be increased.
Options for build.bat (windows) 
	-d develop     No change in Version
	-s step        Change version part 0.0.0.x
	-f build_fix   Change version part 0.0.x´0
	-r release     Change version part 0.x.0.0
	-m major       Change version part x.0.0.0

Resulting zip name follows schema: <projectname>.<version>_date.zip see
joomgallery.4.0.1_20250429.zip


