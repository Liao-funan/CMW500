# ROUTeLTESIGNi

Module: LTE Signaling
Source: c2c17ccf794b47b5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>?
ROUTe:LTE:SIGN<i>? 
Returns the configured routing settings. The parameters <Scenario> and <Controller> are always returned. From the other parameters, only the subset relevant for the active scenario is returned.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
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
Active scenario
For mapping of the values to scenario names, see 
ROUTe:
​
LTE:
​
SIGN<i>:
​
SCENario?
.
<Controller>
For future use - returned value not relevant
<RXConnector>
RF connector for the PCC input path
<RXConverter>
RX module for the PCC input path
<TXConnector1>
RF connector for output path 1
<TXConverter1>
TX module for output path 1
<TXConnector2>
RF connector for output path 2
<TXConverter2>
TX module for output path 2
<TXConnector3>
RF connector for output path 3
<TXConverter3>
TX module for output path 3
<TXConnector4>
RF connector for output path 4
<TXConverter4>
TX module for output path 4
<TXConnector5>
RF connector for output path 5
<TXConverter5>
TX module for output path 5
<TXConnector6>
RF connector for output path 6
<TXConverter6>
TX module for output path 6
<TXConnector7>
RF connector for output path 7
<TXConverter7>
TX module for output path 7
<TXConnector8>
RF connector for output path 8
<TXConverter8>
TX module for output path 8
<TXConnector9>
RF connector for output path 9
<TXConverter9>
TX module for output path 9
<TXConnector10>
RF connector for output path 10
<TXConverter10>
TX module for output path 10
<TXConnector11>
RF connector for output path 11
<TXConverter11>
TX module for output path 11
<TXConnector12>
RF connector for output path 12
<TXConverter12>
TX module for output path 12
<TXConnector13>
RF connector for output path 13
<TXConverter13>
TX module for output path 13
<TXConnector14>
RF connector for output path 14
<TXConverter14>
TX module for output path 14
<TXConnector15>
RF connector for output path 15
<TXConverter15>
TX module for output path 15
<TXConnector16>
RF connector for output path 16
<TXConverter16>
TX module for output path 16
<IQConnector1>
DIG IQ OUT connector for output path 1
<IQConnector2>
DIG IQ OUT connector for output path 2
<IQConnector3>
DIG IQ OUT connector for output path 3
<IQConnector4>
DIG IQ OUT connector for output path 4
<IQConnector5>
DIG IQ OUT connector for output path 5
<IQConnector6>
DIG IQ OUT connector for output path 6
<IQConnector7>
DIG IQ OUT connector for output path 7
<IQConnector8>
DIG IQ OUT connector for output path 8
Usage: 
Query only
Firmware/Software: 
V2.0.10, some return values and scenarios added in later versions
V3.5.20 added path 5 to 8, V3.7.10 added path 9 to 16
Top