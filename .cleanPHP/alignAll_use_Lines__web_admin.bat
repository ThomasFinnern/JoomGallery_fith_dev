@ECHO OFF
REM alignAll_use_Lines_userPanel_admin_JG.bat
REM
CLS

ECHO PHP alignAll_use_LinesCmd.php alignAll_use_Lines__web_admin.tsk
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

REM more otions 

set OptionFile=

ECHO ----------------------------------------------
ECHO.

pushd  ..\..\buildExtension\src
ECHO Path: %cd% 

echo --- "%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.cleanPHP/alignAll_use_Lines__web_admin.tsk %1
"%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.cleanPHP/alignAll_use_Lines__web_admin.tsk %1

popd

goto :EOF

REM ------------------------------------------
REM Adds given argument to the already known command arguments
:AddNextArg
    Set NextArg=%*
    Set CmdArgs=%CmdArgs% %NextArg%
    ECHO  '%NextArg%'
GOTO :EOF
