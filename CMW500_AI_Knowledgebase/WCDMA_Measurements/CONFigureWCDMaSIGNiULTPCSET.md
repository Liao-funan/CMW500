# CONFigureWCDMaSIGNiULTPCSET

Module: WCDMA Measurements
Source: 92fa63fae0df47aa.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for TPC Measurement
 > 
CONFigure:WCDMa:SIGN<i>:UL:TPC:SET
CONFigure:WCDMa:SIGN<i>:UL:TPC:SET 
<SetType>
Selects the active TPC setup. A query returns also properties of the active setup.
Parameters:
<SetType>
CLOop |
 
 ALTernating |
 
 ALL1 |
 
 ALL0 |
 
 SALT |
 
 SAL1 |
 
 SAL0 |
 
 CONTinuous |
 
 TSE |
 
 TSF |
 
 PHUP |
 
 PHDown |
 
 TSABc |
 
 TSEF |
 
 TSGH |
 
 MPEDch |
 
 ULCM |
 
 CTFC |
 
 DHIB
CLOop
: "Closed Loop"
ALTernating
: "Alternating"
ALL1
: "All 1"
ALL0
: "All 0"
SALT
: "Single Pattern + Alternating"
SAL1
: "Single Pattern + All 1"
SAL0
: "Single Pattern + All 0"
CONTinuous
: "Continuous Pattern"
TSE
: "TPC Test Step E"
TSF
: "TPC Test Step F"
PHUP
: "Phase Discontinuity Up"
PHDown
: "Phase Discontinuity Down"
TSABc
: "TPC Test Step ABC"
TSEF
: "TPC Test Step EF"
TSGH
: "TPC Test Step GH"
MPEDch
: "Max. Power E-DCH"
ULCM
: "TPC Test Step UL CM"
CTFC
: "Change of TFC"
DHIB
: "DC HSPA In-Band Emission"
*RST:
CLO
Return values: 
<PreCondition>
NONE |
 
 ALTernating |
 
 MAXPower |
 
 MINPower |
 
 TPOWer
Precondition of the active setup: none, alternating up and down, maximum, minimum or target power.
<PConfig>
Active setup configuration information. The content depends on the setup type:
- closed loop: target power in dBm
- single and continuous patterns: user-defined pattern
- phase discontinuity: number of repetitions
- test step EF, GH: number of 0 bits
- DC HSPA in-band emission: pattern selection for the carrier one and two and number of selected bits
- others: presentation of the fixed pattern
<Trigger>
ONCE |
 
 PERiodic
Type of generated trigger signal.
Firmware/Software: 
V1.0.15.0
V2.1.20: setups TSABc, TSEF, TSGH
V3.0.30: setups MPEDch, CTFC
V3.2.60: setup ULCM
V3.2.80: setup DHIB
Options: 
R&S CMW-KS401 for MPEDch
R&S CMW-KS410 for CTFC, ULCM
R&S CMW-KS405 for DHIB
Manual operation: 
See 
"TPC Setup"
Top