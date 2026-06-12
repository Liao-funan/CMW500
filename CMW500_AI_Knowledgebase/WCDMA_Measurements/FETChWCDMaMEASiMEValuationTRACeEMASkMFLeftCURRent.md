# FETChWCDMaMEASiMEValuationTRACeEMASkMFLeftCURRent

Module: WCDMA Measurements
Source: 131237ce4e5d46a2.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFLeft:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:MFRight:MAXimum? 
Returns the values of the spectrum emission 1 MHz traces. The left section and the right section of each trace are retrieved by separate commands (distinguished by the terms MFLeft and MFRight). The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Spectrum Emission Mask"
Return values: 
<Reliability>
"Reliability Indicator"
<EMask_1M_1>... <EMask_1M_n>
Comma-separated list of values, the covered frequency range differs for single and dual uplink carrier:
Single carrier
: n = 89 values correspond to test points that are separated by 90 kHz. The covered frequency ranges are:
Left section: -11970 kHz to -4050 kHz from the center carrier frequency
Right section: 4050 kHz to 11970 kHz from the center carrier frequency
Dual carrier in uplink
: n = 144 values correspond to test points that are separated by 90 kHz. The covered frequency ranges are:
Left section: -19440 kHz to -6570 kHz from the center frequency of both carriers, e.g. from f = (f
C2
 - f
C1
)/2.
Right section: 6570 kHz to 19440 kHz from the center frequency of both carriers
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
V1.0.10.1
V3.2.80: extended range for dual carrier HSPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top