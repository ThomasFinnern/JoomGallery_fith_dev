@ECHO OFF
REM create some users for joomgallery  

REM needs to be startet in CLI folder. or use cli\joomla.php below

CLS

php joomla.php user:list
REM pause

REM php joomla.php user:add --help

REM php user:add [options]
REM php 
REM php Options:
REM php       --username[=USERNAME]    username
REM php       --name[=NAME]            full name of user
REM php       --password[=PASSWORD]    password
REM php       --email[=EMAIL]          email address
REM php       --usergroup[=USERGROUP]

REM php joomla.php user:add --username="" --name="" --password="" --email="" --usergroup=""

set /p password="Please enter password: "

php joomla.php user:add --username="jg" --name="jg manage+category" --email="jg@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg2" --name="jg manage+category" --email="jg2@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg3" --name="jg manage+category" --email="jg3@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg4" --name="jg manage+category" --email="jg4@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"

php joomla.php user:add --username="JGnoManage" --name="jg no manage" --email="jgNoManage@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"


php joomla.php user:list
pause


