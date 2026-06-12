# CONFigureGPRFMEASiPOWerLISTRETRiggerALL

Module: GPRF Measurements
Source: 29f731f4457a4dca.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:RETRigger:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:RETRigger:ALL 
<Retrigger>...
Enables or disables the retrigger mechanism after the individual frequency/level steps. The setting is relevant for the trigger mode "Retrigger Preselect" (
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
).
Parameters:
<Retrigger>
OFF |
 
 ON
Comma-separated list of up to 2000 values, with one value per frequency/level step
A query returns 2000 values (maximum number of steps).
*RST:
ON (first value), OFF (all other values)
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"List > Retrigger"
Top