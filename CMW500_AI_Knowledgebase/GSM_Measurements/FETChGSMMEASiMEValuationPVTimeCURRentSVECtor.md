# FETChGSMMEASiMEValuationPVTimeCURRentSVECtor

Module: GSM Measurements
Source: 438d915865e7458e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:CURRent:SVECtor?
FETCh:GSM:MEAS<i>:MEValuation:PVTime:CURRent:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:AVERage:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:MINimum:SVECtor? 
FETCh:GSM:MEAS<i>:MEValuation:PVTime:MAXimum:SVECtor? 
Returns special burst power values for the "Measure Slot".
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_UsefulPartMin> <3_UsefulPartMax>
Minimum and maximum power across the useful part of the "Measure Slot".
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<4_Subvector1> ... <15_Subvector12>
Burst power at position in μs: –28 , –18, –10, 0, 2, 4, 538.2, 540.2, 542.8, 552.8, 560.8, 570.8
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top