# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorEECDpCARRierc

Module: WCDMA Measurements
Source: 3eda4a7768074061.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c> 
{<Enable>, <BetaFactor>, <SpreadingFactor>}*8
Specifies the channel configuration in the uplink signal. This command has the same effect as the sum of the following commands:
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
DPCCh
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
DPDCh
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
HSDPcch
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
EDPCch
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
EDPDch<no>
Please refer to these commands for additional information (ranges and *RST values).
The parameter array described below is repeated for each channel (eight times) in the following order: DPCCH, DPDCH, HS-DPCCH, E-DPCCH, E-DPDCH 1, ..., E-DPDCH 4.
Thus a setting requires 3*8 values and a query returns 5*8 values.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Enable>
OFF |
 
 ON
Channel disabled | enabled
<BetaFactor>
Beta value of the channel
<SpreadingFactor>
2 |
 
 4 |
 
 8 |
 
 16 |
 
 32 |
 
 64 |
 
 128 |
 
 256
Spreading factor of the channel
Return values: 
<NominalCDP> <EffectiveCDP>
Values calculated from the settings, returned also for information
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Top