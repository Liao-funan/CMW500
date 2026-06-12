# CONFigureGPRFMEASiIQVSlotLISTCOUNt

Module: GPRF Measurements
Source: 254f1f2d1b3e4075.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:COUNt?
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:COUNt? 
Queries the number of subsweeps (<Stop Index> – <Start Index> + 1). The total number of steps, i.e. the number of subsweeps times the "Step Count", must not exceed 3000 (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
IQVSlot:
​
SCOunt
).
Return values: 
<SweepCount>
Range: 
1  to  150
*RST:
1
Example: 
See 
"Configuring the List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"List Section"
Top