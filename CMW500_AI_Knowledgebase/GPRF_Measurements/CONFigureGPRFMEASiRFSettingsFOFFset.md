# CONFigureGPRFMEASiRFSettingsFOFFset

Module: GPRF Measurements
Source: 7c372d1594d7452d.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:FOFFset
CONFigure:GPRF:MEAS<i>:RFSettings:FOFFset 
<FreqOffset>
Sets/gets a positive or negative frequency offset to be added to the center frequency (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
FREQuency
).
This command does not apply to spectrum analysis in frequency sweep mode (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
SPECtrum:
​
FREQuency:
​
SPAN:
​
MODE
).
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
Parameters:
<FreqOffset>
Range: 
-100E+3 Hz  to  100E+3 Hz
*RST:
0 Hz
Default unit: 
Hz
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Frequency Offset"
Top