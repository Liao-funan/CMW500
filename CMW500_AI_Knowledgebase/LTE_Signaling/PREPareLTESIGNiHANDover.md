# PREPareLTESIGNiHANDover

Module: LTE Signaling
Source: 00b3b2921fa84b7d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Handover Preparation
 > 
PREPare:LTE:SIGN<i>:HANDover
PREPare:LTE:SIGN<i>:HANDover 
<Band>, <DLChannel>, <DLBandwidth>, <AddSpecEmission>
Configures the destination parameters for an intra-RAT handover within the LTE signaling application.
The duplex mode of the destination is the same as the duplex mode of the source. For a handover with duplex mode change, see 
PREPare:
​
LTE:
​
SIGN<i>:
​
HANDover:
​
ENHanced
.
Parameters:
<Band>
FDD: UDEFined |
 
 OB1 |
 
 ... |
 
 OB28 |
 
 OB30 |
 
 OB31 |
 
 OB65 |
 
 OB66 |
 
 OB68 |
 
 OB70 |
 
 OB71
TDD: UDEFined | OB33 | ... | OB45 | OB46 | OB48 | OB250
Operating band of the handover destination
<DLChannel>
DL channel number valid for the selected operating band. The related UL channel number is calculated and set automatically.
For channel numbers depending on operating bands, see 
"Operating Bands"
.
Range: 
depends on operating band
<DLBandwidth>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
DL cell bandwidth (also used for UL)
1.4 MHz, 3 MHz, 5 MHz, 10 MHz, 15 MHz, 20 MHz
*RST:
B100
<AddSpecEmission>
NS01 |
 
 ... |
 
 NS32
Value signaled to the UE as additional ACLR and spectrum emission requirement
*RST:
NS01
Example: 
See 
"Performing an Intra-RAT Handover"
Firmware/Software: 
V3.0.10, some bands added in later versions
V3.2.70: NS16 to NS18, NS20
V3.2.82: NS19, NS21 to NS24
V3.7.20: NS25 to NS32
Options: 
R&S CMW-KS525 for UDEFined, OB250
Manual operation: 
See 
"Destination Parameters"
Top