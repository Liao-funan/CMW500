# CONFigureGPRFMEASiPOWerMLENgth

Module: GPRF Measurements
Source: 8d52a19b0b1743a8.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:GPRF:MEAS<i>:POWer:MLENgth
CONFigure:GPRF:MEAS<i>:POWer:MLENgth 
<MeasLength>
Selects the length of the averaging intervals that the R&S
 
CMW uses to calculate the power results for each measurement step. The measurement length must not exceed the step length (
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
SLENgth
).
Parameters:
<MeasLength>
Range: 
10E-6 s  to  1 s
*RST:
300E-6 s
Default unit: 
s
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Measurement Length"
Top