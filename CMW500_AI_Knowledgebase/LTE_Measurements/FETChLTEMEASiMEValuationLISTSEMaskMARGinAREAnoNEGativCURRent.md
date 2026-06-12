# FETChLTEMEASiMEValuationLISTSEMaskMARGinAREAnoNEGativCURRent

Module: LTE Measurements
Source: 205af5ff3124479a.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:NEGativ:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:NEGativ:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:NEGativ:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:NEGativ:MINimum? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:POSitiv:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:POSitiv:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:LIST:SEMask:MARGin:AREA<no>:POSitiv:MINimum? 
Return spectrum emission mask margin positions for all measured list mode segments.
The individual commands provide results for the 
CURRent
, 
AVERage
 and maximum traces (resulting in 
MINimum
 margins) for 
NEGative
 and 
POSitive
 offset frequencies.
The results are returned as pairs per segment: 
<Reliability>
, {
<MarginPosX>
, 
<MarginPosY>
}
Seg 1
, {
<MarginPosX>
, 
<MarginPosY>
}
Seg 2
, ...
Suffix: 
<no>
1..12
Selects the emission mask area
Return values: 
<Reliability>
"Reliability Indicator"
<MarginPosX>
X-position of margin for selected area
Range: 
-35 MHz  to  35 MHz
Default unit: 
Hz
<MarginPosY>
Y-position of margin for selected area
Range: 
-160 dB  to  160 dB
Default unit: 
dB
Example: 
See 
"Retrieving Single Results for All Segments"
Usage: 
Query only
Firmware/Software: 
V2.1.30
V3.2.80: increased <no> of areas to 12
Options: 
R&S CMW-KM012
Top