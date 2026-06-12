# FETChWLANMEASiMEValuationLISTSEGMentSegMODulationOFDMCURRent

Module: WLAN Measurements
Source: 52a6d94af583420d.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:MODulation:OFDM:SDEViation? 
Return modulation single value results (OFDM signal) for segment <Seg> in list mode.
Suffix: 
<Seg>
1..100
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatExpired>
Reached statistical length in bursts
Range: 
0  to  1000
<4_ModType>
BP1_5 |
 
 BP2_25 |
 
 BP3 |
 
 BP4_5 |
 
 BPM6 |
 
 BPM9 |
 
 QM3 |
 
 QM4_5 |
 
 QM6 |
 
 QM9 |
 
 QM12 |
 
 QM18 |
 
 Q1M6 |
 
 Q1M9 |
 
 Q1M12 |
 
 Q1M18 |
 
 Q1M24 |
 
 Q1M36 |
 
 Q6M12 |
 
 Q6M135 |
 
 Q6M24 |
 
 Q6M27 |
 
 Q6M48 |
 
 Q6M54 |
 
 BR12 |
 
 QR12 |
 
 QR34 |
 
 Q1R12 |
 
 Q1R34 |
 
 Q6R23 |
 
 Q6R34 |
 
 Q6R56
See 
Table "Modulation types for list mode"
<5_PayloadLength>
Number of OFDM symbols in the payload of the measured burst
Range: 
1 symbol  to  1366 symbols
Default unit: 
symbol
<6_BurstPower>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<7_EVMAllCarr> <8_EVMDataCarr> <9_EVMPilotCarr>
Error vector magnitude for all carriers, data carriers and pilot carriers
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_FreqError>
Center frequency error
Range: 
-150E+6 Hz  to  150E+6 Hz
Default unit: 
Hz
<11_SymClockErr>
Symbol clock error
Range: 
-125 ppm  to  125 ppm
Default unit: 
ppm
<12_IQOffset>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<13_GainImbal>
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<14_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<15_OutOfTol>
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
<16_GuardInterval>
SHORt |
 
 LONG |
 
 GI08 |
 
 GI16 |
 
 GI32
SHORt, LONG
: short or long guard interval (up to 802.11ac)
GI08, GI16, GI32
: 0.8 μs, 1.6 μs, and 3.2 μs guard interval durations (for 802.11ax)
Example: 
See 
"Using WLAN List Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
V3.7.20: added guard interval 
GI08, GI16, GI32
Options: 
R&S CMW-KM012
Top