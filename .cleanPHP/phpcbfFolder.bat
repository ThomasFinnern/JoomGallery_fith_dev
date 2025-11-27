@echo off
REM copy file and call php-cs-fixer on copied
CLS

ECHO php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml d:\entwickl\2025\_github\joomgallery_fith\site\com_joomgallery\src\service\
php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml d:\entwickl\2025\_github\joomgallery_fith\site\com_joomgallery\src\service\

