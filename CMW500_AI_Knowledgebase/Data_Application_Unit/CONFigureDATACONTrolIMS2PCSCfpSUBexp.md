# CONFigureDATACONTrolIMS2PCSCfpSUBexp

Module: Data Application Unit
Source: 88bc255eea4d48fa.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
P-CSCF Settings
 > 
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:SUBexp
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:SUBexp 
<SubsExpMin>, <SubsExpDefault>, <SubsExpMax>
Defines subscription expiration times for the P-CSCF number <p>.
Suffix: 
<p>
1..10
Parameters:
<SubsExpMin>
Minimum acceptable expiration time
*RST:
1 s
Default unit: 
s
<SubsExpDefault>
Default value, used if the DUT does not suggest an expiration time
*RST:
3600 s
Default unit: 
s
<SubsExpMax>
Maximum acceptable expiration time
*RST:
600E+3 s
Default unit: 
s
Example: 
See 
"Configuring P-CSCF profiles"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Subscription"
Top