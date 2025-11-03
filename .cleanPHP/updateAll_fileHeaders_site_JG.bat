@ECHO OFF
REM updateAll_fileHeaders.bat
REM
CLS

ECHO PHP updateAll_fileHeaders.php updateAll_fileHeaders_site_JG.tsk
ECHO.

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

REM more options 

set OptionFile=

ECHO ----------------------------------------------
ECHO.

pushd  ..\..\buildExtension\src
ECHO Path: %cd% 

echo --- "%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.cleanPHP/updateAll_fileHeaders_site_JG.tsk %OptionFile%
"%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.cleanPHP/updateAll_fileHeaders_site_JG.tsk %OptionFile%

popd

goto :EOF

REM ------------------------------------------
REM Adds given argument to the already known command arguments
:AddNextArg
    Set NextArg=%*
    Set CmdArgs=%CmdArgs% %NextArg%
    ECHO  '%NextArg%'
GOTO :EOF
