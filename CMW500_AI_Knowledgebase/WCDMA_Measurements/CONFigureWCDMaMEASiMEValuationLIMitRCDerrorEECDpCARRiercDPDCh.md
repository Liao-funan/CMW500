# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorEECDpCARRiercDPDCh

Module: WCDMA Measurements
Source: ed1465516f1149dc.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:DPDCh
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:DPDCh 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of a DPDCH in the uplink signal and the beta factor and spreading factor of the channel. A query returns also the nominal CDP and effective CDP resulting from these settings.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Enable>
OFF |
 
 ON
Channel disabled | enabled
*RST:
ON
<BetaFactor>
Range: 
0  to  15
*RST:
15
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
64
Return values: 
<NominalCDP>
Range: 
-60 dB  to  0 dB
*RST:
-0.4 dB
Default unit: 
dB
<EffectiveCDP>
Range: 
-80 dB  to  0 dB
*RST:
-6.4 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Top