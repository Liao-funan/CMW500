# SENSeLTESIGNiCONNectionSCCcUDCHannelsLAARBURstDLsPEPSubframesCRATe

Module: LTE Signaling
Source: bdc4cf1c7c3c436a.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:DL<s>:PEPSubframes:CRATe?
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:DL<s>:PEPSubframes:CRATe? 
<Symbols>
Queries the code rate for ending subframes with a certain partial allocation, for LAA, random bursts, scheduling type "User-defined Channels".
Suffix: 
<c>
1..4
<s>
1..2
Query parameters: 
<Symbols>
S6 |
 
 S9 |
 
 S10 |
 
 S11 |
 
 S12
Number of OFDM symbols allocated in the ending subframe
Return values: 
<CodeRate>
Range: 
0  to  10
Example: 
See 
"Configuring LAA Settings"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS510 and R&S CMW-KS514
Manual operation: 
See 
"Code Rate (...)"
Top