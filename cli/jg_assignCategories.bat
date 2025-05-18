@ECHO OFF
REM assign categories for some users for joomgallery  

REM needs to be startet in CLI folder. or use cli\joomla.php below

CLS

php joomla.php joomgallery:cateories:list
REM pause

REM   joomgallery:category:add [options]
REM 
REM Options:
REM   -t, --title=TITLE                    Title
REM       --published[=PUBLISHED]          Published (yes/no)
REM       --created_time[=CREATED_TIME]    Created time
REM   -c, --created_by=CREATED_BY          Created by (owner)
REM       --modified_time[=MODIFIED_TIME]  Modified time
REM   -m, --modified_by[=MODIFIED_BY]      Modified by
REM   -p, --parent_id[=PARENT_ID]          parent id (1=no parent)
REM   -h, --help                           Display the help information
REM   -q, --quiet                          Flag indicating that all output should be silenced
REM   -V, --version                        Displays the application version
REM       --ansi                           Force ANSI output
REM       --no-ansi                        Disable ANSI output
REM   -n, --no-interaction                 Flag to disable interacting with the user
REM       --live-site[=LIVE-SITE]          The URL to your site, e.g. https://www.example.com
REM   -v|vv|vvv, --verbose                 Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
REM 
REM Help:
REM   joomgallery:category:add will add a joomgallery category
REM 
REM   Usage: php joomla.php joomgallery:category:add




php joomla.php joomgallery:category:add --created_by="jg" --title="jg1 category" 
php joomla.php joomgallery:category:add --created_by="jg2" --title="jg2 category" 
php joomla.php joomgallery:category:add --created_by="jg3" --title="jg3 category" 
php joomla.php joomgallery:category:add --created_by="jg4" --title="jg4 category" 


php joomla.php user:list
pause


