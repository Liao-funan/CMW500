# FETChNIOTMEASiMEValuationLISTSEGMentnoMODulationCURRent

Module: NBIoT Measurements
Source: ec73e1bd025f4dd9.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation? 
Returns current, average and standard deviation modulation single value results for segment <no> in list mode.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Suffix: 
<no>
1..1000
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Reached statistical length in slots
Range: 
0  to  1000
<4_OutOfTol>
Percentage of measured slots with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<5_EVM_RMS>
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
<8_MagErrPeak>
Magnitude error peak value
Range: 
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
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
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
Default unit: 
deg
<11_IQOffset>
I/Q origin offset
Range: 
-100 dBc  to  0 dBc
Default unit: 
dBc
<12_FreqError>
Carrier frequency error
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
<13_TimingError>
Transmit time error
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts
<14_TXpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<15_PeakPower>
User equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<16_SC_Power>
Power in allocated subcarriers
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<17_EVM_DMRS>
Error vector magnitude DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<18_MagErrDMRS>
Magnitude error DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<19_PhErrorDMRS>
Phase error DMRS values
Range: 
0 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top