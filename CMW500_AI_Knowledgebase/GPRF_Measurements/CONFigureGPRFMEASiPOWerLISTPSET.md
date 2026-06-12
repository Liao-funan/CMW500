# CONFigureGPRFMEASiPOWerLISTPSET

Module: GPRF Measurements
Source: 9822b9f9e5ba4d11.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:PSET
CONFigure:GPRF:MEAS<i>:POWer:LIST:PSET 
<Index>, <ParameterSet>
CONFigure:GPRF:MEAS<i>:POWer:LIST:PSET? 
<Index>
Selects the parameter set for a particular frequency/level step <index>. The parameter sets are defined using 
...GPRF:MEAS<i>:POWER:PSET...
 commands; see 
"Command Reference"
.
Parameters:
<ParameterSet>
Parameter set number
Range: 
0  to  31
*RST:
0 (all frequency/level steps)
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  3999
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"List > Parameter Set"
Top