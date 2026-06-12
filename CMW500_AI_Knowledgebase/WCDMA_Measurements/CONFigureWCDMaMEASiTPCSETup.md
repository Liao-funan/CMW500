# CONFigureWCDMaMEASiTPCSETup

Module: WCDMA Measurements
Source: 20dfaaf653004a8c.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
UE Signal Info Settings
 > 
CONFigure:WCDMa:MEAS<i>:TPC:SETup
CONFigure:WCDMa:MEAS<i>:TPC:SETup 
<SetType>
Selects the TPC setup (expected) to be executed during the measurement.
For the combined signal path scenario, use
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
UL:
​
TPC:
​
SET
.
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
:"Max. Power E-DCH"
ULCM
: "TPC Test Step UL CM"
CTFC
: "Change of TFC"
DHIB
: "DC HSPA In-Band Emission"
*RST:
CLO
Example: 
See 
"Configuring  Measurement-Specific Settings"
Firmware/Software: 
V2.1.20
V3.0.30: added MPEDch and CTFC
V3.2.60: added ULCM
V3.2.80: added DHIB
Manual operation: 
See 
"TPC Setup"
Top