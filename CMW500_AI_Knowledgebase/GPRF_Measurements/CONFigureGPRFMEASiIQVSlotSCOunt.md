# CONFigureGPRFMEASiIQVSlotSCOunt

Module: GPRF Measurements
Source: 122c2af10eea41a8.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:SCOunt
CONFigure:GPRF:MEAS<i>:IQVSlot:SCOunt 
<StepCount>
Defines the number of measurement steps per subsweep. The total number of steps, i.e. the step count times the number of subsweeps, must not exceed 3000 (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQVSlot:
​
LIST:
​
COUNt?
).
Parameters:
<StepCount>
Range: 
1  to  3000
*RST:
20
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"Step Count"
Top