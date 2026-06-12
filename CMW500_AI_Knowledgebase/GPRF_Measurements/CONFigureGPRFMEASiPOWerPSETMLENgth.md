# CONFigureGPRFMEASiPOWerPSETMLENgth

Module: GPRF Measurements
Source: 83ba6d236b644909.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Parameter Set List Settings
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:MLENgth
CONFigure:GPRF:MEAS<i>:POWer:PSET:MLENgth 
<Index>, <MeasLength>
CONFigure:GPRF:MEAS<i>:POWer:PSET:MLENgth? 
<Index>
Selects the length of the averaging intervals that the R&S
 
CMW uses to calculate the "Power" results for a particular parameter set <Index>. The measurement length must not exceed the step length (
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
SLENgth
).
Parameters:
<MeasLength>
Range: 
10E-6 s  to  1 s
*RST:
450E-6 s
Default unit: 
s
Parameters for setting and query: 
<Index>
Number of the parameter set
Range: 
0 to 31
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Edit Parameter Set"
Top