# FETChLTEMEASiMEValuationLISTSEGMentnoMODulationEXTReme

Module: LTE Measurements
Source: 0f69735dad374706.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:EXTReme? 
Return modulation single value results for segment <no> in list mode.
The values described below are returned by 
FETCh
 commands. The first four values (reliability to out-of-tolerance result) are also returned by 
CALCulate
 commands. The remaining values returned by 
CALCulate
 commands are limit check results, one value for each result listed below.
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
Percentage of measured subframes with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<5_EVM_RMSlow> <6_EVM_RMShigh> <7_EVMpeakLow> <8_EVMpeakHigh>
Error vector magnitude RMS and peak values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<9_MErr_RMSlow> <10_MErr_RMShigh>
Magnitude error RMS value for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<11_MErrPeakLow> <12_MErrPeakHigh>
Magnitude error peak value for low and high EVM window position
Range: 
-100 %  to  100 %
Default unit: 
%
<13_PErr_RMSlow> <14_PErr_RMSh>
Phase error RMS value for low and high EVM window position
Range: 
0 deg  to  180 deg
Default unit: 
deg
<15_PErrPeakLow> <16_PErrPeakHigh>
Phase error peak value for low and high EVM window position
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<17_IQoffset>
I/Q origin offset
Range: 
-100 dBc  to  0 dBc
Default unit: 
dBc
<18_FreqError>
Carrier frequency error
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
<19_TimingError>
Transmit time error
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts (basic LTE time unit)
<20_TXpowerMin> <21_TXpowerMax>
Minimum and maximum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<22_PeakPowMin> <23_PeakPowMax>
Minimum and maximum user equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<24_RBpowMin> <25_RBpowMax>
Minimum and maximum RB power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<26_EVM_DMRSl> <27_EVM_DMRSh>
Error vector magnitude DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<28_MErr_DMRSl> <29_MErr_DMRSh>
Magnitude error DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<30_PErr_DMRS> <31_PErr_DMRSh>
Phase error DMRS values for low and high EVM window position
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
V2.0.10
V2.0.20: CALCulate command
V2.1.25: increased maximum number of segments to 250
V2.1.30: increased maximum number of segments to 512
V3.0.50: increased maximum number of segments to 1000
Options: 
R&S CMW-KM012
Top