# CALCulateWLANMEASiMEValuationMODulationCURRent

Module: WLAN Measurements
Source: 7f951041135d4360.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SDEViation? 
Return the single value results for OFDM SISO measurements. For switched MIMO measurements, the stream/antenna-independent values are returned. For 80+80 MHz signals, the segment-independent values are returned. There are current, average, minimum, maximum and standard deviation results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_OutOfTol>
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
<3_MCSIndex>
Modulation and coding scheme index
Range: 
0  to  76
<4_Modulation>
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
<5_PayloadSym>
Number of OFDM symbols in the payload of the measured burst
Range: 
1 symbol  to  1366 symbols
Default unit: 
symbol
<6_MeasuredSym>
Number of measured payload OFDM symbols
Range: 
1 symbol  to  1366 symbols
Default unit: 
symbol
<7_PayloadBytes>
Number of bytes in the payload of the measured burst
Range: 
1 byte  to  4095 bytes
Default unit: 
byte
<8_GuardInterval>
SHORt |
 
 LONG |
 
 GI08 |
 
 GI16 |
 
 GI32
SHORt, LONG
: short or long guard interval (up to 802.11ac)
GI08, GI16, GI32
: 0.8 μs, 1.6 μs, and 3.2 μs guard interval durations (for 802.11ax)
<9_NoSS>
Number of spatial streams
Range: 
1  to  4
<10_NoSTS>
Number of space-time streams
Range: 
1  to  4
<11_BurstRate>
If a modulation filter is used (see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
MODFilter
), the burst rate indicates the share of bursts of the selected modulation type in the bursts received. Otherwise, it returns 
1
.
Default unit: 
%
<12_PowerBackoff>
Minimum distance of signal power to reference level since the start of the measurement
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<13_BurstPower>
RMS power of the measured burst
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<14_PeakPower>
Peak power of the measured burst
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<15_CrestFactor>
Range: 
0 dB  to  60 dB
Default unit: 
dB
<16_EVMAllCarr>
EVM for all carriers
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<17_EVMDataCarr>
EVM for data carriers
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<18_EVMPilotCarr>
EVM for pilot carriers
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<19_FreqError>
Center frequency error
Range: 
-150E+6 Hz  to  150E+6 Hz
Default unit: 
Hz
<20_ClockError>
Symbol clock error
Range: 
-125 ppm  to  125 ppm
Default unit: 
ppm
<21_IQOffset>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<22_DCPower>
Power of the DC subcarriers
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<23_GainImbalance>
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<24_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
V3.7.20: added modulation 
UNSPecified, BPSK14, QPSK14, 16Q14, 16Q38
 and guard interval 
GI08, GI16, GI32
V3.7.21: added modulation 
BPSK, QPSK, 16Q, 64Q, 256Q, 1KQ
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top