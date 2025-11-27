@echo off
REM php-cs-fixer on root of project
REM you have to be there before
CLS

ECHO php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer fix .\ --show-progress=dots 
php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer fix .\ --show-progress=dots 

