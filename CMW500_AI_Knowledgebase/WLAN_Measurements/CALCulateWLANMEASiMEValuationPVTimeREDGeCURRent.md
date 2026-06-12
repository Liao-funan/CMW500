# CALCulateWLANMEASiMEValuationPVTimeREDGeCURRent

Module: WLAN Measurements
Source: 9fc68502a769411a.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Single Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:REDGe:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:FEDGe:MAXimum? 
Returns the current, average and maximum ramp durations of the power vs. time measurement, for the rising edge (
REDGe
) and falling edge (
FEDGe
).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<Time>
Range: 
0 µs  to  10 µs
Default unit: 
μs
<OutOfTol>
Out of tolerance result
Range: 
0 % to 100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V2.1.10, V2.1.30 out of tolerance percentage added
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top