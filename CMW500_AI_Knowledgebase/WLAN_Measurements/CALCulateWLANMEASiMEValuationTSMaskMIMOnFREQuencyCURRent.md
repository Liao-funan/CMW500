# CALCulateWLANMEASiMEValuationTSMaskMIMOnFREQuencyCURRent

Module: WLAN Measurements
Source: 096fec7f988d412b.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Positions
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum? 
Return the X-positions of the limit line margins of the transmit spectrum mask, for MIMO measurements, antenna/stream number <n>, bandwidths with one segment.
Positions for the current, average, minimum and maximum traces are returned.
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
Comma-separated list of frequencies, one value per margin
The number of margins equals the number of spectrum mask areas and depends on the selected standard, see 
Table "Spectrum mask areas"
.
Range: 
-40E+6 Hz  to  40E+6 Hz
Default unit: 
Hz
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