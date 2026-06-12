# CONFigureGPRFMEASiIQVSlotLISTRETRiggerALL

Module: GPRF Measurements
Source: 251404ecd2aa457f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:RETRigger:ALL
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:RETRigger:ALL 
<Retrigger>...
Enables the retrigger mechanism after all frequency/level steps. The setting is relevant for trigger mode "Retrigger Preselect" (
TRIGger:
​
GPRF:
​
MEAS<i>:
​
IQVSlot:
​
MODE
PRESelect
).
Parameters:
<Retrigger>
OFF |
 
 ON
Comma-separated list of n values, one value per frequency/level step, where n 
≤
 200. The query returns 200 results.
*RST:
ON (all steps)
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KM011
Manual operation: 
See 
"List"
Top