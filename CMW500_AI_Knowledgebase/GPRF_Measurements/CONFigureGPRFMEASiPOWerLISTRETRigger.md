# CONFigureGPRFMEASiPOWerLISTRETRigger

Module: GPRF Measurements
Source: fa102cdcdd5540df.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:RETRigger
CONFigure:GPRF:MEAS<i>:POWer:LIST:RETRigger 
<Index>, <Retrigger>
CONFigure:GPRF:MEAS<i>:POWer:LIST:RETRigger? 
<Index>
Enables the retrigger mechanism for a selected list segment. The setting is relevant for trigger mode "Retrigger Preselect" (
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
Disables or enables retriggering for segment <Index>.
*RST:
ON (<Index> = 0), OFF (<Index> > 0)
Parameters for setting and query: 
<Index>
List segment index
Range: 
0  to  3999
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"List > Retrigger"
Top