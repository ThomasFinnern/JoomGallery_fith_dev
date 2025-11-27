@echo off
REM copy file and call php-cs-fixer on copied
CLS

Copy d:\Entwickl\2025\_gitHub\JoomGallery_fith\site\com_joomgallery\src\Service\JG3LegacyRoter.org.php  d:\Entwickl\2025\_gitHub\JoomGallery_fith\site\com_joomgallery\src\Service\JG3LegacyRoter.php 

ECHO php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml d:\entwickl\2025\_github\joomgallery_fith\site\com_joomgallery\src\service\jg3legacyroter.php 
php ./administrator/com_joomgallery/vendor/bin/phpcbf --standard=ruleset.xml d:\entwickl\2025\_github\joomgallery_fith\site\com_joomgallery\src\service\jg3legacyroter.php 

REM ECHO php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer fix d:\Entwickl\2025\_gitHub\JoomGallery_fith\site\com_joomgallery\src\Service\JG3LegacyRoter.php 
REM php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer fix d:\Entwickl\2025\_gitHub\JoomGallery_fith\site\com_joomgallery\src\Service\JG3LegacyRoter.php 
