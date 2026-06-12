# CONFigureWCDMaSIGNiULTPCMPEDchSTATe

Module: WCDMA Signaling
Source: f1c2392a997d4c83.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
TX Power Control Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:TPC:MPEDch:STATe?
CONFigure:WCDMa:SIGN<i>:UL:TPC:MPEDch:STATe? 
Queries the E-TFCI information for the TPC setup "Max. Power E-DCH".
Return values: 
<CurrentETFCI1>
Monitored "Current E-TFCI" value of the carrier one
Range: 
0  to  127
<TargetETFCI1>
Calculated "Target E-TFCI" value of the carrier one
Range: 
0  to  127
<CurrentETFCI2>
Monitored "Current E-TFCI" value of the carrier two
Range: 
0  to  127
<TargetETFCI2>
Calculated "Target E-TFCI" value of the carrier two
Range: 
0  to  127
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.70: parameters for secondary uplink carrier
Options: 
R&S CMW-KS401
R&S CMW-KS405 required for dual carrier HSUPA
Manual operation: 
See 
"Max. Power E-DCH Condition"
Top