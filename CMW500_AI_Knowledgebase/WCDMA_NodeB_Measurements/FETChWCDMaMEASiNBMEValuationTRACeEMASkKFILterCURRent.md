# FETChWCDMaMEASiNBMEValuationTRACeEMASkKFILterCURRent

Module: WCDMA NodeB Measurements
Source: cdd03e9f59194b26.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:KFILter:MAXimum? 
Returns the values of the spectrum emission 30 kHz traces. The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Spectrum Emission Mask"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EMask_30k_1>... <EMask_30k_1666>
Comma-separated list of 1666 values correspond to test points that are separated by 15 kHz. The values cover the frequency range between -12.5 MHz and 12.5 MHz from the center carrier frequency.
Range: 
-100 dB  to  0 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top