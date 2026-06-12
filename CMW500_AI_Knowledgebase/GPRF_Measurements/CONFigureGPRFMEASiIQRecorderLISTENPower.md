# CONFigureGPRFMEASiIQRecorderLISTENPower

Module: GPRF Measurements
Source: 4e8d9c2b95964840.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:ENPower
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:ENPower 
<Index>, <ExpNomPower>
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:ENPower? 
<Index>
Defines or queries the expected nominal power of a selected frequency/level step.
Parameters:
<ExpNomPower>
Expected nominal power of the frequency/level step
Range: 
-55 dBm  to  55 dBm
*RST:
Depending on list index (–10 dBm, –10 dBm, –10 dBm, –20 dBm, –20 dBm, –20 dBm, –20 dBm, –30 dBm, –30 dBm ... for the first indices)
Default unit: 
dBm
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  1999
Example: 
See 
"Performing a Single-Shot Measurement"
Firmware/Software: 
V1.0.10.1
Top