# CONFigureWCDMaMEASiMEValuationLIMitRCDerrorEECDpCARRiercEDPDchno

Module: WCDMA Measurements
Source: f00782ea007642ed.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:EDPDch<no>
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:RCDerror:EECDp:CARRier<c>:EDPDch<no> 
<Enable>, <BetaFactor>, <SpreadingFactor>
Specifies the presence of a selected E-DPDCH (1 to 4) in the uplink signal and the beta factor and spreading factor of the channel. A query returns also the nominal CDP and effective CDP resulting from these settings.
Suffix: 
<no>
1..4
Selects the E-DPDCH
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Enable>
OFF |
 
 ON
Channel disabled | enabled
*RST:
OFF
<BetaFactor>
Range: 
5  to  5655
*RST:
168
<SpreadingFactor>
Range: 
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
*RST:
4
Return values: 
<NominalCDP>
Range: 
-70 dB  to  0 dB
*RST:
NAV
Default unit: 
dB
<EffectiveCDP>
Range: 
-90 dB  to  0 dB
*RST:
NAV
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