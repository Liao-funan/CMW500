# CALCulateLTEMEASiENBMEValuationMODulationCURRent[MINPut]

Module: LTE eNodeB Measurements
Source: 6820472882cc46d2.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:MODulation:CURRent[:MINPut]?
CALCulate:LTE:MEAS<i>:ENB:MEValuation:MODulation:CURRent[:MINPut]? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:MODulation:AVERage[:MINPut]? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MODulation:CURRent[:MINPut]? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MODulation:AVERage[:MINPut]? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:MODulation:SDEViation[:MINPut]? 
READ:LTE:MEAS<i>:ENB:MEValuation:MODulation:CURRent[:MINPut]? 
READ:LTE:MEAS<i>:ENB:MEValuation:MODulation:AVERage[:MINPut]? 
READ:LTE:MEAS<i>:ENB:MEValuation:MODulation:SDEViation[:MINPut]? 
Return the current, average and standard deviation single value results for the measured RF input.
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
<7_MErrRMSlow> <8_MErrRMShigh>
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
<11_PErrRMSlow> <12_PErrRMShigh>
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
<15_IQOffset>
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
<20_RSTXpower>
RSTX power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<21_SymTXpower>
OFDM symbol TX power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top