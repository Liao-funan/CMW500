# FETChGSMMEASiMEValuationLISTMODulationSDEViation

Module: GSM Measurements
Source: 4fdb12c8a6324726.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:SDEViation?
FETCh:GSM:MEAS<i>:MEValuation:LIST:MODulation:SDEViation? 
Returns the standard deviation of the modulation results in list mode.
The values listed below in curly brackets {} are returned for each measured segment: {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
. The position of measured segments within the range of configured segments and their number n is determined by 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_SegReliability>
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
0 %  to  50 %
Default unit: 
%
<9_MagErrorRMS> <10_MagErrorPeak>
Magnitude error RMS and peak value
Range: 
0 %  to  50 %
Default unit: 
%
<11_PhErrorRMS> <12_PhErrorPeak>
Phase error RMS and peak value
Range: 
0 deg  to  90 deg
Default unit: 
deg
<13_IQoffset>
I/Q origin offset
Range: 
0 dB  to  50 dB
Default unit: 
dB
<14_IQimbalance>
I/Q imbalance
Range: 
0 dB  to  50 dB
Default unit: 
dB
<15_FrequencyError>
Carrier frequency error
Range: 
0 Hz  to  56000 Hz
Default unit: 
Hz
<16_TimingError>
Transmit time error
Range: 
0 Symbol  to  100 Symbol
Default unit: 
Symbol
<17_BurstPower>
Burst power
Range: 
0 dB  to  71 dB
Default unit: 
dB
<18_AMPMdelay>}
AM-PM delay (determined for 8PSK and 16-QAM modulation only - for GMSK zeros are returned)
Range: 
0 s  to  0.9225E-6 s
Default unit: 
s
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top