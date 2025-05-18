

ToDo: JG, JG2,...
Example 
php cli/joomla.php user:addtogroup \
  --username="gewünschterBenutzer" \
  --group="Super Users"











@ECHO OFF
REM create some users for joomgallery  

REM needs to be startet in CLI folder. or use cli\joomla.php below

CLS

php joomla.php user:list
REM pause

REM   joomgallery:categories:list [options]
REM 
REM Options:
REM       --owner[=OWNER]          username (created_by)
REM   -s, --search[=SEARCH]        COM_JOOMGALLERY_CLI_CONFIG_SEARCH
REM   -h, --help                   Display the help information
REM   -q, --quiet                  Flag indicating that all output should be silenced
REM   -V, --version                Displays the application version
REM       --ansi                   Force ANSI output
REM       --no-ansi                Disable ANSI output
REM   -n, --no-interaction         Flag to disable interacting with the user
REM       --live-site[=LIVE-SITE]  The URL to your site, e.g. https://www.example.com
REM   -v|vv|vvv, --verbose         Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
REM 
REM Help:
REM   joomgallery:categories:list will list all joomgallery categories
REM 
REM   Usage: php joomla.php joomgallery:categories:list
REM set /p password="Please enter password: "

php joomla.php user:add --username="jg" --name="jg manage+category" --email="jg@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg2" --name="jg2 manage+category" --email="jg2@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg3" --name="jg3 manage+category" --email="jg3@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"
php joomla.php user:add --username="jg4" --name="jg4 manage+category" --email="jg4@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"

php joomla.php user:add --username="JGnoManage" --name="jg no manage" --email="jgNoManage@tomfinnern.de" --usergroup="JG_user_upload" --password="%password%"

REM ToDo: at home : add no cat ... users 

php joomla.php user:list
pause


