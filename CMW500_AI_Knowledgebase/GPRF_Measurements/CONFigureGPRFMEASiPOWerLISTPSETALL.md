# CONFigureGPRFMEASiPOWerLISTPSETALL

Module: GPRF Measurements
Source: 4fd5cd7b9602496f.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:PSET:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:PSET:ALL 
<ParameterSet>...
Selects the parameter set for all frequency/level steps. To configure parameter sets, see 
"Parameter Set List Settings"
.
Parameters:
<ParameterSet>
Comma-separated list of up to 2000 parameter set indices, with one value per frequency/level step
A
query returns 2000 values (maximum number of steps).
Range: 
0  to  31
*RST:
0
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V2.1.25
Manual operation: 
See 
"List > Parameter Set"
Top