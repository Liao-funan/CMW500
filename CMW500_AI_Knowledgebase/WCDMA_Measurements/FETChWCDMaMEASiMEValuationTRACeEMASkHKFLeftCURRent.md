# FETChWCDMaMEASiMEValuationTRACeEMASkHKFLeftCURRent

Module: WCDMA Measurements
Source: 0cc9a2e769bb4d8e.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFLeft:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:EMASk:HKFRight:MAXimum? 
Returns the values of the spectrum emission 100 kHz traces. The left section and the right section of each trace are retrieved by separate commands (distinguished by the terms HKFLeft and HKFRight). The results of the current, average and maximum traces can be retrieved.
The covered frequency range depends on the limit line H mode (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIMit:
​
EMASk:
​
ABSolute
).
See also 
"Detailed Views: Spectrum Emission Mask"
Return values: 
<Reliability>
"Reliability Indicator"
<Value1> ... <Value297/327>
These values correspond to test points that are separated by 30 kHz. The covered frequency ranges are:
Left section, line H mode B/C: -12450 kHz to -3570 kHz/-2670 kHz from the carrier
Right section, line H mode B/C: 3570 kHz/2670 kHz to 12450 kHz from the carrier
Line H mode A is not used for 100 kHz traces (NCAPs returned)
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
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top