# CONFigureGPRFMEASiPOWerLISTENPower

Module: GPRF Measurements
Source: 8e04eb94dff4420e.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:ENPower
CONFigure:GPRF:MEAS<i>:POWer:LIST:ENPower 
<Index>, <ExpNomPower>
CONFigure:GPRF:MEAS<i>:POWer:LIST:ENPower? 
<Index>
Defines or queries the expected nominal power of a selected frequency/level step.
Parameters:
<ExpNomPower>
Expected nominal power of the frequency/level step
Range: 
-55 dBm  to  55 dBm
*RST:
Depending on list index (–10 dBm, –10 dBm, –10 dBm, –20 dBm, –20 dBm, –20 dBm, –20 dBm, –30 dBm, ... for the first indices)
Default unit: 
dBm
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  3999
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"List > Frequency, Ref. Level, Exp. Nom. Pow."
Top