# CONFigureGPRFMEASiPLOSsLISTFREQuency

Module: GPRF Measurements
Source: 41a7c9e0be2d4e5f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Settings
 > 
CONFigure:GPRF:MEAS<i>:PLOSs:LIST:FREQuency
CONFigure:GPRF:MEAS<i>:PLOSs:LIST:FREQuency 
<Connector>, <NumEntries>, <Frequency>...
CONFigure:GPRF:MEAS<i>:PLOSs:LIST:FREQuency? 
<Connector>
Configures the frequency list for a selected RF connector.
For possible connector values, see 
"Values for RF Path Selection"
.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<NumEntries>
Configures the number of frequencies to be defined
Range: 
1  to  200
*RST:
1
<Frequency>
Comma-separated list of <NumEntries> frequencies
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
750E+6 Hz
Default unit: 
Hz
Parameters for setting and query: 
<Connector>
RF connector for which the frequency list is configured
Example: 
See 
"Pathloss Measurement"
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"RF nodes"
Top