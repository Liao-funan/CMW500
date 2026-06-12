# CONFigureGPRFMEASiIQVSlotLISTENPowerALL

Module: GPRF Measurements
Source: c769b52f1dd1401a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:ENPower:ALL
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:ENPower:ALL 
<ExpNomPower>...
Defines the expected nominal power of all frequency/level steps.
Parameters:
<ExpNomPower>
Comma-separated list of up to 200 expected powers, one value per frequency/level step
A query returns 200 results (maximum number of steps).
Range: 
-55 dBm  to  55 dBm
Increment: 
0.1 dB
*RST:
-10 dBm, -10 dBm, -10 dBm, -20 dBm, -20 dBm, -20 dBm, -20 dBm, -30 dBm, ..., -30 dBm
Default unit: 
dBm
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"List"
Top