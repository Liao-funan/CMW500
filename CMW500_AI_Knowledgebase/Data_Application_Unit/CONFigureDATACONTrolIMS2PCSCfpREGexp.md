# CONFigureDATACONTrolIMS2PCSCfpREGexp

Module: Data Application Unit
Source: 18c6131576e44bc9.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
P-CSCF Settings
 > 
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:REGexp
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:REGexp 
<RegExpMin>, <RegExpDefault>, <RegExpMax>
Defines registration expiration times for the P-CSCF number <p>.
Suffix: 
<p>
1..10
Parameters:
<RegExpMin>
Minimum acceptable expiration time
*RST:
1 s
Default unit: 
s
<RegExpDefault>
Default value, used if the DUT does not suggest an expiration time
*RST:
3600 s
Default unit: 
s
<RegExpMax>
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
"Registration"
Top