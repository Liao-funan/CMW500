# CONFigureLTESIGNiULSETAPUSChTPCUDPattern

Module: LTE Signaling
Source: 1433247db3604d60.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:UDPattern
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:UDPattern 
<PatternLength>, <Value1>[, <Value2>, <Value3>, <Value4>, <Value5>, <Value6>, <Value7>, <Value8>, <Value9>, <Value10>, <Value11>, <Value12>, <Value13>, <Value14>, <Value15>, <Value16>, <Value17>, <Value18>, <Value19>, <Value20>]
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:UDPattern 
<PatternLength>, <Value1>[, <Value2>, <Value3>, <Value4>, <Value5>, <Value6>, <Value7>, <Value8>, <Value9>, <Value10>, <Value11>, <Value12>, <Value13>, <Value14>, <Value15>, <Value16>, <Value17>, <Value18>, <Value19>, <Value20>]
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:UDPattern 
<PatternLength>, <Value1>[, <Value2>, <Value3>, <Value4>, <Value5>, <Value6>, <Value7>, <Value8>, <Value9>, <Value10>, <Value11>, <Value12>, <Value13>, <Value14>, <Value15>, <Value16>, <Value17>, <Value18>, <Value19>, <Value20>]
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:UDPattern 
<PatternLength>, <Value1>[, <Value2>, <Value3>, <Value4>, <Value5>, <Value6>, <Value7>, <Value8>, <Value9>, <Value10>, <Value11>, <Value12>, <Value13>, <Value14>, <Value15>, <Value16>, <Value17>, <Value18>, <Value19>, <Value20>]
Defines a pattern for power control of the PUSCH with the TPC setup 
UDSingle
 or 
UDContinuous
.
The pattern consists of 1 to 20 TPC commands. To configure the pattern, specify the pattern length and a corresponding number of TPC commands.
If you specify fewer TPC commands than required according to the pattern length, the previously defined values are used for the remaining commands. If you specify more TPC commands than required according to the pattern length, all values are set, but only the values corresponding to the pattern length are used.
Suffix: 
<c>
1..4
Parameters:
<PatternLength>
Number of values to be considered for the pattern
Range: 
1  to  20
*RST:
10
<Value1>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value2>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value3>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value4>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value5>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value6>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value7>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value8>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value9>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value10>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value11>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value12>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value13>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value14>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value15>
Range: 
-1 dB  to  3 dB
*RST:
1 dB
Default unit: 
dB
<Value16>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value17>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value18>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value19>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
<Value20>
Range: 
-1 dB  to  3 dB
*RST:
-1 dB
Default unit: 
dB
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
PCC V2.0.20, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"User-Defined Pattern"
Top