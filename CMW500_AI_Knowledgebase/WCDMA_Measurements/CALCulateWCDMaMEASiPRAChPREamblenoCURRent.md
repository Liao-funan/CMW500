# CALCulateWCDMaMEASiPRAChPREamblenoCURRent

Module: WCDMA Measurements
Source: 06876c44abc34cab.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Results (Single Values)
 > 
CALCulate:WCDMa:MEAS<i>:PRACh:PREamble<no>:CURRent?
CALCulate:WCDMa:MEAS<i>:PRACh:PREamble<no>:CURRent? 
FETCh:WCDMa:MEAS<i>:PRACh:PREamble<no>:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:PREamble<no>:CURRent? 
Return the single value results for a selected preamble.
See also 
"Detailed Views: TX Measurement"
Suffix: 
<no>
1..5
Number of the preamble
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_UEpower>
Mean preamble power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<3_PowerSteps>
Mean preamble power minus mean power of previous preamble
For first preamble NCAP is returned.
Range: 
-10 dB  to  50 dB
Default unit: 
dB
<4_CarrierFreqErr>
Carrier frequency error
Range: 
-60000 Hz  to  60000 Hz
Default unit: 
Hz
<5_EVMrms>
Error vector magnitude RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<6_EVMpeak>
Error vector magnitude peak value
Range: 
0 %  to  100 %
Default unit: 
%
<7_MagErrorRMS>
Magnitude error RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<8_MagErrorPeak>
Magnitude error peak value
Range: 
-100 %  to  100 %
Default unit: 
%
<9_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<10_PhErrorPeak>
Phase error peak value
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<11_IQoffset>
I/Q origin offset
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<12_IQimbalance>
I/Q imbalance
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<13_Signature>
Detected preamble signature
Range: 
0  to  15
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top