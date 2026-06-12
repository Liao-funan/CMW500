# PREPareGSMSIGNiHANDoverPSWitchedCSCHemeUL

Module: GSM Signaling
Source: b72411ebeda44f2e.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
Intra-GSM Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:PSWitched:CSCHeme:UL
PREPare:GSM:SIGN<i>:HANDover:PSWitched:CSCHeme:UL 
<CodingScheme>
Specifies the coding scheme for all uplink timeslots in the destination GSM band (packet switched domain, one value).
The selected values must be compatible to the configured TBF level, see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
PSWitched:
​
TLEVel
.
Parameters:
<CodingScheme>
C1 |
 
 C2 |
 
 C3 |
 
 C4 |
 
 MC1 |
 
 MC2 |
 
 MC3 |
 
 MC4 |
 
 MC5 |
 
 MC6 |
 
 MC7 |
 
 MC8 |
 
 MC9 |
 
 UA7 |
 
 UA8 |
 
 UA9 |
 
 UA10 |
 
 UA11 |
 
 ON |
 
 OFF
Coding scheme for all UL slots
C1 to C4
: CS-1 to CS-4
MC1 to MC9
: MCS-1 to MCS-9
UA7 to UA11
: UAS-7 to UAS-9
OFF (ON)
 disables (enables) the coding scheme
*RST:
MC1
Example: 
See 
"Performing an Intra-GSM PS Handover"
Firmware/Software: 
V2.1.25
Options: 
R&S CMW-KS201 for UAS-i
Manual operation: 
See 
"PS: Destination Parameters"
Top