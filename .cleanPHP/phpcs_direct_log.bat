@echo off
REM copy file and call php-cs-fixer on copied
CLS

ECHO php ../../JoomGallery_fith/administrator/com_joomgallery/vendor/bin/phpcs --standard=../../JoomGallery_fith/ruleset.xml d:\Entwickl\2025\_gitHub\JoomGallery_fith
php ../../JoomGallery_fith/administrator/com_joomgallery/vendor/bin/phpcs --standard=../../JoomGallery_fith/ruleset.xml d:\Entwickl\2025\_gitHub\JoomGallery_fith

