# CONFigureGPRFMEASiIQVSlotLISTRETRigger

Module: GPRF Measurements
Source: 71d0339ca0374e66.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:RETRigger
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:RETRigger 
<Index>, <Retrigger>
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:RETRigger? 
<Index>
Enables the retrigger mechanism after a selected frequency/level step. The setting is relevant for trigger mode "Retrigger Preselect" (
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
Disables or enables retriggering after the frequency/level step.
*RST:
ON (all steps)
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  199
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