# FETChWCDMaMEASiNBMEValuationTRACeEMASkMFLeftCURRent

Module: WCDMA NodeB Measurements
Source: 88ec694580ca4c4c.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:CURRent?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:MAXimum? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:AVERage? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:CURRent? 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFLeft:MAXimum? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:AVERage? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:CURRent? 
READ:WCDMa:MEAS<i>:NB:MEValuation:TRACe:EMASk:MFRight:MAXimum? 
Returns the values of the spectrum emission 1 MHz traces. The left section and the right section of each trace are retrieved by separate commands (distinguished by the terms MFLeft and MFRight). The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Spectrum Emission Mask"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EMask_1M_1>... <EMask_1M_94>
Comma-separated list of 94 values correspond to test points that are separated by 90 kHz. The covered frequency ranges are:
Left section: -12.5 MHz to -4 MHz from the center carrier frequency
Right section: 4 MHz to 12.5 MHz from the center carrier frequency
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