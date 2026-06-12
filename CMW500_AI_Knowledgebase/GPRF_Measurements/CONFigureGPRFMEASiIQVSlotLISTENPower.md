# CONFigureGPRFMEASiIQVSlotLISTENPower

Module: GPRF Measurements
Source: 94ec868eb91e4e11.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:ENPower
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:ENPower 
<Index>, <ExpNomPower>
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:ENPower? 
<Index>
Defines or queries the expected nominal power of a selected frequency/level step.
Parameters:
<ExpNomPower>
Range: 
-55 dBm  to  55 dBm
Increment: 
0.1 dB
*RST:
Depending on list index (–10 dBm, –10 dBm, –10 dBm, –20 dBm, –20 dBm, –20 dBm, –20 dBm, –30 dBm, ... for the first indices)
Default unit: 
dBm
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  199
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"List"
Top