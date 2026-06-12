# CONFigureDATAMEASiQOSFILTerIndexSRCPrange

Module: Data Application Unit
Source: e8f4c68045414598.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Quality-of-Service Settings
 > 
CONFigure:DATA:MEAS<i>:QOS:FILTer<Index>:SRCPrange
CONFigure:DATA:MEAS<i>:QOS:FILTer<Index>:SRCPrange 
<StartPort>, <EndPort>
Specifies a source port range as filter criterion for IP packets.
To disable source port filtering, set both values to zero.
Suffix: 
<Index>
1..15
Selects the QoS profile
Parameters:
<StartPort>
Range: 
0  to  65535
*RST:
0
<EndPort>
Range: 
0  to  65535
*RST:
0
Example: 
See 
"Configuring QoS Profiles"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Src Port Range / Dst Port Range"
Top