# PREPareGSMSIGNiHANDoverPSWitchedCSCHemeDLCARRierc

Module: GSM Signaling
Source: dce8f62b982740d0.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
Intra-GSM Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:PSWitched:CSCHeme:DL:CARRier<c>
PREPare:GSM:SIGN<i>:HANDover:PSWitched:CSCHeme:DL:CARRier<c> 
<CodingScheme>(8)
Selects the coding schemes for all downlink timeslots in the destination GSM band (packet switched domain).
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
In the current software version, the same value applies to all downlink slots and to both carriers. You cannot set different values.
Suffix: 
<c>
1..2
Selects the carrier in dual carrier mode. For disabled dual carrier mode, the suffix must be omitted or set to 1.
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
 
 DA5 |
 
 DA6 |
 
 DA7 |
 
 DA8 |
 
 DA9 |
 
 DA10 |
 
 DA11 |
 
 DA12 |
 
 ON |
 
 OFF
List of 8 coding schemes for slot 0 to 7. All 8 values must be identical.
C1 to C4
: CS-1 to CS-4
MC1 to MC9
: MCS-1 to MCS-9
DA5 to DA12
: DAS-5 to DAS-12
OFF (ON)
 disables (enables) the coding scheme
*RST:
MC1
Example: 
See 
"Performing an Intra-GSM PS Handover"
Firmware/Software: 
V2.1.10
Options: 
R&S CMW-KS201 for DAS-i and for carrier 2
Manual operation: 
See 
"PS: Destination Parameters"
Top