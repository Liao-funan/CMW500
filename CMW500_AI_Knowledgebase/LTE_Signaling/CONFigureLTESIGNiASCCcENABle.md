# CONFigureLTESIGNiASCCcENABle

Module: LTE Signaling
Source: d3c7e693ca894a14.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
CONFigure:LTE:SIGN<i>:A:SCC<c>:ENABle
CONFigure:LTE:SIGN<i>:A:SCC<c>:ENABle 
<Enable>
CONFigure:LTE:SIGN<i>:B:SCC<c>:ENABle 
<Enable>
Configures whether the SCC<c> belongs to the SCC synchronization set A/B or not.
An SCC can only belong to one of the sets. Adding it to one set, removes it from the other set (if applicable).
Adding an SCC to a set is only possible, if the set and the SCC have the same state (for example "RRC added").
Suffix: 
<c>
1..4
Parameters:
<Enable>
OFF |
 
 ON
OFF
: The SCC does not belong to the set.
ON
: The SCC belongs to the set.
*RST:
OFF
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS512
Manual operation: 
See 
"Multiple SCC Actions (hotkey)"
Top