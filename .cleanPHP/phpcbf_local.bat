@echo off
REM php-cbf (fixer) on root of project
REM you have to be there before
CLS

ECHO php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml .\
php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml  .\

