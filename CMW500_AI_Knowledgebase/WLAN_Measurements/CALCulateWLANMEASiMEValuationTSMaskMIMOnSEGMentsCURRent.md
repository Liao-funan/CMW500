# CALCulateWLANMEASiMEValuationTSMaskMIMOnSEGMentsCURRent

Module: WLAN Measurements
Source: 97957aa5fb59427c.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum? 
Return the limit line margin values of the transmit spectrum mask for MIMO measurements, antenna/stream number <n>, bandwidths with two segments.
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
<Margin_AB_S1>, <Margin_AB_S2>, ..., <Margin_BA_S1>, <Margin_BA_S2>
Comma-separated list of margin values, one value per spectrum mask area and segment
The number of spectrum mask areas depends on the selected standard, see 
Table "Spectrum mask areas"
.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top