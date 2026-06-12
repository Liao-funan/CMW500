# CONFigureNIOTSIGNiULNPUSchULNPower

Module: NBIoT Signaling
Source: 5147f469aa5742d2.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
General Power Control Parameters
 > 
CONFigure:NIOT:SIGN<i>:UL:NPUSch:ULNPower
CONFigure:NIOT:SIGN<i>:UL:NPUSch:ULNPower 
<Power>
Defines a cell-specific nominal power value for maximum subcarrier allocation in the UL. The maximum allowed allocation depends on the subcarrier spacing.
This command is only relevant for basic configuration and rejected if advanced configuration is active.
Parameters:
<Power>
Range: 
-50 dBm  to  34 dBm
*RST:
23 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Settings"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Uplink Nominal Power"
Top