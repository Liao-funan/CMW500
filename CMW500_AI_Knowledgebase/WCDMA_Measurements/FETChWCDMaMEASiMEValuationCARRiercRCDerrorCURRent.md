# FETChWCDMaMEASiMEValuationCARRiercRCDerrorCURRent

Module: WCDMA Measurements
Source: e0724b5de6114eae.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SDEViation? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:CURRent? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:AVERage? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:MAXimum? 
CALCulate:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:SDEViation? 
Returns the RCDE vs. slot values measured in a selected slot. In addition to the current values, average, maximum and standard deviation values can be retrieved.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_DPCCH> <3_DPDCH> <4_HSDPCCH> <5_EDPCCH> <6_EDPDCH1> <7_EDPDCH2> <8_EDPDCH3> <9_EDPDCH4>
RCDE values for the indicated channels
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
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top