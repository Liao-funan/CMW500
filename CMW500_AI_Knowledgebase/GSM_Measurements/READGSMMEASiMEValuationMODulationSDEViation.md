# READGSMMEASiMEValuationMODulationSDEViation

Module: GSM Measurements
Source: b6fb6ca166c2456e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
READ:GSM:MEAS<i>:MEValuation:MODulation:SDEViation?
READ:GSM:MEAS<i>:MEValuation:MODulation:SDEViation? 
FETCh:GSM:MEAS<i>:MEValuation:MODulation:SDEViation? 
Returns the standard deviation of the single slot modulation results of the multi-evaluation measurement.
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
SMODulation
) exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_EVMRMS> <4_EVMpeak>
Error vector magnitude RMS and peak value
Range: 
0 %  to  50 %
Default unit: 
%
<5_MagErrorRMS> <6_MagErrorPeak>
Magnitude error RMS and peak value
Range: 
0 %  to  50 %
Default unit: 
%
<7_PhaseErrorRMS> <8_PhaseErrorPeak>
Phase error RMS and peak value
Range: 
0 deg  to  90 deg
Default unit: 
deg
<9_IQoffset>
I/Q origin offset
Range: 
0 dB  to  50 dB
Default unit: 
dB
<10_IQimbalance>
I/Q imbalance
Range: 
0 dB  to  50 dB
Default unit: 
dB
<11_FrequencyError>
Carrier frequency error
Range: 
0 Hz  to  56000 Hz
Default unit: 
Hz
<12_TimingError>
Transmit time error
Range: 
0 Sym  to  100 Sym
Default unit: 
Symbol
<13_BurstPower>
Burst power
Range: 
0 dB  to  71 dB
Default unit: 
dB
<14_AMPMdelay>
AMPM delay (determined for 8PSK and 16-QAM modulation only - for GMSK zeros are returned)
Range: 
0 s  to  0.9225E-6 s
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