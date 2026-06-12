# ROUTeLTESIGNiSCENario

Module: LTE Signaling
Source: 55178bdbd704410f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario?
ROUTe:LTE:SIGN<i>:SCENario? 
Returns the active scenario.
Return values: 
<Scenario>
NAV |
 
 SCEL |
 
 TRO |
 
 AD |
 
 IORI |
 
 SCF |
 
 TROF |
 
 MTF |
 
 FRO |
 
 ADF |
 
 CATR |
 
 CAFR |
 
 BF |
 
 BFSM4 |
 
 BH |
 
 CATF |
 
 CAFF |
 
 BFF |
 
 BHF |
 
 CC |
 
 CCMP |
 
 CCMS1 |
 
 CF |
 
 CH |
 
 CHSM4 |
 
 CJ |
 
 CJSM4 |
 
 CL |
 
 CFF |
 
 CHF |
 
 CJF |
 
 CJFS4 |
 
 DD |
 
 DH |
 
 DJ |
 
 DJSM4 |
 
 DL |
 
 DLSM4 |
 
 DN |
 
 DNSM4 |
 
 DP |
 
 DHF |
 
 EE |
 
 EJ |
 
 EL |
 
 ELSM4 |
 
 ET |
 
 EJF
AD
: "1CC - nx4"
ADF
: "1CC - Fading - nx4"
BF
: "2CC - nx4 nx2"
BFF
: "2CC - Fading - nx4 nx2"
BFSM4
: "2CC - nx2 nx4"
BH
: "2CC - nx4 nx4"
BHF
: "2CC - Fading - nx4 nx4"
CAFF
: "2CC - Fading - nx2 nx2"
CAFR
: "2CC - nx2 nx2"
CATF
: "2CC - Fading - 1x1 1x1"
CATR
: "2CC - 1x1 1x1"
CC
: "3CC - 1x1 1x1 1x1"
CCMP
: "3CC - nx2 1x1 1x1"
CCMS1
: "3CC - 1x1 nx2 1x1"
CF
: "3CC - nx2 nx2 nx2"
CFF
: "3CC - Fading - nx2 nx2 nx2"
CH
: "3CC - nx4 nx2 nx2"
CHF
: "3CC - Fading - nx4 nx2 nx2"
CHSM4
: "3CC - nx2 nx4 nx2"
CJ
: "3CC - nx4 nx4 nx2"
CJF
: "3CC - Fading - nx4 nx4 nx2"
CJFS4
: "3CC - Fading - nx2 nx4 nx4"
CJSM4
: "3CC - nx2 nx4 nx4"
CL
: "3CC - nx4 nx4 nx4"
DD
: "4CC - 1x1 1x1 1x1 1x1"
DH
: "4CC - nx2 nx2 nx2 nx2"
DHF
: "4CC - Fading - nx2 nx2 nx2 nx2"
DJ
: "4CC - nx4 nx2 nx2 nx2"
DJSM4
: "4CC - nx2 nx4 nx2 nx2"
DL
: "4CC - nx4 nx4 nx2 nx2"
DLSM4
: "4CC - nx2 nx4 nx4 nx2"
DN
: "4CC - nx4 nx4 nx4 nx2"
DNSM4
: "4CC - nx2 nx4 nx4 nx4"
DP
: "4CC - nx4 nx4 nx4 nx4"
EE
: "5CC - 1x1 1x1 1x1 1x1 1x1"
EJ
: "5CC - nx2 nx2 nx2 nx2 nx2"
EJF
: "5CC - Fading - nx2 nx2 nx2 nx2 nx2"
EL
: "5CC - nx4 nx2 nx2 nx2 nx2"
ELSM4
: "5CC - nx2 nx4 nx2 nx2 nx2"
ET
: "5CC - nx4 nx4 nx4 nx4 nx4"
FRO
: "1CC - External RF Fading - 4x2"
IORI
: "1CC - IQ Out, RF In - 1x1"
MTF
: "1CC - Fading - 4x2"
SCEL
: "1CC - 1x1"
SCF
: "1CC - Fading - 1x1"
TRO
: "1CC - nx2"
TROF
: "1CC - Fading - nx2"
<Fader>
EXTernal |
 
 INTernal
Only returned for fading scenarios, e.g. SCF, TROF
Indicates whether internal or external fading is active.
Usage: 
Query only
Firmware/Software: 
V2.0.10
V3.0.20: added <Fader>
V3.5.20: added scenarios CF, CFF, DD, DH, DHF
V3.7.10: added AD, ADF, BF, BFF, BFSM4, BH, BHF, CH, CHSM4, CJ, CJF, CJSM4, DJ, EE, EJ, EJF
V3.7.30: added CHF, CJFS4, CL, DJSM4, DL, DLSM4, DN, DNSM4, DP, EL, ELSM4, ET
Top