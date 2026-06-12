# FETChGSMMEASiMEValuationLISTSEGMentnoSMODulation

Module: GSM Measurements
Source: 574d0a07e2e44671.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation?
FETCh:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation? 
Returns the spectrum due to modulation results for segment <no> in list mode. The result is averaged over the statistical length.
The values described below are returned by 
FETCh
 commands. The first six values ("Reliability" to "Out of Tolerance" result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
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
<7_CarrierPower>
Measured carrier output power (reference power)
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<8_PowOffsetM19> ... <27_PowOffsetM0> <28_PowCarrier> <29_PowOffsetP0> ... <48_PowOffsetP19>
<PowOffset M/P n>
 refers to the average burst power at the carrier frequency minus/plus the frequency offset value number n.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.4.11
V2.0.20: CALCulate command added.
V3.2.30: increased number of measured segments (from 200)
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top