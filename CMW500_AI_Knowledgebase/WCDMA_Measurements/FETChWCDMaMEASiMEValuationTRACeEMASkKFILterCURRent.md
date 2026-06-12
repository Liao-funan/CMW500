# FETChWCDMaMEASiMEValuationTRACeEMASkKFILterCURRent

Module: WCDMA Measurements
Source: 4ad6fa4846034e3f.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:KFILter:MAXimum? 
Returns the values of the spectrum emission 30 kHz traces. The results of the current, average and maximum traces can be retrieved.
See also 
"Detailed Views: Spectrum Emission Mask"
Return values: 
<Reliability>
"Reliability Indicator"
<EMask_30k_1>... <EMask_30k_n>
Comma-separated list of values, the covered frequency range differs for single and dual uplink carrier:
Single carrier
: n = 1665 values correspond to test points that are separated by 15 kHz and cover the frequency range between -12480 kHz and 12480 kHz from the center carrier frequency.
Dual carrier in uplink
: n = 2665 values correspond to test points that are separated by 15 kHz. The results cover the frequency range between -19980 kHz and 19980 kHz from the center frequency of both carriers, e.g. from f = (f
C2
 - f
C1
)/2.
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