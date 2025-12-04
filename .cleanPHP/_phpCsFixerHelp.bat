@echo off
REM php-cs-fixer help file
CLS

ECHO ----------------------------------------------
ECHO php-cs-fixer help file
ECHO ----------------------------------------------

REM -----------------------------------------------------
REM jg_basePath to the repository
REM 
REM set jg_basePath=..\
set jg_basePath=..\..\JoomGallery_fith
if NOT %1A==A (
 	set jg_basePath=%1
)
ECHO  - 'jg base path "%jg_basePath%"'

REM -----------------------------------------------------
REM Move to jg_basePath 

pushd  %jg_basePath%
ECHO Moved to path: %cd% 


ECHO php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer --help
php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer fix --help

REM -----------------------------------------------------
REM Move back 

:MoveBack
popd
ECHO.
ECHO Done and moved back to path: %cd% 
ECHO.
GOTO :EOF


