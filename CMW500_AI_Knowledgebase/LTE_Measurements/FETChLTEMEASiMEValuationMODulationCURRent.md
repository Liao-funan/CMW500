# FETChLTEMEASiMEValuationMODulationCURRent

Module: LTE Measurements
Source: d83d8396da9f4082.htm

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
FETCh:LTE:MEAS<i>:MEValuation:MODulation:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:MODulation:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:MODulation:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:MODulation:SDEViation? 
READ:LTE:MEAS<i>:MEValuation:MODulation:CURRent? 
READ:LTE:MEAS<i>:MEValuation:MODulation:AVERage? 
READ:LTE:MEAS<i>:MEValuation:MODulation:SDEViation? 
CALCulate:LTE:MEAS<i>:MEValuation:MODulation:CURRent? 
CALCulate:LTE:MEAS<i>:MEValuation:MODulation:AVERage? 
Return the current, average and standard deviation single value results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
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
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
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
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
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
<18_TXpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<19_PeakPower>
User equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<20_RBpower>
RB power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<21_EVM_DMRSl> <22_EVM_DMRSh>
Error vector magnitude DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<23_MErr_DMRSl> <24_MErr_DMRSh>
Magnitude error DMRS values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<25_PErr_DMRS> <26_PErr_DMRSh>
Phase error DMRS values for low and high EVM window position
Range: 
0 deg  to  180 deg
Default unit: 
deg
<27_GainImbal>
Gain imbalance
Range: 
-256 dB  to  256 dB
Default unit: 
dB
<28_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<29_EVM_SRS>
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
V3.2.70: added <27_GainImbal> and <28_QuadError>
V3.5.40: added <29_EVM_SRS>
Top