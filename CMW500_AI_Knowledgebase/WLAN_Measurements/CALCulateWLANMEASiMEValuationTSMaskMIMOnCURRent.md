# CALCulateWLANMEASiMEValuationTSMaskMIMOnCURRent

Module: WLAN Measurements
Source: d7801b44b6054f29.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum? 
Return the limit line margin values of the transmit spectrum mask for MIMO measurements, antenna/stream number <n>, bandwidths with one segment.
Margins for the current, average, minimum and maximum traces are returned. A positive result indicates that the trace is located above the limit line. The limit is exceeded.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<n>
1..8
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
"Performing Single-Shot Measurements (OFDM, CMIMO)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top