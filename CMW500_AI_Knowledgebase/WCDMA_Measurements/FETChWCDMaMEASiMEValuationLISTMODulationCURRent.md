# FETChWCDMaMEASiMEValuationLISTMODulationCURRent

Module: WCDMA Measurements
Source: 473b050ebf554897.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:SDEViation? 
Return modulation single value results in list mode.
The values listed below in curly brackets {} are returned for the segments {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
, with n determined by 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_ReturnCode>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_EVMrms> <4_EVMpeak>
Error vector magnitude RMS and peak value
Range: 
0 %  to  100 %
Default unit: 
%
<5_MagErrorRMS>
Magnitude error RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<6_MagErrorPeak>
Magnitude error peak value
Range: 
-100 % to 100 % (AVERage: 0% to 100 %, SDEViation: 0 % to 50 %)
Default unit: 
%
<7_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<8_PhErrorPeak>
Phase error peak value
Range: 
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg
Default unit: 
deg
<9_IQoffset>
I/Q origin offset
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_IQimbalance>
I/Q imbalance
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<11_CarrierFreqErr>
Carrier frequency error
Range: 
-60000 Hz  to  60000 Hz
Default unit: 
Hz
<12_TransTimeErr>
Transmit time error (for future use)
Range: 
-250 chips  to  250 chips
Default unit: 
chips
<13_UEpower>}
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
Options: 
R&S CMW-KM012
Top