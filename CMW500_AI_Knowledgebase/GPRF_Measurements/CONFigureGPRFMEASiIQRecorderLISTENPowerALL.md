# CONFigureGPRFMEASiIQRecorderLISTENPowerALL

Module: GPRF Measurements
Source: 963eb7caeae949bb.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:ENPower:ALL
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:ENPower:ALL 
<ExpNomPower>...
Defines the expected nominal power of all frequency/level steps.
Parameters:
<ExpNomPower>
Comma-separated list of up to 2000 expected powers, one value per frequency/level step
A query returns 2000 results (maximum number of steps).
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
"Performing a Single-Shot Measurement"
Firmware/Software: 
V1.0.10.1
Top