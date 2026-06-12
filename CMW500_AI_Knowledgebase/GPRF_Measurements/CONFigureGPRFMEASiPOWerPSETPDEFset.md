# CONFigureGPRFMEASiPOWerPSETPDEFset

Module: GPRF Measurements
Source: 96b5566f6ab249d3.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:PDEFset
CONFigure:GPRF:MEAS<i>:POWer:PSET:PDEFset 
<Index>, <PredefinedSet>
CONFigure:GPRF:MEAS<i>:POWer:PSET:PDEFset? 
<Index>
This command is related to parameter sets in retriggered list mode.
A setting command loads a predefined set of parameters into the parameter set <Index>. A query returns the name of the predefined set assigned to the parameter set <Index>.
To get a list of predefined-set strings, use 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
PSET:
​
CATalog:
​
PDEFset?
.
Parameters:
<PredefinedSet>
Predefined set as string
Parameters for setting and query: 
<Index>
Parameter set number
Range: 
0 to 31
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Parameter Set List"
Top