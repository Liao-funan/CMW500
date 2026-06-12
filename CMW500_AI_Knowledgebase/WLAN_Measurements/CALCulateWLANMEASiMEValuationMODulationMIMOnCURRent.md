# CALCulateWLANMEASiMEValuationMODulationMIMOnCURRent

Module: WLAN Measurements
Source: c4e21b97b70e43af.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SDEViation? 
Return the single value results for switched MIMO measurements, antenna/stream number <n>. For 80+80 MHz signals, the segment-independent values are returned. There are current, average, minimum, maximum and standard deviation results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<n>
1..8
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_Modulation>
UNSPecified |
 
 BPSK14 |
 
 BPSK12 |
 
 BPSK34 |
 
 QPSK14 |
 
 QPSK12 |
 
 QPSK34 |
 
 16Q14 |
 
 16Q38 |
 
 16Q12 |
 
 16Q34 |
 
 64Q12 |
 
 64Q23 |
 
 64Q34 |
 
 64Q56 |
 
 256Q34 |
 
 256Q56 |
 
 1KQ34 |
 
 1KQ56 |
 
 BPSK |
 
 QPSK |
 
 16Q |
 
 64Q |
 
 256Q |
 
 1KQ
Modulation scheme and coding rate, stream <n>
UNSPecified
: modulation unknown
BPSK
: BPSK, coding rate unknown
BPSK12, BPSK34
 (BPSKab): BPSK, coding rate a/b
BPSK14
: BPSK, coding rate 1/2 DCM
QPSK
: QPSK, coding rate unknown
QPSK12, QPSK34
 (QPSKab): QPSK, coding rate a/b
QPSK14
: QPSK, coding rate 1/2 DCM
16Q
: 16-QAM, coding rate unknown
16Q12, 16Q34
 (16Qab): 16-QAM, coding rate a/b
16Q14
: 16-QAM, coding rate 1/2 DCM
16Q38
: 16-QAM, coding rate 3/4 DCM
64Q
: 64-QAM, coding rate unknown
64Q12, 64Q23, 64Q34, 64Q56
 (64Qab): 64-QAM, coding rate a/b
256Q
: 256-QAM, coding rate unknown
256Q34, 256Q56
 (256Qab): 256-QAM, coding rate a/b
1KQ
: 1024-QAM, coding rate unknown
1KQ34, 1KQ56
 (1KQab): 1024-QAM, coding rate a/b
<3_PowerBackoff>
Power backoff, antenna <n>
Minimum distance of signal power to reference level since the start of the measurement
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<4_BurstPower>
Burst power, antenna <n>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<5_PeakPower>
Peak power, antenna <n>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<6_CrestFactor>
Crest factor, antenna <n>
Range: 
0 dB  to  60 dB
Default unit: 
dB
<7_EVMAllCarr>
EVM for all carriers, stream <n>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<8_EVMDataCarr>
EVM for data carriers, stream <n>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<9_EVMPilotCarr>
EVM for pilot carriers, stream <n>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_IQOffset>
I/Q offset, antenna <n>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<11_DCPower>
Power of the DC subcarriers, antenna <n>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<12_GainImbalance>
Gain imbalance, antenna <n>
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<13_QuadError>
Quadrature error, antenna <n>
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
V3.7.20: added modulation 
UNSPecified, BPSK14, QPSK14, 16Q14, 16Q38
V3.7.21: added modulation 
BPSK, QPSK, 16Q, 64Q, 256Q, 1KQ
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top