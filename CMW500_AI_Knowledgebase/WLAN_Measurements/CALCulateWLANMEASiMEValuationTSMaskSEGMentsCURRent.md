# CALCulateWLANMEASiMEValuationTSMaskSEGMentsCURRent

Module: WLAN Measurements
Source: cf97eda3b3f94930.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum? 
Return the limit line margin values of the transmit spectrum mask, for SISO measurements and bandwidths with two segments.
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
<OutOfTolS1>
Out of tolerance result, segment 1
Range: 
0 % to 100 %
Default unit: 
%
<OutOfTolS2>
Out of tolerance result, segment 2
Range: 
0 % to 100 %
Default unit: 
%
<Margin_AB_S1> <Margin_AB_S2> ... <Margin_BA_S1> <Margin_BA_S2>
Comma-separated list of margin values, one value per spectrum mask area and segment
The number of spectrum mask areas depends on the selected standard, see 
Table "Spectrum mask areas"
.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top