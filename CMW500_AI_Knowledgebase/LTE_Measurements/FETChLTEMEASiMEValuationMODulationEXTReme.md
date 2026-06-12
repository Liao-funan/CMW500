# FETChLTEMEASiMEValuationMODulationEXTReme

Module: LTE Measurements
Source: 2336420420454c3f.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:LTE:MEAS<i>:MEValuation:MODulation:EXTReme?
FETCh:LTE:MEAS<i>:MEValuation:MODulation:EXTReme? 
READ:LTE:MEAS<i>:MEValuation:MODulation:EXTReme? 
CALCulate:LTE:MEAS<i>:MEValuation:MODulation:EXTReme? 
Returns the extreme single value results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_EVM_RMSlow> <4_EVM_RMShigh> <5_EVMpeakLow> <6_EVMpeakHigh>
Error vector magnitude RMS and peak values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<7_MErr_RMSlow> <8_MErr_RMShigh>
Magnitude error RMS value for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<9_MErrPeakLow> <10_MErrPeakHigh>
Magnitude error peak value for low and high EVM window position
Range: 
-100 % to 100 %
Default unit: 
%
<11_PErr_RMSlow> <12_PErr_RMSh>
Phase error RMS value for low and high EVM window position
Range: 
0 deg  to  180 deg
Default unit: 
deg
<13_PErrPeakLow> <14_PErrPeakHigh>
Phase error peak value for low and high EVM window position
Range: 
-180 deg to 180 deg
Default unit: 
deg
<15_IQoffset>
I/Q origin offset
Range: 
-100 dBc  to  0 dBc
Default unit: 
dBc
<16_FreqError>
Carrier frequency error
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
<17_TimingError>
Transmit time error
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts (basic LTE time unit)
<18_TXpowerMin> <19_TXpowerMax>
Minimum and maximum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<20_PeakPowMin> <21_PeakPowMax>
Minimum and maximum user equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<22_RBpowMin> <23_RBpowMax>
Minimum and maximum RB power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<24_EVM_DMRSl> <25_EVM_DMRSh>
Error vector magnitude DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<26_MErr_DMRSl> <27_MErr_DMRSh>
Magnitude error DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<28_PErr_DMRS> <29_PErr_DMRSh>
Phase error DMRS values for low and high EVM window position
Range: 
0 deg  to  180 deg
Default unit: 
deg
<30_GainImbal>
Gain imbalance
Range: 
-256 dB  to  256 dB
Default unit: 
dB
<31_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<32_EVM_SRS>
Error vector magnitude result for SRS signals
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.70: added <30_GainImbal> and <31_QuadError>
V3.5.40: added <32_EVM_SRS>
Top