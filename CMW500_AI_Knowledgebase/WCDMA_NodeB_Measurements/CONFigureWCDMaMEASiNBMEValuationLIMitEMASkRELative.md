# CONFigureWCDMaMEASiNBMEValuationLIMitEMASkRELative

Module: WCDMA NodeB Measurements
Source: 373e9c089eed4a78.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Spectrum)
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:EMASk:RELative
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:EMASk:RELative 
<PointA>, <PointB>, <PointC>, <PointD>, <PointE>, <PointF>, <PointG>, <PointH>, <PointI>, <PointJ>
Defines relative limits for the spectrum emission curves.
Preferably use additional command to disables or enables the limit check for limit lines (i.e. pair of limit points):
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
NB:
​
MEValuation:
​
LIMit:
​
EMASk:
​
RELative:
​
ENABle
See also 
"Spectrum Emission Mask Limits"
.
Parameters:
<PointA>
Range: 
-90 dB  to  0 dB
*RST:
-56 dB
Default unit: 
dB
<PointB>
Range: 
-90 dB  to  0 dB
*RST:
-56 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointC>
Range: 
-90 dB  to  0 dB
*RST:
-52 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointD>
Range: 
-90 dB  to  0 dB
*RST:
-52 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointE>
Range: 
-90 dB  to  0 dB
*RST:
-65 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointF>
Range: 
-90 dB  to  0 dB
*RST:
-65 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointG>
Range: 
-90 dB  to  0 dB
*RST:
-68 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointH>
Range: 
-90 dB  to  0 dB
*RST:
-53 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointI>
Range: 
-90 dB  to  0 dB
*RST:
-53 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<PointJ>
Range: 
-90 dB  to  0 dB
*RST:
-53 dB, ON
Default unit: 
dB
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Limits"
Top