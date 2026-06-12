# CONFigureGPRFMEASiPOWerLISTENPowerALL

Module: GPRF Measurements
Source: baf16951c9ea4b89.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:ENPower:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:ENPower:ALL 
<ExpNomPower>...
Defines the expected nominal power of all frequency/level steps.
Parameters:
<ExpNomPower>
Comma-separated list of up to 2000 expected powers, one value per frequency/level step
A query returns 2000 values (maximum number of steps).
Range: 
-55 dBm  to  55 dBm
Increment: 
0.001 dB
*RST:
-10 dBm, -10 dBm, -10 dBm, -20 dBm, -20 dBm, -20 dBm, -20 dBm, -30 dBm, ..., -30 dBm
Default unit: 
dBm
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V1.0.2.6
Manual operation: 
See 
"List > Frequency, Ref. Level, Exp. Nom. Pow."
Top