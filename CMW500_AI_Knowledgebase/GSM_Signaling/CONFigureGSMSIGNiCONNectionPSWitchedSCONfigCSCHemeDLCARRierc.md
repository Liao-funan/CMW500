# CONFigureGSMSIGNiCONNectionPSWitchedSCONfigCSCHemeDLCARRierc

Module: GSM Signaling
Source: aaba700213b9424b.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Slot Configuration and Resulting Throughput
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:CSCHeme:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:CSCHeme:DL:CARRier<c> 
<CScheme>(8)
Selects the coding schemes for all downlink timeslots in the packet switched domain.
The selected values must be compatible to the configured set of modulation and coding schemes, see 
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
<CScheme>
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
 
 DA12
List of 8 coding schemes for slot 0 to 7. All 8 values must be identical.
C1 to C4
: CS-1 to CS-4
MC1 to MC9
: MCS-1 to MCS-9
DA5 to DA12
: DAS-5 to DAS-12
*RST:
MC1
Example: 
See 
"Configuring PS Connection Settings"
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS201 for DAS-i and for carrier 2
Manual operation: 
See 
"Coding Scheme"
Top