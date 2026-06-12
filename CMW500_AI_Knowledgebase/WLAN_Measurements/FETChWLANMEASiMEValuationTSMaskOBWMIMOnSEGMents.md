# FETChWLANMEASiMEValuationTSMaskOBWMIMOnSEGMents

Module: WLAN Measurements
Source: d0f38c129fbe4cd4.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum OBW Results
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>:SEGMents?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>:SEGMents? 
READ:WLAN:MEAS<i>:MEValuation:TSMask:OBW:MIMO<n>:SEGMents? 
Return the OBW results for MIMO measurements, antenna/stream number <n>, bandwidths with two segments.
Suffix: 
<n>
1..8
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OBWCurS1>
Current OBW value, segment 1
Default unit: 
Hz
<3_OBWCurS2>
Current OBW value, segment 2
Default unit: 
Hz
<4_OBWAvgS1>
Average OBW value, segment 1
Default unit: 
Hz
<5_OBWAvgS2>
Average OBW value, segment 2
Default unit: 
Hz
<6_OBWMaxS1>
Maximum OBW value, segment 1
Default unit: 
Hz
<7_OBWMaxS2>
Maximum OBW value, segment 2
Default unit: 
Hz
<8_OBWStdDevS1>
Standard deviation OBW value, segment 1
Default unit: 
Hz
<9_OBWStdDevS2>
Standard deviation OBW value, segment 2
Default unit: 
Hz
<10_OBWleftS1>
Lower edge frequency of OBW, segment 1
Default unit: 
Hz
<11_OBWleftS2>
Lower edge frequency of OBW, segment 2
Default unit: 
Hz
<12_OBWrightS1>
Upper edge frequency of OBW, segment 1
Default unit: 
Hz
<13_OBWrightS2>
Upper edge frequency of OBW, segment 2
Default unit: 
Hz
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