# FETChGSMMEASiMEValuationLISTOVERview

Module: GSM Measurements
Source: 7fd067fa782f4f8d.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, Result Groups)
 > 
FETCh:GSM:MEAS<i>:MEValuation:LIST:OVERview?
FETCh:GSM:MEAS<i>:MEValuation:LIST:OVERview? 
CALCulate:GSM:MEAS<i>:MEValuation:LIST:OVERview? 
Returns all single results in list mode.
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
The values described below are returned by 
FETCh
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<1_Reliability>
"Reliability Indicator"
{<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_OutOfTolerance>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<4_AverBurstPow>
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<5_EVMRMS> <6_EVMpeak>
Error vector magnitude RMS and peak value
Range: 
0 %  to  100 %
Default unit: 
%
<7_EVM95Perc>
Error vector magnitude percentile
Range: 
0 %  to  100 %
Default unit: 
%
<8_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<9_PhErrorPeak>
Phase error peak value
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<10_IQoffset>
Average I/Q origin offset
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<11_FreqError>
Average carrier frequency error
Range: 
-56000 Hz  to  56000 Hz
Default unit: 
Hz
<12_SpecModM5> <13_SpecModM4> <14_ModCarrier> <15_SpecModP4> <16_SpecModP5>
Spectrum due to modulation results. 
<SpecMod M/P n>
 refers to the average burst power at the carrier frequency minus/plus the frequency offset value number n.
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<17_SpecSwM2> <18_SpecSwM1> <19_SwCarrier> <20_SpecSwP1> <21_SpecSwP2>}
Spectrum due to switching results. 
<SpecSw M/P n>
 refers to the average burst power at the carrier frequency minus/plus the frequency offset value number n.
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"GSM List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.15.21
V2.0.20: CALCulate command added.
Options: 
R&S CMW-KM012; R&S CMW-KM201 (for 16-QAM)
Top