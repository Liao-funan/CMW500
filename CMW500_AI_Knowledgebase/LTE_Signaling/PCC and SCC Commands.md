# PCC and SCC Commands

Module: LTE Signaling
Source: 303fdf8a1b0b4919.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Conventions and General Information
 > 
PCC and SCC Commands
PCC and SCC Commands
For carrier aggregation scenarios, many settings are configurable per carrier. The following command variants are relevant in this context:
A 
[:PCC]
 command configures the PCC. The command can also be relevant for scenarios without carrier aggregation.
An 
:SCC<c>
 command configures the SCC number <c>. For the SCC number 1, you can omit the suffix 1.
An 
:SCC
 command configures the SCC number 1. Other SCCs cannot be configured via such a command.
A 
:SETA
 or 
:SETB
 command configures all carriers of set A or set B (intraband contiguous UL carrier allocation).
Top