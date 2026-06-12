# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorEECDpCARRiercHSDPcchCONFig

Module: WCDMA Measurements
Source: 6f29facdb5eb4900.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Code Domain)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:HSDPcch:CONFig
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:HSDPcch:CONFig 
<Type>
Selects whether the HS-DPCCH transports an ACK, NACK or CQI and thus which set of beta factor and spreading factor values is used.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Type>
ACK |
 
 NACK |
 
 CQI
*RST:
ACK
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.1.20
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Top