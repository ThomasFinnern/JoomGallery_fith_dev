@ECHO OFF
REM jg_addCategory.bat 
CLS

REM Path for calling
set ExePath=e:\wamp64\bin\php\php8.4.5\
REM ECHO ExePath: "%ExePath%"

if exist "%ExePath%php.exe" (
    REM path known (WT)
    ECHO ExePath: "%ExePath%"
) else (
    REM Direct call
    ECHO PHP in path variable
    set ExePath=
)

"%ExePath%php.exe" --version


ECHO ----------------------------------------------
ECHO.

ECHO --- "%ExePath%php.exe" joomla.php joomgallery:category:add
"%ExePath%php.exe" joomla.php joomgallery:category:add %1
