@ECHO OFF
REM updateAll_fileHeaders.bat
REM standard calling over doFileTasksCmd.phpREM
REM
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

ECHO.
ECHO ----------------------------------------------
ECHO.

REM more otions 

set OptionFile=

REM if %1A==-dA (
REM 	set OptionFile=-o options_version_tsk\build_develop.opt
REM )


ECHO ----------------------------------------------
ECHO.

pushd  ..\..\buildExtension\src
ECHO Path: %cd% 

REM echo.
echo --- "%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.buildPHP/updateAll_fileHeaders_userPanel_site.tsk %OptionFile%
"%ExePath%php.exe" doFileTasksCmd.php -f ../../joomGallery_fith_dev/.buildPHP/updateAll_fileHeaders_userPanel_site.tsk %OptionFile%

popd

goto :EOF

REM ------------------------------------------
REM Adds given argument to the already known command arguments
:AddNextArg
    Set NextArg=%*
    Set CmdArgs=%CmdArgs% %NextArg%
    ECHO  '%NextArg%'
GOTO :EOF
