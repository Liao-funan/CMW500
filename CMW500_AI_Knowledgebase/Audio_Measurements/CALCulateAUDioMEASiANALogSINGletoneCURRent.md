# CALCulateAUDioMEASiANALogSINGletoneCURRent

Module: Audio Measurements
Source: bb64301acd6b4dff.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Single Tone Measurement Results
 > 
CALCulate:AUDio:MEAS<i>:ANALog:SINGletone:CURRent?
CALCulate:AUDio:MEAS<i>:ANALog:SINGletone:CURRent? 
CALCulate:AUDio:MEAS<i>:ANALog:SINGletone:AVERage? 
CALCulate:AUDio:MEAS<i>:ANALog:SINGletone:EXTReme? 
CALCulate:AUDio:MEAS<i>:ANALog:SINGletone:SDEViation? 
FETCh:AUDio:MEAS<i>:ANALog:SINGletone:CURRent? 
FETCh:AUDio:MEAS<i>:ANALog:SINGletone:AVERage? 
FETCh:AUDio:MEAS<i>:ANALog:SINGletone:EXTReme? 
FETCh:AUDio:MEAS<i>:ANALog:SINGletone:SDEViation? 
READ:AUDio:MEAS<i>:ANALog:SINGletone:CURRent? 
READ:AUDio:MEAS<i>:ANALog:SINGletone:AVERage? 
READ:AUDio:MEAS<i>:ANALog:SINGletone:EXTReme? 
READ:AUDio:MEAS<i>:ANALog:SINGletone:SDEViation? 
Returns the current, average, extreme and standard deviation results of an analog single tone measurement.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_THDPercent>
THD result as percentage
Range: 
0 %  to  100 %
Default unit: 
%
<3_THDdB>
THD result as dB value
Range: 
-150 dB  to  0 dB
Default unit: 
dB
<4_THDPlusN>
THD + N result
Range: 
0 %  to  100 %
Default unit: 
%
<5_SINAD>
Range: 
0 dB  to  150 dB
Default unit: 
dB
<6_SNR>
Range: 
0 dB  to  150 dB
Default unit: 
dB
<7_DCLevel>
Range: 
-64 V  to  64 V
Default unit: 
V
<8_Frequency>
Range: 
0 Hz  to  200E+3 Hz
Default unit: 
Hz
<9_WeightLevRMS>
Weighted level RMS result
Range: 
0 V  to  64 V
Default unit: 
V
<10_BandLevRMS>
Bandpass level RMS result
Range: 
0 V  to  64 V
Default unit: 
V
<11_WeightLevPeak>
Weighted level peak result
Range: 
0 V  to  64 V
Default unit: 
V
<12_BandLevPeak>
Bandpass level peak result
Range: 
0 V  to  64 V
Default unit: 
V
Example: 
See 
"Single Tone Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10, V3.7.10 added result 11 and 12 and CALCulate commands
Top