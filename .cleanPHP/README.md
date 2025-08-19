
# '.cleanPHP' folder:

Batches to call PHP code to improve files in project JoomGallery_fith and other JoomGallery* branches.

The batches enable the cleanup by inserting php headers, upgrade copyright dates and more. The name of the batches tell about their function.

It uses 'buildExtension' php project in parallel folder to execute the tasks.

## Call of 'task' 
The entry point to this kind of tasks is src\doFileTasksCmd.php there. 

It uses a configuration file (*.tsk) to assign all the needed variables

For example 
```php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.buildPHP/updateAll_fileHeaders_userPanel_site.tsk``` 

In this folder 'build*.bat' are the base batch scripts which tell the execution code what to do by commandline options.
It uses a configuration file (*.tsk) to assign all the needed variables

## Direct call of 'task' 

For each task a *CMD.php may exist which can be called directly

The batch does pushd to the called file folder before calling

Direct call example  
```php.exe" exchangeAll_actCopyrightYearLines_JGCmd.php -f ..\tsk_file_examples/exchangeAll_actCopyrightYearLines_JG.tsk %1```


### requirement

Path to php.exe is given inside *.bat batch or must be in the standard path


