# CONFigureGPRFMEASiPOWerLISTFREQuency

Module: GPRF Measurements
Source: 137d0b7421ea43a0.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:FREQuency
CONFigure:GPRF:MEAS<i>:POWer:LIST:FREQuency 
<Index>, <Frequency>
CONFigure:GPRF:MEAS<i>:POWer:LIST:FREQuency? 
<Index>
Defines or queries the frequency of a selected frequency/level step.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Frequency of the frequency/level step
Range: 
70E+6 Hz  to  6E+9 Hz
Increment: 
0.1 Hz
*RST:
Depending on list index (750 MHz to 940 MHz for index 0 to 19)
Default unit: 
Hz
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