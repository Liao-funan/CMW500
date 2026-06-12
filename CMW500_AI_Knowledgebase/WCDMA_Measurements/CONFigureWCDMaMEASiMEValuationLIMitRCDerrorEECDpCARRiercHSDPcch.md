# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorEECDpCARRiercHSDPcch

Module: WCDMA Measurements
Source: 2cf15557abd2486d.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:HSDPcch
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:HSDPcch 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of an HS-DPCCH in the uplink signal and the beta factor and spreading factor of the channel. A query returns also the nominal CDP and effective CDP resulting from these settings.
For the HS-DPCCH three sets of beta factor and spreading factor can be configured, depending on whether it transports an ACK, NACK or CQI. This command configures/returns the values related to the currently active set.
For selection of the active set, see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
RCDerror:
​
EECDp:
​
CARRier<c>:
​
HSDPcch:
​
CONFig
.
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
5  to  570
*RST:
60
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
256
Return values: 
<NominalCDP>
Range: 
-70 dB  to  0 dB
*RST:
-11.9 dB
Default unit: 
dB
<EffectiveCDP>
Range: 
-90 dB  to  0 dB
*RST:
-11.9 dB
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