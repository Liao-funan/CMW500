# CONFigureWCDMaSIGNiCMODeSINGleTYPE

Module: WCDMA Signaling
Source: 70b366d3020b447a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Compressed Mode Settings
 > 
CONFigure:WCDMa:SIGN<i>:CMODe:SINGle:TYPE
CONFigure:WCDMa:SIGN<i>:CMODe:SINGle:TYPE 
<Type>
Selects the single transmission gap patterns for a definite measurement purpose.
Parameters:
<Type>
RFA |
 
 RFB |
 
 A |
 
 B |
 
 C |
 
 D |
 
 E |
 
 F
RFA
: for WCDMA neighbor cell measurements
(see 3GPP TS 34.121, table 5.7.5)
RFB
: for WCDMA neighbor cell measurements
(see 3GPP TS 34.121, table 5.7.8)
A
: for WCDMA neighbor cell measurements
(see 3GPP TS 34.121, table C.5.2, set 1)
B
: for GSM neighbor cell measurements
(see 3GPP TS 34.121, table C.5.2, set 2)
C
: to search for the BSIC and decode it
(see 3GPP TS 25.133, table 8.7, pattern 2)
D
: to track and decode the BSIC after an initial BSIC identification
(see 3GPP TS 25.133, table 8.8, pattern 2)
E
: for WCDMA neighbor cell measurements
(see 3GPP TS 34.121, table C.5.1 set 1)
F
:
*RST:
RFA
Example: 
See 
"Performing a Neighbor Cell Measurement with CM"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Single Pattern"
Top