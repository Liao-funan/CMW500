# CONFigureLTESIGNiCONNection[PCC]DLEQual

Module: LTE Signaling
Source: ae423c7faaf34a6c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Scheduling Commands
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:DLEQual
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:DLEQual 
<Enable>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:DLEQual 
<Enable>
Enables or disables the coupling of all MIMO downlink streams.
When you switch on the coupling, the settings for DL stream 1 are applied to all DL streams.
With enabled coupling, commands of the format 
CONFigure:...:DL<s>...
 configure all DL streams at once, independent of the specified 
<s>
.
With disabled coupling, such commands configure a single selected DL stream 
<s>
. However, some settings are never configurable per stream and are always coupled.
Suffix: 
<c>
1..7
Parameters:
<Enable>
OFF |
 
 ON
*RST:
ON
Example: 
See 
"Configuring RMCs"
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Use Stream 1 Settings"
Top