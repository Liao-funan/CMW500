# FETChWCDMaMEASiMEValuationCARRiercTRACeRCDerrorSFEDPDchno

Module: WCDMA Measurements
Source: 4003543529134746.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RCDE vs. Slot Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPDch<no>?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPDch<no>? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPDch<no>? 
Returns the spreading factors for the E-DPDCH 1 to 4.
Each current value refers to a half-slot or a full-slot, depending on the measurement period (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MPERiod:
​
MODulation
). The number of results depends on the measurement length (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MSCount
).
Suffix: 
<no>
1..4
Selects the E-DPDCH for which the results are retrieved
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<SF_1> ... <SF_n>
2 |
 
 4 |
 
 8 |
 
 16 |
 
 32 |
 
 64 |
 
 128 |
 
 256
Spreading factors, one result per measured slot or half-slot
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM401
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top