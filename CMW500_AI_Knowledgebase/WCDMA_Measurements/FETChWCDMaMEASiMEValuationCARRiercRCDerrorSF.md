# FETChWCDMaMEASiMEValuationCARRiercRCDerrorSF

Module: WCDMA Measurements
Source: 20015ff1cbc74d49.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RCDE vs. Slot Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SF?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SF? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SF? 
Returns the spreading factors of the dedicated physical channels determined from a selected slot.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_DPCCH> <3_DPDCH> <4_HSDPCCH> <5_EDPCCH> <6_EDPDCH1> <7_EDPDCH2> <8_EDPDCH3> <9_EDPDCH4>
2 |
 
 4 |
 
 8 |
 
 16 |
 
 32 |
 
 64 |
 
 128 |
 
 256
Spreading factors for the indicated channels
 
 
 
 
 
 
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top