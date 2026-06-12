# CALCulateWLANMEASiMEValuationTSMaskCURRent

Module: WLAN Measurements
Source: 9b80e447374442c9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum? 
Return the limit line margin values of the transmit spectrum mask for SISO measurements and bandwidths with one segment.
Margins for the current, average, minimum and maximum traces are returned. A positive result indicates that the trace is located above the limit line. The limit is exceeded.
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
<OutOfTol>
Out of tolerance result
Range: 
0 % to 100 %
Default unit: 
%
<Margin_AB> ... <Margin_BA>
Comma-separated list of margin values, one value per spectrum mask area
The number of margin values depends on the selected standard, see 
Table "Spectrum mask areas"
.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top