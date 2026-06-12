# CONFigureGPRFMEASiPOWerPSETMLENgthALL

Module: GPRF Measurements
Source: cc52ddf51e6c4196.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Parameter Set List Settings
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:MLENgth:ALL
CONFigure:GPRF:MEAS<i>:POWer:PSET:MLENgth:ALL 
<MeasLength>...
Selects the length of the averaging intervals that the R&S
 
CMW uses to calculate the "Power" results for all parameter sets.
The measurement length must not exceed the step length (
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
SLENgth:
​
ALL
).
Parameters:
<MeasLength>
Comma-separated list of 32 values, for parameter set no. 0 to 31
Range: 
10E-6 s  to  1 s
*RST:
450E-6 s
Default unit: 
s
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Edit Parameter Set"
Top