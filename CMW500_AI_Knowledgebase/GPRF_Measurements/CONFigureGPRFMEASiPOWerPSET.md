# CONFigureGPRFMEASiPOWerPSET

Module: GPRF Measurements
Source: 6a1eacff50bb4a71.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET
CONFigure:GPRF:MEAS<i>:POWer:PSET 
<ParameterSetMode>
Selects the measurement control settings for the power measurement. The list settings require a "Retrigger Preselect" trigger mode (
TRIGger:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
MODE
 
PRESelect
). In this mode, the R&S
 
CMW uses the parameter settings defined via 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
LIST:
​
PSET
.
Parameters:
<ParameterSetMode>
GLOBal |
 
 LIST
GLOBal
: Use global settings for all steps.
LIST
: Use step-specific settings.
*RST:
GLOB
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V2.1.25
Manual operation: 
See 
"Parameter Set Mode"
Top