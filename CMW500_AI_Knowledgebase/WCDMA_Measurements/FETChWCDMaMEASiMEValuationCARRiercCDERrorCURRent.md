# FETChWCDMaMEASiMEValuationCARRiercCDERrorCURRent

Module: WCDMA Measurements
Source: 1aecabecb5f5455f.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CDE vs. Slot Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:CDERror:SDEViation? 
Returns the RMS CDE vs. slot values measured in a selected slot. In addition to the current values, average, maximum and standard deviation values can be retrieved.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_DPCCH> <3_DPDCH> <4_HSDPCCH> <5_EDPCCH> <6_EDPDCH1> <7_EDPDCH2> <8_EDPDCH3> <9_EDPDCH4>
RMS CDE values for the indicated channels
Range: 
-100 dB to 0 dB (SDEViation 0 dB to 50 dB)
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.4.11
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top