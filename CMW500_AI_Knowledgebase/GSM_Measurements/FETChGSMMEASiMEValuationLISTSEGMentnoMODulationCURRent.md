# FETChGSMMEASiMEValuationLISTSEGMentnoMODulationCURRent

Module: GSM Measurements
Source: d253dbf756e44052.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MAXimum? 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:CURRent? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MAXimum? 
Returns the modulation results for segment <no> in list mode.
The values described below are returned by 
FETCh
 commands. The first six values ("Reliability" to "Out of Tolerance" result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Suffix: 
<no>
1..512
Relative number within the range of measured segments
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatistExpired>
Number of measured steps
Range: 
0  to  <Statistical Length> (integer value)
<4_BurstType>
GMSK |
 
 EPSK |
 
 ACCess |
 
 Q16 |
 
 OFF
Detected burst type of the last measured burst
GMSK:
 Normal burst, GMSK-modulated
EPSK:
 Normal burst, 8PSK-modulated
ACCess:
 Access burst
Q16:
 Normal burst, 16-QAM-modulated
OFF:
 Inactive slot
<5_SlotStatistic>
ON |
 
 OFF
ON:
 Averaging over different burst type
OFF:
 Uniform burst type in the averaging range
<6_OutOfTolerance>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<7_EVMRMS> <8_EVMpeak>
Error vector magnitude RMS and peak value
Range: 
0 %  to  100 %
Default unit: 
%
<9_MagErrorRMS>
Magnitude error RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<10_MagErrorPeak>
Magnitude error peak value
Range: 
-100 % to 100 % (AVERage: 0% to 100 %, SDEViation: 0 % to 50 %)
Default unit: 
%
<11_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<12_PhErrorPeak>
Phase error peak value
Range: 
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
Default unit: 
deg
<13_IQoffset>
I/Q origin offset
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<14_IQimbalance>
I/Q imbalance
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<15_FrequencyError>
Carrier frequency error
Range: 
-56000 Hz  to  56000 Hz
Default unit: 
Hz
<16_TimingError>
Transmit time error
Range: 
-100 Symbol  to  100 Symbol
Default unit: 
Symbol
<17_BurstPower>
Burst power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<18_AMPMdelay>
AM-PM delay, determined for 8PSK and 16-QAM modulation only - for GMSK zeros are returned
Range: 
-0.9225E-6 s  to  0.9225E-6 s (a quarter of a symbol period)
Default unit: 
s
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.4.11
V.2.0.20: CALCulate commands added.
V3.2.30: increased number of measured segments (from 200)
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top