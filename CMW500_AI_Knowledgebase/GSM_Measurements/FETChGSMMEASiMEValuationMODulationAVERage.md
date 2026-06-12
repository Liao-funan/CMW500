# FETChGSMMEASiMEValuationMODulationAVERage

Module: GSM Measurements
Source: f37d0b955f1e42a9.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:MODulation:AVERage?
FETCh:GSM:MEAS<i>:MEValuation:MODulation:AVERage? 
READ:GSM:MEAS<i>:MEValuation:MODulation:AVERage? 
CALCulate:GSM:MEAS<i>:MEValuation:MODulation:AVERage? 
Returns the average single slot modulation results of the multi-evaluation measurement.
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
<2_OutOfTolerance>
Percentage of measurement intervals / bursts of the statistic count (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
MODulation
) exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_EVMRMS> <4_EVMpeak>
Error vector magnitude RMS and peak value
Range: 
0 %  to  100 %
Default unit: 
%
<5_MagErrorRMS> <6_MagErrorPeak>
Magnitude error RMS and peak value
Range: 
0 %  to  100 %
Default unit: 
%
<7_PhaseErrorRMS> <8_PhaseErrorPeak>
Phase error RMS and peak value
Range: 
0 deg  to  180 deg
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
<11_FrequencyError>
Carrier frequency error
Range: 
-56000 Hz  to  56000 Hz
Default unit: 
Hz
<12_TimingError>
Transmit time error
Range: 
-100 Sym  to  100 Sym
Default unit: 
Symbol
<13_BurstPower>
Burst power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<14_AMPMdelay>
AMPM delay (determined for 8PSK and 16-QAM modulation only - for GMSK zeros are returned)
Range: 
-0.9225E-6 s  to  0.9225E-6 s
Default unit: 
s
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top