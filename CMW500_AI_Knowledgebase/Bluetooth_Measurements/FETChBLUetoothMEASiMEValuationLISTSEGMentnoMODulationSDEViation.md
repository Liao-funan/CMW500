# FETChBLUetoothMEASiMEValuationLISTSEGMentnoMODulationSDEViation

Module: Bluetooth Measurements
Source: 7524c7ff402b42fe.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation?
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:SDEViation? 
Returns modulation single value results for segment<no> in list mode.
The command returns all parameters listed below, independent of the selected list mode setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..48
Segment number
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_Out of Tol>
Percentage of measured bursts with failed limit check
Range: 
0 % to 100 %
Default unit: 
%
<4_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<5_FreqAcc or ωi>
Frequency accuracy (BR, LE) or initial center frequency error 
ω
i
 (EDR)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<6_FreqDrift>
Frequency drift (BR, LE)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<7_MaxDriftRate>
Maximal drift rate (BR, LE)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz/50 μs
<8_Δf2 99.9%>
Frequency deviation value Δf2 above which 99.9% of all measured Δf2 values occur (BR, LE)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<9_ω0 + ωi>
Overall uncompensated frequency error (EDR)
Range: 
-240.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<10_ω0max>
Maximum compensated frequency error (EDR)
Range: 
-240.0 kHz  to  +240.0 kHz
Default unit: 
Hz
<11_RMS DEVM>
RMS DEVM (EDR)
Range: 
0  to  1
<12_Peak DEVM>
Peak DEVM (EDR)
Range: 
0  to  1
<13_P99 DEVM>
DEVM value below which 99% of all measured DEVM values occur (EDR)
Range: 
0  to  1
<14_FreqOffset>
Frequency offset (LE)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
<15_InitialFreqDrift>
Initial frequency drift (LE)
Range: 
-0.99999E+6 Hz  to  0.99999E+6 Hz
Default unit: 
Hz
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top